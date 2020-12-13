import React, {useState, useEffect} from 'react';
import "./Map.css";
import Cookies from 'universal-cookie';
import i18n from 'i18next';

const cookies = new Cookies();

export default function Map() {
    const [lang, setLang] = useState('');

    useEffect(() => {
        if (lang !== '') return;

        setLang(cookies.get('language'));

        i18n.on('languageChanged', (lng: string) => {
            setLang(lng);
        });
    }, [lang, setLang])

    return (
        lang === 'zh_cn' ?
        <iframe className='Map' title='aldr-location' scrolling='yes'src='https://surl.amap.com/NsNPgA1o0ij'></iframe>
        :
        <iframe className='Map' allowFullScreen={true} title='aldr-location' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3414.765556594209!2d120.6775893156415!3d31.14402498149567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35b30f0fcfaaa88d%3A0x8aa2350809cc7ceb!2s1888%20Pangjin%20Rd%2C%20Wujiang%20Qu%2C%20Suzhou%20Shi%2C%20Jiangsu%20Sheng%2C%20China%2C%20215200!5e0!3m2!1sen!2sus!4v1607819938030!5m2!1sen!2sus'/>
    );
}