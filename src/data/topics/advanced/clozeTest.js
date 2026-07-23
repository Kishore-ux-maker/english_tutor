export const clozeTestData = {
  id: "clozeTest",
  title: "Cloze Test",
  category: "Advanced",
  description: "Learn how to choose the most contextually and grammatically fitting words to fill blanks in a passage.",
  explanation: {
    meaning: "A Cloze Test is a passage with several blanks. It's like a jigsaw puzzle where some pieces are missing! You must look at the sentences *before* and *after* the blank to understand the story, tone, and grammar, then choose the word that fits perfectly. It tests your vocabulary, reading speed, and grammar comprehension all at once.",
    realLifeExamples: [
      {
        text: "Passage: 'Technology has (1) ______ the way we communicate. We now send instant messages instead of letters.' Option (1): [improved, transformed, destroyed, slowed]",
        analysis: "Since the passage talks about switching from letters to instant messages, the word 'transformed' (changed completely) fits the context best."
      }
    ],
    animationType: "sentenceBuilder",
    keyConcepts: [
      {
        name: "Read the Entire Passage First",
        description: "Never fill blanks one by one without reading the whole passage. Knowing the main idea and tone (positive, negative, scientific, historical) helps eliminate wrong options.",
        example: "A passage about economic growth will use words like 'boom', 'progress', 'acceleration'."
      },
      {
        name: "Check Grammatical Collocations",
        description: "Look at the words immediately before and after the blank. They often dictate the part of speech or specific prepositions needed.",
        example: "If the blank is followed by 'to', look for words like 'adapted', 'adhered', 'similar'."
      },
      {
        name: "Eliminate Out-of-Context Options",
        description: "Exclude words that have the wrong connotation or magnitude.",
        example: "Do not use 'disastrous' if the tone is mildly critical."
      }
    ]
  },
  questions: [
    {
      topic: "Cloze Test",
      difficulty: "Beginner",
      question: "Read the text: 'The sun rises in the east and ______ light to the world.' Choose the best word for the blank.",
      options: ["absorbs", "provides", "takes", "hides"],
      answer: "provides",
      explanation: "The sun is the source of light, so it 'provides' (gives) light to the world. 'Absorbs' is the opposite.",
      frequency_score: 5
    },
    {
      topic: "Cloze Test",
      difficulty: "Intermediate",
      question: "Read the text: 'Due to heavy rains, the local administration decided to ______ the schools for two days.' Choose the best word.",
      options: ["demolish", "postpone", "close", "renovate"],
      answer: "close",
      explanation: "Heavy rains cause safety hazards, so schools are closed. 'Postpone' is used for events or exams, not physical institutions. 'Demolish' (destroy) and 'renovate' (repair) are out of context.",
      frequency_score: 5
    },
    {
      topic: "Cloze Test",
      difficulty: "Advanced",
      question: "Read the text: 'The central bank's decision to hike interest rates was aimed at ______ the skyrocketing inflation.' Choose the best word.",
      options: ["boosting", "curbing", "ignoring", "triggering"],
      answer: "curbing",
      explanation: "Hiking interest rates is a monetary policy action designed to control or restrict ('curb') inflation. Boosting or triggering would increase inflation, which is not the goal.",
      frequency_score: 5
    },
    {
      topic: "Cloze Test",
      difficulty: "PYQ",
      question: "Read the text: 'Many species of animals are on the ______ of extinction due to human activities like deforestation.' Choose the best word.",
      options: ["verge", "middle", "boundary", "cliff"],
      answer: "verge",
      explanation: "The idiomatic phrase is 'on the verge of extinction', which means very close to experiencing extinction.",
      frequency_score: 5
    }
  ]
};
