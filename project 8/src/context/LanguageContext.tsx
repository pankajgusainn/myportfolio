import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'jp';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.cv': 'CV',
    
    // Hero Section
    'hero.title': 'Cloud and DevOps Engineer',
    'hero.subtitle': 'Automating infrastructure, optimizing deployments, and building scalable cloud solutions',
    'hero.cta.contact': 'Get in Touch',
    'hero.cta.projects': 'View Projects',
    
    // Skills Section
    'skills.technical.title': 'Technical Skills',
    'skills.languages.title': 'Language Skills',
    'skills.cv.title': 'Download My CV',
    'skills.cv.subtitle': 'Get a detailed overview of my experience and qualifications',
    'skills.cv.button': 'View Resume',
    
    // Categories
    'category.cloud': 'Cloud Platforms',
    'category.cicd': 'CI/CD',
    'category.monitoring': 'Monitoring',
    'category.security': 'Security',
    
    // Technology Focus Section
    'tech.section.title': 'Technology Focus',
    'tech.cloud.title': 'Cloud Infrastructure',
    'tech.cloud.description': 'Building scalable cloud solutions',
    'tech.devops.title': 'DevOps Practices',
    'tech.devops.description': 'Automating deployment pipelines',
    'tech.monitoring.title': 'Monitoring & Observability',
    'tech.monitoring.description': 'Real-time system insights',
    'tech.security.title': 'Security & Compliance',
    'tech.security.description': 'Protecting cloud infrastructure',
    
    // Projects
    'projects.title': 'Featured Projects',
    'projects.viewCode': 'View Code',
    'projects.viewDemo': 'View Demo',
    
    // Contact
    'contact.title': 'Get in Touch',
    'contact.info': 'Contact Information',
  },
  jp: {
    // Navigation
    'nav.about': '概要',
    'nav.skills': 'スキル',
    'nav.projects': 'プロジェクト',
    'nav.contact': '連絡先',
    'nav.cv': '履歴書',
    
    // Hero Section
    'hero.title': 'クラウド・DevOpsエンジニア',
    'hero.subtitle': 'インフラの自動化、デプロイメントの最適化、スケーラブルなクラウドソリューションの構築',
    'hero.cta.contact': 'お問い合わせ',
    'hero.cta.projects': 'プロジェクト一覧',
    
    // Skills Section
    'skills.technical.title': '技術スキル',
    'skills.languages.title': '言語スキル',
    'skills.cv.title': '履歴書のダウンロード',
    'skills.cv.subtitle': '経験と資格の詳細な概要をご覧ください',
    'skills.cv.button': '履歴書を見る',
    
    // Categories
    'category.cloud': 'クラウドプラットフォーム',
    'category.cicd': 'CI/CD',
    'category.monitoring': 'モニタリング',
    'category.security': 'セキュリティ',
    
    // Technology Focus Section
    'tech.section.title': '技術フォーカス',
    'tech.cloud.title': 'クラウドインフラ',
    'tech.cloud.description': 'スケーラブルなクラウドソリューションの構築',
    'tech.devops.title': 'DevOpsプラクティス',
    'tech.devops.description': 'デプロイメントパイプラインの自動化',
    'tech.monitoring.title': 'モニタリング & 可観測性',
    'tech.monitoring.description': 'リアルタイムシステム分析',
    'tech.security.title': 'セキュリティ & コンプライアンス',
    'tech.security.description': 'クラウドインフラの保護',
    
    // Projects
    'projects.title': '主要プロジェクト',
    'projects.viewCode': 'コードを見る',
    'projects.viewDemo': 'デモを見る',
    
    // Contact
    'contact.title': 'お問い合わせ',
    'contact.info': '連絡先情報',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}