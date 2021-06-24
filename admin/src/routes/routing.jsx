import FirstDashboard from "../views/starter/dataPengajuan.jsx";
import BuatPengajuan from "../views/menus/buatPengajuan.jsx";
import Kategori from "../views/menus/kategori.jsx";
import Pendanaan from "../views/menus/pendanaan.jsx";
import Petani from "../views/menus/petani.jsx";
// import Bank from "../views/menus/bank.jsx";
// import TransaksiPending from "../views/menus/transaksiPending.jsx";
// import TransaksiSukses from "../views/menus/transaksiSukses.jsx";

var ThemeRoutes = [
  {
    path: "/buat-pengajuan",
    name: "Buat Pengajuan",
    icon: "mdi mdi-comment-processing-outline",
    component: BuatPengajuan,
  },
  {
    path: "/kategori",
    name: "Katalog Kategori",
    icon: "mdi mdi-arrange-send-backward",
    component: Kategori,
  },
  {
    path: "/pendanaan",
    name: "Data Pendanaan",
    icon: "mdi mdi-toggle-switch",
    component: Pendanaan,
  },
  {
    path: "/petani",
    name: "Data Petani",
    icon: "mdi mdi-credit-card-multiple",
    component: Petani,
  },

  // {
  //   path: "/bank",
  //   name: "Bank",
  //   icon: "mdi mdi-apps",
  //   component: Bank,
  // },
  // {
  //   path: "/transaksi-pending",
  //   name: "Transaksi Pending",
  //   icon: "mdi mdi-apps",
  //   component: TransaksiPending,
  // },
  // {
  //   path: "/transaksi-sukses",
  //   name: "Transaksi Sukses",
  //   icon: "mdi mdi-apps",
  //   component: TransaksiSukses,
  // },
  {
    path: "/",
    name: "Data Pengajuan",
    icon: "fa-solid fa-star",
    component: FirstDashboard,
  },
];
export default ThemeRoutes;
