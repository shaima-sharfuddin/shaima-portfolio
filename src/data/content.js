/**
 * Section content. Only real information belongs here — no invented clients,
 * metrics, testimonials or certifications.
 *
 * Projects: set `repoUrl` / `liveUrl` once a link exists. An empty value shows a
 * quiet "coming soon" label instead of a broken link. Optional: `liveLabel`
 * (default "Live demo") and `apkUrl` (adds an "Android app" link when set).
 */

export const skillGroups = [
  {
    title: 'Frontend',
    icon: 'layout',
    summary: 'Semantic, responsive interfaces built with modern JavaScript and React.',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js'],
  },
  {
    title: 'Mobile',
    icon: 'mobile',
    summary: 'Cross-platform iOS and Android apps with Expo and utility-first styling.',
    skills: ['React Native', 'Expo', 'NativeWind'],
  },
  {
    title: 'Backend & APIs',
    icon: 'server',
    summary: 'Server-side JavaScript and integrating frontends with REST services.',
    skills: ['Node.js', 'Express.js', 'REST APIs'],
  },
  {
    title: 'Database & Tools',
    icon: 'database',
    summary: 'Working with data stores and the everyday tools of a development team.',
    skills: ['MongoDB', 'MySQL', 'Supabase', 'Git', 'GitHub', 'Postman'],
  },
]

export const projects = [
  {
    title: 'MAZ Business Center',
    type: 'Mobile app · Individual project',
    description:
      'A React Native / Expo mobile application for a business-setup and office-leasing company in Bahrain. Users can sign up with email verification, log in, browse workspace services, request an office and view contracts, bills and invoices.',
    contributions: [
      'UI/UX design and frontend development',
      'REST API integration and authentication',
      'Navigation with stacks and a custom tab bar',
      'Testing and debugging',
    ],
    tech: ['React Native', 'Expo', 'NativeWind', 'React Navigation', 'Axios', 'React Hook Form', 'Zod'],
    repoUrl: 'https://github.com/shaimasharfuddin-mern/maz-app',
    // Walkthrough video (YouTube Unlisted / Loom) — paste the link when it's recorded.
    liveUrl: 'https://youtu.be/4Lv50SpMAfY',
    liveLabel: 'Watch demo',
    // EAS "preview" build page (Android APK install link) — paste it once the build finishes.
    apkUrl: 'https://expo.dev/accounts/shaima_17/projects/maz-app/builds/3e49dae6-fc34-46cc-aaa7-fe9da1aec8a3',
    featured: true,
  },
  {
    title: 'SkillSync',
    type: 'Web app · MERN stack',
    description:
      'A recruitment platform built on the MERN stack, with user authentication, role-based access and recruitment workflows for the people hiring and the people applying.',
    contributions: ['Authentication', 'Role-based access', 'Recruitment workflows'],
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    repoUrl: 'https://github.com/shaima-sharfuddin/skillsync-mern',
    liveUrl: '',
  },
  {
    title: 'NGO Management System',
    type: 'Web app · Full stack',
    description:
      'A full-stack application that helps an NGO organise its work — managing the organisation, its volunteers and the donations it receives in one place.',
    contributions: ['NGO management', 'Volunteer management', 'Donation tracking'],
    tech: ['Full-stack JavaScript', 'REST APIs', 'Database'],
    repoUrl: '',
    liveUrl: '',
  },
  {
    title: 'Portfolio Website',
    type: 'Website · This site',
    description:
      'The site you are reading: a responsive, accessible single-page portfolio built with React and Vite, with reusable components, scroll-aware navigation and motion that respects reduced-motion settings.',
    contributions: ['Component architecture', 'Responsive layout', 'Accessibility and SEO'],
    tech: ['React.js', 'Vite', 'JavaScript', 'CSS3'],
    repoUrl: 'https://github.com/shaima-sharfuddin/shaima-portfolio',
    liveUrl: 'https://shaima-portfolio-self.vercel.app',
  },
]

export const experience = [
  {
    role: 'Machine Learning Intern',
    company: 'Cognitive Solutions',
    period: 'November 2024 – February 2025',
    summary:
      'Worked on a healthcare prediction project, taking it from raw data to an evaluated model.',
    points: [
      'Prepared and cleaned the healthcare dataset during data preprocessing.',
      'Applied feature engineering to select and shape the inputs the model learns from.',
      'Built prediction models and evaluated their performance to compare approaches.',
    ],
  },
]

export const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    school: 'Mangalore Institute of Technology & Engineering',
    period: '2023 – 2025',
    grade: 'CGPA 8.17',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    school: 'Sri Bhuvanendra College',
    period: '2020 – 2023',
    grade: 'CGPA 8.20',
  },
]

export const services = [
  {
    title: 'Responsive Website Development',
    icon: 'layout',
    text: 'Websites that adapt cleanly to phones, tablets and desktops, built with semantic HTML and modern CSS.',
  },
  {
    title: 'React Frontend Development',
    icon: 'code',
    text: 'Component-based React interfaces that are organised, reusable and straightforward to maintain.',
  },
  {
    title: 'Website Redesign',
    icon: 'refresh',
    text: 'Refreshing an existing site with a clearer layout, better readability and a more polished feel.',
  },
  {
    title: 'API Integration',
    icon: 'plug',
    text: 'Connecting your frontend to REST APIs, with loading, empty and error states handled properly.',
  },
  {
    title: 'Mobile UI Development',
    icon: 'mobile',
    text: 'Mobile screens and flows with React Native and Expo for both iOS and Android.',
  },
]
