"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input, Button } from "@/components/ui";
import { useUIStore } from "@/store";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email address"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const { showToast } = useUIStore();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    showToast(`Message sent by ${data.name}! We will reach out within 24 hours.`);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3.5">
      <Input
        label="Name"
        placeholder="Your name"
        {...register("name")}
        error={errors.name?.message}
      />
      <Input
        label="Email"
        type="email"
        placeholder="you@email.com"
        {...register("email")}
        error={errors.email?.message}
      />
      <Input
        label="Message"
        placeholder="How can we help?"
        {...register("message")}
        error={errors.message?.message}
      />
      <Button type="submit" variant="primary" className="max-w-[200px] text-xs font-extrabold py-3">
        Send Message
      </Button>
    </form>
  );
}
