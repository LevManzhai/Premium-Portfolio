import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Brand Strategy', level: 95 },
  { name: 'Creative Direction', level: 98 },
  { name: 'UI/UX Design', level: 90 },
  { name: 'Motion Graphics', level: 85 },
  { name: 'Photography', level: 88 },
  { name: 'Art Direction', level: 92 },
];

const timeline = [
  {
    year: '2024',
    title: 'Creative Director',
    company: 'Independent',
    description: 'Leading creative direction for premium brands across digital and print mediums.',
  },
  {
    year: '2020-2024',
    title: 'Senior Art Director',
    company: 'Creative Studio London',
    description: 'Managed a team of designers, overseeing brand campaigns for major international clients.',
  },
  {
    year: '2017-2020',
    title: 'Art Director',
    company: 'Digital Agency Co.',
    description: 'Developed visual strategies for tech startups and established brands.',
  },
  {
    year: '2012-2017',
    title: 'Graphic Designer',
    company: 'Design House',
    description: 'Created visual identities and marketing materials for diverse clientele.',
  },
];

const awards = [
  'Design Excellence Award 2023',
  'Best Brand Identity - Creative Awards 2022',
  'Digital Campaign of the Year 2021',
  'Featured in Design Magazine 2020',
];

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 bg-white dark:bg-navy-900">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-navy-900 dark:text-white mb-6">
                About Me
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                With over 12 years of experience in creative direction, I specialize in crafting
                visual narratives that resonate with audiences and elevate brands. My approach
                combines strategic thinking with artistic vision to create memorable experiences.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Based in London, I work with clients worldwide to transform their visions into
                compelling visual stories. From brand identities to digital campaigns, each project
                is an opportunity to push creative boundaries.
              </p>
              <div className="flex gap-4">
                <a
                  href="/contact"
                  className="inline-block px-8 py-3 bg-gold-400 text-navy-900 font-semibold rounded-full hover:bg-gold-500 transition-all"
                >
                  Get In Touch
                </a>
                <a
                  href="/download"
                  className="inline-block px-8 py-3 border-2 border-navy-900 dark:border-white text-navy-900 dark:text-white font-semibold rounded-full hover:bg-navy-900 hover:text-white dark:hover:bg-white dark:hover:text-navy-900 transition-all"
                >
                  Download CV
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-w-4 aspect-h-5 rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=750&fit=crop"
                  alt="Alex Turner"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gold-400/20 rounded-lg -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-900 dark:text-white mb-4">
              Skills & Expertise
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Core competencies developed over years of creative work
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-2 flex justify-between">
                  <span className="font-medium text-navy-900 dark:text-white">{skill.name}</span>
                  <span className="text-gold-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-gold-400 to-yellow-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-900 dark:text-white mb-4">
              Experience
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Professional journey through the creative industry
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8 pb-12 border-l-2 border-gold-400 last:pb-0"
              >
                <div className="absolute left-0 top-0 w-4 h-4 bg-gold-400 rounded-full transform -translate-x-[9px]" />
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                  <span className="text-gold-400 font-bold text-sm">{item.year}</span>
                  <h3 className="font-serif text-2xl font-bold text-navy-900 dark:text-white mt-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 font-medium mb-2">
                    {item.company}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-900 dark:text-white mb-4">
              Awards & Recognition
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gold-400 to-yellow-500 p-6 rounded-lg shadow-lg text-center"
              >
                <p className="text-navy-900 font-semibold text-lg">{award}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
