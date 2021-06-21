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
  FormText,
} from "reactstrap";

const BuatPengajuan = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(false);
  const [konfirmasi, setKonfirmasi] = useState(false);
  const toggle = () => setModal(!modal);
  const show = () => setKonfirmasi(!konfirmasi);

  return (
    <>
      <Card>
        <Form style={{ margin: "20px" }}>
          <CardTitle>Buat Hasil Pengajuan</CardTitle>
          <FormGroup>
            <Label>Masukkan ID Petani</Label>
            <Input
              type="number"
              name="petani"
              id="petani"
              placeholder="masukkan id petani"
            />
          </FormGroup>
          <FormGroup>
            <Label>Masukkan ID Investor</Label>
            <Input
              type="number"
              name="investor"
              id="investor"
              placeholder="password placeholder"
            />
          </FormGroup>
          <FormGroup>
            <Label>Masukkan ID Petani</Label>
            <Input
              type="number"
              name="petani"
              id="petani"
              placeholder="masukkan id petani"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Status</Label>
            <Input type="select" name="select" id="exampleSelect">
              <option>Review</option>
              <option>Survey</option>
              <option>Approve</option>
              <option>Rejects</option>
              <option>Dana Cari</option>
              <option>Produksi</option>
              <option>Ekspor</option>
              <option>Bagi Hasil</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Keterangan</Label>
            <Input type="select" name="select" id="exampleSelect">
              <option>
                Pihak Cangkoel dan Investor sedang mereview formulir pengajuan
                anda
              </option>
              <option>
                Pihak Cangkoel dan Investor sedang mensurvei tempat usaha milik
                petani
              </option>
              <option>
                Pihak Cangkoel dan Investor mensetujui formulir pengajuan anda
              </option>
              <option>
                Pihak Cangkoel dan Investor sedang menolak formulir pengajuan
                anda
              </option>
              <option>Pendanaan untuk produksi sudah cair</option>
              <option>
                Proses Produksi sedang dilakukan pihak petani diawai oleh pihak
                Cangkoel
              </option>
              <option>
                Proses pengiriman barang sedang berlangsung ke konsumen
              </option>
              <option>Pembagian hasil</option>
            </Input>
          </FormGroup>

          <Button>Buat Hasil Pengajuan</Button>
        </Form>
      </Card>
      <Card>
        <CardBody>
          <div className="d-flex align-items-center">
            <div>
              <CardTitle>Daftar Hasil Pengajuan</CardTitle>
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
                <th className="border-0">ID Petani</th>
                <th className="border-0">ID Investor</th>
                <th className="border-0">Status</th>
                <th className="border-0">Keterangan</th>
                <th className="border-0">ID Formulir Pengajuan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>isi data</td>
                <td>isi data</td>
                <td>isi data</td>
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
                            <Input
                              type="textarea"
                              name="text"
                              id="exampleText"
                            />
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

                    <Modal
                      isOpen={konfirmasi}
                      show={show}
                      className={className}
                    >
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
                <td>isi data</td>
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
                            <Input
                              type="textarea"
                              name="text"
                              id="exampleText"
                            />
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

                    <Modal
                      isOpen={konfirmasi}
                      show={show}
                      className={className}
                    >
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
    </>
  );
};

export default BuatPengajuan;
