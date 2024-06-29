import { Icon } from "@iconify/react";
import spotify_logo from "../assets/images/spotify_logo_white.svg";
import IconText from "../components/shared/IconText";
import TextWithHover from "../components/shared/TextWithHover";

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
        {title: "edvnidvnidfvnidf", 
        description: "VEV EFVEFVsv fvefef", 
        imgUrl: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}, 
        {title : "vfevev",
        description: "fvfefvefvfvefeve",
        imgUrl: "https://images.unsplash.com/photo-1483032469466-b937c425697b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }, 
        {title : "vfevev",
        description: "fvfefvefvfvefeve",
        imgUrl:"https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {title : "vfevev",
        description: "fvfefvefvfvefeve",
        imgUrl: "https://images.unsplash.com/photo-1483032469466-b937c425697b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {title : "vfevev",
        description: "fvfefvefvfvefeve",
        imgUrl:"https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        } 
        ];

const Home = () => {
    return(
    <div className="h-full w-full flex">
        <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-10">
            <div>
            <div className="logoDiv p-6 py-5"> {/Logo/}
                <img src={spotify_logo} alt="logo" width={140}/>
            </div>
            <div>
                <IconText iconName={"material-symbols:home"} 
                displayText={"Home"}
                active
            />
            </div>
            <div>
                <IconText iconName={"material-symbols:search-rounded"} 
                displayText={"Search"}
                />
            </div>
            <div>
                <IconText iconName={"icomoon-free:books"} 
                  displayText={"Library"}/>
            </div>
            <div className="pt-7">
            <div>
                <IconText iconName={"material-symbols:add-box"} 
                  displayText={"Create Playlist"}/>
            </div>
            <div>
                <IconText iconName={"mdi:cards-heart"} 
                  displayText={"Liked Songs"}/>
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
                    <div className="w-3/5 flex justify-around items-center">
                        <TextWithHover displayText={"Premium"} />
                        <TextWithHover displayText={"Support"} />
                        <TextWithHover displayText={"Download"} /> 
                        <div className="h-1/2 border-r border-white"></div>
                    </div>
                    <div className="w-2/5 flex justify-around h-full items-center">
                        <TextWithHover displayText={"Sign up"} /> 
                            <div className="bg-white h-2/3 px-8 flex items-center justify-center rounded-full font-semibold cursor-pointer">
                                Log in
                            </div>  
                    </div>            
            </div>
            </div>
            <div className="content p-8 overflow-auto pt-0">
                <PlaylistView titleText="Focus" cardsData={focusCardsData}/>
                <PlaylistView titleText="Spotify Playlists" cardsData={spotifyPlaylistsCardsData}/>
                <PlaylistView titleText="Sound Of India" cardsData={focusCardsData}/>
            </div>
        </div>
    </div>
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
};
export default Home;