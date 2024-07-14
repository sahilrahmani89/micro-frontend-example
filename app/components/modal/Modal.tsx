"use client"
import React, { useEffect, useRef, useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}
// const angularScripts = [
//   '/angular-modal/browser/polyfills-6EAL64PA.js',
//   '/angular-modal/browser/main-AJ5NADMY.js',
//   '/angular-modal/browser/main-SLIBOPMU.js' // Your main script
// ];
const angularScripts = [
  '/angular-modal/browser/polyfills-6EAL64PA.js',
  '/angular-modal/browser/main-AJ5NADMY.js',
  '/angular-modal/browser/main-SLIBOPMU.js'
];

const angularStyles = [
  '/angular-modal/browser/styles-5INURTSO.css'
];

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [angularContent, setAngularContent] = useState('');

  async function fetchContent(){
    const response = await fetch('/angular-modal/browser/index.html');
    const text = await response.text();
    setAngularContent(text);

    // Dynamically load Angular scripts
  //   const scripts = [
  //       '/angular-modal/browser/polyfills-6EAL64PA.js',
  //       '/angular-modal/browser/main-AJ5NADMY.js',
  //       '/angular-modal/browser/main-SLIBOPMU.js',
  //   ];

  //  await scripts.forEach(src => {
  //       const script = document.createElement('script');
  //       script.src = src;
  //       script.async = true;
  //       document.body.appendChild(script);
  //   });
  }
  useEffect(() => {
    if (isOpen) {
      fetchContent()
    }
  }, [isOpen]);


  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          

      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2">
        {/* <div ref={modalRef} className="modal-content"> */}
          {/* Angular content will be injected here */}
        {/* </div> */}
        <div id="app-root">
         {/* Angular app's root component */}
          <div dangerouslySetInnerHTML={{ __html: angularContent }} />
        </div>
        <div>
          
        </div>
        <div className='relative'>
        <button className="absolute top-[-40px] right-0 m-4 text-xl px-2 py-1 bg-[#eeeeee]" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
