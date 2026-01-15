import { motion } from 'framer-motion';
import { useState } from 'react';
import { Toaster, toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
        toast.error('Please fill in all fields.');
        return;
    }
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    toast.success('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-black text-white min-h-screen pt-24">
       <Toaster richColors position="top-center" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-center mb-4">Get In Touch</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto text-center mb-12">Have a project in mind or just want to say hello? I'd love to hear from you.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
              <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-gray-400 focus:outline-none transition-colors" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-gray-400 focus:outline-none transition-colors" placeholder="Your Email" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea name="message" id="message" rows={5} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-gray-400 focus:outline-none transition-colors" placeholder="Your Message"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors duration-300 transform hover:scale-105">Send Message</button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;