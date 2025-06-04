import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Trophy, Clock, Zap, Users, Target, ChevronRight } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  difficulty: 'easy' | 'medium' | 'hard';
}

const questions: Question[] = [
  {
    id: 1,
    question: "Qui a remporté le Ballon d'Or 2023 ?",
    options: ["Lionel Messi", "Erling Haaland", "Kylian Mbappé", "Karim Benzema"],
    correctAnswer: 0,
    difficulty: 'easy'
  },
  {
    id: 2,
    question: "Quelle équipe a gagné la Coupe du Monde 2022 ?",
    options: ["France", "Argentine", "Brésil", "Espagne"],
    correctAnswer: 1,
    difficulty: 'easy'
  },
  {
    id: 3,
    question: "Dans quel club Cristiano Ronaldo a-t-il marqué le plus de buts ?",
    options: ["Manchester United", "Juventus", "Real Madrid", "Al-Nassr"],
    correctAnswer: 2,
    difficulty: 'medium'
  },
  {
    id: 4,
    question: "Qui détient le record du plus grand nombre de buts en Ligue des Champions ?",
    options: ["Lionel Messi", "Cristiano Ronaldo", "Robert Lewandowski", "Karim Benzema"],
    correctAnswer: 1,
    difficulty: 'medium'
  },
  {
    id: 5,
    question: "En quelle année le FC Barcelone a-t-il remporté son premier 'sextuplé' ?",
    options: ["2008", "2009", "2010", "2011"],
    correctAnswer: 1,
    difficulty: 'hard'
  },
  {
    id: 6,
    question: "Quel joueur a marqué le but le plus rapide en Coupe du Monde ?",
    options: ["Hakan Şükür", "Clint Dempsey", "Tim Cahill", "Robbie Keane"],
    correctAnswer: 0,
    difficulty: 'hard'
  },
  {
    id: 7,
    question: "Combien de fois le Brésil a-t-il remporté la Coupe du Monde ?",
    options: ["4", "5", "6", "3"],
    correctAnswer: 1,
    difficulty: 'medium'
  },
  {
    id: 8,
    question: "Qui est le meilleur buteur de l'histoire de l'équipe de France ?",
    options: ["Thierry Henry", "Olivier Giroud", "Antoine Griezmann", "Michel Platini"],
    correctAnswer: 1,
    difficulty: 'easy'
  }
];

interface QuizGameProps {
  onFinish: (score: number, totalQuestions: number) => void;
}

