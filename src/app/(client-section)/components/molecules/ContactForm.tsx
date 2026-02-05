import React, { useState } from 'react';
interface FormValues {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({ name: '', email: '', message: '' });
  const [messages, setMessages] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessages(`Thank you, ${formValues.name}! We will contact you at ${formValues.email}.`);
    setFormValues({ name: "", email: "", message: "" }); // Reset the form
  };
  return (
    <form onSubmit={handleSubmit}  className="bg-white p-6 rounded-lg shadow-lg flex flex-col gap-4">
      <div className="flex flex-col gap-3">
        <h1 className='flex flex-col items-center font-bold text-2xl'>Get in touch !</h1>
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 font-medium">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            className="p-2 border border-orange-400 rounded"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 font-medium">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            className="p-2 border border-orange-400 rounded"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="mb-1 font-medium">
            Message:
          </label>
          <input
            id="message"
            name="message"
            value={formValues.message}
            onChange={handleChange}
            className="p-2 border border-orange-400 rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-orange-400 text-white font-semibold py-2 rounded hover:bg-orange-500 transition mt-2"
        >
          Submit
        </button>

        <p className="text-center text-red-500">{messages}</p>
      </div>
    </form>
  );
}

export default ContactForm;