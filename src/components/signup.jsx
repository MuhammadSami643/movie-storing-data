import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import "../componentsCSS/signup.css";

const SignUp = () => {
  // Validation Schema for Sign Up
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleSubmit = (values) => {
    // Handle Sign Up Submission
    console.log(values);
  };

  return (
    <div className="App">
      <div className="login-container">
        <h2>Sign Up</h2>
        <Formik
          initialValues={{
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}>
          {() => (
            <Form>
              <div className="input-group">
                <label htmlFor="username">Username</label>
                <Field
                  type="text"
                  id="username"
                  name="username"
                  className="input"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="error"
                />
              </div>

              <div className="input-group">
                <label htmlFor="email">Email</label>
                <Field type="email" id="email" name="email" className="input" />
                <ErrorMessage name="email" component="div" className="error" />
              </div>

              <div className="input-group">
                <label htmlFor="password">Password</label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="input"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error"
                />
              </div>

              <div className="input-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <Field
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="input"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="error"
                />
              </div>

              <button type="submit">Sign Up</button>
            </Form>
          )}
        </Formik>

        <div className="forgot-password">
          <p>
            Already have an account?
            <Link to="/login"> Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
