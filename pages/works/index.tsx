"use client";
import { useState, useEffect, useRef } from "react";
import { Instagram, Linkedin, MessageCircle, ChevronRight } from "lucide-react";
import { Ready } from "@/components";
import { Clients } from "@/container";
import { Curve } from "@/components/Curve";



export default function About() {
 
  return (
    <section className="w-full h-screen">
    <iframe
      src="/works.html"
      title="Works Page"
      className="w-full h-full border-none"
    />
  </section>
  

  );
}