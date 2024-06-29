import { useState } from "react";
import { useCookies } from "react-cookie";
import { Icon } from "@iconify/react";
import TextInput from "../components/shared/TextInput";
import PasswordInput from "../components/shared/PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import { makeUnauthenticatedPOSTRequest }  from "../utils/serverHelpers";

const SignupComponent = () => {
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [username, setusername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [cookie, setCookie] = useCookies(["token"]);
    const navigate = useNavigate();

    const signUp = async() => {
        if (email !== confirmEmail) {
            alert("Email and confirm Email field does not match, Please check again");
            return;
        }
        const data = {email, password, username, firstName, lastName};
        const response = await makeUnauthenticatedPOSTRequest("/auth/register", data);
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
    <div className="w-full h-full flex flex-col items-center bg-black text-white">
        <div className="flex flex-col">
    <div className="logo p-10 border-b border-solid border-gray-300 w-full flex justify-center items-center">
        {/* <Icon icon="logos:spotify" width="160"/> */}
        {/* <Icon icon="clarity:music-note-solid" /> */}
        <Icon icon="arcticons:wynk-music" width="80" />
        <div className="ml-4 text-xl font-bold">
            EvolveTunes
        </div>
    </div>
</div>


        <div className="inputRegion w-1/3 py-10 flex items-center justify-center flex-col">
            {/I will have my 2 input(email and password) and  I will have my sign up instead button/}
                <div className="font-bold mb-4 text-xl  ">
                    Sign up for free to start listening.
                </div>

            <TextInput 
                label="Email address" 
                placeholder="Email" 
                className="my-1"
                value={email}
                setValue={setEmail}
            />
            <TextInput 
                label="confirm Email address" 
                placeholder="confirm Email address" 
                className="mb-1"
                value={confirmEmail}
                setValue={setConfirmEmail}
            />
            <TextInput 
                label="Username" 
                placeholder="Enter your Username" 
                className="my-1"
                value={username}
                setValue={setusername}
            />
            <PasswordInput 
                label="Create Password" 
                placeholder="Enter a strong password"
                value={password}
                setValue={setPassword}
            />
            <div className="w-full flex justify-between items-center space-x-8">
            <TextInput 
                label="First Name" 
                placeholder="Enter your first name" 
                className="my-1"
                value={firstName}
                setValue={setFirstName}
            />
            <TextInput 
                label="Last Name" 
                placeholder="Enter your last name" 
                className="my-1"
                value={lastName}
                setValue={setLastName}
            />
            </div>
            <div className="w-full flex items-center justify-center my-8">
                <button 
                    className="bg-yellow-400 font-semibold p-3 px-10 rounded-full" 
                    onClick={e=>{e.preventDefault();
                    signUp();
                    }}>
                    Sign Up
                </button>
            </div>
            <div className="w-full border-b border-solid border-gray-300"></div>
            <div className="my-6 font-bold text-lg">
                Already have an account?
            </div>
            <div className="bg w-full border border-black--600 text-black-600 flex items-center justify-center rounded-full py-4">
                <Link to="/Login">
                Log in instead
                </Link>
            </div>
            

        </div>
    </div> 
    );
};

export default SignupComponent;