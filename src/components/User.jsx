import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import React, { useState } from 'react';





function User({ user, getUsers }) {
    const [selectedOption, setSelectedOption] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");




    const handleChange = (event) => {
        setSelectedOption(event.target.value);
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
                        const { id, name, surname, selectedOption } = item;
                        return (
                            <tr key={id}>
                                <td>{name}</td>
                                <td>{surname}</td>
                                <td>{selectedOption}</td>
                            </tr>

                        );
                    })}
                </tbody>

            </table>


        </div>
    );
}

export default User;