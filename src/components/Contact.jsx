import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Heart } from 'lucide-react'
import './Contact.css'

const Contact = () => {
    return (
        <footer id="contact" className="contact-section">
            <div className="container">
                <div className="contact-content glass">
                    <motion.div
                        className="contact-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="section-title">Get In Touch</h2>
                        <p>I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                    </motion.div>

                    <div className="contact-details">
                        <motion.a
                            href="mailto:pkishore200029@gmail.com"
                            className="contact-item"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <div className="icon-circle"><Mail size={20} /></div>
                            <span>pkishore200029@gmail.com</span>
                        </motion.a>

                        <motion.div
                            className="contact-item"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="icon-circle"><Phone size={20} /></div>
                            <span>+91 7075546126</span>
                        </motion.div>

                        <motion.div
                            className="contact-item"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="icon-circle"><MapPin size={20} /></div>
                            <span>Hyderabad, India</span>
                        </motion.div>
                    </div>

                    <div className="social-links">
                        <motion.a
                            href="https://www.linkedin.com/in/kishore09/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-btn linkedin-btn"
                            whileHover={{ y: -5 }}
                        >
                            <Linkedin size={24} />
                            <span>Kishore Chandra Peddireddy</span>
                        </motion.a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>
                        © {new Date().getFullYear()} Kishore Chandra Peddireddy. All Rights Reserved. <br />
                        Designed with <Heart size={14} fill="red" color="red" style={{ display: 'inline', verticalAlign: 'middle' }} />
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Contact
