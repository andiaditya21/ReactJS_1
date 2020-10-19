import React from "react";
// import logo from "./logo.svg";
import "./App.css";
// import Input from "./Component/Input";
// import Button from "./Component/Button";

// Tugas 2
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <Input type="text" placeholder="Username" />
//         <Input type="password" placeholder="Password" />
//         <Button type="submit" />
//       </header>
//     </div>
//   );
// }

// export default App;

// Tugas 1
export default function createElement() {
  const mahasiswa = [
    {
      nim: 1,
      nama: "yusuf",
      jurusan: "Geodesi",
      angkatan: 1990,
    },
    {
      nim: 2,
      nama: "sukirman",
      jurusan: "Perminyakan",
      angkatan: 1856,
    },
  ];
  const judul = "Biodata Alumni";

  return (
    <div>
      <h1>{judul}</h1>
      <ul>
        <li style={{ backgroundColor: "skyblue" }}>
          <p>Nim: {mahasiswa[0].nim}</p>
          <p>Nama: {mahasiswa[0].nama}</p>
          <p>Jurusan: {mahasiswa[0].jurusan}</p>
          <p>Angkatan: {mahasiswa[0].angkatan}</p>
        </li>
        <li style={{ backgroundColor: "coral" }}>
          <p>Nim: {mahasiswa[1].nim}</p>
          <p>Nama: {mahasiswa[1].nama}</p>
          <p>Jurusan: {mahasiswa[1].jurusan}</p>
          <p>Angkatan: {mahasiswa[1].angkatan}</p>
        </li>
      </ul>
    </div>
  );
}
