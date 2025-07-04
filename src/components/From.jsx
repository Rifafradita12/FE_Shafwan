// src/components/Form.jsx
import styled from "styled-components";
import { useState } from "react";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  padding: 0.5rem;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
`;

function Form() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Judul: ${title}, Deskripsi: ${desc}`);
    // Bisa disambung ke logic backend di sini
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Judul Film"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Textarea
        rows="4"
        placeholder="Deskripsi Film"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <Button type="submit">Submit</Button>
    </FormContainer>
  );
}

export default Form;
