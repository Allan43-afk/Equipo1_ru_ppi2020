import React from "react";
import ImagenInicio from "../imagenes/ImagenInicio.png"
import "../styles/styles.css";
class Inicio extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4"></div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <div className="row">
              <h1>
                <center>EL MEROJAMIENTO DE LA CONVIVENCIA ESCOLAR</center>
              </h1>
            </div>
          </div>
          <div >
          <img src={ImagenInicio}ClassName="rounded mx-auto d-block imagenInicio" alt="..."/>
          </div>

           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
          <div class="row">  
          
        <center><button type="button" className="botonInicio"> <a href="./Tipodeusuario">Entrar</a></button></center>
           
          </div>
        </div>
      </div>
    );
  }
}

export default Inicio;
