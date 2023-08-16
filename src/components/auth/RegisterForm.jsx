import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

//image
import imageBackground from "../../assets/images/login/backgroundLogin.jpeg";

// alert
import Swal from "sweetalert2";

//data Dummy Users
import DataUser from "../../data/Datauser";

const RegisterForm = () => {
  const [dataUsername, setDataUsername] = useState("");
  const [dataPassword, setDataPassword] = useState("");

  // disable button
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      setButtonDisabled(true);

      const newUser = {
        username: dataUsername,
        password: dataPassword,
      };

      DataUser.push(newUser);

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Registration Successful",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        navigate("/");
      });
    } catch (error) {
      console.error("Registration failed:", error);
      Swal.fire({
        icon: "error",
        title: "Wrong Validation",
        text: "Registration Failed",
      });
    }
  };
  return (
    <>
      <section className="vh-100" style={{ backgroundColor: "#eee;" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div
                className="card text-black"
                style={{ borderRadius: "25px;" }}
              >
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>
                      <form
                        className="mx-1 mx-md-4"
                        onSubmit={handleRegister}
                        method="post"
                      >
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="inputName">
                              Username
                            </label>
                            <input
                              type="text"
                              id="inputName"
                              className="form-control"
                              name="username"
                              onChange={(e) => {
                                setDataUsername(e.target.value);
                              }}
                              value={dataUsername}
                              required
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="inputPassword"
                            >
                              Password
                            </label>
                            <input
                              type="password"
                              id="inputPassword"
                              className="form-control"
                              name="password"
                              onChange={(e) => {
                                setDataPassword(e.target.value);
                              }}
                              value={dataPassword}
                              required
                            />
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg btn-register"
                            disabled={isButtonDisabled}
                          >
                            Register
                          </button>
                        </div>
                      </form>
                      <Link className="small text-muted text-backlogin" to="/">
                        Back to Login Page?
                      </Link>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src={imageBackground}
                        className="img-fluid img-form"
                        alt="Background images"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterForm;