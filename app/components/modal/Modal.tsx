import React, { useEffect, useRef } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      fetch('angular-modal/browser/index.html') 
        .then(response => response.text())
        .then(html => {
          if (modalRef.current) {
            modalRef.current.innerHTML = html;
            // Optionally, load any additional scripts or stylesheets needed by Angular
            // Example: Load Angular main.js dynamically
            // const script = document.createElement('script');
            // script.src = '/static/main.js'; // Adjust path based on Angular build output
            // script.async = true;
            // modalRef.current.appendChild(script);
          }
        })
        .catch(error => console.error('Error fetching index.html:', error));
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          

      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2">
        <div ref={modalRef} className="modal-content">
          {/* Angular content will be injected here */}
        </div>
        <div className='relative'>
        <button className="absolute top-[-40px] right-0 m-4 text-xl px-2 py-1 bg-[#eeeeee]" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
