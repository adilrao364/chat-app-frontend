import "./style/auth.css";
import { NavLink, useHistory } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "./TextField";
import Avatar from "../images/avatar.svg";

function Signin() {
  const history = useHistory()
  const validate = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(6, "Must be 6 characters or more")
      .required("Required"),
  });

  const handleSigninUser = async (values, onSubmitProps) => {
    console.log(values);
    if (values.email !== "" && values.password !== "" ) {
      history.push("/home")
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validate}
        onSubmit={(values, onSubmitProps) => {
          handleSigninUser(values, onSubmitProps);
        }}
      >
        {(formik) => (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              height: "75vh",
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
              <h3 style={{ color: "#05728F", fontWeight: "bold", fontFamily: "Poppins, sans-serif" }}>Signup</h3>
              <Form>
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
                <div className="col-12">
                  <button type="submit" className="shadow-sm" style={{fontFamily: "Poppins, sans-serif"}}>
                    Signin
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
                <span className="">Don't have an account?</span>
                <span style={{ marginLeft: "10px" }}>
                  <NavLink
                    to="/auth/user/signup"
                    style={{
                      textDecoration: "none",
                      fontWeight: "bold",
                      color: "#05728F",
                    }}
                  >
                    Signup
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

export default Signin;
