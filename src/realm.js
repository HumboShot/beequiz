 import React from 'react';


   const QuestionSchema = {
  name: 'Question',
  primaryKey: 'id',
  properties: {
    id: 'int',
    question: 'string',
    questionStatus: 'int',
    quizId: 'int'

  }
}

const QuizSchema = {
  name: 'Quiz',
  primaryKey: 'id',
  properties: {
    id: 'int',
    name: 'string',
    questionFinished: { type: 'bool', default: false },
    score: { type: 'int', default: 0 }

  }
}

const AnswerSchema = {
  name: 'Answer',
  primaryKey: 'id',
  properties: {
    id: 'int',
    answer: 'string',
    questionId: 'int',
    flag: 'bool'

  }
}

export default new Realm({ schema: [QuizSchema, QuestionSchema, AnswerSchema] })