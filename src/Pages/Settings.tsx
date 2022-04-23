import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function Settings (): JSX.Element {
    const { logout } = useAuth0();

    return (
        <div>
            Settings Page
            <br />
            <Link onClick={() => logout()} to="/">Log Out</Link>
        </div>
        
    )
};