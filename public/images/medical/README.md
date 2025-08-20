# Medical Images for Sendingcell Educational Platform

## Image Requirements for Huntington's Disease Section

### 1. Brain Anatomy Images Needed:
- **Striatum comparison**: Normal vs HD-affected brain
- **Basal ganglia diagram**: Anatomical structures  
- **Brain MRI scans**: Showing caudate atrophy
- **Genetic diagram**: HTT gene and CAG repeats
- **Family pedigree**: Inheritance pattern illustration

### 2. Recommended Free Sources:

#### Public Domain Sources:
- **CDC Public Health Image Library**: https://phil.cdc.gov/
- **National Library of Medicine**: https://www.nlm.nih.gov/
- **BrainMaps.org**: Free for academic use
- **Wikimedia Commons**: Medical images CC-licensed

#### Creative Commons Sources:
- **Ed Uthman's Pathology Collection**: CC-BY license
- **Bassett Collection**: CC-BY-SA 4.0
- **Pix4free.org**: Huntington's disease images

### 3. AI Generation Prompts (Use with caution):

For medical accuracy, use these prompts with human validation:

**Brain Anatomy:**
```
"Medical illustration of human brain showing basal ganglia, striatum highlighted, anatomical cross-section, educational diagram style, high contrast, clean medical textbook illustration"
```

**Genetic Diagram:**
```
"Scientific diagram showing HTT gene structure on chromosome 4, CAG repeat expansion visualization, medical genetics illustration, educational healthcare diagram"
```

**Family Tree:**
```
"Medical genetics pedigree chart showing autosomal dominant inheritance pattern, family tree diagram, educational medical illustration, clean scientific style"
```

### 4. Image Specifications:
- **Format**: PNG or JPG
- **Size**: 1200x800px recommended
- **Quality**: High resolution for zoom functionality
- **Style**: Professional medical illustration
- **Colors**: Healthcare-appropriate palette

### 5. Usage Guidelines:
- Always cite sources for educational use
- Verify medical accuracy with healthcare professionals
- Include appropriate disclaimers
- Follow Creative Commons attribution requirements

### 6. Current Placeholder Structure:
```
/public/images/medical/
├── brain-anatomy/
│   ├── striatum-normal.png
│   ├── striatum-hd.png
│   └── basal-ganglia-diagram.png
├── genetics/
│   ├── htt-gene-structure.png
│   ├── cag-repeats.png
│   └── inheritance-pattern.png
└── clinical/
    ├── mri-comparison.png
    └── progression-timeline.png
```

## Implementation in Code:

Update ContentBlock component to support medical images:
```tsx
metadata: {
  imageUrl: '/images/medical/brain-anatomy/striatum-comparison.png',
  imageAlt: 'Comparison of normal and HD-affected striatum',
  imageCaption: 'Left: Normal striatum, Right: HD with caudate atrophy'
}
```