import { useState } from "react";

function FormPage({ onBack }) {
  const [showPassword, setShowPassword] = useState(false);
  const [country, setCountry] = useState("India");
  const [code, setCode] = useState("+91");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account Created Successsfully");
  };

  return (
    <div className="account-page">
      <div className="account-top-bar">
        {onBack && (
          <button type="button" className="back-btn" onClick={onBack} aria-label="Back">
            ← Back
          </button>
        )}
      </div>

      <div className="account-container">
        <h1 className="account-title">Let’s create your account</h1>
        <p className="account-subtitle">
          Whether you're a business, nonprofit or a casual seller, you're in the right place.
        </p>

        <form onSubmit={handleSubmit} className="account-form">
          <div className="field-container">
            <input
              type="text"
              placeholder="First name"
              id="firstname"
              className="text-input"
              required
            />
          </div>

          <div className="field-container">
            <input
              type="text"
              placeholder="Middle name"
              id="middlename"
              className="text-input"
            />
          </div>

          <div className="field-container">
            <input type="text" placeholder="Last name" id="lastname" className="text-input" required />
          </div>

          <div className="select-container">
            <label htmlFor="country-select" className="select-label">
              Country or region
            </label>
            <div className="select-wrapper">
              <select
                id="country-select"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="select-element"
              >
                <option value="India">India</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
              </select>
              <span className="select-chevron">⌄</span>
            </div>
          </div>

          <p className="country-helper-text">
            Choose the country where your business is based. If you’re a casual seller, choose the country where you live.
          </p>

          <div className="phone-row">
            <div className="code-container">
              <label htmlFor="phone-code" className="select-label">
                Code
              </label>
              <div className="code-wrapper">
                <span className="country-flag" role="img" aria-label="India flag">
                  🇮🇳
                </span>
                <select
                  id="phone-code"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="code-select"
                >
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+61">+61</option>
                </select>
                <span className="select-chevron">⌄</span>
              </div>
            </div>

            <div className="field-container phone-input-container">
              <input
                type="number"
                placeholder="Phone number"
                id="phno"
                className="text-input"
                required
              />
            </div>
          </div>

          <div className="field-container">
            <input
              type="email"
              placeholder="Email address"
              id="email"
              className="text-input"
              required
            />
          </div>

          <div className="field-container password-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create password"
              id="pass"
              className="text-input password-input"
              required
            />
            <button
              type="button"
              className="password-toggle-btn"
              onClick={() => setShowPassword(!showPassword)}
              aria-label="Toggle password visibility"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
                {showPassword && <line x1="1" y1="1" x2="23" y2="23" />}
              </svg>
            </button>
          </div>

          <button type="submit" className="account-submit-btn">
            Agree and Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormPage;
