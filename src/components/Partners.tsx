import React from 'react';
import "./Partners.css";
import db from '../assets/data/db.json';

function Partners() {
    const partners = db.partners.map( item => 
        <div key={item.name} className="Partners-item">
            <a href={item.website}>
                <img alt={item.name} src={require("../assets/images/partners_logo/" + item.logo_file_name)}/>
            </a>
        </div>
    );

    return (
        <div className="Partners-layout">
            {partners}
        </div>
    );
}
  
export default Partners;