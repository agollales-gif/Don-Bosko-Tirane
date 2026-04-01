import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { ArrowLeft, Download } from 'lucide-react';

// ─── CONFIG PER LEVEL ────────────────────────────────────────────────────────

const LEVEL_CONFIG: Record<string, {
  label: string;
  badge: string;
  subtitle: string;
  description: string;
  pdfPath: string | null;
  pdfName: string | null;
  sections: { title: string; items: string[] }[];
}> = {
  fillore: {
    label: 'Shkolla Fillore Don Bosko',
    badge: 'Cikli Fillor',
    subtitle: 'Themelet e arsimit cilësor',
    description: 'Programi formativ i Shkollës Fillore Don Bosko për vitin akademik 2025-2026, i bazuar në pedagogjinë saleziane.',
    pdfPath: '/docs/PF Shkolla Fillore Don Bosko 2025-2026 Shtator 2025.pdf',
    pdfName: 'PF Shkolla Fillore Don Bosko 2025-2026.pdf',
    sections: [
      {
        title: 'Identiteti dhe Misioni',
        items: [
          'Shkolla konsiderohet si një "shtëpi që të mikpret" dhe një mjedis që përgatit nxënësin për jetën në dimensionet njerëzore dhe shpirtërore.',
          'Edukimi bazohet në pedagogjinë saleziane të Don Boskos, ku të gjithë punojnë në harmoni, barazi dhe në respekt të plotë për dinjitetin njerëzor.',
          'Jeta shkollore frymëzohet nga normat e bashkëjetesës demokratike dhe nga bashkëpërgjegjësia midis mësuesve, nxënësve dhe prindërve.',
        ],
      },
      {
        title: 'Të Drejtat e Nxënësve',
        items: [
          'Të drejtë për arsimim cilësor dhe informim të qartë mbi rregullat e shkollës.',
          'Vlerësim objektiv dhe transparent — rezultatet e testeve komunikohen brenda 15 ditëve.',
          'Mbrojtje të privatësisë dhe respektim të prejardhjes kulturore apo fetare.',
          'Nuk lejohen më shumë se dy teste me shkrim në të njëjtën ditë.',
        ],
      },
      {
        title: 'Detyrat e Nxënësve',
        items: [
          'Frekuentim i rregullt i mësimit dhe kryerja e detyrave të përditshme.',
          'Respektimi i orareve të hyrjes dhe daljes, paraqitja me uniformë të plotë.',
          'Kujdesi për mjetet shkollore dhe respektimi i personelit dhe bashkëmoshatarëve.',
          'Mospërdorimi i telefonit celular dhe pajisjeve elektronike gjatë orarit mësimor.',
        ],
      },
      {
        title: 'Orari dhe Vonesat',
        items: [
          'Hyrja në shkollë: ora 07:55. Mësimi fillon: ora 08:00.',
          'Nga 08:00–08:10: hyrja lejohet pas Mirëmëngjesit me fletë jeshile.',
          'Pas 08:10: hyrja lejohet vetëm në orën e dytë me fletë portokalli dhe njoftim të familjes.',
          'Gjashtë vonesa në orën e dytë llogariten si një ditë mungesë pa arsye.',
          'Dalja e parakohshme lejohet vetëm me praninë e prindit dhe fletë të verdhë nga sekretaria.',
        ],
      },
      {
        title: 'Uniforma dhe Paraqitja',
        items: [
          'Uniforma është e detyrueshme për të gjithë nxënësit gjatë gjithë orarit shkollor.',
          'Nuk pranohen nxënës pa uniformë ose me veshje me mesazhe fyese.',
          'Ndalohet çdo formë make-up-i, thonj me ngjyra, piercing dhe aksesorë të papërshtatshëm.',
          'Nxënësi që paraqitet pa uniformë dërgohet në shtëpi me njoftim të prindit.',
        ],
      },
    ],
  },

  '9-vjecare': {
    label: 'Shkolla 9-vjeçare Don Bosko',
    badge: 'Cikli 9-vjeçar',
    subtitle: 'Udhëzimi drejt suksesit',
    description: 'Programi formativ i Shkollës 9-vjeçare Don Bosko për vitin akademik 2025-2026.',
    pdfPath: '/docs/PF Shkolla 9-vjecare Don Bosko 2025-2026 Shtator 2025.pdf',
    pdfName: 'PF Shkolla 9-vjecare Don Bosko 2025-2026.pdf',
    sections: [
      {
        title: 'Identiteti dhe Misioni',
        items: [
          'Shkolla bazohet në Sistemin Parandalues të Shën Gjon Boskos: arsye, fe dhe dashamirësi.',
          'Qëllimi është përgatitja e nxënësve si individë të ndjeshëm ndaj vlerave njerëzore.',
          'Mjedisi shkollor është një bashkësi ku nxënësit dhe mësuesit punojnë në harmoni dhe respekt.',
        ],
      },
      {
        title: 'Të Drejtat dhe Detyrat e Nxënësve',
        items: [
          'E drejta për t\'u trajtuar me respekt, pa diskriminim apo dhunë.',
          'Rezultatet e testeve komunikohen brenda 15 ditëve; nuk lejohen mbi dy teste me shkrim në ditë.',
          'Detyrimi i frekuentimit të rregullt, kryerja e detyrave dhe respektimi i personelit.',
          'Kujdesi për mjediset e shkollës dhe mosshkaktimi i dëmeve.',
        ],
      },
      {
        title: 'Orari dhe Vonesat',
        items: [
          'Hyrja: ora 07:55. Mësimi fillon: ora 08:00 — dera e hyrjes mbyllet.',
          'Nga 08:00–08:10: pritet te hyrja deri në fund të Mirëmëngjesit, hyrje me fletë jeshile.',
          'Pas 08:10: hyrje vetëm në orën e dytë me fletë portokalli — sekretaria njofton familjen.',
          'Tre vonesa të njëpasnjëshme: hyrja e katërt kërkon shoqërim nga prindi.',
          'Vonesa pas pushimit (ora 11:00): mbi 5 minuta — fletë blu nga sekretaria.',
          'Gjashtë vonesa në orën e dytë = një ditë mungesë pa arsye.',
        ],
      },
      {
        title: 'Disiplina',
        items: [
          'Disiplina ka qëllim të sigurojë kushtet e nevojshme për mirëvajtjen e shkollës.',
          'Çdo shkelje disiplinore ndikon në sjellje, jo në përfitim akademik.',
          'Masat disiplinore janë proporcionale me shkeljen dhe synojnë riparimin e dëmit.',
          'Drejtoria ka të drejtë të ndërpresë kontratën për sjellje veçanërisht dëmtuese.',
        ],
      },
      {
        title: 'Sjellje të Papranueshme',
        items: [
          'Largimi nga shkolla pa autorizim; dhunë ndaj nxënësve të tjerë.',
          'Pirja e duhanit, cigares elektronike ose vape në ambientet e shkollës.',
          'Përdorimi i telefonit celular gjatë orarit mësimor — konfiskohet dhe i dorëzohet prindit.',
          'Konsumimi i pijeve energjike dhe çamçakëzit në ambientet e shkollës.',
          'Publikimi i fotove të njerëzve ose mjediseve të shkollës pa leje në rrjetet sociale.',
        ],
      },
    ],
  },

  gjimnaz: {
    label: 'Gjimnaz Don Bosko',
    badge: 'Arsimi i Mesëm',
    subtitle: 'Ekselencë dhe formim integral',
    description: 'Programi formativ i Gjimnazit Don Bosko për vitin akademik 2025-2026, i bazuar në traditën saleziane.',
    pdfPath: '/docs/PF Shkolla e Mesme Don Bosko 2025-2026 Shtator 2025.pdf',
    pdfName: 'PF Shkolla e Mesme Don Bosko 2025-2026.pdf',
    sections: [
      {
        title: 'Prezantimi dhe Identiteti',
        items: [
          'Ky Plan Formativ përfaqëson "kartën e identitetit" të Shkollës Saleziane Don Bosko.',
          'Shkolla planifikon hapësira kërkimore për të përgatitur profesionistë të ndjeshëm ndaj vlerave njerëzore.',
          'Qendra Don Bosko vepron në Shqipëri që nga viti 1992, me mbi 1.200 fëmijë dhe të rinj çdo ditë.',
          'Shkolla ofron jo vetëm arsim, por edukim — një projekt kulturor me emrin e humanizmit integral.',
        ],
      },
      {
        title: 'Burimet Materiale',
        items: [
          'Laboratori i fizikës, kimisë dhe shkencave natyrore.',
          'Laborator kompjuterik dhe sallë me videoprojektor (250 vende).',
          'Teatër me 300 vende; sallë kërcimi dhe lojërash.',
          'Fushë futbolli sintetike, fushë volejbolli, fushë basketbolli dhe palestër.',
          'Bibliotekë, mensë dhe sallë takimesh.',
        ],
      },
      {
        title: 'Të Drejtat dhe Detyrat e Nxënësve',
        items: [
          'E drejta për t\'u trajtuar me respekt, pa diskriminim apo dhunë.',
          'Rezultatet e testeve komunikohen brenda 15 ditëve; nuk lejohen mbi dy teste me shkrim në ditë.',
          'Frekuentim i rregullt, kryerja e detyrave dhe respektimi i personelit dhe bashkëmoshatarëve.',
          'Kujdesi për mjediset e shkollës dhe mosshkaktimi i dëmeve.',
        ],
      },
      {
        title: 'Orari dhe Vonesat',
        items: [
          'Mësimi fillon zakonisht ora 08:00 dhe përfundon ora 13:10 (disa klasa deri 13:55).',
          'Vonesat kontrollohen nga koordinatori salezian për të shmangur abuzimet.',
          'Mësuesi kujdestar njofton menjëherë prindërit kur mungesat i afrohen pragut maksimal.',
          'Dalja e parakohshme kërkon praninë e prindit dhe formular të firmosur në sekretari.',
        ],
      },
      {
        title: 'Shërbimet dhe Mbështetja',
        items: [
          'DB COLLEGE: kurse përmirësuese jashtë orarit për nxënësit me mangësi — frekuentimi i detyrueshëm.',
          'Psikolog dhe punonjës social në dispozicion të nxënësve dhe familjeve.',
          'Plane individuale (PEI/PDP) për nxënës me nevoja të veçanta arsimore.',
          'Këshillim karriere dhe orientim drejt arsimit të lartë.',
        ],
      },
      {
        title: 'Organigrama Shkollore',
        items: [
          'Përfaqësuesi Ligjor-Drejtori — garanton frymën saleziane dhe menaxhon shkollën.',
          'Koordinatori Salezian — mbikëqyr aktivitetet edukative dhe respektimin e rregullores.',
          'Koordinatori i procesit kurrikular — koordinon veprimtarinë mësimore dhe dokumentacionin.',
          'Këshilli i Klasës mblidhet të paktën tre herë në vit.',
          'Qeveria e Nxënësve — përfaqëson interesat e nxënësve dhe kontribuon në klimën shkollore.',
        ],
      },
    ],
  },

  profesionale: {
    label: 'Gjimnazi Profesional TIK Don Bosko',
    badge: 'Arsimi Profesional',
    subtitle: 'Teknologji · Inovacion · Karrierë',
    description: 'Programi formativ i Gjimnazit Profesional TIK Don Bosko për vitin akademik 2025-2026.',
    pdfPath: '/docs/PF Shkolla e Mesme Don Bosko 2025-2026 Shtator 2025.pdf',
    pdfName: 'PF Shkolla e Mesme Don Bosko 2025-2026.pdf',
    sections: [
      {
        title: 'Profili Profesional',
        items: [
          'Gjimnazi Profesional TIK përgatit specialistë të teknologjisë së informacionit dhe komunikimit.',
          'Programi kombinon formimin akademik me aftësi praktike profesionale të kërkuara nga tregu.',
          'Nxënësit fitojnë kompetenca në programim, rrjete kompjuterike, dizajn dhe menaxhim sistemesh.',
          'Diplomimi hap rrugën drejt universitetit ose punësimit direkt në sektorin e TIK-ut.',
        ],
      },
      {
        title: 'Burimet Materiale',
        items: [
          'Laborator kompjuterik i pajisur me teknologji të fundit.',
          'Sallë me videoprojektor dhe sistem audio profesional.',
          'Tabela interaktive LIM në klasat e profilit profesional.',
          'Bibliotekë me literaturë teknike dhe burime dixhitale.',
          'Fushë sportive dhe palestër për aktivitete fizike.',
        ],
      },
      {
        title: 'Të Drejtat dhe Detyrat e Nxënësve',
        items: [
          'E drejta për arsimim cilësor dhe akses në teknologjitë e fundit.',
          'Rezultatet e testeve komunikohen brenda 15 ditëve; nuk lejohen mbi dy teste me shkrim në ditë.',
          'Frekuentim i rregullt i laboratorëve dhe orëve praktike.',
          'Respektimi i pajisjeve dhe infrastrukturës teknologjike të shkollës.',
        ],
      },
      {
        title: 'Orari dhe Vonesat',
        items: [
          'Mësimi fillon ora 08:00 dhe përfundon ora 13:10 (disa klasa deri 13:55).',
          'Vonesat kontrollohen nga koordinatori salezian për të shmangur abuzimet.',
          'Mësuesi kujdestar njofton menjëherë prindërit kur mungesat i afrohen pragut maksimal.',
          'Dalja e parakohshme kërkon praninë e prindit dhe formular të firmosur në sekretari.',
        ],
      },
      {
        title: 'Mbështetja Akademike',
        items: [
          'DB COLLEGE: kurse përmirësuese jashtë orarit për nxënësit me mangësi.',
          'Tutorë dhe mentorë për lëndët profesionale TIK.',
          'Psikolog dhe punonjës social në dispozicion të nxënësve dhe familjeve.',
          'Këshillim karriere dhe orientim drejt universitetit ose tregut të punës.',
        ],
      },
    ],
  },
};

