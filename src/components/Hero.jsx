import { motion } from 'framer-motion'
import './Hero.css'

export default function Hero() {
    const handleScroll = (id) => {
        document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className="hero" id="hero">
            {/* Glowing orbs */}
            <div className="orb orb--purple" />
            <div className="orb orb--teal" />

            <div className="container hero__inner">
                <motion.div
                    className="hero__content"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <motion.p
                        className="hero__greeting"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        👋 Hi there, I&apos;m
                    </motion.p>

                    <motion.h1
                        className="hero__name"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35 }}
                    >
                        {/* TODO: Replace with your name */}
                        RONIT <span className="text-gradient">KUMAR</span>
                    </motion.h1>

                    <motion.h2
                        className="hero__title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        {/* TODO: Replace with your role */}
                        Frontend Developer &amp; UI/UX Designer
                    </motion.h2>

                    <motion.p
                        className="hero__bio"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.65 }}
                    >
                        {/* TODO: Replace with your tagline */}
                        I am a multidisciplinary Frontend Developer and UI/UX Designer dedicated to crafting seamless digital experiences. With a background in AI & Data Science, I combine analytical problem-solving with an eye for minimalist, high-impact design. I specialize in transforming complex wireframes into responsive, high-performance web applications using React, Tailwind CSS, and Figma, ensuring that every pixel serves a purpose for the end user.
                    </motion.p>

                    <motion.div
                        className="hero__cta"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        <button className="btn btn-primary" onClick={() => handleScroll('#projects')}>
                            View My Work
                        </button>
                        <button className="btn btn-outline" onClick={() => handleScroll('#contact')}>
                            Get In Touch
                        </button>
                    </motion.div>

                    {/* Social quick links */}
                    <motion.div
                        className="hero__socials"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    >
                        <a href="https://github.com/Ronit965" target="_blank" rel="noreferrer" className="social-dot" aria-label="GitHub">GH</a>
                        <a href="https://www.linkedin.com/in/ronit-kumar-8668b8309/" target="_blank" rel="noreferrer" className="social-dot" aria-label="LinkedIn">LI</a>
                        <a href="https://x.com/ronitkumar9582" target="_blank" rel="noreferrer" className="social-dot" aria-label="Twitter">TW</a>
                    </motion.div>
                </motion.div>

                {/* Avatar / Visual side */}
                <motion.div
                    className="hero__visual"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
                >
                    <div className="avatar-ring">
                        <div className="avatar-placeholder">
                            {/* TODO: Replace with <img src="your-photo.jpg" alt="Your Name" /> */}
                            <span>Your Photo</span>
                        </div>
                    </div>
                    <div className="avatar-badge">
                        <span className="badge-dot" />
                        Available for work
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                onClick={() => handleScroll('#about')}
            >
                <div className="scroll-mouse">
                    <div className="scroll-wheel" />
                </div>
                <span>Scroll down</span>
            </motion.div>
        </section>
    )
}
