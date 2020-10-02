import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Inicio from "../paginas/inicio";
import menuEstudiante from "../paginas/menuEstudiante";
import MenuDocente from "../paginas/menuDocente";
import Tipodeusuario from "../paginas/Tipodeusuario";
import RegistrarsecomoDoEs from "../paginas/RegistrarsecomoDoEs";
import Buzonrespuestas from "../paginas/Buzonrespuestas";
import situacionesreportadas from "../paginas/situacionesreportadas";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/menuEstudiante" component={menuEstudiante} />
        <Route exact path="/menuDocente" component={MenuDocente} />
        <Route exact path="/Tipodeusuario" component={Tipodeusuario} />
        <Route
          exact
          path="/RegistrarsecomoDoEs"
          component={RegistrarsecomoDoEs}
        />
          
        <Route exact path="/Buzonrespuestas" component={Buzonrespuestas} />
        <Route
          exact
          path="/situacionesreportadas"
          component={situacionesreportadas}
        />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
