'use client';

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import BioDataCard from './BioData.card';
import { Skeleton } from '@nextui-org/react';

// Fungsi untuk mengambil data pengguna dari API
const fetchUsers = async () => {
  const response = await fetch("/api/getUsers", {
    method: "GET",
    headers: {
      'Content-Type': 'application/json'
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch users: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
};

const Slider = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  if (loading){
    return(
      <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
    )
  }
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <BioDataCard
        namaLengkap={users[activeIndex].namaLengkap}
        tempatTanggalLahir={users[activeIndex].tempatTanggalLahir}
        jenisKelamin={users[activeIndex].jenisKelamin}
        alamat={users[activeIndex].alamat}
        email={users[activeIndex].email}
        fakultas={users[activeIndex].fakultas}
        prodi={users[activeIndex].prodi}
        status={users[activeIndex].status}
        hobi={users[activeIndex].hobi}
        keterampilan={users[activeIndex].keterampilan}
      />
      <section className="px-4 mx-auto">
        <div className="max-w-lg mx-auto relative">
          {users.map((user, index) => (
            <input
              key={user.id}
              id={user.id}
              type="radio"
              name="slider"
              className="sr-only peer"
              checked={activeIndex === index}
              onChange={() => setActiveIndex(index)}
            />
          ))}
          {users.map((user, index) => {
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
              <div key={user.id} className={className}>
                <label className="absolute inset-0" htmlFor={user.id}>
                  <span className="sr-only">{user.id}</span>
                </label>
                <section className="bg-white rounded-lg shadow-medium w-full h-full overflow-hidden border-gray-900 border-2">
                  <Image 
                    src={user.imgSrc}
                    alt={user.imgAlt}
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
