"use client";
import React, { useEffect, useRef } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const angularScripts = [
  '/angular-modal/browser/polyfills-6EAL64PA.js',
  '/angular-modal/browser/main-AJ5NADMY.js',
  '/angular-modal/browser/main-SLIBOPMU.js'
];

const angularStyles = [
  '/angular-modal/browser/styles-5INURTSO.css'
];

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const appRootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadAngularApp = async () => {
      if (appRootRef.current) {
        // Fetch and inject Angular index.html content
        const response = await fetch('/angular-modal/browser/index.html');
        const html = await response.text();
        appRootRef.current.innerHTML = html;

        // Dynamically load Angular styles
        angularStyles.forEach(href => {
          const link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = href;
          document.head.appendChild(link);
        });

        // Dynamically load Angular scripts
        angularScripts.forEach(src => {
          const script = document.createElement('script');
          script.src = src;
          script.async = true;
          document.body.appendChild(script);
        });
      }
    };

    if (isOpen) {
      loadAngularApp();
    }

    // Cleanup: remove scripts and content when the modal closes
    return () => {
      if (appRootRef.current) {
        appRootRef.current.innerHTML = ''; // Clear the Angular content
      }
      angularScripts.forEach(src => {
        const script = document.querySelector(`script[src="${src}"]`);
        if (script) {
          document.body.removeChild(script);
        }
      });
      angularStyles.forEach(href => {
        const link = document.querySelector(`link[href="${href}"]`);
        if (link) {
          document.head.removeChild(link);
        }
      });
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2">
        <div ref={appRootRef} id="app-root">
          {/* Angular app's root component will be rendered here */}
        </div>
        <div className='relative'>
          <button
            className="absolute top-[-40px] right-0 m-4 text-xl px-2 py-1 bg-[#eeeeee]"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
