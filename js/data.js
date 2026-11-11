(function (global) {
'use strict';

/* ================= UI strings ================= */
var UI = {
  name: { en: 'Olga Tereshchenko', uk: 'Ольга Терещенко' },
  skip: { en: 'Skip to content', uk: 'Перейти до вмісту' },
  cv: { en: 'Open CV', uk: 'Відкрити CV' },
  cvDownload: { en: 'Download', uk: 'Завантажити' },
  cvClose: { en: 'Close', uk: 'Закрити' },
  home: { en: 'Home', uk: 'Головна' },
  about: { en: 'About', uk: 'Про мене' },
  cases: { en: 'Cases', uk: 'Кейси' },
  speaking: { en: 'Speaking', uk: 'Виступи' },
  skills: { en: 'Skills', uk: 'Навички' },
  experience: { en: 'Experience', uk: 'Досвід' },
  certifications: { en: 'Certifications', uk: 'Сертифікати' },
  certificate: { en: 'Certificate', uk: 'Сертифікат' },
  recommendations: { en: 'Recommendations', uk: 'Рекомендації' },
  recTitle: { en: 'What colleagues say', uk: 'Що кажуть колеги' },
  recOrig: { en: 'Original', uk: 'Оригінал англійською' },
  recView: { en: 'View on LinkedIn', uk: 'Переглянути в LinkedIn' },
  recAll: { en: 'See all recommendations on LinkedIn', uk: 'Усі рекомендації в LinkedIn' },
  contact: { en: 'Contact', uk: 'Контакти' },
  git: { en: 'Let\'s create something extraordinary', uk: 'Створімо щось надзвичайне' },
  gitLead: { en: 'Open to Product Manager and Business Analyst roles', uk: 'Відкрита до ролей Product Manager і Business Analyst.' },
  email: { en: 'Email', uk: 'Email' },
  linkedin: { en: 'Connect on LinkedIn', uk: 'Написати в LinkedIn' },
  loc: { en: 'Bar, Montenegro', uk: 'Бар, Чорногорія' },
  up: { en: 'Scroll up', uk: 'Нагору' },
  hi: { en: 'Hi, I’m Olga', uk: 'Привіт, я Ольга' },
  heroTitle: {
    en: '<strong>Product Manager</strong>',
    uk: '<strong>Product Manager</strong>'
  },
  heroPitch: {
    en: '3+ years of experience driving AI initiatives from Discovery to MVP launch in Healthcare and Legaltech startups. I am certified by Genesis IT Product School and Andrii Mandrika’s Product Metrics & Analytics Course, with practical expertise in market research, product analytics, process coordination, and quality evaluation. I combine a legal background with structured analytical thinking and metric-driven decision-making.',
    uk: 'Понад 3 роки досвіду в AI-ініціативах від Discovery до запуску MVP у стартапах у сферах Healthcare і Legaltech. Маю сертифікати Genesis IT Product School та курсу Product Metrics & Analytics від Андрія Мандріки, практичний досвід у market research, продуктовій аналітиці, координації процесів і оцінці якості. Поєдную юридичну освіту зі структурним аналітичним мисленням і рішеннями на основі метрик.'
  },
  seeCases: { en: 'See cases', uk: 'Дивитися кейси' },
  domains: { en: 'Domains', uk: 'Домени' },
  aboutTitle: { en: 'About me', uk: 'Про мене' },
  focus: { en: 'Focus', uk: 'Фокус' },
  focusText: { en: 'Product discovery, market research, product analytics, hypotheses and prioritization', uk: 'Product discovery, дослідження ринку, продуктова аналітика, гіпотези та пріоритизація' },
  based: { en: 'Based in', uk: 'Локація' },
  outside: { en: 'Outside work', uk: 'Поза роботою' },
  outsideText: { en: 'I sing — usually on stage.', uk: 'Я співаю — зазвичай на сцені.' },
  casesTitle: { en: 'Cases', uk: 'Кейси' },
  all: { en: 'All', uk: 'Усі' },
  genesis: { en: 'Genesis School cases', uk: 'Кейси Genesis School' },
  personal: { en: 'Personal research', uk: 'Власні дослідження' },
  moreCasesTitle: { en: 'More cases', uk: 'Нові кейси' },
  moreCasesSoon: { en: 'are coming soon', uk: 'незабаром' },
  readCase: { en: 'Read case', uk: 'Читати кейс' },
  showing: { en: 'Cases with', uk: 'Кейси з навичкою' },
  clear: { en: 'Clear', uk: 'Скинути' },
  empty: { en: 'Nothing here yet.', uk: 'Поки що порожньо.' },
  noCase: { en: 'not shown in a case yet', uk: 'поки немає в кейсах' },
  speakingTitle: { en: 'Speaking', uk: 'Виступи' },
  speakingSub: { en: 'Talks about career change, courage and adapting to a new field.', uk: 'Виступи про зміну кар’єри, сміливість і адаптацію до нової сфери.' },
  speaker: { en: 'Speaker', uk: 'Спікерка' },
  event: { en: 'Event', uk: 'Подія' },
  skillsTitle: { en: 'Skills', uk: 'Навички' },
  expTitle: { en: 'Experience', uk: 'Досвід' },
  certsTitle: { en: 'Certifications & Achievements', uk: 'Сертифікати та досягнення' },
  allCases: { en: 'All cases', uk: 'Усі кейси' },
  format: { en: 'Format', uk: 'Формат' },
  teamProject: { en: 'Team project', uk: 'Командний проєкт' },
  story: { en: 'Story', uk: 'Зміст' },
  skillsLbl: { en: 'Skills', uk: 'Навички' },
  toolsLbl: { en: 'Tools', uk: 'Інструменти' },
  artifactsLbl: { en: 'Artifacts', uk: 'Артефакти' },
  soon: { en: 'Link coming soon', uk: 'Посилання незабаром' },
  nextCase: { en: 'Next case', uk: 'Наступний кейс' },
  enlarge: { en: 'Click to enlarge', uk: 'Натисніть, щоб збільшити' },
  menu: { en: 'Menu', uk: 'Меню' },
  theme: { en: 'Toggle theme', uk: 'Змінити тему' }
};

/* ================= content ================= */
var SEG = { genesis: 'genesis', personal: 'personal' };

var CASES = [
  {
    id: 'market-research', seg: SEG.genesis, cover: 'tam',
    title: { en: 'Market research: should we launch in the Period Tracker market?', uk: 'Дослідження ринку: чи варто запускатися на ринку Period Tracker?' },
    short: { en: 'Period Tracker market research', uk: 'Дослідження ринку Period Tracker' },
    line: { en: 'A board-level market research document that answers one question: should we launch now, and why?', uk: 'Документ для правління з дослідженням ринку, який відповідає на одне питання: чи запускатися зараз і чому?' },
    detailLead: '',
    sections: [
      { id: 'challenge', h: { en: 'The challenge', uk: 'Задача' }, body: {
        en: '<div class="prose"><p>A company was considering entering the Period Tracker app market and needed a document for its management board that answers one question: <em>should we launch now, and why?</em></p><p>The board set two criteria:</p><ol><li>Can a large company ($100M revenue or $1B valuation) be built in this market?</li><li>How hard is it to beat the #1 player, and what would it take?</li></ol></div>',
        uk: '<div class="prose"><p>Компанія розглядала вихід на ринок застосунків Period Tracker, і їй був потрібен документ для правління, що відповідає на одне питання: <em>чи запускатися зараз і чому?</em></p><p>Правління поставило два критерії:</p><ol><li>Чи можна побудувати на цьому ринку велику компанію ($100M виручки або $1B оцінки)?</li><li>Наскільки складно обійти гравця №1 і що для цього потрібно?</li></ol></div>'
      } },
      { id: 'market', h: { en: 'Market size', uk: 'Розмір ринку' }, body: {
        en: '<div class="stats"><div class="stat"><b>$500M–$1B</b><span>TAM · Global FemTech mobile apps (McKinsey)</span></div><div class="stat"><b>~$165M</b><span>SAM · Period Tracker, Tier-1 West (AppMagic, 2025)</span></div><div class="stat"><b>$5–25M</b><span>SOM · in 3–5 years, 3–15% of SAM</span></div></div>',
        uk: '<div class="stats"><div class="stat"><b>$500M–$1B</b><span>TAM · глобальні FemTech мобільні застосунки (McKinsey)</span></div><div class="stat"><b>~$165M</b><span>SAM · Period Tracker, Tier-1 Захід (AppMagic, 2025)</span></div><div class="stat"><b>$5–25M</b><span>SOM · за 3–5 років, 3–15% SAM</span></div></div>'
      } },
      { id: 'recommendation', h: { en: 'Recommendation', uk: 'Рекомендація' }, body: {
        en: '<div class="verdict"><b>Not recommended</b><p>The Period Tracker market does not meet the $100M ARR criterion within a 3–5-year horizon.</p></div><div class="prose" style="margin-top:20px"><p>Flo took 7–8 years to reach $100M in an empty market. Today 73% of revenue is already captured, downloads are flat, and the realistic SOM is $5–25M.</p><p>The maternity niche is also a no-go: ARR is only $5.3M — viable only as an upsell module.</p></div><div class="cta-row" style="margin-top:24px"><a class="btn btn-primary" href="https://drive.google.com/file/d/1kDzZfH2ivztcTZMSPjcuDMqAHrQb0RFe/view?usp=sharing" target="_blank" rel="noopener noreferrer">Open market research report <span class="arr">↗</span></a></div>',
        uk: '<div class="verdict"><b>Не рекомендовано</b><p>Ринок Period Tracker не відповідає критерію $100M ARR на горизонті 3–5 років.</p></div><div class="prose" style="margin-top:20px"><p>Flo знадобилося 7–8 років, щоб вийти на $100M на порожньому ринку. Сьогодні 73% виручки вже зайнято, завантаження не ростуть, а реалістичний SOM — $5–25M.</p><p>Ніша вагітності теж не підходить: ARR лише $5.3M — це життєздатно тільки як додатковий модуль (upsell).</p></div><div class="cta-row" style="margin-top:24px"><a class="btn btn-primary" href="https://drive.google.com/file/d/1kDzZfH2ivztcTZMSPjcuDMqAHrQb0RFe/view?usp=sharing" target="_blank" rel="noopener noreferrer">Відкрити дослідження ринку <span class="arr">↗</span></a></div>'
      } },
      { id: 'acquisition', h: { en: 'Part 2 — How would a new player acquire users?', uk: 'Частина 2 — Як новому гравцю залучати користувачів?' }, body: {
        en: '<div class="prose"><p>The research continued with a practical question: how would a new player actually acquire users in this market?</p><ol><li><strong>Competitor strategy analysis</strong> — do competitors build their business on paid traffic?</li><li><strong>Acquisition cost estimate</strong> — user acquisition cost (CAC) in the niche.</li><li><strong>Budget analysis</strong> — estimate the marketing spend of the main competitors.</li><li><strong>Marketing plan</strong> — a 12-month plan after launch: main traffic sources, forecast spend, target CAC and its dynamics over the year.</li><li><strong>Ad creatives</strong> — 4–6 creatives to start paid traffic with, each with a rationale.</li></ol></div>__LUNA__<div class="cta-row"><a class="btn btn-primary" href="https://docs.google.com/document/d/14xGDuDGw0pOteNnB7RMZbUfbNuT8CC7Y/edit" target="_blank" rel="noopener noreferrer">Open Part 2 report <span class="arr">↗</span></a><a class="btn btn-primary" href="https://opal-rival-83299506.figma.site/" target="_blank" rel="noopener noreferrer">Try the web quiz funnel prototype <span class="arr">→</span></a></div>',
        uk: '<div class="prose"><p>Дослідження продовжилося практичним питанням: як новому гравцю реально залучати користувачів на цьому ринку?</p><ol><li><strong>Аналіз стратегій конкурентів</strong> — чи будують конкуренти бізнес на платному трафіку?</li><li><strong>Оцінка вартості залучення</strong> — вартість залучення користувача (CAC) у ніші.</li><li><strong>Аналіз бюджетів</strong> — оцінка маркетингових витрат основних конкурентів.</li><li><strong>Маркетинговий план</strong> — план на 12 місяців після запуску: основні джерела трафіку, прогноз витрат, цільовий CAC і його динаміка протягом року.</li><li><strong>Рекламні креативи</strong> — 4–6 креативів для старту платного трафіку, кожен з обґрунтуванням.</li></ol></div>__LUNA__<div class="cta-row"><a class="btn btn-primary" href="https://docs.google.com/document/d/19i2MqLYSBgEWcUQJZk42nO2ZgN-SPBCJ/edit" target="_blank" rel="noopener noreferrer">Відкрити звіт Частини 2 <span class="arr">↗</span></a><a class="btn btn-primary" href="https://opal-rival-83299506.figma.site/" target="_blank" rel="noopener noreferrer">Спробувати прототип веб-квізу <span class="arr">→</span></a></div>'
      } }
    ],
    skills: { en: ['Market research', 'Market sizing (TAM / SAM / SOM)', 'Competitive analysis', 'Business model analysis', 'Acquisition channel analysis', 'CAC / CPI / LTV estimation', 'Marketing budget modeling', 'Go-to-market planning', 'Funnel design', 'Creative strategy'],
              uk: ['Дослідження ринку', 'Оцінка ринку (TAM / SAM / SOM)', 'Конкурентний аналіз', 'Аналіз бізнес-моделей', 'Аналіз каналів залучення', 'Оцінка CAC / CPI / LTV', 'Моделювання маркетингового бюджету', 'Планування go-to-market', 'Дизайн воронки', 'Креативна стратегія'] },
    tools: ['AppMagic', 'SensorTower', 'SimilarWeb', 'Meta Ad Library', 'Google Ads Transparency', 'TikTok Creative Center', 'BigSpy', 'Google Trends', 'Figma'],
    artifacts: []
  },
  {
    id: 'review-analysis', seg: SEG.genesis, cover: 'bars',
    title: { en: 'Why are users unhappy with Email Cleanup? Review analysis and product hypotheses', uk: 'Чому користувачі незадоволені Email Cleanup? Аналіз відгуків і продуктові гіпотези' },
    short: { en: 'Email Cleanup review analysis', uk: 'Аналіз відгуків Email Cleanup' },
    line: { en: '', uk: '' },
    sections: [
      { id: 'challenge', h: { en: 'The challenge', uk: 'Задача' }, body: {
        en: '<div class="prose"><p>“X” is an iPhone app that helps users free up storage: it removes duplicate photos, compresses videos, finds large files, cleans email, and shows battery and memory widgets.</p><p>Users were less satisfied with the <strong>Email Cleanup</strong> feature than with the others. Alongside the analytical research, the team decided to analyze App Store reviews about this feature and generate hypotheses from them.</p><p><strong>Data:</strong> 290 App Store reviews (269 after excluding positive ones).</p></div>',
        uk: '<div class="prose"><p>«X» — застосунок для iPhone, який допомагає звільнити пам’ять: видаляє дублікати фото, стискає відео, знаходить великі файли, чистить пошту й показує віджети батареї та пам’яті.</p><p>Функцією <strong>Email Cleanup</strong> користувачі були задоволені менше, ніж іншими. Паралельно з аналітичним дослідженням команда вирішила проаналізувати відгуки в App Store про цю функцію та сформувати з них гіпотези.</p><p><strong>Дані:</strong> 290 відгуків з App Store (269 після виключення позитивних).</p></div>'
      } },
      { id: 'approach', h: { en: 'Approach', uk: 'Підхід' }, body: {
        en: '<div class="points"><div class="point"><h3>1 · Data collection</h3><p>290 App Store reviews about the feature.</p></div><div class="point"><h3>2 · Classification & visualization</h3><p>AI-assisted categorization of 269 non-positive reviews, then charts.</p></div><div class="point"><h3>3 · Hypotheses</h3><p>Prioritized by impact on the core flow.</p></div></div>',
        uk: '<div class="points"><div class="point"><h3>1 · Збір даних</h3><p>290 відгуків з App Store про функцію.</p></div><div class="point"><h3>2 · Класифікація та візуалізація</h3><p>Категоризація 269 непозитивних відгуків за допомогою AI, потім графіки.</p></div><div class="point"><h3>3 · Гіпотези</h3><p>Пріоритизовані за впливом на основний сценарій.</p></div></div>'
      } },
      { id: 'findings', h: { en: 'What reviews say', uk: 'Що кажуть відгуки' }, body: { en: '__BARS__', uk: '__BARS__' } }
    ],
    skills: { en: ['Qualitative & quantitative review analysis', 'AI-assisted data categorization', 'Hypothesis formulation', 'Prioritization'],
              uk: ['Якісний і кількісний аналіз відгуків', 'Категоризація даних за допомогою AI', 'Формулювання гіпотез', 'Пріоритизація'] },
    tools: ['Claude', 'Excel / Google Sheets'],
    artifacts: [
      { label: { en: 'Read solution', uk: 'Переглянути рішення' }, url: 'https://docs.google.com/spreadsheets/d/1m-12YQSupuNWhXn7LRdKyD4SuP1PNdRV/edit?gid=1637562072#gid=1637562072' }
    ]
  },
  {
    id: 'email-subscription', seg: SEG.genesis, cover: 'type',
    title: { en: 'Email campaign and subscription funnel optimization: key gaps and growth levers', uk: 'Оптимізація email-кампанії та воронки підписки: ключові проблеми й точки зростання' },
    short: { en: 'Email campaign & subscription funnel optimization', uk: 'Оптимізація email-кампанії та воронки підписки' },
    line: { en: '', uk: '' },
    sections: [
      { id: 'challenge', h: { en: 'The challenge', uk: 'Задача' }, body: {
        en: '<div class="prose"><p>An analyst at a product company supports retention work in two areas; results were presented in a final presentation.</p></div><div class="points" style="margin-top:20px;grid-template-columns:repeat(auto-fit,minmax(260px,1fr))"><div class="point"><h3>Part 1 — Which email provider is worth continuing with?</h3><p>The team tested three B2B email service providers (EveryMail, QuickMail, JustSends) on a small user sample: calculate all missing metrics (deliverability, open rate, CTR, CTOR, unsubscribe rate, cost per email and per click, retention, revenue, ROI); decide which provider is best and why; assess how the design of confirmation emails affected performance.</p><img class="part-image" src="assets/images/cases/email-subscription/email-campaign-hero.png" alt="EveryMail leads with the strongest ROI and high revenue" width="1054" height="576" loading="lazy"></div><div class="point"><h3>Part 2 — How much is a user worth, and where is the retention leak?</h3><p>Weekly subscription ($4.99) after a 7-day trial: funnel, net LTV and product hypotheses.</p><img class="part-image" src="assets/images/cases/email-subscription/email-subscription-funnel.png" alt="Subscription funnel retention and trial-to-payment results" width="1054" height="560" loading="lazy"></div></div>',
        uk: '<div class="prose"><p>Аналітик продуктової компанії підтримує роботу з утриманням у двох напрямах; результати представлено у фінальній презентації.</p></div><div class="points" style="margin-top:20px;grid-template-columns:repeat(auto-fit,minmax(260px,1fr))"><div class="point"><h3>Частина 1 — З яким email-провайдером варто працювати далі?</h3><p>Команда протестувала трьох B2B email-провайдерів (EveryMail, QuickMail, JustSends) на невеликій вибірці користувачів: розрахувати всі відсутні метрики (deliverability, open rate, CTR, CTOR, unsubscribe rate, вартість листа й кліку, retention, виручка, ROI); визначити найкращого провайдера й пояснити чому; оцінити, як дизайн листів-підтверджень вплинув на результати.</p><img class="part-image" src="assets/images/cases/email-subscription/email-campaign-hero.png" alt="EveryMail leads with the strongest ROI and high revenue" width="1054" height="576" loading="lazy"></div><div class="point"><h3>Частина 2 — Скільки коштує користувач і де найбільше користувачів відпадає?</h3><p>Тижнева підписка ($4.99) після 7-денного тріалу: воронка, net LTV і продуктові гіпотези.</p><img class="part-image" src="assets/images/cases/email-subscription/email-subscription-funnel.png" alt="Результати воронки підписки та утримання користувачів" width="1054" height="560" loading="lazy"></div></div>'
      } },
      { id: 'hypotheses', h: { en: 'Hypotheses', uk: 'Гіпотези' }, body: {
        en: '<div class="prose"><p>Focus growth on regional pricing, early conversion, and renewal retention.</p><ol><li><strong>Introduce regional pricing for Spanish-speaking regions.</strong> First, test Purchasing Power Parity (PPP) pricing. Spanish-language users convert at 40%, while Spanish-region conversion is 31.6%, suggesting price sensitivity. Adjusted pricing could increase trial-to-paid conversion by 6–8 percentage points and lift regional LTV.</li><li><strong>Personalize onboarding by region.</strong> Behavioral differences across geographies suggest a one-size-fits-all flow underperforms. Tailored value communication and localized social proof could increase overall conversion by 3–5 percentage points.</li><li><strong>Optimize renewal and cancellation flows.</strong> First-to-second purchase retention is 74.4%. Pre-renewal reminders and retention incentives could increase it by 3–5 percentage points, compounding long-term LTV.</li></ol></div>',
        uk: '<div class="prose"><p>Зосередити зростання на регіональному ціноутворенні, ранній конверсії та утриманні під час поновлення підписки.</p><ol><li><strong>Запровадити регіональні ціни для іспаномовних регіонів.</strong> Спершу протестувати ціноутворення за паритетом купівельної спроможності (PPP). Конверсія іспаномовних користувачів становить 40%, тоді як у користувачів з іспаномовних регіонів — 31,6%, що може свідчити про чутливість до ціни. Скоригована ціна може підвищити конверсію з тріалу в оплату на 6–8 відсоткових пунктів і збільшити регіональний LTV.</li><li><strong>Персоналізувати онбординг для кожного регіону.</strong> Відмінності в поведінці користувачів у різних регіонах свідчать, що універсальний сценарій може працювати гірше. Адаптована комунікація цінності та локальний соціальний доказ можуть підвищити загальну конверсію на 3–5 відсоткових пунктів.</li><li><strong>Оптимізувати поновлення підписки та сценарій скасування.</strong> Утримання між першою та другою оплатами становить 74,4%. Нагадування перед поновленням і стимули для продовження підписки можуть підвищити цей показник на 3–5 відсоткових пунктів і поступово збільшити довгостроковий LTV.</li></ol></div>'
      } },
    ],
    skills: { en: ['Email metrics (OR, CTR, CTOR, unsubscribe rate)', 'Cost and ROI analysis', 'Retention analysis', 'Email design analysis', 'LTV calculation', 'Funnel and cohort analysis', 'Segmentation by region and device', 'Revenue forecasting', 'Hypothesis formulation'],
              uk: ['Email-метрики (OR, CTR, CTOR, відписки)', 'Аналіз витрат і ROI', 'Аналіз утримання', 'Аналіз дизайну листів', 'Розрахунок LTV', 'Аналіз воронки та когорт', 'Сегментація за регіоном і пристроєм', 'Прогнозування виручки', 'Гіпотези з очікуваним приростом'] },
    tools: [],
    artifacts: [
      { label: { en: 'Presentation', uk: 'Презентація' }, url: 'https://drive.google.com/file/d/16OAw-Nyr8WtqiXoB4CoyBRNZQ234P3D9/view' },
      { label: { en: 'Read solution', uk: 'Переглянути рішення' }, url: 'https://docs.google.com/spreadsheets/d/1ZW7xevQIL0_REj-LOVj4DBEdWZR3tMjf/edit' }
    ]
  },
  {
    id: 'strava-match', seg: SEG.genesis, cover: 'phone', team: true,
    title: { en: 'Strava.Match: expanding Strava into behavioral partner matching', uk: 'Strava.Match: розширення Strava в пошук партнерів за поведінкою' },
    short: { en: 'Strava.Match', uk: 'Strava.Match' },
    line: { en: '', uk: '' },
    sections: [
      { id: 'challenge', h: { en: 'The challenge', uk: 'Задача' }, body: {
        en: '<div class="prose"><p>Propose an expansion strategy for an existing IT product into an adjacent or entirely new area, and present it to a jury that included C-level leaders from the Genesis ecosystem and partner companies. The team chose <strong>Strava</strong>.</p></div>',
        uk: '<div class="prose"><p>Запропонувати стратегію розширення наявного IT-продукту в суміжну або зовсім нову сферу й представити її журі, до якого входили C-level керівники з екосистеми Genesis і компаній-партнерів. Команда обрала <strong>Strava</strong>.</p></div>'
      } },
      { id: 'idea', h: { en: 'The idea', uk: 'Ідея' }, body: {
        en: '<div class="prose"><p><strong>Strava.Match</strong> matches athletes with training partners based on what they actually do (real pace, time and route from GPS data), not what they say in a profile. Built on three points:</p></div><div class="points" style="margin-top:20px"><div class="point"><h3>Scale without a partner product</h3><p>Strava already has 180M athletes, 50M monthly active users and $415M ARR, but no product that connects people in partner-dependent sports (tennis, padel, pickleball, others).</p></div><div class="point"><h3>Partners keep people training</h3><p>Solo athletes quit far more often than those with a partner (43% vs 6% in the cited research).</p></div><div class="point"><h3>A gap in the market</h3><p>Playtomic, MATCHi, Pickleheads, Tinder / Bumble BFF either cover only court sports, one region or one sport, or match on self-reported profiles without behavioral data.</p></div></div>',
        uk: '<div class="prose"><p><strong>Strava.Match</strong> підбирає спортсменам партнерів для тренувань за тим, що вони реально роблять (темп, час і маршрут з GPS-даних), а не за тим, що написано в профілі. Ідея спирається на три тези:</p></div><div class="points" style="margin-top:20px"><div class="point"><h3>Масштаб без продукту для партнерів</h3><p>Strava вже має 180M спортсменів, 50M активних користувачів на місяць і $415M ARR, але немає продукту, що з’єднує людей у видах спорту, де потрібен партнер (теніс, падел, пікбол та інші).</p></div><div class="point"><h3>Партнер утримує в тренуваннях</h3><p>Ті, хто тренується сам, кидають значно частіше, ніж ті, хто має партнера (43% проти 6% у цитованому дослідженні).</p></div><div class="point"><h3>Прогалина на ринку</h3><p>Playtomic, MATCHi, Pickleheads, Tinder / Bumble BFF або покривають лише кортові види спорту, один регіон чи один вид спорту, або підбирають за анкетою без поведінкових даних.</p></div></div>'
      } },
      { id: 'my-part', h: { en: 'My part', uk: 'Моя частина' }, body: {
        en: '<div class="prose"><ul><li><strong>Product analysis:</strong> Strava’s core user flows and functionality, and which existing features (Clubs, Flyby, Beacon, Segments) can carry the new layer.</li><li><strong>Competitor analysis:</strong> direct and adjacent players, what each does and cannot do, and Strava.Match’s position among them.</li><li><strong>Clickable prototype:</strong> the new-audience flow from first launch and pricing to discovering a match, sending a request, chat, joint activity and rating.</li></ul></div><div class="cta-row" style="margin-top:24px"><a class="btn btn-primary" href="https://www.figma.com/make/FMdeK9bwFecVGaJDwxYBc5/STRAVA.MATCH?p=f&amp;fullscreen=1" target="_blank" rel="noopener noreferrer">Try the interactive prototype <span class="arr">→</span></a></div>',
        uk: '<div class="prose"><ul><li><strong>Аналіз продукту:</strong> основні користувацькі сценарії та функціональність Strava, а також які наявні функції (Clubs, Flyby, Beacon, Segments) можуть нести новий шар.</li><li><strong>Аналіз конкурентів:</strong> прямі й суміжні гравці, що кожен уміє і чого не вміє, та позиція Strava.Match серед них.</li><li><strong>Клікабельний прототип:</strong> сценарій нової аудиторії від першого запуску й ціноутворення до пошуку пари, запиту, чату, спільного тренування та оцінки, а також граничні стани (наявний Premium, холодний старт, безпека й скарга, нагадування про тріал, paywall).</li></ul></div><div class="cta-row" style="margin-top:24px"><a class="btn btn-primary" href="https://www.figma.com/make/FMdeK9bwFecVGaJDwxYBc5/STRAVA.MATCH?p=f&amp;fullscreen=1" target="_blank" rel="noopener noreferrer">Спробувати інтерактивний прототип <span class="arr">→</span></a></div>'
      } }
    ],
    skills: { en: ['User flow analysis', 'Competitive analysis', 'UX prototyping with AI tools', 'Team collaboration'],
              uk: ['Аналіз користувацьких сценаріїв', 'Конкурентний аналіз', 'UX-прототипування з AI-інструментами', 'Командна співпраця'] },
    tools: ['Figma Make'],
    artifacts: []
  }
];

CASES = CASES.filter(function (c) { return c.id !== 'review-analysis'; })
  .concat(CASES.filter(function (c) { return c.id === 'review-analysis'; }));

var REVIEWS = [
  { en: 'Unsupported email provider', uk: 'Непідтримуваний поштовий провайдер', v: 19.7, n: 53 },
  { en: 'Confusing UX', uk: 'Заплутаний UX', v: 11.2 },
  { en: 'Slow or freezing scans', uk: 'Повільне або зависле сканування', v: 10.4 },
  { en: 'Cleanup ineffective', uk: 'Очищення не працює', v: 8.2 },
  { en: 'Unsubscribe failures', uk: 'Збої відписки', v: 7.1 },
  { en: 'Too much manual work', uk: 'Забагато ручної роботи', v: 7.1 }
];

/* Skills summary; `c` = ids of cases where the skill is used (stable ids, not text matching). */
var MR = 'market-research', RA = 'review-analysis', ES = 'email-subscription', SM = 'strava-match';
var SKILLS = [
  { g: { en: 'Research & Strategy', uk: 'Дослідження та стратегія' }, items: [
    { en: 'Market research', uk: 'Дослідження ринку', c: [MR] },
    { en: 'TAM / SAM / SOM', uk: 'TAM / SAM / SOM', c: [MR] },
    { en: 'Competitive analysis', uk: 'Конкурентний аналіз', c: [MR, SM] },
    { en: 'Business model analysis', uk: 'Аналіз бізнес-моделей', c: [MR] }
  ] },
  { g: { en: 'Analytics & Metrics', uk: 'Аналітика та метрики' }, wide: true, items: [
    { en: 'Product analytics', uk: 'Продуктова аналітика', c: [] },
    { en: 'Funnel & cohort analysis', uk: 'Аналіз воронки та когорт', c: [ES] },
    { en: 'LTV / CAC / CPI', uk: 'LTV / CAC / CPI', c: [MR, ES] },
    { en: 'Retention analysis', uk: 'Аналіз утримання', c: [ES] },
    { en: 'Hypothesis formulation & prioritization', uk: 'Формулювання та пріоритизація гіпотез', c: [RA, ES] },
    { en: 'Qualitative & quantitative analysis', uk: 'Якісний і кількісний аналіз', c: [RA] }
  ] },
  { g: { en: 'Product & UX', uk: 'Продукт і UX' }, items: [
    { en: 'User flow analysis', uk: 'Аналіз користувацьких сценаріїв', c: [SM] },
    { en: 'UX prototyping with AI tools', uk: 'UX-прототипування з AI', c: [SM] },
    { en: 'Funnel design', uk: 'Дизайн воронки', c: [MR] }
  ] },
  { g: { en: 'Tools', uk: 'Інструменти' }, tool: true, wide: true, items: [
    { en: 'AppMagic', c: [MR] }, { en: 'SensorTower', c: [MR] }, { en: 'SimilarWeb', c: [MR] }, { en: 'Meta Ad Library', c: [MR] },
    { en: 'Google Ads Transparency', c: [MR] }, { en: 'TikTok Creative Center', c: [MR] }, { en: 'BigSpy', c: [MR] }, { en: 'Google Trends', c: [MR] },
    { en: 'Figma', c: [MR, SM] }, { en: 'Figma Make', c: [MR, SM] }, { en: 'Claude', c: [RA] }, { en: 'Excel / Google Sheets', c: [RA, ES] },
    { en: 'Jira', c: [] }, { en: 'Confluence', c: [] }, { en: 'Linear', c: [] }, { en: 'Notion', c: [] }, { en: 'Miro', c: [] }, { en: 'Lovable', c: [] }
  ] }
];
var POWER_SKILLS = [
  { en: 'Ownership', uk: 'Ownership' },
  { en: 'Leadership & mentoring', uk: 'Лідерство та менторство' },
  { en: 'Meeting facilitation', uk: 'Фасилітація зустрічей' },
  { en: 'Product demo', uk: 'Продуктове демо' }
];

var TALKS = [
  {
    d: '21', m: { en: 'May 2026', uk: 'травня 2026' },
    title: { en: 'Career switch: from the public sector into IT in 1 month. How not to miss your chance to change your life.', uk: 'Кар’єрний світч: з держсектору в IT за 1 місяць. Як не прогавити свій шанс змінити життя.' },
    event: { en: 'Break the Pattern — Google Developer Group Kyiv (GDG Kyiv), Women Techmakers', uk: 'Break the Pattern — Google Developer Group Kyiv (GDG Kyiv), Women Techmakers' },
    desc: { en: 'A personal story of moving into IT and the opportunities we often fail to notice. The talk covers courage as a driver of change, the difficulties that make us stronger, and tools for adapting to a new field.', uk: 'Особиста історія переходу в IT і можливостей, яких ми часто не помічаємо. Про сміливість як рушій змін, труднощі, що роблять нас сильнішими, та інструменти адаптації до нової сфери.' },
  }
];

var JOBS = [
  { when: { en: 'Nov 2024 – Jul 2026', uk: 'лис 2024 – лип 2026' }, role: 'AI Quality Engineer', co: 'Roosh' },
  { when: { en: 'Oct 2022 – Mar 2024', uk: 'жов 2022 – бер 2024' }, role: 'Data Annotation Project Manager', path: { en: 'Promoted from Data Annotator to Project Manager', uk: 'Підвищення з Data Annotator до Project Manager' }, co: 'Mobilunity' },
  { when: { en: 'Sep 2021 – Apr 2022', uk: 'вер 2021 – кві 2022' }, role: 'Data Annotator', path: { en: 'Appointed Assistant Supervisor in recognition of high-quality work', uk: 'Призначена Assistant Supervisor за високу якість роботи' }, co: 'Label Your Data' },
  { when: { en: 'Jul 2019 – Aug 2021', uk: 'лип 2019 – сер 2021' }, role: { en: 'Legal Counsel', uk: 'Юрисконсульт' }, co: { en: 'Department of Land Resources', uk: 'Департамент земельних ресурсів' } }
];

var CERTS = [
  { img: 'assets/images/certificates/cert-genesis.webp', title: { en: 'IT Product School', uk: 'IT Product School' }, org: 'Genesis Academy', date: { en: 'May 2026 · 3 months', uk: 'травень 2026 · 3 місяці' } },
  { title: { en: 'Product Metrics and Analytics', uk: 'Product Metrics and Analytics' }, org: { en: 'Andrii Mandrika’s course', uk: 'Курс Андрія Мандріки' }, date: { en: 'Aug – Oct 2026', uk: 'серп – жовт 2026' } },
  { img: 'assets/images/certificates/cert-diia.webp', title: { en: 'Diia', uk: 'Diia' }, org: { en: '3rd place in the Diia.AI Contest', uk: '3-тє місце у Diia.AI Contest' }, date: { en: 'Dec 2025', uk: 'грудень 2025' } },
  { img: 'assets/images/certificates/cert-kaizen.webp', title: { en: 'Leadership Toolbox course', uk: 'Курс Leadership Toolbox' }, org: 'Kaizen', date: { en: 'Sep – Oct 2024', uk: 'вер – жовт 2024' } }
];

/* Quotes are verbatim from LinkedIn (English originals); names are intentionally not shown.
   TODO: replace `url` with each recommender's own LinkedIn profile link when available. */
var REC_URL = 'https://www.linkedin.com/in/olhatereshchenko/details/recommendations/';
var RECS = [
  {
    role: { en: 'Senior Software Engineer', uk: 'Senior Software Engineer' },
    rel: { en: 'Same team at Roosh', uk: 'Одна команда в Roosh' },
    when: { en: 'Nov 2026', uk: 'листопад 2026' },
    text: 'I worked with Olga at Roosh and really appreciated having her on the team. Her main responsibilities were QA and annotation, but she was always interested in the bigger picture. She brought valuable domain knowledge to the team, noticed when something didn\u2019t quite match the product requirements, and took the initiative to reach out to stakeholders to clarify things. I especially appreciated how much she cared about the product beyond her assigned tasks. She often came up with ideas for improvements and genuinely thought about how people would use what we were building. Olga was a great colleague to work with, and I\u2019d gladly work with her again!',
    url: REC_URL
  },
  {
    role: { en: 'Growth Director at Mobilunity', uk: 'Growth Director у Mobilunity' },
    rel: { en: 'Senior colleague at Mobilunity', uk: 'Старша колега в Mobilunity' },
    when: { en: 'Feb 2024', uk: 'лютий 2024' },
    text: 'Olha is a very quick learning professional with a strong passion to AI and ML. She is able to take variety of additional tasks, way above her main responsibilities, learn and explore ever-changing AI world and at the same time show perfect quality and speed on the main project. Communication with Olha is always smooth - she is very open to any feedback and speaks up, when needed.',
    url: REC_URL
  }
];
var LI_SVG = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z"/></svg>';

var NAV = ['home', 'experience', 'cases', 'recommendations', 'contact'];

  global.PortfolioData = { UI: UI, SEG: SEG, CASES: CASES, REVIEWS: REVIEWS, SKILLS: SKILLS, POWER_SKILLS: POWER_SKILLS, TALKS: TALKS, JOBS: JOBS, CERTS: CERTS, REC_URL: REC_URL, RECS: RECS, LI_SVG: LI_SVG, NAV: NAV };
})(window);
