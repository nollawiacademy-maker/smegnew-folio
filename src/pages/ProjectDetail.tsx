import { useParams } from 'react-router-dom';
import { projects } from '@/data/projects';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id || ''));

  if (!project) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <Link to="/" className="text-lg text-gray-300 hover:text-white flex items-center justify-center">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Home
            </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <Link to="/" className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Projects
            </Link>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4">{project.title}</h1>
            <p className="text-xl text-gray-400 mb-8">{project.category}</p>
        </motion.div>

        <motion.div 
            className="mb-12"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            <img src={project.image} alt={project.title} className="w-full h-auto max-h-[60vh] object-cover rounded-lg shadow-2xl" />
        </motion.div>

        <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
        >
            <h2 className="text-3xl font-bold mb-6">About this project</h2>
            <div className="prose prose-invert lg:prose-xl text-gray-300 space-y-4">
                <p>This is a placeholder description for the <strong>{project.title}</strong> project. Here, you would provide a detailed case study of the project, outlining the challenges, the solutions implemented, and the technologies used.</p>
                <p>For example, in the <strong>{project.category}</strong> domain, we tackled complex requirements by leveraging state-of-the-art technology to deliver a robust and scalable solution. The project involved a multi-disciplinary team and a comprehensive project management approach to ensure timely delivery and exceptional quality.</p>
                <p>Key achievements and outcomes would be highlighted here, supported by metrics and client testimonials to demonstrate the project's success and impact.</p>
            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;