import React from 'react';
import Card from 'react-bootstrap/Card';
import './FooterHome.css';

function FooterHome() {
    return (
        <Card className="text-center FooterHome">
          <Card.Footer>Copyright &#169; 2020 ALDR, LLC. All rights reserved</Card.Footer>
        </Card>
    );
}

export default FooterHome;