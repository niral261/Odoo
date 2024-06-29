import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
    const [, , removeCookie] = useCookies(["token"]);
    const navigate = useNavigate();

    const logout = () => {
        removeCookie("token", { path: "/" });
        navigate("/login"); // Redirect to the login page or any other page
    };

    return logout;
};

export default useLogout;