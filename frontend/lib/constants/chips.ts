import { Chip } from '../types';

export const CHIPS: Record<string, Chip[]> = {
  'Student': [
    { icon: 'ti-file-cv', color: '#C8490B', label: 'Build resume', message: 'Help me build my resume' },
    { icon: 'ti-book', color: '#3060C0', label: 'Exam prep', message: 'Help me with exam prep' },
    { icon: 'ti-pencil', color: '#1A7A44', label: 'Write SOP', message: 'Help me write my SOP' },
    { icon: 'ti-code', color: '#7A30C0', label: 'Coding help', message: 'Help me with coding' }
  ],
  'Government Employee': [
    { icon: 'ti-mail', color: '#3060C0', label: 'Draft RTI', message: 'Help me write an RTI application' },
    { icon: 'ti-file-description', color: '#C8490B', label: 'Summarise policy', message: 'Summarise this government policy' },
    { icon: 'ti-forms', color: '#1A7A44', label: 'Fill form', message: 'Help me fill a government form' },
    { icon: 'ti-briefcase', color: '#7A30C0', label: 'Office memo', message: 'Draft an official office memo' }
  ],
  'Freelancer / Creator': [
    { icon: 'ti-writing', color: '#1A7A44', label: 'Write caption', message: 'Write a social media caption for me' },
    { icon: 'ti-file-invoice', color: '#C8490B', label: 'Proposal', message: 'Draft a client proposal' },
    { icon: 'ti-video', color: '#3060C0', label: 'Script idea', message: 'Give me a YouTube script idea' },
    { icon: 'ti-cash', color: '#7A30C0', label: 'Invoice', message: 'Help me create an invoice' }
  ],
  'Business / MSME': [
    { icon: 'ti-calculator', color: '#7A30C0', label: 'GST help', message: 'Explain my GST filing' },
    { icon: 'ti-file-dollar', color: '#C8490B', label: 'Invoice', message: 'Generate a GST invoice' },
    { icon: 'ti-users', color: '#1A7A44', label: 'HR policy', message: 'Draft an employee HR policy' },
    { icon: 'ti-report', color: '#3060C0', label: 'P&L summary', message: 'Summarise my profit & loss statement' }
  ],
  'Homemaker / Citizen': [
    { icon: 'ti-heart', color: '#C85030', label: 'Scheme search', message: 'Which government schemes can I apply for?' },
    { icon: 'ti-scale', color: '#3060C0', label: 'Legal advice', message: 'I need basic legal guidance' },
    { icon: 'ti-first-aid-kit', color: '#1A7A44', label: 'Health scheme', message: 'Tell me about Ayushman Bharat' },
    { icon: 'ti-home', color: '#7A30C0', label: 'Housing aid', message: 'What housing subsidies are available?' }
  ]
};
