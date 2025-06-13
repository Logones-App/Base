"use client";
import { Inter } from "next/font/google";
import "./globals.scss"
import { useAuthSync } from "@/lib/legendstate/auth/auth";



export default function LayoutClient() {

  useAuthSync();
  return null;
}
