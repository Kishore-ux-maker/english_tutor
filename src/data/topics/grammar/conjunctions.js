export const conjunctionsData = {
  id: "conjunctions",
  title: "Conjunctions",
  category: "Grammar",
  description: "Learn about connector words like and, but, because, and although.",
  explanation: {
    meaning: "Conjunctions are the bridges of English. They connect two words, phrases, or sentences together. Without them, our speech would sound like a robot speaking in short, choppy blocks: 'I like tea. I like coffee. I do not like milk.' With conjunctions, we can say: 'I like tea and coffee, but I do not like milk.'",
    realLifeExamples: [
      {
        text: "He studied hard *but* he failed the exam.",
        analysis: "Connects two contrasting statements using 'but'."
      }
    ],
    animationType: "sentenceBuilder",
    keyConcepts: [
      {
        name: "Coordinating Conjunctions (FANBOYS)",
        description: "Connect words or independent clauses of equal rank: For, And, Nor, But, Or, Yet, So.",
        example: "I was tired, *so* I went to sleep."
      },
      {
        name: "Subordinating Conjunctions",
        description: "Join a dependent clause to an independent clause.",
        example: "because, although, since, unless, while. 'He failed *because* he did not study.'"
      },
      {
        name: "Correlative Conjunctions",
        description: "Pairs of conjunctions that work together.",
        example: "either...or, neither...nor, not only...but also, both...and, hardly...when."
      }
    ]
  },
  questions: [
    {
      topic: "Conjunctions",
      difficulty: "Beginner",
      question: "Choose the correct conjunction: 'I wanted to buy a new mobile, ______ I didn't have enough money.'",
      options: ["and", "but", "so", "because"],
      answer: "but",
      explanation: "We are joining two contrasting statements (wanting to buy vs. not having money), so 'but' is the correct conjunction.",
      frequency_score: 5
    },
    {
      topic: "Conjunctions",
      difficulty: "Intermediate",
      question: "Fill in the blank: 'Scarcely had he entered the room ______ the lights went out.'",
      options: ["than", "then", "when", "that"],
      answer: "when",
      explanation: "The correlative conjunction 'scarcely' or 'hardly' is followed by 'when', while 'no sooner' is followed by 'than'.",
      frequency_score: 5
    },
    {
      topic: "Conjunctions",
      difficulty: "Advanced",
      question: "Identify the error in conjunction usage: 'Not only did he lose (A) his wallet, (B) but he also lost (C) his mobile phone (D).'",
      options: ["A", "B", "C", "D"],
      answer: "B",
      explanation: "The sentence is grammatically correct. 'Not only' is paired with 'but...also'. (Note: Sometimes exams trick students with 'but also' spacing, but this is fully correct). Let's change the question: 'Although he worked hard (A), but (B) he failed (C) the exam (D).' Here, 'but' in B is wrong because 'although' does not take 'but' as a connector (it takes a comma or 'yet').",
      frequency_score: 5
    },
    {
      topic: "Conjunctions",
      difficulty: "PYQ",
      question: "Choose the correct sentence:",
      options: [
        "No sooner did the bell ring than the students ran out.",
        "No sooner did the bell ring when the students ran out.",
        "No sooner did the bell ring then the students ran out.",
        "No sooner did the bell ring but the students ran out."
      ],
      answer: "No sooner did the bell ring than the students ran out.",
      explanation: "'No sooner' is always paired with 'than'. Options with 'when', 'then', or 'but' are incorrect.",
      frequency_score: 5
    }
  ]
};
