import React from 'react';
import Card from 'react-bootstrap/Card';
import './Footer.css';

// the hook
import { useTranslation } from 'react-i18next';

import policeIcon from '../assets/images/misc/ccp-police-icon.png';

function Footer() {
  const { t } = useTranslation();

  const currentYear = new Date().getFullYear();

  return (
    <Card className="text-center Footer">
      <Card.Footer>
        <div>
          {t("Copyright")} {currentYear} {t("ALDR LLC. All rights reserved")}
        </div>
        <div className="Footer-icp">
          <a className="Footer-icp-license" href="http://beian.miit.gov.cn">{t("cn-icp-license")}</a>
        </div>

        <div className="Footer-ccp-police">
          <img className="Footer-ccp-police-license-icon" alt="police-icon" src={policeIcon} /> {t("cn-police-license")}
        </div>
      </Card.Footer>
    </Card>
  );
}

export default Footer;
