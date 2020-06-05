import * as React from "react";

export default function TextInput({value, label}) {
  return (
    <>
    <label>{label}</label>
    <input
    type="text"
    value={value}
    />
    </>
  )
}