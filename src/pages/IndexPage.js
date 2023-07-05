import { useRecoilValue } from "recoil";
import { jwtState } from "..";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import NavBar from "../component/NavBar";

function IndexPage() {
    const jwt = useRecoilValue(jwtState);
    const navigate = useNavigate();


    useEffect(() => {
        // window.alert("!!!");
        if (jwt) {
            //  navigate("/home");
        }
    }, []);

    return (
        <>
            <NavBar />
        </>);
}

export default IndexPage;