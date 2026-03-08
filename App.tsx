import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { StoriesRing } from './components/StoriesRing';
import { CategoryGrid } from './components/CategoryGrid';
import { FeaturedBusinesses } from './components/FeaturedBusinesses';
import { PersonalizedEvents } from './components/PersonalizedEvents';
import { DealsMarketplace } from './components/DealsMarketplace';
import { CommunityStories } from './components/CommunityStories';
import { CityGuide } from './components/CityGuide';
import { BusinessDirectory } from './components/BusinessDirectory';
import { InclusiveFeatures } from './components/InclusiveFeatures';
import { AuthModal } from './components/AuthModal';
import { Dashboard } from './components/Dashboard';
import { mockUser } from './constants';
import type { User } from './types';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [page, setPage] = useState<'home' | 'dashboard'>('home');

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentUser(mockUser);
    setShowAuthModal(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setPage('home');
  };
  
  const navigateTo = (targetPage: 'home' | 'dashboard') => {
      if (targetPage === 'dashboard' && !isLoggedIn) {
          setShowAuthModal(true);
      } else {
          setPage(targetPage);
      }
  }

  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <Header 
        isLoggedIn={isLoggedIn}
        user={currentUser}
        onSignIn={() => setShowAuthModal(true)}
        onSignOut={handleLogout}
        onDashboard={() => navigateTo('dashboard')}
        onHome={() => navigateTo('home')}
      />
      <main>
        {page === 'home' && (
          <>
            <HeroSection />
            <StoriesRing />
            <CategoryGrid />
            <FeaturedBusinesses />
            <PersonalizedEvents />
            <DealsMarketplace />
            <CommunityStories />
            <CityGuide />
            <BusinessDirectory />
            <InclusiveFeatures />
          </>
        )}
        {page === 'dashboard' && <Dashboard user={currentUser!} onLogout={handleLogout} />}
      </main>
      {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} onLogin={handleLogin} />}
    </div>
  );
};

export default App;
