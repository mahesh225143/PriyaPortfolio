import { motion } from 'framer-motion'
import './Skills.css'

const Skills = () => {
    const skillsData = [
        {
            category: 'Languages',
            items: ['Apex', 'JavaScript', 'SOQL', 'SOSL', 'HTML5', 'CSS3']
        },
        {
            category: 'Salesforce',
            items: ['Apex', 'Triggers', 'Batch Apex', 'LWC', 'Sales Cloud', 'Experience Cloud', 'Flow Builder', 'Reports & Dashboards']
        },
        {
            category: 'Omnistudio & Tools',
            items: ['Data Mappers', 'Integration Procedures', 'Calculation Matrices', 'Omniscripts', 'Flex Cards', 'SFDX', 'VS Code', 'Developer Console']
        },
        {
            category: 'DevOps & Databases',
            items: ['Change Sets', 'ANT', 'Salesforce DX', 'Jenkins', 'GitHub Actions', 'CI/CD Pipelines', 'SOQL Optimization']
        },
        {
            category: 'Additional Tools',
            items: ['Data Loader', 'Workbench', 'Git', 'GitHub', 'AutoRabit', 'Field-Level Security', 'Platform Encryption']
        }
    ]

    return (
        <section id="skills" className="section-padding">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Technical Skills
                </motion.h2>

                <div className="skills-grid">
                    {skillsData.map((skillGroup, index) => (
                        <motion.div
                            key={index}
                            className="skill-category glass"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <h3>{skillGroup.category}</h3>
                            <div className="skill-tags">
                                {skillGroup.items.map((item, i) => (
                                    <span key={i} className="skill-tag">{item}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
