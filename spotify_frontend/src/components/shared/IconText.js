import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";

const IconText = ({iconName, displayText, active, targetLink, onClick}) => {
    return(
        <NavLink to={targetLink} className="block">

        <div 
            className="flex items-center justify-start cursor-pointer" 
            onClick={onClick}
        >
            <div className="px-5 py-2">
                <Icon 
                icon={iconName} 
                color={active ? "white":"gray"} 
                fontSize={24}
                
                />
            </div>              
            <div className={`${active?"text-white" : "text-gray-400"} text-sm font-semibold hover:text-white`}>
                {displayText}
            </div>
          </div>  
          </NavLink>
    );
};
export default IconText;