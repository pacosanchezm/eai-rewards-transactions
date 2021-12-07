import React, { useState, useEffect, useContext, createContext, Suspense } from "react"
import axios from "axios"

// ---------- styles
import 'bootstrap/dist/css/bootstrap.min.css'

/** @jsxRuntime classic */
/** @jsx jsx */

import { ThemeProvider, jsx, Styled, useThemeUI, MenuButton } from "theme-ui"
import { Grid, Flex, Box, Button, Text, Image, Spinner, Input } from "@theme-ui/components"

import Theme from "./theme"
import "@babel/polyfill"
import "./styles.css"

// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'

import { Container, Col, Row } from 'react-bootstrap';



import { useMediaQuery } from 'react-responsive'
import {Helmet} from "react-helmet"

// ---- modulos

import Head from "./head"
import usedata from "./usedata"
import Menu from "./smx-menu/menu"
import SideBar from "./smx-menu/sidebar"
import FormData from "./smx-form-data/appi"




let App;
const StateContext = createContext();

// -------------------------------------- Variables

let server = "https://www.empresando.com"


let MiDetalle = {
  Empresa: 4,
  Id: ["0"],
  Codigo: [""],
  Fecha: [""],
  Ciudad: "",

  // Nombre: "Emilio",
  // Apellido: "test",
  // Telefono: "4772740041",
  // Email: "emiliotest@gmail.com",

  Nombre: "",
  Apellido: "",
  Telefono: "",
  Email: "",

  TipoEntrega: [""],
  Confirmado: [""],

  Sucursal: [""],
  Cliente: null,
  Cuenta: [""],
  Monto: [""],
  Obv: [""],

  Cupon: [""],

  // Titulo: "Aprende a Comer",
  // Web: "aprendeacomer.org",

  Titulo: "",
  Web: "",


  Categoria: "",
  Estado: "",
  Empleados: "",

  Referencia1: "",
  Referencia2: "",
  Referencia3: "",

  Descripcion: "  ",





}

let MiRegistro = {
  "id": 0,
}



const Categorias = [
  { value: "Accesorios y ropa", label: "Accesorios y ropa" },
  { value: "Alimentos", label: "Alimentos" },
  { value: "Arte", label: "Arte" },
  { value: "Artesanía", label: "Artesanía" },
  { value: "Bebidas", label: "Bebidas" },
  { value: "Belleza y salud", label: "Belleza y salud" },
  { value: "Cine", label: "Cine" },
  { value: "Cocina", label: "Cocina" },
  { value: "Decoración", label: "Decoración" },
  { value: "Desarrollo sostenible", label: "Desarrollo sostenible" },
  { value: "Diseño de interiores", label: "Diseño de interiores" },
  { value: "Emprendimiento ecológico", label: "Emprendimiento ecológico" },
  { value: "Emprendimiento para eventos", label: "Emprendimiento para eventos" },
  { value: "Entretenimiento", label: "Entretenimiento" },
  { value: "Joyería", label: "Joyería" },
  { value: "Libros", label: "Libros" },
  { value: "Mascotas", label: "Mascotas" },
  { value: "Negocios", label: "Negocios" },
  { value: "Productos para bebé", label: "Productos para bebé" },
  { value: "Productos saludables", label: "Productos saludables" },
  { value: "Regalos", label: "Regalos" },
  { value: "Repostería", label: "Repostería" },
  { value: "Responsabilidad social", label: "Responsabilidad social" },
  { value: "Tecnología y plataformas", label: "Tecnología y plataformas" },
  { value: "Otros", label: "Otros" },
]





const Estados = [
  { value: "Aguascalientes", label: "Aguascalientes" },
  { value: "Baja California", label: "Baja California" },
  { value: "Baja California Sur", label: "Baja California Sur" },
  { value: "Campeche", label: "Campeche" },
  { value: "Chiapas", label: "Chiapas" },
  { value: "Chihuahua", label: "Chihuahua" },
  { value: "Coahuila", label: "Coahuila" },
  { value: "Ciudad de México", label: "Ciudad de México" },
  { value: "Colima", label: "Colima" },
  { value: "Durango", label: "Durango" },
  { value: "Estado de México", label: "Estado de México" },
  { value: "Guanajuato", label: "Guanajuato" },
  { value: "Guerrero", label: "Guerrero" },
  { value: "Hidalgo", label: "Hidalgo" },
  { value: "Jalisco", label: "Jalisco" },
  { value: "Michoacán", label: "Michoacán" },
  { value: "Morelos", label: "Morelos" },
  { value: "Nayarit", label: "Nayarit" },
  { value: "Nuevo León", label: "Nuevo León" },
  { value: "Oaxaca", label: "Oaxaca" },
  { value: "Puebla", label: "Puebla" },
  { value: "Querétaro", label: "Querétaro" },
  { value: "Quintana Roo", label: "Quintana Roo" },
  { value: "San Luis Potosí", label: "San Luis Potosí" },
  { value: "Sinaloa", label: "Sinaloa" },
  { value: "Sonora", label: "Sonora" },
  { value: "Tabasco", label: "Tabasco" },
  { value: "Tamaulipas", label: "Tamaulipas" },
  { value: "Tlaxcala", label: "Tlaxcala" },
  { value: "Veracruz", label: "Veracruz" },
  { value: "Yucatán", label: "Yucatán" },
  { value: "Zacatecas", label: "Zacatecas" },
]




