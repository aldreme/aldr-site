import React from 'react';
import Card from 'react-bootstrap/Card';
import './Footer.css';

// the hook
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <Card className="text-center Footer">
      <Card.Footer>
        {t("Copyright")} &#169; {t("2020 ALDR LLC. All rights reserved")}
        </Card.Footer>
    </Card>
  );
}

export default Footer;