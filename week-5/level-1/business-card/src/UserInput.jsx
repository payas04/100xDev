import React, { useState } from "react";

export default function UserInput({ formData, setForm, setFinalData }) {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFinalData(formData);
  };
  function resetForm() {
    document.getElementById("form").reset();
    setFinalData(null);
    setForm({
      name: "",
      description: "",
      interests: "",
      linkedin: "",
      instagram: "",
    });
  }
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form style={style.form} onSubmit={onSubmit} id="form">
        <input
          required
          placeholder="Enter your Name"
          type="text"
          onChange={(e) => {
            setForm({ ...formData, name: e.target.value });
          }}
        />
        <input
          required
          placeholder="Enter Description"
          type="text"
          onChange={(e) => {
            setForm({ ...formData, description: e.target.value });
          }}
        />
        <input
          required
          placeholder="Enter your interests"
          type="text"
          onChange={(e) => {
            setForm({ ...formData, interests: e.target.value });
          }}
        />

        <input
          required
          placeholder="LinkedIn URL"
          type="url"
          onChange={(e) => {
            setForm({ ...formData, linkedin: e.target.value });
          }}
        />
        <input
          required
          placeholder="Instagramm URL"
          type="url"
          onChange={(e) => {
            setForm({ ...formData, instagram: e.target.value });
          }}
        />

        <button type="submit">Submit </button>
        <button type="button" onClick={resetForm}>
          Reset
        </button>
      </form>
    </div>
  );
}

const style = {
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: 500,
    height: 400,
  },
};
