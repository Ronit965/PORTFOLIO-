import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import './Projects.css'

// TODO: Replace with your actual projects
const projects = [
    {
        id: 1,
        title: 'APPLE',
        description:
            'Implemented a clean, minimalist UI/UX following Apple’s premium design language and aesthetic standards.',
        tags: ['React', 'Css', 'Figma', 'Motion'],
        github: 'https://github.com/Ronit965/Apple',   // GitHub repo
        live: 'https://apple-website-peach-psi.vercel.app/',   // Live demo
        gradient: 'linear-gradient(135deg, rgba(191,64,191,0.15), rgba(0,245,255,0.05))',
    },
    {
        id: 2,
        title: 'NIKE STORE',
        description:
            'Vite for a fast development server and efficient build process.',
        tags: ['React', 'Tailwind', 'Figma', 'Motin'],
        github: 'https://github.com/Ronit965/Nike-Page',
        live: 'https://nike-page-indol.vercel.app',
        gradient: 'linear-gradient(135deg, rgba(0,245,255,0.1), rgba(191,64,191,0.08))',
    },
    {
        id: 3,
        title: 'HOTEL BOOKING ',
        description:
            'Created a streamlined, multi-step booking checkout flow to reduce friction and minimize cart abandonment during the reservation process'
,
        tags: ['Python', 'Figma', 'Motion'],
        github: null,
        live: 'https://www.figma.com/design/m8WPfV11IL7SVQyiHn1ZHQ/hotel-booking?node-id=0-1&p=f',
        gradient: 'linear-gradient(135deg, rgba(191,64,191,0.12), rgba(139,0,255,0.05))',
    },
]

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.15 } }),
}

export default function Projects() {
    return (
        <section className="section" id="projects">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="section-tag">What I&apos;ve Built</p>
                    <h2 className="section-title">Featured <span>Projects</span></h2>
                    <div className="divider" />
                </motion.div>

                <div className="projects__grid">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            className="project-card"
                            style={{ background: project.gradient }}
                            custom={i}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-60px' }}
                            whileHover={{ y: -8 }}
                        >
                            {/* Top bar */}
                            <div className="project-card__top">
                                <span className="project-number">0{project.id}</span>
                                <div className="project-links">
                                    {project.github && project.github !== '#' ? (
                                        <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                                            <FiGithub size={18} />
                                        </a>
                                    ) : null}
                                    <a href={project.live} target="_blank" rel="noreferrer" aria-label="External Link">
                                        <FiExternalLink size={18} />
                                    </a>
                                </div>
                            </div>

                            <h3 className="project-card__title">{project.title}</h3>
                            <p className="project-card__desc">{project.description}</p>

                            {/* Tags */}
                            <div className="project-tags">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="project-tag">{tag}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View All link */}
                <motion.div
                    className="projects__footer"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    {/* TODO: Replace with your GitHub profile URL */}
                    <a href="https://github.com/Ronit965" target="_blank" rel="noreferrer" className="btn btn-outline">
                        <FiGithub /> View All on GitHub
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
