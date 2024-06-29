import { useContext } from "react";
import songContext from "../../contexts/songContext";

const SingleSongCard = ({info, playSound}) => {
    const {currentSong, setCurrentSong} = useContext(songContext);

    return (
    <div 
        className="flex hover:bg-gray-400 hover:bg-opacity-20 p-2 round
        -md"
        onClick={() => {
            playSound(info.track);
            setCurrentSong(info);   
        }}
    >
        <div className="w-11 h-11 bg-cover bg-center" 
        style={{
            backgroundImage: `url("${info.thumbnail}")`,
        }}></div>
        <div className="flex w-full">
        <div className="text-white flex justify-center flex-col pl-4 w-5/6">
            <div className="hover:underline cursor-pointer">
                {info.name}
            </div>
            <div className="text-xs hover:underline cursor-pointer text-gray-400">
                {info.artist.firstName + " " + info.artist.lastName}
            </div>
        </div>
        <div className="w-1/6 flex items-center justify-center text-gray-400 text-sm">
            <div>3:44</div>
            {/* <div className="flex items-center justify-center pl-3 text-lg">...</div> */}
        </div>
        </div>
    </div>
)};
export default SingleSongCard;