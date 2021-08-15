import { NavLink, useHistory } from "react-router-dom";
import TextField from "./TextField";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "./style/auth.css";
import Progress from "./Progress";
import Avatar from "../images/adilgood.png";

function Signup() {
  const validate = Yup.object({
    username: Yup.string()
      .min(3, "Must be 3 characters or more")
      .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(6, "Must be 6 characters or more")
      .required("Required"),
    password2: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
  });

  const handleSignupUser = async (values, onSubmitProps) => {
    console.log(values);
  };

  return (
    <>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          password2: "",
        }}
        validationSchema={validate}
        onSubmit={(values, onSubmitProps) => {
          handleSignupUser(values, onSubmitProps);
        }}
      >
        {(formik) => (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              height: "83vh",
              width: "100vw",
            }}
          >
            <img
              src={Avatar}
              //   src="https://bootdey.com/img/Content/avatar/avatar7.png"
              alt="signup-avatar"
              className="mb-4 rounded-circle img-fluid img-thumbnail"
              style={{ objectFit: "cover", height: "150px", width: "150px" }}
            />

            <div className="login-block shadow-lg">
              <h3 style={{ color: "#05728F", fontWeight: "bold" }}>Signup</h3>
              <Form>
                <TextField
                  label="Username"
                  type="text"
                  name="username"
                  placeholder="Adil Rao"
                />
                <TextField
                  label="Email"
                  type="email"
                  name="email"
                  placeholder="example@example.com"
                />
                <TextField
                  label="Password"
                  type="password"
                  name="password"
                  placeholder="******"
                />
                <TextField
                  label="Password"
                  type="password"
                  name="password2"
                  placeholder="******"
                />
                <div class="col-12">
                  <button type="submit" className="shadow-sm" style={{fontFamily: "Poppins, sans-serif"}}>
                    Signup
                  </button>
                </div>
              </Form>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  fontSize: "14px",
                }}
                className="mt-2"
              >
                <span className="">Already member?</span>
                <span style={{ marginLeft: "10px" }}>
                  <NavLink
                    to="/"
                    style={{
                      textDecoration: "none",
                      fontWeight: "bold",
                      backgroundColor: "#FFF",
                      color: "#05728F",
                    }}
                  >
                    Signin
                  </NavLink>
                </span>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
}

export default Signup;
