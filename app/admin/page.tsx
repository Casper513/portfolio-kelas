"use client";

import { useState } from "react";

const AddUserForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const [data, setData] = useState({
    id: "",
    imgSrc: "",
    imgAlt: "Icon",
    namaLengkap: "",
    tempatTanggalLahir: "",
    jenisKelamin: "",
    alamat: "",
    email: "",
    fakultasProgramStudi: "",
    posisi: "",
    hobi: "",
    keterampilan: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    } else {
      const { name, value } = e.target;
      setData(prevData => ({ ...prevData, [name]: value }));
    }
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file as Blob);
    Object.keys(data).forEach((key) => {
      formData.append(key, (data as any)[key]);
    });

    const response = await fetch('/api/addUser', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      const result = await response.json();
      console.log(result.message);

      // Reset form
      setFile(null);
      setData({
        id: "",
        imgSrc: "",
        imgAlt: "Icon",
        namaLengkap: "",
        tempatTanggalLahir: "",
        jenisKelamin: "",
        alamat: "",
        email: "",
        fakultasProgramStudi: "",
        posisi: "",
        hobi: "",
        keterampilan: ""
      });
    } else {
      const result = await response.json();
      console.error(result.message);
    }
  };

  return (
    <div>
      <input className='block' type="text" name="id" placeholder="ID" value={data.id} onChange={handleChange} />
      <input className='block' type="file" onChange={handleChange} />
      <input className='block' type="text" name="imgAlt" placeholder="Image Alt" value={data.imgAlt} onChange={handleChange} />
      <input className='block' type="text" name="namaLengkap" placeholder="Nama Lengkap" value={data.namaLengkap} onChange={handleChange} />
      <input className='block' type="text" name="tempatTanggalLahir" placeholder="Tempat Tanggal Lahir" value={data.tempatTanggalLahir} onChange={handleChange} />
      <input className='block' type="text" name="jenisKelamin" placeholder="Jenis Kelamin" value={data.jenisKelamin} onChange={handleChange} />
      <input className='block' type="text" name="alamat" placeholder="Alamat" value={data.alamat} onChange={handleChange} />
      <input className='block' type="text" name="email" placeholder="Email" value={data.email} onChange={handleChange} />
      <input className='block' type="text" name="fakultasProgramStudi" placeholder="Fakultas Program Studi" value={data.fakultasProgramStudi} onChange={handleChange} />
      <input className='block' type="text" name="posisi" placeholder="Posisi" value={data.posisi} onChange={handleChange} />
      <input className='block' type="text" name="hobi" placeholder="Hobi" value={data.hobi} onChange={handleChange} />
      <input className='block' type="text" name="keterampilan" placeholder="Keterampilan" value={data.keterampilan} onChange={handleChange} />
      <button onClick={handleUpload}>Add User</button>
    </div>
  );
};

export default AddUserForm;
