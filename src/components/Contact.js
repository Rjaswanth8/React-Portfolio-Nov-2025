import React, { useState } from "react";

const Contact = () => {
  // ===============================
  // State for form and status
  // ===============================
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // ===============================
  // Handle input changes
  // ===============================
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ===============================
  // Handle form submit
  // ===============================
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("⏳ Sending...");

    try {
      const res = await fetch(
        "https://jaswanth-contact-api.onrender.com/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Request failed");
      }

      const data = await res.json();
      if (data.success) {
        setStatus("✅ Message sent successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("⚠️ " + data.message);
      }
    } catch (error) {
      console.error("❌ Error submitting form:", error);
      setStatus("❌ Failed to send message. Please try again later.");
    }
  };

  // ===============================
  // JSX
  // ===============================
  return (
    <section className="get-in-touch-area tmp-section-gapTop mb-5" id="contact">
      <div className="container">
        <div className="section-head text-align-left mb--50">
          <div className="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
            <span className="subtitle theme-gradient">Let’s Connect</span>
          </div>
          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
            Just to say hi
            <br /> I’d love to hear from you.
          </h2>
        </div>

        <div className="get-in-touch-wrapper position-relative overflow-hidden">
          <div className="row g-5 align-items-center">
            {/* Contact Info */}
            <div className="col-lg-5">
              <div className="contact-inner">
                <div className="section-head section-head-one-side text-align-left tmp-scroll-trigger tmp-fade-in animation-order-1">
                  <span className="title-left">Get Ready To Create Great</span>
                </div>

                <ul className="ft-link v2">
                  <li className="tmp-scroll-trigger tmp-fade-in animation-order-1 tmp-link-animation">
                    <span className="ft-icon">
                      <i className="fa-solid fa-envelope"></i>
                    </span>
                    <div className="ft-link-wrap">
                      <h4 className="link-title">E-mail:</h4>
                      <a href="mailto:raminenijaswanth26@gmail.com">
                        raminenijaswanth26@gmail.com
                      </a>
                    </div>
                  </li>

                  <li className="tmp-scroll-trigger tmp-fade-in animation-order-2">
                    <span className="ft-icon">
                      <i className="fa-solid fa-location-dot"></i>
                    </span>
                    <div className="ft-link-wrap">
                      <h4 className="link-title">Location:</h4>
                      <div>HSR Layout Sector 1, Bangalore, India.</div>
                    </div>
                  </li>

                  <li className="tmp-scroll-trigger tmp-fade-in animation-order-3 tmp-link-animation">
                    <span className="ft-icon">
                      <i className="fa-solid fa-phone"></i>
                    </span>
                    <div className="ft-link-wrap">
                      <h4 className="link-title">Contact:</h4>
                      <a href="tel:8688086646">+91 - 8688086646</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-7">
              <div className="contact-inner">
                <div className="section-head section-head-one-side text-align-left tmp-scroll-trigger tmp-fade-in animation-order-1">
                  <span className="title">GET IN TOUCH</span>
                </div>

                <div className="contact-form">
                  <form
                    className="tmp-dynamic-form"
                    id="contact-form"
                    onSubmit={handleSubmit}
                  >
                    <div className="contact-form-wrapper row">
                      {/* Name */}
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            className="input-field"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            type="text"
                            required
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            className="input-field"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone Number"
                            type="text"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            className="input-field"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            type="email"
                            required
                          />
                        </div>
                      </div>

                      {/* Subject */}
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            className="input-field"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Subject"
                            type="text"
                          />
                        </div>
                      </div>

                      {/* Message */}
                      <div className="col-lg-12">
                        <div className="form-group">
                          <textarea
                            className="input-field"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            required
                          />
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className="col-lg-12">
                        <div className="tmp-button-here">
                          <button
                            type="submit"
                            className="tmp-btn hover-icon-reverse btn-border btn-md tmp-modern-button radius-round download-icon"
                          >
                            <span className="icon-reverse-wrapper">
                              <span className="btn-text">Appointment Now</span>
                              <span className="btn-hack"></span>
                              <img
                                src="/images/button/btg-bg.svg"
                                alt=""
                                className="btn-bg"
                              />
                              <img
                                src="/images/button/btg-bg-2.svg"
                                alt=""
                                className="btn-bg-hover"
                              />
                              <span className="btn-icon">
                                <i className="ffa-sharp fa-regular fa-arrow-right"></i>
                              </span>
                              <span className="btn-icon">
                                <i className="ffa-sharp fa-regular fa-arrow-right"></i>
                              </span>
                            </span>
                          </button>
                        </div>
                      </div>

                      {/* Status Message */}
                      <div className="col-lg-12 mt-3">
                        {status && <p style={{ color: "#fff" }}>{status}</p>}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="tmp-light light-top-left active"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
