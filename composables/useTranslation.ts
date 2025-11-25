import { useState } from '#app'
import { computed } from 'vue'

// Define dictionary structure type
type Dictionary = {
  [key: string]: any
}

// Define the dictionary constant
const DICTIONARY: Dictionary = {
  en: {
    nav: {
      home: 'Home',
      dna: 'DNA',
      works: 'Works',
      contact: 'Contact',
    },
    hero: {
      title: 'CRAFTING\nTHE FUTURE.',
      subtitle: 'Matthieu Frain. Transforming complex problems into fluid interfaces.',
      cta: 'See my work',
    },
    about: {
      title: 'The DNA',
      hacker: {
        title: 'The Hacker',
        desc: 'Reverse engineering school APIs to build better tools. Solving problems by digging deep.',
      },
      builder: {
        title: 'The Builder',
        desc: 'Full-stack experience with GDSI. Building robust enterprise solutions that handle complex data and real-time operations.',
      },
      resilient: {
        title: 'The Resilient',
        desc: 'Overcoming health challenges has sharpened my focus and determination. I don\'t just write code; I persevere until the solution is elegant.',
      },
      pilot: {
        title: 'The AI Pilot',
        desc: 'Leveraging Google IDX & Gemini to amplify productivity and explore new frontiers.',
      },
    },
    works: {
      title: 'Selected Works',
      subtitle: 'A collection of projects where design meets engineering.',
      gdsi: {
        title: 'GDSI Stock Manager',
        desc: 'A comprehensive enterprise stock management solution built with PHP and SQL. Handles complex inventory tracking, reporting, and real-time analytics for large-scale operations.',
        tag: 'Full Stack',
      },
      school: {
        title: 'School Hacker App',
        desc: 'Mobile application developed by reverse engineering school APIs to provide a better user experience.',
        tag: 'Mobile App',
      },
      tv: {
        title: 'AI TV Zap',
        desc: 'Smart TV recommendation system using React and advanced algorithms to personalize content viewing.',
        tag: 'AI & React',
      },
    },
    footer: {
      title: 'LET\'S TALK',
      cta: 'Get in touch',
      copyright: 'Matthieu Frain. Architect & Hacker.',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      dna: 'ADN',
      works: 'Projets',
      contact: 'Contact',
    },
    hero: {
      title: 'FAÇONNER\nLE FUTUR.',
      subtitle: 'Matthieu Frain. Transformer des problèmes complexes en interfaces fluides.',
      cta: 'Voir mes projets',
    },
    about: {
      title: 'L\'ADN',
      hacker: {
        title: 'Le Hacker',
        desc: 'Rétro-ingénierie d\'API scolaires pour créer de meilleurs outils. Résoudre les problèmes en creusant profond.',
      },
      builder: {
        title: 'Le Bâtisseur',
        desc: 'Expérience Full-stack avec GDSI. Création de solutions d\'entreprise robustes gérant des données complexes et des opérations en temps réel.',
      },
      resilient: {
        title: 'Le Résilient',
        desc: 'Surmonter des défis de santé a aiguisé ma concentration et ma détermination. Je ne fais pas que coder ; je persévère jusqu\'à l\'élégance.',
      },
      pilot: {
        title: 'Le Pilote IA',
        desc: 'Exploiter Google IDX & Gemini pour amplifier la productivité et explorer de nouvelles frontières.',
      },
    },
    works: {
      title: 'Projets Sélectionnés',
      subtitle: 'Une collection de projets où le design rencontre l\'ingénierie.',
      gdsi: {
        title: 'Gestionnaire de Stock GDSI',
        desc: 'Solution complète de gestion de stock d\'entreprise construite avec PHP et SQL. Gère le suivi d\'inventaire complexe, le reporting et l\'analyse en temps réel pour les opérations à grande échelle.',
        tag: 'Full Stack',
      },
      school: {
        title: 'App School Hacker',
        desc: 'Application mobile développée par rétro-ingénierie d\'API scolaires pour offrir une meilleure expérience utilisateur.',
        tag: 'App Mobile',
      },
      tv: {
        title: 'AI TV Zap',
        desc: 'Système de recommandation Smart TV utilisant React et des algorithmes avancés pour personnaliser le visionnage.',
        tag: 'IA & React',
      },
    },
    footer: {
      title: 'DISCUTONS',
      cta: 'Me contacter',
      copyright: 'Matthieu Frain. Architecte & Hacker.',
    },
  },
}

export const useTranslation = () => {
  // Use useState for SSR-safe state management
  const locale = useState<string>('locale', () => 'en')

  // Toggle between English and French
  const toggleLocale = () => {
    locale.value = locale.value === 'en' ? 'fr' : 'en'
  }

  // Set a specific locale
  const setLocale = (newLocale: string) => {
    if (newLocale === 'en' || newLocale === 'fr') {
      locale.value = newLocale
    }
  }

  // Computed property to automatically update translations when locale changes
  // Includes fallback logic to prevent 'undefined' errors
  const t = computed(() => {
    const currentDict = DICTIONARY[locale.value] || DICTIONARY['en']
    return currentDict
  })

  return {
    locale,
    toggleLocale,
    setLocale,
    t,
  }
}
