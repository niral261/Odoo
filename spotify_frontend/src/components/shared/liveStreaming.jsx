import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const singers = {
  "niral": "91469886",
  "Arijit": "12345678",
  "A R Rehman": "87654321",
  "Raghuvanshi": "11223344",
  "Beni Dayal": "44332211",
};

const LiveStreaming = ({ username }) => {
  const [selectedSinger, setSelectedSinger] = useState("");
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = (ev) => {
    ev.preventDefault();
    if (!selectedSinger) {
      alert('Please select a singer.');
      return;
    }
    if (!code) {
      alert('Please wait for the code to generate.');
      return;
    }
    navigate(`./${code}`);
  }

  const handleSingerChange = (event) => {
    const singer = event.target.value;
    setSelectedSinger(singer);
    setCode(singers[singer] || "");
  };

  const handleGoHome = () => {
    navigate('/home');
  }

  return (
    <div className="w-full h-full bg-black flex items-center justify-center">
      <form onSubmit={handleFormSubmit} className="form">
        <div className="p-10 max-w-lg mx-auto bg-gray-900 text-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">Live Streaming Setup</h3>
          <div className="mb-4">
            <label htmlFor="singer-select" className="block text-lg font-medium mb-2">Choose a singer:</label>
            <select
              id="singer-select"
              value={selectedSinger}
              onChange={handleSingerChange}
              className="block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="">--Select a singer--</option>
              {Object.keys(singers).map((singer) => (
                <option key={singer} value={singer}>
                  {singer}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="code-input" className="block text-lg font-medium mb-2">Room code:</label>
            <input
              type="text"
              id="code-input"
              value={code}
              readOnly
              placeholder="Code will appear here"
              className="block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          
          <button type="submit" className="bg-gray-700 rounded-md p-2 mt-2 hover:bg-yellow-400">Join Nirvana</button>
          <button onClick={handleGoHome} className="bg-gray-700 rounded-md p-2 mt-2 ml-2 hover:bg-yellow-400">Go to Home</button>
        </div>
      </form>
    </div>
  );
};

export default LiveStreaming;
