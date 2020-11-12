import React from "react";
import "../styles/styles.css";
class olvidastetucontraseña extends React.Component {
    render() {
        return (
            <div>
                <br />
                <br />
                <div class="d-flex justify-content-center text-center">
                    <h1>
                        Recuperar contraseña
          </h1>
                </div>
                <br />
                <div class="d-flex justify-content-center col-md-11 text-center">
                    <h5>
                        ¿Como recuperar tu contraseña?
          </h5>
                </div>
                <div class="d-flex justify-content-center ">
                    <div class=" form-group col-md-4 text-center " >

                        <p aling="left" >
                            Escribe una direccion de correo electronico que se
                            diferente a la que tratas de recuperar o telefono
                            celular registrado anteriormente</p>
                        <br />
                        <br />

                        <input type="email" class="form-group col-md-12 Texto" nameid="exampleInputEmail1" aria-describedby="emailHelp"
                            placeholder="Ingrese correo electronico o celular" />


                    </div>
                </div>


                <div class="d-flex justify-content-center">
                    <button type="button" class="btn btn-secondary btn-outline-dark Boton16">
                        <a class="text-white" href="./Tipodeusuario">Enviar</a>{" "}
                    </button>
                </div>
            </div>


        );


    }
}
export default olvidastetucontraseña;