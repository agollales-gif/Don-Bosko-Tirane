
export type Language = 'AL' | 'EN';

export interface Translation {
  navHome: string;
  navSchools: string;
  navNews: string;
  navOratori: string;
  navChurch: string;
  navDayCenter: string;
  navContact: string;
  searchPlaceholder: string;
  searchButton: string;
  heroQuote: string;
  heroQuoteAuthor: string;
  primarySchool: string;
  middleSchool: string;
  secondarySchool: string;
  requestInfo: string;
  newsTitle: string;
  footerContact: string;
  footerAddress: string;
  legalRights: string;
  vatNumber: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  author: string;
}

export interface SchoolCard {
  title: string;
  description: string;
  image: string;
  tag: string;
}
