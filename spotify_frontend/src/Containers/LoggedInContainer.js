import { useContext, useLayoutEffect, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Howl } from "howler";
import { Icon } from "@iconify/react";
import spotify_logo from "../assets/images/spotify_logo_white.svg";
import IconText from "../components/shared/IconText";
import TextWithHover from "../components/shared/TextWithHover";
import songContext from "../contexts/songContext";
import CreatePlayListModal from "../modals/CreatePlayListModal";
import Logout from "../routes/useLogout";
import UploadSong from "../routes/UploadSong";

const LoggedInContainer = ({ children, curActiveScreen }) => {
    const [createPlayListModalOpen, setCreatePlayListModalOpen] = useState(false);
    const { currentSong, setCurrentSong, soundPlayed, setSoundPlayed, isPaused, setIsPaused } = useContext(songContext);
    const firstUpdate = useRef(true);
    const logout = Logout(); // Use the useLogout hook
    const ProgressBar = ({ soundPlayed }) => {
        
        const [progress, setProgress] = useState(0);
    
        // Update progress every second
        useEffect(() => {
            const interval = setInterval(() => {
                const currentProgress = (soundPlayed.seek() / soundPlayed.duration()) * 100;
                setProgress(currentProgress);
            }, 1000); // Update every second
    
            return () => clearInterval(interval);
        }, [soundPlayed]);

        return (
            <div className="h-1 w-full bg-gray-300 rounded-md overflow-hidden">
                <div className="h-full bg-white" style ={{width: `${progress}%`}}></div>
            </div>
        );
    };
    
    

    useLayoutEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }

        if (!currentSong) {
            return;
        }

        changeSong(currentSong.track);
    }, [currentSong && currentSong.track]);

    const playSound = () => {
        if (!soundPlayed) {
            return;
        }
        soundPlayed.play();
    };

    const changeSong = (songSrc) => {
        if (soundPlayed) {
            soundPlayed.stop();
        }
        let sound = new Howl({
            src: [songSrc],
            html5: true,
        });
        setSoundPlayed(sound);
        sound.play();
        setIsPaused(false);
    };

    const pauseSound = () => {
        soundPlayed.pause();
    };

    const togglePlayPause = () => {
        if (isPaused) {
            playSound();
            setIsPaused(false);
        } else {
            pauseSound();
            setIsPaused(true);
        }
    };

         return (
        <div className="h-full w-full bg-app-black">
            {createPlayListModalOpen && (
                <CreatePlayListModal closeModal={() => setCreatePlayListModalOpen(false)} />
            )}
            <div className={`${currentSong ? "h-9/10" : "h-full"} w-full flex`}>
                <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-10">
                    <div>
                        <div className="logoDiv p-6 py-5">
                            {/* Logo */}
                            <img src={spotify_logo} alt="logo" width={140} />
                        </div>
                        <div>
                            <IconText
                                iconName="material-symbols:home"
                                displayText="Home"
                                targetLink="/home"
                                active={curActiveScreen === "home"}
                            />
                        </div>
                        <div>
                            <IconText
                                iconName="material-symbols:search-rounded"
                                displayText="Search"
                                active={curActiveScreen === "search"}
                                targetLink="/search"
                            />
                        </div>
                        <div>
                            <IconText
                                iconName="icomoon-free:books"
                                displayText="Library"
                                active={curActiveScreen === "library"}
                            />
                        </div>
                        <div>
                            <IconText
                                iconName="material-symbols:library-music-sharp"
                                displayText="My Music"
                                targetLink="/myMusic"
                                active={curActiveScreen === "myMusic"}
                            />
                        </div>
                        <div className="pt-7">
                            <div>
                                <IconText
                                    iconName="material-symbols:add-box"
                                    displayText="Create Playlist"
                                    onClick={() => setCreatePlayListModalOpen(true)}
                                />
                            </div>
                            <div>
                                <IconText iconName="mdi:cards-heart" displayText="Liked Songs" />
                            </div>
                        </div>
                    </div>
                    <div className="px-5">
                        <div className="border border-gray-100 text-white w-2/5 flex px-2 py-1 rounded-full items-center justify-center hover:border-white cursor-pointer">
                            <Icon icon="carbon:earth-europe-africa" />
                            <div className="ml-2 text-sm font-semibold">English</div>
                        </div>
                    </div>
                </div>
                <div className="h-full w-4/5 bg-app-black overflow-auto">
                    <div className="navbar w-full h-1/10 bg-black flex bg-opacity-30 items-center justify-end">
                        <div className="w-1/2 flex h-full">
                            <div className="w-2/3 flex justify-around items-center">
                                <Link to="/live ">
                                    <TextWithHover displayText="Live Stream"/>
                                </Link>
                                <TextWithHover displayText="Support" />
                                <TextWithHover displayText="Download" />
                                <div className="h-1/2 border-r border-white"></div>
                            </div>
                            {/* <div className="w-1/3 flex justify-around h-full items-center">
                                <TextWithHover displayText="Upload Song" />
                                <div
                                    className="bg-white w-10 h-10 flex items-center justify-center rounded-full font-semibold cursor-pointer"
                                    onClick={logout} // Add onClick handler for logout
                                >
                                    MS
                                </div>
                            </div> */}
                            <div className="w-1/3 flex justify-around h-full items-center">
                                <IconText 
                                    displayText={"Upload Song"}
                                    active={curActiveScreen === "UploadSong"}
                                    targetLink="/uploadSong"
                                    />
                                    <div 
                                        className="bg-white w-10 h-10 flex items-center justify-center rounded-full font-semibold cursor-pointer"
                                            onClick={logout} // Use the logout function returned by useLogout hook
                                    >
                                        MS
                                    </div>  
                                </div>

                        </div>
                    </div>
                    <div className="content p-8 overflow-auto pt-0">{children}</div>
                </div>
            </div>
            {currentSong && (
                                <div className="h-1/10 w-full bg-black bg-opacity-30 text-white flex items-center px-4">
                                <div className="w-1/4 flex items-center">
                                    <img
                                        src={currentSong.thumbnail}
                                        alt="currentSongThumbnail"
                                        className="h-14 w-14 rounded"
                                    />
                                    <div className="pl-4">
                                        <div className="text-sm hover:underline cursor-pointer">
                                            {currentSong.name}
                                        </div>
                                        <div className="text-xs text-gray-500 hover:underline cursor-pointer">
                                            {currentSong.artist.firstName + " " + currentSong.artist.lastName}
                                        </div>
                                    </div>
                                </div>
                                <div className="w-1/2 flex justify-center h-full flex-col items-center">
                                    <div className="flex w-1/2 justify-between items-center">
                                        <Icon
                                            icon="ph:shuffle-fill"
                                            fontSize={30}
                                            className="cursor-pointer text-gray-500 hover:text-white"
                                        />
                                        <Icon
                                            icon="mdi:skip-previous-outline"
                                            fontSize={30}
                                            className="cursor-pointer text-gray-500 hover:text-white"
                                        />
                                        <Icon
                                            icon={isPaused ? "ic:baseline-play-circle" : "ic:baseline-pause-circle"}
                                            fontSize={40}
                                            className="cursor-pointer text-gray-500 hover:text-white"
                                            onClick={togglePlayPause}
                                        />
                                        <Icon
                                            icon="mdi:skip-next-outline"
                                            fontSize={30}
                                            className="cursor-pointer text-gray-500 hover:text-white"
                                        />
                                        <Icon
                                            icon="ic:twotone-repeat"
                                            fontSize={30}
                                            className="cursor-pointer text-gray-500 hover:text-white"
                                        />
                                        {/* Controls */}
                                    </div>
                                    <div>
                                        {/* Progress Bar */}
                                        <ProgressBar soundPlayed={soundPlayed} />
                                    </div>
                                </div>
                                <div className="w-1/4 flex justify-end">hello</div>
                            </div>
                        )}
                    </div>
                );
};
            
            export default LoggedInContainer;
 
            