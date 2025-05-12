import { GenerateParams, VocabularyTerm, VocabularyList } from '../types';

/**
 * Service that provides mock data for the Vocabulary Domain Builder app
 * This simulates the backend service that would normally call the LLM
 */

// Helper to generate a unique ID
const generateId = (): string => {
  return Math.random().toString(36).substring(2, 15);
};

// Mock vocabulary lists for different domains
const mockVocabularyData: Record<string, { terms: string[], definitions: string[] }> = {
  'Web Development': {
    terms: [
      'API', 'REST', 'JSON', 'DOM', 'AJAX', 'HTTP', 'CSS', 'HTML', 'JavaScript', 
      'TypeScript', 'React', 'Vue', 'Angular', 'Node.js', 'Express', 'Webpack', 
      'NPM', 'Responsive', 'SPA', 'PWA'
    ],
    definitions: [
      'Application Programming Interface, a set of rules that allows programs to talk to each other',
      'Representational State Transfer, an architectural style for designing networked applications',
      'JavaScript Object Notation, a lightweight data-interchange format',
      'Document Object Model, a programming interface for web documents',
      'Asynchronous JavaScript and XML, a technique for creating fast and dynamic web pages',
      'Hypertext Transfer Protocol, the foundation of data communication for the World Wide Web',
      'Cascading Style Sheets, a style sheet language used for describing the presentation of a document',
      'Hypertext Markup Language, the standard markup language for documents designed to be displayed in a web browser',
      'A programming language that conforms to the ECMAScript specification',
      'A statically typed superset of JavaScript that adds optional types to the language',
      'A JavaScript library for building user interfaces',
      'A progressive JavaScript framework for building user interfaces',
      'A platform for building mobile and desktop web applications',
      'A JavaScript runtime built on Chrome\'s V8 JavaScript engine',
      'A minimal and flexible Node.js web application framework',
      'A static module bundler for modern JavaScript applications',
      'Node Package Manager, a package manager for JavaScript',
      'A web design approach that makes web pages render well on a variety of devices and window or screen sizes',
      'Single Page Application, a web application that loads a single HTML page',
      'Progressive Web App, a type of application software delivered through the web'
    ]
  },
  'Artificial Intelligence': {
    terms: [
      'Machine Learning', 'Neural Network', 'Deep Learning', 'NLP', 'Computer Vision', 
      'Supervised Learning', 'Unsupervised Learning', 'Reinforcement Learning', 
      'Algorithm', 'Model', 'Training', 'Inference', 'Dataset', 'Feature', 
      'Label', 'Bias', 'Overfitting', 'Underfitting', 'Gradient Descent', 'Backpropagation'
    ],
    definitions: [
      'A subset of AI that focuses on developing systems that learn from data',
      'A computational model inspired by the human brain\'s structure and function',
      'A subset of machine learning based on artificial neural networks with multiple layers',
      'Natural Language Processing, a field focused on enabling computers to understand human language',
      'A field of AI that enables computers to derive meaningful information from digital images and videos',
      'A type of machine learning where the model is trained on labeled data',
      'A type of machine learning where the model is trained on unlabeled data',
      'A type of machine learning where an agent learns to make decisions by interacting with an environment',
      'A step-by-step procedure for solving a problem or accomplishing a task',
      'A mathematical representation of a real-world process',
      'The process of teaching a machine learning model to make predictions',
      'The process of using a trained model to make predictions on new data',
      'A collection of data used to train a machine learning model',
      'An individual measurable property or characteristic of a phenomenon being observed',
      'The output value that a machine learning model is trained to predict',
      'A systematic error that occurs in a machine learning model',
      'When a model learns the training data too well and performs poorly on new, unseen data',
      'When a model is too simple to capture the underlying pattern in the data',
      'An optimization algorithm used to minimize a function by iteratively moving in the direction of steepest descent',
      'An algorithm for training neural networks by propagating errors backward through the network'
    ]
  },
  'Cybersecurity': {
    terms: [
      'Firewall', 'Malware', 'Phishing', 'Encryption', 'Authentication', 
      'Authorization', 'VPN', 'Zero Trust', 'Vulnerability', 'Exploit', 
      'Penetration Testing', 'SIEM', 'IDS', 'IPS', 'SOC', 
      'Ransomware', 'DDoS', 'Social Engineering', 'Data Breach', 'Cyber Threat'
    ],
    definitions: [
      'A network security device that monitors and filters incoming and outgoing network traffic',
      'Software designed to disrupt, damage, or gain unauthorized access to a computer system',
      'A type of social engineering attack where attackers pose as trusted entities to steal sensitive information',
      'The process of encoding information to prevent unauthorized access',
      'The process of verifying the identity of a user or system',
      'The process of granting or denying access to specific resources',
      'Virtual Private Network, a technology that creates a safe and encrypted connection over a less secure network',
      'A security model that assumes no user or system inside or outside the network is trusted by default',
      'A weakness in a system that can be exploited by a threat actor',
      'A piece of software, data, or command that takes advantage of a vulnerability in a system',
      'A simulated cyber attack against a computer system to check for exploitable vulnerabilities',
      'Security Information and Event Management, a system that provides real-time analysis of security alerts',
      'Intrusion Detection System, a device or software application that monitors a network for malicious activity',
      'Intrusion Prevention System, a network security application that monitors network traffic for malicious activity',
      'Security Operations Center, a facility that houses an information security team',
      'A type of malware that encrypts a victim\'s data and demands a ransom to restore access',
      'Distributed Denial of Service, a cyber attack where multiple compromised systems attack a target',
      'The psychological manipulation of people into performing actions or divulging confidential information',
      'An incident in which sensitive, protected or confidential data is copied, transmitted, viewed, stolen or used by an unauthorized individual',
      'A malicious act that seeks to damage data, steal data, or disrupt digital life in general'
    ]
  }
};

