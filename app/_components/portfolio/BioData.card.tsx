import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

interface BioCardProps {
  namaLengkap: string;
  tempatTanggalLahir: string;
  jenisKelamin: string;
  alamat: string;
  email: string;
  fakultasProgramStudi: string;
  posisi: string;
  hobi: string;
  keterampilan: string;
}

const BioDataCard: React.FC<BioCardProps> = ({
  namaLengkap,
  tempatTanggalLahir,
  jenisKelamin,
  alamat,
  email,
  fakultasProgramStudi,
  posisi,
  hobi,
  keterampilan,
}) => {
  return (
    <div className="flex items-center justify-start">
      <Card>
        <CardHeader className="px-auto">
          <CardTitle className="text-center">Bio Data</CardTitle>
        </CardHeader>
        <CardContent className='p-0 lg:p-6'>
          <div className="max-w-sm mx-auto my-4 p-6 shadow-white rounded-lg shadow-sm transform transition-transform duration-500 hover:scale-105">
            <h2 className="text-xl font-bold mb-2">{namaLengkap}</h2>
            <p className="text-gray-500">
              <strong>Tempat dan Tanggal Lahir:</strong> {tempatTanggalLahir}
            </p>
            <p className="text-gray-500">
              <strong>Jenis Kelamin:</strong> {jenisKelamin}
            </p>
            <p className="text-gray-500">
              <strong>Alamat:</strong> {alamat}
            </p>
            <p className="text-gray-500">
              <strong>Email:</strong> {email}
            </p>
            <p className="text-gray-500">
              <strong>Fakultas dan Program Studi:</strong> {fakultasProgramStudi}
            </p>
            <p className="text-gray-500">
              <strong>Posisi:</strong> {posisi}
            </p>
            <p className="text-gray-500">
              <strong>Hobi:</strong> {hobi}
            </p>
            <p className="text-gray-500">
              <strong>Keterampilan:</strong> {keterampilan}
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Link href="https://github.com/john" target="_blank">
            <Button variant="outline">View</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BioDataCard;
