"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Card,
  CardContent,
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
  email: z.string().email({
    message: "Invalid email address.",
  }),
  username: z.string().min(5, {
    message: "Username must be at least 5 characters.",
  }),
  address: z.string().min(5, {
    message: "Address must be at least 5 characters.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
});

const Contact = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      username: "",
      address: "",
      description: "",
    },
  });

  const { handleSubmit, control, formState } = form;
  const { errors, touchedFields } = formState;

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(JSON.stringify(data, null, 2));
  }

  return (
    <section className="relative z-10 flex flex-col gap-6 w-full mt-24 lg:my-56">
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Contact</CardTitle>
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
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Username"
                          {...field}
                          required
                          onChange={(e) => {
                            field.onChange(e);
                            form.trigger("username");
                          }}
                        />
                      </FormControl>
                      <FormDescription>
                        This is your public display name.
                      </FormDescription>
                      {touchedFields.username && errors.username && (
                        <FormMessage>{errors.username.message}</FormMessage>
                      )}
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="address"
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
                            form.trigger("address");
                          }}
                        />
                      </FormControl>
                      <FormDescription>
                        Please enter your address.
                      </FormDescription>
                      {touchedFields.address && errors.address && (
                        <FormMessage>{errors.address.message}</FormMessage>
                      )}
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Description"
                          {...field}
                          required
                          onChange={(e) => {
                            field.onChange(e);
                            form.trigger("description");
                          }}
                        />
                      </FormControl>
                      <FormDescription>
                        Please enter a brief description.
                      </FormDescription>
                      {touchedFields.description && errors.description && (
                        <FormMessage>{errors.description.message}</FormMessage>
                      )}
                    </FormItem>
                  )}
                />
                <div className="w-full flex items-center justify-end">
                  <Button type="submit">Submit</Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
