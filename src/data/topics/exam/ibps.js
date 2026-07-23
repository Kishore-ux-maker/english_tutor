export const ibpsData = {
  id: "ibps",
  title: "IBPS Exam Level",
  category: "Exam Level",
  description: "Prepare for IBPS PO and Clerk English section, focusing on spelling, grammatical errors, and sentence improvement.",
  explanation: {
    meaning: "The IBPS (Institute of Banking Personnel Selection) English section is very similar to SBI PO but focuses slightly more on direct grammatical rules, vocabulary (synonyms/antonyms inside RC), spelling errors, and phrase replacement. It requires high speed since you have 30 questions to solve in 20 minutes.",
    realLifeExamples: [
      {
        text: "Typical Question: Spelling errors where 4 words in a sentence are highlighted and you must identify the misspelled or inappropriate word.",
        analysis: "Requires focus on spelling and semantic usage."
      }
    ],
    animationType: "sentenceBuilder",
    keyConcepts: [
      {
        name: "Key Question Types",
        description: "Cloze test, double fillers, sentence improvement (replacing a bold phrase with a grammatically correct option), and word usage (using a single word in three different sentences and identifying where it fits).",
        example: "Sentence Improvement: 'He *objected to* the proposal' vs 'He *objected against* the proposal'."
      }
    ]
  },
  questions: [
    {
      topic: "IBPS",
      difficulty: "Beginner",
      question: "Identify the misspelled or contextually inappropriate word: 'The government has **initiated** (A) several **programmes** (B) to **alleviate** (C) poverty and **unemployement** (D).'",
      options: ["A", "B", "C", "D"],
      answer: "D",
      explanation: "The word 'unemployement' is misspelled. The correct spelling is 'unemployment' (without the second 'e' before 'ment').",
      frequency_score: 5
    },
    {
      topic: "IBPS",
      difficulty: "Intermediate",
      question: "Choose the correct phrase to replace the underlined part: 'The committee *is consisting of* five members.'",
      options: [
        "consists of",
        "consist of",
        "is consist of",
        "No improvement required"
      ],
      answer: "consists of",
      explanation: "The verb 'consist' is a stative verb and is not used in the continuous form ('is consisting'). The singular subject 'The committee' takes the singular present verb 'consists'.",
      frequency_score: 5
    },
    {
      topic: "IBPS",
      difficulty: "Advanced",
      question: "Spot the error: 'Hardly had I (A) arrived at the terminal (B) when the flight (C) took off (D).'",
      options: ["A", "B", "C", "D"],
      answer: "No error",
      explanation: "The sentence is grammatically correct. 'Hardly' is correctly paired with 'when', and the inversion 'had I arrived' is correct.",
      frequency_score: 5
    },
    {
      topic: "IBPS",
      difficulty: "PYQ",
      question: "Fill in the blank with the appropriate preposition: 'He was accused ______ theft and was arrested by the police.'",
      options: ["of", "for", "with", "about"],
      answer: "of",
      explanation: "The verb 'accused' always takes the fixed preposition 'of'. 'Accused of theft' is correct.",
      frequency_score: 5
    }
  ]
};
