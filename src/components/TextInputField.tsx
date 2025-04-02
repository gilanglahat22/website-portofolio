"use client";

import React from "react";

const TextInputField: React.FC<TextInputFieldProps> = ({
  setDataToSend,
  dataToSend,
  parent_field,
  field_input,
  form_name,
  form_id,
  give_name,
  required = false, // Default value: false
  customPlaceholder = true,
}) => {
  return (
    <div className="sm:col-span-2">
      <label
        className="block text-sm font-semibold leading-6"
        htmlFor={form_id}
      >
        {form_name}{" "}
        {required ? (
          <span>*</span>
        ) : (
          <span>(opsional)</span>
        )}
      </label>
      <div className="mt-2.5">
        <input
          type="text"
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
          autoComplete={give_name || "off"}
          className={`block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ring-gray-300`}
          placeholder={
            customPlaceholder ? `Masukkan ${form_name} Kamu` : "Jawaban Anda"
          }
          required={required} // Controlled by the 'required' parameter
        />
      </div>
    </div>
  );
};

export default TextInputField;