// Mock story templates for generating stories
const storyTemplates = [
  "Working on a complex project, {name} encountered the term '{term}'. {definition} This concept was crucial for solving their problem. After implementing it correctly, the project was a success.",
  "During a team meeting, {name} heard about '{term}' for the first time. {definition} After researching more, they implemented it in their next project, significantly improving performance.",
  "While studying for a certification, {name} struggled to understand '{term}'. {definition} After practicing with real examples, the concept became clear and they passed their exam with flying colors.",
  "As a junior developer, {name} was confused when a senior colleague mentioned '{term}'. {definition} After asking for an explanation and seeing it in action, {name} gained valuable insight for their career.",
  "{name} was reading a technical article that frequently referenced '{term}'. {definition} This knowledge helped them to better understand advanced topics in their field."
];

// Names to use in the stories
const names = ['Alex', 'Morgan', 'Jordan', 'Taylor', 'Jamie', 'Casey', 'Riley', 'Avery', 'Quinn', 'Sydney'];

/**
 * Generates a random story for a vocabulary term
 */
const generateStory = (term: string, definition: string): string => {
  const randomTemplate = storyTemplates[Math.floor(Math.random() * storyTemplates.length)];
  const randomName = names[Math.floor(Math.random() * names.length)];
  
  return randomTemplate
    .replace('{name}', randomName)
    .replace('{term}', term)
    .replace('{definition}', definition);
};

/**
 * Simulates a delay to mimic an API call
 */
const simulateApiDelay = async (ms: number = 1500): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

/**
 * Mock service to generate a vocabulary list based on the provided parameters
 */
export const generateVocabularyList = async (params: GenerateParams): Promise<VocabularyList> => {
  console.log('Generating vocabulary list with params:', params);
  
  // Simulate API delay
  await simulateApiDelay();
  
  // Get mock data for the requested domain or default to Web Development
  const domainData = mockVocabularyData[params.domain] || mockVocabularyData['Web Development'];
  
  // Determine how many terms to include (limited by available mock data)
  const count = Math.min(params.count, domainData.terms.length);
  
  // Generate the vocabulary terms
  const terms: VocabularyTerm[] = [];
  for (let i = 0; i < count; i++) {
    const term = domainData.terms[i];
    const definition = domainData.definitions[i];
    const story = generateStory(term, definition);
    
    terms.push({
      id: generateId(),
      term,
      definition,
      story,
      learned: false,
      reviewLater: false
    });
  }
  
  // Create the vocabulary list
  return {
    id: generateId(),
    language: params.language,
    level: params.level,
    domain: params.domain,
    createdAt: new Date(),
    terms
  };
};