"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomFormField from "@/app/_components/admin/user/CostumFormField";
import FileUpload from "@/app/_components/admin/user/FileUpload";
import CardLayout from "@/app/_components/admin/user/CardLayout";
import { useForm } from "react-hook-form";

const FormSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  namaLengkap: z
    .string()
    .min(5, { message: "Full name must be at least 5 characters." }),
  alamat: z
    .string()
    .min(5, { message: "Address must be at least 5 characters." }),
  fakultas: z
    .string()
    .min(10, { message: "Faculty must be at least 10 characters." }),
  prodi: z
    .string()
    .min(5, { message: "Program must be at least 5 characters." }),
  hobi: z.string().min(5, { message: "Hobby must be at least 5 characters." }),
  imgSrc: z
    .string()
    .min(5, { message: "Image source must be at least 5 characters." }),
  imgAlt: z
    .string()
    .min(10, { message: "Image alt text must be at least 10 characters." }),
  jenisKelamin: z
    .string()
    .min(4, { message: "Gender must be at least 4 characters." }),
  keterampilan: z
    .string()
    .min(5, { message: "Skills must be at least 5 characters." }),
  status: z
    .string()
    .min(5, { message: "Status must be at least 5 characters." }),
  tanggalLahir: z
    .string()
    .min(10, { message: "Birth date must be at least 10 characters." }),
});

const AddUser: React.FC = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      namaLengkap: "",
      alamat: "",
      fakultas: "",
      prodi: "",
      hobi: "",
      imgSrc: "",
      imgAlt: "",
      jenisKelamin: "",
      keterampilan: "",
      status: "",
      tanggalLahir: "",
    },
  });

  const { handleSubmit, control, setValue, formState } = form;
  const { errors, touchedFields } = formState;

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    const response = await fetch("/api/addUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("User added successfully");
      form.reset();
    } else {
      console.error("Failed to add user");
    }
  };

  return (
    
        <CardLayout title="Add User">
          <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <CustomFormField
                control={control}
                name="email"
                label="Email"
                placeholder="your-email@example.com"
                type="email"
                description="This email will be used to send you notifications."
                error={errors.email}
                touched={touchedFields.email}
              />
              <CustomFormField
                control={control}
                name="namaLengkap"
                label="Full Name"
                placeholder="Full Name"
                description="Please enter your full name."
                error={errors.namaLengkap}
                touched={touchedFields.namaLengkap}
              />
              <CustomFormField
                control={control}
                name="alamat"
                label="Address"
                placeholder="Address"
                description="Please enter your address."
                error={errors.alamat}
                touched={touchedFields.alamat}
              />
              <CustomFormField
                control={control}
                name="fakultas"
                label="Faculty"
                placeholder="Faculty"
                description="Please enter your faculty."
                error={errors.fakultas}
                touched={touchedFields.fakultas}
              />
              <CustomFormField
                control={control}
                name="prodi"
                label="Program"
                placeholder="Program"
                description="Please enter your program."
                error={errors.prodi}
                touched={touchedFields.prodi}
              />
              <CustomFormField
                control={control}
                name="hobi"
                label="Hobby"
                placeholder="Hobby"
                description="Please enter your hobby."
                error={errors.hobi}
                touched={touchedFields.hobi}
              />
              <CustomFormField
                control={control}
                name="imgAlt"
                label="Image Alt"
                placeholder="Image Alt"
                description="Please enter the image alt text."
                error={errors.imgAlt}
                touched={touchedFields.imgAlt}
              />
              <CustomFormField
                control={control}
                name="jenisKelamin"
                label="Gender"
                placeholder="Gender"
                description="Please enter your gender."
                error={errors.jenisKelamin}
                touched={touchedFields.jenisKelamin}
              />
              <CustomFormField
                control={control}
                name="keterampilan"
                label="Skills"
                placeholder="Skills"
                description="Please enter your skills."
                error={errors.keterampilan}
                touched={touchedFields.keterampilan}
              />
              <CustomFormField
                control={control}
                name="status"
                label="Status"
                placeholder="Status"
                description="Please enter your status."
                error={errors.status}
                touched={touchedFields.status}
              />
              <CustomFormField
                control={control}
                name="tanggalLahir"
                label="Birth Date"
                placeholder="Birth Date"
                description="Please enter your birth date."
                error={errors.tanggalLahir}
                touched={touchedFields.tanggalLahir}
              />
              <FileUpload setValue={setValue} />
              <div className="w-full flex items-center justify-end">
                <Button type="submit">Submit</Button>
              </div>
            </form>
          </Form>
        </CardLayout>
  );
};

export default AddUser;
