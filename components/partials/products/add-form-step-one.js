import React from 'react';

export default function AddFormStepOne({ nextStep }) {
  return (
    <div>
      <div className="flex items-center mb-4 text-sm">
        <label className="mr-4" htmlFor="name">
          Product Name
        </label>
        <div className="relative flex-1 input-area">
          <input
            className="w-full text-sm border-gray-300 rounded focus:border-blue-500"
            placeholder="Name"
            type="text"
            name="name"
          />
          <div className="absolute pl-2 text-sm text-gray-400 border-l border-gray-400 right-3 top-3">
            0/120
          </div>
        </div>
      </div>
      <div className="pb-4">
        <div className="mb-2 text-sm">Categories</div>
        <div className="grid grid-cols-3 gap-4 h-96">
          <div className="px-2 overflow-y-scroll border border-gray-300 rounded">
            <div className="px-1 py-2 text-sm cursor-pointer hover:text-blue-500">
              Mobile & Accessories
            </div>
            <div className="px-1 py-2 text-sm cursor-pointer hover:text-blue-500">
              Home Appliances
            </div>
            <div className="px-1 py-2 text-sm cursor-pointer hover:text-blue-500">
              Automotive
            </div>
          </div>
          <div className="px-2 overflow-y-scroll border border-gray-300 rounded">
            <div className="px-1 py-2 text-sm cursor-pointer hover:text-blue-500">
              Small Kitchen
            </div>
          </div>
          <div className="px-2 overflow-y-scroll border border-gray-300 rounded">
            <div className="px-1 py-2 text-sm cursor-pointer hover:text-blue-500">
              Mixers & Blenders
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end pt-3 border-t border-gray-300 button-area">
        <button
          onClick={() => nextStep(2)}
          className="px-3 py-2 text-sm text-white bg-blue-500 rounded shadow pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
}
