import { FiGithub, FiLinkedin, FiTwitter, FiHeart } from 'react-icons/fi'
import './Footer.css'

const socials = [
    { Icon: FiGithub, href: 'https://github.com/Ronit965', label: 'GitHub' },
    { Icon: FiLinkedin, href: 'https://www.linkedin.com/in/ronit-kumar-8668b8309/', label: 'LinkedIn' },
    { Icon: FiTwitter, href: 'https://x.com/ronitkumar9582', label: 'Twitter' },
]

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="footer__line" />
            <div className="container footer__inner">
                <p className="footer__copy">
                    © {year} <span className="text-gradient">Ronit Kumar</span>. {/* TODO: your name */}
                    <FiHeart className="heart-icon" />
                </p>

                <div className="footer__socials">
                    {socials.map(({ Icon, href, label }) => (
                        <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="footer-social">
                            <Icon size={18} />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    )
}
