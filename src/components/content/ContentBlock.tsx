import React from 'react';
import type { ContentBlock as ContentBlockType } from '../../types';
import { Play, BarChart3, AlertTriangle, Users, FileText, Zap, Stethoscope, BookOpen, Brain, Target, Calculator, Clock, ArrowLeftRight } from 'lucide-react';

interface ContentBlockProps {
  block: ContentBlockType;
  onComplete?: () => void;
}

const ContentBlock: React.FC<ContentBlockProps> = ({ block, onComplete }) => {
  const renderContent = () => {
    switch (block.type) {
      case 'slide':
        return (
          <div className="card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <FileText size={20} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-healthcare-800">{block.title}</h3>
            </div>
            <div className="prose prose-healthcare max-w-none">
              <p className="text-healthcare-700 leading-relaxed">{block.content}</p>
            </div>
            <div className="mt-6 pt-4 border-t border-healthcare-200">
              <button
                onClick={onComplete}
                className="btn-primary"
              >
                Continue
              </button>
            </div>
          </div>
        );

      case 'video':
        return (
          <div className="card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <Play size={20} className="text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-healthcare-800">{block.title}</h3>
              {block.metadata?.duration && (
                <span className="text-sm text-healthcare-500 bg-healthcare-100 px-2 py-1 rounded">
                  {block.metadata.duration}
                </span>
              )}
            </div>
            
            {/* Video Player or Placeholder */}
            <div className="bg-healthcare-100 rounded-lg aspect-video flex items-center justify-center mb-4 relative">
              {block.metadata?.videoUrl ? (
                <video 
                  controls 
                  className="w-full h-full rounded-lg"
                  poster="/images/video-poster.jpg"
                >
                  <source src={block.metadata.videoUrl} type="video/mp4" />
                  <div className="text-center p-8">
                    <Play size={48} className="text-healthcare-400 mx-auto mb-2" />
                    <p className="text-healthcare-600">Video Player Not Supported</p>
                    <p className="text-sm text-healthcare-500">Please enable JavaScript or use a modern browser</p>
                  </div>
                </video>
              ) : (
                <div className="text-center">
                  <Play size={48} className="text-healthcare-400 mx-auto mb-2" />
                  <p className="text-healthcare-600">Video Placeholder</p>
                  <p className="text-sm text-healthcare-500">{block.content}</p>
                  <p className="text-xs text-healthcare-400 mt-2">Upload your Synthesia video to /public/videos/</p>
                </div>
              )}
            </div>
            
            {/* Video Content Summary */}
            <div className="bg-healthcare-50 p-4 rounded-lg mb-4">
              <h4 className="font-medium text-healthcare-800 mb-2">Video Summary:</h4>
              <p className="text-sm text-healthcare-700">{block.content}</p>
            </div>
            
            <div className="flex justify-between items-center">
              {block.metadata?.transcript && (
                <button 
                  className="btn-secondary"
                  onClick={() => {
                    // Show transcript in alert for demo purposes
                    alert(`Video Transcript:\n\n${block.metadata?.transcript || 'No transcript available'}`);
                  }}
                >
                  View Transcript
                </button>
              )}
              <button
                onClick={onComplete}
                className="btn-primary"
              >
                Mark as Watched
              </button>
            </div>
          </div>
        );

      case 'testimonial':
        return (
          <div className="card bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users size={20} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-healthcare-800">{block.title}</h3>
            </div>
            <blockquote className="text-healthcare-700 italic text-lg leading-relaxed mb-4">
              "{block.content}"
            </blockquote>
            <div className="flex justify-between items-center">
              <p className="text-sm text-healthcare-600">Patient Testimonial</p>
              <button
                onClick={onComplete}
                className="btn-primary"
              >
                Continue
              </button>
            </div>
          </div>
        );

      case 'chart':
        return (
          <div className="card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <BarChart3 size={20} className="text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-healthcare-800">{block.title}</h3>
            </div>
            <div className="bg-healthcare-50 rounded-lg p-8 text-center mb-4">
              <BarChart3 size={64} className="text-healthcare-400 mx-auto mb-4" />
              <p className="text-healthcare-600">{block.content}</p>
              <p className="text-sm text-healthcare-500 mt-2">Interactive chart placeholder</p>
            </div>
            <div className="flex justify-between items-center">
              <button className="btn-secondary">
                View Data
              </button>
              <button
                onClick={onComplete}
                className="btn-primary"
              >
                Continue
              </button>
            </div>
          </div>
        );

      case 'safety':
        return (
          <div className="card bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                <AlertTriangle size={20} className="text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-amber-800">{block.title}</h3>
            </div>
            <div className="p-4 bg-amber-100 rounded-lg mb-4">
              <p className="text-amber-800 font-medium leading-relaxed">{block.content}</p>
            </div>
            <div className="flex justify-between items-center">
              <button className="btn-secondary">
                Full Prescribing Info
              </button>
              <button
                onClick={onComplete}
                className="btn-primary"
              >
                Acknowledged
              </button>
            </div>
          </div>
        );

      case 'interactive':
        return (
          <div className="card bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Zap size={20} className="text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-healthcare-800">{block.title}</h3>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-lg p-8 text-center mb-4">
              <Zap size={64} className="text-purple-500 mx-auto mb-4" />
              <p className="text-healthcare-700 mb-2">{block.content}</p>
              <p className="text-sm text-healthcare-500">Interactive element placeholder</p>
            </div>
            <div className="flex justify-between items-center">
              <button className="btn-secondary">
                Launch Interactive
              </button>
              <button
                onClick={onComplete}
                className="btn-primary"
              >
                Continue
              </button>
            </div>
          </div>
        );

      case 'case-study':
        return (
          <div className="card bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Stethoscope size={20} className="text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-healthcare-800">{block.title}</h3>
              <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">
                Clinical Case
              </span>
            </div>
            <div className="bg-emerald-50 p-6 rounded-lg mb-4 border-l-4 border-emerald-400">
              <div className="prose prose-healthcare max-w-none">
                <p className="text-healthcare-700 leading-relaxed">{block.content}</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <button className="btn-secondary flex items-center gap-2">
                <BookOpen size={16} />
                View Full Case
              </button>
              <button
                onClick={onComplete}
                className="btn-primary"
              >
                Case Complete
              </button>
            </div>
          </div>
        );

      case 'brain-3d':
        return (
          <div className="card bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Brain size={20} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-healthcare-800">{block.title}</h3>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                3D Interactive
              </span>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg p-8 text-center mb-4 min-h-[300px] flex flex-col justify-center">
              <Brain size={96} className="text-blue-500 mx-auto mb-4" />
              <p className="text-healthcare-700 mb-4">{block.content}</p>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-white p-3 rounded-lg">
                  <h4 className="font-semibold text-sm text-blue-800">Striatum</h4>
                  <p className="text-xs text-healthcare-600">Click to explore</p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <h4 className="font-semibold text-sm text-blue-800">Basal Ganglia</h4>
                  <p className="text-xs text-healthcare-600">Click to explore</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <button className="btn-secondary flex items-center gap-2">
                <Brain size={16} />
                Launch 3D Model
              </button>
              <button onClick={onComplete} className="btn-primary">
                Continue
              </button>
            </div>
          </div>
        );

      case 'symptom-matcher':
        return (
          <div className="card bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Target size={20} className="text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-healthcare-800">{block.title}</h3>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                Drag & Drop
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-3">Symptoms Bank</h4>
                <div className="space-y-2">
                  {['Lip Smacking', 'Chorea', 'Tongue Protrusion', 'Facial Grimacing', 'Finger Movements'].map((symptom, idx) => (
                    <div key={idx} className="bg-white p-2 rounded cursor-pointer hover:bg-green-100 border border-green-200">
                      {symptom}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-3">Drop Zones</h4>
                <div className="space-y-3">
                  <div className="border-2 border-dashed border-green-300 p-4 rounded-lg text-center">
                    <p className="text-green-600 font-medium">Tardive Dyskinesia</p>
                  </div>
                  <div className="border-2 border-dashed border-green-300 p-4 rounded-lg text-center">
                    <p className="text-green-600 font-medium">Huntington's Disease</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-healthcare-700 mb-4">{block.content}</p>
            <div className="flex justify-between items-center">
              <button className="btn-secondary flex items-center gap-2">
                <Target size={16} />
                Reset Exercise
              </button>
              <button onClick={onComplete} className="btn-primary">
                Complete Exercise
              </button>
            </div>
          </div>
        );

      case 'risk-calculator':
        return (
          <div className="card bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <Calculator size={20} className="text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-healthcare-800">{block.title}</h3>
              <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">
                Calculator
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-healthcare-700 mb-2">Patient Age</label>
                  <select className="w-full p-2 border border-orange-200 rounded-lg">
                    <option value="">Select age range</option>
                    <option value="young">18-40 years</option>
                    <option value="middle">41-65 years</option>
                    <option value="elderly">&gt;65 years</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-healthcare-700 mb-2">Gender</label>
                  <select className="w-full p-2 border border-orange-200 rounded-lg">
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-healthcare-700 mb-2">Treatment Duration</label>
                  <select className="w-full p-2 border border-orange-200 rounded-lg">
                    <option value="">Select duration</option>
                    <option value="short">&lt; 6 months</option>
                    <option value="medium">6-12 months</option>
                    <option value="long">&gt; 1 year</option>
                  </select>
                </div>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-3">Risk Assessment</h4>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-2">---%</div>
                  <p className="text-sm text-healthcare-600">TD Risk Level</p>
                  <div className="mt-4 p-3 bg-white rounded border">
                    <p className="text-xs text-healthcare-600">Complete all fields to calculate risk</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-healthcare-700 mb-4">{block.content}</p>
            <div className="flex justify-between items-center">
              <button className="btn-secondary flex items-center gap-2">
                <Calculator size={16} />
                Calculate Risk
              </button>
              <button onClick={onComplete} className="btn-primary">
                Continue
              </button>
            </div>
          </div>
        );

      case 'timeline':
        return (
          <div className="card bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Clock size={20} className="text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-healthcare-800">{block.title}</h3>
              <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                Interactive Timeline
              </span>
            </div>
            <div className="relative mb-6">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-purple-300"></div>
              <div className="space-y-6">
                {[
                  { phase: 'Prodromal', years: '10-15 years before', description: 'Subtle cognitive/psychiatric changes' },
                  { phase: 'Early HD', years: 'Motor onset', description: 'Chorea emergence, independence maintained' },
                  { phase: 'Middle HD', years: '5-10 years', description: 'Progressive motor/cognitive decline' },
                  { phase: 'Late HD', years: '15-20 years', description: 'Severe disability, care dependency' }
                ].map((stage, idx) => (
                  <div key={idx} className="relative pl-10">
                    <div className="absolute left-2 w-4 h-4 bg-purple-500 rounded-full border-2 border-white"></div>
                    <div className="bg-white p-4 rounded-lg border border-purple-200 hover:bg-purple-50 cursor-pointer">
                      <h4 className="font-semibold text-purple-800">{stage.phase}</h4>
                      <p className="text-sm text-purple-600">{stage.years}</p>
                      <p className="text-sm text-healthcare-700 mt-1">{stage.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-healthcare-700 mb-4">{block.content}</p>
            <div className="flex justify-between items-center">
              <button className="btn-secondary flex items-center gap-2">
                <Clock size={16} />
                Explore Stages
              </button>
              <button onClick={onComplete} className="btn-primary">
                Continue
              </button>
            </div>
          </div>
        );

      case 'comparison':
        return (
          <div className="card bg-gradient-to-r from-indigo-50 to-blue-50 border-indigo-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                <ArrowLeftRight size={20} className="text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-healthcare-800">{block.title}</h3>
              <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">
                Side-by-Side
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                <h4 className="font-semibold text-red-800 mb-4 flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  Tardive Dyskinesia
                </h4>
                <div className="space-y-3">
                  <div><strong>Cause:</strong> Dopamine blocker exposure</div>
                  <div><strong>Age:</strong> Usually &gt;50 years</div>
                  <div><strong>Symptoms:</strong> Orofacial dyskinesia</div>
                  <div><strong>Inheritance:</strong> Not inherited</div>
                  <div><strong>Assessment:</strong> AIMS scale</div>
                </div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-4 flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  Huntington's Disease
                </h4>
                <div className="space-y-3">
                  <div><strong>Cause:</strong> HTT gene mutation</div>
                  <div><strong>Age:</strong> Usually 30-50 years</div>
                  <div><strong>Symptoms:</strong> Chorea, cognitive decline</div>
                  <div><strong>Inheritance:</strong> Autosomal dominant</div>
                  <div><strong>Assessment:</strong> Genetic testing</div>
                </div>
              </div>
            </div>
            <p className="text-healthcare-700 mb-4">{block.content}</p>
            <div className="flex justify-between items-center">
              <button className="btn-secondary flex items-center gap-2">
                <ArrowLeftRight size={16} />
                Toggle Comparison
              </button>
              <button onClick={onComplete} className="btn-primary">
                Continue
              </button>
            </div>
          </div>
        );

      default:
        return (
          <div className="card">
            <h3 className="text-lg font-semibold text-healthcare-800 mb-4">{block.title}</h3>
            <p className="text-healthcare-700">{block.content}</p>
          </div>
        );
    }
  };

  return <div className="mb-6">{renderContent()}</div>;
};

export default ContentBlock;