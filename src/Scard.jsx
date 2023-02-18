import React from "react";

const Scard = (props) => {
    return (
        <>
          <div className="cards">
            <div className="card">
              <img src={props.imgsrc} alt="myPic" className="card_img" />
              <div className="card_info">
                <span className="card_category">{props.title}</span>
                <h3 className="card_title">{props.sname}</h3>
                <a href="https://www.netflix.com/in/title/80100172" target="_blank">
                  Watch Now
                </a>
              </div>
            </div>
          </div>
        </>
      );
}

export default Scard;