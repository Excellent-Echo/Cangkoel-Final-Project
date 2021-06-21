import React from "react";

import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Input,
  Table,
} from "reactstrap";

const BuatPengajuan = () => {
  return (
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
            </tr>
            <tr>
              <td>isi data</td>
              <td>isi data</td>
              <td>isi data</td>
              <td>isi data</td>
              <td>isi data</td>
            </tr>
            <tr>
              <td>isi data</td>
              <td>isi data</td>
              <td>isi data</td>
              <td>isi data</td>
              <td>isi data</td>
            </tr>
            <tr>
              <td>isi data</td>
              <td>isi data</td>
              <td>isi data</td>
              <td>isi data</td>
              <td>isi data</td>
            </tr>
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default BuatPengajuan;
