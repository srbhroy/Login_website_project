import React from "react";

function About() {
  return (
    <div
      style={{
        backgroundColor: "#86FBC7",
        backgroundSize: "cover",
        width: "100vw",
        height: "55vw",
      }}
    >
      <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              {" "}
              About Us
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Home">
              {" "}
              Home
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
      <h1
        class="badge mx-auto bg-primary fs-1"
        style={{ width: "200px", display: "block" }}
      >
        About Us
      </h1>
      <p class="text-center fs-1">
        More commonly thought of as the color of the foliage surrounding a
        beautiful bloom, a selection of unique flowers grow in green and can add
        some variety to your garden. If you are looking to add some intrigue,
        try growing Bells of Ireland or adding Hellebores to your backyard. To
        learn more about sun and soil needs as well as a growing tip, scroll
        through our guide.
      </p>
    </div>
  );
}
export default About;
