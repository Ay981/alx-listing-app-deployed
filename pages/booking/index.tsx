import axios from "axios";
import { useState } from "react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("/api/bookings", formData);
      alert("Booking confirmed!");
    } catch (error) {
      setError("Failed to submit booking.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields for booking details */}
      <input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" required />
      <input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" required />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <input name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" required />
      <input name="cardNumber" value={formData.cardNumber} onChange={handleChange} placeholder="Card Number" required />
      <input name="expirationDate" value={formData.expirationDate} onChange={handleChange} placeholder="Expiration Date" required />
      <input name="cvv" value={formData.cvv} onChange={handleChange} placeholder="CVV" required />
      <input name="billingAddress" value={formData.billingAddress} onChange={handleChange} placeholder="Billing Address" required />
      <button type="submit" disabled={loading}>
        {loading ? "Processing..." : "Confirm & Pay"}
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}
