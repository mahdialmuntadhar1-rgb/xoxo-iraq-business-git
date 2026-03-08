
import React, 'react';
import { Search, Mic } from './icons';
import { t, heroSlides } from '../constants';

const WaveformAnimation = () => <div className="absolute inset-0 rounded-full bg-white/30 animate-ping"></div>;
const LanguageToggle = () => (
    <div className="hidden md:flex items-center gap-1 text-white/70 text-sm">
        <button className="font-bold text-white">EN</button>
        <span>/</span>
        <button className="hover:text-white">AR</button>
        <span>/</span>
        <button className="hover:text-white">KU</button>
    </div>
);

const SearchSuggestions = () => (
    <div className="absolute top-full mt-4 w-full backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-4 text-white">
        <p className="text-sm text-white/60 mb-2">Suggestions</p>
        <ul>
            <li className="p-2 rounded-lg hover:bg-white/10 cursor-pointer">Restaurants in Baghdad</li>
            <li className="p-2 rounded-lg hover:bg-white/10 cursor-pointer">Events this weekend</li>
            <li className="p-2 rounded-lg hover:bg-white/10 cursor-pointer">Hotels in Erbil</li>
        </ul>
    </div>
);

const SearchPortal: React.FC = () => {
    const [showSuggestions, setShowSuggestions] = React.useState(false);
    const [isListening, setIsListening] = React.useState(false);

    return (
        <div className="max-w-3xl mx-auto w-full" onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}>
            <div className="relative group">
                <div className="backdrop-blur-xl bg-white/10 border-2 border-white/20 rounded-full pl-4 pr-2 py-2 md:px-6 md:py-4 flex items-center gap-2 md:gap-4 transition-all duration-300 hover:bg-white/15 hover:border-primary/50 focus-within:border-primary focus-within:shadow-[0_0_30px_rgba(108,43,217,0.5)]">
                    <Search className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                    <input
                        type="text"
                        placeholder={t('search.placeholder')}
                        className="flex-1 bg-transparent outline-none text-white placeholder:text-white/50 text-sm md:text-base"
                        onFocus={() => setShowSuggestions(true)}
                    />
                    <LanguageToggle />
                    <button className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center hover:scale-110 transition-transform group-hover:shadow-[0_0_20px_rgba(0,217,255,0.5)]" onClick={() => setIsListening(!isListening)}>
                        <Mic className="w-5 h-5 text-white" />
                        {isListening && <WaveformAnimation />}
                    </button>
                </div>
                {showSuggestions && <SearchSuggestions />}
            </div>
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
                {['events.today', 'restaurants', 'entertainment', 'deals'].map(filter => (
                    <button key={filter} className="px-3 py-1.5 md:px-4 md:py-2 rounded-full backdrop-blur-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all duration-200 text-white/80 hover:text-white text-xs md:text-sm">
                        {t(`filters.${filter}`)}
                    </button>
                ))}
            </div>
        </div>
    );
};

export const HeroSection: React.FC = () => {
    const [activeSlide, setActiveSlide] = React.useState(0);
    const scrollRef = React.useRef<HTMLDivElement>(null);
    const autoScrollInterval = React.useRef<number | null>(null);

    const handleScroll = () => {
        if (scrollRef.current) {
            const scrollLeft = scrollRef.current.scrollLeft;
            const slideWidth = scrollRef.current.clientWidth;
            const newActiveSlide = Math.round(scrollLeft / slideWidth);
            if(newActiveSlide !== activeSlide) {
                setActiveSlide(newActiveSlide);
            }
        }
    };
    
    const scrollToSlide = (index: number) => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({
                left: index * scrollRef.current.clientWidth,
                behavior: 'smooth'
            });
            setActiveSlide(index);
        }
    };
    
    const startAutoScroll = React.useCallback(() => {
        stopAutoScroll();
        autoScrollInterval.current = window.setInterval(() => {
            setActiveSlide(prev => {
                const nextSlide = (prev + 1) % heroSlides.length;
                if (scrollRef.current) {
                    scrollRef.current.scrollTo({
                        left: nextSlide * scrollRef.current.clientWidth,
                        behavior: 'smooth'
                    });
                }
                return nextSlide;
            });
        }, 5000);
    }, []);

    const stopAutoScroll = () => {
        if (autoScrollInterval.current) {
            clearInterval(autoScrollInterval.current);
        }
    };

    React.useEffect(() => {
        startAutoScroll();
        return stopAutoScroll;
    }, [startAutoScroll]);


    return (
        <section className="relative h-screen w-full overflow-hidden flex flex-col justify-center items-center">
             <div 
                className="absolute inset-0 flex w-full h-full overflow-x-auto snap-x snap-mandatory scrollbar-hide"
                ref={scrollRef}
                onScroll={handleScroll}
                onMouseDown={stopAutoScroll}
                onTouchStart={stopAutoScroll}
                onMouseUp={startAutoScroll}
                onTouchEnd={startAutoScroll}
            >
                {heroSlides.map(slide => (
                    <div key={slide.id} className="relative w-full h-full flex-shrink-0 snap-start flex items-center justify-center text-center">
                        <img src={slide.image} alt={slide.title} className="absolute inset-0 w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-dark-bg/60"></div>
                        <div className="relative z-10 px-4">
                             <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-white">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
                                    {slide.title}
                                </span>
                            </h1>
                            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">{slide.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="relative z-20 container mx-auto px-4 w-full">
                <SearchPortal />
            </div>

             <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {heroSlides.map((_, index) => (
                    <button key={index} onClick={() => scrollToSlide(index)} className={`w-2 h-2 rounded-full transition-all duration-300 ${activeSlide === index ? 'w-8 bg-primary' : 'bg-white/20 hover:bg-white/40'}`} aria-label={`Go to slide ${index + 1}`}/>
                ))}
            </div>
        </section>
    );
};
