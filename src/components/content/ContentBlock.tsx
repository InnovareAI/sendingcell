import React from 'react';
import { ContentBlock as ContentBlockType } from '../../types';
import { Play, BarChart3, AlertTriangle, Users, FileText, Zap } from 'lucide-react';

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
            <div className="bg-healthcare-100 rounded-lg aspect-video flex items-center justify-center mb-4">
              <div className="text-center">
                <Play size={48} className="text-healthcare-400 mx-auto mb-2" />
                <p className="text-healthcare-600">Video Placeholder</p>
                <p className="text-sm text-healthcare-500">{block.content}</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <button className="btn-secondary">
                View Transcript
              </button>
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
                Learn More
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