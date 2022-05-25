import { useState, useEffect } from 'react';

const useLoadEvenbriteOnPageLoad = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.eventbrite.com/static/widgets/eb_widgets.js';
    document.head.appendChild(script);
    script.addEventListener('load', () => setIsLoaded(true));
  }, []);

  useEffect(() => {
    const hasWidget = window?.EBWidgets?.createWidget;
    if (isLoaded && hasWidget) {
      window.EBWidgets.createWidget({
        widgetType: 'checkout',
        eventId: '328526651057',
        iframeContainerId: 'eventbrite-widget-container-328526651057',
        iframeContainerHeight: 425,
        // modal: true,
        // modalTriggerElementId: 'eventbrite-widget-modal-trigger-328526651057',
        // onOrderComplete: exampleCallback,
      });
    }
  }, [isLoaded]);
};

export default useLoadEvenbriteOnPageLoad;