const Empleados = [
  { value: "1 a 10", label: "1 a 10" },
  { value: "11 a 20", label: "11 a 20" },
  { value: "21 a 50", label: "21 a 50" },
  { value: "más de 50", label: "más de 50" },

]









// -------------------------------------- States


const useStateUniv = () => {
  return {
    Theme: useState(useContext(createContext(Theme))),
    LoadingSecc1: useState(useContext(createContext(false))),
    Empresa: useState(useContext(createContext(1))),

    Menu: {
      onMenu: useState(useContext(createContext(false))),
      Selected: useState(useContext(createContext(0))),
    },

    User: {
      Id: useState(useContext(createContext(null))),
      Name: useState(useContext(createContext(null))),
      Sucursal: useState(useContext(createContext(0))),
      LoginName: useState(useContext(createContext(""))),
      LoginPass: useState(useContext(createContext(""))),
      Status: useState(useContext(createContext(""))),
    },

    Signup: {
      Id: useState(useContext(createContext(null))),
      Name: useState(useContext(createContext(null))),
      LoginName: useState(useContext(createContext(""))),
      LoginPass: useState(useContext(createContext(""))),
    },

    Images: {
      Logo1: useState(useContext(createContext({src: "https://smxblogs.com/empresando/wp-content/empresando/logoemp.png"}))),
      Logo2: useState(useContext(createContext({src: "https://smxai.net/sf/sflogo2.jpg"}))),
      Flechad: useState(useContext(createContext({src: "https://smxai.net/sf/cs1/arrowd1.png"}))),
      Flechau: useState(useContext(createContext({src: "https://smxai.net/sf/cs1/arrowu1.png"}))),
      Ayuda: useState(useContext(createContext({src: "https://smxai.net/sf/cs1/ayuda.jpg"}))),
      Icon1: useState(useContext(createContext({src: "https://smxblogs.com/empresando/wp-content/empresando/avatar.png"}))),
      Iconfb: useState(useContext(createContext({src: "https://smxblogs.com/empresando/wp-content/empresando/avatar.png"}))),
      Iconig: useState(useContext(createContext({src: "https://smxblogs.com/empresando/wp-content/empresando/avatar.png"}))),
    },

    Loading: {
      DataMain: useState(useContext(createContext(false))),
      Page: useState(useContext(createContext(false))),
      Info: useState(useContext(createContext(false))),
    },

    Extend: {
      Page: useState(useContext(createContext(true))),
      FormData: useState(useContext(createContext(true))),
    },

    Registros: useState(useContext(createContext([]))),
    Registro: useState(useContext(createContext(MiRegistro))),
    Pagina: useState(useContext(createContext({}))),

    Categorias: useState(useContext(createContext(Categorias))),
    Estados: useState(useContext(createContext(Estados))),
    Empleados: useState(useContext(createContext(Empleados))),


    Aceptado: useState(useContext(createContext(false))),

    Inscrito: useState(useContext(createContext(false))),
    Registrado: useState(useContext(createContext(false))),

    Detalle: useState(useContext(createContext(MiDetalle))),
    Editado: useState(useContext(createContext(false))),

  };
};

// ------------------

const ContextProvider = ({ children }) => {
  return (
    <StateContext.Provider value={useStateUniv()}>
      <ThemeProvider theme={Theme}>{children}</ThemeProvider>
    </StateContext.Provider>
  )
}

// --------------------------------------------------------------------------

