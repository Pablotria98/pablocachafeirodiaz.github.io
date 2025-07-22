
import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '@/data/experience';

type ExperienceSectionProps = {
  items?: typeof experience;
};

export const ExperienceSection: React.FC<ExperienceSectionProps> = React.memo(({ items = experience }) => {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto" aria-label="Professional Experience">
      <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Experience</h2>
      <div className="space-y-6">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border dark:border-gray-700"
            aria-label={`Experience at ${item.company}`}
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{item.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{item.company} 2 {item.from} 13 {item.to}</p>
            <p className="mt-2 text-gray-700 dark:text-gray-200">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
});
