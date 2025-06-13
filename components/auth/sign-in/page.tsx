"use client";
import { Link } from "@/i18n/navigation";
import React, { useState } from "react";
import { Button, Card, Form, InputGroup } from "react-bootstrap";
import { signIn } from "@/lib/supabase/auth/auth";
import { useRouter } from "@/i18n/navigation";
import { useAuth } from "@/lib/legendstate/auth/auth";

const Basic = () => {
  const [passwordshow, setpasswordshow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const  user  = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const result = await signIn(email, password);
    setLoading(false);
    if (result.error) {
      setError(result.error.message);
      return;
    }

    router.push("/"); // Redirige vers la page d'accueil après connexion
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center align-items-center authentication authentication-basic h-100">
          <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-6 col-sm-8 col-12">
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
            <Card className=" custom-card">
              <Card.Body className="p-5">
                <p className="h5 fw-semibold mb-2 text-center">Sign In</p>
                <p className="mb-4 text-muted op-7 fw-normal text-center">
                  Welcome back Jhon !
                </p>
                <div className="row gy-3">
                  <Form onSubmit={handleSubmit} className="w-100">
                    <div className="col-xl-12 mb-3">
                      <label
                        htmlFor="signin-email"
                        className="form-label text-default"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        id="signin-email"
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-xl-12 mb-3">
                      <label
                        htmlFor="signin-password"
                        className="form-label text-default"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control form-control-lg"
                        id="signin-password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    {error && (
                      <div className="alert alert-danger py-2">{error}</div>
                    )}
                    <div className="col-xl-12 d-grid mt-2">
                      <Button
                        type="submit"
                        className="btn btn-lg btn-primary"
                        disabled={loading}
                      >
                        {loading ? "Connexion..." : "Sign In"}
                      </Button>
                    </div>
                  </Form>
                </div>
                <div className="text-center">
                  <p className="fs-12 text-muted mt-3">
                    Dont have an account?
                    <Link href="/sign-up" className="text-primary">
                      Sign Up
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
          </div>
        </div>
      </div>
    </>
  );
};
export default Basic;
