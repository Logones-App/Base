"use client"
import React, { useEffect, useState } from 'react'
import * as switcherdata from '@/shared/data/switcherdata/switcherdata';
import { useThemeState, setTheme } from '@/lib/legendstate/layout/themeState';
import { useHtmlAttributes } from '@/lib/legendstate/layout/useHtmlAttributes';

function Layout({children}: any) {
  const themeState = useThemeState();
  useHtmlAttributes(); // Synchronize <html> attributes from Legend State
  console.log('Legend themeState', themeState);
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
      {/* Plus de <div> inutile, le style et la classe sont gérés sur <body> via le hook */}
      {children}
    </>
  )
}

export default Layout