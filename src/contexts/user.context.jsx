import { createContext } from "react";

export const UserContext = createContext();

export function UserProvider(props) {
    return <UserContext.Provider value={{}}>
        {props.children}
    </UserContext.Provider>
}