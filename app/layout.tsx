"use client"
import { Inter } from "next/font/google";
import "./globals.scss";


const RootLayout = ({children}:any) =>{
    return(
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    )
}
export default RootLayout
