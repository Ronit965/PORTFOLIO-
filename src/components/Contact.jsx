import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiSend, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import './Contact.css'


const socials = [
    { Icon: FiGithub, href: 'https://github.com/Ronit965', label: 'GitHub' },
    { Icon: FiLinkedin, href: 'https://www.linkedin.com/in/ronit-kumar-8668b8309/', label: 'LinkedIn' },
    { Icon: FiTwitter, href: 'https://x.com/ronitkumar9582', label: 'Twitter' },
]

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [sent, setSent] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    // TODO: Replace with your Web3Forms Access Key
                    access_key: '7069403b-0226-4752-9818-9be35dcf672f',
                    name: form.name,
                    email: form.email,
                    message: form.message
                })
            })

            const data = await res.json()

            if (res.ok || data.success) {
                setSent(true)
                setTimeout(() => setSent(false), 3000)
                setForm({ name: '', email: '', message: '' })
            } else {
                setError(data.message || 'Failed to send message')
            }
        } catch (err) {
            setError('Could not connect to the email service.')
            console.error(err)
        }
        setLoading(false)
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

                        <button type="submit" className={`btn btn-primary send-btn ${sent ? 'sent' : ''}`} disabled={loading}>
                            {loading ? 'Sending...' : sent ? '✓ Message Sent!' : <><FiSend /> Send Message</>}
                        </button>
                        {error && <p className="contact__error" style={{ color: '#ff4a4a', marginTop: '1rem', fontSize: '0.9rem', textAlign: 'center' }}>{error}</p>}
                    </motion.form>
                </div>
            </div>
        </section>
    )
}
