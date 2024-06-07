import React from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";

interface CustomFormFieldProps {
  control: Control<any>;
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  description: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: { message?: string };
  touched?: boolean;
}

const CustomFormField: React.FC<CustomFormFieldProps> = ({
  control,
  name,
  label,
  placeholder,
  type = "text",
  description,
  onChange,
  error,
  touched,
}) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Input
            placeholder={placeholder}
            {...field}
            required
            type={type}
            onChange={(e) => {
              field.onChange(e);
              onChange && onChange(e);
            }}
          />
        </FormControl>
        <FormDescription>{description}</FormDescription>
        {touched && error && <FormMessage>{error.message}</FormMessage>}
      </FormItem>
    )}
  />
);

export default CustomFormField;
