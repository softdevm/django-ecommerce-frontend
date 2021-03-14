import { clearCart } from "../../core/helper/cartHelper";
import { API } from "./../../backend";

export const signup = (user) => {
  var myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify(user);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  return fetch(`${API}/user/`, requestOptions)
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log("error", error));
};

export const signin = (user) => {
  var formdata = new FormData();
  formdata.append("email", user.email);
  formdata.append("password", user.password);

  var requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  return fetch(`${API}/user/login/`, requestOptions)
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log("error", error));
};

export const autheticate = (data, next) => {
  if (typeof window !== undefined) {
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
};

export const isAuthenticated = () => {
  if (typeof window == undefined) {
    return false;
  }
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    return false;
  }
};

export const signout = (next) => {
  const userId = isAuthenticated() && isAuthenticated().user._id;

  if (typeof window !== undefined) {
    localStorage.removeItem("jwt");
    clearCart(() => {});
    // next();

    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    return fetch(`${API}/user/logout/${userId}/`, requestOptions)
      .then((response) => {
        console.log("User Signed Out Successfully.");
        next();
      })
      .catch((error) => console.log("error", error));
  }
};
