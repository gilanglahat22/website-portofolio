"use client";

import React from "react";

const RadioInputVerticalField: React.FC<RadioInputFieldProps> = ({
  setDataToSend,
  dataToSend,
  parent_field,
  field_input,
  form_name,
  form_id,
  radioOptions,
  required = false,
}) => {
  return (
    <div className="items-center sm:col-span-2 space-y-3">
      <label
        className="block text-sm font-semibold leading-6"
        style={{ color: "white" }}
      >
        {form_name} {required && <span className="text-gray-400">*</span>}
      </label>
      <div className="flex flex-col space-y-3 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4 mt-2">
        {radioOptions.map((option) => (
          <label key={option.value} className="flex items-center space-x-2">
            <input
              type="radio"
              name={form_id}
              id={`${form_id}-${option.value}`} // Ensure unique IDs for accessibility
              value={dataToSend[parent_field][field_input] || ""}
              checked={dataToSend[parent_field][field_input] === option.value}
              onChange={() => {
                setDataToSend({
                  ...dataToSend,
                  [parent_field]: {
                    ...dataToSend[parent_field],
                    [field_input]: option.value,
                  },
                });
              }}
              className="peer h-4 w-4 appearance-none rounded-full border border-gray-300 checked:bg-indigo-500 checked:border-white focus:ring-indigo-500"
              required={required}
            />
            <span
              className="peer-checked:text-indigo-500 text-[13px]"
              style={{ color: "white" }}
            >
              {option.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioInputVerticalField;
