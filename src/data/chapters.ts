import type { Chapter, Quiz, ContentBlock } from '../types';

export const chapters: Chapter[] = [
  {
    id: 'orientation',
    title: 'Orientation - What Conditions Are We Talking About?',
    description: 'Introduction to movement disorders and their impact on patients',
    order: 1,
    isUnlocked: true,
    isCompleted: false,
    completionPercentage: 0,
    timeSpent: 0,
  },
  {
    id: 'disease-biology',
    title: 'Disease Biology - Why It Occurs',
    description: 'Understanding the underlying mechanisms of movement disorders',
    order: 2,
    isUnlocked: true,
    isCompleted: false,
    completionPercentage: 0,
    timeSpent: 0,
  },
  {
    id: 'recognizing-symptoms',
    title: 'Recognizing Symptoms - What to Watch For',
    description: 'Identifying key symptoms and signs of movement disorders',
    order: 3,
    isUnlocked: true,
    isCompleted: false,
    completionPercentage: 0,
    timeSpent: 0,
  },
  {
    id: 'evaluation-management',
    title: 'Evaluation & Initial Management - Treatment Approaches',
    description: 'Clinical evaluation and initial treatment strategies',
    order: 4,
    isUnlocked: true,
    isCompleted: false,
    completionPercentage: 0,
    timeSpent: 0,
  },
  {
    id: 'vmat2-overview',
    title: 'VMAT2 Inhibitors Overview - Drug Class Introduction',
    description: 'Introduction to VMAT2 inhibitors and their mechanism of action',
    order: 5,
    isUnlocked: true,
    isCompleted: false,
    completionPercentage: 0,
    timeSpent: 0,
  },
  {
    id: 'austedo-xr',
    title: 'AUSTEDO XR Deep Dive - Product Specifics',
    description: 'Comprehensive overview of AUSTEDO XR characteristics and benefits',
    order: 6,
    isUnlocked: true,
    isCompleted: false,
    completionPercentage: 0,
    timeSpent: 0,
  },
  {
    id: 'clinical-evidence',
    title: 'Clinical Evidence - Trial Data & Efficacy',
    description: 'Review of clinical trial data and real-world evidence',
    order: 7,
    isUnlocked: true,
    isCompleted: false,
    completionPercentage: 0,
    timeSpent: 0,
  },
  {
    id: 'patient-stories',
    title: 'Patient Stories - Human Impact',
    description: 'Real patient experiences and case studies',
    order: 8,
    isUnlocked: true,
    isCompleted: false,
    completionPercentage: 0,
    timeSpent: 0,
  },
  {
    id: 'communication-strategies',
    title: 'Communication Strategies - HCP & Patient Interactions',
    description: 'Effective communication approaches for healthcare providers',
    order: 9,
    isUnlocked: true,
    isCompleted: false,
    completionPercentage: 0,
    timeSpent: 0,
  },
  {
    id: 'wrap-up',
    title: 'Wrap-Up - Key Takeaways',
    description: 'Summary of key learning points and next steps',
    order: 10,
    isUnlocked: true,
    isCompleted: false,
    completionPercentage: 0,
    timeSpent: 0,
  },
];

