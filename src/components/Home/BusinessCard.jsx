import React from "react";
import "../../assets/img/me.jpg";

function BusinessCard() {
  return (
    <div className="businessCard card bg-light py-2 pb-5 pb-md-5 mx-auto btn btn-outline-danger card m-1 d-flex flex-row justify-content-center align-items-center flex-wrap">
      <div className="bussCardSupSec1">
        <div className="businessCardSection1  d-flex flex-column justify-content-center align-items-center mx-auto ">
          <div className="businessCardSection1-1 d-flex flex-row justify-content-start align-items-center text-left  ml-4">
            <img
              src="/assets/img/me.jpg"
              alt=""
              className="businessCardImg btn btn-outline-success mr-md-5 pb-0"
            />

            <p className="text-center pl-5 h3 name">Christo John</p>
          </div>

          <div className="businessCardContent  text-left ml-3 mt-5">
            <p className="mx-md-3 department btn btn-outline-light border-0 border-1">
              Computer Science
            </p>
            <p className="mx-md-3 role btn btn-outline-success border-0 border-1">
              Computer Applications Student
            </p>
            <p className="mx-md-3 organization btn btn-outline-success border-0 border-1">
              Mar Augusthinose College Ramapuram
            </p>
            <p className="mx-md-3 proffession btn btn-outline-warning border-0 border-1 ">
              Web Developer
            </p>
          </div>
        </div>

        <div className="businnesCardConnectSection d-flex flex-row justify-content-around align-items-center pb-4 pb-md-0">
          <a
            className="my-md-4 btn btn-outline-info GitHub"
            href="https://github.com/christo-zero-john"
          ></a>
          <a
            className="my-md-4 btn btn-outline-info MuLearn"
            href="https://app.mulearn.org/profile/christojohn-1@mulearn"
          ></a>
          <a
            className="my-md-4 btn btn-outline-info LinkedIn"
            href="https://www.linkedin.com/in/christo-john-kalapurackal/"
          ></a>
          <a
            className="my-md-4 btn btn-outline-info Instagram"
            href="https://www.instagram.com/tesnic.io"
          ></a>
        </div>
      </div>

      <div className="bussCardSupSec2 p-1">
        <ul className="">
          <li className="mx-md-3 px-md-3 mx-1 ml-0 btn bg-light skillIcon GitHub"></li>
          <li className="mx-md-3 px-md-3 mx-1 btn bg-light skillIcon MuLearn"></li>
          <li className="mx-md-3 px-md-3 mx-1 btn bg-light skillIcon HTML"></li>
          <li className="mx-md-3 px-md-3 mx-1 btn bg-light skillIcon CSS"></li>
          <li className="mx-md-3 px-md-3 mx-1 btn bg-light skillIcon JavaScript"></li>
          <li className="mx-md-3 px-md-3 mx-1 btn bg-light skillIcon nodeJs"></li>
          <li className="mx-md-3 px-md-3 mx-1 btn bg-light skillIcon w3Schools"></li>
          <li className="mx-md-3 px-md-3 mx-1 mr-0 btn bg-light skillIcon unrealEngine"></li>
        </ul>
      </div>
    </div>
  );
}

export default BusinessCard;
