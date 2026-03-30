import { motion } from 'framer-motion'
import './About.css'

// TODO: Replace these with your real information
const stats = [
    { value: '2+', label: 'Years Experience' },
    { value: '10+', label: 'Projects Done' },
    { value: '5+', label: 'Happy Clients' },
    { value: '∞', label: 'Cups of Coffee' },
]

export default function About() {
    return (
        <section className="section" id="about">
            <div className="container">
                <motion.div
                    className="about__grid"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.7 }}
                >
                    {/* Left: Image / visual */}
                    <div className="about__visual">
                        {/* Stats */}
                        <div className="about__stats">
                            {stats.map((s) => (
                                <div key={s.label} className="stat-card card">
                                    <span className="stat-value text-gradient">{s.value}</span>
                                    <span className="stat-label">{s.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Text */}
                    <div className="about__text">
                        <p className="section-tag">About Me</p>
                        <h2 className="section-title">
                            Design<br /><span>Engineer</span>
                        </h2>
                        <div className="divider" />

                        {/* TODO: Replace with your real bio */}
                        <p className="about__bio">
                        I am a multidisciplinary Frontend Developer and UI/UX Designer dedicated to crafting seamless digital experiences. With a background in AI & Data Science, I combine analytical problem-solving with an eye for minimalist, high-impact design. I specialize in transforming complex wireframes into responsive, high-performance web applications using React, Tailwind CSS, and Figma, ensuring that every pixel serves a purpose for the end user.
                        </p>
                        <p className="about__bio">
                            When I&apos;m not coding, you&apos;ll find me exploring new technologies,
                            contributing to open-source, or enjoying a good book. I&apos;m always open to
                            exciting new projects and collaborations.
                        </p>

                        <div className="about__details">
                            {/* TODO: Fill in your details */}
                            <div className="detail-row">
                                <span className="detail-label">Name</span>
                                <span className="detail-val">RONIT KUMAR</span>
                            </div>
                            <div className="detail-row">
                                <span className="detail-label">Email</span>
                                <span className="detail-val">ronitkumar9582@gmail.com</span>
                            </div>
                            <div className="detail-row">
                                <span className="detail-label">Location</span>
                                <span className="detail-val">DELHI, INDIA</span>
                            </div>
                            <div className="detail-row">
                                <span className="detail-label">Availability</span>
                                <span className="detail-val" style={{ color: 'var(--secondary)' }}>Open to Work ✓</span>
                            </div>
                        </div>

                        <a href="/resume.pdf" className="btn btn-primary" download="Ronit_Resume.pdf">
                            Download Resume
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