// Sample quiz questions for each chapter
export const quizzes: Quiz[] = [
  {
    id: 'orientation-quiz',
    chapterId: 'orientation',
    totalPoints: 100,
    passingScore: 70,
    questions: [
      {
        id: 'q1',
        question: 'What are the two main conditions covered in this AUSTEDO XR education program?',
        options: [
          'Huntington\'s Disease and Parkinson\'s Disease',
          'Huntington\'s Disease and Tardive Dyskinesia',
          'Tardive Dyskinesia and Essential Tremor',
          'Parkinson\'s Disease and Essential Tremor'
        ],
        correctAnswer: 1,
        explanation: 'AUSTEDO XR is indicated for Huntington\'s Disease and Tardive Dyskinesia.',
        points: 25
      },
      {
        id: 'q2',
        question: 'Which statement best describes the impact of movement disorders on patients?',
        options: [
          'They only affect physical movement',
          'They impact multiple aspects of daily life including social and emotional well-being',
          'They are easily manageable with lifestyle changes',
          'They only occur in elderly patients'
        ],
        correctAnswer: 1,
        explanation: 'Movement disorders have profound impacts on patients\' physical, social, and emotional well-being.',
        points: 25
      },
      {
        id: 'q3',
        question: 'What is the primary goal of this educational program?',
        options: [
          'To replace medical consultation',
          'To provide comprehensive education about AUSTEDO XR and movement disorders',
          'To diagnose movement disorders',
          'To prescribe treatment protocols'
        ],
        correctAnswer: 1,
        explanation: 'This program aims to educate healthcare providers about AUSTEDO XR and movement disorders.',
        points: 25
      },
      {
        id: 'q4',
        question: 'Who is the target audience for AUSTEDO XR education?',
        options: [
          'Only neurologists',
          'Only patients',
          'Healthcare providers across multiple specialties',
          'Only pharmacists'
        ],
        correctAnswer: 2,
        explanation: 'AUSTEDO XR education targets healthcare providers across various specialties who may encounter these conditions.',
        points: 25
      }
    ]
  }
];

