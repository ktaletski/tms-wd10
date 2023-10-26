import { FC, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import { useAppDispatch } from "./store";
import { login } from "./store/user";

// /**
//  * Render Props
//  */

// interface MyComponentProps {
//   /** render prop example */
//   children: (config: { key1: string; key2: number }) => ReactElement;
// }

// const MyComponent: FC<MyComponentProps> = ({ children }) => {
//   return children({ key1: "asfdafsd", key2: 24545 });
// };

// <MyComponent  >
//   {({ key1, key2 }) => <input />}
// </MyComponent>

const LOGIN_FIELDS = {
  USERNAME: "username",
  PASSWORD: "password",
} as const;

interface LoginFormValues {
  [LOGIN_FIELDS.USERNAME]: string;
  [LOGIN_FIELDS.PASSWORD]: string;
}

const LoginSchema: Yup.Schema<LoginFormValues> = Yup.object().shape({
  [LOGIN_FIELDS.USERNAME]: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("This field is required"),
  [LOGIN_FIELDS.PASSWORD]: Yup.string()
    .min(2, "This password is too short")
    .max(50, "This password is too long!")
    .required("Password is required"),
});

export const LoginPage: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = useCallback<
    (values: LoginFormValues) => void | Promise<unknown>
  >(
    async ({ username, password }) => {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
          // expiresInMins: 60, // optional
        }),
      });
      // eslint-disable-next-line
      const { id, firstName, lastName, image, token } = await response.json();
      localStorage.setItem("auth_token", token);

      dispatch(
        login({
          id,
          firstName,
          lastName,
          image,
        }),
      );

      navigate("/");
    },
    [dispatch, navigate],
  );

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <Formik
        initialValues={{
          [LOGIN_FIELDS.USERNAME]: "kminchelle",
          [LOGIN_FIELDS.PASSWORD]: "0lelplR",
        }}
        validationSchema={LoginSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form
            style={{ display: "flex", flexDirection: "column", rowGap: "8px" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "4px",
              }}
            >
              <Field
                as={"input"}
                name={LOGIN_FIELDS.USERNAME}
                type="name"
                placeholder="username"
                style={{ fontSize: "32px" }}
              />
              <span style={{ color: "red" }}>
                <ErrorMessage name={LOGIN_FIELDS.USERNAME} />
              </span>
            </div>
            <br />
            <Field
              as="input"
              name={LOGIN_FIELDS.PASSWORD}
              type="password"
              placeholder="password"
              autoComplete=""
              style={{ fontSize: "32px" }}
            />
            <span style={{ color: "red" }}>
              <ErrorMessage name={LOGIN_FIELDS.PASSWORD} />
            </span>
            <br />
            <button
              type="submit"
              style={{ fontSize: "32px" }}
              disabled={isSubmitting}
            >
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
