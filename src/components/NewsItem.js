// import React, { Component } from "react";
import React from "react";

const NewsItem = (props) => {
  // render() {
  let { title, description, imageUrl, newsUrl, time } = props; //in class based we would have wriiten this.props here
  //destructuring
  return (
    <div className="my-3">
      <div className="card">
        <img
          src={
            !imageUrl
              ? "https://media.istockphoto.com/id/1369150014/vector/breaking-news-with-world-map-background-vector.jpg?s=1024x1024&w=is&k=20&c=blBt3PJbOSEZF5_zB5YgKYeq9Zx_RMOLntX_nI3lliQ="
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title"> {title}..</h5>
          <p className="card-text">{description}..</p>
          <p className="card-text">
            <small className="text-body-secondary">
              {new Date(time).toGMTString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-primary"
          >
            Read More...
          </a>
        </div>
      </div>
    </div>
  );
  // }
};

export default NewsItem;
