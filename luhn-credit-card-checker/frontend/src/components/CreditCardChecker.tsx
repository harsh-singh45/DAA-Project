import React, { useState } from "react";

const containerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: "#fff",
  borderRadius: "16px",
  boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
  padding: "32px 24px",
  maxWidth: "400px",
  margin: "40px auto",
};

const inputStyle: React.CSSProperties = {
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #cbd5e1",
  width: "100%",
  marginBottom: "16px",
  fontSize: "1rem",
};

const buttonStyle: React.CSSProperties = {
  padding: "12px 24px",
  borderRadius: "8px",
  border: "none",
  background: "#2563eb",
  color: "#fff",
  fontWeight: "bold",
  cursor: "pointer",
  fontSize: "1rem",
  marginBottom: "16px",
};

const resultStyle: React.CSSProperties = {
  fontSize: "1.1rem",
  fontWeight: "bold",
  color: "#2563eb",
  marginTop: "12px",
};

const errorStyle: React.CSSProperties = {
  fontSize: "1rem",
  color: "#dc2626",
  marginTop: "12px",
};

const CreditCardChecker: React.FC = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleCheck = async () => {
    setResult(null);
    setError(null);

    if (!cardNumber.trim()) {
      setError("Please enter a credit card number.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("http://localhost:8000/validate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ card_number: cardNumber }),
      });

      if (!response.ok) {
        setError("Server error or invalid response.");
        setLoading(false);
        return;
      }

      const data = await response.json();
      setResult(data.is_valid ? "Valid Card Number ✅" : "Invalid Card Number ❌");
    } catch (err) {
      setError("Could not connect to backend.");
    }
    setLoading(false);
  };

  return (
    <div style={containerStyle}>
      <h1>Luhn Credit Card Checker</h1>
      <input
        style={inputStyle}
        type="text"
        placeholder="Enter credit card number"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
        disabled={loading}
      />
      <button style={buttonStyle} onClick={handleCheck} disabled={loading}>
        {loading ? "Validating..." : "Validate"}
      </button>
      {result && <div style={resultStyle}>{result}</div>}
      {error && <div style={errorStyle}>{error}</div>}
    </div>
  );
};

export default CreditCardChecker;