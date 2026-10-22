
import { useState } from "react";
import "../cssfiles/Email.css";

function EmailInput() {
  const [email, setEmail] = useState("");

  return (
    <div className="email-container">
      <label htmlFor="email">Email </label>

      <input
        className="email-input"
        id="email"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
    </div>
  );
}

export default EmailInput;