export const QuizGame: React.FC<QuizGameProps> = ({ onFinish }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(20);
  const [isAnswered, setIsAnswered] = useState(false);

  useEffect(() => {
    if (timeLeft > 0 && !isAnswered) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !isAnswered) {
      handleNextQuestion();
    }
  }, [timeLeft, isAnswered]);

  useEffect(() => {
    setTimeLeft(20);
    setIsAnswered(false);
    setSelectedAnswer(null);
    setShowResult(false);
  }, [currentQuestion]);

  const handleAnswerSelect = (answerIndex: number) => {
    if (isAnswered) return;
    
    setSelectedAnswer(answerIndex);
    setIsAnswered(true);
    
    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    
    setTimeout(() => {
      handleNextQuestion();
    }, 1500);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onFinish(score + (selectedAnswer === questions[currentQuestion].correctAnswer ? 1 : 0), questions.length);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-500';
      case 'medium': return 'bg-yellow-500';
      case 'hard': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getButtonClass = (index: number) => {
    if (!isAnswered) {
      return "bg-white border-2 border-football-blue hover:bg-football-blue hover:text-white transition-all duration-300 transform hover:scale-105";
    }
    
    if (index === questions[currentQuestion].correctAnswer) {
      return "bg-football-grass text-white animate-pulse-green border-2 border-football-grass";
    }
    
    if (index === selectedAnswer && index !== questions[currentQuestion].correctAnswer) {
      return "bg-red-500 text-white animate-pulse-red border-2 border-red-500 animate-shake";
    }
    
    return "bg-gray-200 text-gray-500 border-2 border-gray-200";
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-football-grass via-football-field to-football-grass-dark flex items-center justify-center p-2 sm:p-4">
      <Card className="w-full max-w-sm sm:max-w-4xl mx-auto p-4 sm:p-8 bg-white/95 backdrop-blur-sm shadow-2xl animate-slide-up border-0 rounded-3xl sm:rounded-2xl">
        {/* Header - Mobile Optimized */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8 space-y-3 sm:space-y-0">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="bg-football-blue text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-bold text-sm sm:text-base">
              Q {currentQuestion + 1}/{questions.length}
            </div>
            <div className={`px-2 py-1 sm:px-3 sm:py-1 rounded-full text-white text-xs sm:text-sm ${getDifficultyColor(questions[currentQuestion].difficulty)}`}>
              {questions[currentQuestion].difficulty.toUpperCase()}
            </div>
          </div>
          
          <div className="flex items-center space-x-4 sm:space-x-6">
            <div className="flex items-center space-x-1.5 sm:space-x-2 text-football-blue">
              <Trophy size={18} className="sm:w-5 sm:h-5" />
              <span className="font-bold text-sm sm:text-base">{score}</span>
            </div>
            <div className={`flex items-center space-x-1.5 sm:space-x-2 ${timeLeft <= 5 ? 'text-red-500 animate-pulse' : 'text-football-blue'}`}>
              <Clock size={18} className="sm:w-5 sm:h-5" />
              <span className="font-bold text-lg sm:text-base">{timeLeft}s</span>
            </div>
          </div>
        </div>

        {/* Progress Bar - Mobile Optimized */}
        <div className="mb-6 sm:mb-8">
          <Progress value={progress} className="h-2 sm:h-3 bg-gray-200">
            <div 
              className="h-full bg-gradient-to-r from-football-blue to-football-grass transition-all duration-500 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </Progress>
        </div>

        {/* Question - Mobile Optimized */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-800 text-center mb-4 sm:mb-6 animate-bounce-in leading-tight px-2">
            {questions[currentQuestion].question}
          </h2>
        </div>

        {/* Answer Options - Mobile Optimized */}
        <div className="space-y-3 sm:grid sm:grid-cols-1 md:grid-cols-2 sm:gap-4 sm:space-y-0 mb-6 sm:mb-8">
          {questions[currentQuestion].options.map((option, index) => (
            <Button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={`h-auto p-4 sm:p-6 text-left justify-start text-base sm:text-lg font-medium w-full border-0 rounded-2xl active:scale-95 sm:hover:scale-105 transition-all duration-300 ${getButtonClass(index)}`}
              disabled={isAnswered}
            >
              <div className="flex items-center justify-between w-full">
                <span className="flex items-center">
                  <span className="bg-football-blue text-white rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center mr-3 sm:mr-4 text-xs sm:text-sm font-bold flex-shrink-0">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="min-w-0 text-left">{option}</span>
                </span>
                <ChevronRight size={16} className="opacity-50 flex-shrink-0 ml-2" />
              </div>
            </Button>
          ))}
        </div>

        {/* Stats Bar - Mobile Optimized */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-600">
          <div className="flex items-center space-x-1.5 sm:space-x-2">
            <Target size={14} className="sm:w-4 sm:h-4" />
            <span className="whitespace-nowrap">Précision: {currentQuestion > 0 ? Math.round((score / currentQuestion) * 100) : 0}%</span>
          </div>
          <div className="flex items-center space-x-1.5 sm:space-x-2">
            <Zap size={14} className="sm:w-4 sm:h-4" />
            <span className="whitespace-nowrap">Vitesse: {timeLeft > 15 ? 'Rapide' : timeLeft > 10 ? 'Moyen' : 'Lent'}</span>
          </div>
          <div className="flex items-center space-x-1.5 sm:space-x-2">
            <Users size={14} className="sm:w-4 sm:h-4" />
            <span className="whitespace-nowrap">Niveau: {questions[currentQuestion].difficulty}</span>
          </div>
        </div>
      </Card>
    </div>
  );
};