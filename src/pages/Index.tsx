import React, { useState } from 'react';
import { WelcomeScreen } from '@/components/WelcomeScreen';
import { QuizGame } from '@/components/QuizGame';
import { ResultScreen } from '@/components/ResultScreen';

type GameState = 'welcome' | 'playing' | 'results';

const Index = () => {
  const [gameState, setGameState] = useState<GameState>('welcome');
  const [finalScore, setFinalScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  const startGame = () => {
    setGameState('playing');
  };

  const finishGame = (score: number, total: number) => {
    setFinalScore(score);
    setTotalQuestions(total);
    setGameState('results');
  };

  const restartGame = () => {
    setFinalScore(0);
    setTotalQuestions(0);
    setGameState('playing');
  };

  const goHome = () => {
    setGameState('welcome');
    setFinalScore(0);
    setTotalQuestions(0);
  };

  return (
    <>
      {gameState === 'welcome' && <WelcomeScreen onStart={startGame} />}
      {gameState === 'playing' && <QuizGame onFinish={finishGame} />}
      {gameState === 'results' && (
        <ResultScreen 
          score={finalScore} 
          totalQuestions={totalQuestions}
          onRestart={restartGame}
          onHome={goHome}
        />
      )}
    </>
  );
};

export default Index;
