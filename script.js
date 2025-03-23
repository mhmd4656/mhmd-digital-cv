const translations = {
    ar: {
        name: "محمد المنظور",
        greeting: "مرحبًا، أنا محمد المنظور",
        intro: "طالب جامعي بكلية الآداب شعبة الإنجليزية",
        contact: "معلومات الاتصال",
        experience: "الخبرات",
        skills: "المهارات",
        techSkills: "المهارات التقنية",
        softSkills: "المهارات الشخصية",
        languages: "اللغات",
        education: "التعليم",
        projects: "المشاريع",
        exp1: "تطوير وتنفيذ مجموعة من الأكواد مع تصميم واجهات المواقع",
        exp2: "المساهمة في تطوير الألعاب والتطبيقات بشكل فردي وجماعي",
        exp3: "تصميم الأعمال الفنية الرقمية للـ NFT",
        thanks: "شكرًا على زيارتك للموقع",
        jobTitle: "Software Inventor",
        company: "Freelancer Software Engineer",
        location: "المغرب، فاس، النرجس",
        portfolio: "Portfolio",
        arabic: "العربية: اللغة الأم",
        english: "الإنجليزية: مستوى B1",
        french: "الفرنسية: متوسطة",
        selfLearning: "التعلم الذاتي",
        research: "البحث والتحليل",
        computerSkills: "إتقان الأدوات الحاسوبية",
        university: "Sidi Mohammed Ben Abdellah University",
        universityDesc: "طالب في السنة الأولى - دراسات إنجليزية",
        highSchool: "Alal Al-Fassi High School",
        highSchoolDesc: "دبلوم البكالوريا - علوم الحياة والأرض",
        project1: "موقع شخصي",
        project1Desc: "تصميم وتطوير موقع شخصي يعرض السيرة الذاتية والمهارات.",
        project2: "لعبة تفاعلية",
        project2Desc: "برمجة لعبة باستخدام محرك Godot.",
        downloadCV: "تحميل السيرة الذاتية"
    },
    fr: {
        name: "Mohamed Elmandor",
        greeting: "Bonjour, je suis Mohamed Elmandor",
        intro: "Étudiant en littérature anglaise",
        contact: "Coordonnées",
        experience: "Expériences",
        skills: "Compétences",
        techSkills: "Compétences Techniques",
        softSkills: "Compétences Personnelles",
        languages: "Langues",
        education: "Éducation",
        projects: "Projets",
        exp1: "Développement et implémentation de codes avec conception d'interfaces web",
        exp2: "Contribution au développement de jeux et applications",
        exp3: "Création d'œuvres d'art numériques pour NFT",
        thanks: "Merci pour votre visite",
        jobTitle: "Software Inventor",
        company: "Freelancer Software Engineer",
        location: "Maroc, Fès, Narjis",
        portfolio: "Portfolio",
        arabic: "Arabe: Langue maternelle",
        english: "Anglais: Niveau B1",
        french: "Français: Intermédiaire",
        selfLearning: "Auto-apprentissage",
        research: "Recherche et analyse",
        computerSkills: "Maîtrise des outils informatiques",
        university: "Université Sidi Mohammed Ben Abdellah",
        universityDesc: "Étudiant en première année - Études anglaises",
        highSchool: "Lycée Alal Al-Fassi",
        highSchoolDesc: "Baccalauréat - Sciences de la vie et de la terre",
        project1: "Site personnel",
        project1Desc: "Conception et développement d'un site personnel présentant le CV et les compétences.",
        project2: "Jeu interactif",
        project2Desc: "Programmation d'un jeu en utilisant le moteur Godot.",
        downloadCV: "Télécharger le CV"
    },
    en: {
        name: "Mohamed Elmandor",
        greeting: "Hello, I'm Mohamed Elmandor",
        intro: "University Student in English Literature",
        contact: "Contact Information",
        experience: "Experience",
        skills: "Skills",
        techSkills: "Technical Skills",
        softSkills: "Soft Skills",
        languages: "Languages",
        education: "Education",
        projects: "Projects",
        exp1: "Developed and implemented code collections with web interfaces design",
        exp2: "Contributed to games and apps development",
        exp3: "Created digital artworks for NFTs",
        thanks: "Thank you for visiting",
        jobTitle: "Software Inventor",
        company: "Freelancer Software Engineer",
        location: "Morocco, Fes, Narjis",
        portfolio: "Portfolio",
        arabic: "Arabic: Native",
        english: "English: B1 Level",
        french: "French: Intermediate",
        selfLearning: "Self-learning",
        research: "Research and Analysis",
        computerSkills: "Mastery of Computer Tools",
        university: "Sidi Mohammed Ben Abdellah University",
        universityDesc: "First-year student - English Studies",
        highSchool: "Alal Al-Fassi High School",
        highSchoolDesc: "High School Diploma - Life and Earth Sciences",
        project1: "Personal Website",
        project1Desc: "Designed and developed a personal website showcasing CV and skills.",
        project2: "Interactive Game",
        project2Desc: "Programming a game using the Godot engine.",
        downloadCV: "Download CV"
    }
};

function changeLanguage() {
    const lang = document.querySelector('.lang-select').value;
    document.documentElement.lang = lang;
    document.dir = lang === 'ar' ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        } else {
            console.warn(`Translation key "${key}" not found for language "${lang}"`);
        }
    });
    applyChangeEffect();
}

function loadLanguage() {
    const savedLang = localStorage.getItem('language') || 'ar';
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.querySelector('.lang-select').value = savedLang;
    document.documentElement.setAttribute('data-theme', savedTheme);
    changeLanguage();
}

function saveLanguage() {
    const lang = document.querySelector('.lang-select').value;
    localStorage.setItem('language', lang);
}

function toggleTheme() {
    const html = document.documentElement;
    const newTheme = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    applyChangeEffect();
}

function applyChangeEffect() {
    document.querySelectorAll('[data-translate], h1, h3').forEach(element => {
        element.classList.add('text-pop');
        setTimeout(() => {
            element.classList.remove('text-pop');
        }, 400);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadLanguage();

    document.querySelector('.lang-select').addEventListener('change', () => {
        changeLanguage();
        saveLanguage();
    });

    // Add theme toggle button to header
    const themeButton = document.createElement('button');
    themeButton.className = 'theme-toggle';
    themeButton.innerHTML = `<i class="fas fa-moon"></i>`;
    themeButton.onclick = toggleTheme;
    document.querySelector('.header-controls').prepend(themeButton);

    // Add click animation to cards
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            card.style.transform = 'scale(0.95)';
            setTimeout(() => {
                card.style.transform = 'scale(1)';
            }, 200);
        });
    });
});