"use client";
import { Link } from "@/i18n/navigation";
import React, { useState } from "react";
import { Button, Card, Form, FormControl, InputGroup } from "react-bootstrap";
import Seo from "@/components/common/layout/seo/seo";
import { resetPasswordForEmail } from "@/lib/supabase/auth";

const Basic = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    const { error } = await resetPasswordForEmail(email);
    setLoading(false);
    if (error) setError(error.message);
    else
      setSuccess(
        "Un email de réinitialisation a été envoyé si l'adresse existe."
      );
  };

  return (
    <>
      <Seo title={"ResetPassword-Basic"} />
      <div className="container-lg">
        <div className="row justify-content-center align-items-center authentication authentication-basic h-100">
          <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-6 col-sm-8 col-12">
            <div className="my-5 d-flex justify-content-center">
              <Link href={`/dashboards/crm/`}>
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
            <Card className=" custom-card">
              <Card.Body className="p-5">
                <p className="h5 fw-semibold mb-2 text-center">
                  Reset Password
                </p>
                <p className="mb-4 text-muted op-7 fw-normal text-center">
                  Hello Jhon !
                </p>
                <div className="row gy-3">
                  <Form onSubmit={handleSubmit} className="w-100">
                    <div className="col-xl-12 mb-3">
                      <label
                        htmlFor="reset-email"
                        className="form-label text-default"
                      >
                        Email
                      </label>
                      <InputGroup>
                        <FormControl
                          type="email"
                          className="form-control-lg"
                          id="reset-email"
                          placeholder="Votre email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </InputGroup>
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
                        {loading
                          ? "Envoi..."
                          : "Envoyer le lien de réinitialisation"}
                      </Button>
                    </div>
                  </Form>
                </div>{" "}
                <div className="text-center">
                  <p className="fs-12 text-muted mt-3">
                    Already have an account?
                    <Link href="/sign-in" className="text-primary">
                      Sign In
                    </Link>
                  </p>
                </div>
                <div className="text-center my-3 authentication-barrier">
                  <span>OR</span>
                </div>
                <div className="btn-list text-center">
                  <Button variant="light" className="btn btn-icon">
                    <i className="ri-facebook-line fw-bold text-dark op-7"></i>
                  </Button>
                  <Button variant="light" className="btn btn-icon">
                    <i className="ri-google-line fw-bold text-dark op-7"></i>
                  </Button>
                  <Button variant="light" className="btn btn-icon">
                    <i className="ri-twitter-x-line fw-bold text-dark op-7"></i>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};
Basic.layout = "AuthenticationLayout";
export default Basic;
