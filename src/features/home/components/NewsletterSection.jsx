// src/features/home/components/NewsletterSection.jsx
import { useState } from "react";
import "@/styles/newsletter.css";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribe:", email);
  };

  return (
    <section className="newsletter">
      <div className="container">

        <h2>Subscribe to our Newsletter</h2>

        <form onSubmit={handleSubmit} className="newsletter-form">

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button type="submit">Subscribe</button>

        </form>

      </div>
    </section>
  );
};

export default NewsletterSection;