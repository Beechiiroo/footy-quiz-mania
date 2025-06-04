import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Play, Trophy, Clock, Zap, Target, Users } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-football-grass via-football-field to-football-grass-dark flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border-4 border-white rounded-full"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 border-4 border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-4 border-white rounded-full"></div>
      </div>

      <Card className="w-full max-w-4xl mx-auto p-8 md:p-12 bg-white/95 backdrop-blur-sm shadow-2xl text-center animate-bounce-in">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-center mb-6">
            <div className="bg-football-blue text-white p-6 rounded-full shadow-lg">
              <Target size={48} />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-football-blue to-football-grass bg-clip-text text-transparent mb-4">
            Football Quiz Mania
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-medium">
            Testez vos connaissances footballistiques !
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-gradient-to-br from-football-blue to-football-blue-dark p-6 rounded-xl text-white transform hover:scale-105 transition-all duration-300">
            <Trophy className="mx-auto mb-3" size={32} />
            <h3 className="font-bold text-lg mb-2">8 Questions</h3>
            <p className="text-sm opacity-90">Questions variées</p>
          </div>
          
          <div className="bg-gradient-to-br from-football-orange to-football-orange-light p-6 rounded-xl text-white transform hover:scale-105 transition-all duration-300">
            <Clock className="mx-auto mb-3" size={32} />
            <h3 className="font-bold text-lg mb-2">20 Secondes</h3>
            <p className="text-sm opacity-90">Par question</p>
          </div>
          
          <div className="bg-gradient-to-br from-football-grass to-football-grass-dark p-6 rounded-xl text-white transform hover:scale-105 transition-all duration-300">
            <Zap className="mx-auto mb-3" size={32} />
            <h3 className="font-bold text-lg mb-2">3 Niveaux</h3>
            <p className="text-sm opacity-90">Facile à Expert</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-6 rounded-xl text-white transform hover:scale-105 transition-all duration-300">
            <Users className="mx-auto mb-3" size={32} />
            <h3 className="font-bold text-lg mb-2">Score Live</h3>
            <p className="text-sm opacity-90">Suivi en temps réel</p>
          </div>
        </div>

        {/* Game Rules */}
        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Règles du Jeu</h3>
          <div className="grid md:grid-cols-3 gap-4 text-left">
            <div className="flex items-start space-x-3">
              <div className="bg-football-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mt-1">1</div>
              <div>
                <p className="font-semibold text-gray-800">Répondez rapidement</p>
                <p className="text-sm text-gray-600">Vous avez 20 secondes par question</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-football-grass text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mt-1">2</div>
              <div>
                <p className="font-semibold text-gray-800">Gagnez des points</p>
                <p className="text-sm text-gray-600">1 point par bonne réponse</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-football-orange text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mt-1">3</div>
              <div>
                <p className="font-semibold text-gray-800">Visez l'excellence</p>
                <p className="text-sm text-gray-600">Obtenez le score parfait !</p>
              </div>
            </div>
          </div>
        </div>

        {/* Start Button */}
        <Button 
          onClick={onStart}
          className="bg-gradient-to-r from-football-blue to-football-grass hover:from-football-blue-dark hover:to-football-grass-dark text-white px-12 py-6 text-xl font-bold rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg"
        >
          <Play className="mr-3" size={24} />
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