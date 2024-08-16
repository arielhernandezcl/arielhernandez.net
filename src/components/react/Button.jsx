import React from 'react';

export default function Button({ text, link }) {
  const handleClick = () => {
    window.location.href = link;
  };

  return (
    <button
      className="
        w-64 sm:w-52 h-12 
        rounded-xl 
        font-bold 
        text-white 
        border border-solid border-blue-500
        flex justify-center items-center gap-2
        cursor-pointer 
        bg-blue-500 
        hover:bg-blue-600
        hover:shadow-lg
        active:bg-blue-700 active:shadow-inner
        transition-all duration-300 ease-in-out
        dark:bg-blue-600 dark:hover:bg-blue-700 dark:active:bg-blue-800
      "
      aria-label={text}
      onClick={handleClick}
    >
      {text}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-5 w-5" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M14 5l7 7m0 0l-7 7m7-7H3" 
        />
      </svg>
    </button>
  );
}