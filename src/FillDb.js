

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
      realm.create('Question', { id: 1, question: 'Hvad er en bi?', questionStatus: 0, quizId: 1 })
      realm.create('Question', { id: 2, question: 'Hvad er dronning bi?', questionStatus: 0, quizId: 1 })
      realm.create('Question', { id: 3, question: 'Hvad laver bier?', questionStatus: 0, quizId: 1 })
      realm.create('Question', { id: 4, question: 'Hvor får bier nektar?', questionStatus: 0, quizId: 1 })
      realm.create('Question', { id: 5, question: 'Gør det ondt at af blivet stikket af en bi?', questionStatus: 0, quizId: 1 })
     
    })

    //create answers  

    realm.write(() => {
      //First we remove all the old quizes in the database
      let allAnswer = realm.objects('Answer');
      realm.delete(allAnswer); // Deletes all Quiz
      //Start of create
      //svar til Q1
      realm.create('Answer', { id: 1, answer: 'En pattedyr', questionId: 1, flag: false })
      realm.create('Answer', { id: 2, answer: 'En bilmærke', questionId: 1, flag: false })
      realm.create('Answer', { id: 3, answer: 'En insekt', questionId: 1, flag: true })
      //svar til Q2
      realm.create('Answer', { id: 4, answer: 'Dronning af England', questionId: 2, flag: false })
      realm.create('Answer', { id: 5, answer: 'Droning af bikuben', questionId: 2, flag: true })
      realm.create('Answer', { id: 6, answer: ' ¯\\_(ツ)_/¯', questionId: 2, flag: false })

      //svar til Q3
      realm.create('Answer', { id: 7, answer: 'Sennep', questionId: 3, flag: false })
      realm.create('Answer', { id: 8, answer: 'Ketchup', questionId: 3, flag: false })
      realm.create('Answer', { id: 9, answer: 'Honning', questionId: 3, flag: true })

      //svar til Q4
      realm.create('Answer', { id: 10, answer: 'Fakta', questionId: 4, flag: false })
      realm.create('Answer', { id: 11, answer: 'Blomster', questionId: 4, flag: true })
      realm.create('Answer', { id: 12, answer: 'Vandet', questionId: 4, flag: false })

      //svar til Q5
      realm.create('Answer', { id: 13, answer: 'Ja', questionId: 5, flag: true })
      realm.create('Answer', { id: 14, answer: 'Nej', questionId: 5, flag: false })
      realm.create('Answer', { id: 15, answer: 'Astrospektroskopie', questionId: 5, flag: false })

    })

  }


}


module.exports = Data;