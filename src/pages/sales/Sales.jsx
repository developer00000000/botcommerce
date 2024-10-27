import React from 'react';
import noData from '../../assets/icons/noData.svg';

const Sales = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-5">
      <div className="w-full max-w-1xl p-8 bg-white shadow-lg rounded-lg mb-8 h-[500px]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Order</h2>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="showArchived"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="showArchived" className="text-gray-700">
                Show archived
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Order ID"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600">
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center h-64 w-full max-w-md mx-auto text-gray-500 border-2 border-dashed border-gray-200 rounded-lg mt-10">
          <div className="mb-4">
            <img src={noData} alt="No data" className="w-16 h-16 mx-auto" />
          </div>
          <p className="text-lg text-gray-600">There is no data to display</p>
        </div>
      </div>
    </div>
  );
};

export default Sales;
