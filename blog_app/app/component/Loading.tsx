import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-12 h-12 border-t-4 border-blue-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
