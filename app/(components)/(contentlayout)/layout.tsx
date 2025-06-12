"use client"
import Backtotop from "@/shared/layout-components/backtotop/backtotop"
import Footer from "@/shared/layout-components/footer/footer"
import Header from "@/shared/layout-components/header/header"
import Sidebar from "@/shared/layout-components/sidebar/sidebar"
import Switcher from "@/shared/layout-components/switcher/switcher"
import { useThemeState, setTheme } from '@/shared/state/layout/themeState';
import { Fragment,  useState } from "react"

const Layout = ({children,}:any) => {
  const themeState = useThemeState();
  const [MyclassName, setMyClass] = useState("");

  const Bodyclickk = () => {
    if (localStorage.getItem("ynexverticalstyles") == "icontext") {
      setMyClass("");
    }
    if (window.innerWidth > 992) {
      if (themeState.iconOverlay === 'open') {
        setTheme({ iconOverlay: "" });
      }
    }
  }

  return (
    <>
  
    <Fragment>
        <Switcher/>
      <div className='page'>
        <Header/>
        <Sidebar/>
          <div className='main-content app-content'  
          onClick={Bodyclickk}
          >
        <div className='container-fluid'>
            {children}
          </div>
        </div>
        <Footer/>
      </div>
      <Backtotop/>
    </Fragment>
    </>
  )
}

export default Layout
