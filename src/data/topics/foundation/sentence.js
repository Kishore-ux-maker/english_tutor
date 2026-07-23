export const sentenceData = {
  id: "sentence",
  title: "The Sentence",
  category: "Foundation",
  description: "Learn how words join together to express complete thoughts.",
  explanation: {
    meaning: "A sentence is simply a group of words put together in a way that makes complete sense. Think of it like a train: the cars (words) must be coupled in the right order for the train to move and carry its cargo (meaning)!",
    realLifeExamples: [
      {
        text: "The dog barked at the mailman.",
        analysis: "This makes full sense. We know who did what."
      },
      {
        text: "Under the warm sun.",
        analysis: "This is NOT a complete sentence. It's a phrase. Who or what is under the sun? What are they doing? We don't know!"
      }
    ],
    animationType: "sentenceBuilder", // triggers SentenceBuilder animation component
    keyConcepts: [
      {
        name: "Subject",
        description: "The hero of the sentence. The person, place, or thing that is doing or being something.",
        example: "In 'Rohan eats apples', 'Rohan' is the Subject."
      },
      {
        name: "Verb",
        description: "The action or state. What the Subject is doing or being.",
        example: "In 'Rohan eats apples', 'eats' is the Verb."
      },
      {
        name: "Object",
        description: "The receiver of the action.",
        example: "In 'Rohan eats apples', 'apples' is the Object."
      }
    ]
  },
  questions: [
    {
      topic: "Sentence",
      difficulty: "Beginner",
      question: "Identify the subject in this sentence: 'The curious cat climbed up the tall tree.'",
      options: ["climbed up", "the curious cat", "the tall tree", "up the tall tree"],
      answer: "the curious cat",
      explanation: "The subject is the performer of the action. Here, 'the curious cat' is the one performing the action of climbing.",
      frequency_score: 5
    },
    {
      topic: "Sentence",
      difficulty: "Intermediate",
      question: "Which of the following is a complete sentence (not a fragment)?",
      options: [
        "Although it was raining heavily last night.",
        "Walking down the busy street in Noida.",
        "She decided to study English instead of playing.",
        "Because he did not prepare for the exam."
      ],
      answer: "She decided to study English instead of playing.",
      explanation: "A complete sentence needs a subject, a verb, and a complete thought. Option 3 has all three. Options 1, 2, and 4 are dependent clauses or fragments that leave us hanging.",
      frequency_score: 4
    },
    {
      topic: "Sentence",
      difficulty: "Advanced",
      question: "Identify the nature of the underlined clause: 'The student *who scored highest* received an award.'",
      options: ["Noun Clause", "Adjective Clause", "Adverb Clause", "Co-ordinate Clause"],
      answer: "Adjective Clause",
      explanation: "The clause 'who scored highest' describes the noun 'The student'. Since it describes a noun, it functions as an adjective, making it an Adjective (or Relative) Clause.",
      frequency_score: 3
    },
    {
      topic: "Sentence",
      difficulty: "PYQ",
      question: "Rearrange the fragments to form a coherent sentence:\nA: in the competitive exams\nB: regular practice is\nC: key to scoring high\nD: the absolute\n",
      options: ["B - D - C - A", "A - B - C - D", "C - D - B - A", "D - C - A - B"],
      answer: "B - D - C - A",
      explanation: "The correct sequence is: 'Regular practice is (B) the absolute (D) key to scoring high (C) in the competitive exams (A)'. This forms a grammatically correct and meaningful sentence.",
      frequency_score: 5
    }
  ]
};
