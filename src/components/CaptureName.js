import React, { useState } from 'react'
import "../css/capturename.css";

const CaptureName = () => {
    const [firstname, setFirstname] = useState("Yunis")
    const [lastname, setLastname] = useState("Ali")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("form submitted");
        
    }


    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <p>Welcome {firstname} {lastname}</p>
                <div>
                    <label for="fname">First Name</label>
                    <input onChange={(e) => setFirstname(e.target.value)} type="text" id="firstname" name="firstname" placeholder="Enter your first name" />
                </div>

                <div>
                    <label for="lname">Last Name</label>
                    <input onChange={(e) => setLastname(e.target.value)} type="text" id="lastname" name="lastname" placeholder="Enter your last name" />
                </div>

                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
            
        </div>
    )
}

export default CaptureName
