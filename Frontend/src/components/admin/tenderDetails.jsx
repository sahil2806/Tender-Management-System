import React from 'react';
import { useParams } from 'react-router-dom';
import { tenders } from '../../utils/tenderData';

const TenderDetails = () => {
    const { id } = useParams();
    const tender = tenders.find((tender) => tender.id === parseInt(id));

    if (!tender) {
        return <p className="text-red-600 text-center mt-8">Tender not found!</p>;
    }

    return (
        <div className="bg-gray-900 py-6">
            <div className="flex justify-center px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-3xl mx-auto rounded-xl shadow-lg p-6">
                    <div className="bg-gray-700 rounded-lg p-6 transition-transform transform hover:scale-[1.02] hover:shadow-2xl duration-300 border border-gray-900">
                        <h1 className="text-3xl text-center font-bold mb-4 text-gray-100 hover:text-blue-400 transition-colors duration-300">
                            {tender.name}
                        </h1>
                        <p className="text-gray-100 text-center mb-6 text-lg leading-relaxed">
                            {tender.description}
                        </p>
                        <p className="text-gray-100 mb-4 text-lg">
                            <strong className="text-blue-400">Bidding Amount:</strong> ${tender.biddingAmount}
                        </p>
                        <p className="text-gray-100 mb-4 text-lg">
                            <strong className="text-blue-400">Deadline:</strong> {tender.deadline}
                        </p>
                        <p className="text-gray-100 mb-4 text-lg">
                            <strong className="text-blue-400">Contact Person:</strong> {tender.contactPerson}
                        </p>
                        <p className="text-gray-100 mb-4 text-lg">
                            <strong className="text-blue-400">Contact Email:</strong> {tender.contactEmail}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TenderDetails;
