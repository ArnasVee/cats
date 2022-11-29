import {Container} from "react-bootstrap";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "../Home/Home";
import Search from "../Search/Search";
import Header from "../Header/Header";

function App() {
  return (
      <Container>
          <Router>
              <Header/>
              <Container style={{marginTop:'80px'}}>
                  <Routes>
                      <Route path="/" element={<Home/>}/>
                      {/*<Route path="/my-jokes" element={<Favorites/>}/>*/}
                      <Route path="/search" element={<Search/>}/>


                  </Routes>
              </Container>
          </Router>
      </Container>
  );
}

export default App;
