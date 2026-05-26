"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { hospitalAuditSchema, type HospitalAuditFormData } from "@/lib/validations/contact";
import { submitHospitalAuditEnquiry } from "@/app/actions";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { Turnstile } from "@marsidev/react-turnstile";

export default function HospitalAuditForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<HospitalAuditFormData>({
    resolver: zodResolver(hospitalAuditSchema),
    defaultValues: {
      name: "",
      role: "",
      hospital: "",
      phone: "",
      email: "",
      message: "",
      turnstileToken: "",
    },
  });

  const onSubmit = async (data: HospitalAuditFormData) => {
    setIsSubmitting(true);
    try {
      const result = await submitHospitalAuditEnquiry(data);
      if (result.success) {
        toast.success("Thank you! Your audit request has been sent successfully.");
        reset();
      } else {
        toast.error(result.error || "Failed to submit request. Please try again.");
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input 
            id="name" 
            placeholder="Dr. First Last" 
            className="rounded-sm"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-sm font-medium text-destructive">{errors.name.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="role">Role / Designation</Label>
          <Input 
            id="role" 
            placeholder="e.g. Medical Director, MD" 
            className="rounded-sm"
            {...register("role")}
          />
          {errors.role && (
            <p className="text-sm font-medium text-destructive">{errors.role.message}</p>
          )}
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="hospital">Hospital / Institution Name</Label>
        <Input 
          id="hospital" 
          placeholder="e.g. City Multi-speciality Hospital" 
          className="rounded-sm"
          {...register("hospital")}
        />
        {errors.hospital && (
          <p className="text-sm font-medium text-destructive">{errors.hospital.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input 
            id="phone" 
            type="tel" 
            placeholder="+91" 
            className="rounded-sm"
            {...register("phone")}
          />
          {errors.phone && (
            <p className="text-sm font-medium text-destructive">{errors.phone.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="director@hospital.com" 
            className="rounded-sm"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-sm font-medium text-destructive">{errors.email.message}</p>
          )}
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message">Message / Specific Requirements</Label>
        <Textarea 
          id="message" 
          placeholder="Please describe your beds capacity, specialties or custom auditing needs..." 
          className="min-h-[120px] rounded-sm"
          {...register("message")}
        />
        {errors.message && (
          <p className="text-sm font-medium text-destructive">{errors.message.message}</p>
        )}
      </div>
      
      <div className="flex justify-center my-4">
        <Turnstile 
          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!} 
          onSuccess={(token) => setValue("turnstileToken", token, { shouldValidate: true })}
          onError={() => toast.error("Bot verification failed. Please refresh.")}
          onExpire={() => setValue("turnstileToken", "", { shouldValidate: true })}
        />
      </div>
      {errors.turnstileToken && (
        <p className="text-sm font-medium text-destructive text-center">{errors.turnstileToken.message}</p>
      )}

      <Button 
        type="submit" 
        size="lg" 
        disabled={isSubmitting}
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-sm transition-colors"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </span>
        ) : "Request an Audit"}
      </Button>
    </form>
  );
}
