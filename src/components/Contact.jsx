import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiMapPin, FiSend, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import './Contact.css'

const contactInfo = [
    { Icon: FiMail, label: 'Email', value: 'your@email.com' },   // TODO: your email
    { Icon: FiMapPin, label: 'Location', value: 'Your City, Country' }, // TODO: your location
]

const socials = [
    { Icon: FiGithub, href: 'https://github.com/Ronit965', label: 'GitHub' },
    { Icon: FiLinkedin, href: 'https://www.linkedin.com/in/ronit-kumar-8668b8309/', label: 'LinkedIn' },
    { Icon: FiTwitter, href: 'https://x.com/ronitkumar9582', label: 'Twitter' },
]

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [sent, setSent] = useState(false)

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

    // TODO: Replace this with your real form submission logic (e.g. EmailJS / Formspree)
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form data:', form)
        setSent(true)
        setTimeout(() => setSent(false), 3000)
        setForm({ name: '', email: '', message: '' })
    }

    return (
        <section className="section" id="contact">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="section-tag">Get In Touch</p>
                    <h2 className="section-title">Let&apos;s Work <span>Together</span></h2>
                    <div className="divider" />
                </motion.div>

                <div className="contact__grid">
                    {/* Info panel */}
                    <motion.div
                        className="contact__info"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="contact__intro">
                            {/* TODO: Edit this text */}
                            I&apos;m currently open to new opportunities. Whether you have a project in mind,
                            or just want to say hello — my inbox is always open!
                        </p>

                        <div className="contact__details">
                            {contactInfo.map(({ Icon, label, value }) => (
                                <div key={label} className="contact__detail-row">
                                    <div className="contact__icon-wrap">
                                        <Icon size={18} />
                                    </div>
                                    <div>
                                        <span className="contact__detail-label">{label}</span>
                                        <span className="contact__detail-val">{value}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="contact__socials">
                            {socials.map(({ Icon, href, label }) => (
                                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="social-icon-btn">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.form
                        className="contact__form card"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    id="name" name="name" type="text"
                                    placeholder="Your Name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    id="email" name="email" type="email"
                                    placeholder="your@email.com"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message" name="message" rows={6}
                                placeholder="Tell me about your project..."
                                value={form.message}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button type="submit" className={`btn btn-primary send-btn ${sent ? 'sent' : ''}`}>
                            {sent ? '✓ Message Sent!' : <><FiSend /> Send Message</>}
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    )
}
