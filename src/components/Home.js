import React from "react";

function Home() {
  return (
    <div>
      <div className="px-4 pt-5 my-5 text-center ">
        <h1 className="display-4 fw-bold text-body-emphasis">
          Welcome to NewsInsights!
        </h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Get you daily dose of news right at the tips of your fingers. Browse
            through the tabs for the variety of lastest news content.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5"></div>
        </div>

        <div className="overflow-hidden" style={{ maxHeight: "30vh" }}>
          <div className="container px-5">
            <img
              src="./images.jpeg"
              className="img-fluid border rounded-3 shadow-lg mb-4"
              alt="Example news"
              width="600"
              height="500"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
