import axios from "axios"

// ------------------------------------------------------------

// let graphqlserver = "https://8t8jt.sse.codesandbox.io/gql"
let graphqlserver = "https://smxai.net/graphqleai2"
let graphqlserverb = "https://smxblogs.com/aprendeacomer/graphql"


let usedata = function(StateContextM) {

  return {

    Clientes: function() {
      return {
        get: async function(e) {
         
          var axdata = await axios({
            url: graphqlserver,
            method: "post",
            data: {
              query: `
                query getClientes($Query: ClienteInput) {
                  Clientes {
                    Consultas {
                      Query(Query: $Query) {
                        Id
                        Empresa
                        Telefono
                        Nombre
                      }
                    }
                  }
                }
               `,
              variables: {
                Query: {
                  Telefono: e.Telefono,
                  Empresa: e.Empresa
                }
              }
            }
          });
    
          let axdataRes = axdata.data.data.Clientes.Consultas.Query;

          if (axdataRes) {return axdataRes} else {return 0}
        },

        getId: async function(e) {
         
          var axdata = await axios({
            url: graphqlserver,
            method: "post",
            data: {
              query: `
                query getClientes($Query: ClienteInput) {
                  Clientes {
                    Consultas {
                      Query(Query: $Query) {
                        Id
                        Empresa
                        Telefono
                        Nombre
                        ApellidoPat
                        Genero
                        Nacimiento
                        Email
                        Obv
                      }
                    }
                  }
                }
               `,
              variables: {
                Query: {
                  Id: e.Id,
                }
              }
            }
          });
    
          let axdataRes = axdata.data.data.Clientes.Consultas.Query;

          if (axdataRes) {return axdataRes} else {return 0}
        },



        

        insert: async function(e) {
         
          var axdata = await axios({
            url: graphqlserver,
            method: "post",
            data: {
              query: `
                mutation insertCliente($Query: ClienteInput) {
                  ClientesM {
                    Registro {
                      InsertCliente(Query: $Query)
                    }
                  }
                }
               `,
              variables: {
                Query: {
                  Origen: e.Origen,
                  Nombre: e.Nombre,
                  ApellidoPat: e.ApellidoPat,
                  NombreCompleto: e.NombreCompleto,
                  Telefono: e.Telefono,
                  Pass: e.Pass,
                  Empresa: e.Empresa,
                  Email: e.Mail,
                  Obv: e.Obv
                }
              }
            }
          });
    
          let axdataRes = axdata.data.data.ClientesM.Registro.InsertCliente;

          if (axdataRes>0) {return axdataRes} else {return 0}
        },

      }
    },





    }

  }
  
  
  export default usedata
  
  