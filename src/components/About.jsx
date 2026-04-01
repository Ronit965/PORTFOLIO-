import { motion } from 'framer-motion'
import './About.css'

// TODO: Replace these with your real information
const stats = [
    { value: '2+', label: 'Years Experience' },
    { value: '10+', label: 'Projects Done' },
    { value: '5+', label: 'Happy Clients' },
]

export default function About() {
    return (
        <section className="section" id="about">
            <div className="container">
                <motion.div
                    className="about__wrapper"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.7 }}
                >
                    {/* Left column: stat boxes */}
                    <div className="about__stats">
                        {stats.map((s) => (
                            <div key={s.label} className="stat-card card">
                                <span className="stat-value text-gradient">{s.value}</span>
                                <span className="stat-label">{s.label}</span>
                            </div>
                        ))}
                    </div>

                    {/* Right column: text content */}
                    <div className="about__content">
                        <p className="section-tag">About Me</p>
                        <h2 className="section-title">
                            Design<br /><span>Engineer</span>
                        </h2>
                        <div className="divider" />

                        <p className="about__bio">
                            I am a multidisciplinary Frontend Developer and UI/UX Designer dedicated to crafting seamless digital experiences. With a background in AI &amp; Data Science, I combine analytical problem-solving with an eye for minimalist, high-impact design. I specialize in transforming complex wireframes into responsive, high-performance web applications using React, Tailwind CSS, and Figma, ensuring that every pixel serves a purpose for the end user.
                        </p>
                        <p className="about__bio">
                            When I&apos;m not coding, you&apos;ll find me exploring new technologies,
                            contributing to open-source, or enjoying a good book. I&apos;m always open to
                            exciting new projects and collaborations.
                        </p>

                        <a href="/resume.pdf" className="btn btn-primary" download="Ronit_Resume.pdf">
                            Download Resume
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
