export const subjectVerbAgreementData = {
  id: "subjectVerbAgreement",
  title: "Subject-Verb Agreement",
  category: "Grammar",
  description: "Master the gold standard rule of grammar: singular subjects take singular verbs, plural subjects take plural verbs.",
  explanation: {
    meaning: "Subject-Verb Agreement is like a dancing partnership: they must move together in harmony! A singular subject (one person or thing) must dance with a singular verb, and a plural subject (more than one) must dance with a plural verb.",
    realLifeExamples: [
      {
        text: "The student *writes* an essay.",
        analysis: "Singular Subject ('student') → Singular Verb ('writes' - ends in 's')."
      },
      {
        text: "The students *write* an essay.",
        analysis: "Plural Subject ('students') → Plural Verb ('write' - no 's')."
      }
    ],
    animationType: "sentenceBuilder",
    keyConcepts: [
      {
        name: "Basic Rule",
        description: "Singular subject = Singular verb; Plural subject = Plural verb. (Remember: nouns add 's' to become plural, but verbs add 's' to become singular!)",
        example: "The dog barks (singular). The dogs bark (plural)."
      },
      {
        name: "The 'And' Rule",
        description: "Two subjects connected by 'and' usually take a plural verb.",
        example: "Ravi and Rahul *are* going home."
      },
      {
        name: "The 'Or / Nor' Rule",
        description: "When subjects are connected by 'either...or' or 'neither...nor', the verb agrees with the subject *closest* to it.",
        example: "Neither the teacher nor the *students are* here. Neither the students nor the *teacher is* here."
      },
      {
        name: "Distractors (Along with, As well as)",
        description: "Words like 'as well as', 'along with', 'together with', 'with' do NOT change the number of the subject. The verb agrees with the first subject.",
        example: "The captain, along with his crew members, *was* (not were) saved."
      }
    ]
  },
  questions: [
    {
      topic: "Subject-Verb Agreement",
      difficulty: "Beginner",
      question: "Choose the correct verb: 'Every one of the students ______ present in the assembly today.'",
      options: ["is", "were", "are", "have been"],
      answer: "is",
      explanation: "'Every one', 'each', 'either', 'neither' are singular pronouns and always take singular verbs. Here, the subject is 'Every one', so 'is' is correct.",
      frequency_score: 5
    },
    {
      topic: "Subject-Verb Agreement",
      difficulty: "Intermediate",
      question: "Fill in the blank: 'Either my sister or my parents ______ going to attend the function.'",
      options: ["is", "are", "was", "has"],
      answer: "are",
      explanation: "With 'either...or', the verb agrees with the subject closest to it. 'Parents' is plural, so we use the plural verb 'are'.",
      frequency_score: 5
    },
    {
      topic: "Subject-Verb Agreement",
      difficulty: "Advanced",
      question: "Find the error: 'The behavior of the wild animals (A) in the sanctuary (B) were highly unpredictable (C) during the storm (D).'",
      options: ["A", "B", "C", "D"],
      answer: "C",
      explanation: "The true subject of the sentence is 'The behavior' (singular), not 'wild animals'. Therefore, the verb should be singular: 'was highly unpredictable', not 'were'.",
      frequency_score: 5
    },
    {
      topic: "Subject-Verb Agreement",
      difficulty: "PYQ",
      question: "Choose the grammatically correct sentence:",
      options: [
        "A list of weak students have been prepared by the teacher.",
        "A list of weak students was prepared by the teacher.",
        "A list of weak students were prepared by the teacher.",
        "A list of weak students are prepared by the teacher."
      ],
      answer: "A list of weak students was prepared by the teacher.",
      explanation: "The subject is 'A list' (singular), not 'students'. Thus, a singular verb is required. 'was prepared' is the correct singular past passive verb.",
      frequency_score: 5
    }
  ]
};
