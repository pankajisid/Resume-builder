export default function Contact() {
    return (
        <div className="form-header">
            <h1><b>What's the best way to employers to contact you? </b></h1>
            <h3>We suggest including an email and phone number</h3>
            <h6><b>*indicates a required field</b></h6>
            <div className="first-last-name">
                <label>
                    FIRST NAME *
                    <input type="text" name="firstname" placeholder='e.g Pankaj' required/>
                </label> 
                <label>SURNAME *
                    <input type="text" name="surname" placeholder="e.g Chauhan" required />
                </label>
            </div>
            <div className="profession">
                <label>PROFESSION *
                    <input type="text" name="profession" placeholder="e.g. Data Scientist, Web Developer, Software Engineer" required />
                </label>
            </div>
            <div className="residence">
                <label>
                    CITY *
                    <input type="text" name="city" required/>
                </label>
                <label>COUNTRY
                    <input type="text" name="country"/>
                </label>
                <label>PINCODE *
                    <input type="text" name="pincode" required />
                </label>
            </div>
            <div className="contact-info">
                <label>PHONE *
                    <input type="text" name="phone" required />
                </label>
                <label>EMAIL *
                    <input type="email" name='mail' placeholder="your@example.com" required />
                </label>
            </div>
        </div>
    );
}