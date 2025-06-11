"use client"
import Switcher from "@/shared/layout-components/switcher/switcher"
import { Fragment } from "react"

const Layout = ({ children }: any) => {
  return (
    <>
       <Fragment>   
            {children}
            <Switcher />
        </Fragment>
    </>
  )
}

export default Layout;