'use client'
import React, { FC } from 'react';
import './Popup.css';


interface PopupProps {
    onClose: () => void;
    content: React.ReactNode;
  }

  
  const Popup: FC<PopupProps> = ({ onClose, content }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>
          &times;
        </button>
        <div className="popup-text">{content}</div>
      </div>
    </div>
  );
};

export default Popup;
