/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const TenderCard = ({ tender }) => {
  const personInfo = useSelector((state) => state.auth.userData.data.data);

  return (
    <motion.div
      className="p-5 bg-gray-800 shadow-lg w-5/6 mx-auto rounded-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-900"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold text-gray-100 transition-colors duration-300 hover:text-blue-400">
          {tender.name}
        </h3>
        {personInfo === 'Admin' ? (
          <Link
            to={`/tender/${tender.id}`}
            className="text-blue-400 text-sm font-semibold transition-transform duration-300 hover:scale-105"
          >
            View Details
          </Link>
        ) : (
          <Link
            className="text-blue-400 text-sm font-semibold transition-transform duration-300 hover:scale-105"
            to={`/bid-tender/${tender.id}`}
          >
            Bid Tender
          </Link>
        )}
      </div>
      <p className="mt-2 text-gray-300">{tender.description}</p>
      <div className="flex justify-between items-center mt-4">
        <p className="text-gray-400 text-sm">
          Bidding Amount:{' '}
          <span className="font-semibold text-gray-200">${tender.biddingAmount}</span>
        </p>
        <p className="text-gray-400 text-sm">
          Deadline:{' '}
          <span className="font-semibold text-gray-200">{tender.deadline}</span>
        </p>
      </div>
    </motion.div>
  );
};

export default TenderCard;
