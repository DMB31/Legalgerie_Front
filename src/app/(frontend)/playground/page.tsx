"use client";
import { Toaster } from "@/components/ui/sonner";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const Page = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isSuccess) {
      toast.success("This is a test");
    }
  }, [isSuccess]);

  return (
    <div>
      <button onClick={() => {setIsSuccess((e) => !e)}}>Click</button>
      <Toaster />
    </div>
  );
};

export default Page;
