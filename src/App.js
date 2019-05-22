import React from 'react';

// On this codelab, you will be streaming only video (video: true).
const mediaStreamConstraints = {
  video: true,
};

// Handles error by logging a message to the console with the error message.
function handleLocalMediaStreamError(error) {
  console.log('navigator.getUserMedia error: ', error);
}

const App = () => {
  let ref = React.createRef(); // Video element where stream will be placed.

  // Local stream that will be reproduced on the video.
  let localStream;
  
  const handleClick = () => {
    ref.current.setAttribute("autoplay", "");
    ref.current.setAttribute("playsinline", "");
    navigator.mediaDevices.getUserMedia(mediaStreamConstraints)
      .then( mediaStream => { // Handles success by adding the MediaStream to the video element.
        localStream = mediaStream
        ref.current.srcObject = mediaStream
      })
      .catch(handleLocalMediaStreamError);
  }
  
  return (
    <>
      <video ref={ref} style={{width: "320px", maxWidth: "100%" }}></video>
      <button onClick={handleClick}>Test</button>
    </>
  )
}

export default App;
