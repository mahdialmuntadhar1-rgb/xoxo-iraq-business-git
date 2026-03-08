
import React, { useState } from 'react';
import { inclusiveFeaturesList, t } from '../constants';

export const InclusiveFeatures: React.FC = () => {
    const [activeFilters, setActiveFilters] = useState<string[]>([]);

    const toggleFilter = (filter: string) => {
        setActiveFilters(prev => 
            prev.includes(filter) 
            ? prev.filter(f => f !== filter)
            : [...prev, filter]
        );
    }
    
    return (
        <section className="py-16">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
            {t('inclusive.title')}
            </h2>
            <p className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
            {t('inclusive.subtitle')}
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {inclusiveFeaturesList.map((feature) => (
                <div
                key={feature.key}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-primary/50 hover:shadow-glow-primary transition-all duration-300 text-center group"
                >
                <div className={`
                    w-16 h-16 mx-auto mb-4 rounded-2xl
                    bg-gradient-to-br from-${feature.color}/70 to-${feature.color}/40
                    flex items-center justify-center
                    group-hover:scale-110 transition-transform
                `}>
                    <div className="text-white">
                    {feature.icon}
                    </div>
                </div>
                <h3 className="text-white font-semibold mb-2">
                    {t(`inclusive.${feature.key}.title`)}
                </h3>
                <p className="text-white/60 text-sm">
                    {t(`inclusive.${feature.key}.description`)}
                </p>
                </div>
            ))}
            </div>

            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">
                {t('inclusive.findEvents')}
            </h3>
            <div className="flex flex-wrap gap-3 mb-8">
                {[
                'wheelchairAccessible',
                'familyFriendly',
                'womenOnly',
                'sensoryFriendly',
                'signLanguage',
                'audioDescription'
                ].map((filter) => (
                <button
                    key={filter}
                    onClick={() => toggleFilter(filter)}
                    className={`px-6 py-3 rounded-full backdrop-blur-xl border transition-all duration-200 ${activeFilters.includes(filter) ? 'bg-primary border-primary text-white shadow-glow-primary' : 'bg-white/5 border-white/10 text-white/80 hover:bg-white/10'}`}
                >
                    {t(`inclusive.filters.${filter}`)}
                </button>
                ))}
            </div>
             <p className="text-center text-white/60">Filtered events would appear here based on selection.</p>
            </div>
        </div>
        </section>
    );
};
