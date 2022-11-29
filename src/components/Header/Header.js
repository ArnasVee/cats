import {Container, Navbar} from "react-bootstrap";
import Navigation from "../Navigation/Navigation";
const Header = ()=>{
    return(
        <Navbar bg="secondary" variant="dark" fixed="top">
            <Container>
                <Navbar className="Brand">Cats</Navbar>
                <Navigation/>
            </Container>
        </Navbar>

    )
}

export default Header