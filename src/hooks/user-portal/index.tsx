import { useEffect, useState } from 'react';

const DEFAULT_PORTAL_NAME = 'talent--portal';

const usePortal = (portal_name = DEFAULT_PORTAL_NAME): HTMLElement | null => {
  const [elementId] = useState(
    `${portal_name}-${Math.floor(Math.random() * 1000000000)}`
  );
  const [portalElement, setPortalElement] = useState<null | HTMLElement>(null);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const nextApp = document.querySelector('#__next>div');

    if (nextApp) {
      const el = document.createElement('div');
      el.id = elementId;
      nextApp.append(el);
      setPortalElement(el);

      return el.remove();
    }
  }, [elementId]);

  return portalElement;
};

export default usePortal;
