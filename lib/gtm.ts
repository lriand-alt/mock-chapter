/**
 * Google Tag Manager Utility
 * 
 * Provides functions to interact with Google Tag Manager's dataLayer
 * for tracking custom events and user interactions.
 */

// Extend the Window interface to include dataLayer
declare global {
  interface Window {
    dataLayer: any[];
  }
}

/**
 * Initialize the dataLayer if it doesn't exist
 */
export const initDataLayer = () => {
  window.dataLayer = window.dataLayer || [];
};

/**
 * Push a custom event to Google Tag Manager
 * 
 * @param eventName - The name of the custom event
 * @param eventData - Additional data to send with the event
 * 
 * @example
 * ```typescript
 * trackEvent('button_click', {
 *   button_name: 'signup',
 *   button_location: 'header'
 * });
 * ```
 */
export const trackEvent = (eventName: string, eventData?: Record<string, any>) => {
  if (typeof window === 'undefined') {
    console.warn('GTM: window is not defined (SSR context)');
    return;
  }

  initDataLayer();

  const dataLayerEvent = {
    event: eventName,
    ...eventData,
  };

  window.dataLayer.push(dataLayerEvent);
  console.debug('GTM Event Tracked:', dataLayerEvent);
};

/**
 * Track page views
 * 
 * @param pagePath - The page path or URL
 * @param pageTitle - Optional page title
 * 
 * @example
 * ```typescript
 * trackPageView('/products', 'Products Page');
 * ```
 */
export const trackPageView = (pagePath: string, pageTitle?: string) => {
  trackEvent('page_view', {
    page_path: pagePath,
    page_title: pageTitle || document.title,
  });
};