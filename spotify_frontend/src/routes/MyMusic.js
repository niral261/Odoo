import { useState, useEffect } from "react";
import SingleSongCard from "../components/shared/SingleSongCard";
import { makeAuthenticatedGETRequest } from "../utils/serverHelpers";
import LoggedInContainer from "../Containers/LoggedInContainer";

const MyMusic = () => {
    const [songData, setSongData] = useState([]);

    useEffect(() => {
                const getData = async () => {
                  try{
                    const response = await makeAuthenticatedGETRequest("/song/get/mysongs");
                    // console.log(response.data);
                      setSongData(response.data);
                     } catch(err){
                        console.log("Error Found",err);
                   }
        
                 };
                getData();
            }, []);

    return(
        <LoggedInContainer curActiveScreen="myMusic">
            <div className="text-white text-xl font-semibold pb-4 pl-2 pt-8">My Songs</div>
                 <div className="space-y-3">
                     {songData.map((item) => {
                    return( 
                        <SingleSongCard info={item} playSound={() => {}}/>
                    );
                     })}
                 </div>  
                 </LoggedInContainer> 
        )
}

export default MyMusic;