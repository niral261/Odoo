import { useState } from "react";
import TextInput from "../components/shared/TextInput";
import { makeAuthenticatedGETRequest, makeAuthenticatedPOSTRequest } from "../utils/serverHelpers";
import { thumbnail } from "@cloudinary/url-gen/actions/resize";



const CreatePlayListModal = ({closeModal}) => {
    const [playlistName, setPlaylistName] = useState("");
    const [playlistThumbnail, setPlaylistThumbnail] = useState("");

    const createPlaylist = async () => {
        const response = await makeAuthenticatedPOSTRequest("/playlist/create", 
            {name:playlistName, thumbnail:playlistThumbnail, songs:[]}
        );
        if(response._id){
            closeModal();
        }
    }

    return (
    <div 
        className="absolute bg-black bg-opacity-50 w-screen h-screen flex justify-center items-center" 
        onClick={closeModal}
    >
            <div className='bg-app-black w-1/3 rounded-md p-8' onClick={(e)=>{e.stopPropagation()}}>
                <div className="text-white mb-5 font-semibold text-lg">Create Playlist</div>
                <div className="space-y-4 flex flex-col justify-center items-center">
                <TextInput 
                            label="Name" 
                            labelClassName={"text-white"}
                            placeholder="Playlist Name"
                            value={playlistName}
                            setValue={setPlaylistName}
                />
                 <TextInput 
                            label="Thumbnail" 
                            labelClassName={"text-white"}
                            placeholder="Thumbnail"
                            value={playlistThumbnail}
                            setValue={setPlaylistThumbnail}
                />
                <div className="bg-white w-1/3 rounded flex font-semibold items-center justify-center py-3 mt-4 cursor-pointer" 
                    onClick={createPlaylist}>Create</div>
                </div>
            </div>    
        </div>
    );
};

export default CreatePlayListModal;