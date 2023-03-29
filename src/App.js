import './App.css';
// import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Feed from 'feed'

const styledText = {
  fontSize:'25px',
  color: 'white',

}
export default function App () {
  return(
    <div className='App'>
    <Container>
        <Navbar style={styledText} expand="lg" variant="light" bg="dark">
          <Container>
            <Navbar.Brand href="#">Home</Navbar.Brand>
            <Navbar.Brand href="#">About Me</Navbar.Brand>
            <Navbar.Brand href="#">Placement Pricing</Navbar.Brand>
            <Navbar.Brand href="#">Socials</Navbar.Brand>
          </Container>
        </Navbar>
    </Container>
    </div>
  ) 

};