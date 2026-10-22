import { useState } from 'react';
import { ArrowUpRight, Mail, MessageCircle, Phone, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const WA_NUMBER = '918797125563';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function submit(e) {
    e.preventDefault();

    const text =
      `*New Enquiry via EVOLV Website*\n\n` +
      `*Name:* ${form.name}\n` +
      `*Email:* ${form.email}\n` +
      `*Service:* ${form.service || 'Not specified'}\n\n` +
      `*Message:*\n${form.message}`;

    const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setSent(true);
  }

  return (
    <section className="section contact-page">
      <div className="contact-grid">
        <div className="contact-copy">
          <div className="eyebrow">CONTACT</div>
          <h1>Let's make your<br /><span>next move.</span></h1>
          <p>Tell us what you're trying to build, automate or improve. We'll get back to you and figure out the right next step.</p>
          <div className="contact-details">
            <a href="mailto:evolvbusinessagency@gmail.com"><Mail size={18} />evolvbusinessagency@gmail.com</a>
            <a href="tel:+918797125563"><Phone size={18} />+91 87971 25563</a>
            <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={18} />WhatsApp us
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={submit}>
          <label>
            Name
            <input
              required
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Work email
            <input
              required
              type="email"
              name="email"
              placeholder="you@company.com"
              value={form.email}
              onChange={handleChange}
            />
          </label>
          <label>
            What can we help with?
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
            >
              <option value="" disabled>Select a service</option>
              <option>Website / landing page</option>
              <option>ERP / CRM</option>
              <option>AI agent / chatbot</option>
              <option>Full-stack product</option>
              <option>Something else</option>
            </select>
          </label>
          <label>
            Tell us a little more
            <textarea
              required
              name="message"
              placeholder="What are you trying to build or improve?"
              rows="5"
              value={form.message}
              onChange={handleChange}
            />
          </label>

          <button className="btn primary submit" type="submit">
            {sent ? 'Sent via WhatsApp' : 'Send enquiry'} <Send size={16} />
          </button>

          {sent && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="success"
            >
              WhatsApp opened with your message — just hit send! You can also reach us at evolvbusinessagency@gmail.com.
            </motion.p>
          )}
        </form>
      </div>
    </section>
  );
}
