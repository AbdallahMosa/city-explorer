import React from "react";


class Footer extends React.Component{
render(){
    return (<footer 
        style={{
            position: "relative",
            justifyContent: "center",
            disply:"flex",
            marginTop:"460px",
          }}
>
        <p
        style={{
            margin:"0",
            padding :"20px"
          }}>&copy; Copy Right Abdallah </p> 
    </footer>)
}

}
export default Footer ;