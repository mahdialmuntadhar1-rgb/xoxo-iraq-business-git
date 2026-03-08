
import React, { useState } from 'react';
import { t } from '../constants';
import { Navigation, Mic, Trash2 } from './icons';

interface Waypoint {
  name: string;
  address: string;
}

const InteractiveMap: React.FC = () => (
    <div className="w-full h-full bg-dark-bg flex items-center justify-center text-white/50">
        <div className="text-center">
            <Navigation className="w-16 h-16 mx-auto mb-4 text-secondary/50" />
            <p>Interactive Map Placeholder</p>
        </div>
    </div>
);

export const CityGuide: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const [journeyPoints, setJourneyPoints] = useState<Waypoint[]>([
    { name: "Baghdad Mall", address: "Harthiya, Baghdad" },
    { name: "National Museum of Iraq", address: "Allawi, Baghdad" }
  ]);
  const [currentLanguage, setCurrentLanguage] = useState('en');
  
  const removeWaypoint = (index: number) => {
      setJourneyPoints(points => points.filter((_, i) => i !== index));
  }

  return (
    <section className="py-16 bg-dark-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">{t('cityGuide.title')}</h2>
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden h-[600px] shadow-soft">
              <InteractiveMap />
            </div>
          </div>
          <div className="space-y-4">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2"><Navigation className="w-5 h-5 text-secondary" /> {t('cityGuide.planJourney')}</h3>
              <div className="relative mb-4">
                <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder={t('cityGuide.searchPlaces')} className="w-full px-4 py-3 rounded-xl backdrop-blur-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 outline-none focus:border-primary transition-colors" />
                <button onClick={() => setIsVoiceActive(!isVoiceActive)} className={`absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${isVoiceActive ? 'bg-gradient-to-br from-accent to-primary animate-pulse' : 'bg-white/10 hover:bg-white/20'}`}><Mic className="w-5 h-5 text-white" /></button>
              </div>
              <div className="flex gap-2 mb-4">
                {['en', 'ar', 'ku'].map((lang) => (
                  <button key={lang} onClick={() => setCurrentLanguage(lang)} className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${currentLanguage === lang ? 'bg-gradient-to-r from-primary to-secondary text-white' : 'backdrop-blur-xl bg-white/10 text-white/70 hover:bg-white/20'}`}>{lang.toUpperCase()}</button>
                ))}
              </div>
              <div className="space-y-2">
                <p className="text-white/60 text-xs mb-2">{t('cityGuide.trySaying')}:</p>
                {['Find restaurants near me', 'شوكت يبدى مهرجان الموسيقى؟', 'کاتێ فستیڤاڵ دەست پێدەکات؟'].map((command, i) => (<button key={i} onClick={() => setSearchQuery(command)} className="w-full text-left px-3 py-2 rounded-lg backdrop-blur-xl bg-white/5 hover:bg-white/10 text-white/70 text-xs transition-all">"{command}"</button>))}
              </div>
            </div>
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-4">{t('cityGuide.yourJourney')}</h3>
              {journeyPoints.length === 0 ? (<p className="text-white/60 text-sm text-center py-8">{t('cityGuide.addWaypoints')}</p>) : (
                <div className="space-y-3">
                  {journeyPoints.map((point, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-xl backdrop-blur-xl bg-white/10">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex-shrink-0 flex items-center justify-center text-white font-bold text-sm">{index + 1}</div>
                      <div className="flex-1"><p className="text-white font-medium text-sm truncate">{point.name}</p><p className="text-white/60 text-xs truncate">{point.address}</p></div>
                      <button onClick={() => removeWaypoint(index)} className="w-8 h-8 rounded-full backdrop-blur-xl bg-white/10 hover:bg-red-500/20 flex items-center justify-center transition-all flex-shrink-0"><Trash2 className="w-4 h-4 text-white/70" /></button>
                    </div>
                  ))}
                </div>
              )}
              {journeyPoints.length > 0 && (<button className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-glow-primary transition-all">{t('cityGuide.startNavigation')}</button>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
