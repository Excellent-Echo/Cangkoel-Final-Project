import React, { useState } from "react";

import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Input,
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
} from "reactstrap";

const Kategori = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(false);
  const [konfirmasi, setKonfirmasi] = useState(false);
  const toggle = () => setModal(!modal);
  const show = () => setKonfirmasi(!konfirmasi);

  return (
    <Card>
      <CardBody>
        <div className="d-flex align-items-center">
          <div>
            <CardTitle>Daftar Kategori</CardTitle>
            <CardSubtitle>Overview of Latest Month</CardSubtitle>
          </div>
          <div className="ml-auto d-flex no-block align-items-center">
            <div className="dl">
              <Input type="select" className="custom-select">
                <option value="0">Monthly</option>
                <option value="1">Daily</option>
                <option value="2">Weekly</option>
                <option value="3">Yearly</option>
              </Input>
            </div>
          </div>
        </div>
        <Table className="no-wrap v-middle" responsive>
          <thead>
            <tr className="border-0">
              <th className="border-0">Nama Kategori</th>
              <th className="border-0">Foto Kategori</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>isi data</td>
              <td>isi data</td>
              <div className="grid-container">
                <div className="item2">
                  <Button className="btn" color="primary" onClick={toggle}>
                    Edit
                  </Button>
                </div>
                <div className="item3">
                  <Button className="btn" color="secondary" onClick={show}>
                    Delete
                  </Button>
                  <Modal isOpen={modal} toggle={toggle} className={className}>
                    <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                    <ModalBody>
                      <Form>
                        <FormGroup>
                          <Label for="exampleEmail">Field</Label>
                          <Input
                            type="text"
                            name="text"
                            id="name"
                            placeholder="with a placeholder"
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label for="examplePassword">Field</Label>
                          <Input
                            type="text"
                            name="text"
                            id="name"
                            placeholder="with a placeholder"
                          />
                        </FormGroup>

                        <FormGroup>
                          <Label for="exampleText">Text Area</Label>
                          <Input type="textarea" name="text" id="exampleText" />
                        </FormGroup>
                        <FormGroup>
                          <Label for="exampleFile">File</Label>
                          <Input type="file" name="file" id="exampleFile" />
                        </FormGroup>

                        <Button style={{ margin: "5px" }} onClick={toggle}>
                          Submit
                        </Button>
                        <Button style={{ margin: "5px" }} onClick={toggle}>
                          Cancel
                        </Button>
                      </Form>
                    </ModalBody>
                  </Modal>

                  <Modal isOpen={konfirmasi} show={show} className={className}>
                    <ModalHeader show={show}>Modal title</ModalHeader>
                    <ModalBody>
                      <h4>Apakah serius anda ingin mengapus data ini?</h4>
                      <Button style={{ margin: "5px" }} onClick={show}>
                        Delete
                      </Button>
                      <Button style={{ margin: "5px" }} onClick={show}>
                        Cancel
                      </Button>
                    </ModalBody>
                  </Modal>
                </div>
              </div>
            </tr>
            <tr>
              <td>isi data</td>
              <td>isi data</td>
              <div className="grid-container">
                <div className="item2">
                  <Button className="btn" color="primary" onClick={toggle}>
                    Edit
                  </Button>
                </div>
                <div className="item3">
                  <Button className="btn" color="secondary" onClick={show}>
                    Delete
                  </Button>
                  <Modal isOpen={modal} toggle={toggle} className={className}>
                    <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                    <ModalBody>
                      <Form>
                        <FormGroup>
                          <Label for="exampleEmail">Field</Label>
                          <Input
                            type="text"
                            name="text"
                            id="name"
                            placeholder="with a placeholder"
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label for="examplePassword">Field</Label>
                          <Input
                            type="text"
                            name="text"
                            id="name"
                            placeholder="with a placeholder"
                          />
                        </FormGroup>

                        <FormGroup>
                          <Label for="exampleText">Text Area</Label>
                          <Input type="textarea" name="text" id="exampleText" />
                        </FormGroup>
                        <FormGroup>
                          <Label for="exampleFile">File</Label>
                          <Input type="file" name="file" id="exampleFile" />
                        </FormGroup>

                        <Button style={{ margin: "5px" }} onClick={toggle}>
                          Submit
                        </Button>
                        <Button style={{ margin: "5px" }} onClick={toggle}>
                          Cancel
                        </Button>
                      </Form>
                    </ModalBody>
                  </Modal>

                  <Modal isOpen={konfirmasi} show={show} className={className}>
                    <ModalHeader show={show}>Modal title</ModalHeader>
                    <ModalBody>
                      <h4>Apakah serius anda ingin mengapus data ini?</h4>
                      <Button style={{ margin: "5px" }} onClick={show}>
                        Delete
                      </Button>
                      <Button style={{ margin: "5px" }} onClick={show}>
                        Cancel
                      </Button>
                    </ModalBody>
                  </Modal>
                </div>
              </div>
            </tr>
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default Kategori;
