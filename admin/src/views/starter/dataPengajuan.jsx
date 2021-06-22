import React from "react";
import { Row, Col } from "reactstrap";
import { Projects } from "../../components";

const Starter = () => {
  return (
    <div>
      <Row>
        <Col sm={12}>
          <Projects />
        </Col>
      </Row>
    </div>
  );
};

export default Starter;
