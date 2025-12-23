'use client';

import { useEffect } from 'react';

const GA_MEASUREMENT_ID = 'G-QDENMGV7VM';

export default function GoogleAnalytics() {
    useEffect(() => {
        // Create gtag script
        const script1 = document.createElement('script');
        script1.async = true;
        script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
        document.head.appendChild(script1);

        // Create inline script
        const script2 = document.createElement('script');
        script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}');
    `;
        document.head.appendChild(script2);

        return () => {
            // Cleanup on unmount (not typically needed but good practice)
            document.head.removeChild(script1);
            document.head.removeChild(script2);
        };
    }, []);

    return null;
}
