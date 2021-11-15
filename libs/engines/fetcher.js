import axios from "axios";
import Cookies from "js-cookie";

const fetcherSignUp = async (url, name, email, password) => {
  const data = await axios
    .post(
      `${url}`,
      {
        username: `${name}`,
        email: `${email}`,
        password: `${password}`,
        csrf: `${Cookies.get("csrftoken")}`,
        sbnSessionId: `${Cookies.get("sbn-session-id")}`,
      },
      {
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      }
    )
    .then()
    .catch((err) => {
      return err.message;
    });

  return data;
};

const fetcherSignIn = async (url, password) => {
  const data = await axios.post(
    `${url}`,
    {
      password: `${password}`,
      csrf: `${Cookies.get("csrftoken")}`,
      sbnSessionId: `${Cookies.get("sbn-session-id")}`,
    },
    {
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      credentials: "include",
    }
  );
  return data;
};

export { fetcherSignIn, fetcherSignUp };
