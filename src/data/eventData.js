export const eventInfo = {
  en: {
    title: 'EPAM GPO AI Upskilling Day 2026',
    date: 'September 20, 2026',
    location: 'EPAM Office, Minsk (Hybrid)',
    time: '10:00 – 15:30',
    description:
      'A practical internal event focused on adopting Generative AI in software delivery — from integrating AI tools into daily workflows to enforcing quality gates and navigating security and compliance requirements. Sessions combine real-world case studies, live demos, and team discussions to help you measure and grow the impact of AI in your projects.',
  },
  ru: {
    title: 'EPAM GPO День повышения квалификации по ИИ 2026',
    date: '20 сентября 2026',
    location: 'Офис EPAM, Минск (Гибрид)',
    time: '10:00 – 15:30',
    description:
      'Практическое внутреннее мероприятие, посвящённое внедрению генеративного ИИ в разработку ПО — от интеграции AI-инструментов в ежедневные рабочие процессы до контроля качества и требований безопасности. Сессии сочетают реальные кейсы, живые демонстрации и командные обсуждения, помогая измерить и повысить эффективность ИИ в ваших проектах.',
  },
}

export const programItems = [
  {
    time: '10:00 – 10:15',
    en: {
      title: 'Welcome & Agenda Overview',
      description: 'Opening remarks from the GPO leadership team. Goals for the day and housekeeping for hybrid participants.',
    },
    ru: {
      title: 'Приветствие и обзор программы',
      description: 'Вступительное слово руководства GPO. Цели дня и организационные вопросы для гибридных участников.',
    },
    tag: 'Break',
  },
  {
    time: '10:15 – 11:15',
    en: {
      title: 'Keynote: GenAI in the SDLC — Where We Are Today',
      description: 'A frank look at which AI-assisted practices are delivering measurable value across EPAM delivery units and which remain hype. Includes live benchmark data from internal pilots.',
    },
    ru: {
      title: 'Пленарный доклад: ИИ в SDLC — где мы сейчас',
      description: 'Честный взгляд на то, какие практики с использованием ИИ приносят измеримую ценность в командах EPAM, а что остаётся хайпом. Включает живые данные из внутренних пилотов.',
    },
    tag: 'Keynote',
  },
  {
    time: '11:15 – 12:15',
    en: {
      title: 'Workshop: Integrating AI Tools into Your Daily Workflow',
      description: 'Hands-on session covering prompt engineering for code review, test generation, and documentation. Bring a real task from your current project.',
    },
    ru: {
      title: 'Мастер-класс: Интеграция AI-инструментов в ежедневную работу',
      description: 'Практическая сессия по инжинирингу промптов для ревью кода, генерации тестов и документации. Возьмите реальную задачу из вашего проекта.',
    },
    tag: 'Workshop',
  },
  {
    time: '12:15 – 13:00',
    en: {
      title: 'Lunch Break',
      description: 'Catered lunch in the main area. Hybrid attendees free to take a break.',
    },
    ru: {
      title: 'Обеденный перерыв',
      description: 'Обед в основной зоне. Гибридные участники могут сделать перерыв.',
    },
    tag: 'Break',
  },
  {
    time: '13:00 – 15:00',
    en: {
      title: 'Panel: Security, Compliance & Quality Gates for AI-Generated Code',
      description: 'Four practitioners discuss IP risk, SAST integration, acceptable-use policies, and how to set quality thresholds so AI output meets client standards — without slowing delivery.',
    },
    ru: {
      title: 'Панель: Безопасность, соответствие требованиям и контроль качества AI-кода',
      description: 'Четыре практикующих специалиста обсуждают IP-риски, интеграцию SAST, политики допустимого использования и пороги качества для кода, созданного ИИ.',
    },
    tag: 'Panel',
  },
]

