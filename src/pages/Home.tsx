import { useState } from 'react';
import Masonry from 'react-masonry-css';
import { motion } from 'framer-motion';
import { projects, categories } from '@/data/projects';
import { Link } from 'react-router-dom';

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1
};

const Home = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="bg-black text-white min-h-screen">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center my-12"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4">Creative Technologist</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">Senior IT Specialist crafting innovative solutions for complex challenges.</p>
        </motion.div>

        <div className="my-12 flex justify-center items-center gap-2 md:gap-4 flex-wrap">
          {categories.map(category => (
            <button 
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-all duration-300 ${
                activeFilter === category 
                  ? 'bg-white text-black'
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}>
              {category}
            </button>
          ))}
        </div>

        <motion.div layout>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {filteredProjects.map(project => (
              <motion.div 
                key={project.id} 
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="group relative overflow-hidden rounded-lg cursor-pointer mb-4"
              >
                <Link to={`/project/${project.id}`}>
                  <img src={project.image} alt={project.title} className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black bg-opacity-60 transition-opacity duration-500 group-hover:bg-opacity-20">
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="text-2xl font-bold text-white mb-1 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">{project.title}</h3>
                      <p className="text-gray-300 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">{project.category}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </Masonry>
        </motion.div>
      </main>
    </div>
  );
};

export default Home;