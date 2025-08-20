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
    totalPoints: 125,
    passingScore: 70,
    questions: [
      {
        id: 'q1',
        question: 'What percentage of patients on long-term dopamine blocking therapy develop Tardive Dyskinesia?',
        options: [
          '10-15%',
          '20-30%',
          '40-50%',
          '60-70%'
        ],
        correctAnswer: 1,
        explanation: 'Research shows that TD develops in about 20-30% of people on long-term dopamine blocking therapy.',
        points: 25
      },
      {
        id: 'q2',
        question: 'Which brain region is primarily affected in Huntington\'s Disease?',
        options: [
          'Cerebellum',
          'Frontal cortex',
          'Striatum',
          'Hippocampus'
        ],
        correctAnswer: 2,
        explanation: 'HD causes degeneration in the striatum, part of the brain\'s motor control network.',
        points: 25
      },
      {
        id: 'q3',
        question: 'What type of inheritance pattern does Huntington\'s Disease follow?',
        options: [
          'Autosomal recessive',
          'X-linked',
          'Autosomal dominant',
          'Mitochondrial'
        ],
        correctAnswer: 2,
        explanation: 'HD is inherited in an autosomal dominant pattern, meaning only one copy of the altered gene is needed.',
        points: 25
      },
      {
        id: 'q4',
        question: 'Which assessment tool is commonly used for evaluating Tardive Dyskinesia?',
        options: [
          'MMSE',
          'AIMS',
          'MoCA',
          'UPDRS'
        ],
        correctAnswer: 1,
        explanation: 'The Abnormal Involuntary Movement Scale (AIMS) helps track TD symptom severity and changes.',
        points: 25
      },
      {
        id: 'q5',
        question: 'The hallmark movement symptom of Huntington\'s Disease is:',
        options: [
          'Tremor',
          'Rigidity',
          'Chorea',
          'Dystonia'
        ],
        correctAnswer: 2,
        explanation: 'Chorea - rapid, unpredictable, involuntary movements - is the hallmark motor symptom of HD.',
        points: 25
      }
    ]
  }
];

// Sample content blocks for chapters
export const chapterContent: Record<string, ContentBlock[]> = {
  'orientation': [
    {
      id: 'video-welcome',
      type: 'video',
      title: 'Welcome to Movement Disorders Education - Dr. Mara',
      content: 'Welcome to this educational module on movement disorders. My name is Mara. I will be your guide for this educational series. This program provides general evidence-based information about movement disorders. We will cover their causes, underlying mechanisms, and currently available treatment approaches. Each section ends with a brief knowledge check to reinforce your learning.',
      metadata: { 
        duration: '0:35',
        videoUrl: '/videos/dr-mara-welcome.mp4',
        transcript: 'Welcome to this educational module on movement disorders. My name is Mara. I will be your guide for this educational series. This program provides general evidence-based information about movement disorders. We will cover their causes, underlying mechanisms, and currently available treatment approaches. Each section ends with a brief knowledge check to reinforce your learning. Important disclaimer: This module is for educational purposes only. It does not provide medical advice, diagnosis or treatment recommendations. Patients should always consult their healthcare provider for guidance specific to their individual situation.'
      }
    },
    {
      id: 'slide-disclaimer',
      type: 'slide',
      title: 'Important Educational Disclaimer',
      content: 'This module is for educational purposes only. It does not provide medical advice, diagnosis or treatment recommendations. Patients should always consult their healthcare provider for guidance specific to their individual situation.',
    },
    {
      id: 'video-chapter1',
      type: 'video',
      title: 'Chapter 1: Tardive Dyskinesia & Huntington\'s Disease Overview',
      content: 'Welcome to chapter one of our series. In this chapter, we\'ll be exploring two important neurological conditions, tardive dyskinesia and Huntington\'s disease. If you\'re already familiar with these conditions, feel free to skip ahead. We\'ve designed these modules so that people at all levels of knowledge can benefit.',
      metadata: { 
        duration: '3:05',
        videoUrl: '/videos/chapter1-td-hd-overview.mp4',
        transcript: 'Welcome to chapter one of our series. In this chapter, we\'ll be exploring two important neurological conditions, tardive dyskinesia and Huntington\'s disease. If you\'re already familiar with these conditions, feel free to skip ahead. We\'ve designed these modules so that people at all levels of knowledge can benefit. For everyone else, let\'s dive in. Tardive dyskinesia is a movement disorder. It causes persistent, involuntary repetitive movements, often involving the face, tongue, lips, trunk, or limbs. Common examples include grimacing, tongue movement, lip smacking, rapid blinking, or jerking motions of the arms and legs. Research shows that TD develops in about 20 to 30% of people who are on long-term dopamine blocking therapy, though the exact number can vary depending on treatment duration, dosage, and personal risk factors. Some factors can make TD more likely. Older adults are more at risk. Women, especially postmenopausal, are more susceptible. The longer someone has been on certain dopamine blocking medications, the higher the risk. Preexisting brain injuries or certain mood disorders may increase vulnerability. When diagnosing TD, specialists use criteria set by the Movement Disorder Society, which include involuntary movements lasting for weeks or longer, symptoms not caused by another condition, a history of exposure to dopamine blocking drugs. One common tool for assessing symptoms is the abnormal involuntary movement scale, AIMS, which helps track how severe the movements are and how they change over time. It\'s important to note that TD is different from other movement disorders such as dystonia, Parkinsonism, or chorea caused by other conditions because each has different management strategies. Now, let\'s move on to the next condition. Huntington\'s disease is a rare inherited neurodegenerative disorder. It causes a combination of movement problems, cognitive decline, and psychiatric changes over time. The hallmark movement symptom is chorea, rapid, unpredictable, involuntary movements that can affect the face, limbs and trunk. HD affects about 3 or 7 people per 100,000 of European ancestry and is less common in other populations. It\'s caused by a mutation in the HTT gene on chromosome 4. This mutation is inherited in an autosomal dominant pattern, meaning a person only needs one copy of the altered gene to develop the disease. The mutation leads to production of an abnormal protein, which damages nerve cells. Most people start noticing symptoms between ages 30 and 50. The condition progresses over 10 to 25 years, gradually affecting movement, thinking, and independence. From a biological perspective, HD causes degeneration in the striatum, part of the brain\'s motor control network, particularly in the indirect pathway of the basal ganglia. This disruption leads to the hallmark motor symptoms along with other changes. Diagnosis usually involves recognizing motor symptoms like chorea or impaired coordination, identifying cognitive and emotional changes, confirming the mutation through genetic testing.'
      }
    },
    {
      id: 'interactive-symptom-matcher',
      type: 'interactive',
      title: 'Symptom Recognition Exercise',
      content: 'Practice identifying and categorizing symptoms of Tardive Dyskinesia and Huntington\'s Disease. Drag symptoms to the correct condition and body region.',
    },
    {
      id: 'chart-prevalence',
      type: 'chart',
      title: 'Movement Disorder Prevalence & Risk Factors',
      content: 'Interactive chart showing TD affects 20-30% of patients on long-term dopamine blocking therapy, while HD affects 3-7 per 100,000 people of European ancestry. Explore risk factors for each condition.',
    },
    {
      id: 'interactive-assessment',
      type: 'interactive',
      title: 'AIMS Scale Practice',
      content: 'Practice using the Abnormal Involuntary Movement Scale (AIMS) with video examples and scoring scenarios.',
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