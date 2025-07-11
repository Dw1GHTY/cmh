import React from "react";

interface EmailTemplateProps {
  name: string;
  surname: string;
  email: string;
  message?: string;
}

const EmailTemplate: React.FC<EmailTemplateProps> = (props) => {
  const { name, surname, email, message } = props;
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
        color: "#333",
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <h1
        style={{
          color: "#2c3e50",
          borderBottom: "2px solid #3498db",
          paddingBottom: "10px",
          textAlign: "center",
        }}
      >
        New Email from Complete Mobile Health Customer
      </h1>

      <div style={{ marginBottom: "15px" }}>
        <strong>Name:</strong> {name}
      </div>

      <div style={{ marginBottom: "15px" }}>
        <strong>Surname:</strong> {surname}
      </div>

      <div style={{ marginBottom: "15px" }}>
        <strong>Email:</strong> {email}
      </div>

      {message && (
        <div style={{ marginTop: "20px" }}>
          <strong>Message:</strong>
          <p
            style={{
              backgroundColor: "#f8f9fa",
              padding: "15px",
              borderRadius: "5px",
              marginTop: "10px",
            }}
          >
            {message}
          </p>
        </div>
      )}
    </div>
  );
};

export default EmailTemplate;
