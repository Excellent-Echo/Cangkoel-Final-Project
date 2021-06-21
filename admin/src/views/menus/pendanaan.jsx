import React from "react";

import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Input,
  Table,
} from "reactstrap";

const Pendanaan = () => {
  return (
    <Card>
      <CardBody>
        <div className="d-flex align-items-center">
          <div>
            <CardTitle>Daftar Pendanaan</CardTitle>
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
              <th className="border-0">Foto Profil</th>
              <th className="border-0">Nomor Investor</th>
              <th className="border-0">Judul Pendanaan</th>
              <th className="border-0">Nominal Pendanaan</th>
              <th className="border-0">Perusahaan Pengirim</th>
              <th className="border-0">Bagi Hasil Investor</th>
              <th className="border-0">Bagi Hasil Petani</th>
              <th className="border-0">Kebutuhan Komoditas</th>
              <th className="border-0">Jangka Waktu</th>
              <th className="border-0">Keuntungan Bersih</th>
              <th className="border-0">Deskprisi</th>
              <th className="border-0">Biaya Operasional</th>
              <th className="border-0">Biaya Ekspor</th>
              <th className="border-0">Perhitungan Penghasilan</th>
              <th className="border-0">Perhitungan Keuntungan</th>
              <th className="border-0">ID Kategori Pertanian</th>
              <th className="border-0">ID Investor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>isi data</td>
              <td>isi data</td>
              <td>isi data</td>
              <td>isi data</td>
              <td>isi data</td>
              <td>isi data</td>
              <td>isi data</td>
              <td>isi data</td>
              <td>isi data</td>
              <td>isi data</td>
              <td>isi data</td>
              <td>isi data</td>
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
              <td>isi data</td>
              <td>isi data</td>
              <td>isi data</td>
              <td>isi data</td>
              <td>isi data</td>
              <td>isi data</td>
              <td>isi data</td>
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
              <td>isi data</td>
              <td>isi data</td>
              <td>isi data</td>
              <td>isi data</td>
              <td>isi data</td>
              <td>isi data</td>
              <td>isi data</td>
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
              <td>isi data</td>
              <td>isi data</td>
              <td>isi data</td>
              <td>isi data</td>
              <td>isi data</td>
              <td>isi data</td>
              <td>isi data</td>
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

export default Pendanaan;
