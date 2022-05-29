import React from "react";

function Guest(){
    return(
        <>
            <h1>Please LogIn</h1>
            <button>LogIn</button>
        </>
    )
}

function Welcome(){
    return(
        <>
            <h1>Hi Abhijeet</h1>
            <button>LogOut</button>
        </>
    )
}

const Register = (props) => {
    console.log(props);
    const loggedIn = props.loggedIn;
    if(loggedIn){
        return <Welcome/>
    }
    return <Guest/>
}

export default Register;