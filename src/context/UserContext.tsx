import { createContext, useState } from "react";
import { UserProps } from "../interfaces/IUser";

interface UserContextProps {
    userComment?: UserProps | null;
    setUserComment?: (userComment: UserProps | null) => void;
    handleLogin?: (user: UserProps) => void;
    handleLogout?: () => void;

}

const UserContext = createContext<UserContextProps>({})

export function UserProvider(props: any) {

    const [userComment, setUserComment] = useState<UserProps | null>(null);

    function handleLogin(user: UserProps) {
        setUserComment(user);
        console.log(user);
    }

    function handleLogout() {
        console.log('logout');
    }

    return (
        <UserContext.Provider
            value={{
                userComment,
                setUserComment,
                handleLogin,
                handleLogout
            }}>
            <>
                {props.children}
            </>
        </UserContext.Provider>

    )
}


export default UserContext