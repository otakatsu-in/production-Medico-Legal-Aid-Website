"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/validations/contact";
import { submitContactEnquiry } from "@/app/actions";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { Turnstile } from "@marsidev/react-turnstile";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      specialty: "",
      message: "",
      turnstileToken: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const result = await submitContactEnquiry(data);
      if (result.success) {
        toast.success("Thank you! Your message has been sent successfully.");
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
    <div id="contact" className="bg-white p-8 rounded-sm shadow-xl border border-border">
      <h3 className="text-2xl font-bold text-primary mb-6">Get in Touch</h3>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="doctor@hospital.com" 
              className="rounded-sm" 
              {...register("email")}
            />
            {errors.email && (
              <p className="text-sm font-medium text-destructive">{errors.email.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number (Optional)</Label>
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
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="specialty">Specialty / Institution</Label>
          <Input 
            id="specialty" 
            placeholder="e.g. Cardiology / City Hospital" 
            className="rounded-sm" 
            {...register("specialty")}
          />
          {errors.specialty && (
            <p className="text-sm font-medium text-destructive">{errors.specialty.message}</p>
          )}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea 
            id="message" 
            placeholder="How can we help you?" 
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
          ) : "Send Message"}
        </Button>
      </form>
    </div>
  );
}
