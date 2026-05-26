import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] w-full flex items-center justify-center bg-gray-50 py-12">
      <Card className="w-full max-w-md mx-4 shadow-lg rounded-sm border border-border">
        <CardContent className="pt-8 pb-8 text-center flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-6">
            <AlertCircle className="h-10 w-10 text-red-500" />
          </div>
          <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">404 Page Not Found</h1>
          <p className="text-muted-foreground text-sm max-w-xs mb-8">
            The page you are looking for does not exist or has been moved.
          </p>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-sm">
            <Link href="/" className="inline-flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
