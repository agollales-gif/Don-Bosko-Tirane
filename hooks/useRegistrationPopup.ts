import { useState, useEffect } from 'react';

export const useRegistrationPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Shfaq popup-in menjëherë sapo komponenti të montohet (mount)
    console.log('useRegistrationPopup: Shfaqet direkt');
    setShowPopup(true);

    // Opsionale: Nëse dëshiron që të shfaqet direkt edhe kur kthehet nga një tab tjetër
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        setShowPopup(true);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  return { showPopup, closePopup };
};