// Sample content blocks for chapters
export const chapterContent: Record<string, ContentBlock[]> = {
  'orientation': [
    {
      id: 'slide-1',
      type: 'slide',
      title: 'Welcome to AUSTEDO XR Education',
      content: 'This comprehensive program will provide you with essential knowledge about movement disorders and AUSTEDO XR treatment options. You will learn about Huntington\'s Disease and Tardive Dyskinesia, their impact on patients, and how AUSTEDO XR can help improve patient outcomes.',
    },
    {
      id: 'video-1',
      type: 'video',
      title: 'Introduction to Movement Disorders',
      content: 'Educational video covering the basics of movement disorders',
      metadata: { duration: '5:30' }
    },
    {
      id: 'chart-1',
      type: 'chart',
      title: 'Movement Disorder Prevalence',
      content: 'Interactive chart showing that Huntington\'s Disease affects 3-7 per 100,000 people globally, while Tardive Dyskinesia affects approximately 20% of patients on long-term antipsychotic therapy.',
    },
    {
      id: 'safety-1',
      type: 'safety',
      title: 'Important Safety Information',
      content: 'AUSTEDO XR may cause serious side effects including depression and suicidality. Monitor patients for changes in mood, cognition, or behavior. Please review full prescribing information before prescribing.',
    }
  ],
  'disease-biology': [
    {
      id: 'slide-2',
      type: 'slide',
      title: 'Understanding Disease Mechanisms',
      content: 'Movement disorders result from dysfunction in the basal ganglia and related brain circuits. Huntington\'s Disease is caused by CAG repeat expansion in the huntingtin gene, while Tardive Dyskinesia results from chronic dopamine receptor blockade.',
    },
    {
      id: 'interactive-1',
      type: 'interactive',
      title: 'Brain Structure Explorer',
      content: 'Interactive 3D model highlighting the striatum, substantia nigra, and other key structures in movement control.',
    },
    {
      id: 'chart-2',
      type: 'chart',
      title: 'Neurotransmitter Pathways',
      content: 'Diagram showing dopamine, GABA, and acetylcholine pathways affected in movement disorders.',
    }
  ],
  'recognizing-symptoms': [
    {
      id: 'slide-3',
      type: 'slide',
      title: 'Key Symptoms to Recognize',
      content: 'Huntington\'s Disease presents with choreiform movements, cognitive decline, and psychiatric symptoms. Tardive Dyskinesia involves repetitive, involuntary movements typically affecting the face, tongue, and extremities.',
    },
    {
      id: 'video-2',
      type: 'video',
      title: 'Patient Symptom Examples',
      content: 'Clinical video examples of movement disorder symptoms',
      metadata: { duration: '7:15' }
    },
    {
      id: 'testimonial-1',
      type: 'testimonial',
      title: 'Patient Experience',
      content: 'The involuntary movements made it difficult for me to eat, speak clearly, and maintain my job. Finding the right treatment changed my life.',
    }
  ],
  'evaluation-management': [
    {
      id: 'slide-4',
      type: 'slide',
      title: 'Clinical Evaluation Approach',
      content: 'Comprehensive evaluation includes detailed history, neurological examination, family history assessment, and appropriate diagnostic testing. Early identification enables timely intervention.',
    },
    {
      id: 'chart-3',
      type: 'chart',
      title: 'Assessment Scales',
      content: 'Overview of validated assessment tools: UHDRS for Huntington\'s Disease and AIMS for Tardive Dyskinesia.',
    }
  ],
  'vmat2-overview': [
    {
      id: 'slide-5',
      type: 'slide',
      title: 'VMAT2 Inhibitor Mechanism',
      content: 'VMAT2 inhibitors work by reducing the uptake of dopamine into synaptic vesicles, leading to decreased dopamine release and improved movement control.',
    },
    {
      id: 'interactive-2',
      type: 'interactive',
      title: 'Synaptic Mechanism Animation',
      content: 'Interactive visualization of VMAT2 inhibition at the synaptic level.',
    }
  ],
  'austedo-xr': [
    {
      id: 'slide-6',
      type: 'slide',
      title: 'AUSTEDO XR Overview',
      content: 'AUSTEDO XR (deutetrabenazine) is a novel VMAT2 inhibitor indicated for chorea associated with Huntington\'s Disease and tardive dyskinesia in adults.',
    },
    {
      id: 'chart-4',
      type: 'chart',
      title: 'Dosing and Administration',
      content: 'AUSTEDO XR dosing guidelines and titration schedule for optimal patient outcomes.',
    },
    {
      id: 'safety-2',
      type: 'safety',
      title: 'Contraindications and Warnings',
      content: 'AUSTEDO XR is contraindicated in patients with hepatic impairment, those taking reserpine, MAOIs, or who are suicidal or have untreated depression.',
    }
  ],
  'clinical-evidence': [
    {
      id: 'slide-7',
      type: 'slide',
      title: 'Clinical Trial Results',
      content: 'AUSTEDO XR has demonstrated significant efficacy in reducing chorea and tardive dyskinesia symptoms in large, randomized controlled trials.',
    },
    {
      id: 'chart-5',
      type: 'chart',
      title: 'Efficacy Data',
      content: 'Primary endpoint results showing statistically significant improvement vs placebo in movement disorder scales.',
    }
  ],
  'patient-stories': [
    {
      id: 'testimonial-2',
      type: 'testimonial',
      title: 'Sarah\'s Journey',
      content: 'After starting AUSTEDO XR, my involuntary movements decreased significantly. I can now enjoy meals with my family and feel more confident in social situations.',
    },
    {
      id: 'testimonial-3',
      type: 'testimonial',
      title: 'Michael\'s Experience',
      content: 'The medication helped reduce my symptoms while allowing me to maintain my independence. My quality of life has improved dramatically.',
    }
  ],
  'communication-strategies': [
    {
      id: 'slide-8',
      type: 'slide',
      title: 'Effective Patient Communication',
      content: 'Learn strategies for discussing movement disorders, treatment options, and setting realistic expectations with patients and families.',
    },
    {
      id: 'interactive-3',
      type: 'interactive',
      title: 'Communication Scenarios',
      content: 'Practice conversations with simulated patient scenarios.',
    }
  ],
  'wrap-up': [
    {
      id: 'slide-9',
      type: 'slide',
      title: 'Key Learning Points',
      content: 'Review of essential concepts: early recognition, appropriate evaluation, VMAT2 inhibitor mechanisms, and AUSTEDO XR clinical benefits.',
    },
    {
      id: 'chart-6',
      type: 'chart',
      title: 'Treatment Algorithm',
      content: 'Step-by-step approach to movement disorder management and AUSTEDO XR initiation.',
    }
  ]
};