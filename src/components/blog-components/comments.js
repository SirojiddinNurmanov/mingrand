import React, { Component } from "react";
import { Link } from "react-router-dom";

class Comments extends Component {
  render() {
    //  let anchor = '#'
    //  let imagealt = 'image'
    let publicUrl = process.env.PUBLIC_URL + "/";
    return (
      <div className="blog-comment">
        <div className="section-title style-small">
          <h3>Comments</h3>
        </div>
        <div className="media">
          <Link to="#">
            <img
              src={publicUrl + "assets/img/blog/comment1.png"}
              alt="comment"
            />
          </Link>
          <div className="media-body">
            <h5>
              <Link to="#">Roe Nurr</Link>
            </h5>
            <div className="date">25 July 2020</div>
            <p>
              Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
              consectetur
            </p>
            <Link to="#">REPLY</Link>
          </div>
        </div>
        <div className="media nesting">
          <Link to="#">
            <img
              src={publicUrl + "assets/img/blog/comment2.png"}
              alt="comment"
            />
          </Link>
          <div className="media-body">
            <h5>
              <Link to="#">Mirknu Strenli</Link>
            </h5>
            <div className="date">25 July 2020</div>
            <p>
              Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
              consectetur
            </p>
            <Link to="#">REPLY</Link>
          </div>
        </div>
        <div className="media">
          <Link to="#">
            <img
              src={publicUrl + "assets/img/blog/comment3.png"}
              alt="comment"
            />
          </Link>
          <div className="media-body">
            <h5>
              <Link to="#">Starlye Sikrio</Link>
            </h5>
            <div className="date">25 July 2020</div>
            <p>
              Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
              consectetur
            </p>
            <Link to="#">REPLY</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Comments;
