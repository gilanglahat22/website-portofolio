"use client";

import React from "react";

const NumberInputField: React.FC<NumberInputFieldProps> = ({
  setDataToSend,
  dataToSend,
  parent_field,
  field_input,
  form_name,
  form_id,
  required = false, // Default value: false
}) => {
  return (
    <div className="sm:col-span-2">
      <label
        className="block text-sm font-semibold leading-6 text-white"
        htmlFor={form_id}
      >
        {form_name} {required && <span className="text-white-500">*</span>}
      </label>
      <div className="mt-2.5">
        <input
          type="tel"
          value={dataToSend[parent_field][field_input] || ""}
          onChange={(event) => {
            const cleanedValue = event.target.value.replace(/[^0-9+]/g, "");
            setDataToSend({
              ...dataToSend,
              [parent_field]: {
                ...dataToSend[parent_field],
                [field_input]: cleanedValue,
              },
            });
          }}
          name={form_id}
          id={form_id}
          autoComplete="tel"
          className={`block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ring-gray-300`}
          placeholder={`Masukkan ${form_name} Kamu`}
          required={required} // Controlled by the 'required' parameter
        />
      </div>
    </div>
  );
};

export default NumberInputField;
