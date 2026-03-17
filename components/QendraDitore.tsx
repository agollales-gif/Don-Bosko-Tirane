import React from 'react';
import { motion, Variants } from 'framer-motion';

// --- KOMPONENTI HERO I PERSONALIZUAR PËR QENDRËN DITORE ---
const QendraDitoreHero: React.FC = () => {
  const drawVariants = (delay: number): Variants => ({
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { delay, duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "loop", repeatDelay: 0.8 }
    }
  });

  return (
    <section className="relative w-full min-h-[100svh] lg:min-h-[85vh] bg-primary-red overflow-hidden flex flex-col lg:flex-row pt-28 lg:pt-0">
      
      {/* 1. TEKSTI */}
      <div className="flex-1 flex flex-col justify-center px-6 lg:px-16 container mx-auto relative z-10 lg:w-1/2">
        <div className="max-w-2xl text-left">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            
            <span className="inline-block py-1.5 px-4 mb-4 lg:mb-6 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white font-semibold uppercase tracking-widest text-[10px] sm:text-xs">
              Shërbimi Social
            </span>
            
            <h1 className="text-[2.75rem] leading-[1.05] sm:text-6xl lg:text-7xl font-extrabold text-white font-plus-jakarta tracking-tight mb-4 lg:mb-6">
              QENDRA <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">DITORE</span>
            </h1>
            
            <p className="text-lg lg:text-2xl text-white/95 max-w-xl font-medium leading-snug lg:leading-relaxed mb-3 lg:mb-4">
              Një Shtëpi larg Shtëpisë
            </p>
            
            <p className="text-sm sm:text-base lg:text-lg text-white/80 max-w-lg font-normal leading-relaxed">
              Në zemër të Tiranës, Qendra Ditore "Don Bosko" shërben si një pikë referimi dhe shprese për fëmijët në nevojë, duke ofruar kujdes, edukim dhe dashuri.
            </p>
            
          </motion.div>
        </div>
      </div>

      {/* 2. SILUETA E ANIMUAR */}
      <div className="relative w-full h-[38vh] min-h-[250px] lg:absolute lg:right-0 lg:top-0 lg:w-1/2 lg:h-full flex items-center justify-center p-6 lg:p-16 pointer-events-none z-0 mt-auto lg:mt-0">
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full max-h-[260px] lg:max-h-[60vh] max-w-[85%] lg:max-w-full text-white opacity-[0.35] lg:opacity-[0.18]" xmlns="http://www.w3.org/2000/svg">
          {/* Shtëpia */}
          <motion.path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" strokeWidth="0.3" strokeLinecap="round" strokeLinejoin="round" variants={drawVariants(0)} initial="hidden" animate="visible" />
          <motion.path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="0.3" strokeLinecap="round" strokeLinejoin="round" variants={drawVariants(0.3)} initial="hidden" animate="visible" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 lg:h-32 z-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
        <div className="absolute inset-0 backdrop-blur-[2px] [mask-image:linear-gradient(to_top,black,transparent)]"></div>
      </div>
    </section>
  );
};

