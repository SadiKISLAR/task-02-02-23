import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';




function User() {
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
                        <th scope="col" className="text-center">
                            Edit
                        </th>
                    </tr>
                    <tbody>
                        <tr >
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="text-center text-nowrap">
                                <FaEdit
                                    size={20}
                                    type="button"
                                    data-bs-toggle="modal"
                                    data-bs-target="#edit-modal"
                                    className="me-2 text-warning"
                                // onClick={() =>
                                //   editTutorial({
                                //     id: "1581",
                                //     title: "UPDATE",
                                //     description: "UPDATE",
                                //   })
                                // }

                                />
                                <AiFillDelete
                                    size={22}
                                    type="button"
                                    className="text-danger "

                                />
                            </td>
                        </tr>


                    </tbody>
                </thead>

            </table>


        </div>
    );
}

export default User;