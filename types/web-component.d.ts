import React from 'react';

declare module 'react' { 
  namespace JSX {
    interface IntrinsicElements {
      'teacher-tool-widget': HTMLAttributes<HTMLElement> & {
        'chat-api'?: string;
        'size'?: string;
        'open'?: boolean;
        'chat-assistant-id'?: string;
      };
    }
  }
}