const QendraDitore: React.FC = () => {
    return (
        <div className="flex flex-col">
            <QendraDitoreHero />
            
            <section id="qendra-ditore" className="bg-[#fafaf5] py-32 px-6 overflow-hidden">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                    <div className="space-y-6">
                        <h3 className="text-primary-red text-xs font-black uppercase tracking-[0.3em]">Shërbimi Social</h3>
                        <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-gray-900 font-plus-jakarta leading-tight">
                            Qendra Ditore <span className="text-primary-red">"Don Bosko"</span>
                        </h2>
                        <div className="w-20 h-1.5 bg-primary-red rounded-full"></div>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-2xl font-bold text-gray-900">Një Shtëpi larg Shtëpisë</h4>
                        <p className="text-lg text-gray-600 leading-relaxed font-medium">
                            Në zemër të Tiranës, Qendra Ditore "Don Bosko" shërben si një pikë referimi dhe shprese për fëmijët në nevojë. Ne besojmë se çdo fëmijë meriton një fëmijëri të lumtur, arsimim cilësor dhe një vakt të ngrohtë, pavarësisht vështirësive ekonomike apo sociale.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-xl font-bold text-gray-900">Misioni Tonë</h4>
                        <p className="text-gray-600 leading-relaxed">
                            Misioni ynë është t&apos;u ofrojmë fëmijëve një ambient të sigurt, edukativ dhe mbështetës, ku ata mund të rriten të shëndetshëm dhe të përgatitur për të ardhmen. Ne nuk ofrojmë thjesht shërbime, por ndërtojmë një komunitet të bazuar mbi dashurinë dhe respektin reciprok.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-xl font-bold text-gray-900">Çfarë Ofrojmë?</h4>
                        <div className="space-y-3">
                            {[
                                { title: "Arsimim & Mbështetje", desc: "Ndihmë me detyrat e shtëpisë, kurse plotësuese dhe nxitje drejt edukimit afatgjatë." },
                                { title: "Ushqim i Shëndetshëm", desc: "Sigurojmë vakte ditore të balancuara për t&apos;u garantuar fëmijëve energjinë e duhur." },
                                { title: "Integrim Social", desc: "Kohë cilësore së bashku përmes lojërave, aktiviteteve sportive dhe artit." },
                                { title: "Mbrojtje & Kujdes", desc: "Një ambient ku fëmijët ndihen të mbrojtur dhe të dëgjuar nga stafi ynë i dedikuar." }
                            ].map((service, i) => (
                                <div key={i} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                                    <h5 className="font-bold text-gray-900 mb-2">{service.title}</h5>
                                    <p className="text-sm text-gray-600">{service.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-xl font-bold text-gray-900">Pse është e rëndësishme puna jonë?</h4>
                        <blockquote className="border-l-4 border-primary-red pl-4 italic text-gray-700">
                            "Edukimi është çështje zemre." – Don Bosko
                        </blockquote>
                        <p className="text-gray-600 leading-relaxed">
                            Në qendrën tonë, ne nuk kalojmë thjesht kohën; ne formojmë qytetarët e nesërm. Duke larguar fëmijët nga rreziqet e rrugës dhe duke i ulur në bankat e dijes, ne thyejmë ciklin e varfërisë dhe u japim atyre mjetet për të ndërtuar një jetë më të mirë.
                        </p>
                    </div>

                    {/* Image Gallery Section */}
                    <div className="space-y-6 mt-12">
                        <h4 className="text-2xl font-bold text-gray-900">Aktivitetet Tona</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="relative overflow-hidden rounded-2xl shadow-lg group"
                            >
                                <img
                                    src="/qendra_ditore/qendra ditore foto (1).jpg"
                                    alt="Qendra Ditore Aktivitet 1"
                                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <p className="text-white font-semibold">Sesione Mësimore Interaktive</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="relative overflow-hidden rounded-2xl shadow-lg group"
                            >
                                <img
                                    src="/qendra_ditore/qendra ditore foto (2).jpg"
                                    alt="Qendra Ditore Aktivitet 2"
                                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <p className="text-white font-semibold">Ekspozita Kreative</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Alternating Box-Photo Section */}
                    <div className="space-y-16 mt-20">
                        {/* Box 1 */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100"
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Misioni ynë Edukativ</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Ne jemi të përkushtuar në ofrimin e një edukimi cilësor që zhvillon potencialin e plotë të çdo fëmije. Përmes një approachi të personalizuara, ne sigurojmë që çdo fëmijë të marrë vëmendjen dhe mbështetjen e nevojshme për të shkëlqyer.
                            </p>
                        </motion.div>

                        {/* Photo 1 */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="rounded-3xl overflow-hidden shadow-xl"
                        >
                            <img
                                src="/qendra_ditore/qendra ditore foto (1).jpg"
                                alt="Learning Activities"
                                className="w-full h-80 object-cover"
                            />
                        </motion.div>

                        {/* Box 2 */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100"
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Aktivitete Kreative</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Përveç mësimit akademik, ne organizojmë një varietet aktivitetesh kreative që nxisin imagjinatën dhe talentet artistike të fëmijëve. Nga piktura deri te muzika dhe teatri, çdo fëmijë gjen një mënyrë për të shprehur veten.
                            </p>
                        </motion.div>

                        {/* Photo 2 */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="rounded-3xl overflow-hidden shadow-xl"
                        >
                            <img
                                src="/qendra_ditore/qendra ditore foto (3).jpg"
                                alt="Creative Display"
                                className="w-full h-80 object-cover"
                            />
                        </motion.div>

                        {/* Box 3 */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100"
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Bashkëpunim me Prindërit</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Ne besojmë në fuqinë e bashkëpunimit mes shkollës dhe familjes. Organizojmë takime të rregullta me prindërit dhe u ofrojmë raporte të detajuara mbi progresin e fëmijëve, duke krijuar një partneritet të fortë për suksesin e tyre.
                            </p>
                        </motion.div>
                    </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default QendraDitore;
