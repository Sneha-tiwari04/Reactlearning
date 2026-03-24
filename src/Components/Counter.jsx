import React, { useState } from 'react';

const Counter = () => {
  // Counter ki shuruati value 0 rakhte hain
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-2xl shadow-xl text-center">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">My Counter</h1>
        
        <div className="text-6xl font-mono font-bold text-blue-600 mb-8">
          {count}
        </div>

        <div className="flex gap-4">
          {/* Kam karne wala button */}
          <button 
            onClick={() => setCount(count - 1)}
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all text-xl font-bold"
          >
            −
          </button>

          {/* Reset button (Optional but useful) */}
          <button 
            onClick={() => setCount(0)}
            className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all"
          >
            Reset
          </button>

          {/* Badhane wala button */}
          <button 
            onClick={() => setCount(count + 1)}
            className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all text-xl font-bold"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;