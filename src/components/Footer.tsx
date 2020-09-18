import React from 'react';
import Card from 'react-bootstrap/Card';
import './Footer.css';

// the hook
import { useTranslation } from 'react-i18next';

import police_icon from '../assets/images/misc/ccp-police-icon.png';

function Footer() {
  const { t } = useTranslation();

  return (
    <Card className="text-center Footer">
      <Card.Footer>
        <div>
          {t("Copyright")} &#169; {t("2020 ALDR LLC. All rights reserved")}
        </div>
        <div className="Footer-icp">
          <a className="Footer-icp-license" href="http://beian.miit.gov.cn">{t("cn-icp-license")}</a>
        </div>

        <div className="Footer-ccp-police">
          <a href="">
            <img className="Footer-ccp-police-license-icon" alt="" src={police_icon} /> {t("cn-police-license")}
          </a>
        </div>
      </Card.Footer>
    </Card>
  );
}

export default Footer;