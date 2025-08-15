# AUSTEDO XR Education Prototype

A React-based educational platform for healthcare providers learning about AUSTEDO XR and movement disorders.

## Features

### ✅ Implemented Core Features

**Navigation & Structure**
- 10 comprehensive chapters covering movement disorders and AUSTEDO XR
- Sequential chapter unlocking system
- Professional healthcare-focused UI design
- Responsive layout with sidebar navigation

**Content Types**
- 📋 **Slide Content** - Educational text and information
- 🎥 **Video Placeholders** - Embedded video learning modules
- 🏥 **Patient Testimonials** - Real patient experience stories  
- 📊 **Interactive Charts** - Data visualization placeholders
- ⚠️ **Safety Information** - Important prescribing information callouts
- ⚡ **Interactive Elements** - Engaging learning components

**Gamification System**
- 📈 **Progress Tracking** - Real-time completion percentage
- 🔓 **Chapter Unlock System** - Sequential progression requirements
- 🏆 **Achievement Badges** - 8 different achievement categories
- ⭐ **Point System** - Earn points for engagement and completion
- 🎯 **Quiz Scoring** - Immediate feedback with explanations
- 📊 **Progress Dashboard** - Comprehensive learning analytics

**Quiz System**
- Interactive quiz modals with immediate feedback
- Multiple choice questions with explanations
- Passing score requirements (70%)
- Retry functionality for failed attempts
- Point-based scoring system

**User Experience**
- Session time tracking
- Local storage persistence
- Achievement notifications
- Professional healthcare styling
- Responsive design for all devices

## Chapter Overview

1. **Orientation** - What Conditions Are We Talking About?
2. **Disease Biology** - Why It Occurs  
3. **Recognizing Symptoms** - What to Watch For
4. **Evaluation & Initial Management** - Treatment Approaches
5. **VMAT2 Inhibitors Overview** - Drug Class Introduction
6. **AUSTEDO XR Deep Dive** - Product Specifics
7. **Clinical Evidence** - Trial Data & Efficacy
8. **Patient Stories** - Human Impact
9. **Communication Strategies** - HCP & Patient Interactions
10. **Wrap-Up** - Key Takeaways

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd austedo-xr-education

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Development Server
The application will be available at `http://localhost:5173`

## Technical Architecture

### Tech Stack
- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS with custom healthcare theme
- **Icons**: Lucide React
- **State Management**: React Hooks + Local Storage
- **Build Tool**: Vite

### Project Structure
```
src/
├── components/
│   ├── layout/          # Sidebar, Header components
│   ├── content/         # Content block components  
│   ├── gamification/    # Progress, achievements
│   └── quiz/           # Quiz modal system
├── hooks/              # Custom React hooks
├── types/              # TypeScript interfaces
├── data/               # Chapter content and achievements
└── utils/              # Utility functions
```

### Key Components

**Layout Components**
- `Sidebar` - Chapter navigation with progress indicators
- `Header` - Session timer and achievement display  
- `ChapterView` - Main content area with progression logic

**Content Components**
- `ContentBlock` - Renders different content types
- `QuizModal` - Interactive quiz system with scoring
- `ProgressDashboard` - Comprehensive learning analytics

**Gamification Components**
- `AchievementNotification` - Toast-style achievement alerts
- `ProgressDashboard` - Detailed progress and statistics

### Data Models

**Chapter System**
- Sequential unlocking based on completion
- Time tracking per chapter
- Quiz score tracking
- Completion status management

**Gamification Engine**
- Point-based progression system
- 8 achievement categories (progress, quiz, engagement, completion)
- Level system based on total points
- Learning streak tracking

**Quiz System**
- Multiple choice questions with explanations
- Immediate feedback on answers
- Retry functionality for improvement
- Passing score validation

## Customization

### Adding New Content
1. Update `src/data/chapters.ts` with new content blocks
2. Add quiz questions to the same file
3. Content automatically appears in the UI

### Styling Customization  
- Healthcare-focused color palette in `tailwind.config.js`
- Custom CSS classes in `src/index.css`
- Professional medical/pharma aesthetic

### Achievement System
- Add new achievements in `src/data/achievements.ts`
- Implement trigger logic in `useProgress` hook
- Automatic notification system

## Production Deployment

```bash
# Build optimized production bundle
npm run build

# Preview production build locally  
npm run preview
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

This is a prototype for educational purposes.

---

**Note**: This is a functional prototype with placeholder content. For production use, replace placeholder content with actual AUSTEDO XR educational materials and ensure all medical information is reviewed and approved by appropriate medical and regulatory teams.
