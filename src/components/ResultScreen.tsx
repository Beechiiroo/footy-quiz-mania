import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Trophy, RotateCcw, Home, Star, Target, Zap } from 'lucide-react';

interface ResultScreenProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
  onHome: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({ 
  score, 
  totalQuestions, 
  onRestart, 
  onHome 
}) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getPerformanceLevel = () => {
    if (percentage >= 90) return { level: 'Légendaire', color: 'from-yellow-400 to-yellow-600', emoji: '🏆' };
    if (percentage >= 75) return { level: 'Expert', color: 'from-green-400 to-green-600', emoji: '⭐' };
    if (percentage >= 60) return { level: 'Bon', color: 'from-blue-400 to-blue-600', emoji: '👍' };
    if (percentage >= 40) return { level: 'Moyen', color: 'from-orange-400 to-orange-600', emoji: '📚' };
    return { level: 'Débutant', color: 'from-red-400 to-red-600', emoji: '💪' };
  };

  const performance = getPerformanceLevel();

  const getMotivationalMessage = () => {
    if (percentage >= 90) return "Incroyable ! Vous êtes un vrai expert du football !";
    if (percentage >= 75) return "Excellent ! Vous maîtrisez bien le football !";
    if (percentage >= 60) return "Bien joué ! Vous avez de bonnes connaissances !";
    if (percentage >= 40) return "Pas mal ! Continuez à apprendre !";
    return "Bon début ! Le football n'a plus de secrets, continuez !";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-football-grass via-football-field to-football-grass-dark flex items-center justify-center p-2 sm:p-4">
      {/* Confetti Animation Background - Mobile Optimized */}
      {percentage >= 75 && (
        <div className="fixed inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce-in"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            >
              <Star className="text-yellow-400" size={12} />
            </div>
          ))}
        </div>
      )}

      <Card className="w-full max-w-sm sm:max-w-4xl mx-auto p-4 sm:p-8 md:p-12 bg-white/95 backdrop-blur-sm shadow-2xl text-center animate-slide-up border-0 rounded-3xl sm:rounded-2xl">
        {/* Performance Badge - Mobile Optimized */}
        <div className="mb-6 sm:mb-8">
          <div className={`inline-flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br ${performance.color} text-white text-3xl sm:text-4xl mb-4 sm:mb-6 animate-bounce-in shadow-2xl`}>
            {performance.emoji}
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-2 sm:mb-4 px-2">
            Quiz Terminé !
          </h1>
          <p className="text-base sm:text-xl text-gray-600 px-2 leading-relaxed">
            {getMotivationalMessage()}
          </p>
        </div>

        {/* Score Display - Mobile Optimized */}
        <div className="bg-gradient-to-r from-football-blue to-football-grass p-4 sm:p-8 rounded-2xl mb-6 sm:mb-8 text-white">
          <div className="grid grid-cols-3 gap-3 sm:gap-6">
            <div className="text-center">
              <Trophy size={32} className="mx-auto mb-2 sm:mb-4 sm:w-12 sm:h-12" />
              <h3 className="text-xl sm:text-3xl font-bold mb-1 sm:mb-2">{score}/{totalQuestions}</h3>
              <p className="text-xs sm:text-lg opacity-90">Score Final</p>
            </div>
            
            <div className="text-center">
              <Target size={32} className="mx-auto mb-2 sm:mb-4 sm:w-12 sm:h-12" />
              <h3 className="text-xl sm:text-3xl font-bold mb-1 sm:mb-2">{percentage}%</h3>
              <p className="text-xs sm:text-lg opacity-90">Précision</p>
            </div>
            
            <div className="text-center">
              <Zap size={32} className="mx-auto mb-2 sm:mb-4 sm:w-12 sm:h-12" />
              <h3 className="text-lg sm:text-3xl font-bold mb-1 sm:mb-2 leading-tight">{performance.level}</h3>
              <p className="text-xs sm:text-lg opacity-90">Niveau</p>
            </div>
          </div>
        </div>

        {/* Performance Breakdown - Mobile Optimized */}
        <div className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 mb-6 sm:mb-8">
          <div className="bg-gray-50 p-4 sm:p-6 rounded-2xl">
            <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-gray-800">Vos Statistiques</h4>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600 text-sm sm:text-base">Bonnes réponses:</span>
                <span className="font-bold text-green-600">{score}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 text-sm sm:text-base">Mauvaises réponses:</span>
                <span className="font-bold text-red-600">{totalQuestions - score}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 text-sm sm:text-base">Taux de réussite:</span>
                <span className="font-bold text-blue-600">{percentage}%</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 sm:p-6 rounded-2xl">
            <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-gray-800">Conseils</h4>
            <div className="text-left text-gray-600 space-y-1.5 sm:space-y-2 text-sm sm:text-base">
              {percentage >= 90 ? (
                <>
                  <p>🎯 Performance exceptionnelle !</p>
                  <p>⚽ Vous maîtrisez le football</p>
                  <p>🏆 Partagez votre score !</p>
                </>
              ) : percentage >= 75 ? (
                <>
                  <p>⭐ Très bon niveau !</p>
                  <p>📈 Quelques détails à peaufiner</p>
                  <p>🎯 Visez la perfection !</p>
                </>
              ) : (
                <>
                  <p>📚 Continuez à apprendre</p>
                  <p>⚽ Regardez plus de matches</p>
                  <p>💪 Réessayez pour vous améliorer</p>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Action Buttons - Mobile Optimized */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8">
          <Button 
            onClick={onRestart}
            className="w-full sm:w-auto bg-gradient-to-r from-football-blue to-football-grass hover:from-football-blue-dark hover:to-football-grass-dark active:scale-95 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-full transform sm:hover:scale-105 transition-all duration-300 border-0"
          >
            <RotateCcw className="mr-2 sm:mr-3" size={18} />
            Rejouer
          </Button>
          
          <Button 
            onClick={onHome}
            className="w-full sm:w-auto bg-white text-football-blue border-2 border-football-blue hover:bg-football-blue hover:text-white active:scale-95 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-full transform sm:hover:scale-105 transition-all duration-300"
          >
            <Home className="mr-2 sm:mr-3" size={18} />
            Accueil
          </Button>
        </div>

        {/* Share Section - Mobile Optimized */}
        <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gray-50 rounded-2xl">
          <h4 className="font-bold text-base sm:text-lg mb-2 sm:mb-3 text-gray-800">Partagez votre score !</h4>
          <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
            "J'ai obtenu {score}/{totalQuestions} ({percentage}%) au Football Quiz Mania ! ⚽🏆"
          </p>
          <div className="text-xs sm:text-sm text-gray-500">
            Défiez vos amis et voyez qui connaît le mieux le football !
          </div>
        </div>
      </Card>
    </div>
  );
};