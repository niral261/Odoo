import { useState } from "react";
import { Howl, Howler } from "howler";
import { Icon } from "@iconify/react";
import spotify_logo from "../assets/images/spotify_logo_white.svg";
import IconText from "../components/shared/IconText";
import TextWithHover from "../components/shared/TextWithHover";
import LoggedInContainer from "../Containers/LoggedInContainer";

const focusCardsData = [
    {title: "evefvef", 
    description: "VEV EFVEFVsv fvefef", 
    imgUrl: "https://images.unsplash.com/photo-1471478331149-c72f17e33c73?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3"}, 
    {title : "vfevev",
    description: "fvfefvefvfvefeve",
    imgUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D  "
    }, 
    {title : "vfevev",
    description: "fvfefvefvfvefeve",
    imgUrl:"https://images.unsplash.com/photo-1471275287446-f463543ee84f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {title : "vfevev",
    description: "fvfefvefvfvefeve",
    imgUrl: "https://images.unsplash.com/photo-1541851953232-85d34a532663?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {title : "vfevev",
    description: "fvfefvefvfvefeve",
    imgUrl:"https://images.unsplash.com/photo-1484972759836-b93f9ef2b293?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    } 
    ];

    const spotifyPlaylistsCardsData = [
        {title: "Top Hindi Playist", 
        description: "By Bittu", 
        imgUrl: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}, 
        {title : "Romantic Playist",
        description: "By Arjun",
        imgUrl: "https://images.unsplash.com/photo-1483032469466-b937c425697b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }, 
        {title : "Top 50 - India",
        description: "By Evolve Tunes",
        imgUrl:"https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {title : "Top Hits English",
        description: "By Evolve Tunes",
        imgUrl: "https://images.unsplash.com/photo-1483032469466-b937c425697b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {title : "Hot Hits Punjabi",
        description: "by Song Maniac",
        imgUrl:"https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        } 
        ];

    const Home = () => {
        return(
            <LoggedInContainer curActiveScreen="home">
                <PlaylistView titleText="Jump back in" cardsData={focusCardsData}/>
                <PlaylistView titleText="Spotify Playlists" cardsData={spotifyPlaylistsCardsData}/>
                <PlaylistView titleText="India's Best" cardsData={focusCardsData}/>
            </LoggedInContainer>
        );
    };

const PlaylistView = ({titleText, cardsData}) => {
    return(
        <div className="text-white mt-8">
            <div className="text-xl font-semibold mb-5">{titleText}</div>
            <div className="w-full flex justify-between space-x-3">
                {
                    // cardaData will be an array
                    cardsData.map(item => {
                        return<Card 
                        title={item.title} 
                        description={item.description}
                        imgUrl={item.imgUrl} 
                        />
                    })
                }
            </div>
        </div>
    )
};

const Card = ({title, description, imgUrl}) => {
    return(
        <div className="bg-black bg-opacity-40 w-1/5 px-4 rounded-lg py-3">
            <div className="pb-4 pt-2">
                <img 
                className="w-full rounded-lg"
                src={imgUrl}
                alt="label"
                />
            </div>
            <div className="text-white text-md text-semibold">{title}</div>
            <div className="text-gray-500 text-sm">{description}</div>
        </div>
    )
}

export default Home;