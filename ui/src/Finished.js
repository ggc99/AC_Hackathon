import React from "react";

const Finished = ({ teamId, video }) => {
  return (
    <div>
      <div
        style={{
          height: "55vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p
          style={{
            display: "block",
            fontWeight: "bold",
            lineHeight: "55px",
            fontSize: "36px",
            color: "#2a4763",
            textAlign: "center",
          }}
        >
          Thank you! <br /> Have a good one.
        </p>
      </div>
    </div>
  );
};

export default Finished;
