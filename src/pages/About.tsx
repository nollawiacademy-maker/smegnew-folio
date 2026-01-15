import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-center mb-12">About Me</h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <motion.div 
            className="md:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/c3f03978-0432-4b10-bc86-8604ee32ddd9/profile-picture-ni362f4-1768474915090.webp" 
              alt="Smegnew - Senior IT Specialist" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover aspect-square"
            />
          </motion.div>
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-100">Smegnew, Senior IT Specialist</h2>
            <p className="text-lg text-gray-300 mb-6">
              With over a decade of experience in the IT industry, I specialize in designing, implementing, and managing robust and scalable technology solutions. My passion lies at the intersection of innovation and efficiency, where I leverage cutting-edge technology to solve complex business problems.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              My expertise spans across network administration, cybersecurity, cloud computing, and data analytics. I am committed to continuous learning and staying ahead of the technological curve to deliver exceptional results.
            </p>
            <p className="text-lg text-gray-300">
              When I'm not architecting digital solutions, I enjoy exploring the latest trends in AI/ML and contributing to open-source projects.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;