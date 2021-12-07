export default {
  breakpoints: ["40em", "52em", "64em"],

  space: [0, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610],

  fonts: {
    body: "Arial, Helvetica, sans-serif",
    heading: '"Avenir Next", sans-serif',
    monospace: "Menlo, monospace"
  },

  fontSizes: [10, 12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    light: 200,
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },

  colors: {
    text: "#000",
    textsecondary: "gray",
    background: "whitesmoke",
    primary: "lightgray",
    secondary: "lightblue",
    accent: "orange",
    muted: "whitesmoke",
    modes: {
      text: "#fff",
      background: "#000",
      primary: "#0cf"
    }
  },

  buttons: {
    primary: {
      color: "background",
      bg: "primary",
      "&:hover": {}
    },
    secondary: {
      color: "background",
      bg: "secondary"
    }
  },

  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body"
    },

    h1: {
      fontSize: 52,
      fontFamily: "body",
      fontWeight: "heading",
      color: "primary",
      mt: 4,
      mb: 2
    },

    h2: {
      fontSize: 1,
      fontFamily: "body",
      fontWeight: "body",
      color: "textsecondary",
      mt: 4,
      mb: 2
    },

    h2s: value => ({
      fontSize: 1,
      fontFamily: "body",
      fontWeight: "body",
      color: () => (Number(value) > 0 ? "green" : "red"),
      mt: 4,
      mb: 2
    }),

    h2s2: (value, tipo) => ({
      fontSize: 1,
      fontFamily: "body",
      fontWeight: "body",
      color: () => (tipo === "G" ? "green" : "red"),
      mt: 4,
      mb: 2
    }),

    h3: {
      fontSize: 1,
      fontFamily: "body",
      fontWeight: "body",
      color: "primary",
      mt: 4,
      mb: 2
    },

    h3s: value => ({
      fontSize: 1,
      fontFamily: "body",
      fontWeight: "body",
      color: () => (Number(value) > 0 ? "green" : "red"),
      mt: 4,
      mb: 2
    }),

    h2a: {
      fontSize: 2,
      fontFamily: "body",
      fontWeight: "body",
      color: "text",
      mt: 4,
      mb: 2
    },

    h2b: {
      fontSize: 2,
      fontFamily: "body",
      fontWeight: "body",
      color: "text",

    },






    h4: {
      fontSize: 5,
      fontFamily: "body",
      fontWeight: "body",
      color: "text",
      mt: 4,
      mb: 2
    },
    h4s: {
      fontSize: 4,
      fontFamily: "body",
      fontWeight: "body",
      color: "textsecondary",
      mt: 4,
      mb: 2
    },
    h4sub: {
      fontSize: 4,
      fontFamily: "body",
      fontWeight: "body",
      color: "textsecondary",
      mt: 4,
      mb: 2
    },


    t1: {
      fontSize: 5,
      fontFamily: "body",
      fontWeight: "bold",
      color: "#152f6a",
      mt: 4,
      mb: 2
    },

    t1n: {
      fontSize: 5,
      fontFamily: "body",
      fontWeight: "bold",
      color: "#FF8C00",
      mt: 4,
      mb: 2
    },




    t1s: {
      fontSize: 2,
      fontFamily: "body",
      fontWeight: "bold",
      textAlign: "left",
      color: "#666666",
      mt: 4,
      mb: 2
    },

    t1sv: {
      fontSize: 2,
      fontFamily: "body",
      fontWeight: "bold",
      textAlign: "left",
      color: "#008000",
      mt: 4,
      mb: 2
    },


    t1sr: {
      fontSize: 2,
      fontFamily: "body",
      fontWeight: "bold",
      textAlign: "left",
      color: "#A52A2A",
      mt: 4,
      mb: 2
    },
    




    t3: {
      fontSize: 5,
      fontFamily: "body",
      fontWeight: "bold",
      color: "text",

      mt: 4,
      mb: 2
    },




    t3_3: {
      fontSize: 3,
      fontFamily: "body",
      fontWeight: "body",
      color: "#808080",

      mt: 4,
      mb: 2
    },

    t3_2: {
      fontSize: 2,
      fontFamily: "body",
      fontWeight: "bold",
      color: "#808080",

      mt: 4,
      mb: 2
    },


    t4: {
      fontSize: "33px",
      fontFamily: "heading",
      fontWeight: "bold",
      color: "text",
      textAlign: "center",
      width: "100%",
      mt: 4,
      mb: 2
    },



    t3n: {
      fontSize: 5,
      fontFamily: "body",
      fontWeight: "bold",
      color: "#FF8C00",
      mt: 4,
      mb: 2
    },


    t2: {
      fontSize: 4,
      fontFamily: "body",
      fontWeight: "body",
      color: "#404040",
      mt: 4,
      mb: 2
    },


    t2s2: {
      fontSize: 2,
      fontFamily: "body",
      fontWeight: "body",
      color: "#404040",
      mt: 2,
      mb: 2
    },

    t2s3: {
      fontSize: "15px",
      fontFamily: "body",
      fontWeight: "bold",
      color: "#404040",
      mt: 2,
      mb: 2
    },

    t2s: {
      fontSize: 2,
      fontFamily: "body",
      fontWeight: "body",
      color: "#A0522D",
      mt: 2,
      mb: 2
    },


    t3s: {
      fontSize: 2,
      fontFamily: "body",
      fontWeight: "body",
      color: "#A52A2A",
      mt: 2,
      mb: 2
    },







    l1: {
      fontSize: 5,
      fontFamily: "body",
      fontWeight: "bold",
      color: "#404040",
      mt: 4,
      mb: 2
    },

    l1s: {
      fontSize: 2,
      fontFamily: "body",
      fontWeight: "bold",
      color: "#008000",
      mt: 4,
      mb: 2
    },


    d1: {
      fontSize: 2,
      fontFamily: "body",
      fontWeight: "body",
      color: "#A9A9A9",
      mt: 1,
      mb: 1,
      ml:3,
    },

    d1s: {
      fontSize: 1,
      fontFamily: "body",
      fontWeight: "body",
      color: "#A9A9A9",
      mt: 1,
      mb: 0,
      ml:3,
    },








    d2s: {
      fontSize: 1,
      fontFamily: "body",
      fontWeight: "body",
      textAlign: "left",
      color: "#666666",
      mt: 1,
      mb: 1,
      ml:0,
    },


    d2s2: {
      fontSize: 2,
      fontFamily: "body",
      fontWeight: "body",
      textAlign: "left",
      color: "#666666",
      mt: 1,
      mb: 1,
      ml:0,
    },




    d2sn: {
      fontSize: 3,
      fontFamily: "body",
      fontWeight: "body",
      textAlign: "left",
      color: "#696969",
      mt: 1,
      mb: 1,
      ml:0,
    },


    p1s: {
      fontSize: 2,
      fontFamily: "body",
      fontWeight: "bold",
      color: "#b32d00",
      mt: 0,
      mb: 0,
    },

    p2s: {
      fontSize: 3,
      fontFamily: "body",
      fontWeight: "bold",
      color: "#330d00",
      mt: 0,
      mb: 0,
    },



    

    // ------------ Meetings



    msecc1: {
      fontSize: 4,
      fontFamily: "body",
      fontWeight: "normal",
      color: "#778899",
      mt: 4,
      mb: 2,
      ml: 2,
    },


    msecc2: {
      fontSize: 4,
      fontFamily: "body",
      fontWeight: "normal",
      color: "#152f6a",
      mt: 4,
      mb: 2,
      ml: 2,
    },


    msecc2v: {
      fontSize: 4,
      fontFamily: "body",
      fontWeight: "normal",
      color: "#b8d637",
      mt: 4,
      mb: 2,
      ml: 2,
    },


    msecc2w: {
      fontSize: 4,
      fontFamily: "body",
      fontWeight: "normal",
      color: "white",
      mt: 4,
      mb: 2,
      ml: 2,
    },




    msecc2g: {
      fontSize: 6,
      fontFamily: "body",
      fontWeight: "normal",
      color: "#152f6a",
      mt: 4,
      mb: 2,
      ml: 2,
    },





    msecc3: {
      fontSize: 4,
      fontFamily: "body",
      fontWeight: "bold",
      color: "#686969",
      mt: 4,
      mb: 2,
      ml: 2,
    },


    msecc4: {
      fontSize: 3,
      fontFamily: "body",
      fontWeight: "normal",
      color: "#686969",
      mt: 4,
      mb: 2,
      ml: 2,
    },









    mt1: {
      fontSize: 6,
      fontFamily: "body",
      fontWeight: "bold",
      color: "#2952a3",
      mt: 4,
      mb: 2
    },

    mt2: {
      fontSize: 3,
      fontFamily: "body",
      fontWeight: "bold",
      color: "#2952a3",
      mt: 4,
      mb: 2
    },






    md1: {
      fontSize: 3,
      fontFamily: "body",
      fontWeight: "body",
      color: "#778899",
      mt: 1,
      mb: 1,
      ml:3,
    },

    md1b: {
      fontSize: 3,
      fontFamily: "body",
      fontWeight: "bold",
      color: "#778899",
      mt: 1,
      mb: 1,
      ml:3,
    },

    md1a: {
      fontSize: 1,
      fontFamily: "body",
      fontWeight: "body",
      color: "#8B0000",
      mt: 1,
      mb: 1,
      ml:3,
    },

    md1c: {
      fontSize: 1,
      fontFamily: "body",
      fontWeight: "body",
      color: "#ffa366",
      mt: 1,
      mb: 1,
      ml:3,
    },

    mbtn1: {
      fontSize: 3,
      fontFamily: "body",
      fontWeight: "normal",
      color: "white",
      mt: 1,
      mb: 1,
      ml: 0,
    },






    
    label1: {
      fontSize: 2,
      fontFamily: "body",
      fontWeight: "body",
      color: "#686969",
      textAlign: "right",
    },

    input1: {
      borderRadius: 0,
      border: "none",
      borderBottom: "2px solid #0C438E",
      bg: "none"
    },


















    // ------------ Cards



    cardl1: {
      fontSize: 2,
      fontFamily: "body",
      fontWeight: "light",
      color: "#7c8e9c",
      mt: 3,
      mb: 0,
      ml: 0,
    },

    cardl1m: {
      fontSize: 2,
      fontFamily: "body",
      fontWeight: "light",
      color: "#7c8e9c",
      mt: 0,
      mb: 0,
      ml: 0,
      verticalAlign: "middle"
    },


    cardi1c: {
      fontSize: 4,
      fontFamily: "body",
      fontWeight: "normal",
      color: "#778899",
      mt: 0,
      p:3,
      mb: 0,
      ml: 0,
      borderStyle: "solid",
      borderColor: "#bfbfbf",
      borderRadius: "5px",
      width: "220px"
    },


    cardi1: {
      fontSize: 3,
      fontFamily: "body",
      fontWeight: "normal",
      color: "#778899",
      mt: 0,
      p:3,
      mb: 0,
      ml: 0,
      borderStyle: "solid",
      borderColor: "#bfbfbf",
      borderRadius: "5px",
    },

    cardi1m: {
      width: "50px",
      fontSize: 4,
      fontFamily: "body",
      fontWeight: "normal",
      color: "#778899",
      mt: 0,
      p:3,
      mb: 0,
      ml: 3,
      borderStyle: "solid",
      borderColor: "#bfbfbf",
      borderRadius: "5px",
    },

    

    cardbtn1: (color)=>{
    return ( { fontSize: 3,
      fontFamily: "body",
      fontWeight: "normal",
      bg: color,
      width: "100%",
      mt: 1,
      mb: 1,
      ml: 0,
     }
    )
    },


    cuponi1: {
      width: "70px",
      fontSize: 4,
      fontFamily: "body",
      fontWeight: "normal",
      color: "#778899",
      mt: 0,
      p:3,
      mb: 0,
      ml: 3,
      borderStyle: "solid",
      borderColor: "#bfbfbf",
      borderRadius: "5px",
    },



    // --------- menus


    menu1: {
      ml: 3,
      fontSize: 2,
      fontFamily: "body",
      fontWeight: "bold",
      color: "white",
      textDecoration: "none",
      ':hover': {
        color: '#b8d637',
      }

    },



  }
};


