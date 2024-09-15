import React from 'react';
import Swal from 'sweetalert2';

export default function Button({ info, title}) {
  const handleClick = () => {
    Swal.fire({
      title: title,
      text: info,
      confirmButtonText: "Perfecto",
    });
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
      onClick={handleClick}
    >
      Leer Mas
    </button>
  );
}
