import React from "react";
import axios from "axios";
import pic from "./spacex.png";
function login(e) {
  e.preventDefault();
  let request = {
    email: document.getElementById("username1").value,
    password: document.getElementById("password2").value,
  };
  axios
    .post("http://localhost:3000/login", request)
    .then((resp) => {
      if (resp.data.message === "Successfull login.") {
        window.location.href = "/Home";
      } else {
        alert(resp.data.message);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

function Sign_in() {
  return (
    <div
      style={{
        backgroundImage: `url("https://www.proplants.com/blog/wp-content/uploads/2016/04/hero-green-flowers.jpg")`,
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "55vw",
        color: "white",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="sign_in">
        <div
          class="container-sm p-3 mb-5 bg-transparent rounded"
          style={{ width: "400px" }}
        >
          <form onSubmit={(e) => login(e)}>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="username1"
                placeholder="xyz@example.com"
              />
            </div>
            <div class="mb-3">
              <label for="Password" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="password2"
                placeholder="*******"
              />
            </div>
            <div class="d-grid gap-2 col-6 mx-auto">
              <button class="btn btn-primary" type="submit">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Sign_in;
