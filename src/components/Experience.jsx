import { motion } from 'framer-motion'
import { FiBriefcase, FiMapPin } from 'react-icons/fi'
import './Experience.css'

// TODO: Replace with your real experience
const experiences = [
    {
        id: 1,
        role: 'Design Engineer',
        company: 'Fluxanix',
        location: 'Remote / India',
        period: 'Nov 2025 — March 2026',
        highlights: [
            'Created wireframes, UI layouts, and interactive prototypes using Figma before development.',
            'Converted UI/UX designs into functional web pages using React for the frontend.',
            'Designed user flows and navigation structures to enhance overall product usability.',
        ],
        stack: ['React', 'Vite', 'CSS', 'Figma', 'Motion'],
    },
    {
        id: 2,
        role: 'UI/UX DESIGNER',
        company: 'Penny FS Technologies',
        location: 'Remote, Ireland',
        period: 'Sept 2025 — Nov 2026',
        highlights: [
            'Designed wireframes, user flows, and prototypes using tools like Figma to visualize product ideas.',
            'Ensured accessibility and usability standards while designing interfaces.',
            'Collaborated with developers and product managers to ensure designs were implemented accurately.',
        ],
        stack: ['Figma', 'Motion' ],
    },
    {
        id: 3,
        role: 'Design Engineer',
        company: 'Carissa International',
        location: 'Remote, India',
        period: 'Dec 2024 — Aug 2025',
        highlights: [
            'Designed user-centered interfaces by focusing on usability, accessibility, and intuitive navigation',
            'Conducted competitor analysis and design research to improve product design and user engagement.',
            'Implemented modern UI design trends to create visually appealing and engaging digital products.',
        ],
        stack: ['React', 'CSS', 'Figma'],
    },
]

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Experience() {
    return (
        <section className="section experience" id="experience">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="section-tag">Where I&apos;ve Worked</p>
                    <h2 className="section-title">My <span>Experience</span></h2>
                    <div className="divider" />
                </motion.div>

                <motion.div
                    className="experience__timeline"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                >
                    {experiences.map((exp) => (
                        <motion.article key={exp.id} className="experience__item" variants={itemVariants}>
                            <div className="experience__rail">
                                <div className="experience__dot">
                                    <FiBriefcase size={16} />
                                </div>
                                <div className="experience__line" />
                            </div>

                            <div className="experience__card card">
                                <div className="experience__top">
                                    <div>
                                        <h3 className="experience__role">{exp.role}</h3>
                                        <p className="experience__company">
                                            <span className="text-gradient">{exp.company}</span>
                                        </p>
                                    </div>

                                    <div className="experience__meta">
                                        <span className="experience__period">{exp.period}</span>
                                        <span className="experience__loc"><FiMapPin /> {exp.location}</span>
                                    </div>
                                </div>

                                <ul className="experience__highlights">
                                    {exp.highlights.map((h) => (
                                        <li key={h}>{h}</li>
                                    ))}
                                </ul>

                                <div className="experience__stack">
                                    {exp.stack.map((t) => (
                                        <span key={t} className="experience__tag">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
