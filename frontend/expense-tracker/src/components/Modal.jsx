import React from 'react';

const Modal = ({ children, isOpen, onClose, title }) => {
  if (!isOpen) return null;

  return (



    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      role="dialog"
      aria-modal="true"
    >



      <div className="relative w-full max-w-md p-4">
  <div className="bg-white rounded-lg shadow p-4">



          {/* Modal Header */}
           <div className="flex items-center justify-between px-4 py-3 border-b">
      <h3 className="text-base font-semibold text-gray-900">
              {title}
            </h3>



            <button
  type="button"
  onClick={onClose}
  className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
>



  <svg
    className="w-3 h-3"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 14 14"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M1 1l12 12M13 1L1 13"
    />
  </svg>
</button>

          </div>

          {/* Modal Body */}
          <div className="p-4 text-gray-700 dark:text-gray-300">
            {children}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Modal;
