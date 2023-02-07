import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import React, { useState } from 'react';





function User({ user, getUsers }) {
    const [sector, setSector] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");




    const handleChange = (event) => {
        setSector(event.target.value);
    };

    return (
        <div className="container mt-4 w-75 bg-success">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Surname</th>
                        <th scope="col">Sectors</th>
                        <th scope="col" className="text-center">Agree to terms</th>
                    </tr>
                </thead>
                <tbody>
                    {user?.map((item) => {
                        const { id, name, surname, sector } = item;
                        return (
                            <tr key={id}>
                                <td>{name}</td>
                                <td>{surname}</td>
                                <td>{sector}</td>
                            </tr>

                        );
                    })}
                </tbody>

            </table>


        </div>
    );
}

export default User;