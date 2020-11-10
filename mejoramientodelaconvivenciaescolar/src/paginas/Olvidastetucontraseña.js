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
                <p class="d-flex justify-content-center text-left col-md-12">Escribe una direccion de correo electronico que sea <br />
                                    diferente a la que tratas de recuperar o telefono
                                    <br /> celular registrado anteriormente</p>
                <input type="email" class="form-control col-md-4 col-center" id="exampleFormControlInput1" placeholder="Ingrese correo electronico o celular"></input>

                <br />

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