export const speakers = [
  {
    name: 'Alina Marchuk',
    role: 'Global Practice Lead, AI Engineering',
    company: 'EPAM Systems',
    bio: {
      en: "Drives EPAM's AI-assisted delivery programme across 30+ accounts. Former principal engineer with 12 years in enterprise software architecture.",
      ru: 'Руководит программой AI-assisted delivery компании EPAM в 30+ аккаунтах. Бывший principal engineer с 12-летним опытом в архитектуре корпоративного ПО.',
    },
    topics: ['GenAI Adoption', 'SDLC', 'Strategy'],
    initials: 'AM',
    color: '#0a6ed1',
    linkedinUrl: 'https://linkedin.com/in/alina-marchuk',
    twitterUrl: 'https://twitter.com/alina_marchuk',
  },
  {
    name: 'Dmitry Volkov',
    role: 'Senior Security Architect',
    company: 'EPAM Systems',
    bio: {
      en: 'Specialises in secure-by-design practices for AI-augmented pipelines. Leads the internal working group on acceptable-use policies for LLM-generated code.',
      ru: 'Специализируется на практиках безопасного проектирования AI-пайплайнов. Возглавляет внутреннюю рабочую группу по политикам допустимого использования LLM-кода.',
    },
    topics: ['AppSec', 'Compliance', 'DevSecOps'],
    initials: 'DV',
    color: '#b45309',
    linkedinUrl: 'https://linkedin.com/in/dmitry-volkov',
    twitterUrl: 'https://twitter.com/dvolkov_sec',
  },
  {
    name: 'Katsiaryna Belaya',
    role: 'Engineering Excellence Coach',
    company: 'EPAM Systems',
    bio: {
      en: 'Helps delivery teams define and measure quality gates for AI-assisted code. Background in test automation and continuous quality at scale.',
      ru: 'Помогает командам разработки определять и измерять контрольные точки качества AI-кода. Опыт в автоматизации тестирования и обеспечении качества на масштабе.',
    },
    topics: ['Quality Gates', 'Test Automation', 'Coaching'],
    initials: 'KB',
    color: '#15803d',
    linkedinUrl: 'https://linkedin.com/in/katsiaryna-belaya',
    twitterUrl: 'https://twitter.com/k_belaya',
  },
  {
    name: 'Pavel Tsishchanka',
    role: 'Staff Software Engineer',
    company: 'EPAM Systems',
    bio: {
      en: "Practitioner and internal speaker on prompt engineering and AI tooling integration. Runs the Minsk AI Guild and contributes to EPAM's internal LLM evaluation framework.",
      ru: 'Практик и внутренний докладчик по инжинирингу промптов и интеграции AI-инструментов. Руководит Минской AI-гильдией и участвует во внутреннем фреймворке оценки LLM.',
    },
    topics: ['Prompt Engineering', 'AI Tooling', 'LLMs'],
    initials: 'PT',
    color: '#6d28d9',
    linkedinUrl: 'https://linkedin.com/in/pavel-tsishchanka',
    twitterUrl: 'https://twitter.com/pavel_tsi',
  },
]

export const faqs = [
  {
    en: {
      question: 'Who is this event intended for?',
      answer:
        'The Upskilling Day is open to all EPAM GPO employees — software engineers, QA engineers, tech leads, delivery managers, and architects. Both in-person attendance at the Minsk office and remote participation via the hybrid stream are supported.',
    },
    ru: {
      question: 'Для кого предназначено это мероприятие?',
      answer:
        'День повышения квалификации открыт для всех сотрудников EPAM GPO — разработчиков, QA-инженеров, технических лидеров, менеджеров и архитекторов. Поддерживается как очное участие в офисе EPAM в Минске, так и удалённое через гибридный поток.',
    },
  },
  {
    en: {
      question: 'Do I need to prepare anything before the workshop?',
      answer:
        "For the hands-on workshop session, bring a concrete task or user story from your current project that you would like to try with AI tooling. Access to an approved AI coding assistant (e.g. EPAM's internal instance) is required — check with your delivery manager if you are unsure whether access is set up.",
    },
    ru: {
      question: 'Нужно ли что-то подготовить перед мастер-классом?',
      answer:
        'Для практической части принесите конкретную задачу или пользовательскую историю из текущего проекта. Необходим доступ к одобренному AI-ассистенту (например, внутреннему экземпляру EPAM) — уточните у своего менеджера, если не уверены в наличии доступа.',
    },
  },
  {
    en: {
      question: 'Will the sessions be recorded?',
      answer:
        'The keynote and panel sessions will be recorded and made available on the internal knowledge portal within five business days. The workshop is not recorded to allow participants to share real project context freely.',
    },
    ru: {
      question: 'Будут ли записаны сессии?',
      answer:
        'Пленарный доклад и панельная дискуссия будут записаны и опубликованы на внутреннем портале знаний в течение пяти рабочих дней. Мастер-класс не записывается, чтобы участники могли свободно делиться реальным контекстом проектов.',
    },
  },
  {
    en: {
      question: 'How do I join the hybrid stream?',
      answer:
        'A Microsoft Teams link will be sent to all registered remote attendees 24 hours before the event. Make sure you register by September 17 to receive the link. In-person capacity at the Minsk office is limited to 60 seats — first-come, first-served.',
    },
    ru: {
      question: 'Как подключиться к гибридному потоку?',
      answer:
        'Ссылка на Microsoft Teams будет отправлена всем зарегистрированным удалённым участникам за 24 часа до мероприятия. Убедитесь, что зарегистрировались до 17 сентября. Очная вместимость ограничена 60 местами — по принципу «первый пришёл — первый обслужен».',
    },
  },
  {
    en: {
      question: 'Can I get CPD or training credit for attending?',
      answer:
        'Yes. Attendance at the full-day programme counts as 5 hours of structured learning under the EPAM internal training framework. Your HR Business Partner can record it in the learning management system upon request, using the event code GPO-AI-2026.',
    },
    ru: {
      question: 'Можно ли получить зачёт за прохождение обучения?',
      answer:
        'Да. Посещение полной программы засчитывается как 5 часов структурированного обучения в рамках внутренней системы EPAM. По запросу ваш HR-бизнес-партнёр может внести это в систему управления обучением с кодом GPO-AI-2026.',
    },
  },
]
