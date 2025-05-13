import React from 'react';

export default function ServiceLink() {
  const handleLinkClick = () => {
    window.open('https://socialmoodboard.wixsite.com/social-moodboard/services-1?rc=FEEDBACK', '_blank', 'noopener,noreferrer');
  };

  return (
    <button 
      onClick={handleLinkClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Open Social Moodboard Services
    </button>
  );
}