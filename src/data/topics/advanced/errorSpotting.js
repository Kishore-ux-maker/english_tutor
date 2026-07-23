export const errorSpottingData = {
  id: "errorSpotting",
  title: "Error Spotting",
  category: "Advanced",
  description: "Learn how to spot grammatical, spelling, and punctuation errors in sentence structures.",
  explanation: {
    meaning: "Error Spotting is the ultimate test of your English fundamentals. In exams, you are given a sentence divided into 4 parts, and you have to find which part has a grammatical mistake. Think of it like a safety inspector checking a machinery line for a single loose screw!",
    realLifeExamples: [
      {
        text: "Sentence: 'One of my friends (A) are (B) a doctor (C).'",
        analysis: "The screw is 'are' (B). 'One of' is followed by a plural noun ('friends') but takes a singular verb. It should be 'is a doctor'."
      }
    ],
    animationType: "sentenceBuilder",
    keyConcepts: [
      {
        name: "Subject-Verb Agreement Checks",
        description: "Check if singular subjects have singular verbs and plural subjects have plural verbs. This is the source of 40% of error spotting questions.",
        example: "Many a student *has* (not have) passed."
      },
      {
        name: "Noun & Pronoun Case Errors",
        description: "Watch out for uncountable nouns used in plural form (sceneries, informations, baggages) and wrong relative pronouns.",
        example: "The scenery of Kashmir *is* beautiful (not sceneries are)."
      },
      {
        name: "Tense Inconsistency",
        description: "A sentence starting in the past tense should generally remain in the past tense unless there is a clear time shift.",
        example: "He told me that he *liked* (not likes) apples."
      }
    ]
  },
  questions: [
    {
      topic: "Error Spotting",
      difficulty: "Beginner",
      question: "Spot the error: 'He has (A) been teaching (B) here (C) for 2015 (D).'",
      options: ["A", "B", "C", "D"],
      answer: "D",
      explanation: "2015 is a specific point in time, so we must use 'since 2015', not 'for 2015'. 'For' is used for a duration (e.g. 'for ten years').",
      frequency_score: 5
    },
    {
      topic: "Error Spotting",
      difficulty: "Intermediate",
      question: "Spot the error: 'No sooner did (A) the teacher enter (B) the classroom when (C) the students stood up (D).'",
      options: ["A", "B", "C", "D"],
      answer: "C",
      explanation: "'No sooner' is always paired with 'than', not 'when'. Part C should be 'than the students stood up'.",
      frequency_score: 5
    },
    {
      topic: "Error Spotting",
      difficulty: "Advanced",
      question: "Spot the error: 'The climate (A) of Shimla (B) is colder (C) than Delhi (D).'",
      options: ["A", "B", "C", "D"],
      answer: "D",
      explanation: "This is a comparison error. We are comparing the climate of Shimla with the *climate* of Delhi, not with Delhi itself. It should be 'than that of Delhi' or 'than Delhi's climate'.",
      frequency_score: 5
    },
    {
      topic: "Error Spotting",
      difficulty: "PYQ",
      question: "Spot the error: 'Hardly had he (A) left the station (B) than the train (C) started running (D).'",
      options: ["A", "B", "C", "D"],
      answer: "C",
      explanation: "'Hardly' and 'Scarcely' are paired with 'when' or 'before', never with 'than'. It should be 'when the train started running'.",
      frequency_score: 5
    }
  ]
};
