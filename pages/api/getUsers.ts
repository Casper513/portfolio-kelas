// pages/api/addUser.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { collection, getDocs } from "firebase/firestore";
import { firestore } from '@/firebase/config';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const usersRef = collection(firestore, "users");
    const querySnapshot = await getDocs(usersRef);
    const usersData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return res.status(200).json(usersData);
  } catch (error) {
    console.error('Failed to fetch users: ', error);
    return res.status(500).json({ message: 'Failed to fetch users', error: error });
  }
};

export default handler;
