import React from 'react';
import { Link } from 'react-router-dom';

const EdukimiFizik: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#fafaf5] py-24 px-6 md:px-12 flex flex-col items-center">
            <div className="max-w-4xl w-full space-y-8">
                <h1 className="text-4xl md:text-5xl font-black text-[#0f172a] uppercase tracking-tight">
                    Ambientet e Edukimit Fizik
                </h1>

                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                    Palestra dhe fushat tona të sportit ofrojmë mjedisin ideal për zhvillimin fizik të nxënësve. Aktivitetet sportive dhe edukimi fizik janë pjesë integrale e formimit tonë shëndetësor.
                </p>

                <div className="aspect-video w-full rounded-[40px] bg-slate-200 flex items-center justify-center border-2 border-dashed border-slate-300">
                    <span className="text-slate-500 font-bold uppercase tracking-widest text-sm">Placeholder për Imazh</span>
                </div>

                <div className="pt-10">
                    <Link
                        to="/shkolla"
                        className="inline-flex items-center px-8 py-4 bg-[#9c252d] text-white font-black uppercase tracking-widest rounded-2xl hover:bg-[#7a1d23] transition-colors shadow-lg"
                    >
                        ← Kthehu mbrapa
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default EdukimiFizik;
