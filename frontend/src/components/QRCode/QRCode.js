import React from "react";
import {Image} from 'react-bootstrap';
import QRAccept from './qrcode-accept.svg';
import QRReject from './qrcode-reject.svg';

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
