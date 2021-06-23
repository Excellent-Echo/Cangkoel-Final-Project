import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import Logo from "../assets/images/logo-cangkoel.png";

const Register = () => {
  return (
    <div style={{ margin: "150px" }}>
      <img style={{ width: "200px" }} src={Logo} alt="logo cangkoel" />
      <h2>Register Admin Cangkoel</h2>
      <Form>
        <FormGroup>
          <Label>Full Name</Label>
          <Input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="Input your fullname"
          />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Input your email"
          />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Input your password"
          />
        </FormGroup>

        <Button>Submit</Button>
      </Form>
    </div>
  );
};

export default Register;
