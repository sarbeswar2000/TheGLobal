import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, url, urlToImage } = this.props;
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
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
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
