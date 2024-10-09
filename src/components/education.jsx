/*export default function Education() {
    return (
        <>
            <div className="education-container">
                <h1>Tell us about your education</h1>
                <h3>Enter your education experience so far, even if you are a current student or did not graduate. <em>(Enter your latest degree first and so on)</em></h3>
                <h6>*indicates a required field</h6>
                <div className="general">
                    <div className="college-info">
                        <label>COLLEGE NAME *
                            <input type="text" name="colleg" required />
                        </label>
                        <label>COLLEGE LOCATION *
                            <input type="text" name="location" required />
                        </label>
                    </div>
                    <div className="degree-info">
                        <label>DEGREE *
                            <input type="text" name="degree" required/>
                        </label>
                    </div>
                    <div className="study-info">
                        <label>FIELD OF STUDY *
                            <input type="text" name="stream" required />
                        </label>
                        <label>START DATE *
                            <input type="text" name="start-date" required />
                        </label>
                        <label>COMPLETION DATE *
                            <input type="text" name="completion-date" required />
                        </label>
                    </div>
                </div>
                <div className="add-item">
                    <label>
                        <input type="button" value="+ ADD EDUCATION" required/>
                    </label>
                </div>
            </div>
        </>
    );
}
    */

import React, { useState } from 'react';

export default function Education() {
    const [educationEntries, setEducationEntries] = useState([{
        collegeName: '',
        location: '',
        degree: '',
        fieldOfStudy: '',
        startDate: '',
        completionDate: ''
    }]);

    const handleInputChange = (index, event) => {
        const { name, value } = event.target;
        const newEducationEntries = [...educationEntries];
        newEducationEntries[index][name] = value;
        setEducationEntries(newEducationEntries);
    };

    const addEducationEntry = () => {
        setEducationEntries([
            ...educationEntries,
            {
                collegeName: '',
                location: '',
                degree: '',
                fieldOfStudy: '',
                startDate: '',
                completionDate: ''
            }
        ]);
    };

    const deleteEducationEntry = (index) => {
        const newEducationEntries = educationEntries.filter((_, i) => i !== index);
        setEducationEntries(newEducationEntries);
    };

    return (
        <>
            <div className="education-container">
                <h1>Tell us about your education</h1>
                <h3>Enter your education experience so far, even if you are a current student or did not graduate. <em>(Enter your latest degree first and so on)</em></h3>
                <h6>*indicates a required field</h6>

                {educationEntries.map((entry, index) => (
                    <div className="general" key={index}>
                        <div className="college-info">
                            <label>COLLEGE NAME *
                                <input 
                                    type="text" 
                                    name="collegeName" 
                                    value={entry.collegeName} 
                                    onChange={(e) => handleInputChange(index, e)} 
                                    required 
                                />
                            </label>
                            <label>COLLEGE LOCATION *
                                <input 
                                    type="text" 
                                    name="location" 
                                    value={entry.location} 
                                    onChange={(e) => handleInputChange(index, e)} 
                                    required 
                                />
                            </label>
                        </div>
                        <div className="degree-info">
                            <label>DEGREE *
                                <input 
                                    type="text" 
                                    name="degree" 
                                    value={entry.degree} 
                                    onChange={(e) => handleInputChange(index, e)} 
                                    required 
                                />
                            </label>
                        </div>
                        <div className="study-info">
                            <label>FIELD OF STUDY *
                                <input 
                                    type="text" 
                                    name="fieldOfStudy" 
                                    value={entry.fieldOfStudy} 
                                    onChange={(e) => handleInputChange(index, e)} 
                                    required 
                                />
                            </label>
                            <label>START DATE *
                                <input 
                                    type="text" 
                                    name="startDate" 
                                    value={entry.startDate} 
                                    onChange={(e) => handleInputChange(index, e)} 
                                    required 
                                />
                            </label>
                            <label>COMPLETION DATE *
                                <input 
                                    type="text" 
                                    name="completionDate" 
                                    value={entry.completionDate} 
                                    onChange={(e) => handleInputChange(index, e)} 
                                    required 
                                />
                            </label>
                        </div>
                        <div className="delete-item">
                            <button type="button" onClick={() => deleteEducationEntry(index)}>Delete degree</button>
                        </div>
                    </div>
                ))}

                <div className="add-item">
                    <label>
                        <input 
                            type="button" 
                            value="+ Add another degree" 
                            onClick={addEducationEntry} 
                        />
                    </label>
                </div>
            </div>
        </>
    );
}