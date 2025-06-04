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
    <div className="min-h-screen bg-gradient-to-br from-football-grass via-football-field to-football-grass-dark flex items-center justify-center p-4">
      {/* Confetti Animation Background */}
      {percentage >= 75 && (
        <div className="fixed inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
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
              <Star className="text-yellow-400" size={16} />
            </div>
          ))}
        </div>
      )}

      <Card className="w-full max-w-4xl mx-auto p-8 md:p-12 bg-white/95 backdrop-blur-sm shadow-2xl text-center animate-slide-up">
        {/* Performance Badge */}
        <div className="mb-8">
          <div className={`inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br ${performance.color} text-white text-4xl mb-6 animate-bounce-in shadow-2xl`}>
            {performance.emoji}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
            Quiz Terminé !
          </h1>
          <p className="text-xl text-gray-600">
            {getMotivationalMessage()}
          </p>
        </div>

        {/* Score Display */}
        <div className="bg-gradient-to-r from-football-blue to-football-grass p-8 rounded-2xl mb-8 text-white">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <Trophy size={48} className="mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">{score}/{totalQuestions}</h3>
              <p className="text-lg opacity-90">Score Final</p>
            </div>
            
            <div className="text-center">
              <Target size={48} className="mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">{percentage}%</h3>
              <p className="text-lg opacity-90">Précision</p>
            </div>
            
            <div className="text-center">
              <Zap size={48} className="mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">{performance.level}</h3>
              <p className="text-lg opacity-90">Niveau</p>
            </div>
          </div>
        </div>

        {/* Performance Breakdown */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 p-6 rounded-xl">
            <h4 className="font-bold text-lg mb-4 text-gray-800">Vos Statistiques</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Bonnes réponses:</span>
                <span className="font-bold text-green-600">{score}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Mauvaises réponses:</span>
                <span className="font-bold text-red-600">{totalQuestions - score}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Taux de réussite:</span>
                <span className="font-bold text-blue-600">{percentage}%</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl">
            <h4 className="font-bold text-lg mb-4 text-gray-800">Conseils</h4>
            <div className="text-left text-gray-600 space-y-2">
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

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button 
            onClick={onRestart}
            className="bg-gradient-to-r from-football-blue to-football-grass hover:from-football-blue-dark hover:to-football-grass-dark text-white px-8 py-4 text-lg font-bold rounded-full transform hover:scale-105 transition-all duration-300"
          >
            <RotateCcw className="mr-3" size={20} />
            Rejouer
          </Button>
          
          <Button 
            onClick={onHome}
            className="bg-white text-football-blue border-2 border-football-blue hover:bg-football-blue hover:text-white px-8 py-4 text-lg font-bold rounded-full transform hover:scale-105 transition-all duration-300"
          >
            <Home className="mr-3" size={20} />
            Accueil
          </Button>
        </div>

        {/* Share Section */}
        <div className="mt-8 p-6 bg-gray-50 rounded-xl">
          <h4 className="font-bold text-lg mb-3 text-gray-800">Partagez votre score !</h4>
          <p className="text-gray-600 mb-4">
            "J'ai obtenu {score}/{totalQuestions} ({percentage}%) au Football Quiz Mania ! ⚽🏆"
          </p>
          <div className="text-sm text-gray-500">
            Défiez vos amis et voyez qui connaît le mieux le football !
          </div>
        </div>
      </Card>
    </div>
  );
};