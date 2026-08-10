"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui";

export const checkoutAddressSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  phone: z.string().regex(/^\d{10}$/, "Enter a valid 10-digit mobile number"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  city: z.string().min(2, "City is required"),
  pincode: z.string().regex(/^\d{6}$/, "Enter a valid 6-digit pincode"),
});

export type CheckoutAddressData = z.infer<typeof checkoutAddressSchema>;

export interface AddressFormProps {
  onAddressSubmit?: (data: CheckoutAddressData) => void;
}

export function AddressForm({ onAddressSubmit }: AddressFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutAddressData>({
    resolver: zodResolver(checkoutAddressSchema),
    defaultValues: {
      fullName: "Aarav Sharma",
      phone: "9876543210",
      address: "Flat 402, Sunshine Apartments, MG Road",
      city: "Raipur",
      pincode: "492001",
    },
  });

  const onSubmit = (data: CheckoutAddressData) => {
    if (onAddressSubmit) onAddressSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h3 className="font-head text-lg font-bold text-brown dark:text-accent mb-3">
        Delivery Address
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        <Input
          label="Full Name"
          placeholder="Aarav Sharma"
          {...register("fullName")}
          error={errors.fullName?.message}
        />
        <Input
          label="Phone"
          placeholder="9876543210"
          inputMode="numeric"
          {...register("phone")}
          error={errors.phone?.message}
        />
        <div className="md:col-span-2">
          <Input
            label="Address"
            placeholder="Flat, Street, Landmark"
            {...register("address")}
            error={errors.address?.message}
          />
        </div>
        <Input
          label="City"
          placeholder="Raipur"
          {...register("city")}
          error={errors.city?.message}
        />
        <Input
          label="Pincode"
          placeholder="492001"
          inputMode="numeric"
          {...register("pincode")}
          error={errors.pincode?.message}
        />
      </div>
    </form>
  );
}
