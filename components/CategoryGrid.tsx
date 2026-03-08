
import React, { useState } from 'react';
import { categories, t } from '../constants';
import { Sparkles } from './icons';

export const CategoryGrid: React.FC = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const handleToggle = (categoryId: string) => {
    setExpandedCategory(prev => (prev === categoryId ? null : categoryId));
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">
          {t('categories.title')}
        </h2>
        <p className="text-white/60">
          {t('categories.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
        {categories.map((category) => (
          <div key={category.id} className="flex flex-col">
            <button
              onClick={() => handleToggle(category.id)}
              className="group relative aspect-square backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 hover:border-primary/50 hover:shadow-glow-primary transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden z-10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 h-full flex flex-col items-center justify-center p-4">
                <div className="text-5xl md:text-6xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(0,217,255,0.5)]">
                  {category.icon}
                </div>
                <h3 className="text-white font-semibold text-center text-sm md:text-base mb-2">
                  {t(category.nameKey)}
                </h3>
                <div className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs text-white/80">
                  {category.eventCount} {t('categories.events')}
                </div>
                {category.recommended && (
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center animate-pulse">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
            </button>

            {category.subcategories && (
                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${expandedCategory === category.id ? 'max-h-96 pt-2' : 'max-h-0'}`}>
                    <div className="grid grid-cols-2 gap-2 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-2">
                         {category.subcategories.map(sub => (
                            <button key={sub.id} className="group text-center p-3 rounded-lg hover:bg-white/10 transition-colors">
                                <div className="text-3xl mb-1 group-hover:scale-110 transition-transform">{sub.icon}</div>
                                <h4 className="text-white/90 font-medium text-xs">{t(sub.nameKey)}</h4>
                                <p className="text-white/50 text-xs">{sub.count} {t('items')}</p>
                            </button>
                        ))}
                    </div>
                </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
