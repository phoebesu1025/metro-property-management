import React from "react";
import { Link } from "react-router-dom";

const CompanyLogo = () => {
  return (
    <div className="company-logo">
      <Link to="/">
        <img src="./images/logo.png" alt="Metro Logo" />
      </Link>
    </div>
  );
};

export default CompanyLogo;
