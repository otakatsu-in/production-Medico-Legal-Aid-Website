"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { seminarEnquirySchema, type SeminarEnquiryFormData } from "@/lib/validations/contact";
import { submitSeminarEnquiry } from "@/app/actions";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { Turnstile } from "@marsidev/react-turnstile";

export default function SeminarEnquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<SeminarEnquiryFormData>({
    resolver: zodResolver(seminarEnquirySchema),
    defaultValues: {
      name: "",
      designation: "",
      organisation: "",
      city: "",
      attendees: 50,
      preferredDate: "",
      topics: "",
      phone: "",
      email: "",
      turnstileToken: "",
    },
  });

  const onSubmit = async (data: SeminarEnquiryFormData) => {
    setIsSubmitting(true);
    try {
      const result = await submitSeminarEnquiry(data);
      if (result.success) {
        toast.success("Thank you! Your seminar enquiry has been sent successfully.");
        reset();
      } else {
        toast.error(result.error || "Failed to submit enquiry. Please try again.");
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
          <Label htmlFor="name">Organiser Name</Label>
          <Input 
            id="name" 
            placeholder="Your Full Name" 
            className="rounded-sm"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-sm font-medium text-destructive">{errors.name.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="designation">Designation</Label>
          <Input 
            id="designation" 
            placeholder="e.g. Secretary, President, Dean" 
            className="rounded-sm"
            {...register("designation")}
          />
          {errors.designation && (
            <p className="text-sm font-medium text-destructive">{errors.designation.message}</p>
          )}
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="organisation">Organisation / Hospital / Association Name</Label>
        <Input 
          id="organisation" 
          placeholder="e.g. IMA Bengaluru Branch / City Medical College" 
          className="rounded-sm"
          {...register("organisation")}
        />
        {errors.organisation && (
          <p className="text-sm font-medium text-destructive">{errors.organisation.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="city">City / Location</Label>
          <Input 
            id="city" 
            placeholder="e.g. Bengaluru" 
            className="rounded-sm"
            {...register("city")}
          />
          {errors.city && (
            <p className="text-sm font-medium text-destructive">{errors.city.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="attendees">Expected Attendees</Label>
          <Input 
            id="attendees" 
            type="number" 
            placeholder="50" 
            className="rounded-sm"
            {...register("attendees")}
          />
          {errors.attendees && (
            <p className="text-sm font-medium text-destructive">{errors.attendees.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="preferredDate">Preferred Date / Month</Label>
          <Input 
            id="preferredDate" 
            placeholder="e.g. Mid-July 2026" 
            className="rounded-sm"
            {...register("preferredDate")}
          />
          {errors.preferredDate && (
            <p className="text-sm font-medium text-destructive">{errors.preferredDate.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="topics">Topics of Interest</Label>
        <Input 
          id="topics" 
          placeholder="e.g. Consent, Negligence, Documentation MLC" 
          className="rounded-sm"
          {...register("topics")}
        />
        {errors.topics && (
          <p className="text-sm font-medium text-destructive">{errors.topics.message}</p>
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
            placeholder="organiser@association.org" 
            className="rounded-sm"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-sm font-medium text-destructive">{errors.email.message}</p>
          )}
        </div>
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
        ) : "Send Workshop Enquiry"}
      </Button>
    </form>
  );
}
