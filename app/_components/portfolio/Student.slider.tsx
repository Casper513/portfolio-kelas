'use client';
import React, { useState } from 'react';
import Image from "next/image";
// import BioData from './BioData.card';
import BioDataCard from './BioData.card';

const dataMhs = [
    {
      id: '0001',
      imgSrc: 'https://source.unsplash.com/random/?woman&1',
      imgAlt: 'Icon',
      namaLengkap: 'John Doe',
      tempatTanggalLahir: 'Jakarta, 1 Januari 2000',
      jenisKelamin: 'Laki-laki',
      alamat: 'Jl. Kebon Jeruk No. 123, Jakarta',
      email: 'john.doe@example.com',
      fakultasProgramStudi: 'Fakultas Ilmu Komputer, Program Studi Teknik Informatika',
      posisi: 'Mahasiswa',
      hobi: 'Membaca, Menulis, Coding',
      keterampilan: 'Pemrograman, Desain Grafis, Manajemen Waktu'
    },
    {
      id: '0002',
      imgSrc: 'https://source.unsplash.com/random/?girl&1',
      imgAlt: 'Icon',
      namaLengkap: 'Jane Smith',
      tempatTanggalLahir: 'Surabaya, 2 Februari 2001',
      jenisKelamin: 'Perempuan',
      alamat: 'Jl. Merdeka No. 45, Surabaya',
      email: 'jane.smith@example.com',
      fakultasProgramStudi: 'Fakultas Ekonomi, Program Studi Manajemen',
      posisi: 'Mahasiswa',
      hobi: 'Travelling, Fotografi, Membaca',
      keterampilan: 'Manajemen Proyek, Pemasaran, Analisis Data'
    },
    {
      id: '0003',
      imgSrc: 'https://source.unsplash.com/random/?man&1',
      imgAlt: 'Icon',
      namaLengkap: 'Michael Johnson',
      tempatTanggalLahir: 'Bandung, 3 Maret 1999',
      jenisKelamin: 'Laki-laki',
      alamat: 'Jl. Asia Afrika No. 67, Bandung',
      email: 'michael.johnson@example.com',
      fakultasProgramStudi: 'Fakultas Teknik, Program Studi Teknik Elektro',
      posisi: 'Mahasiswa',
      hobi: 'Bermain Musik, Olahraga, Membaca',
      keterampilan: 'Rancang Bangun Elektronik, Pemrograman, Kepemimpinan'
    },
    {
      id: '0004',
      imgSrc: 'https://source.unsplash.com/random/?child&1',
      imgAlt: 'Icon',
      namaLengkap: 'Emily Davis',
      tempatTanggalLahir: 'Yogyakarta, 4 April 2002',
      jenisKelamin: 'Perempuan',
      alamat: 'Jl. Malioboro No. 89, Yogyakarta',
      email: 'emily.davis@example.com',
      fakultasProgramStudi: 'Fakultas Sastra, Program Studi Sastra Inggris',
      posisi: 'Mahasiswa',
      hobi: 'Membaca, Menulis, Travelling',
      keterampilan: 'Penulisan Kreatif, Terjemahan, Public Speaking'
    },
    {
      id: '0005',
      imgSrc: 'https://source.unsplash.com/random/?daughter&1',
      imgAlt: 'Icon',
      namaLengkap: 'David Brown',
      tempatTanggalLahir: 'Bali, 5 Mei 1998',
      jenisKelamin: 'Laki-laki',
      alamat: 'Jl. Pantai Kuta No. 123, Bali',
      email: 'david.brown@example.com',
      fakultasProgramStudi: 'Fakultas Pariwisata, Program Studi Manajemen Pariwisata',
      posisi: 'Mahasiswa',
      hobi: 'Menyelam, Fotografi, Memasak',
      keterampilan: 'Manajemen Event, Komunikasi, Pelayanan Pelanggan'
    }
  ];
  

const Slider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <>
        <BioDataCard
            namaLengkap={dataMhs[activeIndex].namaLengkap}
            tempatTanggalLahir={dataMhs[activeIndex].tempatTanggalLahir}
            jenisKelamin={dataMhs[activeIndex].jenisKelamin}
            alamat={dataMhs[activeIndex].alamat}
            email={dataMhs[activeIndex].email}
            fakultasProgramStudi={dataMhs[activeIndex].fakultasProgramStudi}
            posisi={dataMhs[activeIndex].posisi}
            hobi={dataMhs[activeIndex].hobi}
            keterampilan={dataMhs[activeIndex].keterampilan}
        />
        <section className="px-4 mx-auto">
            <div className="max-w-lg mx-auto relative">
                {dataMhs.map((article, index) => (
                    <input
                        key={article.id}
                        id={article.id}
                        type="radio"
                        name="slider"
                        className="sr-only peer"
                        checked={activeIndex === index}
                        onChange={() => setActiveIndex(index)}
                    />
                ))}
                
                {dataMhs.map((article, index) => {
                    const className = `
                        absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                        ${activeIndex === index ? 'relative z-50 translate-x-0 scale-100 pointer-events-none' : ''}
                        ${activeIndex === index + 1 ? '-translate-x-14 scale-[93.75%] z-40' : ''}
                        ${activeIndex === index + 2 ? '-translate-x-28 scale-[83.75%] z-20' : ''}
                        ${activeIndex === index - 1 ? 'translate-x-14 scale-[93.75%] z-40' : ''}
                        ${activeIndex === index - 2 ? 'translate-x-28 scale-[84.75%] z-20' : ''}
                        ${activeIndex === index - 3 ? 'translate-x-40 scale-[73.75%] z-10' : ''}
                        ${activeIndex !== index && activeIndex !== index - 1 && activeIndex !== index - 2 && activeIndex !== index + 1 && activeIndex !== index + 2 && activeIndex !== index - 3 ? 'opacity-0' : ''}
                        max-w-56 w-full h-80 cursor-pointer lg:max-w-80 lg:h-[420px]
                    `;
                    return (
                        <div key={article.id} className={className}>
                            <label className="absolute inset-0" htmlFor={article.id}>
                                <span className="sr-only">{article.id}</span>
                            </label>
                            <section className="bg-white rounded-lg shadow-medium w-full h-full overflow-hidden border-gray-900 border-2">
                                <Image 
                                    src={article.imgSrc}
                                    alt={article.imgAlt}
                                    className="w-full h-full object-cover"
                                    width={100}
                                    height={100}
                                    quality={100}
                                    objectFit="cover"
                                />
                            </section>
                        </div>
                    );
                })}
            </div>
        </section>
        </>
    );
};

export default Slider;
