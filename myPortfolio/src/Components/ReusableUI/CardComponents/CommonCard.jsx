import React from "react";
import "./CommonCard.css";

const CommonCard = ({ lists }) => {
  console.log(lists);
  return (
    <div className="card common_card mt-3">
      <div className="card-body">
        <div className="row">
          {/* Left Content */}
          <div className="col-md-9">
            {/* Title + Mobile Date */}
            <div className="d-flex justify-content-between align-items-start">
              <h4 className="common-title">{lists.title}</h4>

              {/* Mobile Date */}
              <span className="common-date d-md-none">{lists.duration}</span>
            </div>

            <p className="common-subtitle">{lists.subTitle}</p>

            <ul className="common_list">
              {lists.responsibilities &&
                lists.responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
            </ul>
          </div>

          {/* Desktop Date */}
          <div className="col-md-3 text-md-end d-none d-md-block">
            <span className="common-date">{lists.duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonCard;
