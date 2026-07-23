export const narrationData = {
  id: "narration",
  title: "Direct and Indirect Speech",
  category: "Intermediate",
  description: "Learn how to report someone else's words, shifting tenses and pronouns correctly.",
  explanation: {
    meaning: "Narration is about reporting what someone said. **Direct Speech** quotes their exact words in quotation marks ('He said, \"I am hungry\"'). **Indirect Speech** reports what they said from our point of view, backshifting the tenses and changing pronouns ('He said that he was hungry'). It's like retelling a story to a friend!",
    realLifeExamples: [
      {
        text: "Direct: Shreya said, 'I live in Mumbai.'",
        analysis: "Quotes Shreya directly."
      },
      {
        text: "Indirect: Shreya said that she lived in Mumbai.",
        analysis: "Reports her words. 'I' becomes 'she', 'live' (Present) backshifts to 'lived' (Past)."
      }
    ],
    animationType: "sentenceBuilder",
    keyConcepts: [
      {
        name: "Reporting Verb and Reported Speech",
        description: "In 'He said, \"I am ready\"', 'said' is the Reporting Verb and '\"I am ready\"' is the Reported Speech.",
        example: "If the reporting verb is in the past tense, the tenses in the reported speech must change."
      },
      {
        name: "Tense Backshifting Rules",
        description: "Simple Present → Simple Past; Present Continuous → Past Continuous; Present Perfect → Past Perfect; Simple Past → Past Perfect.",
        example: "said 'I wrote' → said that he had written."
      },
      {
        name: "Pronoun and Time shifts",
        description: "Pronouns change to match the speaker. Time words change: today → that day, yesterday → the day before, now → then, here → there.",
        example: "'I will come tomorrow' → he said he would come the next day."
      }
    ]
  },
  questions: [
    {
      topic: "Narration",
      difficulty: "Beginner",
      question: "Convert to Indirect Speech: 'He said, \"I am playing cricket.\"'",
      options: [
        "He said that he is playing cricket.",
        "He said that he was playing cricket.",
        "He said that he had been playing cricket.",
        "He said that he had played cricket."
      ],
      answer: "He said that he was playing cricket.",
      explanation: "The reporting verb 'said' is in the past, so Present Continuous 'am playing' shifts to Past Continuous 'was playing'. 'I' becomes 'he'.",
      frequency_score: 5
    },
    {
      topic: "Narration",
      difficulty: "Intermediate",
      question: "Convert to Indirect Speech: 'She said to me, \"Where are you going?\"'",
      options: [
        "She asked me where was I going.",
        "She asked me where I was going.",
        "She asked me that where I was going.",
        "She said to me where I was going."
      ],
      answer: "She asked me where I was going.",
      explanation: "In questions, the reporting verb becomes 'asked'. There is no 'that'. The word order shifts from question style ('where are you...') to statement style ('where I was...').",
      frequency_score: 5
    },
    {
      topic: "Narration",
      difficulty: "Advanced",
      question: "Convert to Direct Speech: 'The teacher said that the sun rises in the east.'",
      options: [
        "The teacher said, 'The sun rises in the east.'",
        "The teacher said, 'The sun rose in the east.'",
        "The teacher said, 'The sun had risen in the east.'",
        "The teacher said, 'The sun is rising in the east.'"
      ],
      answer: "The teacher said, 'The sun rises in the east.'",
      explanation: "Universal truths, scientific facts, or habitual actions do NOT change their tense in indirect speech, even if the reporting verb is in the past.",
      frequency_score: 4
    },
    {
      topic: "Narration",
      difficulty: "PYQ",
      question: "Choose the correct indirect form: 'Rahul said, \"I will buy a book today.\"'",
      options: [
        "Rahul said that he will buy a book today.",
        "Rahul said that he would buy a book that day.",
        "Rahul said that he should buy a book today.",
        "Rahul said that he would buy a book today."
      ],
      answer: "Rahul said that he would buy a book that day.",
      explanation: "'will' changes to 'would', 'I' changes to 'he', and 'today' changes to 'that day'. Option 2 captures all these corrections.",
      frequency_score: 5
    }
  ]
};
