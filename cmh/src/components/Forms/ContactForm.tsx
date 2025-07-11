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

//!FORM SCHEMA/CONTROL
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
});
//!FUNCTION
async function sendEmail(data: z.infer<typeof formSchema>) {
  try {
    const res = await fetch("/api/email/contact", {
      method: "POST", // Make sure this is POST
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        submittedName: data.name,
        submittedSurname: data.surname,
        submittedEmail: data.email,
      }),
    });

    const json = await res.json();

    if (!res.ok) {
      const errorData = await res
        .json()
        .catch(() => ({ error: "Unknown error" }));
      throw new Error(errorData.error || `HTTP error! status: ${res.status}`);
    }
    return await json;
  } catch (err) {
    console.error("Client error sending email:", err);
    alert(`Error: ${err || "Unknown error"}`);
  }
}

//!COMPONENT
const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      surname: "",
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await sendEmail(values);
      alert("Email sent succesfully!");
      form.reset();
    } catch (err) {
      alert(`Error sending email!, error: ${err}`);
    } finally {
    }
  }
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
                <Input placeholder="Name" {...field} />
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
                <Input placeholder="Surname" {...field} />
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
                <Input placeholder="email@example.com" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="bg-green-900 text-white"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? "Sending..." : "Submit"}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
