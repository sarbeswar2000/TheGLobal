import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, url, urlToImage, author, date, source } =
      this.props;
    return (
      <>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={
              !urlToImage
                ? "https://images.moneycontrol.com/static-mcnews/2020/11/crude-oiloil-770x433.jpg"
                : urlToImage
            }
            className="card-img-top"
            alt="..."
          />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {source}
          </span>

          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <strong>
              <p className="card-text">
                <small className="text-body-secondary">
                  By {!author ? "Unknown" : author}
                </small>
              </p>
            </strong>
            <strong>
              {" "}
              <p className="card-text">
                <small className="text-body-secondary">
                  {new Date(date).toGMTString()}
                </small>
              </p>
            </strong>
            <a href={url} className="btn btn-dark">
              Show more ...
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
