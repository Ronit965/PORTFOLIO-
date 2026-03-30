import { motion } from 'framer-motion'
import {
    SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs,
    SiPython, SiHtml5, SiCss, SiTailwindcss,
    SiMongodb, SiPostgresql, SiGit, SiGithub, SiFigma, SiVite,
} from 'react-icons/si'
import './Skills.css'

const skillCategories = [
    {
        title: 'Languages',
        color: 'purple',
        // TODO: Edit skills to match yours
        skills: [
            { name: 'JavaScript', Icon: SiJavascript },
            { name: 'TypeScript', Icon: SiTypescript },
            { name: 'Python', Icon: SiPython },
            { name: 'HTML5', Icon: SiHtml5 },
            { name: 'CSS3', Icon: SiCss },
        ],
    },
    {
        title: 'Frameworks',
        color: 'teal',
        skills: [
            { name: 'React', Icon: SiReact },
            
            { name: 'Node.js', Icon: SiNodedotjs },
            { name: 'Tailwind', Icon: SiTailwindcss },
            { name: 'Vite', Icon: SiVite },
        ],
    },
    {
        title: 'Tools & DB',
        color: 'purple',
        skills: [
            { name: 'MongoDB', Icon: SiMongodb },
          
            { name: 'Git', Icon: SiGit },
            { name: 'GitHub', Icon: SiGithub },
            { name: 'Figma', Icon: SiFigma },
        ],
    },
]

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
}
const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } },
}

export default function Skills() {
    return (
        <section className="section" id="skills">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="section-tag">What I Work With</p>
                    <h2 className="section-title">My <span>Skills</span></h2>
                    <div className="divider" />
                </motion.div>

                <div className="skills__grid">
                    {skillCategories.map((cat) => (
                        <div key={cat.title} className="skill-category">
                            <h3 className={`skill-category__title skill-category__title--${cat.color}`}>
                                {cat.title}
                            </h3>
                            <motion.div
                                className="skill-badges"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: '-60px' }}
                            >
                                {cat.skills.map(({ name, Icon }) => (
                                    <motion.div
                                        key={name}
                                        className={`skill-badge skill-badge--${cat.color}`}
                                        variants={itemVariants}
                                        whileHover={{ y: -4, scale: 1.05 }}
                                    >
                                        <Icon size={28} />
                                        <span>{name}</span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
