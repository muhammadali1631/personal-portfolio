"use client";

import { motion } from 'framer-motion';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { useState, ChangeEvent, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [__, setStatus] = useState('');

  

  

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setStatus('Failed to send message.');
    }
  }
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto" />
        </motion.div>

        <div className="flex justify-center">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='w-[700px]'
          >
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
              <form className="space-y-4">
                <div>
                  <Input placeholder="Your Name" type="text" name="name" onChange={handleChange} value={formData.name} required/>
                </div>
                <div>
                  <Input  type="email" name="email" placeholder="Email" onChange={handleChange} value={formData.email} required />
                </div>
                
                <div>
                  <Textarea
                    name="message" placeholder="Your Message" onChange={handleChange} value={formData.message} required
                    className="min-h-[150px]"
                  />
                </div>
                <Button onClick={handleSubmit} className="w-full">Send Message</Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}