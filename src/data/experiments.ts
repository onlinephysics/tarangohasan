import type { Experiment } from '../types';

export const experiments: Experiment[] = [
  { slug: 'prompt-spec', title: 'Prompt as Specification', category: 'AI', description: '500–5,000 word prompts structured as SRS docs: data models, edge cases, validation, and deployment constraints.', stack: ['Prompt Engineering', 'SRS', 'AI Agents'], status: 'Ongoing' },
  { slug: 'coding-agents', title: 'Coding Agent Workflows', category: 'AI', description: 'Evaluating coding models, agent loops, review passes, and iterative refinement after generation.', stack: ['AI Agents', 'Code Review'], status: 'Ongoing' },
  { slug: 'ubuntu-server', title: 'Ubuntu / WSL / VM Lab', category: 'Linux & Environments', description: 'Ubuntu server configuration, WSL setups, and VM environments for reproducible builds.', stack: ['Ubuntu', 'WSL', 'VM'], status: 'Active' },
  { slug: 'docker-lab', title: 'Docker & Containers', category: 'Infrastructure', description: 'Containerised services, local hosting experiments, and image workflows.', stack: ['Docker', 'Containers'], status: 'Active' },
  { slug: 'cloudflare-lab', title: 'Cloudflare DNS & Workers', category: 'Infrastructure', description: 'DNS, Workers, and edge experiments for lightweight deploys.', stack: ['Cloudflare', 'Workers'], status: 'Active' },
  { slug: 'minimal-ui', title: 'Minimalist UI Systems', category: 'Web & APIs', description: 'Restrained interfaces, lightweight state, and API consumption without heavy runtimes.', stack: ['React', 'REST APIs'], status: 'Ongoing' },
  { slug: 'termux', title: 'Termux Mobile Dev', category: 'Terminal', description: 'Scripting and mobile development directly on Android via Termux.', stack: ['Termux', 'Android', 'Bash'], status: 'Ongoing' },
];
