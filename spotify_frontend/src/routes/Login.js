import { useState } from "react";
import { Icon } from "@iconify/react";
import TextInput from "../components/shared/TextInput";
import PasswordInput from "../components/shared/PasswordInput";
import {Link, useNavigate} from "react-router-dom";
import {makeUnauthenticatedPOSTRequest} from '../utils/serverHelpers';
import { useCookies } from "react-cookie";

const LoginComponent = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cookies, setCookie] = useCookies(["token"]);
    const navigate = useNavigate();
    
    const login = async() => {
        const data = {email, password};
        const response = await makeUnauthenticatedPOSTRequest("/auth/login", data);
        if(response && !response.err) {
            const token = response.token;
            const date = new Date();
            date.setDate(date.getDate() + 30);
            setCookie("token", token, {path:"/", expires:date});
            alert("Success");
            navigate("/home");
        }else{
            alert("Failure");
        }
    };

    // return <h1>Jai Shri Krishna</h1>;
    return (
    <div className="w-full h-full flex flex-col items-center">
        <div className="flex flex-col">
            <div className="logo p-10 border-b border-solid border-gray-300 w-full flex justify-center items-center">
                <Icon icon="arcticons:wynk-music" width="80" />
            <div className="ml-4 text-xl font-bold">
                EvolveTunes
        </div>
    </div>
        </div>
        <div className="inputRegion w-1/3 py-10 flex items-center justify-center flex-col">
            {/I will have my 2 input(email and password) and  I will have my sign up instead button/}
            <div className="font-bold mb-12">To continue, login to spotify</div>
            <TextInput 
                label="Email address or username" 
                placeholder="Email address or username" 
                className="my-1"
                value={email}
                setValue={setEmail}    
            />
            <PasswordInput 
                label="Password" 
                placeholder="Password"
                value={password}
                setValue={setPassword}  
            />
            <div className="w-full flex items-center justify-center my-8">
                <button className="bg-yellow-400 font-semibold p-3 px-10 rounded-full" 
                    onClick={(e) => {
                        e.preventDefault();
                        login();
                    }}>
                    LOG IN
                </button>
            </div>
            <div className="w-full border-b border-solid border-gray-300"></div>
            <div className="my-6 font-bold text-lg">
                Don't have an account?
            </div>
            <div className="bg w-full border border-gray--400 text-gray-600 flex items-center justify-center rounded-full py-4">
                <Link to="/Signup">
                    SIGN UP FOR SPOTIFY
                </Link>
            </div>
        </div>
    </div> 
    );
};
export default LoginComponent;