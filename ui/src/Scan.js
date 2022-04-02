import React from "react";
import WebcamStreamCapture from "./WebcamScreenCapture";

const Scan = ({ onUploadClick }) => {
    return (
        <div>
            <WebcamStreamCapture onUploadClick={onUploadClick}/>
        </div>
    );
};

export default Scan;