import React, {useEffect} from "react";
import {Image} from 'react-bootstrap';
import QRAccept from './qrcode-accept.svg';
import QRReject from './qrcode-reject.svg';
import { useHistory } from "react-router-dom";

function QRCode({accept}) {
    const imageStyling = {
        width: '25em',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block',
        marginTop: '2rem'
    }

    const textStyling = {
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: '5rem'
    }

    const history = useHistory();

    const routeChange = () =>{ 
        let path = `accept`; 
        history.push(path);
    }

    setTimeout(() => {
        routeChange()
    }, 3000);
    
    if(accept){
        return (
            <>
                <Image src={QRAccept} style={imageStyling} />
                <h4 style={textStyling}>Show this QR Code to be admitted to your destination</h4>
            </>
        );
    } else { 
        return (
            <>
                <Image src={QRReject} style={imageStyling} />
                <h4 style={textStyling}>Show this QR Code to be admitted to your destination</h4>
            </>
        );
    }
}

export default QRCode;
