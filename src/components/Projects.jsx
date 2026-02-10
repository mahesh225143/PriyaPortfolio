import { motion } from 'framer-motion'
import './Projects.css'

const Projects = () => {
    const projects = [
        {
            title: 'Code Coverage Excellence',
            client: 'BCBSM (Blue Cross Blue Shield)',
            period: 'Ongoing',
            role: 'Apex Developer',
            desc: 'Achieved 90%+ Apex code coverage across all Salesforce projects, ensuring successful production deployments and meeting enterprise standards for code quality.',
            tags: ['Apex', 'Code Coverage', 'Testing', 'Best Practices']
        },
        {
            title: 'Lightning Web Component Development',
            client: 'BCBSM (Blue Cross Blue Shield)',
            period: 'Ongoing',
            role: 'LWC Developer',
            desc: 'Built 10+ Lightning Web Components including custom dashboards and interactive UIs. Implemented 360-degree view of accounts, contacts, and opportunities enhancing user experience.',
            tags: ['LWC', 'Lightning', 'JavaScript', 'UI/UX']
        },
        {
            title: 'Sales Cloud Automation & Quoting',
            client: 'BCBSM (Blue Cross Blue Shield)',
            period: 'Ongoing',
            role: 'Apex Developer',
            desc: 'Developed 10+ custom Apex solutions for Sales Cloud automation. Built quoting functionality using Omnistudio Data Mappers, Integration Procedures, and Calculation Matrices.',
            tags: ['Apex', 'Omnistudio', 'Sales Cloud', 'Process Automation']
        },
        {
            title: 'Data Migration & Optimization',
            client: 'BCBSM (Blue Cross Blue Shield)',
            period: 'Completed',
            role: 'Data Engineer',
            desc: 'Performed data migration from legacy CRM to Salesforce for 5M+ records using Data Loader and Apex batch jobs. Optimized SOQL queries for efficient bulk operations.',
            tags: ['Data Loader', 'SOQL', 'Batch Apex', 'Migration']
        }
    ]

    return (
        <section id="projects" className="section-padding">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Key Projects
                </motion.h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-card glass"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <div className="project-header">
                                <h3>{project.title}</h3>
                                <span className="client-badge">{project.client}</span>
                            </div>
                            <p className="project-period">{project.period}</p>
                            <p className="project-role"><strong>Role:</strong> {project.role}</p>
                            <p className="project-desc">{project.desc}</p>
                            <div className="project-tags">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="tag">{tag}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
