import React, { useState, useEffect, useContext, createContext, Suspense } from "react"
// import moment from "moment";

import 'bootstrap/dist/css/bootstrap.min.css'

/** @jsxRuntime classic */
import { ThemeProvider, jsx, Styled, useThemeUI } from "theme-ui"
import { Flex, Box, Button, Text, Textarea, Image, Spinner, Grid, Input, Checkbox, Link } from "@theme-ui/components"
import { Container, Col, Row } from 'react-bootstrap'

 import Dropbox from "react-select"
// import {filtro2} from "./select"



let App

// ---------------------------------------------------------------------
// ---------------------------------------------------------------------


const DropboxFiltro1= {
  container: (base, state) => ({
    ...base,
    border: state.isFocused ? null : null
  }),
  control: (base, state) => ({
    ...base,
    background: "lightgrey",
    fontFamily: "Arial",
    fontSize: 12
  }),
  menu: base => ({
    ...base,
    fontFamily: "Arial"
  }),

  singleValue: base => ({
    ...base,
    color: "slategrey"
  }),

  valueContainer: (base, state) => ({
    ...base,
    background: "lightgrey",
    color: "red"
  }),
  multiValue: (base, state) => ({
    ...base,
    background: "lightYellow",
    maxWidth: "100px"
  })
}

// ---------------------------------------------------------------------
// ---------------------------------------------------------------------






