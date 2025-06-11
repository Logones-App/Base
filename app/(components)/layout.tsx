"use client"
import React, { useEffect, useState } from 'react'
import * as switcherdata from '../../shared/data/switcherdata/switcherdata';
import { useThemeState, setTheme } from '@/shared/state/themeState';

function Layout({children}: any) {
  const themeState = useThemeState();
  const customstyles: any = {
    ...(themeState.colorPrimaryRgb !== '' && { '--primary-rgb': themeState.colorPrimaryRgb }),
    ...(themeState.colorPrimary !== '' && { '--primary': themeState.colorPrimary }),
    ...(themeState.bodyBg !== '' && { '--body-bg-rgb': themeState.bodyBg }),
    ...(themeState.darkBg !== '' && { '--body-bg-rgb2': themeState.darkBg }),
    ...(themeState.inputBorder !== '' && { '--input-border': `rgba(${themeState.inputBorder})` }),
    ...(themeState.formControlBg !== '' && { '--form-control-bg': `rgb(${themeState.bodyBg})` }),
    ...(themeState.Light !== '' && { '--light-rgb': themeState.bodyBg }),
  };
  const [pageloading, setpageloading] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      switcherdata.LocalStorageBackup(setTheme, setpageloading);
    }
  }, []);
  return (
    <>
      <html
        suppressHydrationWarning={true}
        dir={themeState.dir}
        data-theme-mode={themeState.dataThemeMode}
        data-header-styles={themeState.dataHeaderStyles}
        data-vertical-style={themeState.dataVerticalStyle}
        data-nav-layout={themeState.dataNavLayout}
        data-menu-styles={themeState.dataMenuStyles}
        data-toggled={themeState.dataToggled}
        data-nav-style={themeState.dataNavStyle}
        hor-style={themeState.horStyle}
        data-page-style={themeState.dataPageStyle}
        data-width={themeState.dataWidth}
        data-menu-position={themeState.dataMenuPosition}
        data-header-position={themeState.dataHeaderPosition}
        data-icon-overlay={themeState.iconOverlay}
        data-bg-img={themeState.bgImg}
        data-icon-text={themeState.iconText}
        style={customstyles}
      >
        <head>
          <link href="https://cdn.jsdelivr.net/npm/dragula@3.7.3/dist/dragula.min.css" rel="stylesheet" />
          <meta name="keywords" content="nextjs template,nextjs admin template,admin,nextjs dashboard template,app router,router admin,admin panel template,dashboard,admin template,firebase nextjs,typescript,next js typescript,react bootstrap component,admin dashboard template,reactbootstrap" />
        </head>
        <body className={`${themeState.body ? themeState.body : ''}`}>
          {pageloading && children}
          <script src="https://cdn.jsdelivr.net/npm/dragula@3.7.3/dist/dragula.min.js"></script>
        </body>
      </html>
    </>
  )
}

export default Layout