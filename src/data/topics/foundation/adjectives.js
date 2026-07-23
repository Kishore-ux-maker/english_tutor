export const adjectivesData = {
  id: "adjectives",
  title: "Adjectives",
  category: "Foundation",
  description: "Learn about adjectives - the colorful words that describe nouns and pronouns.",
  explanation: {
    meaning: "An Adjective is a 'describing word'. It adds details to a noun or pronoun. Think of it like makeup: it makes a simple noun look more specific, colorful, or detailed! It answers: What kind? How many? Which one?",
    realLifeExamples: [
      {
        text: "The *lazy* boy sat on a *comfy* chair.",
        analysis: "'lazy' describes the boy (what kind of boy). 'comfy' describes the chair (what kind of chair)."
      }
    ],
    animationType: "sentenceBuilder",
    keyConcepts: [
      {
        name: "Descriptive Adjective",
        description: "Describes the quality or state of a noun.",
        example: "*beautiful* garden, *tall* girl, *cold* milk."
      },
      {
        name: "Adjective of Quantity",
        description: "Tells how much or how many.",
        example: "*some* water, *five* apples, *many* students."
      },
      {
        name: "Degrees of Comparison",
        description: "Adjectives change form when comparing things: Positive (base), Comparative (comparing two), Superlative (comparing three or more).",
        example: "tall → taller → tallest; beautiful → more beautiful → most beautiful."
      }
    ]
  },
  questions: [
    {
      topic: "Adjectives",
      difficulty: "Beginner",
      question: "Which of the following contains a Superlative Adjective?",
      options: [
        "Amit is a smart boy.",
        "Amit is smarter than Rohan.",
        "Amit is the smartest boy in the class.",
        "Amit is not very smart."
      ],
      answer: "Amit is the smartest boy in the class.",
      explanation: "'Smartest' is the superlative form of the adjective 'smart', used when comparing Amit to the entire class.",
      frequency_score: 5
    },
    {
      topic: "Adjectives",
      difficulty: "Intermediate",
      question: "Fill in the blank: 'Of the two options, this one is definitely ______.'",
      options: ["good", "better", "best", "the best"],
      answer: "better",
      explanation: "When comparing exactly *two* things, we must use the comparative degree ('better'), not the superlative degree ('best').",
      frequency_score: 5
    },
    {
      topic: "Adjectives",
      difficulty: "Advanced",
      question: "Choose the correct order of adjectives: 'She bought a ______ dress.'",
      options: [
        "beautiful blue cotton",
        "cotton blue beautiful",
        "blue cotton beautiful",
        "beautiful cotton blue"
      ],
      answer: "beautiful blue cotton",
      explanation: "Adjective order rule: Opinion ('beautiful') comes before Color ('blue'), which comes before Material ('cotton'). So, 'beautiful blue cotton' is correct.",
      frequency_score: 4
    },
    {
      topic: "Adjectives",
      difficulty: "PYQ",
      question: "Identify the error in adjective usage: 'He is senior than (A) all his colleagues (B) in this department (C) of the bank (D).'",
      options: ["A", "B", "C", "D"],
      answer: "A",
      explanation: "Adjectives ending in '-ior' (like senior, junior, superior, inferior, prior) take the preposition 'to' instead of 'than' for comparison. It should be 'senior to all his colleagues'.",
      frequency_score: 5
    }
  ]
};
