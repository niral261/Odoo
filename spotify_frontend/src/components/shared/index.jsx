import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const LivePage = () => {
  const { liveId } = useParams();
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const zp = useRef(null);
  const [mode, setMode] = useState(ZegoUIKitPrebuilt.LiveStreaming); // Default mode

  useEffect(() => {
    const initializeZego = async () => {
      try {
        const appID = 915431073;
        const serverSecret = "982b461348a0bd26cb92c6960fb282ff";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
          appID,
          serverSecret,
          liveId,
          Date.now().toString(),
          "Your Name"
        );

        if (zp.current) {
          await zp.current.leaveRoom(); // Clean up existing Zego instance
        }

        zp.current = ZegoUIKitPrebuilt.create(kitToken);

        await zp.current.joinRoom({
          container: containerRef.current,
          scenario: {
            mode: mode,
          },
        });

        console.log(`Joined room in ${mode} mode successfully`);
      } catch (error) {
        console.error("Error initializing Zego:", error);
      }
    };

    initializeZego();

    return () => {
      if (zp.current && typeof zp.current.leaveRoom === "function") {
        zp.current.leaveRoom();
      }
    };
  }, [liveId, mode]);

  const handleBack = () => {
    navigate("/home");
  };

  const handleModeChange = async (selectedMode) => {
    setMode(selectedMode);
  };

  return (
    <div className="room-page relative">
      <div className="flex justify-between items-center absolute top-4 left-4 right-4">
        <div className="space-x-4">
          <button
            onClick={() => handleModeChange(ZegoUIKitPrebuilt.LiveStreaming)}
            className={`bg-gray-700 text-white px-3 py-2 rounded-md hover:bg-gray-600 ${
              mode === ZegoUIKitPrebuilt.LiveStreaming ? "bg-gray-800" : ""
            }`}
          >
            Live Streaming
          </button>
          <button
            onClick={() => handleModeChange(ZegoUIKitPrebuilt.VideoConference)}
            className={`bg-gray-700 text-white px-3 py-2 rounded-md hover:bg-gray-600 ${
              mode === ZegoUIKitPrebuilt.VideoConference ? "bg-gray-800" : ""
            }`}
          >
            Video Conference
          </button>
        </div>
        <button
          onClick={handleBack}
          className="bg-gray-700 text-white px-3 py-2 rounded-md hover:bg-gray-600"
        >
          Back to Home
        </button>
      </div>
      <div ref={containerRef} className="w-full h-full mt-16" />
    </div>
  );
};

export default LivePage;
