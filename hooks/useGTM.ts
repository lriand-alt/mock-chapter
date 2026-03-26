import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { trackEvent, trackPageView } from '../lib/gtm';

/**
 * Hook to track page views automatically on route changes
 * 
 * @example
 * ```typescript
 * function App() {
 *   usePageTracking();
 *   return <YourApp />;
 * }
 * ```
 */
export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);
};

/**
 * Hook for tracking custom events with memoized callbacks
 * 
 * @returns Object with helper functions for tracking events
 * 
 * @example
 * ```typescript
 * function MyComponent() {
 *   const { trackClick, trackCustomEvent } = useGTM();
 *   
 *   return (
 *     <button onClick={() => trackClick('signup_button', 'header')}>
 *       Sign Up
 *     </button>
 *   );
 * }
 * ```
 */
export const useGTM = () => {
  const trackClick = useCallback((label: string, location?: string) => {
    trackEvent('button_click', {
      button_label: label,
      button_location: location,
    });
  }, []);

  const trackCustomEvent = useCallback((eventName: string, data?: Record<string, any>) => {
    trackEvent(eventName, data);
  }, []);

  return {
    trackClick,
    trackCustomEvent,
  };
};