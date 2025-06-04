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
    <div className="min-h-screen bg-gradient-to-br from-football-grass via-football-field to-football-grass-dark flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl mx-auto p-8 bg-white/95 backdrop-blur-sm shadow-2xl animate-slide-up">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-4">
            <div className="bg-football-blue text-white px-4 py-2 rounded-full font-bold">
              Question {currentQuestion + 1}/{questions.length}
            </div>
            <div className={`px-3 py-1 rounded-full text-white text-sm ${getDifficultyColor(questions[currentQuestion].difficulty)}`}>
              {questions[currentQuestion].difficulty.toUpperCase()}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-football-blue">
              <Trophy size={20} />
              <span className="font-bold">{score}</span>
            </div>
            <div className={`flex items-center space-x-2 ${timeLeft <= 5 ? 'text-red-500 animate-pulse' : 'text-football-blue'}`}>
              <Clock size={20} />
              <span className="font-bold">{timeLeft}s</span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <Progress value={progress} className="h-3 bg-gray-200">
            <div 
              className="h-full bg-gradient-to-r from-football-blue to-football-grass transition-all duration-500 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </Progress>
        </div>

        {/* Question */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-6 animate-bounce-in">
            {questions[currentQuestion].question}
          </h2>
        </div>

        {/* Answer Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {questions[currentQuestion].options.map((option, index) => (
            <Button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={`h-auto p-6 text-left justify-start text-lg font-medium ${getButtonClass(index)}`}
              disabled={isAnswered}
            >
              <div className="flex items-center justify-between w-full">
                <span className="flex items-center">
                  <span className="bg-football-blue text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 text-sm font-bold">
                    {String.fromCharCode(65 + index)}
                  </span>
                  {option}
                </span>
                <ChevronRight size={20} className="opacity-50" />
              </div>
            </Button>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="flex justify-center space-x-8 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <Target size={16} />
            <span>Précision: {currentQuestion > 0 ? Math.round((score / currentQuestion) * 100) : 0}%</span>
          </div>
          <div className="flex items-center space-x-2">
            <Zap size={16} />
            <span>Vitesse: {timeLeft > 15 ? 'Rapide' : timeLeft > 10 ? 'Moyen' : 'Lent'}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users size={16} />
            <span>Niveau: {questions[currentQuestion].difficulty}</span>
          </div>
        </div>
      </Card>
    </div>
  );
};