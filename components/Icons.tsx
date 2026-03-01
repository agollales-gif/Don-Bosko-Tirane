
import React from 'react';

export const SalesianLogo: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="12" fill="#DC2626" />
    <path 
      d="M12 5.5C12.5523 5.5 13 5.05228 13 4.5C13 3.94772 12.5523 3.5 12 3.5C11.4477 3.5 11 3.94772 11 4.5C11 5.05228 11.4477 5.5 12 5.5Z" 
      fill="white" 
    />
    <path 
      d="M7.5 9C8.05228 9 8.5 8.55228 8.5 8C8.5 7.44772 8.05228 7 7.5 7C6.94772 7 6.5 7.44772 6.5 8C6.5 8.55228 6.94772 9 7.5 9Z" 
      fill="white" 
    />
    <path 
      d="M16.5 9C17.0523 9 17.5 8.55228 17.5 8C17.5 7.44772 17.0523 7 16.5 7C15.9477 7 15.5 7.44772 15.5 8C15.5 8.55228 15.9477 9 16.5 9Z" 
      fill="white" 
    />
    <path 
      fillRule="evenodd" 
      clipRule="evenodd" 
      d="M12 6L4 12V18.5C4 19.3284 4.67157 20 5.5 20H8V14C8 12.8954 8.89543 12 10 12H14C15.1046 12 16 12.8954 16 14V20H18.5C19.3284 20 20 19.3284 20 18.5V12L12 6ZM14 20H10V14H14V20Z" 
      fill="white" 
    />
  </svg>
);
