import { Fragment, useEffect } from 'react';
import Themeprimarycolor, * as switcherdata from "../../data/switcherdata/switcherdata";
import { useThemeState, setTheme } from '@/shared/state/layout/themeState';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Button } from 'react-bootstrap';

const Landingswitcher = () => {
    const themeState = useThemeState();
    const Switcherclose = () => {

        if (document.querySelector(".offcanvas-end")?.classList.contains("show")) {
            document.querySelector(".offcanvas-end")?.classList.remove("show");
            document.querySelector(".switcher-backdrop")?.classList.remove("d-block");
            document.querySelector(".switcher-backdrop")?.classList.add("d-none");
        }
    };
    const customStyles = ` ${themeState.colorPrimaryRgb != '' ? `--primary-rgb:${themeState.colorPrimaryRgb}` : ''}`;
    useEffect(() => {
        setTheme({
            ...themeState,
            "dataNavStyle": "menu-click",
            "dataNavLayout": "horizontal"
        });
        return () => {
            setTheme({
                ...themeState,
                "dataNavStyle": "",
                "dataNavLayout": `${localStorage.ynexlayout == 'horizontal' ? 'horizontal' : 'vertical'}`
            });
        };
    }, [themeState]);
    return (
        <Fragment>

            <div className="switcher-backdrop d-none" onClick={() => {
                Switcherclose();
            }}></div>
            <div className="offcanvas offcanvas-end" tabIndex={-1} id="switcher-canvas" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header border-bottom">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel">Switcher</h5>
                    <Button variant='' onClick={() => {
                        Switcherclose();
                    }} type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></Button>
                </div>
                <div className="offcanvas-body">
                    <div className="">
                        <p className="switcher-style-head">Theme Color Mode:</p>
                        <div className="row switcher-style">
                            <div className="col-4">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-light-theme">
                                        Light
                                    </label>
                                    <input readOnly className="form-check-input" type="radio" name="theme-style" id="switcher-light-theme"
                                        checked={themeState.dataThemeMode !== 'dark'}
                                        onClick={() => switcherdata.Light(setTheme)}
                                    />
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-dark-theme">
                                        Dark
                                    </label>
                                    <input readOnly className="form-check-input" type="radio" name="theme-style" id="switcher-dark-theme"
                                        checked={themeState.dataThemeMode == 'dark'} onChange={(_e) => { }}
                                        onClick={() => switcherdata.Dark(setTheme)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <p className="switcher-style-head">Directions:</p>
                        <div className="row switcher-style">
                            <div className="col-4">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-ltr">
                                        LTR
                                    </label>
                                    <input readOnly className="form-check-input" type="radio" name="direction" id="switcher-ltr"
                                        checked={themeState.dir == 'ltr'} onChange={(_e) => { }}
                                        onClick={() => { switcherdata.Ltr(setTheme); }} />
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-rtl">
                                        RTL
                                    </label>
                                    <input readOnly className="form-check-input" type="radio" name="direction" id="switcher-rtl"
                                        checked={themeState.dir == 'rtl'} onChange={(_e) => { }}
                                        onClick={() => { switcherdata.Rtl(setTheme); }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="theme-colors">
                        <p className="switcher-style-head">Theme Primary:</p>
                        <div className="d-flex align-items-center switcher-style">
                            <div className="form-check switch-select me-3">
                                <input className="form-check-input color-input color-primary-1" type="radio"
                                    onClick={() => switcherdata.primaryColor1(setTheme)} onChange={(_e) => { }}
                                    name="theme-primary" id="switcher-primary" />
                            </div>
                            <div className="form-check switch-select me-3">
                                <input className="form-check-input color-input color-primary-2" type="radio"
                                    onClick={() => switcherdata.primaryColor2(setTheme)} onChange={(_e) => { }}
                                    name="theme-primary" id="switcher-primary1" />
                            </div>
                            <div className="form-check switch-select me-3">
                                <input className="form-check-input color-input color-primary-3" type="radio" name="theme-primary"
                                    onClick={() => switcherdata.primaryColor3(setTheme)} onChange={(_e) => { }}
                                    id="switcher-primary2" />
                            </div>
                            <div className="form-check switch-select me-3">
                                <input className="form-check-input color-input color-primary-4" type="radio" name="theme-primary"
                                    onClick={() => switcherdata.primaryColor4(setTheme)} onChange={(_e) => { }}
                                    id="switcher-primary3" />
                            </div>
                            <div className="form-check switch-select me-3">
                                <input className="form-check-input color-input color-primary-5" type="radio" name="theme-primary"
                                    onClick={() => switcherdata.primaryColor5(setTheme)}
                                    id="switcher-primary4" />
                            </div>
                            <div className="form-check switch-select ps-0 mt-1 color-primary-light">
                                <div className='theme-container-primary'>
                                    <button className="">nano</button>
                                </div>
                                <div className='pickr-container-primary'>
                                    <div className='pickr'>
                                        <Button className='pcr-button' onClick={(ele:any) => {
                                            if (ele.target.querySelector("input")) {
                                                ele.target.querySelector("input").click();
                                            }
                                        }}>
                                            <Themeprimarycolor theme={themeState} actionfunction={setTheme} />
                                        </Button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="switcher-style-head">reset:</p>
                        <div className="text-center">
                            <Button variant='' onClick={() => switcherdata.Reset1(setTheme)} id="reset-all" className="btn btn-danger mt-3">Reset</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Landingswitcher;

