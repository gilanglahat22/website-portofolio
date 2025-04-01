"use client";

import React from "react";

const DropdownInputField: React.FC<DropdownFieldProps> = ({
  setDataToSend,
  dataToSend,
  parent_field,
  field_input,
  form_name,
  form_id,
  dropdownOptions,
  required = false,
}) => {
  return (
    <div className="sm:col-span-2">
      <label
        className="block text-sm font-semibold leading-6"
        style={{ color: "white" }}
      >
        {form_name} {required && <span className="text-gray-400">*</span>}
      </label>
      <div className="mt-2.5">
        <select
          value={dataToSend[parent_field][field_input] || ""}
          onChange={(event) => {
            setDataToSend({
              ...dataToSend,
              [parent_field]: {
                ...dataToSend[parent_field],
                [field_input]: event.target.value,
              },
            });
          }}
          name={form_id}
          id={form_id}
          className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 sm:text-base"
          required={required}
        >
          <option value="">Pilih Opsi</option>
          {dropdownOptions.map((optionValue: string) => (
            <option key={optionValue} value={optionValue}>
              {optionValue}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DropdownInputField;