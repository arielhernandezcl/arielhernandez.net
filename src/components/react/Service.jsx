import React from 'react';
import ServiceButton from './ServiceButton';
import { Code } from 'lucide-react';

const Service = ({ title, description, additionalInfo }) => {
  return (
    <div className="bg-white dark:bg-neutral-700 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105 relative">
      <div className="bg-blue-500 dark:bg-blue-700 p-4 flex justify-center">
        <Code className="w-12 h-12 text-white"/>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-4 text-center">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">{description}</p>
        <div className="flex justify-center">
          <ServiceButton info={additionalInfo} title={title} client:load />
        </div>
      </div>
    </div>
  );
};

export default Service;
