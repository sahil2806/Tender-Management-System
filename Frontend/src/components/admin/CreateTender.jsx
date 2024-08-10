import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../Input';
import { tenders } from '../../utils/tenderData';
import { motion } from 'framer-motion';

const CreateTender = () => {
  const { register, handleSubmit, formState: { errors }, setError, clearErrors } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    tenders.push(data);
  };

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const timer = setTimeout(() => {
        clearErrors();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [errors, clearErrors]);

  return (
    <div className="flex flex-col">
      <div className="pt-6">
        <div className="flex-grow flex items-center justify-center">
          <div className="w-full max-w-2xl p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-100">Create a New Tender</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Input
                  label="Item Name:"
                  placeholder="Enter item name"
                  className="bg-gray-800 text-gray-100"
                  {...register('itemName', { required: true })}
                />
                {errors.itemName && <p className="text-red-500 mt-1">Item Name is required.</p>}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Input
                  label="Initial Amount:"
                  type="number"
                  placeholder="Enter initial amount"
                  className="bg-gray-800 text-gray-100"
                  labelClassName="text-white"
                  {...register('initialAmount', {
                    required: true,
                    validate: value => value >= 0 || "Initial Amount must be at least 0"
                  })}
                />
                {errors.initialAmount && <p className="text-red-500 mt-1">{errors.initialAmount.message}</p>}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Input
                  label="Deadline:"
                  type="date"
                  placeholder="Select deadline"
                  className="bg-gray-800 text-gray-100"
                  labelClassName="text-white"
                  {...register('deadline', { required: true })}
                />
                {errors.deadline && <p className="text-red-500 mt-1">Deadline is required.</p>}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-col"
              >
                <label htmlFor="description" className="text-white">Description:</label>
                <textarea
                  id="description"
                  rows="4"
                  className="mt-2 p-3 bg-gray-800 text-gray-100 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  {...register('description', { required: true })}
                ></textarea>
                {errors.description && <p className="text-red-500 mt-1">Description is required.</p>}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Input
                  label="Contact Person:"
                  placeholder="Enter contact person"
                  className="bg-gray-800 text-gray-100"
                  labelClassName="text-white"
                  {...register('contactPerson', { required: true })}
                />
                {errors.contactPerson && <p className="text-red-500 mt-1">Contact Person is required.</p>}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <Input
                  label="Contact Email:"
                  type="email"
                  placeholder="Enter contact email"
                  className="bg-gray-800 text-gray-100"
                  labelClassName="text-white"
                  {...register('contactEmail', { required: true })}
                />
                {errors.contactEmail && <p className="text-red-500 mt-1">Contact Email is required.</p>}
              </motion.div>

              <div className="flex justify-center">
                <motion.button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                >
                  Submit Tender
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTender;
