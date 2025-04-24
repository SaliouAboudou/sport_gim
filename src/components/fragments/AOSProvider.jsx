import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSProvider = ({ children, options }) => {

  // state 

  // comportement 


  // useeffect 
  useEffect(() => {
    AOS.init({
      duration: options?.duration || 1000,
      once: options?.once || false,
      offset: options?.offset || 120,
      delay: options?.delay || 0,
      easing: options?.easing || 'ease',
    });
  }, [options]);


  // affichage 
  return children;
};

export default AOSProvider;
