import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import Logo from "../assets/images/logo-cangkoel.png";

const Login = () => {
  return (
    <div style={{ margin: "150px" }}>
      <img style={{ width: "200px" }} src={Logo} alt="logo cangkoel" />
      <h2>Login Admin Cangkoel</h2>
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="with a placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="password placeholder"
          />
        </FormGroup>

        <Button>Submit</Button>
      </Form>
    </div>
  );
};

export default Login;
