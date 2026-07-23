export const tensesData = {
  id: "tenses",
  title: "Tenses",
  category: "Grammar",
  description: "Understand the time of action: past, present, and future.",
  explanation: {
    meaning: "Tenses tell us *when* an action happened (Past, Present, or Future) and its *state of completion* (Simple, Continuous, Perfect, or Perfect Continuous). Think of it like a calendar with a camera: you zoom in on whether an event is a habit, ongoing right now, completed, or running for a duration!",
    realLifeExamples: [
      {
        text: "I eat apples.",
        analysis: "Simple Present - a habit or general fact."
      },
      {
        text: "I am eating an apple.",
        analysis: "Present Continuous - happening right now as we speak."
      },
      {
        text: "I have eaten the apple.",
        analysis: "Present Perfect - done just now; the plate is empty."
      },
      {
        text: "I have been eating apples for ten minutes.",
        analysis: "Present Perfect Continuous - action started in the past, continued, and is still active."
      }
    ],
    animationType: "tenseTimeline", // triggers TenseTimeline animation component
    keyConcepts: [
      {
        name: "Simple Tenses",
        description: "For regular habits or general truths.",
        example: "He plays chess."
      },
      {
        name: "Continuous Tenses",
        description: "For actions currently in progress.",
        example: "He is playing chess."
      },
      {
        name: "Perfect Tenses",
        description: "For actions completed before a certain point in time.",
        example: "He has played chess (already)."
      },
      {
        name: "Perfect Continuous Tenses",
        description: "For actions that started and are ongoing over a duration.",
        example: "He has been playing chess since morning."
      }
    ]
  },
  questions: [
    {
      topic: "Tenses",
      difficulty: "Beginner",
      question: "Identify the tense: 'I am reading a story book.'",
      options: ["Simple Present", "Present Continuous", "Present Perfect", "Past Continuous"],
      answer: "Present Continuous",
      explanation: "The structure 'Subject + am/is/are + Verb-ing' represents the Present Continuous tense, indicating an action happening right now.",
      frequency_score: 5
    },
    {
      topic: "Tenses",
      difficulty: "Intermediate",
      question: "Fill in the blank: 'By the time the police arrived, the thief ______.'",
      options: ["escaped", "has escaped", "had escaped", "was escaping"],
      answer: "had escaped",
      explanation: "When two actions happened in the past, the earlier action takes the Past Perfect tense ('had escaped') and the later action takes the Simple Past tense ('arrived').",
      frequency_score: 5
    },
    {
      topic: "Tenses",
      difficulty: "Advanced",
      question: "Identify the grammatically correct sentence:",
      options: [
        "I am knowing him for five years.",
        "I have been knowing him for five years.",
        "I know him for five years.",
        "I have known him for five years."
      ],
      answer: "I have known him for five years.",
      explanation: "Statics verbs like 'know' cannot be used in continuous tenses. Instead of Present Perfect Continuous, we use the Present Perfect tense: 'I have known him'.",
      frequency_score: 5
    },
    {
      topic: "Tenses",
      difficulty: "PYQ",
      question: "Find the error: 'If I will receive (A) the email in time (B), I will attend (C) the meeting (D).'",
      options: ["A", "B", "C", "D"],
      answer: "A",
      explanation: "In conditional sentences, we do not use 'will' in the conditional clause ('if' clause). It should be in Simple Present: 'If I receive the email in time'.",
      frequency_score: 5
    }
  ]
};
