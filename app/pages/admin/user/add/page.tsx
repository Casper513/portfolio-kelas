"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { useState, useEffect } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "@/firebase/config";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const FormSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  namaLengkap: z.string().min(5, { message: "Full name must be at least 5 characters." }),
  alamat: z.string().min(5, { message: "Address must be at least 5 characters." }),
  fakultas: z.string().min(10, { message: "Faculty must be at least 10 characters." }),
  prodi: z.string().min(5, { message: "Program must be at least 5 characters." }),
  hobi: z.string().min(5, { message: "Hobby must be at least 5 characters." }),
  imgSrc: z.string().min(5, { message: "Image source must be at least 5 characters." }),
  imgAlt: z.string().min(10, { message: "Image alt text must be at least 10 characters." }),
  jenisKelamin: z.string().min(4, { message: "Gender must be at least 4 characters." }),
  keterampilan: z.string().min(5, { message: "Skills must be at least 5 characters." }),
  status: z.string().min(5, { message: "Status must be at least 5 characters." }),
  tanggalLahir: z.string().min(10, { message: "Birth date must be at least 10 characters." }),
});

const AddUser = () => {
  const [file, setFile] = useState<File | null>(null);

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

  useEffect(() => {
    if (file) {
      const uploadFile = () => {
        const imageName = new Date().getTime() + file.name;
        const storageRef = ref(storage, imageName);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
            }
          },
          (error) => {
            console.error("Upload failed", error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              console.log("File available at", downloadURL);
              setValue("imgSrc", downloadURL); // Set the imgSrc field with the download URL
            });
          }
        );
      };
      uploadFile();
    }
  }, [file, setValue]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      console.log(e.target.files[0]);
    }
  };

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(JSON.stringify(data, null, 2));
    handleUpload(data);
  }

  const handleUpload = async (data: z.infer<typeof FormSchema>) => {
    const response = await fetch("/api/addUser", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const result = await response.json();
      console.log(result.message);

      // Reset form
      setFile(null);
      form.reset();
    } else {
      const result = await response.json();
      console.error(result.message);
    }
  };

  return (
    <div className="p-4 lg:ml-64 mt-14">
      <div className="flex items-center justify-center min-h-screen rounded bg-gray-50 dark:bg-gray-800">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Add User</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                  <FormField
                    control={control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="your-email@example.com"
                            {...field}
                            required
                            type="email"
                            onChange={(e) => {
                              field.onChange(e);
                              form.trigger("email");
                            }}
                          />
                        </FormControl>
                        <FormDescription>
                          This email will be used to send you notifications.
                        </FormDescription>
                        {touchedFields.email && errors.email && (
                          <FormMessage>{errors.email.message}</FormMessage>
                        )}
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name="namaLengkap"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Full Name"
                            {...field}
                            required
                            onChange={(e) => {
                              field.onChange(e);
                              form.trigger("namaLengkap");
                            }}
                          />
                        </FormControl>
                        <FormDescription>
                          Please enter your full name.
                        </FormDescription>
                        {touchedFields.namaLengkap && errors.namaLengkap && (
                          <FormMessage>{errors.namaLengkap.message}</FormMessage>
                        )}
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name="alamat"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Address"
                            {...field}
                            required
                            onChange={(e) => {
                              field.onChange(e);
                              form.trigger("alamat");
                            }}
                          />
                        </FormControl>
                        <FormDescription>
                          Please enter your address.
                        </FormDescription>
                        {touchedFields.alamat && errors.alamat && (
                          <FormMessage>{errors.alamat.message}</FormMessage>
                        )}
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name="fakultas"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Faculty</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Faculty"
                            {...field}
                            required
                            onChange={(e) => {
                              field.onChange(e);
                              form.trigger("fakultas");
                            }}
                          />
                        </FormControl>
                        <FormDescription>
                          Please enter your faculty.
                        </FormDescription>
                        {touchedFields.fakultas && errors.fakultas && (
                          <FormMessage>{errors.fakultas.message}</FormMessage>
                        )}
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name="prodi"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Program</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Program"
                            {...field}
                            required
                            onChange={(e) => {
                              field.onChange(e);
                              form.trigger("prodi");
                            }}
                          />
                        </FormControl>
                        <FormDescription>
                          Please enter your program.
                        </FormDescription>
                        {touchedFields.prodi && errors.prodi && (
                          <FormMessage>{errors.prodi.message}</FormMessage>
                        )}
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name="hobi"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Hobby</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Hobby"
                            {...field}
                            required
                            onChange={(e) => {
                              field.onChange(e);
                              form.trigger("hobi");
                            }}
                          />
                        </FormControl>
                        <FormDescription>
                          Please enter your hobby.
                        </FormDescription>
                        {touchedFields.hobi && errors.hobi && (
                          <FormMessage>{errors.hobi.message}</FormMessage>
                        )}
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name="imgAlt"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Image Alt</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Image Alt"
                            {...field}
                            required
                            onChange={(e) => {
                              field.onChange(e);
                              form.trigger("imgAlt");
                            }}
                          />
                        </FormControl>
                        <FormDescription>
                          Please enter the image alt text.
                        </FormDescription>
                        {touchedFields.imgAlt && errors.imgAlt && (
                          <FormMessage>{errors.imgAlt.message}</FormMessage>
                        )}
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name="jenisKelamin"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Gender</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Gender"
                            {...field}
                            required
                            onChange={(e) => {
                              field.onChange(e);
                              form.trigger("jenisKelamin");
                            }}
                          />
                        </FormControl>
                        <FormDescription>
                          Please enter your gender.
                        </FormDescription>
                        {touchedFields.jenisKelamin && errors.jenisKelamin && (
                          <FormMessage>{errors.jenisKelamin.message}</FormMessage>
                        )}
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name="keterampilan"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Skills</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Skills"
                            {...field}
                            required
                            onChange={(e) => {
                              field.onChange(e);
                              form.trigger("keterampilan");
                            }}
                          />
                        </FormControl>
                        <FormDescription>
                          Please enter your skills.
                        </FormDescription>
                        {touchedFields.keterampilan && errors.keterampilan && (
                          <FormMessage>{errors.keterampilan.message}</FormMessage>
                        )}
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name="status"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Status</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Status"
                            {...field}
                            required
                            onChange={(e) => {
                              field.onChange(e);
                              form.trigger("status");
                            }}
                          />
                        </FormControl>
                        <FormDescription>
                          Please enter your status.
                        </FormDescription>
                        {touchedFields.status && errors.status && (
                          <FormMessage>{errors.status.message}</FormMessage>
                        )}
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name="tanggalLahir"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Birth Date</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Birth Date"
                            {...field}
                            required
                            onChange={(e) => {
                              field.onChange(e);
                              form.trigger("tanggalLahir");
                            }}
                          />
                        </FormControl>
                        <FormDescription>
                          Please enter your birth date.
                        </FormDescription>
                        {touchedFields.tanggalLahir && errors.tanggalLahir && (
                          <FormMessage>{errors.tanggalLahir.message}</FormMessage>
                        )}
                      </FormItem>
                    )}
                  />
                  <FormItem>
                    <FormLabel>Upload Image</FormLabel>
                    <FormControl>
                      <Input type="file" onChange={handleFileChange} />
                    </FormControl>
                    <FormDescription>
                      Please upload an image.
                    </FormDescription>
                  </FormItem>
                  <div className="w-full flex items-center justify-end">
                    <Button type="submit">Submit</Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
