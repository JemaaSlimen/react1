import React from 'react';
// import Header from './Header';
// import Text from './Text';
// import Social from './Social';

import {Form, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
    return (
    <div className="App" bg-primary>
    
      <div className="navbar bg-primary">   
         <h1 style={{color:"red",fontSize:50}} >react</h1>   
          </div>
      
      <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
<div>

        {/* <div>
          <Header/>
            <Text/>
            <Social/>
        </div> */}
       </div>
</div>

);
  }

export default App;
