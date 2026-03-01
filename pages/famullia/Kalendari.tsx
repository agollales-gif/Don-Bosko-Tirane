import React from 'react';
import { motion } from 'framer-motion';

const Kalendari: React.FC = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center space-y-4"
                >
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-gray-900 font-plus-jakarta">
                        Kalendari <span className="text-primary-red">i Muajit</span>
                    </h1>
                    <p className="text-gray-400 font-bold uppercase tracking-[0.3em] text-xs">Ngjarjet dhe Festat</p>
                </motion.div>

                <div className="p-12 md:p-20 bg-white rounded-[64px] border border-slate-100 shadow-sm text-center italic font-medium text-gray-500">
                    Kalendari për muajin e ardhshëm është duke u përpiluar. Ju lutem kthehuni pas pak ditësh për të parë datat kryesore dhe aktivitetet tona.
                </div>
            </section>
        </div>
    );
};

export default Kalendari;
