import { FAQ } from '../types';

export const FAQS: Record<string, FAQ[]> = {
  'Student': [
    { question: 'How can I prepare for JEE/NEET using this app?', answer: 'Upload your study schedule or previous question papers. Sankat Mochan will analyse weak areas and suggest a personalised revision plan with topic-wise resources.' },
    { question: 'Can I get my SOP or college application reviewed?', answer: 'Yes! Paste or upload your draft SOP. The AI will check it for clarity, relevance, and grammar, and give specific line-level suggestions.' }
  ],
  'Government Employee': [
    { question: 'How do I draft an RTI application using this app?', answer: 'Tell us the department and information you need. We\'ll generate a correctly formatted RTI application ready to submit under the RTI Act 2005.' },
    { question: 'Can I summarise long government circulars or policies?', answer: 'Yes — upload the circular as a PDF or paste the text. Sankat Mochan will give you a plain-language summary with key action points highlighted.' }
  ],
  'Freelancer / Creator': [
    { question: 'Can I generate a client proposal or contract template?', answer: 'Absolutely. Describe your service, deliverables, and timeline. The AI will draft a professional proposal or service agreement in minutes.' },
    { question: 'How can I create social media content in bulk?', answer: 'Share your niche, target audience, and posting frequency. Sankat Mochan will generate a content calendar with ready-to-post captions for Instagram, LinkedIn, and more.' }
  ],
  'Business / MSME': [
    { question: 'Can Sankat Mochan help me understand my GST filing?', answer: 'Yes. Upload your GST return or describe your transaction type. The AI will explain what each field means and flag any common errors before you file.' },
    { question: 'How do I draft a vendor or client contract quickly?', answer: 'Describe the deal terms — value, duration, deliverables. Sankat Mochan will create a legally structured draft contract in Hindi or English as you prefer.' }
  ],
  'Homemaker / Citizen': [
    { question: 'Which government schemes am I eligible for?', answer: 'Share your state, family income, and category (general/OBC/SC/ST). Sankat Mochan will list all central and state schemes you qualify for with application links.' },
    { question: 'How can I get help with a legal notice or complaint?', answer: 'Describe the issue in simple language. The AI will draft a formal legal notice or consumer complaint letter for you, ready to send or file.' }
  ]
};
