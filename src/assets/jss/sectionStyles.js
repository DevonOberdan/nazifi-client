const section = theme => ({
    pageHeader: {
        position: "relative",
        height: "100vh",
        maxHeight: "1600px",
        backgroundPosition: "50%",
        backgroundSize: "cover",
        margin: "0",
        padding: "0",
        border: "0",
        display: "flex",
        WebkitBoxAlign: "center",
        MsFlexAlign: "center",
        alignItems: "center",
        // "&:before": {
        //   background: "rgba(" + hexToRgb(blackColor) + ", 0.5)"
        // },
        "&:after,&:before": {
          position: "absolute",
          zIndex: "1",
          width: "100%",
          height: "100%",
          display: "block",
          left: "0",
          top: "0",
          content: "''"
        }
    }
})


export default section