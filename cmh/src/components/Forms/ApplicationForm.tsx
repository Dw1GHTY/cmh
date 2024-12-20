"use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be atleast 2 characters long" })
    .max(50),
  surname: z.string().min(0).max(50),
  email: z
    .string()
    .email()
    .min(5, { message: "Email must be atleast 5 characters long" }),
  message: z
    .string()
    .min(0)
    .max(1000, { message: "Maximum amout of characters exceeded" }),
});

//!FUNCTION
function sendEmail(data: z.infer<typeof formSchema>) {
  fetch("https://cmh-test.vercel.app/api/email/apply", {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.message);
    })
    .catch((err) => {
      alert(err);
    });
}
function onSubmit(values: z.infer<typeof formSchema>) {
  console.log(values);
  try {
    sendEmail(values);
  } catch (err) {
    alert(`Error sending email!, error: ${err}`);
  } finally {
  }
}

const ApplicationForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      message: "",
    },
  });
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input
                  aria-placeholder="First Name"
                  placeholder="First Name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="surname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Surname</FormLabel>
              <FormControl>
                <Input
                  aria-placeholder="Surname"
                  placeholder="Surname"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  aria-placeholder="email@example.com"
                  placeholder="email@example.com"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  aria-placeholder="Your qualifications and a short introduction"
                  placeholder="Your qualifications and a short introduction"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" className="bg-green-900 text-white">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default ApplicationForm;
