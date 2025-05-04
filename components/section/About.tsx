"use client";

import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-accent/50 w-full">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">About Me</h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
                alt="Developer working"
                width={600}
                height={400}
                className="object-cover"
              />
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer with Modern Tech Stack
            </h3>
            <p className="text-muted-foreground">
              With extensive experience in web development, I specialize in creating
              responsive and performant web applications using cutting-edge technologies.
              My expertise spans both frontend and backend development, allowing me to
              deliver complete solutions.
            </p>
            <p className="text-muted-foreground">
              I&apos;m particularly passionate about creating intuitive user interfaces and
              optimizing application performance. My experience with React, Next.js,
              and various backend technologies enables me to build scalable solutions
              that meet modern web standards.
            </p>
            <div className="flex gap-4">
              <Button>Download CV</Button>
              <Button variant="outline" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}