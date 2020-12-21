import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="/About">
              {" "}
              About Us
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">
              {" "}
              Sign Out
            </a>
          </li>
        </ul>
      </nav>
      <h1>Home...</h1>
      <p class="text-center fs-1">Check out About page.... </p>
    </div>
  );
}
export default Home;
