import { useState } from "react";
import { Icon } from "@iconify/react";
import spotify_logo from "../assets/images/spotify_logo_white.svg";
import IconText from "../components/shared/IconText";
import TextWithHover from "../components/shared/TextWithHover";
import TextInput from "../components/shared/TextInput";
import CloudinaryUpload from "../components/shared/CloudinaryUpload";
import { useNavigate } from "react-router-dom";
import { makeAuthenticatedPOSTRequest } from "../utils/serverHelpers";
import LoggedInContainer from "../Containers/LoggedInContainer";

const UploadSong = () => {
    const [name, setName] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [playlistUrl, setPlaylistUrl] = useState("");
    const [uploadedSongFileName, setUploadedSongFileName] = useState("");
    const navigate = useNavigate();
    
    const submitSong = async() => {
        const data = {name, thumbnail, track:playlistUrl};
        const response = await makeAuthenticatedPOSTRequest("/song/create", data);
        if(response.err){
            alert("Could not create Song")
            return;
        }
        alert("Success");
        navigate("/home");
    };

    return (
        <LoggedInContainer curActiveScreen="UploadSong">
            <div className="content p-8 overflow-auto pt-0">
                <div className="text-2xl font-semibold mb-5 text-white mt-8">
                    Upload your music
                </div>
                <div className="w-2/3 flex space-x-3 mb-2">
                    <div className="w-1/2">
                        <TextInput 
                            label="Name"
                            placeholder="Name"
                            value={name}
                            setValue={setName}
                        />
                    </div>
                    <div className="w-1/2">
                        <TextInput 
                            label="Thumbnail" 
                            placeholder="Thumbnail"
                            value={thumbnail}
                            setValue={setThumbnail}
                        />
                    </div>
                </div>
                <div className="pt-5">
                    {uploadedSongFileName ? (
                        <div className="bg-white rounded-full p-3 w-1/3">
                            {uploadedSongFileName.substring(0, 40)}
                        </div>
                    ) : (
                        <CloudinaryUpload setUrl={setPlaylistUrl} setName={setUploadedSongFileName}/>
                    )}
                </div>
                <div className="bg-white w-40 flex items-center p-4 rounded-full curso  r-pointer font-semibold mt-4" onClick={submitSong}>
                    Submit Song
                </div>
            </div>
        </LoggedInContainer>
    ); 
};

export default UploadSong;