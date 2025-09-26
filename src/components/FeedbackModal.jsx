import React, { useState } from "react";
import "./FeedbackModal.css";

const FeedbackModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
    rating: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    alert("Thank you for your feedback!");
    setFormData({ name: "", email: "", feedback: "", rating: "" });
    onClose();
  };

  return (
    <>
      <div className="modal-overlay" onClick={onClose} />
      <div className="modal-content">
        <button onClick={onClose}>✖</button>
        <h2>Feedback</h2>
        <form onSubmit={handleSubmit} className="feedback-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="feedback"
            placeholder="Your Feedback"
            rows="4"
            value={formData.feedback}
            onChange={handleChange}
            required
          />
          <fieldset>
            <legend>Rate Our Service</legend>
            {["excellent", "good", "average", "poor"].map((option) => (
              <label key={option}>
                <input
                  type="radio"
                  name="rating"
                  value={option}
                  checked={formData.rating === option}
                  onChange={handleChange}
                  required
                />{" "}
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </label>
            ))}
          </fieldset>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default FeedbackModal;
