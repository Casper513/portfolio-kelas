// pages/api/addUser.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { firestore, storage } from '@/firebase/config';
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { file, ...data } = req.body;

    let fileURL = "";
    if (file) {
      const storageRef = ref(storage, `images/${file.name}`);
      await uploadBytes(storageRef, file);
      fileURL = await getDownloadURL(storageRef);
    }

    const updatedData = { ...data, imgSrc: fileURL };

    await addDoc(collection(firestore, "users"), updatedData);

    return res.status(200).json({ message: 'User added successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error', error });
  }
};

export default handler;
