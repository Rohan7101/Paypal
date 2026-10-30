import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import FormPage from "./pages/signupForm";

function App() {
  const [showAuth, setShowAuth] = useState(false);
  const [activeTab, setActiveTab] = useState("business");

  const openAuth = () => setShowAuth(true);
  const closeAuth = () => setShowAuth(false);

  return (
    <div className="app">
      {!showAuth ? (
        <>
          <Navbar onsignup={openAuth} onlogin={openAuth} />
          <main className="main-content">
            <div className="tab-container">
              <button
                type="button"
                className={`tab-btn ${activeTab === "business" ? "active" : ""}`}
                onClick={() => setActiveTab("business")}
              >
                Business
              </button>
              <button
                type="button"
                className={`tab-btn ${activeTab === "personal" ? "active" : ""}`}
                onClick={() => setActiveTab("personal")}
              >
                Personal
              </button>
            </div>

            <section className="hero-section">
              {activeTab === "business" ? (
                <>
                  <h1 className="hero-title">PayPal Open</h1>
                  <p className="hero-subtitle">One platform for your business needs</p>
                  <p className="hero-description">
                    PayPal Open unifies your PayPal business solutions to help you get paid, get growing, and get ahead.
                  </p>
                  <div className="hero-actions">
                    <button
                      type="button"
                      className="hero-btn-primary"
                      onClick={openAuth}
                    >
                      Sign Up
                    </button>
                    <a
                      href="https://www.paypal.com/in/home"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hero-btn-secondary"
                    >
                      Contact Sales
                    </a>
                  </div>
                </>
              ) : (
                <>
                  <h1 className="hero-title">PayPal Personal</h1>
                  <p className="hero-subtitle">The simpler, safer way to pay and get paid</p>
                  <p className="hero-description">
                    Pay online, send money to friends, and manage your everyday spending with PayPal.
                  </p>
                  <div className="hero-actions">
                    <button
                      type="button"
                      className="hero-btn-primary"
                      onClick={openAuth}
                    >
                      Sign Up
                    </button>
                    <a
                      href="https://www.paypal.com/in/home"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hero-btn-secondary"
                    >
                      Contact Sales
                    </a>
                  </div>
                </>
              )}
            </section>
          </main>
        </>
      ) : (
        <FormPage onBack={closeAuth} />
      )}
    </div>
  );
}

export default App;
