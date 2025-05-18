import { useState, type ChangeEvent, type FormEvent } from "react";

const ContractForm = () => {
  type formType = {
    name: string;
    email: string;
    address: string;
  };
  const [formValue, setFormValue] = useState<formType>({
    name: "",
    email: "",
    address: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValue((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('form Data', formValue)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="name" 
        name="name"
        value={formValue.name}
        onChange={handleChange}
      />
      <input
        type="email"
        placeholder="email"
        name="email"
        value={formValue.email}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="address"
        name="address"
        value={formValue.address}
        onChange={handleChange}
      />

      <br />
      <button>Submit</button>
    </form>
  );
};

export default ContractForm;
