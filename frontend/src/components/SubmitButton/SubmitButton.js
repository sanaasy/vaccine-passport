import React from "react";
import {Button} from 'react-bootstrap';
import { useHistory } from "react-router-dom";

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

    const history = useHistory();

    const routeChange = () =>{ 
        let path = `acceptQR`; 
        history.push(path);
    }
 
    if(uploadedReceipt){
        return (
            <Button 
                className="justify-content-center" 
                size="lg" 
                type="submit" 
                style={buttonStyling}
                // onPress={() => {
                //     setSubmitted(true)
                // }}
                onClick={routeChange}
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
