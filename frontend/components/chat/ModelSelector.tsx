import React from 'react';
import { AIModel } from '../../lib/types';

interface ModelSelectorProps {
  currentModel: AIModel;
  onSelect: (model: AIModel) => void;
}

const MODELS: AIModel[] = ['Claude', 'Gemini', 'GPT-4o', 'Grok'];

/**
 * Tabbed selector for choosing the active AI model.
 */
export const ModelSelector: React.FC<ModelSelectorProps> = ({ currentModel, onSelect }) => {
  return (
    <div className="flex gap-1.5 overflow-x-auto pb-0.5 no-scrollbar">
      {MODELS.map((model) => (
        <button
          key={model}
          onClick={() => onSelect(model)}
          className={`rounded-full px-3.5 py-1.5 text-[11px] font-medium whitespace-nowrap transition-colors ${
            currentModel === model 
              ? 'bg-brand text-white' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {model}
        </button>
      ))}
    </div>
  );
};
