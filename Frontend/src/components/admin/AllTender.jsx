import React from 'react';
import TenderCard from './TenderCard';
import { tenders } from '../../utils/tenderData';
import { motion } from 'framer-motion';

const AllTenders = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-100">All Tenders</h1>
      <div className="space-y-8">
        {tenders.map((tender) => (
          <motion.div
            key={tender.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 * tenders.indexOf(tender) }}
          >
            <TenderCard tender={tender} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AllTenders;
