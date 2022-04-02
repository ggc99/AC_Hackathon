import React from "react";
import Webcam from "react-webcam";

const WebcamStreamCapture = ({onUploadClick}) => {
  const webcamRef = React.useRef(null);
  const mediaRecorderRef = React.useRef(null);
  const [capturing, setCapturing] = React.useState(false);
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

  return (
    <>
      <Webcam audio={false} ref={webcamRef} />
      {capturing ? (
        <p>Place your face in the frame</p>
      ) : (
        <button onClick={handleStartCaptureClick}>Start Capture</button>
      )}
    </>
  );
};

export default WebcamStreamCapture;