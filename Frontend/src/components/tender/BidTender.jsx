/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import TenderDetails from '../admin/tenderDetails';
import Input from '../Input';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { tenders } from '../../utils/tenderData';
import { motion } from 'framer-motion';

const BidTender = () => {
  const { id } = useParams();
  const tender = tenders.find((tender) => tender.id === parseInt(id));

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const onSubmit = (data) => {
    if (!tender) {
      setError('Tender not found!');
      setSuccess('');
      return;
    }

    const minBiddingAmount = parseFloat(tender.biddingAmount.replace(/[^0-9.-]+/g, ''));
    const enteredBiddingAmount = parseFloat(data.biddingAmount);

    if (isNaN(enteredBiddingAmount)) {
      setError('Please enter a valid bidding amount.');
      setSuccess('');
      return;
    }
  };

  return (
    <div className="flex flex-col items-center pt-10 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white min-h-screen">
      <TenderDetails />
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-1 bg-gray-800 rounded-xl py-6 px-8 shadow-lg w-full max-w-lg flex flex-col sm:flex-row items-center sm:space-x-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Input
          label=""
          placeholder="Enter your bidding amount"
          type="number"
          name="biddingAmount"
          {...register('biddingAmount', { required: 'Bidding amount is required' })}
          className="flex-1 py-2 px-4 border border-gray-700 rounded-lg bg-gray-700 text-white placeholder-gray-400 mb-4 sm:mb-0 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
        />
        <motion.button
          type="submit"
          className="bg-blue-600 text-lg font-bold text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          whileHover={{ scale: 1.05 }}
        >
          Submit
        </motion.button>
      </motion.form>
      {error && (
        <motion.p
          className="text-red-500 text-sm mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {error}
        </motion.p>
      )}
      {success && (
        <motion.p
          className="text-green-500 text-sm mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {success}
        </motion.p>
      )}
    </div>
  );
};

export default BidTender;
