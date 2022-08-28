import React from "react";
import Footer from "./componetns/Footer";
import Main from "./componetns/Main";
import Hader from "./componetns/Hader";

class App extends React.Component {
  render() {
    return (
      <div style={{ textAlign:'center' , width:"100%", height:"100%" , backgroundColor:"#21f38e4f"}}>
       
        <Hader></Hader>
        <Main ></Main>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
