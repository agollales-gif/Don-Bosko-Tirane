
import React from 'react';
import { Translation, Language } from './types';

export const COLORS = {
  primaryRed: '#9c252d',
  deepForestGreen: '#013220',
};

export interface NavItem {
  label: string;
  href: string;
  subItems?: { label: string; href: string }[];
}

export const GET_NAV_STRUCTURE = (t: Translation): NavItem[] => [
  { label: t.navHome, href: "/" },
  { 
    label: t.navSchools, 
    href: "/shkolla",
    subItems: [
      { label: "Shkolla Fillore", href: "/shkolla/fillore" },
      { label: "Shkolla 9-Vjeçare", href: "/shkolla/9-vjecare" },
      { label: "Gjimnazi Përgjithshëm", href: "/shkolla/mesme" },
      { label: "Gjimnazi Profesional TIK", href: "/shkolla/profesionale" },
      { label: "Stafi Akademik", href: "/shkolla/staff" }
    ]
  },
  { label: t.navOratori, href: "/oratori" },
  { label: t.navChurch, href: "/famullia" },
  { label: t.navDayCenter, href: "/qendra-ditore" },
  { label: t.navNews, href: "/contact" },
];

export const TRANSLATIONS: Record<Language, Translation> = {
  AL: {
    navHome: "Kreu",
    navSchools: "Shkolla",
    navNews: "KONTAKT",
    navOratori: "Oratori",
    navChurch: "Famullia",
    navDayCenter: "Qendra Ditore",
    navContact: "Kontakt",
    searchPlaceholder: "Kërko në faqe...",
    searchButton: "Kërko",
    heroQuote: "Edukimi është çështje zemre.",
    heroQuoteAuthor: "Shën Gjon Bosko",
    primarySchool: "Fillore",
    middleSchool: "9-vjeçare",
    secondarySchool: "e Mesme",
    requestInfo: "Klikoni këtu për informacion",
    newsTitle: "DITET TONA",
    footerContact: "Na Kontaktoni",
    footerAddress: "Rruga Don Bosko, Tiranë",
    legalRights: "Të gjitha të drejtat e rezervuara",
    vatNumber: "",
  },
  EN: {
    navHome: "Home",
    navSchools: "Schools",
    navNews: "Contact",
    navOratori: "Oratory",
    navChurch: "Parish",
    navDayCenter: "Day Center",
    navContact: "Contact",
    searchPlaceholder: "Search the site...",
    searchButton: "Search",
    heroQuote: "Education is a matter of the heart.",
    heroQuoteAuthor: "St. John Bosco",
    primarySchool: "Primary",
    middleSchool: "Middle School",
    secondarySchool: "Secondary",
    requestInfo: "Click here to request information",
    newsTitle: "LATEST NEWS",
    footerContact: "Contact Us",
    footerAddress: "Don Bosko Street, Tirana",
    legalRights: "All rights reserved",
    vatNumber: "VAT: K12345678L",
  }
};

export const NEWS_ITEMS: Record<Language, any[]> = {
  AL: [
    { id: '1', title: 'MAYFEST 2026: Festimi i Rinisë', author: 'Administratori', date: '15 Maj 2026' },
    { id: '2', title: 'Regjistrimet e Reja 2026-2027', author: 'Zyra Arsimore', date: '10 Maj 2026' },
    { id: '3', title: 'Kampionati i Futbollit Salesian', author: 'Ekipi Sportiv', date: '05 Maj 2026' },
  ],
  EN: [
    { id: '1', title: 'MAYFEST 2026: Celebrating Youth', author: 'Administrator', date: 'May 15, 2026' },
    { id: '2', title: 'New Admissions 2026-2027', author: 'Academic Office', date: 'May 10, 2026' },
    { id: '3', title: 'Salesian Football Championship', author: 'Sports Team', date: 'May 05, 2026' },
  ]
};
