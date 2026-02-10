import { motion } from 'framer-motion'
import { FileText, Zap, Target, CheckCircle, Clock } from 'lucide-react'
import './About.css'

const About = () => {
    const achievements = [
        {
            icon: <CheckCircle size={24} />,
            title: 'Code Coverage Excellence',
            desc: 'Achieved 90%+ Apex code coverage across all Salesforce projects ensuring production deployment success.'
        },
        {
            icon: <Zap size={24} />,
            title: 'Lightning Web Components',
            desc: 'Built 10+ custom Lightning Web Components enhancing user experience and platform functionality.'
        },
        {
            icon: <FileText size={24} />,
            title: 'Process Automation',
            desc: 'Developed 10+ custom Apex solutions automating complex Sales Cloud business processes efficiently.'
        },
        {
            icon: <Target size={24} />,
            title: 'Defect Reduction',
            desc: 'Reduced production defects by 35% through robust testing and strong CI/CD quality gates.'
        }
    ]

    return (
        <section id="about" className="section-padding">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    About Me
                </motion.h2>

                <div className="about-content">
                    <motion.div
                        className="about-text glass"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p>
                            <strong>Salesforce Developer with 3+ years of experience</strong> in Salesforce CRM development and customization.
                            Specialized in Sales Cloud implementations, CPQ solutions, Lightning Web Components, and Apex programming.
                            Expert in building scalable enterprise solutions with strong focus on code quality and best practices.
                        </p>
                        <p style={{ marginTop: '1rem' }}>
                            Proficient in full-stack Salesforce development including custom objects, automation, batch processing, and CI/CD deployments.
                            Certified Salesforce professional with proven track record in delivering complex business solutions in Agile environments.
                        </p>
                    </motion.div>

                    <div className="achievements-grid">
                        {achievements.map((item, index) => (
                            <motion.div
                                key={index}
                                className="achievement-card glass"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="icon-box">{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
