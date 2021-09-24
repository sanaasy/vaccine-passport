import React from "react";

function SearchPage() {
    const mapStyling = {
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block',
        marginTop: '5rem'
    }
    return(
        <iframe 
            src="https://www.google.com/maps/d/u/0/embed?mid=1rVoWiKPuryq96sDpWe_WO0H-GUWDXniN" 
            width="1000" 
            height="700" 
            style={mapStyling}
        />
    );
}

export default SearchPage;
