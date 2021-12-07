import React, { useState, useEffect, useContext, createContext, Suspense } from "react"
// import moment from "moment";

import 'bootstrap/dist/css/bootstrap.min.css'

/** @jsxRuntime classic */
import { ThemeProvider, jsx, Styled, useThemeUI } from "theme-ui"
import { Flex, Box, Button, Text, Textarea, Image, Spinner, Grid, Input, Checkbox, Link } from "@theme-ui/components"
import { Container, Col, Row } from 'react-bootstrap'

import Dropbox from "react-select"
import DropboxCss from "./select"



let App

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



// ----------------------------------

useEffect(() => {
 // props.useAcciones.getPage({id:props.pageid})
}, [])




const ColorBoton = function(props) {
  if(Detalle.Nombre && Detalle.Apellido && Detalle.Telefono && Detalle.Email){

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

  if(Detalle.Nombre && Detalle.Apellido && Detalle.Telefono && Detalle.Email){
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
              <Text sx={{...Estilo.msecc2, textAlign: "left"}}>{"Recibimos tu historia, en breve nos pondremos en contacto contigo y te estaremos invitando a nuestras actividades para emprendedores. ¡Gracias por ser parte de la comunidad empresando!"}</Text>
              </Row>
          </Flex>

          <Box css={{ height: 21 }} />


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
      <Row>
        <Text sx={Estilo.msecc2}>{"Cuéntanos tu historia"}</Text>
      </Row>
      <Row>
        <Text sx={Estilo.p2s}>{"Comparte tu emprendimiento y únete a la comunidad de emprendedores más grande de México, además tu historia podría ser seleccionada para ser compartida con nuestra comunidad."}</Text>
      </Row>
    </Container>





      <Box sx={{ height: 13,  }} />

      <Row>
        <Text sx={{...Estilo.msecc2, textAlign: "left"}}>{"Tus datos de contacto"}</Text>
      </Row>


      <Container fluid 
        style={{ width: "100%", bg: "white", borderRadius: "10px", borderStyle: "solid", borderWidth:1, borderColor: "#9999", paddingTop: "10px"}}
      >
        <Row style={{marginBottom: "10px"}}>
          <Col xs={3}> <Text sx={Estilo.label1} >Nombre</Text> </Col>
          <Col xs={9}> <Input sx={Estilo.input1} {...useChangeArray(Detalle, "Nombre", setDetalle)}/> </Col>
        </Row>

        <Row style={{marginBottom: "10px"}}>
          <Col xs={3}> <Text sx={Estilo.label1} >Apellidos</Text> </Col>
          <Col xs={9}> <Input sx={Estilo.input1} {...useChangeArray(Detalle, "Apellido", setDetalle)}/> </Col>
        </Row>

        <Row style={{marginBottom: "10px"}}>
          <Col xs={3}> <Text sx={Estilo.label1} >Teléfono</Text> </Col>
          <Col xs={4}> <Input sx={Estilo.input1} {...useChangeArray(Detalle, "Telefono", setDetalle)}/> </Col>
        </Row>

        <Row style={{marginBottom: "10px"}}>
          <Col xs={3}> <Text sx={Estilo.label1} >Email</Text> </Col>
          <Col xs={9}> <Input sx={Estilo.input1} {...useChangeArray(Detalle, "Email", setDetalle)}/> </Col>
        </Row>

      </Container>


      <Box sx={{ height: 13,  }} />

      <Row>
        <Text sx={{...Estilo.msecc2, textAlign: "left"}}>{"Datos del emprendimiento"}</Text>
      </Row>



      <Container fluid 
        style={{ width: "100%", bg: "white", borderRadius: "10px", borderStyle: "solid", borderWidth:1, borderColor: "#9999", paddingTop: "10px"}}
      >

        <Row style={{marginBottom: "10px"}}>
          <Col xs={3}> <Text sx={Estilo.label1} >Nombre</Text> </Col>
          <Col xs={9}> <Input sx={Estilo.input1} {...useChangeArray(Detalle, "Titulo", setDetalle)}/> </Col>
        </Row>

        <Row style={{marginBottom: "10px"}}>
          <Col xs={3}> <Text sx={Estilo.label1} >Sitio Web</Text> </Col>
          <Col xs={9}> <Input sx={Estilo.input1} {...useChangeArray(Detalle, "Web", setDetalle)}/> </Col>
        </Row>

        <Row style={{marginBottom: "10px"}}>
          <Col xs={3}> <Text sx={Estilo.label1} >Categoría</Text> </Col>
          <Col xs={9}> 
            <Dropbox
              name="Categoria"
              isSearchable={false}
              styles={DropboxCss.filtro2}
              value={{value: Detalle.Categoria, label: Detalle.Categoria}}
              options={props.useContext.Categorias[0]}
              onChange={async e => { setDetalle({ ...Detalle, "Categoria": e.value }) }} 
            />
          </Col>
        </Row>


        <Row style={{marginBottom: "10px"}}>
          <Col xs={3}> <Text sx={Estilo.label1} >Estado</Text> </Col>
          <Col xs={9}> 
            <Dropbox
              name="Categoria"
              isSearchable={false}
              styles={DropboxCss.filtro2}
              value={{value: Detalle.Estado, label: Detalle.Estado}}
              options={props.useContext.Estados[0]}
              onChange={async e => { setDetalle({ ...Detalle, "Estado": e.value }) }} 
            />
          </Col>
        </Row>


        <Row style={{marginBottom: "10px"}}>
          <Col xs={3}> <Text sx={Estilo.label1} >Empleados</Text> </Col>
          <Col xs={9}> 
            <Dropbox
              name="Categoria"
              isSearchable={false}
              styles={DropboxCss.filtro2}
              value={{value: Detalle.Empleados, label: Detalle.Empleados}}
              options={props.useContext.Empleados[0]}
              onChange={async e => { setDetalle({ ...Detalle, "Empleados": e.value }) }} 
            />
          </Col>
        </Row>


      </Container>


      <Box sx={{ height: 13,  }} />

      <Row>
        <Text sx={{...Estilo.msecc2, textAlign: "left"}}>{"¿Cómo te enteraste de Empresando?"}</Text>
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
              <Col xs={3}> <Text sx={Estilo.d2s} >Página Web</Text> </Col>
              <Col xs={2}> <Checkbox checked={Detalle.Referencia1}/> </Col>
            </Row>
          </Button>
        </Row>

        <Row style={{marginBottom: "10px"}}>
          <Button
            sx={{width: "100%", bg: "transparent"}}
            {...useChangeBooleanArray(Detalle, "Referencia2", setDetalle)}
          >
            <Row>
              <Col xs={3}> <Text sx={Estilo.d2s}>Facebook</Text> </Col>
              <Col xs={2}> <Checkbox checked={Detalle.Referencia2}/> </Col>
            </Row>
          </Button>
        </Row>

        <Row style={{marginBottom: "10px"}}>
          <Button
            sx={{width: "100%", bg: "transparent"}}
            {...useChangeBooleanArray(Detalle, "Referencia3", setDetalle)}
          >
            <Row>
              <Col xs={3}> <Text sx={Estilo.d2s}>Instagram</Text> </Col>
              <Col xs={2}> <Checkbox checked={Detalle.Referencia3}/> </Col>
            </Row>
          </Button>
        </Row>

        <Row style={{marginBottom: "10px"}}>
          <Button
            sx={{width: "100%", bg: "transparent"}}
            {...useChangeBooleanArray(Detalle, "Referencia4", setDetalle)}
          >
            <Row>
              <Col xs={3}> <Text sx={Estilo.d2s}>Referencia personal</Text> </Col>
              <Col xs={2}> <Checkbox checked={Detalle.Referencia4}/> </Col>
            </Row>
          </Button>
        </Row>

        <Row style={{marginBottom: "10px"}}>
          <Row>
            <Col xs={3}> <Text sx={Estilo.d2s}>Otro</Text> </Col>
            <Col xs={5}> <Input sx={Estilo.input1} {...useChangeArray(Detalle, "Referencia5", setDetalle)}/> </Col>
          </Row>
        </Row>

      </Container>

      <Box sx={{ height: 13,  }} />
      <Row>
        <Text sx={{...Estilo.msecc2, textAlign: "left"}}>{"Cuéntanos acerca de tu emprendimiento"}</Text>
      </Row>


      <Container fluid 
        style={{ width: "100%", bg: "white", borderRadius: "10px", borderStyle: "solid", borderWidth:1, borderColor: "#9999", paddingTop: "10px"}}
      >
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


      <Container fluid>
        <Row style={{marginBottom: "10px"}}>
        <Col xs={3}/> 
          <Col xs={1}> 
            <Button
                sx={{width: "100%", bg: "transparent"}}
                {...useChangeBoolean(Aceptado, setAceptado)}
            >
             <Checkbox checked={Aceptado} />
            </Button>
          </Col>

          <Col xs={5}> 
            <Text pt={"3px"} sx={Estilo.d2s}>Acepto el </Text>
            <Link sx={Estilo.h3}  href='/avisoprivacidad' target='_blank'>
              {" Aviso de Privacidad"}
            </Link>
          </Col>

        </Row>

      </Container>


      <Box css={{ height: 8 }} />


      <Container fluid 
      >
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
                Enviar mi historia
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


