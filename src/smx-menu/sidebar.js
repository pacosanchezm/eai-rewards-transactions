import React from "react";
import { slide as Menu } from "react-burger-menu";

import { Flex, Box, Button, Text, Image, Spinner, Grid, Input } from "@theme-ui/components";

var styles = {
  // bmBurgerButton: {
  //   position: 'fixed',
  //   width: '36px',
  //   height: '30px',
  //   left: '36px',
  //   top: '36px'
  // },
  bmBurgerBars: {
    background: 'white'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },


//  bmItem: {
//     display: 'inline-block'
//   },


  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }




}

export default props => {
  return (
    // Pass on our props
    <div>
      <Flex sx={{ width: "100%" }}>

        <Box sx={{ width: "50%" }}>

          <Menu {...props} styles={ styles }>


            <a className="menu-item" href="/">
              Inicio
            </a>


            <a className="menu-item" href="/quienessomos">
              Empresando
            </a>


            <a className="menu-item" href="/posts">
              Historias
            </a>


            <a className="menu-item" 
                href="https://smxai.net/empresandoreg/index.html"
                target="blank"
            >
              Cuéntanos tu historia
            </a>




            <button className="menu-item" 
            
            style={{
              background: "none",
              fontSize: 18,
              border: "none"
            }}
            
            
            >
              Mi Cuenta
            </button>


            {/* <a className="menu-item" href="/">
              Mi Cuenta
            </a> */}


            <a className="menu-item-small" 
                href="/login"
                style={{
                  fontSize: 14,
                  paddingLeft: 20
                }}
            >
              Iniciar Sesión
            </a>


            {/* <a className="menu-item-small" 
                href="/acc/signup"
                style={{
                  fontSize: 14,
                  paddingLeft: 20
                }}
            >
              Registrarme
            </a>


            <a className="menu-item-small" 
                href="/acc/info"
                style={{
                  fontSize: 14,
                  paddingLeft: 20
                }}
            >
              Mis datos
            </a> */}


            <a className="menu-item-small" 
                href="/miseventos"
                style={{
                  fontSize: 14,
                  paddingLeft: 20
                }}
            >
              Mis eventos
            </a>



          </Menu>
          
        </Box>
      </Flex>

    </div>


  );
};
