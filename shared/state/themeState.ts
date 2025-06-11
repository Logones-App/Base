import { observable } from '@legendapp/state';
import { useSelector } from '@legendapp/state/react';

export type LayoutStateType = typeof initialState;

const initialState = {
    colorPrimaryRgb: '',
    colorPrimary: '',
    bodyBg: '',
    darkBg: '',
    inputBorder: '',
    formControlBg: '',
    Light: '',
    dir: 'ltr',
    dataThemeMode: '',
    dataHeaderStyles: '',
    dataVerticalStyle: '',
    dataNavLayout: '',
    dataMenuStyles: '',
    dataToggled: '',
    dataNavStyle: '',
    horStyle: '',
    dataPageStyle: '',
    dataWidth: '',
    dataMenuPosition: '',
    dataHeaderPosition: '',
    iconOverlay: '',
    bgImg: '',
    iconText: '',
    body: '',
};

export const themeState = observable(initialState);

/**
 * Met à jour le thème/layout global.
 * À utiliser dans les layouts/pages pour changer l'apparence globale.
 * @param payload Objet partiel du state à fusionner.
 */
export function setTheme(payload: Partial<LayoutStateType>) {
    themeState.assign(
        Object.fromEntries(
            Object.entries(payload).map(([key, value]) => [key, typeof value === 'object' && 'get' in value ? value : value])
        )
    );
}

export const useThemeState = () => useSelector(themeState);
