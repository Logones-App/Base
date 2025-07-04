"use client";
import React, { useEffect } from "react";
import {
  Accordion,
  Button,
  Card,
  Col,
  Form,
  Nav,
  Row,
  Tab,
} from "react-bootstrap";
import Seo from "@/shared/layout-components/seo/seo";
import { Link } from "@/i18n/navigation";

/**
 * Page landing complètement publique, sans appel à l'API d'authentification
 * ou de fonctionnalités
 */
const Landing = () => {
  // Page complètement publique sans vérification d'authentification
  useEffect(() => {
    // Dynamically add class to body
    document.body.classList.add("landing-body");
    return () => {
      // Clean up
      document.body.classList.remove("landing-body");
    };
  }, []);
  useEffect(() => {
/*     const theme = layoutState.get();
    setTheme({
      ...theme,
      dataNavStyle: "menu-click",
      dataNavLayout: "horizontal",
    });

    return () => {
      setTheme({
        ...theme,
        dataNavStyle: "",
        dataNavLayout: `${
          localStorage.ynexlayout == "horizontal" ? "horizontal" : "vertical"
        }`,
      });
    }; */
  }, []);

 /*  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 992) {
        const theme = layoutState.get();
        setTheme({
          ...theme,
          dataToggled: "close",
          dataNavLayout: "horizontal",
        });
      } else {
        const theme = layoutState.get();
        setTheme({
          ...theme,
          dataToggled: "open",
          dataNavLayout: "horizontal",
        });
      }
    } */

/*     handleResize(); // Initial check

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); */
/*   function toggleNavigation() {
    if (window.innerWidth <= 992) {
      const theme = layoutState.get();
      setTheme({
        ...theme,
        dataToggled: "open",
        dataNavLayout: "horizontal",
      });
    }
  }

  function handleClick() {
    const theme = layoutState.get();
    setTheme({
      ...theme,
      dataToggled: "close",
      dataNavLayout: "horizontal",
    });
    if (document.querySelector(".offcanvas-end")?.classList.contains("show")) {
      document.querySelector(".offcanvas-end")?.classList.remove("show");
    }
  } */

  const Switchericon = () => {
    document.querySelector(".offcanvas-end")?.classList.toggle("show");
    const Rightside: any = document.querySelector(".offcanvas-end");
    Rightside.style.insetInlineEnd = "0px";
    if (
      document.querySelector(".switcher-backdrop")?.classList.contains("d-none")
    ) {
      document.querySelector(".switcher-backdrop")?.classList.add("d-block");
      document.querySelector(".switcher-backdrop")?.classList.remove("d-none");
    }
  };

  useEffect(() => {
    const rootDiv = document.getElementById("root");
    return () => {
      if (rootDiv) {
        rootDiv.className = ""; // Remove the className when component unmounts
      }
    };
  }, []);
  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > 30 && document.querySelector(".landing-body")) {
        const Scolls = document.querySelectorAll(".sticky");
        Scolls.forEach((e) => {
          e.classList.add("sticky-pin");
        });
      } else {
        const Scolls = document.querySelectorAll(".sticky");
        Scolls.forEach((e) => {
          e.classList.remove("sticky-pin");
        });
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const onScroll = () => {
    const sections = document.querySelectorAll(".side-menu__item");
    const scrollPos =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.querySelector("body")?.scrollTop ||
      0;

    sections.forEach((elem) => {
      const value = elem.getAttribute("href") ?? "";
      const fragmentIndex = value.indexOf("#");
      const fragment =
        fragmentIndex !== -1 ? value.substring(fragmentIndex + 1) : "";

      if (fragment) {
        const refElement = document.getElementById(fragment);

        if (refElement) {
          const scrollTopMinus = scrollPos + 73;
          if (
            refElement.offsetTop <= scrollTopMinus &&
            refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
          ) {
            elem.classList.add("active");
          } else {
            elem.classList.remove("active");
          }
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <>
      <Seo title={"Landing"} />

      <header className="app-header">
        <div className="main-header-container container-fluid">
          <div className="header-content-left">
            <div className="header-element">
              <div className="horizontal-logo">
                <Link href="/dashboards/crm/" className="header-logo">
                  <img
                    src="../assets/images/brand-logos/toggle-logo.png"
                    alt="logo"
                    className="toggle-logo"
                  />
                  <img
                    src="../assets/images/brand-logos/toggle-dark.png"
                    alt="logo"
                    className="toggle-dark"
                  />
                </Link>
              </div>
            </div>

            <div className="header-element">
              <Link
                href="#!"
                scroll={false}
                className="sidemenu-toggle header-link"
                data-bs-toggle="sidebar"
              >
                <span className="open-toggle" >
                  <i className="ri-menu-3-line fs-20"></i>
                </span>
              </Link>
            </div>
          </div>

          <div className="header-content-right">
            <div className="header-element align-items-center">
              <div className="btn-list d-lg-none d-block">
                <Link href="/sign-in/" className="btn btn-primary-light">
                  Sign In
                </Link>
                <Button
                  variant="success"
                  className="btn btn-icon btn-success"
                  data-bs-toggle="offcanvas"
                  onClick={() => Switchericon()}
                  data-bs-target="#switcher-canvas"
                >
                  <i className="ri-settings-3-line"></i>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <aside className="app-sidebar sticky" id="sidebar">
        <div className="container-xl">
          <div className="main-sidebar">
            <nav className="main-menu-container nav nav-pills sub-open">
              <div className="landing-logo-container">
                <div className="horizontal-logo">
                  <Link href="/dashboards/crm/" className="header-logo">
                    <img
                      src="../assets/images/brand-logos/desktop-logo.png"
                      alt="logo"
                      className="desktop-logo"
                    />
                    <img
                      src="../assets/images/brand-logos/desktop-white.png"
                      alt="logo"
                      className="desktop-white"
                    />
                  </Link>
                </div>
              </div>
              <div className="slide-left d-none" id="slide-left">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#7b8191"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
                </svg>
              </div>
              <ul className="main-menu">
                <li className="slide">
                  <Link className="side-menu__item" href="#home">
                    <span className="side-menu__label">Home</span>
                  </Link>
                </li>
                <li className="slide">
                  <Link href="#about" className="side-menu__item">
                    <span className="side-menu__label">About</span>
                  </Link>
                </li>
                <li className="slide">
                  <Link href="#features" className="side-menu__item">
                    <span className="side-menu__label">Features</span>
                  </Link>
                </li>
                <li className="slide">
                  <Link href="#testimonials" className="side-menu__item">
                    <span className="side-menu__label">Clients</span>
                  </Link>
                </li>
                <li className="slide">
                  <Link href="#team" className="side-menu__item">
                    <span className="side-menu__label">Team</span>
                  </Link>
                </li>
                <li className="slide">
                  <Link href="#pricing" className="side-menu__item">
                    <span className="side-menu__label">Pricing</span>
                  </Link>
                </li>
                <li className="slide">
                  <Link href="#faq" className="side-menu__item">
                    <span className="side-menu__label">{`Faq's`}</span>
                  </Link>
                </li>
                <li className="slide">
                  <Link href="#contact" className="side-menu__item">
                    <span className="side-menu__label">Contact</span>
                  </Link>
                </li>
              </ul>
              <div className="slide-right" id="slide-right">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#7b8191"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
                </svg>
              </div>
              <div className="d-lg-flex d-none">
                <div className="btn-list d-lg-flex d-none mt-lg-2 mt-xl-0 mt-0">
                  <Link href="/sign-in" className="btn btn-wave btn-primary">
                    Sign In
                  </Link>
                  <button
                    className="btn btn-wave btn-icon btn-light switcher-icon"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#switcher-canvas"
                    onClick={() => Switchericon()}
                  >
                    <i className="ri-settings-3-line"></i>
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </aside>
      <div className="main-content landing-main" >
        <div className="landing-banner" id="home">
          <section className="section">
            <div className="container main-banner-container pb-lg-0">
              <Row>
                <Col xxl={7} xl={7} lg={7} md={8}>
                  <div className="py-lg-5">
                    <div className="mb-3">
                      <h5 className="fw-semibold text-fixed-white op-9">
                        BRILLIANCE IN EXECUTION
                      </h5>
                    </div>
                    <p className="landing-banner-heading mb-3">
                      Your sure stop place for best theme ends here with
                      <span className="text-secondary">YNEX !</span>
                    </p>
                    <div className="fs-16 mb-5 text-fixed-white op-7">
                      ynex - Now you can use this admin template to design
                      stunning dashboards that will wow your target viewers or
                      users to no end.
                    </div>
                    <Link
                      href="/dashboards/crm"
                      className="m-1 btn btn-primary"
                    >
                      View Demos
                      <i className="ri-eye-line ms-2 align-middle"></i>
                    </Link>
                  </div>
                </Col>
                <Col xxl={5} xl={5} lg={5} md={4}>
                  <div className="text-end landing-main-image landing-heading-img">
                    <img
                      src="../assets/images/media/landing/1.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </section>
        </div>
        <section className="section section-bg " id="statistics">
          <div className="container text-center position-relative">
            <p className="fs-12 fw-semibold text-success mb-1">
              <span className="landing-section-heading">STATISTICS</span>
            </p>
            <h3 className="fw-semibold mb-2">
              More than 120+ projects completed.
            </h3>
            <Row className=" justify-content-center">
              <Col xl={7}>
                <p className="text-muted fs-15 mb-5 fw-normal">
                  We are proud to have top className clients and customers,which
                  motivates us to work more on projects.
                </p>
              </Col>
            </Row>
            <Row className="  g-2 justify-content-center">
              <Col xl={12}>
                <Row className=" justify-content-evenly">
                  <Col xl={2} lg={4} md={6} sm={6} className="col-12 mb-3">
                    <div className="p-3 text-center rounded-2 bg-white border">
                      <span className="mb-3 avatar avatar-lg avatar-rounded bg-primary-transparent">
                        <i className="fs-24 bx bx-spreadsheet"></i>
                      </span>
                      <h3 className="fw-semibold mb-0 text-dark">120+</h3>
                      <p className="mb-1 fs-14 op-7 text-muted ">Projects</p>
                    </div>
                  </Col>
                  <Col xl={2} lg={4} md={6} sm={6} className="col-12 mb-3">
                    <div className="p-3 text-center rounded-2 bg-white border">
                      <span className="mb-3 avatar avatar-lg avatar-rounded bg-primary-transparent">
                        <i className="fs-24 bx bx-user-plus"></i>
                      </span>
                      <h3 className="fw-semibold mb-0 text-dark">20K+</h3>
                      <p className="mb-1 fs-14 op-7 text-muted ">Clients</p>
                    </div>
                  </Col>
                  <Col xl={2} lg={4} md={6} sm={6} className="col-12 mb-3">
                    <div className="p-3 text-center rounded-2 bg-white border">
                      <span className="mb-3 avatar avatar-lg avatar-rounded bg-primary-transparent">
                        <i className="fs-24 bx bx-money"></i>
                      </span>
                      <h3 className="fw-semibold mb-0 text-dark">$45.8M</h3>
                      <p className="mb-1 fs-14 op-7 text-muted ">
                        Income Earned
                      </p>
                    </div>
                  </Col>
                  <Col xl={2} lg={4} md={6} sm={6} className="col-12 mb-3">
                    <div className="p-3 text-center rounded-2 bg-white border">
                      <span className="mb-3 avatar avatar-lg avatar-rounded bg-primary-transparent">
                        <i className="fs-24 bx bx-user-circle"></i>
                      </span>
                      <h3 className="fw-semibold mb-0 text-dark">854</h3>
                      <p className="mb-1 fs-14 op-7 text-muted ">Employees</p>
                    </div>
                  </Col>
                  <Col xl={2} lg={4} md={6} sm={6} className="col-12 mb-3">
                    <div className="p-3 text-center rounded-2 bg-white border">
                      <span className="mb-3 avatar avatar-lg avatar-rounded bg-primary-transparent">
                        <i className="fs-24 bx bx-calendar"></i>
                      </span>
                      <h3 className="fw-semibold mb-0 text-dark">5+</h3>
                      <p className="mb-1 fs-14 op-7 text-muted ">
                        Years of Experience
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </section>
        <section className="section " id="about">
          <div className="container text-center">
            <p className="fs-12 fw-semibold text-success mb-1">
              <span className="landing-section-heading">CUSTOMIZATION</span>
            </p>
            <h3 className="fw-semibold mb-2">
              Designed with precision and well documented
            </h3>
            <Row className=" justify-content-center">
              <Col xl={7}>
                <p className="text-muted fs-15 mb-3 fw-normal">
                  ynex comes with multiple customization options that are very
                  easy to implement.
                </p>
              </Col>
            </Row>
            <Row className=" justify-content-between align-items-center mx-0">
              <Col
                xxl={5}
                xl={5}
                lg={5}
                className=" customize-image text-center"
              >
                <div className="text-lg-end">
                  <img
                    src="../assets/images/media/landing/3.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </Col>
              <Col
                xxl={6}
                xl={6}
                lg={6}
                className="pt-5 pb-0 px-lg-2 px-5 text-start"
              >
                <h5 className="text-lg-start fw-semibold mb-0">
                  Present your awesome product
                </h5>
                <p className=" text-muted">
                  lorem ipsum, dolor sit var ameto condesetrat aiatel varen or
                  damsenlel verman code Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit
                </p>
                <Row>
                  <Col md={12} className="col-12">
                    <div className="d-flex">
                      <span>
                        <i className="bx bxs-badge-check text-primary fs-18"></i>
                      </span>
                      <div className="ms-2">
                        <h6 className="fw-semibold mb-0">
                          Can Switch Easily From Vertical to HorizontalMenu.
                        </h6>
                        <p className=" text-muted">
                          lorem ipsum, dolor sit var ameto condesetrat aiatel
                          varen or damsenlel verman code Lorem ipsum, dolor sit
                          amet consectetur
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={12} className="col-12">
                    <div className="d-flex">
                      <span>
                        <i className="bx bxs-badge-check text-primary fs-18"></i>
                      </span>
                      <div className="ms-2">
                        <h6 className="fw-semibold mb-0">
                          Switch Easily From One Color to Another Color style
                        </h6>
                        <p className=" text-muted">
                          lorem ipsum, dolor sit var ameto condesetrat aiatel
                          varen or damsenlel verman code Lorem ipsum, dolor sit
                          amet consectetur
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={12} className="col-12 ">
                    <div className="d-flex">
                      <span>
                        <i className="bx bxs-badge-check text-primary fs-18"></i>
                      </span>
                      <div className="ms-2">
                        <h6 className="fw-semibold mb-0">
                          Switch Easily From Fixed to Scrollable Layout.
                        </h6>
                        <p className=" text-muted">
                          lorem ipsum, dolor sit var ameto condesetrat aiatel
                          varen or damsenlel verman code Lorem ipsum, dolor sit
                          amet consectetur
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </section>
        <section className="section section-bg " id="our-mission">
          <div className="container text-center">
            <p className="fs-12 fw-semibold text-success mb-1">
              <span className="landing-section-heading">OUR MISSION</span>
            </p>
            <h2 className="fw-semibold mb-2">
              Our mission consists of 8 major steps.
            </h2>
            <div className="row justify-content-center mb-5">
              <Col xl={7}>
                <p className="text-muted fs-15mb-0 fw-normal">
                  Our mission is to make web design easy, so you can focus on
                  building your brand.
                </p>
              </Col>
            </div>
            <Row>
              <Col xxl={3} xl={3} lg={3} md={6} sm={6} className="col-12">
                <Card className=" custom-card text-start landing-missions">
                  <Card.Body>
                    <div className="align-items-top">
                      <div className="mb-2">
                        <span className="avatar avatar-lg avatar-rounded bg-primary-transparent">
                          <i className="bx bx-badge-check fs-25"></i>
                        </span>
                      </div>
                      <div>
                        <h6 className="fw-semibold mb-1">Design Quality</h6>
                        <p className="mb-0 text-muted">
                          lorem ipsum, dolor sit var ameto condesetrat aiatel
                          varen or damsenlel verman code Lorem ipsum, dolor sit
                          amet consectetur adipisicing elit
                        </p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col xxl={3} xl={3} lg={3} md={6} sm={6} className="col-12">
                <Card className=" custom-card text-start landing-missions">
                  <Card.Body>
                    <div className="align-items-top">
                      <div className="mb-2">
                        <span className="avatar avatar-lg avatar-rounded bg-primary-transparent">
                          <i className="bx bx-file fs-25"></i>
                        </span>
                      </div>
                      <div>
                        <h6 className="fw-semibold mb-1">Documentation</h6>
                        <p className="mb-0 text-muted">
                          lorem ipsum, dolor sit var ameto condesetrat aiatel
                          varen or damsenlel verman code Lorem ipsum, dolor sit
                          amet consectetur adipisicing elit
                        </p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col xxl={3} xl={3} lg={3} md={6} sm={6} className="col-12">
                <Card className=" custom-card text-start landing-missions">
                  <Card.Body>
                    <div className="align-items-top">
                      <div className="mb-2">
                        <span className="avatar avatar-lg avatar-rounded  bg-primary-transparent">
                          <i className="bx bx-cog fs-25"></i>
                        </span>
                      </div>
                      <div>
                        <h6 className="fw-semibold mb-1">Customization</h6>
                        <p className="mb-0 text-muted">
                          lorem ipsum, dolor sit var ameto condesetrat aiatel
                          varen or damsenlel verman code Lorem ipsum, dolor sit
                          amet consectetur adipisicing elit
                        </p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col xxl={3} xl={3} lg={3} md={6} sm={6} className="col-12">
                <Card className=" custom-card text-start landing-missions">
                  <Card.Body>
                    <div className="align-items-top">
                      <div className="mb-2">
                        <span className="avatar avatar-lg avatar-rounded bg-primary-transparent">
                          <i className="bx bx-cloud-upload fs-25"></i>
                        </span>
                      </div>
                      <div>
                        <h6 className="fw-semibold mb-1">Regular Updates</h6>
                        <p className="mb-0 text-muted">
                          lorem ipsum, dolor sit var ameto condesetrat aiatel
                          varen or damsenlel verman code Lorem ipsum, dolor sit
                          amet consectetur adipisicing elit
                        </p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col xxl={3} xl={3} lg={3} md={6} sm={6} className="col-12">
                <Card className=" custom-card text-start landing-missions">
                  <Card.Body>
                    <div className="align-items-top">
                      <div className="mb-2">
                        <span className="avatar avatar-lg avatar-rounded bg-primary-transparent">
                          <i className="bx bx-support fs-25"></i>
                        </span>
                      </div>
                      <div>
                        <h6 className="fw-semibold mb-1">24/7 Support</h6>
                        <p className="mb-0 text-muted">
                          lorem ipsum, dolor sit var ameto condesetrat aiatel
                          varen or damsenlel verman code Lorem ipsum, dolor sit
                          amet consectetur adipisicing elit
                        </p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col xxl={3} xl={3} lg={3} md={6} sm={6} className="col-12">
                <Card className=" custom-card text-start landing-missions">
                  <Card.Body>
                    <div className="align-items-top">
                      <div className="mb-2">
                        <span className="avatar avatar-lg avatar-rounded bg-primary-transparent">
                          <i className="bx bx-image fs-25"></i>
                        </span>
                      </div>
                      <div>
                        <h6 className="fw-semibold mb-1">
                          Pre-Built Theme Styles
                        </h6>
                        <p className="mb-0 text-muted">
                          lorem ipsum, dolor sit var ameto condesetrat aiatel
                          varen or damsenlel verman code Lorem ipsum, dolor sit
                          amet consectetur adipisicing elit
                        </p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col xxl={3} xl={3} lg={3} md={6} sm={6} className="col-12">
                <Card className=" custom-card text-start landing-missions">
                  <Card.Body>
                    <div className="align-items-top">
                      <div className="mb-2">
                        <span className="avatar avatar-lg avatar-rounded bg-primary-transparent">
                          <i className="bx bx-compass fs-25"></i>
                        </span>
                      </div>
                      <div>
                        <h6 className="fw-semibold mb-1">Compatibility</h6>
                        <p className="mb-0 text-muted">
                          lorem ipsum, dolor sit var ameto condesetrat aiatel
                          varen or damsenlel verman code Lorem ipsum, dolor sit
                          amet consectetur adipisicing elit
                        </p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col xxl={3} xl={3} lg={3} md={6} sm={6} className=" col-12">
                <Card className=" custom-card text-start landing-missions">
                  <Card.Body>
                    <div className="align-items-top">
                      <div className="mb-2">
                        <span className="avatar avatar-lg avatar-rounded bg-primary-transparent">
                          <i className="bx bx-desktop fs-25"></i>
                        </span>
                      </div>
                      <div>
                        <h6 className="fw-semibold mb-1">Fully Responsive</h6>
                        <p className="mb-0 text-muted">
                          lorem ipsum, dolor sit var ameto condesetrat aiatel
                          varen or damsenlel verman code Lorem ipsum, dolor sit
                          amet consectetur adipisicing elit
                        </p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </section>
        <section className="section landing-Features" id="features">
          <div className="container text-center">
            <p className="fs-12 fw-semibold text-success mb-1">
              <span className="landing-section-heading">Features</span>
            </p>
            <h2 className="fw-semibold mb-2 text-fixed-white ">
              Features Used in YNEX
            </h2>
            <Row className=" justify-content-center">
              <Col xl={7}>
                <p className="text-fixed-white op-8 fs-15 mb-3 fw-normal">
                  Some of the reviews our clients gave which brings motivation
                  to work for future projects.
                </p>
              </Col>
            </Row>
            <div className="text-start">
              <div className="justify-content-center">
                <div className="">
                  <div className="feature-logos mt-sm-5 flex-wrap">
                    <div className="ms-sm-5 ms-2 text-center">
                      <img
                        src="../assets/images/media/landing/web/10.png"
                        alt="image"
                        className="featur-icon"
                      />
                      <h5 className="mt-3 text-fixed-white ">Nextjs</h5>
                    </div>
                    <div className="ms-sm-5 ms-2 text-center">
                      <img
                        src="../assets/images/media/landing/web/11.png"
                        alt="image"
                        className="featur-icon"
                      />
                      <h5 className="mt-3 text-fixed-white ">
                        React Bootstrap
                      </h5>
                    </div>
                    <div className="ms-sm-5 ms-2 text-center">
                      <img
                        src="../assets/images/media/landing/web/4.png"
                        alt="image"
                        className="featur-icon"
                      />
                      <h5 className="mt-3 text-fixed-white ">Sass</h5>
                    </div>
                    <div className="ms-sm-5 ms-2 text-center">
                      <img
                        src="../assets/images/media/landing/web/9.png"
                        alt="image"
                        className="featur-icon"
                      />
                      <h5 className="mt-3 text-fixed-white ">Yarn</h5>
                    </div>
                    <div className="ms-sm-5 ms-2 text-center">
                      <img
                        src="../assets/images/media/landing/web/6.png"
                        alt="image"
                        className="featur-icon"
                      />
                      <h5 className="mt-3 text-fixed-white ">NPM</h5>
                    </div>
                    <div className="ms-sm-5 ms-2 text-center">
                      <img
                        src="../assets/images/media/landing/web/12.png"
                        alt="image"
                        className="featur-icon"
                      />
                      <h5 className="mt-3 text-fixed-white ">Mui</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination mt-4"></div>
            </div>
          </div>
        </section>
        <section
          className="section landing-testimonials section-bg"
          id="testimonials"
        >
          <div className="container text-center">
            <p className="fs-12 fw-semibold text-success mb-1">
              <span className="landing-section-heading">TESTIMONIALS</span>
            </p>
            <h3 className="fw-semibold mb-2">
              We never failed to reach expectations
            </h3>
            <Row className="row justify-content-center">
              <Col xl={7}>
                <p className="text-muted fs-15 mb-5 fw-normal">
                  Some of the reviews our clients gave which brings motivation
                  to work for future projects.
                </p>
              </Col>
            </Row>
{/*             <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Row>
                  <Col xxl={4} xl={6} lg={6} md={6} sm={12}>
                    <Card className=" custom-card testimonial-card">
                      <Card.Body>
                        <div className="d-flex align-items-center mb-3">
                          <span className="avatar avatar-md avatar-rounded me-3">
                            <img src="../assets/images/faces/15.jpg" alt="" />
                          </span>
                          <div>
                            <p className="mb-0 fw-semibold fs-14">
                              Json Taylor
                            </p>
                            <p className="mb-0 fs-10 fw-semibold text-muted">
                              CEO OF NORJA
                            </p>
                          </div>
                        </div>
                        <div className="mb-3">
                          <span className="text-muted">
                            - Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Earum autem quaerat distinctio --
                          </span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <span className="text-muted">Rating : </span>
                            <span className="text-warning d-block ms-1">
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-half-fill"></i>
                            </span>
                          </div>
                          <div className="float-end fs-12 fw-semibold text-muted text-end">
                            <span>12 days ago</span>
                            <span className="d-block fw-normal fs-12 text-success">
                              <i>Json Taylor</i>
                            </span>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xxl={4} xl={6} lg={6} md={6} sm={12}>
                    <Card className=" custom-card testimonial-card">
                      <Card.Body>
                        <div className="d-flex align-items-center mb-3">
                          <span className="avatar avatar-md avatar-rounded me-3">
                            <img src="../assets/images/faces/4.jpg" alt="" />
                          </span>
                          <div>
                            <p className="mb-0 fw-semibold fs-14">
                              Melissa Blue
                            </p>
                            <p className="mb-0 fs-10 fw-semibold text-muted">
                              MANAGER CHO
                            </p>
                          </div>
                        </div>
                        <div className="mb-3">
                          <span className="text-muted">
                            - Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Earum autem quaerat distinctio --
                          </span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <span className="text-muted">Rating : </span>
                            <span className="text-warning d-block ms-1">
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-half-fill"></i>
                            </span>
                          </div>
                          <div className="float-end fs-12 fw-semibold text-muted text-end">
                            <span>7 days ago</span>
                            <span className="d-block fw-normal fs-12 text-success">
                              <i>Melissa Blue</i>
                            </span>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xxl={4} xl={6} lg={6} md={6} sm={12}>
                    <Card className=" custom-card testimonial-card">
                      <Card.Body>
                        <div className="d-flex align-items-center mb-3">
                          <span className="avatar avatar-md avatar-rounded me-3">
                            <img src="../assets/images/faces/2.jpg" alt="" />
                          </span>
                          <div>
                            <p className="mb-0 fw-semibold fs-14">
                              Kiara Advain
                            </p>
                            <p className="mb-0 fs-10 fw-semibold text-muted">
                              CEO OF EMPIRO
                            </p>
                          </div>
                        </div>
                        <div className="mb-3">
                          <span className="text-muted">
                            - Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Earum autem quaerat distinctio --
                          </span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <span className="text-muted">Rating : </span>
                            <span className="text-warning d-block ms-1">
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-line"></i>
                            </span>
                          </div>
                          <div className="float-end fs-12 fw-semibold text-muted text-end">
                            <span>2 days ago</span>
                            <span className="d-block fw-normal fs-12 text-success">
                              <i>Kiara Advain</i>
                            </span>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </SwiperSlide>

              <SwiperSlide>
                <Row>
                  <Col xxl={4} xl={6} lg={6} md={6} sm={12}>
                    <Card className=" custom-card testimonial-card">
                      <Card.Body>
                        <div className="d-flex align-items-center mb-3">
                          <span className="avatar avatar-md avatar-rounded me-3">
                            <img src="../assets/images/faces/10.jpg" alt="" />
                          </span>
                          <div>
                            <p className="mb-0 fw-semibold fs-14">
                              Jhonson Smith
                            </p>
                            <p className="mb-0 fs-10 fw-semibold text-muted">
                              CHIEF SECRETARY MBIO
                            </p>
                          </div>
                        </div>
                        <div className="mb-3">
                          <span className="text-muted">
                            -Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Earum autem quaerat distinctio --
                          </span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <span className="text-muted">Rating : </span>
                            <span className="text-warning d-block ms-1">
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-half-fill"></i>
                            </span>
                          </div>
                          <div className="float-end fs-12 fw-semibold text-muted text-end">
                            <span>16 hrs ago</span>
                            <span className="d-block fw-normal fs-12 text-success">
                              <i>Jhonson Smith</i>
                            </span>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xxl={4} xl={6} lg={6} md={6} sm={12}>
                    <Card className=" custom-card testimonial-card">
                      <Card.Body>
                        <div className="d-flex align-items-center mb-3">
                          <span className="avatar avatar-md avatar-rounded me-3">
                            <img src="../assets/images/faces/12.jpg" alt="" />
                          </span>
                          <div>
                            <p className="mb-0 fw-semibold fs-14">
                              Dwayne Stort
                            </p>
                            <p className="mb-0 fs-10 fw-semibold text-muted">
                              CEO ARMEDILLO
                            </p>
                          </div>
                        </div>
                        <div className="mb-3">
                          <span className="text-muted">
                            - Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Earum autem quaerat distinctio --
                          </span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <span className="text-muted">Rating : </span>
                            <span className="text-warning d-block ms-1">
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-line"></i>
                            </span>
                          </div>
                          <div className="float-end fs-12 fw-semibold text-muted text-end">
                            <span>22 days ago</span>
                            <span className="d-block fw-normal fs-12 text-success">
                              <i>Dwayne Stort</i>
                            </span>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xxl={4} xl={6} lg={6} md={6} sm={12}>
                    <Card className=" custom-card testimonial-card">
                      <Card.Body>
                        <div className="d-flex align-items-center mb-3">
                          <span className="avatar avatar-md avatar-rounded me-3">
                            <img src="../assets/images/faces/3.jpg" alt="" />
                          </span>
                          <div>
                            <p className="mb-0 fw-semibold fs-14">
                              Jasmine Kova
                            </p>
                            <p className="mb-0 fs-10 fw-semibold text-muted">
                              AGGENT AMIO
                            </p>
                          </div>
                        </div>
                        <div className="mb-3">
                          <span className="text-muted">
                            - Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Earum autem quaerat distinctio --
                          </span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <span className="text-muted">Rating : </span>
                            <span className="text-warning d-block ms-1">
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-half-fill"></i>
                            </span>
                          </div>
                          <div className="float-end fs-12 fw-semibold text-muted text-end">
                            <span>26 days ago</span>
                            <span className="d-block fw-normal fs-12 text-success">
                              <i>Jasmine Kova</i>
                            </span>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </SwiperSlide>

              <SwiperSlide>
                <Row>
                  <Col xxl={4} xl={6} lg={6} md={6} sm={12}>
                    <Card className=" custom-card testimonial-card">
                      <Card.Body>
                        <div className="d-flex align-items-center mb-3">
                          <span className="avatar avatar-md avatar-rounded me-3">
                            <img src="../assets/images/faces/16.jpg" alt="" />
                          </span>
                          <div>
                            <p className="mb-0 fw-semibold fs-14">Dolph MR</p>
                            <p className="mb-0 fs-10 fw-semibold text-muted">
                              CEO MR BRAND
                            </p>
                          </div>
                        </div>
                        <div className="mb-3">
                          <span className="text-muted">
                            - Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Earum autem quaerat distinctio --
                          </span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <span className="text-muted">Rating : </span>
                            <span className="text-warning d-block ms-1">
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                            </span>
                          </div>
                          <div className="float-end fs-12 fw-semibold text-muted text-end">
                            <span>1 month ago</span>
                            <span className="d-block fw-normal fs-12 text-success">
                              <i>Dolph MR</i>
                            </span>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xxl={4} xl={6} lg={6} md={6} sm={12}>
                    <Card className=" custom-card testimonial-card">
                      <Card.Body>
                        <div className="d-flex align-items-center mb-3">
                          <span className="avatar avatar-md avatar-rounded me-3">
                            <img src="../assets/images/faces/5.jpg" alt="" />
                          </span>
                          <div>
                            <p className="mb-0 fw-semibold fs-14">
                              Brenda Simpson
                            </p>
                            <p className="mb-0 fs-10 fw-semibold text-muted">
                              CEO AIBMO
                            </p>
                          </div>
                        </div>
                        <div className="mb-3">
                          <span className="text-muted">
                            - Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Earum autem quaerat distinctio --
                          </span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <span className="text-muted">Rating : </span>
                            <span className="text-warning d-block ms-1">
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-half-fill"></i>
                            </span>
                          </div>
                          <div className="float-end fs-12 fw-semibold text-muted text-end">
                            <span>1 month ago</span>
                            <span className="d-block fw-normal fs-12 text-success">
                              <i>Brenda Simpson</i>
                            </span>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xxl={4} xl={6} lg={6} md={6} sm={12}>
                    <Card className=" custom-card testimonial-card">
                      <Card.Body>
                        <div className="d-flex align-items-center mb-3">
                          <span className="avatar avatar-md avatar-rounded me-3">
                            <img src="../assets/images/faces/7.jpg" alt="" />
                          </span>
                          <div>
                            <p className="mb-0 fw-semibold fs-14">Julia Sams</p>
                            <p className="mb-0 fs-10 fw-semibold text-muted">
                              CHIEF SECRETARY BHOL
                            </p>
                          </div>
                        </div>
                        <div className="mb-3">
                          <span className="text-muted">
                            - Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Earum autem quaerat distinctio --
                          </span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <span className="text-muted">Rating : </span>
                            <span className="text-warning d-block ms-1">
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                            </span>
                          </div>
                          <div className="float-end fs-12 fw-semibold text-muted text-end">
                            <span>2 month ago</span>
                            <span className="d-block fw-normal fs-12 text-success">
                              <i>Julia Sams</i>
                            </span>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </SwiperSlide>
            </Swiper> */}
          </div>
        </section>
        <section className="section  section-bg" id="team">
          <div className="container text-center">
            <p className="fs-12 fw-semibold text-success mb-1">
              <span className="landing-section-heading">OUR TEAM</span>
            </p>
            <h3 className="fw-semibold mb-2">
              Great things in business are done by a team.
            </h3>
            <Row className=" justify-content-center">
              <Col xl={7}>
                <p className="text-muted fs-15 mb-5 fw-normal">
                  Our team consists of highly qulified employees that works hard
                  to raise company standards.
                </p>
              </Col>
            </Row>
            <Row>
              <Col xxl={3} xl={3} lg={6} md={6} sm={12}>
                <Card className=" custom-card text-center team-card ">
                  <Card.Body className="p-5">
                    <span className="avatar avatar-xxl avatar-rounded mb-3 team-avatar">
                      <img src="../assets/images/faces/15.jpg" alt="" />
                    </span>
                    <p className="fw-semibold fs-17 mb-0 text-default">
                      Peter Parker
                    </p>
                    <span className="text-muted fs-14 text-primary fw-semibold">
                      Director
                    </span>
                    <p className="text-muted mt-2 fs-13">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                    <div className="mt-2">
                      <Link
                        href="/pages/profile"
                        className="btn btn-light"
                        target="_blank"
                      >
                        View profile
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col xxl={3} xl={3} lg={6} md={6} sm={12}>
                <Card className=" custom-card text-center team-card ">
                  <Card.Body className=" p-5">
                    <span className="avatar avatar-xxl avatar-rounded mb-3 team-avatar">
                      <img src="../assets/images/faces/12.jpg" alt="" />
                    </span>
                    <p className="fw-semibold fs-17 mb-0 text-default">
                      Andrew garfield
                    </p>
                    <span className="text-muted fs-14 text-primary fw-semibold">
                      Manager
                    </span>
                    <p className="text-muted mt-2 fs-13">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                    <div className="mt-2">
                      <Link
                        href="/pages/profile"
                        className="btn btn-light"
                        target="_blank"
                      >
                        View profile
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col xxl={3} xl={3} lg={6} md={6} sm={12}>
                <Card className=" custom-card text-center team-card ">
                  <Card.Body className=" p-5">
                    <span className="avatar avatar-xxl avatar-rounded mb-3 team-avatar">
                      <img src="../assets/images/faces/5.jpg" alt="" />
                    </span>
                    <p className="fw-semibold fs-17 mb-0 text-default">
                      Json Taylor
                    </p>
                    <span className="text-muted fs-14 text-primary fw-semibold">
                      Web Designer
                    </span>
                    <p className="text-muted mt-2 fs-13">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                    <div className="mt-2">
                      <Link
                        href="/pages/profile"
                        className="btn btn-light"
                        target="_blank"
                      >
                        View profile
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col xxl={3} xl={3} lg={6} md={6} sm={12}>
                <Card className=" custom-card text-center team-card ">
                  <Card.Body className=" p-5">
                    <span className="avatar avatar-xxl avatar-rounded mb-3 team-avatar">
                      <img src="../assets/images/faces/1.jpg" alt="" />
                    </span>
                    <p className="fw-semibold fs-17 mb-0 text-default">
                      Elizabeth Rose
                    </p>
                    <span className="text-muted fs-14 text-primary fw-semibold">
                      HR
                    </span>
                    <p className="text-muted mt-2 fs-13">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                    <div className="mt-2">
                      <Link
                        href="/pages/profile"
                        className="btn btn-light"
                        target="_blank"
                      >
                        View profile
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <div className="mt-5">
              <button className="btn btn-primary">View All</button>
            </div>
          </div>
        </section>
        <section className="section  " id="pricing">
          <div className="container text-center">
            <p className="fs-12 fw-semibold text-success mb-1">
              <span className="landing-section-heading">PRICING</span>
            </p>
            <h3 className="fw-semibold mb-2">
              ynex comes with most affordable pricing range.
            </h3>
            <Row className=" justify-content-center">
              <Col xl={9}>
                <p className="text-muted fs-15 mb-5 fw-normal">
                  Our plans are most affordable and are mainly placed by
                  focussing every category in the sector even basic plan helps
                  better.
                </p>
              </Col>
            </Row>
            <Tab.Container defaultActiveKey="1">
              <div className="d-flex justify-content-center mb-4">
                <Nav
                  className="nav nav-tabs mb-3 tab-style-6 bg-primary-transparent"
                  id="myTab"
                  role="tablist"
                >
                  <Nav.Item className="" role="presentation">
                    <Nav.Link
                      eventKey="1"
                      className=""
                      id="pricing-monthly"
                      data-bs-toggle="tab"
                      data-bs-target="#pricing-monthly-pane"
                      type="button"
                      role="tab"
                      aria-controls="pricing-monthly-pane"
                      aria-selected="true"
                    >
                      Monthly
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="" role="presentation">
                    <Nav.Link
                      eventKey="2"
                      className=""
                      id="pricing-yearly"
                      data-bs-toggle="tab"
                      data-bs-target="#pricing-yearly-pane"
                      type="button"
                      role="tab"
                      aria-controls="pricing-yearly-pane"
                      aria-selected="false"
                    >
                      Yearly
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
              <Card className="custom-card overflow-hidden shadow-none">
                <Card.Body className="p-0">
                  <Tab.Content className="" id="myTabContent">
                    <Tab.Pane
                      eventKey="1"
                      className="p-0"
                      id="pricing-monthly-pane"
                      role="tabpanel"
                      aria-labelledby="pricing-monthly"
                      tabIndex={0}
                    >
                      <Row>
                        <Col
                          xxl={4}
                          xl={4}
                          lg={4}
                          md={4}
                          sm={12}
                          className="border-end border-inline-end-dashed"
                        >
                          <div className="p-4">
                            <h6 className="fw-semibold text-center">BASIC</h6>
                            <div className="py-4 d-flex align-items-center justify-content-center">
                              <div className="pricing-svg1">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  data-name="Layer 1"
                                  viewBox="0 0 168 168"
                                >
                                  <path
                                    fill="#845adf"
                                    d="M48.877 36.254c3.742 4.464 10.559 4.995 10.847 5.016.048.003.096.005.143.005A2 2 0 0 0 61.84 39.6c.045-.274 1.07-6.786-2.716-11.306-3.742-4.464-10.559-4.995-10.848-5.015a2.017 2.017 0 0 0-2.114 1.669c-.045.274-1.07 6.786 2.715 11.304zm7.18-5.39a9.88 9.88 0 0 1 1.938 6.072 11.383 11.383 0 0 1-6.053-3.252v.001a9.88 9.88 0 0 1-1.938-6.071 11.378 11.378 0 0 1 6.053 3.25zm74.388 24.431c-.278.041-6.858 1.055-10.205 6.168-3.3 5.043-1.996 11.909-1.938 12.199a2 2 0 0 0 1.96 1.613 2.104 2.104 0 0 0 .29-.02c.279-.042 6.859-1.055 10.205-6.169 3.3-5.043 1.996-11.908 1.939-12.198a2.004 2.004 0 0 0-2.251-1.593zm-3.035 11.601a10.55 10.55 0 0 1-5.397 3.854 12.464 12.464 0 0 1 1.575-7.095v-.001a10.549 10.549 0 0 1 5.396-3.855 12.47 12.47 0 0 1-1.574 7.097z"
                                  />
                                  <path
                                    fill="#403161"
                                    d="M138.16 29.515c-5.92-2.54-12.61-1.07-17.12.25-3.73 1.09-7.42 2.45-11.03 3.82a26.346 26.346 0 0 0 5.19-7.49 2 2 0 0 0-3.65-1.64c-4.46 9.92-16.63 14.39-19.27 15.26-.69.19-2.33.65-2.4.68a160.941 160.941 0 0 1-34.03 5.64 62.167 62.167 0 0 1-28.93-5.56c-.15-.06-2.81-1.31-3.99-1.93a2.002 2.002 0 0 0-1.85 3.55c.92.48 4.09 1.98 4.13 2 6.21 2.96 8.89 5.82 8.37 13.04a2.05 2.05 0 0 0 2 2.14 1.998 1.998 0 0 0 1.99-1.86 17.056 17.056 0 0 0-1.64-9.49A65.547 65.547 0 0 0 54 50.095v47.33a2.052 2.052 0 0 0-.5.39 2.017 2.017 0 0 0 .17 2.83l.33.29v12.34h-1a2 2 0 1 0 0 4s1 0 1 .01h11v13.99a3.999 3.999 0 0 0 4 4h12a3.999 3.999 0 0 0 4-4v-13.99s11 0 11-.01h1a2 2 0 0 0 0-4h-1v-12.34l.33-.29a2.017 2.017 0 0 0 .17-2.83 2.052 2.052 0 0 0-.5-.39v-53.96a34.048 34.048 0 0 1 12.77 1.16c1.9.56 5.13 1.9 5.55 4.59a2.04 2.04 0 0 0 2.28 1.67 2.003 2.003 0 0 0 1.67-2.29c-.56-3.6-3.53-6.37-8.35-7.81a36.359 36.359 0 0 0-4.83-1.06c1.37-.51 2.73-1.02 4.07-1.54 4.25-1.62 8.64-3.3 13.01-4.58 6.23-1.83 10.81-1.96 14.41-.41 3.99 1.71 8.47 5.05 7.2 11.29a6.907 6.907 0 0 1-4.21 4.86 5.702 5.702 0 0 1-5.49-.58 4.408 4.408 0 0 1-1.18-5.23 2.003 2.003 0 0 0-3.43-2.07c-2.16 3.59-.57 8.53 2.3 10.56a9.485 9.485 0 0 0 5.51 1.77 10.214 10.214 0 0 0 3.76-.73 10.847 10.847 0 0 0 6.66-7.79c1.39-6.82-2.09-12.56-9.54-15.76ZM63 113.275h-5v-8.79l.32.29a2.04 2.04 0 0 0 1.33.5 2.013 2.013 0 0 0 1.27-.45l2.08-1.7Zm10 18h-4v-13.99h4Zm8 0h-4v-13.99h4Zm2-18H67v-11c0-2.76 1.96-5 4.36-5h7.28c2.4 0 4.36 2.24 4.36 5Zm9 0h-5v-10.15l2.08 1.7a2.013 2.013 0 0 0 1.27.45 2.04 2.04 0 0 0 1.33-.5l.32-.29Zm0-14.14-1.71 1.51-5.62-4.59a8.31 8.31 0 0 0-3.74-2.43H69.07a8.31 8.31 0 0 0-3.74 2.43l-5.63 4.59-1.7-1.51v-49.22a168.852 168.852 0 0 0 33.11-5.71c.29-.07.59-.11.89-.17Z"
                                  />
                                  <path
                                    fill="#845adf"
                                    d="M146 147.275h-12.199a1.406 1.406 0 0 1 .124-.69.803.803 0 0 1 .468-.35 2 2 0 0 0-.732-3.93 4.834 4.834 0 0 0-3.152 2.198 5.182 5.182 0 0 0-.703 2.772h-1.612a5.182 5.182 0 0 0-.703-2.772 4.834 4.834 0 0 0-3.152-2.199 2.026 2.026 0 0 0-2.341 1.626 1.973 1.973 0 0 0 1.603 2.304.819.819 0 0 1 .474.351 1.406 1.406 0 0 1 .124.69H115.8a1.406 1.406 0 0 1 .124-.69.803.803 0 0 1 .468-.35 2 2 0 0 0-.732-3.93 4.834 4.834 0 0 0-3.152 2.198 5.182 5.182 0 0 0-.703 2.772h-1.612a5.182 5.182 0 0 0-.703-2.772 4.834 4.834 0 0 0-3.152-2.199 2.026 2.026 0 0 0-2.34 1.626 1.973 1.973 0 0 0 1.602 2.304.819.819 0 0 1 .474.351 1.406 1.406 0 0 1 .124.69H97.8a1.406 1.406 0 0 1 .124-.69.803.803 0 0 1 .468-.35 2 2 0 0 0-.732-3.93 4.834 4.834 0 0 0-3.152 2.198 5.182 5.182 0 0 0-.703 2.772h-1.612a5.182 5.182 0 0 0-.703-2.772 4.834 4.834 0 0 0-3.152-2.199 2.026 2.026 0 0 0-2.34 1.626 1.973 1.973 0 0 0 1.602 2.304.819.819 0 0 1 .474.351 1.406 1.406 0 0 1 .124.69h-8.397a1.41 1.41 0 0 1 .123-.69.805.805 0 0 1 .468-.35 2 2 0 0 0-.731-3.93 4.838 4.838 0 0 0-3.154 2.198 5.182 5.182 0 0 0-.702 2.772h-1.612a5.182 5.182 0 0 0-.702-2.772 4.838 4.838 0 0 0-3.154-2.199 2 2 0 1 0-.676 3.942.875.875 0 0 1 .401.319 1.384 1.384 0 0 1 .127.71h-8.388a1.41 1.41 0 0 1 .123-.69.805.805 0 0 1 .468-.35 2 2 0 0 0-.731-3.93 4.838 4.838 0 0 0-3.154 2.198 5.182 5.182 0 0 0-.702 2.772h-1.612a5.182 5.182 0 0 0-.702-2.772 4.838 4.838 0 0 0-3.154-2.199 2 2 0 1 0-.676 3.942.875.875 0 0 1 .401.319 1.384 1.384 0 0 1 .127.71h-8.388a1.41 1.41 0 0 1 .123-.69.805.805 0 0 1 .468-.35 2 2 0 0 0-.731-3.93 4.838 4.838 0 0 0-3.154 2.198 5.182 5.182 0 0 0-.702 2.772h-1.612a5.182 5.182 0 0 0-.702-2.772 4.838 4.838 0 0 0-3.154-2.199 2 2 0 1 0-.676 3.942.875.875 0 0 1 .401.319 1.384 1.384 0 0 1 .127.71H22a2 2 0 0 0-2 2c0 1.105 128 1.105 128 0a2 2 0 0 0-2-2Z"
                                  />
                                  <circle
                                    cx="2"
                                    cy="149.275"
                                    r="2"
                                    fill="#403161"
                                  />
                                  <path
                                    fill="#403161"
                                    d="M11 147.275H8a2 2 0 0 0 0 4h3a2 2 0 0 0 0-4zm149 0h-3a2 2 0 0 0 0 4h3a2 2 0 0 0 0-4z"
                                  />
                                  <circle
                                    cx="166"
                                    cy="149.275"
                                    r="2"
                                    fill="#403161"
                                  />
                                  <path
                                    fill="#845adf"
                                    d="M118.154 155.275h-8.308a2.006 2.006 0 0 0 0 4h8.308a2.006 2.006 0 0 0 0-4zm-60 0h-8.308a2.006 2.006 0 0 0 0 4h8.308a2.006 2.006 0 0 0 0-4zm45.846 0H64a2 2 0 0 0 0 4h15.94v2H72a2 2 0 0 0 0 4h25a2 2 0 0 0 0-4h-8.94v-2H104a2 2 0 0 0 0-4z"
                                  />
                                  <path
                                    fill="#403161"
                                    d="M150.721 151.275H17.28a2.017 2.017 0 1 1 0-4H150.72a2.017 2.017 0 1 1 0 4ZM31 37.75v-10h106v10h-22.295a6.932 6.932 0 0 1 0 4H124v88.5H44v-88.5h9.295a6.932 6.932 0 0 1 0-4Zm101 4v88.5h-4v-88.5Zm-92 0v88.5h-4v-88.5Zm-11 92.5h110v4H29Zm115 13.5H24v-5.5h120Z"
                                  />
                                  <path
                                    fill="#403161"
                                    d="M67 39.75a6.972 6.972 0 0 1-.295 2h34.59a6.932 6.932 0 0 1 0-4h-34.59a6.972 6.972 0 0 1 .295 2zm22.058-21a3 3 0 1 0-3-3 3.003 3.003 0 0 0 3 3zm0-4.5a1.5 1.5 0 1 1-1.5 1.5 1.501 1.501 0 0 1 1.5-1.5zm36-9a2 2 0 1 0 2 2 2.002 2.002 0 0 0-2-2zm0 3a1 1 0 1 1 1-1 1.001 1.001 0 0 1-1 1zm-64-6a2 2 0 1 0 2 2 2.002 2.002 0 0 0-2-2zm0 3a1 1 0 1 1 1-1 1.001 1.001 0 0 1-1 1zm86.359 16.5a2 2 0 1 0 2 2 2.002 2.002 0 0 0-2-2zm0 3a1 1 0 1 1 1-1 1.001 1.001 0 0 1-1 1zM9.76 43.75a2 2 0 1 0-2 2 2.002 2.002 0 0 0 2-2zm-3 0a1 1 0 1 1 1 1 1.001 1.001 0 0 1-1-1z"
                                  />
                                  <path
                                    fill="#845adf"
                                    d="m8.498 50.126 1.487-1.955-.939-.532-.954 2.19H8.06l-.97-2.175-.955.548 1.471 1.909v.031l-2.301-.297v1.064l2.316-.297v.031l-1.486 1.908.892.563 1.018-2.206h.031l.939 2.191.986-.564-1.502-1.877v-.031l2.362.282v-1.064l-2.362.313v-.031zM69.829 3.861l-.857 1.099.514.324.586-1.27h.018l.54 1.261.568-.324-.865-1.082v-.018l1.361.163v-.613l-1.361.18v-.018l.856-1.126-.54-.306-.55 1.261h-.018l-.558-1.253-.551.316.848 1.099v.018l-1.325-.171v.613l1.334-.171v.018zM142.055 7.333V6.289l-2.317.307v-.031l1.458-1.918-.921-.521-.936 2.148h-.031l-.951-2.133-.937.537 1.443 1.872v.031l-2.257-.292v1.043l2.272-.291v.031l-1.458 1.872.875.553.998-2.164h.03l.921 2.148.967-.552-1.473-1.842v-.03l2.317.276zM151.396 50.164l1.258-1.655-.795-.45-.807 1.853h-.027l-.82-1.84-.809.464 1.245 1.615v.026l-1.946-.251v.9l1.959-.251v.026l-1.258 1.615.755.477.861-1.867h.026l.794 1.853.835-.476-1.271-1.589v-.026l1.998.238v-.9l-1.998.264v-.026z"
                                  />
                                </svg>
                              </div>
                              <div className="text-end ms-5">
                                <p className="fs-25 fw-semibold mb-0">$199</p>
                                <p className="text-muted fs-11 fw-semibold mb-0">
                                  per month
                                </p>
                              </div>
                            </div>
                            <ul className="list-unstyled text-center fs-12 px-3 pt-3 mb-0">
                              <li className="mb-3">
                                <span className="text-muted">
                                  Storage Capacity
                                  <span className="badge bg-light text-default ms-1">
                                    1Tb
                                  </span>
                                </span>
                              </li>
                              <li className="mb-3">
                                <span className="text-muted">
                                  Daily Updates
                                  <span className="badge bg-light text-default ms-1">
                                    Unlimited
                                  </span>
                                </span>
                              </li>
                              <li className="mb-3">
                                <span className="text-muted">
                                  Online Support
                                </span>
                              </li>
                              <li className="mb-3">
                                <span className="text-muted">
                                  Visitors Monitoring
                                  <span className="badge bg-light text-default ms-1">
                                    24/7
                                  </span>
                                </span>
                              </li>
                              <li className="mb-3">
                                <span className="text-muted">
                                  2 Free Domains
                                </span>
                              </li>
                              <li className="mb-4">
                                <span className="text-muted">
                                  Money Back Guarentee
                                </span>
                              </li>
                            </ul>
                            <div className="d-grid">
                              <Button
                                variant=""
                                className="btn btn-primary-light btn-wave"
                              >
                                Get Started
                              </Button>
                            </div>
                          </div>
                        </Col>
                        <Col
                          xxl={4}
                          xl={4}
                          lg={4}
                          md={4}
                          sm={12}
                          className="border-end border-inline-end-dashed"
                        >
                          <div className="p-4">
                            <h6 className="fw-semibold text-center">
                              ADVANCED
                            </h6>
                            <div className="py-4 d-flex align-items-center justify-content-center">
                              <div className="pricing-svg1">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  data-name="Layer 1"
                                  viewBox="0 0 168 168"
                                >
                                  <path
                                    fill="#845adf"
                                    d="M84 58.25a9.01 9.01 0 0 0-9 9v4a9 9 0 0 0 18 0v-4a9.01 9.01 0 0 0-9-9Zm5 13a5 5 0 0 1-10 0v-4a5 5 0 0 1 10 0Z"
                                  />
                                  <circle
                                    cx="2"
                                    cy="149.75"
                                    r="2"
                                    fill="#403161"
                                  />
                                  <path
                                    fill="#403161"
                                    d="M11 147.75H8a2 2 0 0 0 0 4h3a2 2 0 0 0 0-4zm149 0h-3a2 2 0 0 0 0 4h3a2 2 0 0 0 0-4z"
                                  />
                                  <circle
                                    cx="166"
                                    cy="149.75"
                                    r="2"
                                    fill="#403161"
                                  />
                                  <path
                                    fill="#845adf"
                                    d="M118.154 155.75h-8.308a2.006 2.006 0 0 0 0 4h8.308a2.006 2.006 0 0 0 0-4zm-60 0h-8.308a2.006 2.006 0 0 0 0 4h8.308a2.006 2.006 0 0 0 0-4zm45.846 0H64a2 2 0 0 0 0 4h15.94v2H72a2 2 0 0 0 0 4h25a2 2 0 0 0 0-4h-8.94v-2H104a2 2 0 0 0 0-4zm-44-109a7 7 0 1 1 7-7 7.008 7.008 0 0 1-7 7zm0-10a3 3 0 1 0 3 3 3.003 3.003 0 0 0-3-3zm48 10a7 7 0 1 1 7-7 7.008 7.008 0 0 1-7 7zm0-10a3 3 0 1 0 3 3 3.003 3.003 0 0 0-3-3z"
                                  />
                                  <path
                                    fill="#403161"
                                    d="M114 82.25a5.008 5.008 0 0 0-4-4.899V46.455a6.932 6.932 0 0 1-4 0V77.25h-6.91a10.063 10.063 0 0 0-2.731-1.986 12.95 12.95 0 0 1-1.815 3.56A6.002 6.002 0 0 1 98 84.25v14h-2a6.994 6.994 0 0 0-12-4.89 6.994 6.994 0 0 0-12 4.89h-2v-14a6.002 6.002 0 0 1 3.456-5.426 12.95 12.95 0 0 1-1.815-3.56 10.063 10.063 0 0 0-2.731 1.986H62V46.455a6.932 6.932 0 0 1-4 0v30.896a5.008 5.008 0 0 0-4 4.899v16h-1a4.005 4.005 0 0 0-4 4v6a4.005 4.005 0 0 0 4 4h19a6.994 6.994 0 0 0 12 4.89 6.994 6.994 0 0 0 12-4.89h19a4.005 4.005 0 0 0 4-4v-6a4.005 4.005 0 0 0-4-4h-1Zm-56 0a1.001 1.001 0 0 1 1-1h7.472a9.906 9.906 0 0 0-.472 3v14h-8Zm14 26H53v-6h19Zm10 4a3 3 0 0 1-6 0v-14a3 3 0 0 1 6 0Zm10 0a3 3 0 0 1-6 0v-14a3 3 0 0 1 6 0Zm17-31a1.001 1.001 0 0 1 1 1v16h-8v-14a9.906 9.906 0 0 0-.472-3Zm6 21 .002 6H96v-6h19Z"
                                  />
                                  <path
                                    fill="#403161"
                                    d="M150.721 147.87H86v-14.008c14.696-.103 36.55-1.35 50.005-4.967v10.974H136a2 2 0 0 0 0 4h4a2 2 0 0 0 .005-4v-12.213c4.92-1.772 7.995-4.001 7.995-6.787 0-10.283-41.864-13-64-13s-64 2.717-64 13c0 2.787 3.078 5.017 8 6.788v12.212a2 2 0 0 0 0 4h4a2 2 0 0 0 0-4v-10.972c13.455 3.615 35.306 4.862 50 4.965v14.007H17.279a2.017 2.017 0 1 0 0 4H150.72a2.017 2.017 0 1 0 0-4zM40.725 126.715C26.984 124.303 24.037 121.49 24 120.87c.037-.62 2.984-3.433 16.725-5.846C52.3 112.99 67.668 111.869 84 111.869s31.7 1.12 43.275 3.154c13.74 2.413 16.687 5.225 16.725 5.846-.038.621-2.985 3.434-16.725 5.847C115.7 128.75 100.332 129.87 84 129.87s-31.7-1.12-43.275-3.153zm64.58-113.013a3 3 0 1 0-3-3 3.003 3.003 0 0 0 3 3zm0-4.5a1.5 1.5 0 1 1-1.5 1.5 1.501 1.501 0 0 1 1.5-1.5zm22.666 19.166a2 2 0 1 0 2 2 2.002 2.002 0 0 0-2-2zm0 3a1 1 0 1 1 1-1 1.001 1.001 0 0 1-1 1zM9 5.203a2 2 0 1 0 2 2 2.002 2.002 0 0 0-2-2zm0 3a1 1 0 1 1 1-1 1.001 1.001 0 0 1-1 1zm153.667 8.75a2 2 0 1 0 2 2 2.002 2.002 0 0 0-2-2zm0 3a1 1 0 1 1 1-1 1.001 1.001 0 0 1-1 1zm127.362-3.333a2 2 0 1 0 2 2 2.002 2.002 0 0 0-2-2zm0 3a1 1 0 1 1 1-1 1.001 1.001 0 0 1-1 1zm-148 42.666a2 2 0 1 0-2 2 2.002 2.002 0 0 0 2-2zm-3 0a1 1 0 1 1 1 1 1.001 1.001 0 0 1-1-1z"
                                  />
                                </svg>
                              </div>
                              <div className="text-end ms-5">
                                <p className="fs-25 fw-semibold mb-0">$199</p>
                                <p className="text-muted fs-11 fw-semibold mb-0">
                                  per month
                                </p>
                              </div>
                            </div>
                            <ul className="list-unstyled text-center fs-12 px-3 pt-3 mb-0">
                              <li className="mb-3">
                                <span className="text-muted">
                                  Storage Capacity
                                  <span className="badge bg-light text-default ms-1">
                                    1Tb
                                  </span>
                                </span>
                              </li>
                              <li className="mb-3">
                                <span className="text-muted">
                                  Daily Updates
                                  <span className="badge bg-light text-default ms-1">
                                    Unlimited
                                  </span>
                                </span>
                              </li>
                              <li className="mb-3">
                                <span className="text-muted">
                                  Online Support
                                </span>
                              </li>
                              <li className="mb-3">
                                <span className="text-muted">
                                  Visitors Monitoring
                                  <span className="badge bg-light text-default ms-1">
                                    24/7
                                  </span>
                                </span>
                              </li>
                              <li className="mb-3">
                                <span className="text-muted">
                                  2 Free Domains
                                </span>
                              </li>
                              <li className="mb-4">
                                <span className="text-muted">
                                  Money Back Guarentee
                                </span>
                              </li>
                            </ul>
                            <div className="d-grid">
                              <Button
                                variant=""
                                className="btn btn-primary-light btn-wave"
                              >
                                Get Started
                              </Button>
                            </div>
                          </div>
                        </Col>
                        <Col
                          xxl={4}
                          xl={4}
                          lg={4}
                          md={4}
                          sm={12}
                          className="border-end border-inline-end-dashed"
                        >
                          <div className="p-4">
                            <h6 className="fw-semibold text-center">
                              ADVANCED
                            </h6>
                            <div className="py-4 d-flex align-items-center justify-content-center">
                              <div className="pricing-svg1">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  data-name="Layer 1"
                                  viewBox="0 0 168 168"
                                >
                                  <path
                                    fill="#845adf"
                                    d="M84 58.25a9.01 9.01 0 0 0-9 9v4a9 9 0 0 0 18 0v-4a9.01 9.01 0 0 0-9-9Zm5 13a5 5 0 0 1-10 0v-4a5 5 0 0 1 10 0Z"
                                  />
                                  <circle
                                    cx="2"
                                    cy="149.75"
                                    r="2"
                                    fill="#403161"
                                  />
                                  <path
                                    fill="#403161"
                                    d="M11 147.75H8a2 2 0 0 0 0 4h3a2 2 0 0 0 0-4zm149 0h-3a2 2 0 0 0 0 4h3a2 2 0 0 0 0-4z"
                                  />
                                  <circle
                                    cx="166"
                                    cy="149.75"
                                    r="2"
                                    fill="#403161"
                                  />
                                  <path
                                    fill="#845adf"
                                    d="M118.154 155.75h-8.308a2.006 2.006 0 0 0 0 4h8.308a2.006 2.006 0 0 0 0-4zm-60 0h-8.308a2.006 2.006 0 0 0 0 4h8.308a2.006 2.006 0 0 0 0-4zm45.846 0H64a2 2 0 0 0 0 4h15.94v2H72a2 2 0 0 0 0 4h25a2 2 0 0 0 0-4h-8.94v-2H104a2 2 0 0 0 0-4zm-44-109a7 7 0 1 1 7-7 7.008 7.008 0 0 1-7 7zm0-10a3 3 0 1 0 3 3 3.003 3.003 0 0 0-3-3zm48 10a7 7 0 1 1 7-7 7.008 7.008 0 0 1-7 7zm0-10a3 3 0 1 0 3 3 3.003 3.003 0 0 0-3-3z"
                                  />
                                  <path
                                    fill="#403161"
                                    d="M114 82.25a5.008 5.008 0 0 0-4-4.899V46.455a6.932 6.932 0 0 1-4 0V77.25h-6.91a10.063 10.063 0 0 0-2.731-1.986 12.95 12.95 0 0 1-1.815 3.56A6.002 6.002 0 0 1 98 84.25v14h-2a6.994 6.994 0 0 0-12-4.89 6.994 6.994 0 0 0-12 4.89h-2v-14a6.002 6.002 0 0 1 3.456-5.426 12.95 12.95 0 0 1-1.815-3.56 10.063 10.063 0 0 0-2.731 1.986H62V46.455a6.932 6.932 0 0 1-4 0v30.896a5.008 5.008 0 0 0-4 4.899v16h-1a4.005 4.005 0 0 0-4 4v6a4.005 4.005 0 0 0 4 4h19a6.994 6.994 0 0 0 12 4.89 6.994 6.994 0 0 0 12-4.89h19a4.005 4.005 0 0 0 4-4v-6a4.005 4.005 0 0 0-4-4h-1Zm-56 0a1.001 1.001 0 0 1 1-1h7.472a9.906 9.906 0 0 0-.472 3v14h-8Zm14 26H53v-6h19Zm10 4a3 3 0 0 1-6 0v-14a3 3 0 0 1 6 0Zm10 0a3 3 0 0 1-6 0v-14a3 3 0 0 1 6 0Zm17-31a1.001 1.001 0 0 1 1 1v16h-8v-14a9.906 9.906 0 0 0-.472-3Zm6 21 .002 6H96v-6h19Z"
                                  />
                                  <path
                                    fill="#403161"
                                    d="M150.721 147.87H86v-14.008c14.696-.103 36.55-1.35 50.005-4.967v10.974H136a2 2 0 0 0 0 4h4a2 2 0 0 0 .005-4v-12.213c4.92-1.772 7.995-4.001 7.995-6.787 0-10.283-41.864-13-64-13s-64 2.717-64 13c0 2.787 3.078 5.017 8 6.788v12.212a2 2 0 0 0 0 4h4a2 2 0 0 0 0-4v-10.972c13.455 3.615 35.306 4.862 50 4.965v14.007H17.279a2.017 2.017 0 1 0 0 4H150.72a2.017 2.017 0 1 0 0-4zM40.725 126.715C26.984 124.303 24.037 121.49 24 120.87c.037-.62 2.984-3.433 16.725-5.846C52.3 112.99 67.668 111.869 84 111.869s31.7 1.12 43.275 3.154c13.74 2.413 16.687 5.225 16.725 5.846-.038.621-2.985 3.434-16.725 5.847C115.7 128.75 100.332 129.87 84 129.87s-31.7-1.12-43.275-3.153zm64.58-113.013a3 3 0 1 0-3-3 3.003 3.003 0 0 0 3 3zm0-4.5a1.5 1.5 0 1 1-1.5 1.5 1.501 1.501 0 0 1 1.5-1.5zm22.666 19.166a2 2 0 1 0 2 2 2.002 2.002 0 0 0-2-2zm0 3a1 1 0 1 1 1-1 1.001 1.001 0 0 1-1 1zM9 5.203a2 2 0 1 0 2 2 2.002 2.002 0 0 0-2-2zm0 3a1 1 0 1 1 1-1 1.001 1.001 0 0 1-1 1zm153.667 8.75a2 2 0 1 0 2 2 2.002 2.002 0 0 0-2-2zm0 3a1 1 0 1 1 1-1 1.001 1.001 0 0 1-1 1zm127.362-3.333a2 2 0 1 0 2 2 2.002 2.002 0 0 0-2-2zm0 3a1 1 0 1 1 1-1 1.001 1.001 0 0 1-1 1zm-148 42.666a2 2 0 1 0-2 2 2.002 2.002 0 0 0 2-2zm-3 0a1 1 0 1 1 1 1 1.001 1.001 0 0 1-1-1z"
                                  />
                                </svg>
                              </div>
                              <div className="text-end ms-5">
                                <p className="fs-25 fw-semibold mb-0">$5,999</p>
                                <p className="text-muted fs-11 fw-semibold mb-0">
                                  per year
                                </p>
                              </div>
                            </div>
                            <ul className="list-unstyled text-center fs-12 px-3 pt-3 mb-0">
                              <li className="mb-3">
                                <span className="text-muted">
                                  Storage Capacity
                                  <span className="badge bg-light text-default ms-1">
                                    5Tb
                                  </span>
                                </span>
                              </li>
                              <li className="mb-3">
                                <span className="text-muted">
                                  Daily Updates
                                  <span className="badge bg-light text-default ms-1">
                                    Unlimited
                                  </span>
                                </span>
                              </li>
                              <li className="mb-3">
                                <span className="text-muted">
                                  Online Support
                                </span>
                              </li>
                              <li className="mb-3">
                                <span className="text-muted">
                                  Visitors Monitoring
                                  <span className="badge bg-light text-default ms-1">
                                    24/7
                                  </span>
                                </span>
                              </li>
                              <li className="mb-3">
                                <span className="text-muted">
                                  10 Free Domains
                                </span>
                              </li>
                              <li className="mb-4">
                                <span className="text-muted">
                                  Money Back Guarentee
                                </span>
                              </li>
                            </ul>
                            <div className="d-grid">
                              <Button
                                variant=""
                                className="btn btn-primary-light btn-wave"
                              >
                                Get Started
                              </Button>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane
                      eventKey="2"
                      className="p-0"
                      id="pricing-yearly-pane"
                      role="tabpanel"
                      aria-labelledby="pricing-yearly"
                      tabIndex={0}
                    >
                      <Row>
                        <Col
                          xxl={4}
                          xl={4}
                          lg={4}
                          md={4}
                          sm={12}
                          className=" border-end border-inline-end-dashed"
                        >
                          <div className="p-4">
                            <h6 className="fw-semibold text-center">BASIC</h6>
                            <div className="py-4 d-flex align-items-center justify-content-center">
                              <div className="pricing-svg1">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  data-name="Layer 1"
                                  viewBox="0 0 168 168"
                                >
                                  <path
                                    fill="#845adf"
                                    d="M48.877 36.254c3.742 4.464 10.559 4.995 10.847 5.016.048.003.096.005.143.005A2 2 0 0 0 61.84 39.6c.045-.274 1.07-6.786-2.716-11.306-3.742-4.464-10.559-4.995-10.848-5.015a2.017 2.017 0 0 0-2.114 1.669c-.045.274-1.07 6.786 2.715 11.304zm7.18-5.39a9.88 9.88 0 0 1 1.938 6.072 11.383 11.383 0 0 1-6.053-3.252v.001a9.88 9.88 0 0 1-1.938-6.071 11.378 11.378 0 0 1 6.053 3.25zm74.388 24.431c-.278.041-6.858 1.055-10.205 6.168-3.3 5.043-1.996 11.909-1.938 12.199a2 2 0 0 0 1.96 1.613 2.104 2.104 0 0 0 .29-.02c.279-.042 6.859-1.055 10.205-6.169 3.3-5.043 1.996-11.908 1.939-12.198a2.004 2.004 0 0 0-2.251-1.593zm-3.035 11.601a10.55 10.55 0 0 1-5.397 3.854 12.464 12.464 0 0 1 1.575-7.095v-.001a10.549 10.549 0 0 1 5.396-3.855 12.47 12.47 0 0 1-1.574 7.097z"
                                  />
                                  <path
                                    fill="#403161"
                                    d="M138.16 29.515c-5.92-2.54-12.61-1.07-17.12.25-3.73 1.09-7.42 2.45-11.03 3.82a26.346 26.346 0 0 0 5.19-7.49 2 2 0 0 0-3.65-1.64c-4.46 9.92-16.63 14.39-19.27 15.26-.69.19-2.33.65-2.4.68a160.941 160.941 0 0 1-34.03 5.64 62.167 62.167 0 0 1-28.93-5.56c-.15-.06-2.81-1.31-3.99-1.93a2.002 2.002 0 0 0-1.85 3.55c.92.48 4.09 1.98 4.13 2 6.21 2.96 8.89 5.82 8.37 13.04a2.05 2.05 0 0 0 2 2.14 1.998 1.998 0 0 0 1.99-1.86 17.056 17.056 0 0 0-1.64-9.49A65.547 65.547 0 0 0 54 50.095v47.33a2.052 2.052 0 0 0-.5.39 2.017 2.017 0 0 0 .17 2.83l.33.29v12.34h-1a2 2 0 1 0 0 4s1 0 1 .01h11v13.99a3.999 3.999 0 0 0 4 4h12a3.999 3.999 0 0 0 4-4v-13.99s11 0 11-.01h1a2 2 0 0 0 0-4h-1v-12.34l.33-.29a2.017 2.017 0 0 0 .17-2.83 2.052 2.052 0 0 0-.5-.39v-53.96a34.048 34.048 0 0 1 12.77 1.16c1.9.56 5.13 1.9 5.55 4.59a2.04 2.04 0 0 0 2.28 1.67 2.003 2.003 0 0 0 1.67-2.29c-.56-3.6-3.53-6.37-8.35-7.81a36.359 36.359 0 0 0-4.83-1.06c1.37-.51 2.73-1.02 4.07-1.54 4.25-1.62 8.64-3.3 13.01-4.58 6.23-1.83 10.81-1.96 14.41-.41 3.99 1.71 8.47 5.05 7.2 11.29a6.907 6.907 0 0 1-4.21 4.86 5.702 5.702 0 0 1-5.49-.58 4.408 4.408 0 0 1-1.18-5.23 2.003 2.003 0 0 0-3.43-2.07c-2.16 3.59-.57 8.53 2.3 10.56a9.485 9.485 0 0 0 5.51 1.77 10.214 10.214 0 0 0 3.76-.73 10.847 10.847 0 0 0 6.66-7.79c1.39-6.82-2.09-12.56-9.54-15.76ZM63 113.275h-5v-8.79l.32.29a2.04 2.04 0 0 0 1.33.5 2.013 2.013 0 0 0 1.27-.45l2.08-1.7Zm10 18h-4v-13.99h4Zm8 0h-4v-13.99h4Zm2-18H67v-11c0-2.76 1.96-5 4.36-5h7.28c2.4 0 4.36 2.24 4.36 5Zm9 0h-5v-10.15l2.08 1.7a2.013 2.013 0 0 0 1.27.45 2.04 2.04 0 0 0 1.33-.5l.32-.29Zm0-14.14-1.71 1.51-5.62-4.59a8.31 8.31 0 0 0-3.74-2.43H69.07a8.31 8.31 0 0 0-3.74 2.43l-5.63 4.59-1.7-1.51v-49.22a168.852 168.852 0 0 0 33.11-5.71c.29-.07.59-.11.89-.17Z"
                                  />
                                  <path
                                    fill="#845adf"
                                    d="M146 147.275h-12.199a1.406 1.406 0 0 1 .124-.69.803.803 0 0 1 .468-.35 2 2 0 0 0-.732-3.93 4.834 4.834 0 0 0-3.152 2.198 5.182 5.182 0 0 0-.703 2.772h-1.612a5.182 5.182 0 0 0-.703-2.772 4.834 4.834 0 0 0-3.152-2.199 2.026 2.026 0 0 0-2.341 1.626 1.973 1.973 0 0 0 1.603 2.304.819.819 0 0 1 .474.351 1.406 1.406 0 0 1 .124.69H115.8a1.406 1.406 0 0 1 .124-.69.803.803 0 0 1 .468-.35 2 2 0 0 0-.732-3.93 4.834 4.834 0 0 0-3.152 2.198 5.182 5.182 0 0 0-.703 2.772h-1.612a5.182 5.182 0 0 0-.703-2.772 4.834 4.834 0 0 0-3.152-2.199 2.026 2.026 0 0 0-2.34 1.626 1.973 1.973 0 0 0 1.602 2.304.819.819 0 0 1 .474.351 1.406 1.406 0 0 1 .124.69H97.8a1.406 1.406 0 0 1 .124-.69.803.803 0 0 1 .468-.35 2 2 0 0 0-.732-3.93 4.834 4.834 0 0 0-3.152 2.198 5.182 5.182 0 0 0-.703 2.772h-1.612a5.182 5.182 0 0 0-.703-2.772 4.834 4.834 0 0 0-3.152-2.199 2.026 2.026 0 0 0-2.34 1.626 1.973 1.973 0 0 0 1.602 2.304.819.819 0 0 1 .474.351 1.406 1.406 0 0 1 .124.69h-8.397a1.41 1.41 0 0 1 .123-.69.805.805 0 0 1 .468-.35 2 2 0 0 0-.731-3.93 4.838 4.838 0 0 0-3.154 2.198 5.182 5.182 0 0 0-.702 2.772h-1.612a5.182 5.182 0 0 0-.702-2.772 4.838 4.838 0 0 0-3.154-2.199 2 2 0 1 0-.676 3.942.875.875 0 0 1 .401.319 1.384 1.384 0 0 1 .127.71h-8.388a1.41 1.41 0 0 1 .123-.69.805.805 0 0 1 .468-.35 2 2 0 0 0-.731-3.93 4.838 4.838 0 0 0-3.154 2.198 5.182 5.182 0 0 0-.702 2.772h-1.612a5.182 5.182 0 0 0-.702-2.772 4.838 4.838 0 0 0-3.154-2.199 2 2 0 1 0-.676 3.942.875.875 0 0 1 .401.319 1.384 1.384 0 0 1 .127.71h-8.388a1.41 1.41 0 0 1 .123-.69.805.805 0 0 1 .468-.35 2 2 0 0 0-.731-3.93 4.838 4.838 0 0 0-3.154 2.198 5.182 5.182 0 0 0-.702 2.772h-1.612a5.182 5.182 0 0 0-.702-2.772 4.838 4.838 0 0 0-3.154-2.199 2 2 0 1 0-.676 3.942.875.875 0 0 1 .401.319 1.384 1.384 0 0 1 .127.71H22a2 2 0 0 0-2 2c0 1.105 128 1.105 128 0a2 2 0 0 0-2-2Z"
                                  />
                                  <circle
                                    cx="2"
                                    cy="149.275"
                                    r="2"
                                    fill="#403161"
                                  />
                                  <path
                                    fill="#403161"
                                    d="M11 147.275H8a2 2 0 0 0 0 4h3a2 2 0 0 0 0-4zm149 0h-3a2 2 0 0 0 0 4h3a2 2 0 0 0 0-4z"
                                  />
                                  <circle
                                    cx="166"
                                    cy="149.275"
                                    r="2"
                                    fill="#403161"
                                  />
                                  <path
                                    fill="#845adf"
                                    d="M118.154 155.87h-8.308a2.006 2.006 0 0 0 0 4h8.308a2.006 2.006 0 0 0 0-4zm-60 0h-8.308a2.006 2.006 0 0 0 0 4h8.308a2.006 2.006 0 0 0 0-4zm45.846 0H64a2 2 0 0 0 0 4h15.94v2H72a2 2 0 0 0 0 4h25a2 2 0 0 0 0-4h-8.94v-2H104a2 2 0 0 0 0-4z"
                                  />
                                  <path
                                    fill="#403161"
                                    d="M150.721 147.87H86v-14.008c14.696-.103 36.55-1.35 50.005-4.967v10.974H136a2 2 0 0 0 0 4h4a2 2 0 0 0 .005-4v-12.213c4.92-1.772 7.995-4.001 7.995-6.787 0-10.283-41.864-13-64-13s-64 2.717-64 13c0 2.787 3.078 5.017 8 6.788v12.212a2 2 0 0 0 0 4h4a2 2 0 0 0 0-4v-10.972c13.455 3.615 35.306 4.862 50 4.965v14.007H17.279a2.017 2.017 0 1 0 0 4H150.72a2.017 2.017 0 1 0 0-4zM40.725 126.715C26.984 124.303 24.037 121.49 24 120.87c.037-.62 2.984-3.433 16.725-5.846C52.3 112.99 67.668 111.869 84 111.869s31.7 1.12 43.275 3.154c13.74 2.413 16.687 5.225 16.725 5.846-.038.621-2.985 3.434-16.725 5.847C115.7 128.75 100.332 129.87 84 129.87s-31.7-1.12-43.275-3.153zm64.58-113.013a3 3 0 1 0-3-3 3.003 3.003 0 0 0 3 3zm0-4.5a1.5 1.5 0 1 1-1.5 1.5 1.501 1.501 0 0 1 1.5-1.5zm22.666 19.166a2 2 0 1 0 2 2 2.002 2.002 0 0 0-2-2zm0 3a1 1 0 1 1 1-1 1.001 1.001 0 0 1-1 1zM9 5.203a2 2 0 1 0 2 2 2.002 2.002 0 0 0-2-2zm0 3a1 1 0 1 1 1-1 1.001 1.001 0 0 1-1 1zm153.667 8.75a2 2 0 1 0 2 2 2.002 2.002 0 0 0-2-2zm0 3a1 1 0 1 1 1-1 1.001 1.001 0 0 1-1 1zm127.362-3.333a2 2 0 1 0 2 2 2.002 2.002 0 0 0-2-2zm0 3a1 1 0 1 1 1-1 1.001 1.001 0 0 1-1 1zm-148 42.666a2 2 0 1 0-2 2 2.002 2.002 0 0 0 2-2zm-3 0a1 1 0 1 1 1 1 1.001 1.001 0 0 1-1-1z"
                                  />
                                </svg>
                              </div>
                              <div className="text-end ms-5">
                                <p className="fs-25 fw-semibold mb-0">$5,999</p>
                                <p className="text-muted fs-11 fw-semibold mb-0">
                                  per year
                                </p>
                              </div>
                            </div>
                            <ul className="list-unstyled text-center fs-12 px-3 pt-3 mb-0">
                              <li className="mb-3">
                                <span className="text-muted">
                                  Storage Capacity
                                  <span className="badge bg-light text-default ms-1">
                                    5Tb
                                  </span>
                                </span>
                              </li>
                              <li className="mb-3">
                                <span className="text-muted">
                                  Daily Updates
                                  <span className="badge bg-light text-default ms-1">
                                    Unlimited
                                  </span>
                                </span>
                              </li>
                              <li className="mb-3">
                                <span className="text-muted">
                                  Online Support
                                </span>
                              </li>
                              <li className="mb-3">
                                <span className="text-muted">
                                  Visitors Monitoring
                                  <span className="badge bg-light text-default ms-1">
                                    24/7
                                  </span>
                                </span>
                              </li>
                              <li className="mb-3">
                                <span className="text-muted">
                                  10 Free Domains
                                </span>
                              </li>
                              <li className="mb-4">
                                <span className="text-muted">
                                  Money Back Guarentee
                                </span>
                              </li>
                            </ul>
                            <div className="d-grid">
                              <Button
                                variant=""
                                className="btn btn-primary-light btn-wave"
                              >
                                Get Started
                              </Button>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Card.Body>
              </Card>
            </Tab.Container>
          </div>
        </section>
        <section className="section section-bg" id="faq">
          <div className="container text-center">
            <p className="fs-12 fw-semibold text-success mb-1">
              <span className="landing-section-heading">F.A.Q</span>
            </p>
            <h3 className="fw-semibold mb-2">Frequently asked questions ?</h3>
            <Row className=" justify-content-center">
              <Col xl={7}>
                <p className="text-muted fs-15 mb-5 fw-normal">
                  We have shared some of the most frequently asked questions to
                  help you out.
                </p>
              </Col>
            </Row>
            <div className="row text-start">
              <Col xl={12}>
                <Row className=" gy-2">
                  <Col xl={6}>
                    <Accordion
                      className=" accordion-customicon1 accordion-primary accordions-items-seperate"
                      id="accordionFAQ1"
                      defaultActiveKey="0"
                    >
                      <Accordion.Item eventKey="0">
                        <Accordion.Header as="h2" id="headingcustomicon1One">
                          Where can I subscribe to your newsletter?
                        </Accordion.Header>
                        <Accordion.Collapse
                          id="collapsecustomicon1One"
                          className="accordion-collapse collapse "
                          eventKey="0"
                        >
                          <Accordion.Body>
                            <strong>
                              This is the first {`item's`} accordion body.
                            </strong>
                            It is shown by default, until the collapse plugin
                            adds the appropriate classNamees that we use to
                            style each element. These classNamees control the
                            overall appearance, as well as the showing and
                            hiding via CSS transitions. You can modify any of
                            this with custom CSS or overriding our default
                            variables. {`It's`}
                            also worth noting that just about any HTML can go
                            within the
                            <code>.accordion-body</code>, though the transition
                            does limit overflow.
                          </Accordion.Body>
                        </Accordion.Collapse>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header as="h2" id="headingcustomicon1Two">
                          Where can in edit my address?
                        </Accordion.Header>
                        <Accordion.Collapse
                          id="collapsecustomicon1Two"
                          className="accordion-collapse collapse"
                          eventKey="1"
                          aria-labelledby="headingcustomicon1Two"
                          data-bs-parent="#accordionFAQ1"
                        >
                          <Accordion.Body>
                            <strong>
                              This is the first {`item's`} accordion body.
                            </strong>
                            It is shown by default, until the collapse plugin
                            adds the appropriate classNamees that we use to
                            style each element. These classNamees control the
                            overall appearance, as well as the showing and
                            hiding via CSS transitions. You can modify any of
                            this with custom CSS or overriding our default
                            variables. {`It's`}
                            also worth noting that just about any HTML can go
                            within the
                            <code>.accordion-body</code>, though the transition
                            does limit overflow.
                          </Accordion.Body>
                        </Accordion.Collapse>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header as="h2" id="headingcustomicon1Three">
                          What are your opening hours?
                        </Accordion.Header>
                        <Accordion.Collapse
                          id="collapsecustomicon1Three"
                          className="accordion-collapse collapse"
                          eventKey="2"
                          aria-labelledby="headingcustomicon1Three"
                          data-bs-parent="#accordionFAQ1"
                        >
                          <Accordion.Body>
                            <strong>
                              This is the first {`item's`} accordion body.
                            </strong>
                            It is shown by default, until the collapse plugin
                            adds the appropriate classNamees that we use to
                            style each element. These classNamees control the
                            overall appearance, as well as the showing and
                            hiding via CSS transitions. You can modify any of
                            this with custom CSS or overriding our default
                            variables. {`It's`}
                            also worth noting that just about any HTML can go
                            within the
                            <code>.accordion-body</code>, though the transition
                            does limit overflow.
                          </Accordion.Body>
                        </Accordion.Collapse>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header as="h2" id="headingcustomicon1Four">
                          Do I have the right to return an item?
                        </Accordion.Header>
                        <Accordion.Collapse
                          id="collapsecustomicon1Four"
                          className="accordion-collapse collapse"
                          eventKey="3"
                          aria-labelledby="headingcustomicon1Four"
                          data-bs-parent="#accordionFAQ1"
                        >
                          <Accordion.Body>
                            <strong>
                              This is the first {`item's`} accordion body.
                            </strong>
                            It is shown by default, until the collapse plugin
                            adds the appropriate classNamees that we use to
                            style each element. These classNamees control the
                            overall appearance, as well as the showing and
                            hiding via CSS transitions. You can modify any of
                            this with custom CSS or overriding our default
                            variables. {`It's`}
                            also worth noting that just about any HTML can go
                            within the
                            <code>.accordion-body</code>, though the transition
                            does limit overflow.
                          </Accordion.Body>
                        </Accordion.Collapse>
                      </Accordion.Item>
                      <Accordion.Item eventKey="4">
                        <Accordion.Header as="h2" id="headingcustomicon1Five">
                          General Terms & Conditions (GTC)
                        </Accordion.Header>
                        <Accordion.Collapse
                          id="collapsecustomicon1Five"
                          className="accordion-collapse collapse"
                          eventKey="4"
                          aria-labelledby="headingcustomicon1Five"
                          data-bs-parent="#accordionFAQ1"
                        >
                          <Accordion.Body>
                            <strong>
                              This is the first {`item's`} accordion body.
                            </strong>
                            It is shown by default, until the collapse plugin
                            adds the appropriate classNamees that we use to
                            style each element. These classNamees control the
                            overall appearance, as well as the showing and
                            hiding via CSS transitions. You can modify any of
                            this with custom CSS or overriding our default
                            variables. {`It's`}
                            also worth noting that just about any HTML can go
                            within the
                            <code>.accordion-body</code>, though the transition
                            does limit overflow.
                          </Accordion.Body>
                        </Accordion.Collapse>
                      </Accordion.Item>
                      <Accordion.Item eventKey="5">
                        <Accordion.Header as="h2" id="headingcustomicon1Six">
                          Do I need to create an account to make an order?
                        </Accordion.Header>
                        <Accordion.Collapse
                          id="collapsecustomicon1Six"
                          className="accordion-collapse collapse"
                          eventKey="5"
                          aria-labelledby="headingcustomicon1Six"
                          data-bs-parent="#accordionFAQ1"
                        >
                          <Accordion.Body>
                            ms-sm-5 ms-2 text-center
                            <strong>
                              This is the first {`item's`} accordion body.
                            </strong>
                            It is shown by default, until the collapse plugin
                            adds the appropriate classNamees that we use to
                            style each element. These classNamees control the
                            overall appearance, as well as the showing and
                            hiding via CSS transitions. You can modify any of
                            this with custom CSS or overriding our default
                            variables. {`It's`}
                            also worth noting that just about any HTML can go
                            within the
                            <code>.accordion-body</code>, though the transition
                            does limit overflow.
                          </Accordion.Body>
                        </Accordion.Collapse>
                      </Accordion.Item>
                    </Accordion>
                  </Col>
                  <Col xl={6}>
                    <Accordion
                      className=" accordion-customicon1 accordion-primary accordions-items-seperate"
                      id="accordionFAQ2"
                    >
                      <Accordion.Item eventKey="6">
                        <Accordion.Header as="h2" id="headingcustomicon2Five">
                          General Terms & Conditions (GTC)
                        </Accordion.Header>
                        <Accordion.Collapse
                          id="collapsecustomicon2Five"
                          className="accordion-collapse collapse"
                          eventKey="6"
                          aria-labelledby="headingcustomicon2Five"
                          data-bs-parent="#accordionFAQ2"
                        >
                          <Accordion.Body>
                            <strong>
                              This is the first {`item's`} accordion body.
                            </strong>
                            It is shown by default, until the collapse plugin
                            adds the appropriate classNamees that we use to
                            style each element. These classNamees control the
                            overall appearance, as well as the showing and
                            hiding via CSS transitions. You can modify any of
                            this with custom CSS or overriding our default
                            variables. {`It's`}
                            also worth noting that just about any HTML can go
                            within the
                            <code>.accordion-body</code>, though the transition
                            does limit overflow.
                          </Accordion.Body>
                        </Accordion.Collapse>
                      </Accordion.Item>
                      <Accordion.Item eventKey="7">
                        <Accordion.Header as="h2" id="headingcustomicon2Six">
                          Do I need to create an account to make an order?
                        </Accordion.Header>
                        <Accordion.Collapse
                          id="collapsecustomicon2Six"
                          className="accordion-collapse collapse"
                          eventKey="7"
                          aria-labelledby="headingcustomicon2Six"
                          data-bs-parent="#accordionFAQ2"
                        >
                          <Accordion.Body>
                            <strong>
                              This is the first {`item's`} accordion body.
                            </strong>
                            It is shown by default, until the collapse plugin
                            adds the appropriate classNamees that we use to
                            style each element. These classNamees control the
                            overall appearance, as well as the showing and
                            hiding via CSS transitions. You can modify any of
                            this with custom CSS or overriding our default
                            variables. {`It's`}
                            also worth noting that just about any HTML can go
                            within the
                            <code>.accordion-body</code>, though the transition
                            does limit overflow.
                          </Accordion.Body>
                        </Accordion.Collapse>
                      </Accordion.Item>
                      <Accordion.Item eventKey="8">
                        <Accordion.Header as="h2" id="headingcustomicon2One">
                          Where can I subscribe to your newsletter?
                        </Accordion.Header>
                        <Accordion.Collapse
                          id="collapsecustomicon2One"
                          className="accordion-collapse collapse "
                          eventKey="8"
                          aria-labelledby="headingcustomicon2One"
                          data-bs-parent="#accordionFAQ2"
                        >
                          <Accordion.Body>
                            <strong>
                              This is the first {`item's`} accordion body.
                            </strong>
                            It is shown by default, until the collapse plugin
                            adds the appropriate classNamees that we use to
                            style each element. These classNamees control the
                            overall appearance, as well as the showing and
                            hiding via CSS transitions. You can modify any of
                            this with custom CSS or overriding our default
                            variables. {`It's`}
                            also worth noting that just about any HTML can go
                            within the
                            <code>.accordion-body</code>, though the transition
                            does limit overflow.
                          </Accordion.Body>
                        </Accordion.Collapse>
                      </Accordion.Item>
                      <Accordion.Item eventKey="9">
                        <Accordion.Header as="h2" id="headingcustomicon2Two">
                          Where can in edit my address?
                        </Accordion.Header>
                        <Accordion.Collapse
                          id="collapsecustomicon2Two"
                          className="accordion-collapse collapse"
                          eventKey="9"
                          aria-labelledby="headingcustomicon2Two"
                          data-bs-parent="#accordionFAQ2"
                        >
                          <Accordion.Body>
                            <strong>
                              This is the first {`item's`} accordion body.
                            </strong>
                            It is shown by default, until the collapse plugin
                            adds the appropriate classNamees that we use to
                            style each element. These classNamees control the
                            overall appearance, as well as the showing and
                            hiding via CSS transitions. You can modify any of
                            this with custom CSS or overriding our default
                            variables. {`It's`}
                            also worth noting that just about any HTML can go
                            within the
                            <code>.accordion-body</code>, though the transition
                            does limit overflow.
                          </Accordion.Body>
                        </Accordion.Collapse>
                      </Accordion.Item>
                      <Accordion.Item eventKey="10">
                        <Accordion.Header as="h2" id="headingcustomicon2Three">
                          What are your opening hours?
                        </Accordion.Header>
                        <Accordion.Collapse
                          id="collapsecustomicon2Three"
                          className="accordion-collapse collapse"
                          eventKey="10"
                        >
                          <Accordion.Body>
                            <strong>
                              This is the first {`item's`} accordion body.
                            </strong>
                            It is shown by default, until the collapse plugin
                            adds the appropriate classNamees that we use to
                            style each element. These classNamees control the
                            overall appearance, as well as the showing and
                            hiding via CSS transitions. You can modify any of
                            this with custom CSS or overriding our default
                            variables. {`It's`}
                            also worth noting that just about any HTML can go
                            within the
                            <code>.accordion-body</code>, though the transition
                            does limit overflow.
                          </Accordion.Body>
                        </Accordion.Collapse>
                      </Accordion.Item>
                      <Accordion.Item eventKey="11">
                        <Accordion.Header as="h2" id="headingcustomicon2Four">
                          Do I have the right to return an item?
                        </Accordion.Header>
                        <Accordion.Collapse
                          eventKey="11"
                          id="collapsecustomicon2Four"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingcustomicon2Four"
                          data-bs-parent="#accordionFAQ2"
                        >
                          <Accordion.Body>
                            <strong>
                              This is the first{`item's`} accordion body.
                            </strong>
                            It is shown by default, until the collapse plugin
                            adds the appropriate classNamees that we use to
                            style each element. These classNamees control the
                            overall appearance, as well as the showing and
                            hiding via CSS transitions. You can modify any of
                            this with custom CSS or overriding our default
                            variables. {`It's`}
                            also worth noting that just about any HTML can go
                            within the
                            <code>.accordion-body</code>, though the transition
                            does limit overflow.
                          </Accordion.Body>
                        </Accordion.Collapse>
                      </Accordion.Item>
                    </Accordion>
                  </Col>
                </Row>
              </Col>
            </div>
          </div>
        </section>
        <section className="section" id="contact">
          <div className="container text-center">
            <p className="fs-12 fw-semibold text-success mb-1">
              <span className="landing-section-heading">CONTACT US</span>
            </p>
            <h3 className="fw-semibold mb-2">
              Have any questions ? We would love to hear from you.
            </h3>
            <div className="row justify-content-center">
              <Col xl={9}>
                <p className="text-muted fs-15 mb-5 fw-normal">
                  You can contact us anytime regarding any queries or deals,dont
                  hesitate to clear your doubts before trying our product.
                </p>
              </Col>
            </div>
            <div className="row text-start">
              <Col xxl={6} xl={6} lg={6} md={12} sm={12}>
                <Card className="custom-card border shadow-none">
                  <Card.Body className=" p-0">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d30444.274596168965!2d78.54114692513858!3d17.48198883339408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d17.4886524!2d78.5495041!4m5!1s0x3bcb9c7ec139a15d%3A0x326d1c90786b2ab6!2sspruko%20technologies!3m2!1d17.474805099999998!2d78.570258!5e0!3m2!1sen!2sin!4v1670225507254!5m2!1sen!2sin"
                      height="365"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </Card.Body>
                </Card>
              </Col>
              <Col xxl={6} xl={6} lg={6} md={12} sm={12}>
                <Card className="custom-card  overflow-hidden section-bg border overflow-hidden shadow-none">
                  <Card.Body>
                    <div className="row gy-3 mt-2 px-3">
                      <Col xl={6}>
                        <div className="row gy-3">
                          <Col xl={12}>
                            <Form.Label
                              htmlFor="contact-address-name"
                              className="form-label "
                            >
                              Full Name :
                            </Form.Label>
                            <Form.Control
                              type="text"
                              className="form-control "
                              id="contact-address-name"
                              placeholder="Enter Name"
                            />
                          </Col>
                          <Col xl={12}>
                            <Form.Label
                              htmlFor="contact-address-phone"
                              className="form-label "
                            >
                              Phone No :
                            </Form.Label>
                            <Form.Control
                              type="text"
                              className="form-control "
                              id="contact-address-phone"
                              placeholder="Enter Phone No"
                            />
                          </Col>
                          <Col xl={12}>
                            <Form.Label
                              htmlFor="contact-address-address"
                              className="form-label "
                            >
                              Address :
                            </Form.Label>
                            <Form.Control
                              as="textarea"
                              className="form-control "
                              id="contact-address-address"
                              rows={1}
                            ></Form.Control>
                          </Col>
                        </div>
                      </Col>
                      <Col xl={6}>
                        <Form.Label
                          htmlFor="contact-address-message"
                          className="form-label "
                        >
                          Message :
                        </Form.Label>
                        <Form.Control
                          as="textarea"
                          className="form-control "
                          id="contact-address-message"
                          rows={8}
                        ></Form.Control>
                      </Col>
                      <Col xl={12}>
                        <div className="d-flex  mt-4 ">
                          <div className="">
                            <div className="btn-list">
                              <Button
                                variant=""
                                className="btn btn-icon btn-primary-light btn-wave"
                              >
                                <i className="ri-facebook-line fw-bold"></i>
                              </Button>
                              <Button
                                variant=""
                                className="btn btn-icon btn-primary-light btn-wave"
                              >
                                <i className="ri-twitter-x-line fw-bold"></i>
                              </Button>
                              <Button
                                variant=""
                                className="btn btn-icon btn-primary-light btn-wave"
                              >
                                <i className="ri-instagram-line fw-bold"></i>
                              </Button>
                            </div>
                          </div>
                          <div className="ms-auto">
                            <Button
                              variant=""
                              className="btn btn-primary  btn-wave"
                            >
                              Send Message
                            </Button>
                          </div>
                        </div>
                      </Col>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </div>
          </div>
        </section>
        <section className="section landing-footer text-fixed-white">
          <div className="container">
            <Row>
              <Col md={4} sm={6} className="col-12 mb-md-0 mb-3">
                <div className="px-4">
                  <p className="fw-semibold mb-3">
                    <Link href="/dashboards/crm">
                      <img
                        src="../assets/images/brand-logos/desktop-dark.png"
                        alt=""
                      />
                    </Link>
                  </p>
                  <p className="mb-2 op-6 fw-normal">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit et magnam, fuga est mollitia eius, quo illum
                    illo inventore optio aut quas omnis rem. Dolores accusantium
                    aspernatur minus ea incidunt.
                  </p>
                  <p className="mb-0 op-6 fw-normal">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Autem ea esse ad
                  </p>
                </div>
              </Col>
              <Col md={2} sm={6} className=" col-12">
                <div className="px-4">
                  <h6 className="fw-semibold mb-3 text-fixed-white">PAGES</h6>
                  <ul className="list-unstyled op-6 fw-normal landing-footer-list">
                    <li>
                      <Link
                        href="#!"
                        scroll={false}
                        className="text-fixed-white"
                      >
                        Email
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#!"
                        scroll={false}
                        className="text-fixed-white"
                      >
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#!"
                        scroll={false}
                        className="text-fixed-white"
                      >
                        Timeline
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#!"
                        scroll={false}
                        className="text-fixed-white"
                      >
                        Projects
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#!"
                        scroll={false}
                        className="text-fixed-white"
                      >
                        Contacts
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#!"
                        scroll={false}
                        className="text-fixed-white"
                      >
                        Portfolio
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md={2} sm={6} className=" col-12">
                <div className="px-4">
                  <h6 className="fw-semibold text-fixed-white">INFO</h6>
                  <ul className="list-unstyled op-6 fw-normal landing-footer-list">
                    <li>
                      <Link
                        href="#!"
                        scroll={false}
                        className="text-fixed-white"
                      >
                        Our Team
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#!"
                        scroll={false}
                        className="text-fixed-white"
                      >
                        Contact US
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#!"
                        scroll={false}
                        className="text-fixed-white"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#!"
                        scroll={false}
                        className="text-fixed-white"
                      >
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#!"
                        scroll={false}
                        className="text-fixed-white"
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#!"
                        scroll={false}
                        className="text-fixed-white"
                      >
                        Terms & Conditions
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md={4} sm={6} className=" col-12">
                <div className="px-4">
                  <h6 className="fw-semibold text-fixed-white">CONTACT</h6>
                  <ul className="list-unstyled fw-normal landing-footer-list">
                    <li>
                      <Link
                        href="#!"
                        scroll={false}
                        className="text-fixed-white op-6"
                      >
                        <i className="ri-home-4-line me-1 align-middle"></i> New
                        York, NY 10012, US
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#!"
                        scroll={false}
                        className="text-fixed-white op-6"
                      >
                        <i className="ri-mail-line me-1 align-middle"></i>
                        info@fmail.com
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#!"
                        scroll={false}
                        className="text-fixed-white op-6"
                      >
                        <i className="ri-phone-line me-1 align-middle"></i>
                        +(555)-1920 1831
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#!"
                        scroll={false}
                        className="text-fixed-white op-6"
                      >
                        <i className="ri-printer-line me-1 align-middle"></i>
                        +(123) 1293 123
                      </Link>
                    </li>
                    <li className="mt-3">
                      <p className="mb-2 fw-semibold op-8">FOLLOW US ON :</p>
                      <div className="mb-0">
                        <div className="btn-list">
                          <Button
                            variant=""
                            className="btn btn-sm btn-icon btn-primary-light btn-wave waves-effect waves-light"
                          >
                            <i className="ri-facebook-line fw-bold"></i>
                          </Button>
                          <Button
                            variant=""
                            className="btn btn-sm btn-icon btn-secondary-light btn-wave waves-effect waves-light"
                          >
                            <i className="ri-twitter-x-line fw-bold"></i>
                          </Button>
                          <Button
                            variant=""
                            className="btn btn-sm btn-icon btn-warning-light btn-wave waves-effect waves-light"
                          >
                            <i className="ri-instagram-line fw-bold"></i>
                          </Button>
                          <Button
                            variant=""
                            className="btn btn-sm btn-icon btn-success-light btn-wave waves-effect waves-light"
                          >
                            <i className="ri-github-line fw-bold"></i>
                          </Button>
                          <Button
                            variant=""
                            className="btn btn-sm btn-icon btn-danger-light btn-wave waves-effect waves-light"
                          >
                            <i className="ri-youtube-line fw-bold"></i>
                          </Button>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </section>
        <div className="text-center landing-main-footer py-3">
          <span className="text-muted fs-15">
            @ Copyright 2024 <span id="year"></span>
            <Link href="#!" scroll={false} className="text-primary fw-semibold">
              <u>ynex</u>
            </Link>
            . Designed with <span className="fa fa-heart text-danger"></span> by
            <Link href="#!" scroll={false} className="text-primary fw-semibold">
              <u>Spruko</u>
            </Link>
            All rights reserved
          </span>
        </div>
      </div>
    </>
  );
};

export default Landing;
