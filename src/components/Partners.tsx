import React from 'react';
import db from '../assets/data/db.json';
import { shuffleArray } from '../util/misc';
import "./Partners.css";

function Partners() {
  shuffleArray(db.partners)
  const partners = db.partners.map(item =>
    <div key={item.name} className="Partners-item">
      <a href={"https://" + item.website}>
        <img alt={item.name} src={require("../assets/images/partners_logo/" + item.logo_file_name)} />
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
