"use client";

import React, { useState, useEffect } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "@/firebase/config";
import { FormControl, FormItem, FormLabel, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormSetValue } from "react-hook-form";

interface FileUploadProps {
  setValue: UseFormSetValue<any>;
}

const FileUpload: React.FC<FileUploadProps> = ({ setValue }) => {
  const [file, setFile] = useState<File | null>(null);

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
          },
          (error) => {
            console.error("Upload failed", error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              console.log("File available at", downloadURL);
              setValue("imgSrc", downloadURL);
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

  return (
    <FormItem>
      <FormLabel>Upload Image</FormLabel>
      <FormControl>
        <Input type="file" onChange={handleFileChange} />
      </FormControl>
      <FormDescription>Please upload an image.</FormDescription>
    </FormItem>
  );
};

export default FileUpload;
