import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyles } from "./Components/UI/GlobalStyles";
import { corFundo } from "./Components/UI/Variaveis.styles";
import Comunidade from "./Pages/Comunidade";
import EditorDeCodigo from "./Pages/EditorDeCodigo";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import styled from "styled-components";
import Menu from "./Components/Menu";

const AppWrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-areas:
    "header header"
    "menu principal"
    "footer footer";
  grid-template-columns: 12em 1fr;
  grid-template-rows: 6vh 1fr 4vh;

  background-color: ${corFundo};
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <AppWrap>
        <Header />
        <Router>
          <Menu />
          <Switch>
            <Route exact path="/">
              <Comunidade />
            </Route>
            <Route path="/editor">
              <EditorDeCodigo />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </AppWrap>
    </>
  );
}

export default App;
