import Test from "../components/Test";
import User from "../components/User";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
    const [users, setUsers] = useState([]);

    const url = "https://bajoyom36999.pythonanywhere.com/test/"
    const getUser = async () => {
        try {
            const { data } = await axios(url);
            console.log(data);
            setUsers(data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getUser();
    }, []);

    return (
        <>
            <Test getUser={getUser} />
            <User user={users} getUser={getUser} />
        </>
    );
};

export default Home;