import { createContext, useState } from "react";
//import React, {useContext} from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // FUNCTION TO UPDATE USER DATA
    const updateUser = (userData) => {
        setUser(userData);
    };

    // FUNCTION TO CLEAR USER DATA (e.g., on logout)
    const clearUser = () => {
        setUser(null);
    };

    return (
        <UserContext.Provider
            value={{
                user,
                updateUser,
                clearUser,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