// ─── ANIMATION ───────────────────────────────────────────────────────────────

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number,number,number,number], delay },
});

// ─── HERO ─────────────────────────────────────────────────────────────────────

const Hero: React.FC<{ config: typeof LEVEL_CONFIG[string] }> = ({ config }) => (
  <section className="relative w-full min-h-[60vh] lg:min-h-[55vh] bg-primary-red overflow-hidden flex items-center pt-28 lg:pt-0">
    <div className="flex-1 flex flex-col justify-center px-6 lg:px-16 container mx-auto relative z-10">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
        <span className="inline-block py-1.5 px-4 mb-4 lg:mb-6 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white font-semibold uppercase tracking-widest text-[10px] sm:text-xs">
          {config.badge}
        </span>
        <h1 className="text-[2.5rem] leading-[1.05] sm:text-6xl lg:text-7xl font-extrabold text-white font-plus-jakarta tracking-tight mb-4 lg:mb-6">
          PLANI<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">AKADEMIK</span>
        </h1>
        <p className="text-lg lg:text-2xl text-white/95 max-w-xl font-medium leading-snug mb-3">
          {config.subtitle}
        </p>
        <p className="text-sm sm:text-base lg:text-lg text-white/75 max-w-lg font-normal leading-relaxed">
          {config.description}
        </p>
      </motion.div>
    </div>
    <div className="absolute bottom-0 left-0 w-full h-24 lg:h-32 z-20 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
      <div className="absolute inset-0 backdrop-blur-[2px] [mask-image:linear-gradient(to_top,black,transparent)]" />
    </div>
  </section>
);

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

