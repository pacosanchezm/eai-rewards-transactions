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
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------





const Body = props => {
  const Estilo = useThemeUI().theme.styles
  const [Loading, setLoading] = props.useContextLocal.Loading.DataMain
  const [LoadingSecc, setLoadingSecc] = props.useContextLocal.Loading.DataMain

  const [Registro, setRegistro] = props.useContext.Registro

  const Images = props.useContext.Images

  const [Detalle, setDetalle] = props.useContext.Detalle;
  const [Editado, setEditado] = props.useContext.Editado;
  const [Aceptado, setAceptado] = props.useContext.Aceptado;

  const {useChangeArray, useChangeBooleanArray, useChangeBoolean} = props.useAcciones

  let AAbonar = ((Detalle.Nivel / 100) * Detalle.Importe)

// ----------------------------------

useEffect(() => {
 // props.useAcciones.getPage({id:props.pageid})
}, [])




const ColorBoton = function(props) {
  if(Detalle.Nombre && Detalle.Telefono && Detalle.Email){

    if(Detalle.Email.lastIndexOf('@')>0){
      if(Detalle.Email.lastIndexOf('.')>0){
        if(Aceptado){
          return "#B7CE3F"
        }
      } 
    }    
  }
};

const EnableBoton = function(props) {

  // if(LoadingSecc) {return false}

  if(Detalle.Nombre && Detalle.Telefono && Detalle.Email){
    if(Detalle.Email.lastIndexOf('@')>0){
      if(Detalle.Email.lastIndexOf('.')>0){
          if(Aceptado){
            return false
          }

      } 
    }      
  } 

  return true
  
};


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

        {/* <Row style={{marginBottom: "10px"}}>
          <Col xs={3}> <Text sx={Estilo.label1} >Apellidos</Text> </Col>
          <Col xs={9}> <Input sx={Estilo.input1} {...useChangeArray(Detalle, "Apellido", setDetalle)}/> </Col>
        </Row> */}

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
                bg={ColorBoton()}
                disabled={EnableBoton()}
                onClick={async () => {
                  setLoadingSecc(true)
                    await props.useAcciones.InfoAdd()
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






{/* 

      <Box sx={{ height: 13,  }} />

      <Row>
        <Col xs={9} style={{textAlign: "left"}}>
          <Text sx={{...Estilo.msecc2, textAlign: "left"}}>{"Etapa de tu emprendimiento"}</Text> <Text sx={Estilo.d2s} >(opcional)</Text>
        </Col>
      </Row>


      <Container fluid 
        style={{ width: "100%", bg: "white", borderRadius: "10px", borderStyle: "solid", borderWidth:1, borderColor: "#9999", paddingTop: "10px"}}
      >

        <Row style={{marginBottom: "10px"}}>
          <Button
            sx={{width: "100%", bg: "transparent"}}
            {...useChangeBooleanArray(Detalle, "Referencia1", setDetalle)}
          >
            <Row>
                <Col xs={2} style={{paddingLeft: "50px"}}> <Checkbox checked={Detalle.Referencia1}/> </Col>
               <Col xs={8} style={{textAlign: "left"}}> <Text sx={Estilo.d2s} >Estoy desarrollando la idea de negocio</Text> </Col>
            </Row>
          </Button>
        </Row>



        <Row style={{marginBottom: "10px"}}>
          <Button
            sx={{width: "100%", bg: "transparent"}}
            {...useChangeBooleanArray(Detalle, "Referencia3", setDetalle)}
          >
            <Row>
            <Col xs={2} style={{paddingLeft: "50px"}}> <Checkbox checked={Detalle.Referencia3}/> </Col>
              <Col xs={8} style={{textAlign: "left"}} > <Text sx={Estilo.d2s}>En operación (ya vendo productos y/o servicios)</Text> </Col>
            </Row>
          </Button>
        </Row>

        <Row style={{marginBottom: "10px"}}>
          <Button
            sx={{width: "100%", bg: "transparent"}}
            {...useChangeBooleanArray(Detalle, "Referencia4", setDetalle)}
          >
            <Row>
            <Col xs={2} style={{paddingLeft: "50px"}}> <Checkbox checked={Detalle.Referencia4}/> </Col>
              <Col xs={8} style={{textAlign: "left"}}> <Text sx={Estilo.d2s}>No tengo una idea concreta</Text> </Col>
            </Row>
          </Button>
        </Row>

        <Row style={{marginBottom: "10px"}}>
          <Row>
            <Col xs={3} style={{textAlign: "left", paddingLeft: "50px"}}> <Text sx={Estilo.d2s}>Otro</Text> </Col>
            <Col xs={8} style={{textAlign: "left"}}> <Input sx={Estilo.input1} {...useChangeArray(Detalle, "Referencia5", setDetalle)}/> </Col>
          </Row>
        </Row>

      </Container> */}

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
          <Col xs={3}> <Text sx={{...Estilo.label1, textAlign: "left"}} >{Detalle.Saldo}</Text> </Col>

          <Col xs={3}> <Text sx={Estilo.label1} >Nivel</Text> </Col>
          <Col xs={2}> <Text sx={{...Estilo.label1, textAlign: "left"}} >{Detalle.Nivel}</Text> </Col>
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
          <Col xs={5}> <Text sx={{...Estilo.label1, textAlign: "left"}} >{AAbonar}</Text> </Col>
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
              {...useChangeArray(Detalle, "Descripcion", setDetalle)}
              rows={5}
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


