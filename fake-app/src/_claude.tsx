import React, { useState, useRef, useEffect } from 'react';

// Composants d'exemple pour les vues
const HomeView = ({ onNavigate }) => (
  <div className="p-6 bg-blue-50 h-full">
    <h1 className="text-2xl font-bold mb-4">Accueil</h1>
    <p className="mb-4">Bienvenue sur la page d'accueil</p>
    <button 
      onClick={() => onNavigate('profile')}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      Aller au profil
    </button>
  </div>
);

const ProfileView = ({ onNavigate, onBack }) => (
  <div className="p-6 bg-green-50 h-full">
    <h1 className="text-2xl font-bold mb-4">Profil</h1>
    <p className="mb-4">Voici votre page de profil</p>
    <div className="space-x-2">
      <button 
        onClick={onBack}
        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
      >
        Retour
      </button>
      <button 
        onClick={() => onNavigate('settings')}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Paramètres
      </button>
    </div>
  </div>
);

const SettingsView = ({ onBack }) => (
  <div className="p-6 bg-purple-50 h-full">
    <h1 className="text-2xl font-bold mb-4">Paramètres</h1>
    <p className="mb-4">Configurez vos préférences</p>
    <button 
      onClick={onBack}
      className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
    >
      Retour
    </button>
  </div>
);

// Composant principal de navigation
const ViewStack = () => {
  const [viewStack, setViewStack] = useState([{ id: 'home', type: 'home' }]);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef(null);

  const navigateTo = (viewType) => {
    if (isAnimating) return;
    
    const newView = {
      id: Date.now().toString(),
      type: viewType
    };
    
    setIsAnimating(true);
    setViewStack(prev => [...prev, newView]);
  };

  const goBack = () => {
    if (isAnimating || viewStack.length <= 1) return;
    
    setIsAnimating(true);
    setViewStack(prev => prev.slice(0, -1));
  };

  const renderView = (view, index, isLast) => {
    const baseProps = {
      onNavigate: navigateTo,
      onBack: goBack
    };

    switch (view.type) {
      case 'home':
        return <HomeView key={view.id} {...baseProps} />;
      case 'profile':
        return <ProfileView key={view.id} {...baseProps} />;
      case 'settings':
        return <SettingsView key={view.id} {...baseProps} />;
      default:
        return <div key={view.id}>Vue inconnue</div>;
    }
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
    <div className="relative w-full h-96 overflow-hidden bg-gray-100 border rounded-lg">
      <div 
        ref={containerRef}
        className="flex h-full transition-transform duration-300 ease-in-out"
        style={{
          width: `${viewStack.length * 100}%`,
          transform: `translateX(-${(viewStack.length - 1) * (100 / viewStack.length)}%)`
        }}
      >
        {viewStack.map((view, index) => (
          <div 
            key={view.id}
            className="flex-shrink-0 w-full h-full"
            style={{ width: `${100 / viewStack.length}%` }}
          >
            {renderView(view, index, index === viewStack.length - 1)}
          </div>
        ))}
      </div>
      
      {/* Indicateur de pile */}
      <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 text-xs shadow">
        Niveau: {viewStack.length}
      </div>
    </div>
  );
};

export default ViewStack;