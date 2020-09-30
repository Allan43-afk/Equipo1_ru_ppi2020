import React from "react";
import "../styles/styles.css";

class MenuDocente extends React.Component {
  render() {
     return (
              
          <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h1>
              <center>MENÚ PRINCIPAL</center>
            </h1>
            
            <br/>
           <br/>
           <br/>
          <div className="row">  
          
           <center><button type="button" className="btn btn-dark botonpro">Situaciones Reportadas</button>
                 
                 </center>
           <br/>
           <br/>
           <br/>
          <div className="row">  
          
           <center><button type="button" class="btn btn-primary btn-lg btn-block botonnob" >Volver</button>
                 
                 </center>

          </div>
        </div>
      </div>
    </div>
  </div>
    );
  }
}



export default MenuDocente;    
           
  

  

     
     