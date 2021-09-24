import React from "react";
import {Button} from 'react-bootstrap';

function SubmitButton({uploadedReceipt, fileName}) {
    const buttonStyling = {
        marginTop: '3rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block',
        backgroundColor: uploadedReceipt ? '#97F4C7' : '#E5E5E5',
        color: 'black',
        borderColor: 'transparent',
        width: '30%',
        height: '50px',
        fontWeight: 'bold'
    }

    if(uploadedReceipt){
        return (
            <Button 
                className="justify-content-center" 
                size="lg" 
                type="submit" 
                style={buttonStyling}
                onPress={ () =>{
                    if(fileName === 'vaccine.pdf'){

                    }
                }}
            >
                SUBMIT
            </Button>
        )
    } else {
        return (
            <Button 
                className="justify-content-center" 
                size="lg" 
                type="submit" 
                style={buttonStyling}
                disabled
            >
                SUBMIT
            </Button>
        )    
    }
}

export default SubmitButton;
