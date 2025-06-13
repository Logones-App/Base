import { useEffect } from 'react';
import { useThemeState } from './themeState';

/**
 * useHtmlAttributes
 * Synchronizes relevant attributes from Legend State to the <html> element.
 * Centralizes all <html> attribute logic for theme/layout state.
 */
export function useHtmlAttributes() {
    const themeState = useThemeState();

    useEffect(() => {
        if (typeof document === 'undefined') return;
        const html = document.documentElement;
        const body = document.body;
        if (!html || !body) return;

        // DEBUG: log the state to verify reactivity
        // Remove after debug if needed
        // console.log('Legend themeState', themeState);

        // Map Legend State to <html> attributes
        const attrs: Record<string, string> = {
            dir: themeState.dir ?? '',
            'data-theme-mode': themeState.dataThemeMode ?? '',
            'data-header-styles': themeState.dataHeaderStyles ?? '',
            'data-vertical-style': themeState.dataVerticalStyle ?? '',
            'data-nav-layout': themeState.dataNavLayout ?? '',
            'data-menu-styles': themeState.dataMenuStyles ?? '',
            'data-toggled': themeState.dataToggled ?? '',
            'data-nav-style': themeState.dataNavStyle ?? '',
            'hor-style': themeState.horStyle ?? '',
            'data-page-style': themeState.dataPageStyle ?? '',
            'data-width': themeState.dataWidth ?? '',
            'data-menu-position': themeState.dataMenuPosition ?? '',
            'data-header-position': themeState.dataHeaderPosition ?? '',
            'data-icon-overlay': themeState.iconOverlay ?? '',
            'data-bg-img': themeState.bgImg ?? '',
            'data-icon-text': themeState.iconText ?? '',
        };

        // Always set all managed attributes (even if empty)
        Object.entries(attrs).forEach(([key, value]) => {
            html.setAttribute(key, value);
        });

        // Set <body> class and style for theme
        body.className = themeState.body ?? '';
        // Set custom CSS variables on <body>
        body.style.setProperty('--primary-rgb', themeState.colorPrimaryRgb ?? '');
        body.style.setProperty('--primary', themeState.colorPrimary ?? '');
        body.style.setProperty('--body-bg-rgb', themeState.bodyBg ?? '');
        body.style.setProperty('--body-bg-rgb2', themeState.darkBg ?? '');
        body.style.setProperty('--input-border', themeState.inputBorder ? `rgba(${themeState.inputBorder})` : '');
        body.style.setProperty('--form-control-bg', themeState.bodyBg ? `rgb(${themeState.bodyBg})` : '');
        body.style.setProperty('--light-rgb', themeState.bodyBg ?? '');
    }, [
        themeState.dir,
        themeState.dataThemeMode,
        themeState.dataHeaderStyles,
        themeState.dataVerticalStyle,
        themeState.dataNavLayout,
        themeState.dataMenuStyles,
        themeState.dataToggled,
        themeState.dataNavStyle,
        themeState.horStyle,
        themeState.dataPageStyle,
        themeState.dataWidth,
        themeState.dataMenuPosition,
        themeState.dataHeaderPosition,
        themeState.iconOverlay,
        themeState.bgImg,
        themeState.iconText,
        themeState.body,
        themeState.colorPrimaryRgb,
        themeState.colorPrimary,
        themeState.bodyBg,
        themeState.darkBg,
        themeState.inputBorder,
        themeState.formControlBg,
        themeState.Light
    ]);
}
