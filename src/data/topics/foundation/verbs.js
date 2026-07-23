export const verbsData = {
  id: "verbs",
  title: "Verbs",
  category: "Foundation",
  description: "Learn about verbs - the engines of sentences that show actions, states, or occurrences.",
  explanation: {
    meaning: "A Verb is the engine of a sentence. Without a verb, a sentence cannot move! It shows what the subject is *doing* (action) or what the subject *is* (state).",
    realLifeExamples: [
      {
        text: "Neha *runs* in the park.",
        analysis: "'runs' is an action verb. It tells us what Neha is physically doing."
      },
      {
        text: "Suresh *is* happy.",
        analysis: "'is' is a state-of-being verb (helping/linking verb). It tells us Suresh's state."
      }
    ],
    animationType: "sentenceBuilder",
    keyConcepts: [
      {
        name: "Action Verb",
        description: "Expresses physical or mental actions.",
        example: "play, write, think, build."
      },
      {
        name: "Linking Verb",
        description: "Connects the subject to details that describe it, without showing action.",
        example: "is, am, are, was, were, seem, become."
      },
      {
        name: "Helping Verb (Auxiliary)",
        description: "Helps the main action verb show tense, mood, or voice.",
        example: "has, have, had, will, can, must."
      }
    ]
  },
  questions: [
    {
      topic: "Verbs",
      difficulty: "Beginner",
      question: "Identify the action verb: 'The teacher explained the difficult sum on the blackboard.'",
      options: ["teacher", "explained", "difficult", "blackboard"],
      answer: "explained",
      explanation: "'Explained' is the action performed by the teacher, so it is the action verb.",
      frequency_score: 5
    },
    {
      topic: "Verbs",
      difficulty: "Intermediate",
      question: "Which verb correctly completes the sentence: 'She ______ working on this project since Monday.'",
      options: ["is", "has been", "was", "will be"],
      answer: "has been",
      explanation: "For an action that started in the past and is still continuing ('since Monday'), we use the Present Perfect Continuous tense: 'has been'.",
      frequency_score: 5
    },
    {
      topic: "Verbs",
      difficulty: "Advanced",
      question: "Choose the correct form: 'The manager made his employees ______ the reports overnight.'",
      options: ["redraft", "to redraft", "redrafting", "redrafted"],
      answer: "redraft",
      explanation: "The causative verb 'make' (here, 'made') is followed by a bare infinitive (verb base form without 'to') when active: 'made them redraft'.",
      frequency_score: 5
    },
    {
      topic: "Verbs",
      difficulty: "PYQ",
      question: "Identify the error in verb usage: 'Having lived (A) in Delhi for ten years (B), he was used to speak (C) Hindi fluently (D).'",
      options: ["A", "B", "C", "D"],
      answer: "C",
      explanation: "The phrase 'to be used to' is followed by a gerund (V+ing) when it means accustomed to. It should be 'used to speaking', not 'used to speak'.",
      frequency_score: 5
    }
  ]
};
