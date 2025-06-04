import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Play, Trophy, Clock, Zap, Target, Users } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-football-grass via-football-field to-football-grass-dark flex items-center justify-center p-2 sm:p-4">
      {/* Mobile Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-16 h-16 sm:w-32 sm:h-32 border-2 sm:border-4 border-white rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-12 h-12 sm:w-24 sm:h-24 border-2 sm:border-4 border-white rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-40 sm:h-40 border-2 sm:border-4 border-white rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        {/* Mobile floating elements */}
        <div className="absolute top-20 right-8 w-8 h-8 bg-white/20 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-8 w-6 h-6 bg-white/20 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
      </div>

      <Card className="w-full max-w-sm sm:max-w-4xl mx-auto p-4 sm:p-8 md:p-12 bg-white/95 backdrop-blur-sm shadow-2xl text-center animate-bounce-in border-0 rounded-3xl sm:rounded-2xl">
        {/* Header - Mobile Optimized */}
        <div className="mb-6 sm:mb-8">
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="bg-football-blue text-white p-4 sm:p-6 rounded-full shadow-lg animate-pulse">
              <Target size={32} className="sm:w-12 sm:h-12" />
            </div>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-football-blue to-football-grass bg-clip-text text-transparent mb-2 sm:mb-4 leading-tight">
            Football Quiz Mania
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-gray-600 font-medium px-2">
            Testez vos connaissances footballistiques !
          </p>
        </div>

        {/* Features Grid - Mobile Optimized */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6 mb-6 sm:mb-10">
          <div className="bg-gradient-to-br from-football-blue to-football-blue-dark p-3 sm:p-6 rounded-2xl text-white transform active:scale-95 sm:hover:scale-105 transition-all duration-300 shadow-lg">
            <Trophy className="mx-auto mb-2 sm:mb-3" size={24} />
            <h3 className="font-bold text-sm sm:text-lg mb-1 sm:mb-2">8 Questions</h3>
            <p className="text-xs sm:text-sm opacity-90">Questions variées</p>
          </div>
          
          <div className="bg-gradient-to-br from-football-orange to-football-orange-light p-3 sm:p-6 rounded-2xl text-white transform active:scale-95 sm:hover:scale-105 transition-all duration-300 shadow-lg">
            <Clock className="mx-auto mb-2 sm:mb-3" size={24} />
            <h3 className="font-bold text-sm sm:text-lg mb-1 sm:mb-2">20 Secondes</h3>
            <p className="text-xs sm:text-sm opacity-90">Par question</p>
          </div>
          
          <div className="bg-gradient-to-br from-football-grass to-football-grass-dark p-3 sm:p-6 rounded-2xl text-white transform active:scale-95 sm:hover:scale-105 transition-all duration-300 shadow-lg">
            <Zap className="mx-auto mb-2 sm:mb-3" size={24} />
            <h3 className="font-bold text-sm sm:text-lg mb-1 sm:mb-2">3 Niveaux</h3>
            <p className="text-xs sm:text-sm opacity-90">Facile à Expert</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-3 sm:p-6 rounded-2xl text-white transform active:scale-95 sm:hover:scale-105 transition-all duration-300 shadow-lg">
            <Users className="mx-auto mb-2 sm:mb-3" size={24} />
            <h3 className="font-bold text-sm sm:text-lg mb-1 sm:mb-2">Score Live</h3>
            <p className="text-xs sm:text-sm opacity-90">Suivi en temps réel</p>
          </div>
        </div>

        {/* Game Rules - Mobile Optimized */}
        <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8">
          <h3 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">Règles du Jeu</h3>
          <div className="space-y-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 text-left">
            <div className="flex items-start space-x-3">
              <div className="bg-football-blue text-white rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-xs sm:text-sm font-bold mt-1 flex-shrink-0">1</div>
              <div className="min-w-0">
                <p className="font-semibold text-gray-800 text-sm sm:text-base">Répondez rapidement</p>
                <p className="text-xs sm:text-sm text-gray-600">Vous avez 20 secondes par question</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-football-grass text-white rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-xs sm:text-sm font-bold mt-1 flex-shrink-0">2</div>
              <div className="min-w-0">
                <p className="font-semibold text-gray-800 text-sm sm:text-base">Gagnez des points</p>
                <p className="text-xs sm:text-sm text-gray-600">1 point par bonne réponse</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-football-orange text-white rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-xs sm:text-sm font-bold mt-1 flex-shrink-0">3</div>
              <div className="min-w-0">
                <p className="font-semibold text-gray-800 text-sm sm:text-base">Visez l'excellence</p>
                <p className="text-xs sm:text-sm text-gray-600">Obtenez le score parfait !</p>
              </div>
            </div>
          </div>
        </div>

        {/* Start Button - Mobile Optimized */}
        <Button 
          onClick={onStart}
          className="w-full sm:w-auto bg-gradient-to-r from-football-blue to-football-grass hover:from-football-blue-dark hover:to-football-grass-dark active:scale-95 text-white px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-full transform sm:hover:scale-105 transition-all duration-300 shadow-lg border-0"
        >
          <Play className="mr-2 sm:mr-3" size={20} />
          Commencer le Quiz
        </Button>

        {/* Footer */}
        <div className="mt-8 text-gray-500">
          <p className="text-sm">Bonne chance et amusez-vous bien ! ⚽</p>
        </div>
      </Card>
    </div>
  );
};