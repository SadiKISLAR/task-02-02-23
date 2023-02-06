import Test from "../components/Test";
import User from "../components/User";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
    return (
        <>
            <Test />
            <User />
        </>
    );
};

export default Home;