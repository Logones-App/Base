"use client";
import { Link } from "@/i18n/navigation";
import React, { useState } from "react";
import { Button, Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import { signUp } from "@/lib/supabase/auth/auth";

const Basic = () => {
  const [passwordshow1, setpasswordshow1] = useState(false);
  const [passwordshow2, setpasswordshow2] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setLoading(true);
    const { error } = await signUp(email, password);
    setLoading(false);
    if (error) setError(error.message);
    else
      setSuccess(
        "Account created! Please check your email to confirm your registration."
      );
  };

  return (
    <>
      <div className="container-lg">
        <Row className=" justify-content-center align-items-center authentication authentication-basic h-100">
          <Col xxl={4} xl={5} lg={5} md={6} sm={8} className="col-12">
            <div className="my-5 d-flex justify-content-center">
              <Link href="/dashboards/crm">
                <img
                  src="../../../assets/images/brand-logos/desktop-logo.png"
                  alt="logo"
                  className="desktop-logo"
                />
                <img
                  src="../../../assets/images/brand-logos/desktop-dark.png"
                  alt="logo"
                  className="desktop-dark"
                />
              </Link>
            </div>
            <Card className="custom-card">
              <Card.Body className="p-5">
                <p className="h5 fw-semibold mb-2 text-center">Sign Up</p>
                <p className="mb-4 text-muted op-7 fw-normal text-center">
                  Welcome & Join us by creating a free account !
                </p>
                <div className="row gy-3">
                  <Form onSubmit={handleSubmit} className="w-100">
                    <div className="col-xl-12">
                      <label
                        htmlFor="signup-email"
                        className="form-label text-default"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        id="signup-email"
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-xl-12">
                      <label
                        htmlFor="signup-password"
                        className="form-label text-default"
                      >
                        Password
                      </label>
                      <InputGroup>
                        <Form.Control
                          type={passwordshow1 ? "text" : "password"}
                          className="form-control-lg"
                          id="signup-password"
                          placeholder="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        <Button
                          variant="light"
                          className="btn"
                          onClick={() => setpasswordshow1(!passwordshow1)}
                          type="button"
                          id="button-addon2"
                        >
                          <i
                            className={`${
                              passwordshow1 ? "ri-eye-line" : "ri-eye-off-line"
                            } align-middle`}
                            aria-hidden="true"
                          ></i>
                        </Button>
                      </InputGroup>
                    </div>
                    <div className="col-xl-12 mb-2">
                      <label
                        htmlFor="signup-confirmpassword"
                        className="form-label text-default"
                      >
                        Confirm Password
                      </label>
                      <InputGroup>
                        <Form.Control
                          type={passwordshow2 ? "text" : "password"}
                          className="form-control-lg"
                          id="signup-confirmpassword"
                          placeholder="confirm password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          required
                        />
                        <Button
                          variant="light"
                          className="btn"
                          onClick={() => setpasswordshow2(!passwordshow2)}
                          type="button"
                          id="button-addon21"
                        >
                          <i
                            className={`${
                              passwordshow2 ? "ri-eye-line" : "ri-eye-off-line"
                            } align-middle`}
                            aria-hidden="true"
                          ></i>
                        </Button>
                      </InputGroup>
                      <div className="form-check mt-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck1"
                        />
                        <label
                          className="form-check-label text-muted fw-normal"
                          htmlFor="defaultCheck1"
                        >
                          By creating a account you agree to our
                          <Link
                            href="/pages/terms-conditions"
                            className="text-success"
                          >
                            <u>Terms & Conditions</u>
                          </Link>
                          and
                          <Link
                            href="#"
                            scroll={false}
                            className="text-success"
                          >
                            <u>Privacy Policy</u>
                          </Link>
                        </label>
                      </div>
                    </div>
                    {error && (
                      <div className="alert alert-danger py-2">{error}</div>
                    )}
                    {success && (
                      <div className="alert alert-success py-2">{success}</div>
                    )}
                    <div className="col-xl-12 d-grid mt-2">
                      <Button
                        type="submit"
                        className="btn btn-lg btn-primary"
                        disabled={loading}
                      >
                        {loading ? "Creating..." : "Create Account"}
                      </Button>
                    </div>
                  </Form>
                </div>
                <div className="text-center">
                  <p className="fs-12 text-muted mt-3">
                    Already have an account?
                    <Link
                      href="/authentication/sign-in/basic/"
                      className="text-primary"
                    >
                      Sign In
                    </Link>
                  </p>
                </div>
                <div className="text-center my-3 authentication-barrier">
                  <span>OR</span>
                </div>
                <div className="btn-list text-center">
                  <button className="btn btn-icon btn-light">
                    <i className="ri-facebook-line fw-bold text-dark op-7"></i>
                  </button>
                  <button className="btn btn-icon btn-light">
                    <i className="ri-google-line fw-bold text-dark op-7"></i>
                  </button>
                  <button className="btn btn-icon btn-light">
                    <i className="ri-twitter-x-line fw-bold text-dark op-7"></i>
                  </button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Basic;
