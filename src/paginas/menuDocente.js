import React from "react";
import "../styles/styles.css";
import ImagenInicio from "../imagenes/ImagenInicio.png";

class MenuDocente extends React.Component {
  render() {
     return (
              
      <div className="container-fluid">
      <div className="row">
        <div className="col">
          <h1>
            <center>MENÚ DONCENTE </center>
          </h1>

          <button type="button" className="btn btn-dark botonb">
            <a href="./Tipodeusuario">Volver</a>
          </button>
          <br />
          <br />
          <br />
          <div className="row">
            <button
              type="button"
              class="btn btn-primary btn-lg btn-block botona"
            >
              Situaciones reportadas
            </button>

            <br />
            <br />
            <br />
            
              <div className="col">
            <img
            src={ImagenInicio}
            ClassName="rounded mx-auto d-block imagenInicio"
            alt="..."
          />
          </div>
            </div>
          </div>
        </div>
      </div>
    
  );
}
}



export default MenuDocente;    
           
  

  

     
     