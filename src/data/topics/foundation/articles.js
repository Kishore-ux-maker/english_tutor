export const articlesData = {
  id: "articles",
  title: "Articles",
  category: "Foundation",
  description: "Learn when to use A, An, and The correctly.",
  explanation: {
    meaning: "Articles are helpers that tell us if we are talking about *any* general thing (A, An) or a *specific* particular thing (The). Think of it like this: 'Give me *a* pen' means any pen on the table. 'Give me *the* red pen' means a specific red pen we both see!",
    realLifeExamples: [
      {
        text: "I saw *an* elephant in the zoo. *The* elephant was eating sugarcanes.",
        analysis: "First time we mention it, it's any elephant ('an elephant'). The second time, it's specific, so we use 'the elephant'."
      }
    ],
    animationType: "sentenceBuilder",
    keyConcepts: [
      {
        name: "Indefinite Articles (A / An)",
        description: "Used for general, singular, countable nouns. 'A' is used before consonant sounds. 'An' is used before vowel sounds.",
        example: "*a* book, *an* hour (hour starts with silent 'h', giving a vowel sound 'ow-er')."
      },
      {
        name: "Definite Article (The)",
        description: "Used for specific things, things already mentioned, unique things, or superlatives.",
        example: "*the* sun, *the* tallest building, *the* boy in the blue shirt."
      }
    ]
  },
  questions: [
    {
      topic: "Articles",
      difficulty: "Beginner",
      question: "Which article should go in the blank: 'He is ______ honest man.'",
      options: ["a", "an", "the", "No article needed"],
      answer: "an",
      explanation: "Although 'honest' starts with the consonant letter 'h', the 'h' is silent. The word is pronounced with a vowel sound ('on-est'), so we use 'an'.",
      frequency_score: 5
    },
    {
      topic: "Articles",
      difficulty: "Intermediate",
      question: "Fill in the blanks: '______ Nile is ______ longest river in the world.'",
      options: ["A / the", "The / the", "The / a", "No article / the"],
      answer: "The / the",
      explanation: "We use 'the' before names of major rivers ('The Nile') and before superlative adjectives ('the longest').",
      frequency_score: 5
    },
    {
      topic: "Articles",
      difficulty: "Advanced",
      question: "Identify the grammatically correct sentence:",
      options: [
        "The gold is a precious metal.",
        "Gold is a precious metal.",
        "A gold is a precious metal.",
        "The gold is the precious metal."
      ],
      answer: "Gold is a precious metal.",
      explanation: "Generally, no article is used before material nouns like 'gold', 'silver', 'wood' when they are used in a general sense.",
      frequency_score: 4
    },
    {
      topic: "Articles",
      difficulty: "PYQ",
      question: "Find the error: 'The English (A) defeated French (B) in the battle (C) of Waterloo (D).'",
      options: ["A", "B", "C", "D"],
      answer: "B",
      explanation: "'The English' refers to the English people. To refer to the French people, it must be 'the French'. Thus, 'French' should be replaced by 'the French'.",
      frequency_score: 5
    }
  ]
};
