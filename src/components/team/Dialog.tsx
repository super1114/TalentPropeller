import { CSSProperties, Fragment, useEffect, useState } from 'react';

import { Dialog as _Dialog, Transition } from '@headlessui/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { twMerge } from 'tailwind-merge';

type AnyFn = (...args: any[]) => any;
/**
 * get value from input, if input is a function. it will ve invoked
 *
 * @param mayValue maybe a function that will return targetValue
 * @param params the parameters that will be passed in mayValue(if it's function)
 * @returns a pure value which can't be a function
 */
function shrinkToValue<T>(
  mayValue: T,
  params?: T extends AnyFn ? Parameters<T> : any[]
): Exclude<T, AnyFn> {
  return typeof mayValue === 'function'
    ? mayValue(...(params ?? []))
    : mayValue;
}

export interface DialogProps {
  /** set this will force only one instance in page */
  pageComponentName?: string;
  open: boolean;
  /** this is the className of modal card */
  className?: string;
  style?: CSSProperties;
  children?: [{ close: () => any }];
  transitionSpeed?: 'fast' | 'normal';
  // if content is scrollable, PLEASE open it!!!, for blur will make scroll super fuzzy
  maskNoBlur?: boolean;

  canClosedByMask?: boolean;
  /** fired before close transform effect is end */
  onCloseImmediately?(): void;
  onClose?(): void;
}

export default function Dialog({
  open,
  children,
  className,
  transitionSpeed = 'normal',
  maskNoBlur,
  style,
  canClosedByMask = true,
  onCloseImmediately,
  onClose,
}: DialogProps) {
  // for onCloseTransitionEnd
  // during leave transition, open is still true, but innerOpen is false, so transaction will happen without props:open has change (if open is false, React may destory this component immediately)
  const [innerOpen, setInnerOpen] = useState(open);

  const openDialog = () => setInnerOpen(true);
  const closeDialog = () => setInnerOpen(false);

  useEffect(() => {
    if (!open) closeDialog();
    else openDialog();
  }, [open]);

  return (
    <Transition
      as={Fragment}
      show={innerOpen}
      beforeLeave={onCloseImmediately}
      afterLeave={onClose}
    >
      <_Dialog
        className="overflow-y-auto fixed inset-0 z-model"
        onClose={closeDialog}
      >
        <div
          className="fixed w-full h-full Dialog"
          onClick={(ev) => ev.stopPropagation()}
        >
          <Transition.Child
            as={Fragment}
            enter={`ease-out ${
              transitionSpeed === 'fast' ? 'duration-150' : 'duration-300'
            }`}
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave={`ease-in ${
              transitionSpeed === 'fast' ? 'duration-100' : 'duration-200'
            }`}
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className={`transition fixed inset-0 ${
                maskNoBlur ? '' : 'backdrop-filter backdrop-blur'
              } bg-[rgba(20,16,65,0.4)] ${
                canClosedByMask ? '' : 'pointer-events-none'
              }`}
              onClick={closeDialog}
            />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter={`ease-out ${
              transitionSpeed === 'fast' ? 'duration-150' : 'duration-300'
            }`}
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave={`ease-in ${
              transitionSpeed === 'fast' ? 'duration-100' : 'duration-200'
            }`}
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div
              className={twMerge(
                `absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2  transition z-10 self-pointer-events-none`,
                className
              )}
              style={style}
            >
              <div>{shrinkToValue(children, [{ close: closeDialog }])}</div>
            </div>
          </Transition.Child>
        </div>
      </_Dialog>
    </Transition>
  );
}
