export const prepositionsData = {
  id: "prepositions",
  title: "Prepositions",
  category: "Grammar",
  description: "Learn about positioning words like on, under, between, and through.",
  explanation: {
    meaning: "A Preposition is a positioning word. It tells us *where* something is (place), *when* something happened (time), or in *what direction* something is moving. Think of them as glue words that show spatial and timing relationships!",
    realLifeExamples: [
      {
        text: "The book is *on* the table.",
        analysis: "Tells us the physical contact position of the book relative to the table."
      },
      {
        text: "The cat slept *under* the bed.",
        analysis: "Tells us the cat was directly below the bed."
      }
    ],
    animationType: "catPrepositions", // triggers CatPrepositions animation component
    keyConcepts: [
      {
        name: "Prepositions of Place",
        description: "Show where something is located.",
        example: "in, on, at, under, behind, between, beside."
      },
      {
        name: "Prepositions of Time",
        description: "Show when something happens.",
        example: "on Monday, at 5 PM, in December, since 2018."
      },
      {
        name: "Tricky Pairs (Between vs. Among)",
        description: "'Between' is typically used for two people/things. 'Among' is used for three or more.",
        example: "Distribute the sweets *between* Rohan and Sohan. Distribute the sweets *among* all the students."
      }
    ]
  },
  questions: [
    {
      topic: "Prepositions",
      difficulty: "Beginner",
      question: "Fill in the blank: 'The keys are lying ______ the drawer.'",
      options: ["in", "on", "at", "between"],
      answer: "in",
      explanation: "Since the keys are inside a three-dimensional container (the drawer), we use the preposition 'in'.",
      frequency_score: 5
    },
    {
      topic: "Prepositions",
      difficulty: "Intermediate",
      question: "Choose the correct preposition: 'The property was divided ______ the four brothers.'",
      options: ["between", "among", "with", "in"],
      answer: "among",
      explanation: "Since the division is happening among more than two people (four brothers), we use 'among'.",
      frequency_score: 5
    },
    {
      topic: "Prepositions",
      difficulty: "Advanced",
      question: "Identify the error in preposition usage: 'The manager was angry (A) at his secretary (B) for the delay (C) in submitting the report (D).'",
      options: ["A", "B", "C", "D"],
      answer: "B",
      explanation: "We are angry 'with' a person, but angry 'at' a situation or action. It should be 'angry with his secretary'.",
      frequency_score: 5
    },
    {
      topic: "Prepositions",
      difficulty: "PYQ",
      question: "Which of the following contains the correct prepositional phrase: 'He has been suffering from fever ______ last week.'",
      options: ["for", "since", "from", "in"],
      answer: "since",
      explanation: "For a specific point of time in the past ('last week') in a perfect tense, we use 'since'. We use 'for' for a duration (e.g. 'for seven days').",
      frequency_score: 5
    }
  ]
};
