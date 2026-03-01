import React from 'react';
import { motion } from 'framer-motion';

const PlaceholderPage: React.FC<{ title: string }> = ({ title }) => {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center p-12 text-center space-y-8">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-32 h-32 bg-primary-red/10 rounded-full flex items-center justify-center text-4xl"
            >
                ✨
            </motion.div>
            <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-gray-900">{title}</h1>
                <p className="text-gray-500 max-w-lg mx-auto font-medium">Kjo faqe është nën ndërtim e sipër. Së shpejti do të gjeni informacion të detajuar këtu.</p>
            </div>
            <button onClick={() => window.history.back()} className="btn-outline">Kthehu Pas</button>
        </div>
    );
};

export default PlaceholderPage;
