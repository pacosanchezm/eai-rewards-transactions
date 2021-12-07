import axios from "axios"

// ------------------------------------------------------------

 // let graphqlserver = "https://8t8jt.sse.codesandbox.io/gql"
  let graphqlserver = "https://smxai.net/graphqleai2"


//let graphqlserverb = "https://smxblogs.com/aprendeacomer/graphql"
let graphqlserverb = "https://smxblogs.com/empresando/graphql"




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



        pull4: async function(e) {
          console.log({e})
          var axdata = await axios({
            url: graphqlserver,
            method: "post",
            data: {
              query: `
                mutation PullCliente ($Query: ClienteInput ) {
                  ClientesM {
                    Yield {
                      Cliente (Query: $Query)  {
                        Id
                        Nombre
                        ApellidoPat
                      }
                    }
                  }
                }
               `,
              variables: {
                Query: {
                  Empresa: e.Empresa,
                  Telefono: e.Telefono,
                  Nombre: String(e.Nombre),
                  ApellidoPat: String(e.Apellido),
                  Email: String(e.Email.replace(/\s+/g, '')),
                }
              }
            }
          });

          let axdataRes = axdata.data.data.ClientesM.Yield.Cliente
          if (axdataRes) { return axdataRes } else {return 0}

        },




      }
    }, // Clientes


        ClientesProf: function() {
          return {
            add: async function(e, Cliente) {
                
              var axdata = await axios({
                url: graphqlserver,
                method: "post",
                data: {
                  query: `
                    mutation Insert($Query: ClienteProfInput) {
                      ClientesM {
                        Profs {
                          Insert(Query: $Query)
                        }
                      }
                    }
                  `,
                  variables: {
                    Query: {
                      "Cliente": Cliente,
                      "Titulo": e.Titulo,
                      "Web": e.Web,
                      "Categoria": e.Categoria,
                      "Descripcion": e.Descripcion,
                      "Empleados": e.Empleados,
                      "Estado": e.Estado,
                      "Referencia1": String(e.Referencia1),
                      "Referencia2": String(e.Referencia2),
                      "Referencia3": String(e.Referencia3),
                      // "Obv": e.Obv,

                    }
                  }
                }
              });

              let axdataRes = axdata.data.data.ClientesM.Profs.Insert
              if (axdataRes) { return axdataRes } else return 0
            },

          }
        }, // ClientesProf

      }

    }
    
    
    export default usedata
    









