import "./output.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginComponent from "./routes/Login";
import SignupComponent from "./routes/Signup";
import HomeComponent from "./routes/Home";
import LoggedInHomeComponent from "./routes/LoggedInHome";
import UploadSong from "./routes/UploadSong";
import MyMusic from "./routes/MyMusic";
import SearchPage from "./routes/SearchPage";
import { useCookies } from "react-cookie";
import songContext from "./contexts/songContext";
import LiveStreaming from "./components/shared/liveStreaming"; 
import LivePage from "./components/shared/index";
import Library from "./routes/Library";

const HelloComponent = () => {
  return <div>Hello from component hi</div>;
};

function App() {
  const [currentSong, setCurrentSong] = useState(null);
  const [cookie, setCookie] = useCookies(["token"]);
  const [soundPlayed, setSoundPlayed] = useState(null);
  const [isPaused, setIsPaused] = useState(true);

  console.log(cookie.token);

  return (
    <div className="w-screen h-screen font-poppins">
      <BrowserRouter>
        {cookie.token ? (
          <songContext.Provider value={{ currentSong, setCurrentSong, soundPlayed, setSoundPlayed, isPaused, setIsPaused }}>
            <Routes>
              {/* Adding routes component here indicates to the package (react-router-dom) that we are starting to define our routes inside this */}
              {/* Logged In */}
              <Route path="/" element={<HelloComponent />} />
              <Route path="/home" element={<LoggedInHomeComponent />} />
              <Route path="/uploadSong" element={<UploadSong />} />
              <Route path="/myMusic" element={<MyMusic />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/live" element={<LiveStreaming />} /> 
              <Route path="/library" element={<Library/>}/>
              <Route path="/live/:liveId" element={<LivePage />} />
            </Routes>
          </songContext.Provider>
        ) : (
          <Routes>
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/Signup" element={<SignupComponent />} />
            <Route path="/home" element={<HomeComponent />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
