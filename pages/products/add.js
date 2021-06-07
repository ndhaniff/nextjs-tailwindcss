import next from 'next';
import React, { useState } from 'react';
import Content from '../../components/content';
import AddFormStepOne from '../../components/partials/products/add-form-step-one';

const FilePicker = ({ label }) => (
  <div className="file-picker">
    <div className="flex items-center justify-center w-20 h-20 border border-blue-300 border-dashed hover:cursor-pointer hover:border-blue-500">
      <div className="text-blue-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            fill="currentColor"
            d="M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"
          />
        </svg>
      </div>
    </div>

    <label
      className="block w-full mt-1 text-sm text-center text-gray-500"
      htmlFor=""
    >
      {label}
    </label>
  </div>
);

export default function AddProduct() {
  const [state, changeState] = useState({
    step: 2,
  });

  const nextStep = (step = 1) => {
    changeState({ step });
    console.log(state);
  };

  return (
    <Content
      title="Add Products"
      desc="Please choose the right category for your product."
      breadcrumb={{
        parent: 'Products',
        active: {
          link: '/products/add',
          text: 'Add Product',
        },
      }}
    >
      <div id="add-form">
        {state.step == 1 && (
          <AddFormStepOne nextStep={nextStep}></AddFormStepOne>
        )}
        {state.step == 2 && (
          <div>
            <div className="grid grid-cols-5 mb-4">
              <div className="mt-2 mr-4 text-sm">Product images</div>
              <div className="flex col-span-4 gap-4 file-inputs">
                {[1, 2, 3, 4, 5].map((item, i) => (
                  <FilePicker label={i + '-label'}></FilePicker>
                ))}
              </div>
            </div>
            <div className="grid items-center grid-cols-5 mb-4 text-sm">
              <label className="mr-4" htmlFor="name">
                Product Name
              </label>
              <div className="relative flex-1 col-span-4 input-area">
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

            <div className="grid grid-cols-5 mb-4 text-sm">
              <label className="mt-2 mr-4" htmlFor="name">
                Product Description
              </label>
              <div className="flex-1 col-span-4 input-area">
                <textarea
                  className="w-full text-sm border-gray-300 rounded resize-none"
                  name=""
                  placeholder="Description"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
                <div className="pl-2 text-sm text-right text-gray-400 right-3 top-3">
                  0/200
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-3 space-x-2 border-t border-gray-300 button-area">
              <button
                onClick={() => nextStep(1)}
                className="px-3 py-2 text-sm text-gray-400 rounded shadow pointer"
              >
                Back
              </button>
              <button
                onClick={() => nextStep(3)}
                className="px-3 py-2 text-sm text-white bg-blue-500 rounded shadow pointer"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </Content>
  );
}
