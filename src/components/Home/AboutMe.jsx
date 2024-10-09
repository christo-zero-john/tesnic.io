import React from "react";

function AboutMe() {
  return (
    <div className="aboutMe p-2 text-center text-secondary w-100">
      <p className="whoAmI h2">Who Am I. . .</p>

      <p className="text-nowrap whoAmIPara">
        <span className="h5 whoAmITitles text-danger">Christo John</span>
        <span>By name</span>
      </p>

      <p className="text-nowrap whoAmIPara">
        <span className="h5 whoAmITitles text-success">Christian</span>
        <span> By Belief</span>
      </p>

      <p className="whoAmIParaLong text-nowrap">
        <span className="h5 whoAmITitles text-warning">
          Computer Applications Student
        </span>
        <span> By role</span>
      </p>

      <p className="text-nowrap whoAmIPara">
        <span className="h5 whoAmITitles text-info">Programmer</span>
        <span> By passion</span>
      </p>

      <p className="text-nowrap whoAmIPara">
        <span className="h5 whoAmITitles text-primary">Web developer</span>
        <span> By Aspiration</span>
      </p>
    </div>
  );
}

export default AboutMe;