const PlaniAkademik: React.FC = () => {
  const { level } = useParams<{ level: string }>();
  const navigate = useNavigate();
  const config = level ? LEVEL_CONFIG[level] : null;

  if (!level || !config) {
    return <Navigate to="/shkolla/plani-akademik/9-vjecare" replace />;
  }

  return (
    <div className="flex flex-col bg-white">
      <Hero config={config} />

      {/* Content */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="space-y-10">

          {/* Section header */}
          <motion.div {...fadeUp(0)} className="grid md:grid-cols-2 gap-8 items-end border-b border-gray-100 pb-10">
            <div className="space-y-3">
              <p className="text-[#9c252d] text-[10px] font-black uppercase tracking-[0.35em]">Plani Formativ 2025 — 2026</p>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-gray-900 font-plus-jakarta leading-tight">
                {config.label}
              </h2>
              <div className="w-12 h-[3px] bg-[#9c252d] rounded-full" />
            </div>
            {config.pdfPath && (
              <div className="md:text-right">
                <a
                  href={config.pdfPath}
                  download={config.pdfName}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0f172a] text-white text-xs font-black uppercase tracking-widest rounded-xl hover:bg-[#9c252d] transition-colors duration-200"
                >
                  <Download size={14} />
                  Shkarko PDF
                </a>
              </div>
            )}
          </motion.div>

          {/* Sections grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {config.sections.map((section, si) => (
              <motion.div
                key={section.title}
                {...fadeUp(si * 0.08)}
                className="bg-white border border-gray-100 rounded-2xl p-7 hover:border-[#9c252d]/20 hover:shadow-md transition-all duration-200"
              >
                <div className="border-l-4 border-[#9c252d] pl-4 mb-5">
                  <h3 className="text-base font-black uppercase tracking-tight text-gray-900 font-plus-jakarta">
                    {section.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {section.items.map((item, ii) => (
                    <li key={ii} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#9c252d] shrink-0" />
                      <p className="text-sm text-gray-600 leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Back button */}
          <motion.div {...fadeUp(0.2)} className="pt-6">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-gray-400 hover:text-[#0f172a] transition-colors uppercase text-[10px] font-black tracking-widest"
            >
              <ArrowLeft size={14} />
              <span>MBRAPA</span>
            </button>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default PlaniAkademik;
