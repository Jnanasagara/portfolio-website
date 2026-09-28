import type { Experience, Project, Skill, Writing } from './types';

// Starter snapshot. Replace it by publishing records in Frappe and setting FRAPPE_URL.
// Keep this file checked in so a temporary API outage cannot break a static build.
export const projects: Project[] = [
  { title: 'ConsoleStore', slug: 'consolestore', short_description: 'Food ordering from the terminal, built around the way developers actually work.', description: 'A terminal-first platform that brings food and grocery ordering through Swiggy directly into the command line. Users can search for restaurants and stores, browse menus and products, add or remove items from their cart, place orders, and follow their order status without switching to the regular app. It also supports conversational ordering through Claude, letting users simply describe what they want and have the ordering process handled for them. The user stays in control throughout, with the final order details and confirmation shown before anything is placed. The idea was to make everyday ordering possible through a completely different interface while keeping the experience practical and familiar.', year: '', status: 'ACTIVE', technologies: 'Go, MCP, OAuth, CLI, AI agents', live_url: 'https://consolestore.in/', featured: 1, display_order: 1 },
  { title: 'EnderChest', slug: 'enderchest', short_description: 'A self-hosted home for files, with ownership built in.', description: 'A self-hosted personal cloud that turns your own computer into a private space for storing, accessing, and sharing files. Instead of keeping personal files on a traditional cloud provider, EnderChest allows the actual data to remain on hardware you control while still providing the convenience of accessing it through a web interface. Users can upload and organize their files, access them remotely, and invite other people to share the same storage space when needed. The project focuses on giving users the familiar experience of cloud storage while keeping ownership and control of the underlying data and storage with them.', year: '', status: 'IN PROGRESS', technologies: 'Cloud, Docker, Linux, Garage', live_url: 'https://www.enderchest.space/', featured: 1, display_order: 2 },
  { title: 'Host-based data loader', slug: 'host-based-data-loader', short_description: 'Aircraft mission setup, reduced from around 45 minutes to under five.', description: 'Built at Hindustan Aeronautics Limited. Improved a host-based data loading workflow used in aircraft mission setup.', year: '', status: 'FIELD WORK', technologies: 'Systems, Automation, Data workflows', featured: 1, display_order: 3 },
  { title: 'This website', slug: 'this-website', short_description: 'A small publishing system disguised as a portfolio.', description: 'Astro renders static pages from a Frappe content backend. Frappe UI is used sparingly for controls; Anime.js provides the systems interaction.', year: '2026', status: 'OPEN SOURCE', technologies: 'Astro, Frappe, Vue, Anime.js', featured: 0, display_order: 4 },
];

export const experience: Experience[] = [
  { company: 'Hindustan Aeronautics Limited', role: 'Systems / software engineering', location: 'India', description: 'Worked on a host-based data loader tool for HJT-36 aircraft mission setup. Replaced manual data entry with uploadable pre-made flight plans, reducing mission setup time from around 45 minutes to under five.', achievements: '≈45 min → <5 min setup', technologies: 'Systems, automation, data workflows', display_order: 1 },
];

export const writing: Writing[] = [];

export const skills: Skill[] = [
  ...['Java', 'Python', 'Go', 'JavaScript'].map((name, display_order) => ({ name, category: 'LANGUAGES', display_order })),
  ...['Linux', 'Docker', 'Git', 'CI/CD'].map((name, display_order) => ({ name, category: 'SYSTEMS', display_order })),
  { name: 'AWS', category: 'CLOUD', display_order: 0 },
  ...['Astro', 'React', 'Node.js'].map((name, display_order) => ({ name, category: 'WEB', display_order })),
  ...['MCP', 'Agentic workflows', 'AI automation'].map((name, display_order) => ({ name, category: 'AI / AUTOMATION', display_order })),
];
