import React, { useState, useEffect, useRef } from 'react';
import UnlimitedHeader from './unlimitedHeader';
import UnlimitedHB from './unlimitedHB';
import SevenDays from './sevenDays';
import Footer from '../../commen/footer';
import Plan from './plan';
import Exclusive from './exclusive';
import Faq from './faq';
import MuContent from './muContent';

export default function Unlimited() {
    const [showMainHeader, setShowMainHeader] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const unlimitedHDSection = document.querySelector('.unlimitedHD-section');
            if (unlimitedHDSection) {
                const rect = unlimitedHDSection.getBoundingClientRect();
                if (rect.bottom <= 0) {
                    setShowMainHeader(true);
                } else {
                    setShowMainHeader(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const topRef = useRef(null);
  
    useEffect(() => {
      if (topRef.current) {
        window.scrollTo({ top: topRef.current.offsetTop - 100, behavior: 'auto' });
      }
    }, []);

    return (
        <>
            <UnlimitedHeader showMainHeader={showMainHeader} />
            <div className="unlimitedHD-section" ref={topRef}>
                <UnlimitedHB />
            </div>
            <div className="sevenDays-section">
                <SevenDays />
                <Plan />
                <Exclusive />
                <Faq />
                <MuContent />
            </div>
            <Footer />
        </>
    );
}
