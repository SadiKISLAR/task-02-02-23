import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const Test = ({ getUser }) => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [sector, setSector] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = { name, surname, sector };
        addPerson(newUser);
        setName("");
        setSurname("");
        setSector("");
        console.log(newUser);
    };

    //! POST - CRUD (Create)

    const addPerson = async (newUser) => {
        const url = "https://bajoyom36999.pythonanywhere.com/test/";
        try {
            await axios.post(url, newUser);
        } catch (error) {
            console.log(newUser);
            console.log(error);
        }
        getUser();
    };


    const handleChange = (e) => {
        setSector(e.target.value);
    };

    return (
        <div className="container w-100 mx-auto text-center m-5 p-2 bg-secondary">
            <div className='row h-75  mx-auto text-center mt-5  '>
                <form onSubmit={handleSubmit} className='row'>
                    <h5 className='text-danger'>Please enter your name and pick the Sectors you are currently involved in.</h5>
                    <div className='col-6'>
                        <label htmlFor="title" className="form-label">
                            Name
                        </label>
                        <input type="text"
                            className="form-control mb-2"
                            id="name"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required /> <br />
                    </div>
                    <div className='col-6' >
                        <label htmlFor="title" className="form-label">
                            Surname
                        </label>
                        <input type="text"
                            className="form-control mb-2"
                            id="surname"
                            placeholder="Enter your surname"
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                            required /> <br />
                    </div>

                    <label className='mb-2  mx-auto text-center  ' >
                        Sectors:
                        <select className='w-75' value={sector} onChange={(e) => setSector(e.target.value)}>
                            <option value="Manufacturing">Manufacturing</option>
                            <option value="Construction materials">&nbsp;&nbsp;&nbsp;&nbsp;Construction materials</option>
                            <option value="Electronics and Optics">&nbsp;&nbsp;&nbsp;&nbsp;Electronics and Optics</option>
                            <option value="Food and Beverage">&nbsp;&nbsp;&nbsp;&nbsp;Food and Beverage</option>
                            <option value="Bakery & confectionery products ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bakery &amp; confectionery products</option>
                            <option value="Beverages">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Beverages</option>
                            <option value="Fish &amp; fish products">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fish &amp; fish products </option>
                            <option value="Meat &amp; meat products">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Meat &amp; meat products</option>
                            <option value="Milk &amp; dairy products">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Milk &amp; dairy products </option>
                            <option value="Other">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other</option>
                            <option value="Sweets &amp; snack food">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sweets &amp; snack food</option>
                            <option value="Furniture">&nbsp;&nbsp;&nbsp;&nbsp;Furniture</option>
                            <option value="Bathroom/sauna">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bathroom/sauna </option>
                            <option value="Bedroom">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bedroom</option>
                            <option value="Children’s room">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Children’s room </option>
                            <option value="Kitchen">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kitchen </option>
                            <option value="Living room">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Living room </option>
                            <option value="Office">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Office</option>
                            <option value="Other (Furniture)">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other (Furniture)</option>
                            <option value="Outdoor">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Outdoor </option>
                            <option value="Project furniture">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Project furniture</option>
                            <option value="Machinery">&nbsp;&nbsp;&nbsp;&nbsp;Machinery</option>
                            <option value="Machinery components">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Machinery components</option>
                            <option value="Machinery equipment/tools1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Machinery equipment/tools</option>
                            <option value="Manufacture of machinery">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Manufacture of machinery </option>
                            <option value="Maritime">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Maritime</option>
                            <option value="Aluminium and steel workboats">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aluminium and steel workboats </option>
                            <option value="Boat/Yacht building">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Boat/Yacht building</option>
                            <option value="Ship repair and conversion">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ship repair and conversion</option>
                            <option value="Metal structures">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Metal structures</option>
                            <option value="Other">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other</option>
                            <option value="Repair and maintenance service">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Repair and maintenance service</option>
                            <option value="Metalworking">&nbsp;&nbsp;&nbsp;&nbsp;Metalworking</option>
                            <option value="Construction of metal structures">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Construction of metal structures</option>
                            <option value="Houses and buildings">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Houses and buildings</option>
                            <option value="Metal products">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Metal products</option>
                            <option value="Metal works">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Metal works</option>
                            <option value="CNC-machining">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CNC-machining</option>
                            <option value="Forgings, Fasteners">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Forgings, Fasteners </option>
                            <option value="Gas, Plasma, Laser cutting">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gas, Plasma, Laser cutting</option>
                            <option value="MIG, TIG, Aluminum welding">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MIG, TIG, Aluminum welding</option>
                            <option value="Plastic and Rubber">&nbsp;&nbsp;&nbsp;&nbsp;Plastic and Rubber</option>
                            <option value="Packaging">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Packaging</option>
                            <option value="Plastic goods">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastic goods</option>
                            <option value="Plastic processing technology">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastic processing technology</option>
                            <option value="Blowing">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Blowing</option>
                            <option value="Moulding">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Moulding</option>
                            <option value="Plastics welding and processing">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastics welding and processing</option>
                            <option value="Plastic profiles">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastic profiles</option>
                            <option value="Printing">&nbsp;&nbsp;&nbsp;&nbsp;Printing </option>
                            <option value="Advertising">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Advertising</option>
                            <option value="Book/Periodicals printing">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Book/Periodicals printing</option>
                            <option value="Labelling and packaging printing">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Labelling and packaging printing</option>
                            <option value="Textile and Clothing">&nbsp;&nbsp;&nbsp;&nbsp;Textile and Clothing</option>
                            <option value="Clothing">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Clothing</option>
                            <option value="Textile">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Textile</option>
                            <option value="Wood">&nbsp;&nbsp;&nbsp;&nbsp;Wood</option>
                            <option value="Other (Wood)">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other (Wood)</option>
                            <option value="Wooden building materials">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wooden building materials</option>
                            <option value="Wooden houses">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wooden houses</option>
                            <option value="Other">Other</option>
                            <option value="Creative industries">&nbsp;&nbsp;&nbsp;&nbsp;Creative industries</option>
                            <option value="Energy technology">&nbsp;&nbsp;&nbsp;&nbsp;Energy technology</option>
                            <option value="Environment">&nbsp;&nbsp;&nbsp;&nbsp;Environment</option>
                            <option value="Service">Service</option>
                            <option value="Business services">&nbsp;&nbsp;&nbsp;&nbsp;Business services</option>
                            <option value="Engineering">&nbsp;&nbsp;&nbsp;&nbsp;Engineering</option>
                            <option value="Information Technology and Telecommunications">&nbsp;&nbsp;&nbsp;&nbsp;Information Technology and Telecommunications</option>
                            <option value="Data processing, Web portals, E-marketing">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Data processing, Web portals, E-marketing</option>
                            <option value="Programming, Consultancy">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Programming, Consultancy</option>
                            <option value="oftware, Hardware">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Software, Hardware</option>
                            <option value="Telecommunications">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Telecommunications</option>
                            <option value="Tourism">&nbsp;&nbsp;&nbsp;&nbsp;Tourism</option>
                            <option value="Translation services">&nbsp;&nbsp;&nbsp;&nbsp;Translation services</option>
                            <option value="Transport and Logistics">&nbsp;&nbsp;&nbsp;&nbsp;Transport and Logistics</option>
                            <option value="Air">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Air</option>
                            <option value="Rail">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rail</option>
                            <option value="Road">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Road</option>
                            <option value="Water">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Water</option>
                        </select>
                    </label>

                    <div className='mx-auto w-50 row col-6 text-center'>
                        <Form.Check
                            className='mb-2 w-50 mx-auto text-center '
                            type="checkbox"
                            id="disabledFieldsetCheck"
                            label="Agree to terms"
                            required
                        />
                    </div>
                    <button type='submit' className="btn btn-primary mx-auto mb-2 w-75 ">Save</button>
                </form>
            </div>

        </div >
    );
}

export default Test;
