import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children})=>{ // jo bhi provider me aayega wo hi children me pass on hoga yahan pr
    const  [user , setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{user,setUser}} >
        {children} 
        </UserContext.Provider>
    )

}

export default UserContextProvider