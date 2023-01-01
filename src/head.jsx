import React, { useState, useEffect, useContext, createContext, Suspense } from "react"



/** @jsxRuntime classic */

/** @jsx jsx */
import { ThemeProvider, jsx, Styled, useThemeUI } from "theme-ui"
import { Flex, Box, Button, Text, Image, Spinner, Grid, Input, Link } from "@theme-ui/components";
import Theme from "./theme"



// import { Router, Link } from "@reach/router"




let App
const StateContext = createContext()

// ------------------------------------------------------------------
// ------------------------------------------------------------------

const useStateLocal = () => {
  return {
    Theme: useState(useContext(createContext(Theme))),
    LoadingSecc1: useState(useContext(createContext(false))),
  };
};

// ------------------

const ContextProvider = ({ children }) => {
  return (
    <StateContext.Provider value={useStateLocal()}>
      <ThemeProvider theme={Theme}>{children}</ThemeProvider>
    </StateContext.Provider>
  );
};

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------


// -----------------------------------------------------------------------------

const Body = props => {
  const Estilo = useThemeUI().theme.styles;
  const [Loading, setLoading] = useContext(StateContext).LoadingSecc1;

  const [UserId, setUserId] = props.useContext.User.Id;
  const [UserName, setUserName] = props.useContext.User.Name;
  const Images = props.useContext.Images

// ------------

// useEffect(() => {Loader(props) }, [])

// ------------
try {

  return (
    <Grid bg="white" sx={{justifyContent: 'center', width: "100%"}} >

      <Flex bg="white" sx={{width: "100%" }}>

        <Box sx={{ height: "92px"}} >

        <Link sx={Estilo.menu1}
          // to={"/"}
          href={"https://www.enlacegourmet.com"}

        >
          <Image  src={Images.Logo1[0].src} sx={{ height: "100%", width: "100%"}}/>

          </Link>


        </Box>


        <Box sx={{ width: "100px" }}/>


        <Flex sx={{ height: "34px", width: "100%" }}>

        <Box sx={{ width: "21px", height: "21px" }}>
          <Image src={Images.Icon1[0].src} />
        </Box>


          {Loading ? <Spinner size={17} ml={3} /> : 
              <Flex sx={{ height: "34px", width: "100%" }}>
                <Box sx={{ width: "100%", textAlign: "left" }}>
                <Text sx={Estilo.d1}>{UserName}</Text>

                </Box>
              </Flex>
          }
        </Flex>

      </Flex>



    </Grid>
  )
  
} catch (e) {
  console.error(e);
}
}

// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

export default (App = props => {
  return (
    <div>
      <ContextProvider>
        <Flex>
          <main sx={{width: "100%"}}>
            <Body {...props} />
          </main>
        </Flex>
      </ContextProvider>
    </div>
  );
});

// -------------------------------------------------------------------------------