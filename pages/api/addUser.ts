// pages/api/addUser.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { firestore } from '@/firebase/config';
import { collection, addDoc } from "firebase/firestore";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    console.log(req.body);
    const {
      imgSrc,
      imgAlt,
      namaLengkap,
      tanggalLahir,
      jenisKelamin,
      alamat,
      email,
      fakultas,
      prodi,
      hobi,
      keterampilan,
      status
    } = req.body;

    const newUser = {
      imgSrc,
      imgAlt,
      namaLengkap,
      tanggalLahir,
      jenisKelamin,
      alamat,
      email,
      fakultas,
      prodi,
      hobi,
      keterampilan,
      status
    };

    await addDoc(collection(firestore, "users"), newUser);

    return res.status(200).json({ message: 'User added successfully', newUser });
  } catch (error) {
    console.error('Error adding document: ', error);
    return res.status(500).json({ message: 'Internal server error', error });
  }
};

export default handler;
