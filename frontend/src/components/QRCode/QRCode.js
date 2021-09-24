import React from "react";
import {Image} from 'react-bootstrap';
import QRAccept from './qrcode-accept.svg';
import QRReject from './qrcode-reject.svg';

function QRCode({accept}) {
    if(accept){
        return (
            <Image src={QRAccept} />
        );
    } else { 
        return (
            <Image src={QRReject} />
        );
    }
}

export default QRCode;
