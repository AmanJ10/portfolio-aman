import { useState } from "react";
import axios from "axios";

function Review() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",

    message: "",
  });

  const [isSent, setIsSent] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let isValid = true;
    let errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        await axios.post(
          "https://server-portfolio-rql6.onrender.com/api/form",
          formData
        );
        setIsSent(true);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setErrors({});
        setTimeout(() => {
          setIsSent(false);
        }, 3000);
      } catch (error) {
        console.error("There was an error sending the message:", error);
        alert("Failed to send message");
      }
    }
  };

  return (
    <>
      <h2
        id="contact"
        className="text-4xl font-bold text-gray-800 text-center my-8 uppercase tracking-wide"
      >
        Contact
      </h2>
      <div className="text-center mb-6">
        <h2 className="text-gray-800">
          Submit the form below to get in touch <br /> and I will respond
          promptly.
        </h2>
      </div>

      <section className="bg-white p-10 mb-5 rounded-lg shadow-lg max-w-lg mx-auto">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block text-lg font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              placeholder="Enter name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-bg-shade"
              onChange={handleChange}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              placeholder="Enter email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-bg-shade"
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="block text-lg font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              cols="30"
              rows="5"
              value={formData.message}
              placeholder="Write your message"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-bg-shade"
              onChange={handleChange}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className={`w-full p-3 rounded-lg font-semibold transition duration-300 ${
              isSent
                ? "bg-green-500 text-white hover:bg-green-600"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            {isSent ? "Email Sent" : "Send Message"}
          </button>
        </form>
      </section>
    </>
  );
}

export default Review;
