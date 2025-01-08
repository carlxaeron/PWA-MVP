import React, { useEffect, useState } from 'react';
import generateClassNames from '../utils/generateClassNames';

const Quiz = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await fetch('/api/quizzes');
        const data = await response.json();
        setQuizzes(data);
      } catch (error) {
        console.error('Error fetching quizzes:', error);
      }
    };

    fetchQuizzes();
  }, []);

  return (
    <div className={generateClassNames('container', { 'bg-gray-100': true })}>
      <h2 className={generateClassNames('text-2xl font-bold', { 'text-gray-800': true })}>Quizzes</h2>
      {quizzes.length > 0 ? (
        quizzes.map((quiz) => (
          <div key={quiz.quizId} className={generateClassNames('p-4 mb-4 border rounded', { 'border-gray-300': true })}>
            <h3 className={generateClassNames('text-xl font-semibold', { 'text-gray-700': true })}>{quiz.title}</h3>
            <p className={generateClassNames('text-gray-600', { 'text-sm': true })}>{quiz.description}</p>
            <ul>
              {quiz.questions.map((question) => (
                <li key={question.questionId}>
                  <p className={generateClassNames('text-gray-700', { 'text-base': true })}>{question.questionText}</p>
                  <ul>
                    {question.options.map((option, index) => (
                      <li key={index} className={generateClassNames('text-gray-600', { 'text-sm': true })}>{option}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p className={generateClassNames('text-gray-500', { 'text-sm': true })}>No quizzes available.</p>
      )}
    </div>
  );
};

export default Quiz;
