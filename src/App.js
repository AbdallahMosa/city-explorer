import React from "react";
import Footer from "./componetns/Footer";
import Main from "./componetns/Main";
import Hader from "./componetns/Hader";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    return (
      <div style={{ textAlign: "center", backgroundColor: "#EAF6F6" }}>
        <Hader></Hader>
        <Main></Main>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
