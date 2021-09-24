import React from "react";
import {Image} from 'react-bootstrap';
import Checkmark from './checkmark.svg';

function AcceptProof() {
    const pageStyling = {
        height: '10000px',
        backgroundColor: '#7AA24D',
    }
    
    const imageStyling = {
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block',
        paddingTop: '20rem'
    }

    return(
        <div style={pageStyling}>
            <Image src={Checkmark} style={imageStyling} />
        </div>
    );
}

export default AcceptProof;
