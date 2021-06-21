import React from "react";

import img1 from "../../assets/images/users/1.jpg";
import img2 from "../../assets/images/users/2.jpg";
import img3 from "../../assets/images/users/3.jpg";
import img4 from "../../assets/images/users/4.jpg";

import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Input,
  Table,
} from "reactstrap";

const Investor = () => {
  return (
    <Card>
      <CardBody>
        <div className="d-flex align-items-center">
          <div>
            <CardTitle>Daftar Investor</CardTitle>
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
              <th className="border-0">Nama Lengkap</th>
              <th className="border-0">Email</th>
              <th className="border-0">Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="d-flex no-block align-items-center">
                  <div className="mr-2">
                    <img
                      src={img1}
                      alt="user"
                      className="rounded-circle"
                      width="45"
                    />
                  </div>
                  <div className="">
                    <h5 className="mb-0 font-16 font-medium">Hanna Gover</h5>
                    <span>hgover@gmail.com</span>
                  </div>
                </div>
              </td>
              <td>isi data</td>
              <td>isi data</td>
            </tr>
            <tr>
              <td>
                <div className="d-flex no-block align-items-center">
                  <div className="mr-2">
                    <img
                      src={img2}
                      alt="user"
                      className="rounded-circle"
                      width="45"
                    />
                  </div>
                  <div className="">
                    <h5 className="mb-0 font-16 font-medium">
                      Daniel Kristeen
                    </h5>
                    <span>Kristeen@gmail.com</span>
                  </div>
                </div>
              </td>
              <td>isi data</td>
              <td>isi data</td>
            </tr>
            <tr>
              <td>
                <div className="d-flex no-block align-items-center">
                  <div className="mr-2">
                    <img
                      src={img3}
                      alt="user"
                      className="rounded-circle"
                      width="45"
                    />
                  </div>
                  <div className="">
                    <h5 className="mb-0 font-16 font-medium">Julian Josephs</h5>
                    <span>Josephs@gmail.com</span>
                  </div>
                </div>
              </td>
              <td>isi data</td>
              <td>isi data</td>
            </tr>
            <tr>
              <td>
                <div className="d-flex no-block align-items-center">
                  <div className="mr-2">
                    <img
                      src={img4}
                      alt="user"
                      className="rounded-circle"
                      width="45"
                    />
                  </div>
                  <div className="">
                    <h5 className="mb-0 font-16 font-medium">Jan Petrovic</h5>
                    <span>hgover@gmail.com</span>
                  </div>
                </div>
              </td>
              <td>isi data</td>
              <td>isi data</td>
            </tr>
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default Investor;