let useStatus = function(StateContextM) {

  const [Registro, setRegistro] = useContext(StateContext).Registro
  const [Registros, setRegistros] = useContext(StateContext).Registros

  const [ExtendFormData, setExtendFormData] = useContext(StateContext).Extend.FormData
  const [Registrado, setRegistrado] = useContext(StateContext).Registrado

  const [ExtendPage, setExtendPage] = useContext(StateContext).Extend.Page



  return {

    cover: function() { return 1 },

    page: function() {
      if (ExtendPage) {
        if (Registro.id) {return 1}
      }
      return 0
    },

    form: function() {

      if (ExtendFormData) {
        if (Registrado){return 2}
        return 1
      }

      return 0
    },

  }
}

// --------------------------------------------------------------------------


let useAcciones = function(StateContext) {
  const [LoadingDataMain, setLoadingDataMain] = useContext(StateContext).Loading.DataMain

  const useData = new usedata()


  const [Registro, setRegistro] = useContext(StateContext).Registro
  const [Registros, setRegistros] = useContext(StateContext).Registros
  const [Pagina, setPagina] = useContext(StateContext).Pagina

  const [Inscrito, setInscrito] = useContext(StateContext).Inscrito
  const [Registrado, setRegistrado] = useContext(StateContext).Registrado

  const [Editado, setEditado] = useContext(StateContext).Editado

  const [Detalle, setDetalle] = useContext(StateContext).Detalle




  return {

  //   getUser : async (props) => {
  //    try {
  //      const res = await axios.get(server + '/logindata')
  //      setUserId(res.data.miid)
  //      setUserName(res.data.miuser)
  //      setSucursal(res.data.misucursal)

  //      // Todo: Como jalar el req y el t?
  //    } catch (e) { console.error(e) }
  //  },

    Loader : async function (props) {

      // this.getUser()
      setLoadingDataMain(true)
      setLoadingDataMain(false)

    },


    // Logger : async function (props) {
    //   let axapi = await axios({
    //     method: "get",
    //     headers: { 'Access-Control-Allow-Origin': '*'},
    //     url: "/loginp",
    //     baseURL: server,
    //     params: {
    //       username: LoginName,
    //       password: LoginPass,
    //     }
    //   })

    //   if(axapi.data._id) {
    //   await setUserId(axapi.data._id)
    //   await setUserName(axapi.data.username)

    //   } else {
    //     setStatus("Usuario o pass incorrectos")
    //   }

    // },



    // Logger2 : async function (e) {
    //   let axapi = await axios({
    //     method: "get",
    //     headers: { 'Access-Control-Allow-Origin': '*'},
    //     url: "/loginp",
    //     baseURL: server,
    //     params: {
    //       username: e.Tel,
    //       password: e.Pass,
    //     }
    //   })

    //   if(axapi.data._id) {
    //   await setUserId(axapi.data._id)
    //   await setUserName(axapi.data.username)

    //   } else {
    //     setStatus("Usuario o pass incorrectos")
    //   }

    // },

    // Logout : async function (props) {
    //   let axapi = await axios({
    //     method: "get",
    //     headers: { 'Access-Control-Allow-Origin': '*'},
    //     url: "/logout",
    //     baseURL: server,
    //   });

    //   await setUserId(null)
    //   await setUserName("")
    // },




    useChange : (Field, setField) => {
      return {
        name: Field,
        value: Field,
        fontSize: 1,
        color: "#595959",
        bg: "#DCDCDC",
        onChange: e => {
          setField(e.target.value);
        }
      }
    },

    useChangeArray : (MiArray, Field, setField) => {
      return {
        name: Field,
        value: MiArray[Field],
    
        onChange: e => {
          setField({ ...MiArray, [Field]: e.target.value });
          setEditado(true);
        }
      }
    },
    
    
    useChangeBooleanArray : (MiArray, Field, setField) => {
      return {
        name: Field,
        value: MiArray[Field],
    
        onClick: e => {
          setField({ ...MiArray, [Field]: !MiArray[Field] });
          setEditado(true);
        }
      }
    },


    useChangeBoolean : (Field, setField) => {
      return {
        name: Field,
        value: Field,
    
        onClick: e => {
          setField(!Field)
          setEditado(true)
        }
      }
    },








    InfoAdd : async function (e) {
      try{

        let MiCliente = await useData.Clientes().pull4(Detalle) 
        console.log({MiCliente: MiCliente})
        await setDetalle({ ...Detalle, "Cliente": MiCliente.Id })

        let MiClienteProf = await useData.ClientesProf().add(Detalle, MiCliente.Id) 
        console.log({MiClienteProf: MiClienteProf})
        if (MiClienteProf>1) {setRegistrado(true)}


        return 1

      } catch (e) { console.error(e)
        return 0
      }
    },










  }
}


