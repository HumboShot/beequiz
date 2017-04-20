

import realm from './realm';



var Data = {
  fillDb: function(){
     realm.write(() => {
      //First we remove all the old quizes in the database
      let allQuiz = realm.objects('Quiz');
      realm.delete(allQuiz); // Deletes all Quiz
      //Start of create
      realm.create('Quiz', { id: 1, name: 'Bier for begynder' })
    })

    //create questions

    realm.write(() => {
      //First we remove all the old questions in the database
      let allQuestion = realm.objects('Question');
      realm.delete(allQuestion); // Deletes all Question
      //Start of create
      realm.create('Question', { id: 1, question: 'Q1', questionStatus: 0, quizId: 1 })
      realm.create('Question', { id: 2, question: 'Q2', questionStatus: 0, quizId: 1 })
      realm.create('Question', { id: 3, question: 'Q3', questionStatus: 0, quizId: 1 })
      realm.create('Question', { id: 4, question: 'Q4', questionStatus: 0, quizId: 1 })
      realm.create('Question', { id: 5, question: 'Q5', questionStatus: 0, quizId: 1 })
      realm.create('Question', { id: 6, question: 'Q5', questionStatus: 0, quizId: 1 })
    })

    //create answers  

    realm.write(() => {
      //First we remove all the old quizes in the database
      let allAnswer = realm.objects('Answer');
      realm.delete(allAnswer); // Deletes all Quiz
      //Start of create
      //svar til Q1
      realm.create('Answer', { id: 1, answer: 'svar1', questionId: 1, flag: true })
      realm.create('Answer', { id: 2, answer: 'svar2', questionId: 1, flag: false })
      realm.create('Answer', { id: 3, answer: 'svar3', questionId: 1, flag: false })
      //svar til Q2
      realm.create('Answer', { id: 4, answer: 'svar1', questionId: 2, flag: true })
      realm.create('Answer', { id: 5, answer: 'svar2', questionId: 2, flag: false })
      realm.create('Answer', { id: 6, answer: 'svar3', questionId: 2, flag: false })

      //svar til Q3
      realm.create('Answer', { id: 7, answer: 'svar1', questionId: 3, flag: true })
      realm.create('Answer', { id: 8, answer: 'svar2', questionId: 3, flag: false })
      realm.create('Answer', { id: 9, answer: 'svar3', questionId: 3, flag: false })

      //svar til Q4
      realm.create('Answer', { id: 10, answer: 'svar1', questionId: 4, flag: true })
      realm.create('Answer', { id: 11, answer: 'svar2', questionId: 4, flag: false })
      realm.create('Answer', { id: 12, answer: 'svar3', questionId: 4, flag: false })

      //svar til Q5
      realm.create('Answer', { id: 13, answer: 'svar1', questionId: 5, flag: true })
      realm.create('Answer', { id: 14, answer: 'svar2', questionId: 5, flag: false })
      realm.create('Answer', { id: 15, answer: 'svar3', questionId: 5, flag: false })

    })

  }


}


module.exports = Data;