import React from 'react';

const Modal = ({ children, icon = 'error', isOpen, handleClose }) => {
  if (!isOpen) return null;

  return (
    <aside className='c-modal-cover fadeIn'>
      <div className='c-modal slideIn'>
        <div className='modalWrapper'>
          <div className='modalHeader'>
            <i className='icn-person material-icons'>{icon}</i>
          </div>
          <div className='c-modal_body'>{children}</div>
          <button className='btn btn-info' onClick={handleClose}>
            Okay
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