// -----------------------------------------------------------------------------

const HeaderBody = props => {

  const useacciones = new useAcciones(StateContext)

// ------------

  useEffect(() => {useacciones.Loader(props) }, [])

// ------------
  try {
    return (
      <Flex sx={{width: "100%" }}>

        <Box sx={{ width: "100%" }}>

          <Head sx={{width: "100%" }}
            useContext={useContext(StateContext)}
            useAcciones = {useacciones}
          />

        </Box>

      </Flex>
    )
  } catch (e) {
    console.error(e);
  }
}

// -----------------------------------------------------------------------------


const Body = props => {

  const useacciones = new useAcciones(StateContext)

// ------------

  useEffect(() => {useacciones.Loader(props) }, [])

// ------------
    try {
      return (

        <Container>

          <Helmet>
            <meta charSet="utf-8" />
            <title>Compártenos tu historia - empresando</title>
            {/* <link rel="canonical" href="http://mysite.com/example" /> */}
            <meta property="og:title" content="Compártenos tu historia - empresando" />
            <meta property="og:description" content="¿Te gustaría compartir tu historia de emprendimiento con nuestra comunidad?" />
            <meta property="og:image" content="https://smxblogs.com/empresando/wp-content/empresando/logoemp.png" />
          </Helmet>

        

          <FormData
            Theme={Theme}
            useAcciones={useacciones}
            useContext={useContext(StateContext)}
            CompStatus={useStatus(StateContext)}
          />

        </Container>

      )
    } catch (e) {
      console.error(e);
    }
  }
  
  // -----------------------------------------------------------------------------

  const MenuBody = props => {
    const Estilo = useThemeUI().theme.styles;
    const useacciones = new useAcciones(StateContext)
  
    try {
    
      return (
        <Flex sx={{width: "100%" }}>
            <Box sx={{ width: "100%" }}>
              <Menu 
              useContext={useContext(StateContext)}
              useAcciones = {useacciones}
              />
            </Box>
        </Flex>
      )
  
    } catch (e) {console.error(e)}
  }
    
  // -----------------------------------------------------------------------------
  
  const Pie = props => {
    const Estilo = useThemeUI().theme.styles;
    // const { getRegistros, getDetalle } = useData();
  
    const useacciones = new useAcciones(StateContext)
  
    try {
      return (
        <div>
          <Flex
          
            sx={{
              p: 1,
              bg: "gray",
              fontWeight: "normal",
              fontSize: 3,
              color: "#FFFFFF",
              fontFamily: "body",
              width: "100%"
            }}
          >
  
          </Flex>
  
          <Flex>
            <Box sx={{ width: "100%" }}>
              <Text sx={Estilo.h2}>
                2021 empresando.com
              </Text>
            </Box>
          </Flex>
        </div>
      );
    } catch (e) {
      console.error(e);
    }
  }



// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------


export default (App = props => {

  const isDesktop = useMediaQuery({ minWidth: 550 })

  return (

      <div id="App">

        {isDesktop ? <div/>
          :  <div>
              <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
            </div>                 
        }


        <div id="page-wrap">

          <div style={{display: 'flex'}}
          >
              <ContextProvider>

                <Flex bg="white"
                  sx={{
                    flexDirection: "column",
                    width: "100%",
                    //minHeight: '300vh',
                    //justifyContent: 'center'
                  }}
                 // css={{ maxWidth: "768px", minWidth: "410px" }}

                >
                  <header sx={{width: "100%"}}>
                    <HeaderBody {...props} />

                    {isDesktop ? 
                        <div>
                          <MenuBody {...props} />
                        </div>                 
                      : <div/>
                    }

                  </header>

                  <main>
                    <Body {...props} />
                  </main>


                  <footer sx={{width: "100%"}}>
                    <div
                      sx={{
                        display: "block",
                        padding: "10px",
                        paddingLeft: "10px",
                        height: "40px",
                        width: "100%"
                      }}
                    />

                    <div
                      style={{
                        backgroundColor: "gray",
                        fontSize: "20px",
                        color: "white",
                        borderTop: "1px solid #E7E7E7",
                        textAlign: "left",
                        paddingLeft: "20px",
                        position: "fixed",
                        left: "0",
                        bottom: "0",
                        height: "50px",
                        width: "100%"
                      }}
                    >
                      <Pie {...props} />
                    </div>
                  </footer>


                </Flex>

              </ContextProvider>
          </div>

        </div>
      </div>


  );
});

// -------------------------------------------------------------------------------



