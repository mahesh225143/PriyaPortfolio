import { motion } from 'framer-motion'
import './Experience.css'

const Experience = () => {
    const experiences = [
        {
            role: 'Salesforce Developer',
            company: 'Accenture – Hyderabad, India',
            duration: 'September 2022 - Present',
            details: [
                'Developed custom Apex classes, triggers, batch jobs, and scheduled jobs for Sales Cloud automation',
                'Built Lightning Web Components (LWC) for custom dashboards and interactive user experiences',
                'Created 5+ complex Conga templates for PDF generation using Conga Composer',
                'Designed custom objects, fields, validation rules, formula fields, and roll-up summary fields',
                'Developed Process Builder flows, Flow Builder automations reducing manual effort by 40%',
                'Implemented multi-level approval processes for discount and contract approvals',
                'Performed data migration from legacy CRM to Salesforce using Data Loader for 5M+ records',
                'Optimized SOQL queries and Apex code to handle governor limits and bulk data operations',
                'Managed Salesforce deployments using Autorabit across Dev and QA environments',
                'Mentored junior developers on Salesforce best practices and coding standards'
            ]
        }
    ]

    return (
        <section id="experience" className="section-padding">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Professional Experience
                </motion.h2>

                <div className="timeline-container">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="timeline-card glass"
                            style={{ padding: '2rem' }}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <div className="timeline-dot"></div>
                            <div className="timeline-header">
                                <div>
                                    <h3 className="timeline-role">{exp.role}</h3>
                                    <span className="company">{exp.company}</span>
                                </div>
                                <span className="timeline-duration">{exp.duration}</span>
                            </div>
                            <div className="timeline-content">
                                <ul>
                                    {exp.details.map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
