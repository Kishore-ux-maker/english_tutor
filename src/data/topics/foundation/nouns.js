export const nounsData = {
  id: "nouns",
  title: "Nouns",
  category: "Foundation",
  description: "Learn about nouns, naming words, and how they identify everything around us.",
  explanation: {
    meaning: "A Noun is simply a 'naming word'. If you can touch it, see it, feel it, name it, or think about it, it's a noun! It names a person, place, thing, quality, or idea.",
    realLifeExamples: [
      {
        text: "Rahul went to Delhi with his dog in search of happiness.",
        analysis: "Here: 'Rahul' (person), 'Delhi' (place), 'dog' (animal/thing), and 'happiness' (idea/feeling) are all Nouns."
      }
    ],
    animationType: "sentenceBuilder",
    keyConcepts: [
      {
        name: "Proper Noun",
        description: "Specific names of people, places, or things. Always starts with a capital letter.",
        example: "India, Taj Mahal, Shweta."
      },
      {
        name: "Common Noun",
        description: "General names for things of the same kind.",
        example: "country, monument, girl."
      },
      {
        name: "Collective Noun",
        description: "Names a group of people or things as a single unit.",
        example: "a *herd* of cows, a *committee* of members, a *fleet* of ships."
      },
      {
        name: "Abstract Noun",
        description: "Things you cannot touch or see, like feelings, qualities, or concepts.",
        example: "love, anger, honesty, time."
      }
    ]
  },
  questions: [
    {
      topic: "Nouns",
      difficulty: "Beginner",
      question: "Which of the following is an Abstract Noun?",
      options: ["Golden Temple", "Teacher", "Honesty", "Crowd"],
      answer: "Honesty",
      explanation: "Honesty is a quality/concept that you cannot physically touch or see, making it an Abstract Noun.",
      frequency_score: 5
    },
    {
      topic: "Nouns",
      difficulty: "Intermediate",
      question: "Identify the Collective Noun in: 'The police dispersed the angry crowd before any damage was done.'",
      options: ["police", "dispersed", "crowd", "damage"],
      answer: "crowd",
      explanation: "'Crowd' is a collective noun referring to a collection of people. (Note: 'police' can also act collectively, but 'crowd' is the direct noun for a group of people here).",
      frequency_score: 4
    },
    {
      topic: "Nouns",
      difficulty: "Advanced",
      question: "Choose the correct noun form to complete the sentence: 'The committee _______ divided in their opinions regarding the new proposal.'",
      options: ["was", "were", "has been", "is"],
      answer: "were",
      explanation: "When a Collective Noun like 'committee' acts as individuals (divided in opinions), it takes a plural verb ('were'). If it acts as a single unified body, it takes a singular verb.",
      frequency_score: 5
    },
    {
      topic: "Nouns",
      difficulty: "PYQ",
      question: "Find the error in the sentence: 'All the pieces of equipments (A) were shipped (B) to the school laboratory (C) yesterday (D).'",
      options: ["A", "B", "C", "D"],
      answer: "A",
      explanation: "'Equipment' is an uncountable noun. It does not have a plural form 'equipments'. It should be 'pieces of equipment'.",
      frequency_score: 5
    }
  ]
};
