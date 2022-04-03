import React from "react";

import acLogo from "./assets/logo.svg";
import thermaLogo from "./assets/poweredByThe.svg";

const Bar = () => {
  return (
    <div
      style={{
        height: "20vh",
        width: "100%",
        justifyContent: "center",
        display: "inline-block",
      }}
    >
      <div
        style={{
          float: "left",
          height: "100%",
          width: "213px",
          display: "flex",
          justifyContent: "center",
          paddingLeft: "50px",
          paddingTop: "20px",
        }}
      >
        <div style={{ height: "100px", width: "213px" }}>
          <img
            alt="arkansas children's"
            src={acLogo}
            style={{ width: "100%", height: "100%" }}
          ></img>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          float: "right",
          height: "100%",
        }}
      >
        <div
          style={{
            height: "24px",
            paddingRight: "50px",
            paddingBottom: "100px",
          }}
        >
          <img
            alt="Powered by Thermavis"
            src={thermaLogo}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Bar;
