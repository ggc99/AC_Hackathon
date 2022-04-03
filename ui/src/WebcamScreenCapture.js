import React from "react";
import Webcam from "react-webcam";
import './WebcamScreenCapture.css';


const WebcamStreamCapture = ({onUploadClick}) => {
  const webcamRef = React.useRef(null);
  const mediaRecorderRef = React.useRef(null);
  const [capturing, setCapturing] = React.useState(false);
  const [captureIdle, setCaptureIdle] = React.useState(true);
  const [recordedChunks, setRecordedChunks] = React.useState([]);
    
    const handleStartCaptureClick = React.useCallback(() => {
    setCapturing(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm"
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
        mediaRecorderRef.current.start();
        
        setTimeout(handleStopCaptureClick, 5000);
  }, [webcamRef, setCapturing, mediaRecorderRef]);

  const handleDataAvailable = React.useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );

  const handleStopCaptureClick = React.useCallback(() => {
    mediaRecorderRef.current.stop();
      setCapturing(false);

      const blob = new Blob(recordedChunks, { type: "video/webm" });
      const url = URL.createObjectURL(blob);
      onUploadClick(url);
  }, [mediaRecorderRef, webcamRef, setCapturing]);

  const handleRecordStart = React.useCallback(() => {
    setCaptureIdle(false);
    setTimeout(() => {
      onUploadClick("https://ac-hackathon.s3.us-east-2.amazonaws.com/thermal_video_10s_crop.mp4")
    }, 4000);
  });

  return (
    <>
      {/* <Webcam audio={false} ref={webcamRef} /> */}
        {/* <p>Place your face in the frame</p>
      ) : (
        <button onClick={handleStartCaptureClick}>Start Capture</button>
      )} */}
      <div className="wrapper">
          { captureIdle ? <div className="flash-text">Please align your face</div> : null }
          { !captureIdle ? <div style={{ color: "red" }} class="flash-text">Screening</div> : null }
          <div className="video-content">
          { captureIdle ? <img id="video-overlay" src="https://ac-hackathon.s3.us-east-2.amazonaws.com/face-outline.png"></img> : null }
            {/* <video src="https://ac-hackathon.s3.us-east-2.amazonaws.com/thermal_video_10s_crop.mp4" autoPlay ></video> */}
            <video src="https://ac-hackathon.s3.us-east-2.amazonaws.com/toma_thermal.mp4" autoPlay ></video>
          </div>
        <button onClick={handleRecordStart}>Start</button>
      </div>
      
    </>
  );
};

export default WebcamStreamCapture;