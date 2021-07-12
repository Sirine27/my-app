import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Form,Container,Row,Col,Carousel  } from 'react-bootstrap';
import "./index.css";




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
  <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://static.independent.co.uk/2020/12/04/15/stockeld%20park.png?width=1368&auto=webp&quality=75"
      alt="First slide" 
      height={250}
    />
    </Carousel.Item>
    <Carousel.Item>
  <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1514543580686-6488d80c6875?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
      alt="Second slide"
      height={250}
    />
    </Carousel.Item>
    <Carousel.Item>
  <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1494707633652-f43986561810?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=924&q=80"
      alt="Second slide"
      height={250}
    />
    </Carousel.Item>
    <Carousel.Item>
  <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1490436512653-03e8f0e01d54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=816&q=80"
      alt="Second slide"
      height={250}
    />
    </Carousel.Item>
    <Carousel.Item>
  <img
      className="d-block w-100"
      src="https://4.bp.blogspot.com/-Sn2lrcU0UMk/V9Rpl6xcFsI/AAAAAAAAoqk/-NWfMzboih4F9zi5ikyb5BunoHjc9e1bQCLcB/s1600/London%2BPortobello%2BRoad%2BSouthbank%2BTower%2BBridge%2BThe%2BShard-0425.jpg"
      alt="Second slide"
      height={250}
    />
    </Carousel.Item>
       <Carousel.Item>
  <img
      className="d-block w-100"
      src="https://www.kolpaper.com/wp-content/uploads/2021/04/London-Eye-Ferris-Wheel-Wallpaper-3.jpg"
      alt="Second slide"
      height={250}
    />
    </Carousel.Item>
    <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/01/31/09/creamfields-3101.jpg?width=990&auto=webp&quality=75&crop=968%3A645%2Csmart"
      alt="Third slide"
      height={250}
    />
    </Carousel.Item>
</Carousel>

      <Form>
        <Row>
          <Col>
      <Form.Label>First name</Form.Label> 
  <Form.Control placeholder="First name" />
  </Col>
  <Col>
  <Form.Label>Last name</Form.Label>
  <Form.Control placeholder="Last name" />
  </Col>
  </Row> 
  <Row>
  <Col>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
   
  </Form.Group>
  </Col>
  <Col>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  
  </Form.Group>
  </Col>
  </Row>
  <Form.Text className="text-muted">
      We'll never share your Email and Password with anyone else.
    </Form.Text>
  <Form.Group>
  <Form.Label> 
    If you want to share photos of your trips with us then submit them ... with L❤VE 
    </Form.Label>
    <Form.File id="exampleFormControlFile1" className="text-muted"/>
  </Form.Group>
  <Button variant="secondary" type="submit">
    Submit
  </Button>
</Form>

</Container>
      </header>
    </div>
  );
}

export default App;
