import { useState } from "react";
import Contact from "./contact-info.jsx";
import Education from "./education.jsx";

function Entry() {

    const [currentStep, setCurrentStep] = useState(0);
    const steps = ['contact', 'education'];

    const handleNext = () => {
        if(currentStep < steps.length-1){
            setCurrentStep(currentStep+1)
        }
    };

    const handleBack = () => {
        if(currentStep > 0) {
            setCurrentStep(currentStep-1);
        }
    };

    const containerStyle ={
        margin: 0,
        padding: 0,
        height: '100vh',
        display: 'flex',
    };
    const inputContainerStyle = {
        flex:1,
    };
    return (
        <div style={containerStyle}>
            <div style={inputContainerStyle} className='input-container'>
                {currentStep ===0 && <Contact/>}
                {currentStep ===1 && <Education/>}
                <div  className="button-container">
                    {currentStep > 0 && (
                        <button id="back" onClick={handleBack}>Back</button>
                    )} 
                    {currentStep < steps.length-1 ? (
                        <button id="next" onClick={handleNext}>Submit & Next</button>
                    ): (
                        <button id="final">Submit</button> //Final Submit button
                    )}      
                </div>
            </div>
            <div style={inputContainerStyle} className="preview-container">
                Here, we will show live change in resume document.
            </div>
        </div>
    );
}

export default Entry;