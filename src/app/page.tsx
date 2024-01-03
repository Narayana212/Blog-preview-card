import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="w-[300px] border card-shadow border-black ">
        <CardHeader className="flex flex-col gap-y-2">
          <Image
            src="/back.svg"
            alt="back"
            width={500}
            height={300}
            className="rounded-lg"
          />
          <Badge className="w-[28%] font-bold">Learning</Badge>
          <p className="text-sm font-semibold">Published 21 Dec 2023</p>
          <CardTitle>HTML & CSS foundations</CardTitle>
          <CardDescription>
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex gap-x-2 items-center">
          <Avatar  >
            <AvatarImage src="/pro.webp"  />
            
          </Avatar>
          <h1 className="text-sm font-bold">Greg Hooper</h1>
        </CardFooter>
      </Card>
    </div>
  );
}
