export const pronounsData = {
  id: "pronouns",
  title: "Pronouns",
  category: "Foundation",
  description: "Learn about pronouns - the words that replace nouns to make sentences less repetitive.",
  explanation: {
    meaning: "A Pronoun is a word used in place of a noun. Imagine if you had to say: 'Ramesh called Ramesh's mother to tell Ramesh's mother that Ramesh would be late.' That sounds exhausting! Pronouns help us say: 'Ramesh called *his* mother to tell *her* that *he* would be late.'",
    realLifeExamples: [
      {
        text: "Karan is a good student. He studies everyday.",
        analysis: "'He' replaces 'Karan' so we don't have to repeat his name."
      }
    ],
    animationType: "sentenceBuilder",
    keyConcepts: [
      {
        name: "Personal Pronoun",
        description: "Replaces names of people or things.",
        example: "I, you, he, she, it, we, they, me, him, her, us, them."
      },
      {
        name: "Possessive Pronoun",
        description: "Shows ownership.",
        example: "mine, yours, his, hers, ours, theirs."
      },
      {
        name: "Relative Pronoun",
        description: "Connects a clause or phrase to a noun or pronoun.",
        example: "who, whom, whose, which, that."
      },
      {
        name: "Reflexive Pronoun",
        description: "Used when the object of a sentence is the same as the subject.",
        example: "myself, yourself, himself, herself, itself, ourselves, themselves."
      }
    ]
  },
  questions: [
    {
      topic: "Pronouns",
      difficulty: "Beginner",
      question: "Choose the correct pronoun: 'Geeta and ______ went to the market.'",
      options: ["I", "me", "myself", "mine"],
      answer: "I",
      explanation: "Since the pronoun is part of the subject (the ones going to the market), we use the subjective pronoun 'I', not the objective 'me' or reflexive 'myself'.",
      frequency_score: 5
    },
    {
      topic: "Pronouns",
      difficulty: "Intermediate",
      question: "Fill in the blank: 'The girl ______ won the gold medal is my sister.'",
      options: ["which", "who", "whom", "whose"],
      answer: "who",
      explanation: "We use 'who' as a relative pronoun for the subject (the girl did the action of winning). 'Whom' is used for the object.",
      frequency_score: 5
    },
    {
      topic: "Pronouns",
      difficulty: "Advanced",
      question: "Identify the error in pronoun usage: 'Between you and I (A), this plan is not (B) going to work out (C) successfully (D).'",
      options: ["A", "B", "C", "D"],
      answer: "A",
      explanation: "'Between' is a preposition. Prepositions must be followed by objective pronouns. It should be 'Between you and me', not 'Between you and I'.",
      frequency_score: 5
    },
    {
      topic: "Pronouns",
      difficulty: "PYQ",
      question: "Choose the grammatically correct sentence:",
      options: [
        "One should do his duty diligently.",
        "One should do one's duty diligently.",
        "One should do their duty diligently.",
        "One should do her duty diligently."
      ],
      answer: "One should do one's duty diligently.",
      explanation: "When the indefinite pronoun 'one' is used, its possessive form must be 'one's', not 'his' or 'their'. This is a highly repeated competitive exam rule.",
      frequency_score: 5
    }
  ]
};
