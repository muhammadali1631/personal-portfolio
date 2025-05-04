"use client";

import { motion } from 'framer-motion';
import { Card } from '../ui/card';
import { CodeXml as Html5, FileJson2, Database, Workflow } from 'lucide-react';

const skills = [
  {
    category: "Frontend",
    icon: <Html5 className="h-8 w-8" />,
    items: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "GSAP", "Framer Motion", "TypeScript", ]
  },
  {
    category: "Backend",
    icon: <FileJson2 className="h-8 w-8" />,
    items: ["Node.js", "Express.js", "RESTful APIs"]
  },
  {
    category: "Database",
    icon: <Database className="h-8 w-8" />,
    items: ["MongoDB"]
  },
  {
    category: "Tools & Others",
    icon: <Workflow className="h-8 w-8" />,
    items: ["Git", "Vercel", "Netlify", "Sanity CMS"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">Skills & Expertise</h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{skill.category}</h3>
                  <ul className="space-y-2">
                    {skill.items.map((item) => (
                      <li key={item} className="text-muted-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}