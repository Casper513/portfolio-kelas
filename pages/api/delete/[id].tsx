// pages/api/deleteUserById.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { firestore } from '@/firebase/config';
import { doc, deleteDoc, getDoc, DocumentSnapshot } from 'firebase/firestore';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { id } = req.query;

    // Dapatkan referensi dokumen pengguna berdasarkan ID
    const docRef = doc(firestore, 'users', id as string);

    // Dapatkan data pengguna dari Firestore
    const docSnapshot: DocumentSnapshot = await getDoc(docRef);

    // Periksa apakah dokumen ada dalam Firestore
    if (!docSnapshot.exists()) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Hapus dokumen
    await deleteDoc(docRef);

    return res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error', error });
  }
};

export default handler;
