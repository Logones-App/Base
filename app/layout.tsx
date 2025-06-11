"use client"
import { Inter } from "next/font/google";
import "./globals.scss";
import Head from "next/head";


const RootLayout = ({children}:any) =>{
    return(
      <>
        {children}
      </>
    )
}
export default RootLayout
