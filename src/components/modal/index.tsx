/* eslint-disable prettier/prettier */
import { FC } from 'react';

import { createPortal } from 'react-dom';

import usePortal from '@/hooks/user-portal';

const PORTAL_NAME = 'talent--modal-portal';

type ModalType = {
  isOpen: boolean;
  title?: string;
  onClose: () => void;
};

export const Modal: FC<ModalType> = ({ isOpen, title, children, onClose }) => {
  const portalElement = usePortal(PORTAL_NAME);

  return isOpen && portalElement
    ? createPortal(
        <div className="flex fixed inset-0 z-[999] justify-center items-center">
          <div className="absolute inset-0" onClick={() => onClose()}></div>

          <div
            className="flex overflow-hidden relative flex-col max-h-[calc(100vh-60px)] max-md:max-h-screen bg-secondary-grey"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="flex p-[16px] border-b border-secondary-grey flex-0">
              <div className="flex justify-between w-full">{title}</div>
            </div>
            <div className="p-[16px]">{children}</div>
          </div>
      </div>,
        portalElement
      )
    : (
      <div>sdfjklsdjfkljdkfjkfjksjfksdjfksjfkjkfjkdjfkj</div>
    );
};

export default Modal;