import { useState } from "react";

export const useUser = () => {
    const [user, setUser] = useState(null);

    const login = (user: any) => {
        if (user.email === "panic@thedis.co" && user.password === "secret") {
            setUser(user);
        } else {
            setUser(null);
        }
    };

    return {
        user,
        login,
    };
};