const Body = props => {
  const Estilo = useThemeUI().theme.styles
  const [Loading, setLoading] = props.useContextLocal.Loading.DataMain
  const [LoadingSecc, setLoadingSecc] = props.useContextLocal.Loading.DataMain

  const [Registro, setRegistro] = props.useContext.Registro
  const [Registros, setRegistros] = props.useContext.Registros

  const Images = props.useContext.Images

  const [Detalle, setDetalle] = props.useContext.Detalle;
  const [Editado, setEditado] = props.useContext.Editado;
  const [Aceptado, setAceptado] = props.useContext.Aceptado;

  const {useChangeArray, useChangeBooleanArray, useChangeBoolean} = props.useAcciones

  let AAbonar = Math.floor((Detalle.Nivel / 100) * Detalle.Importe)




  const MiSaldo = () => Registros.reduce((a, b) => a + Number((b.Puntos)), 0)




// ----------------------------------

useEffect(() => {
 // props.useAcciones.getPage({id:props.pageid})
}, [])

const ColorBotonV = function(props) {
  if(Detalle.Enlace && Detalle.Codigo){
    return "#B7CE3F"

  }
}

const EnableBotonV = function(props) {

  if(Detalle.Enlace && Detalle.Codigo){

    return false

  } 

  return true
}










const ColorBoton = function(props) {
  if(Detalle.EnlaceId && Detalle.Folio && Detalle.Importe){

    // if(Detalle.Email.lastIndexOf('@')>0){
    //   if(Detalle.Email.lastIndexOf('.')>0){
    //     if(Aceptado){
    //       return "#B7CE3F"
    //     }
    //   } 
    // }    

    return "#B7CE3F"

  }
}

const EnableBoton = function(props) {

  // if(LoadingSecc) {return false}

  if(Detalle.EnlaceId && Detalle.Folio && Detalle.Importe){
    // if(Detalle.Email.lastIndexOf('@')>0){
    //   if(Detalle.Email.lastIndexOf('.')>0){
    //       if(Aceptado){
    //         return false
    //       }

    //   } 
    // }      

    return false

  } 

  return true
  
}




const ModuloLog  = () => {
  // console.log({Images})
   return (
     <div>
       <Flex sx={{ width: "100%" }}>
         <Box
           //bg="primary"
           sx={{
             fontWeight: "normal",
             fontSize: 1,
             color: "text",
             fontFamily: "body",
             width: "100%"
           }}
         >
 

          <Flex sx={{ width: "100%" }}>
              <Row>
                <Text sx={{...Estilo.msecc2, textAlign: "left"}}>{"Por favor cierra esta pestaña e inicia sesión"}</Text>
              </Row>
          </Flex>

          <Box css={{ height: 21 }} />

          <Row>
            <Text sx={Estilo.msecc2}>{"Enlace Gourmet"}</Text>
            <Text sx={Estilo.msecc1}>{""}</Text>

          </Row>



          <Box css={{ height: 21 }} />


         </Box>
       </Flex>
     </div>
   )
 }
 
 // ----------------------------------






const ModuloSimple  = () => {
  // console.log({Images})
   return (
     <div>
       <Flex sx={{ width: "100%" }}>
         <Box
           //bg="primary"
           sx={{
             fontWeight: "normal",
             fontSize: 1,
             color: "text",
             fontFamily: "body",
             width: "100%"
           }}
         >
 

          <Flex sx={{ width: "100%" }}>
              <Row>
                <Text sx={{...Estilo.msecc2, textAlign: "left"}}>{"La operación se realizó con éxito"}</Text>
              </Row>
          </Flex>

          <Box css={{ height: 21 }} />

          <Row>
            <Text sx={Estilo.msecc2}>{"Enlace Gourmet"}</Text>
            <Text sx={Estilo.msecc1}>{""}</Text>

          </Row>



          <Box css={{ height: 21 }} />


          <Container fluid >
            <Row style={{marginBottom: "10px"}}>
            <Col xs={2}/> 

              <Col xs={8}> 
                <Button sx={{ width: "100%", height: "34px" }}
                  width={1}
                  bg={"gray"}
                  // disabled={EnableBoton()}
                  onClick={async () => {
                    location.reload()
                  }}
                >
                  <Text sx={Estilo.mbtn1}>
                    Registrar Otra Visita
                    {LoadingSecc ? <Spinner size={17} ml={0} /> : <div/>}
                  </Text>

                </Button>
              </Col>

            </Row>

          </Container>


         </Box>
       </Flex>
     </div>
   )
 }
 
 // ----------------------------------
 


 const ModuloEdit  = () => {
  //console.log(props)
    return (


    <Container 
      style={{ maxWidth: "987px"}}
    >


    <Container fluid>


    {/* <Image sx={{ height: 222,  }} src={Images.Logo1}/> */}

    <Box sx={{ height: 13,  }} />


      <Row>
      <Col xs={2}> </Col>
        <Col xs={8}> <Text sx={Estilo.p2s} style={{color: "gray"}}>{"Abono de puntos por visita"}</Text></Col>
      </Row>


      {/* <Row>
        <Text sx={Estilo.msecc2}>{"Regístrate y conoce cómo podemos ayudarte"}</Text>
      </Row>
      <Box css={{ height: 21 }} />


      <Box css={{ height: 21 }} />
      <Row>
        <Text sx={Estilo.msecc2}>{"¡Hagamos equipo para lograr mejores resultados!"}</Text>
      </Row> */}
    
    
    </Container>





      <Box sx={{ height: 13,  }} />

      <Row>
        <Text sx={{...Estilo.msecc2, textAlign: "left"}}>{"Datos de la Tarjeta EnlaceGourmet"}</Text>
      </Row>


      <Container fluid 
        style={{ width: "100%", bg: "white", borderRadius: "10px", borderStyle: "solid", borderWidth:1, borderColor: "#9999", paddingTop: "10px"}}
      >
        <Row style={{marginBottom: "10px"}}>
          <Col xs={3}> <Text sx={Estilo.label1} >Tarjeta</Text> </Col>
          <Col xs={3}> <Input sx={Estilo.input1} {...useChangeArray(Detalle, "Enlace", setDetalle)}/> </Col>
        </Row>


        <Row style={{marginBottom: "10px"}}>
          <Col xs={3}> <Text sx={Estilo.label1} >Código</Text> <Text sx={Estilo.d2s} >(CVC)</Text>  </Col>
          <Col xs={2}> <Input sx={Estilo.input1} {...useChangeArray(Detalle, "Codigo", setDetalle)}/> </Col>
        </Row>


        <Box css={{ height: 21 }} />


        <Container fluid >
          <Row style={{marginBottom: "10px"}}>
          <Col xs={2}/> 

            <Col xs={8}> 
              <Button sx={{ width: "100%", height: "34px" }}
                width={1}
                bg={ColorBotonV()}
                disabled={EnableBotonV()}
                onClick={async () => {
                  setLoadingSecc(true)
                    await props.useAcciones.getEnlace()
                  setLoadingSecc(false)
                }}
              >
                <Text sx={Estilo.mbtn1}>
                  Validar
                  {LoadingSecc ? <Spinner size={17} ml={0} /> : <div/>}
                </Text>

              </Button>
            </Col>

          </Row>

        </Container>

        <Box css={{ height: 21 }} />



      </Container>



      <Box sx={{ height: 13,  }} />




      <Row>
        <Col xs={9} style={{textAlign: "left"}}>
          <Text sx={{...Estilo.msecc2, textAlign: "left"}}>{"Datos del Cliente"}</Text> <Text sx={Estilo.d2s} ></Text>
        </Col>

      </Row>



      <Container fluid 
        style={{ width: "100%", bg: "white", borderRadius: "10px", borderStyle: "solid", borderWidth:1, borderColor: "#9999", paddingTop: "10px"}}
      >

        <Row style={{marginBottom: "10px"}}>
          <Col xs={3}> <Text sx={Estilo.label1} >Nombre</Text> </Col>
          <Col xs={5}> <Text sx={{...Estilo.label1, textAlign: "left"}} >{Detalle.ClienteNombre}</Text> </Col>


        </Row>

        <Row style={{marginBottom: "10px"}}>
          <Col xs={3}> <Text sx={Estilo.label1} >Teléfono</Text> <Text sx={Estilo.d2s} >(Whatsapp)</Text>  </Col>
          <Col xs={5}> <Text sx={{...Estilo.label1, textAlign: "left"}} >{Detalle.ClienteTelefono}</Text> </Col>
        </Row>

        <Row style={{marginBottom: "10px"}}>
          <Col xs={3}> <Text sx={Estilo.label1} >Email</Text> </Col>
          <Col xs={5}> <Text sx={{...Estilo.label1, textAlign: "left"}} >{Detalle.ClienteEmail}</Text> </Col>
        </Row>

        <Row style={{marginBottom: "10px"}}>
          <Col xs={3}> <Text sx={Estilo.label1} >Saldo</Text> </Col>
          <Col xs={3}> <Text sx={{...Estilo.label1, textAlign: "left"}} >{MiSaldo()}</Text> </Col>

          <Col xs={3}> <Text sx={Estilo.label1} >Nivel</Text> </Col>
          <Col xs={2}> <Text sx={{...Estilo.label1, textAlign: "left"}} >{Detalle.Nivel} %</Text> </Col>
        </Row>

      </Container>



      <Box sx={{ height: 13,  }} />


      <Row>
        <Text sx={{...Estilo.msecc2, textAlign: "left"}}>{"Registro de la visita"}</Text>
      </Row>


      <Container fluid 
        style={{ width: "100%", bg: "white", borderRadius: "10px", borderStyle: "solid", borderWidth:1, borderColor: "#9999", paddingTop: "10px"}}
      >
        <Row style={{marginBottom: "10px"}}>
          <Col xs={3}> <Text sx={Estilo.label1} >Folio</Text> </Col>
          <Col xs={3}> <Input sx={Estilo.input1} {...useChangeArray(Detalle, "Folio", setDetalle)}/> </Col>
        </Row>


        <Row style={{marginBottom: "10px"}}>
          <Col xs={3}> <Text sx={Estilo.label1} >Importe</Text><Text sx={Estilo.d2s} > (del Ticket)</Text>  </Col>
          <Col xs={3}> <Input sx={Estilo.input1} {...useChangeArray(Detalle, "Importe", setDetalle)}/> </Col>
        </Row>


        <Row style={{marginBottom: "10px"}}>
          <Col xs={3}> <Text sx={Estilo.label1} >Puntos a Abonar</Text> </Col>
          <Col xs={5}> <Text sx={{...Estilo.label2, textAlign: "left"}} >{AAbonar}</Text> </Col>
        </Row>



      </Container>


      <Box sx={{ height: 13,  }} />




      <Col xs={9} style={{textAlign: "left"}}>
        <Text sx={{...Estilo.msecc2, textAlign: "left"}}>{"Observaciones"}</Text> <Text sx={Estilo.d2s} >(opcional)</Text>
      </Col>





      <Container fluid 
        style={{ width: "100%", bg: "white", borderRadius: "10px", borderStyle: "solid", borderWidth:1, borderColor: "#9999", paddingTop: "10px"}}
      >

        <Col xs={9} style={{textAlign: "left"}}>
          <Text sx={{...Estilo.d2s, textAlign: "left"}} >(si tienes alguna aclaración o comentario sobre la operación)</Text>
        </Col>


        <Row style={{marginBottom: "10px"}}>

          <Col xs={12}> 
            <Textarea
              // sx={Estilo.input1}
              {...useChangeArray(Detalle, "Obv", setDetalle)}
              rows={3}
            />          
          </Col>
        </Row>

      </Container>

      <Box css={{ height: 21 }} />




      <Container fluid >
        <Row style={{marginBottom: "10px"}}>
        <Col xs={2}/> 

          <Col xs={8}> 
            <Button sx={{ width: "100%", height: "34px" }}
              width={1}
              bg={ColorBoton()}
              disabled={EnableBoton()}
              onClick={async () => {
                setLoadingSecc(true)
                  await props.useAcciones.InfoAdd()
                setLoadingSecc(false)
              }}
            >
              <Text sx={Estilo.mbtn1}>
                Abonar
                {LoadingSecc ? <Spinner size={17} ml={0} /> : <div/>}
              </Text>

            </Button>
          </Col>

        </Row>

      </Container>

      <Box css={{ height: 34 }} />

  </Container>


    )
  }




 
 try {

  return (
    <div>
      {Loading ? <Spinner size={17} ml={3} /> : 
        <div>
          {(props.CompStatus.form()===1) ? ModuloEdit() : <div/>}
          {(props.CompStatus.form()===2) ? ModuloSimple() : <div/>}
          {(props.CompStatus.form()===3) ? ModuloLog() : <div/>}


          </div>
      }

    </div>
  )
  
} catch (e) {
  console.error(e);
}
}

// ---------------------------------------------------------------------
// -----------------------------------------------------------------------

export default (App = props => {
return (
  <Row className="justify-content-md-center">
    <Body {...props} />
  </Row>

);
});

// -----------------------------------------------------------------------


