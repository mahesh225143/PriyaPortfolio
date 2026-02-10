import { motion } from 'framer-motion'
import { Download, Mail } from 'lucide-react'
import './Hero.css'

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container">
                <div className="hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="hero-badge">Salesforce Developer</span>
                    </motion.div>

                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Hi, I'm <br />
                        <span className="highlight">Kishore Chandra Peddireddy</span>
                    </motion.h1>

                    <motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        Salesforce Developer with 3+ years of experience in Salesforce CRM development, specializing in Sales Cloud implementations,
                        Lightning Web Components, and Apex programming. Expert in delivering scalable solutions with proven track record in enterprise-level projects.
                    </motion.p>

                    <motion.div
                        className="hero-actions"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <a href="#contact" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            Contact Me <Mail size={18} />
                        </a>
                        <a href="https://www.linkedin.com/in/kishore09/" className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>LinkedIn Profile
                            Download Resume <Download size={18} />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero
