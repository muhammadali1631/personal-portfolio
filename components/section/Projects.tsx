"use client";

import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import project1 from '@/images/project1.png'
import project2 from '@/images/project2.png'

const projects = [
  {
    title: "E-commerce True Buy",
    description: "A full-stack e-commerce solution built with Next.js, Sanity CMS.",
    image: project1,
    tags: ["Next.js", "Sanity CMS", "Tailwind CSS", "Clerk"],
    github: "https://github.com/muhammadali1631/Nextjs_Design_Jam_2024",
    demo: "https://true-buy-live.vercel.app/"
  },
  {
    title: "Admin True Buy",
    description: "Analytics dashboard for True Buy E-commerce platform",
    image: project2,
    tags: ["Next.js", "Tailwind CSS", "Sanity CMS", "Clerk"],
    github: "https://github.com/muhammadali1631/True-Buy-Admin",
    demo: "https://admintrue-buy-live.vercel.app/"
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media metrics with real-time updates.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    tags: ["React", "Express", "Chart.js", "MongoDB"],
    github: "#",
    demo: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-accent/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="relative overflow-hidden h-full hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* <div className="absolute top-0"> */}
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-sm bg-primary/10 text-primary rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
                {/* </div> */}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}