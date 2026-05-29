import React, { useState } from 'react';

export default function Contact({ darkMode }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email format is invalid";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulating API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Auto close success notification after 5s
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section className="pt-4 pb-12 sm:pt-8 sm:pb-16 flex flex-col items-center animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 w-full">
        {/* Contact Intro */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-display font-black text-3xl sm:text-5xl mb-3 tracking-tight">
            Get in <span className="text-gold-gradient">Touch</span>
          </h2>
          <div className="h-1 w-16 bg-gold mx-auto rounded-full"></div>
          <p className={`text-sm sm:text-base mt-4 max-w-xl mx-auto ${
            darkMode ? 'text-light-muted' : 'text-gray-500'
          }`}>
            Thanks for visiting my portfolio! Feel free to reach out anytime.
          </p>
        </div>

        {/* Success Alert Banner */}
        {submitSuccess && (
          <div className="mb-8 w-full p-4 rounded-xl border bg-emerald-500/10 border-emerald-500/30 text-emerald-500 flex items-center space-x-3 animate-fade-in-up">
            <CheckCircle2 className="h-6 w-6 shrink-0" />
            <div className="text-xs sm:text-sm">
              <span className="font-bold">Message Sent Successfully!</span> Thank you for reaching out. I'll get back to you as soon as possible.
            </div>
          </div>
        )}

        <div className="flex justify-center max-w-sm sm:max-w-none mx-auto w-full">

          {/* Form */}
          <div className="w-full max-w-2xl">
            <div className={`p-6 sm:p-8 rounded-3xl border ${
              darkMode 
                ? 'bg-dark-card border-dark-border text-light-text' 
                : 'bg-white border-gray-200 shadow-sm text-dark-rich'
            }`}>
              <h3 className="font-display font-black text-xl mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label className={`block text-xs font-bold uppercase tracking-wider mb-1 ${
                      darkMode ? 'text-light-muted' : 'text-gray-500'
                    }`}>
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 text-xs rounded-xl border focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-colors ${
                        errors.name ? 'border-red-500' : darkMode ? 'bg-dark-rich border-dark-border' : 'bg-gray-50 border-gray-200'
                      }`}
                    />
                    {errors.name && <p className="text-[10px] text-red-500 mt-1">{errors.name}</p>}
                  </div>

                  {/* Email field */}
                  <div>
                    <label className={`block text-xs font-bold uppercase tracking-wider mb-1 ${
                      darkMode ? 'text-light-muted' : 'text-gray-500'
                    }`}>
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 text-xs rounded-xl border focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-colors ${
                        errors.email ? 'border-red-500' : darkMode ? 'bg-dark-rich border-dark-border' : 'bg-gray-50 border-gray-200'
                      }`}
                    />
                    {errors.email && <p className="text-[10px] text-red-500 mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject field */}
                <div>
                  <label className={`block text-xs font-bold uppercase tracking-wider mb-1 ${
                    darkMode ? 'text-light-muted' : 'text-gray-500'
                  }`}>
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 text-xs rounded-xl border focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-colors ${
                      errors.subject ? 'border-red-500' : darkMode ? 'bg-dark-rich border-dark-border' : 'bg-gray-50 border-gray-200'
                    }`}
                  />
                  {errors.subject && <p className="text-[10px] text-red-500 mt-1">{errors.subject}</p>}
                </div>

                {/* Message field */}
                <div>
                  <label className={`block text-xs font-bold uppercase tracking-wider mb-1 ${
                    darkMode ? 'text-light-muted' : 'text-gray-500'
                  }`}>
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 text-xs rounded-xl border focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-colors ${
                      errors.message ? 'border-red-500' : darkMode ? 'bg-dark-rich border-dark-border' : 'bg-gray-50 border-gray-200'
                    }`}
                  />
                  {errors.message && <p className="text-[10px] text-red-500 mt-1">{errors.message}</p>}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-auto mx-auto block py-2 px-8 rounded-lg font-bold text-xs tracking-wider uppercase bg-gold-gradient text-dark-pure disabled:opacity-50 flex items-center justify-center transition-all duration-300 hover:shadow-md hover:shadow-gold/20 active:scale-[0.98] cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Submit Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}