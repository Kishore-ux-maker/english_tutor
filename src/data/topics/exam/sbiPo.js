export const sbiPoData = {
  id: "sbiPo",
  title: "SBI PO Exam Level",
  category: "Exam Level",
  description: "Prepare for the highly competitive State Bank of India Probationary Officer English section.",
  explanation: {
    meaning: "The SBI PO English section is famous for testing conceptual clarity and quick reading. It has 30 questions in the Prelims and 35 questions in the Mains. Rather than direct grammar rules, SBI PO focuses on applying grammar in contextual scenarios like Error Spotting, Cloze Tests, and Reading Comprehension with a business/banking touch.",
    realLifeExamples: [
      {
        text: "Typical Question Trend: Paragraph Completion, double fillers, and word-swap questions where words in a sentence are bolded and must be swapped to make grammatical sense.",
        analysis: "Requires a strong grasp of both vocabulary and grammar collocations."
      }
    ],
    animationType: "sentenceBuilder",
    keyConcepts: [
      {
        name: "Prelims Pattern",
        description: "30 Questions, 20 Minutes sectional timing. High emphasis on Reading Comprehension (8-10 questions), Cloze Test (5-6 questions), and Error Spotting (5 questions).",
        example: "Cut-off is usually around 8-12 marks for English, but high scorers target 22+ to boost their overall score."
      },
      {
        name: "Mains Pattern",
        description: "35 Questions, 40 Minutes sectional timing. Focuses heavily on economy-based Reading Comprehension, Inference questions, and sentence connectors.",
        example: "Questions are usually of moderate to high difficulty, requiring deep reading of financial news."
      }
    ]
  },
  questions: [
    {
      topic: "SBI PO",
      difficulty: "Beginner",
      question: "In the sentence below, two words might need to be swapped to make the sentence grammatically correct. Identify them:\n'The bank **announced** (A) that it would **reduce** (B) interest rates to **attract** (C) more **borrowers** (D).'",
      options: ["A-B", "B-C", "No swap needed", "C-D"],
      answer: "No swap needed",
      explanation: "The sentence is fully logical and grammatically correct as written. The bank 'announced' (verb) that it would 'reduce' (verb) rates to 'attract' (verb) more 'borrowers' (noun).",
      frequency_score: 5
    },
    {
      topic: "SBI PO",
      difficulty: "Intermediate",
      question: "Fill in the blank with the most appropriate set of words: 'The government's decision to subsidize solar panels is expected to ______ carbon emissions and ______ clean energy adoption.'",
      options: [
        "curb / accelerate",
        "increase / retard",
        "mitigate / block",
        "hike / promote"
      ],
      answer: "curb / accelerate",
      explanation: "Solar panels help reduce carbon emissions ('curb' or 'mitigate') and increase clean energy adoption ('accelerate' or 'promote'). 'curb / accelerate' fits the blank perfectly in a banking/economic context.",
      frequency_score: 5
    },
    {
      topic: "SBI PO",
      difficulty: "Advanced",
      question: "Identify the error in this SBI PO level sentence: 'Not only the central bank (A) raised the repo rate (B) but it also tightened (C) liquidity in the market (D).'",
      options: ["A", "B", "C", "D"],
      answer: "A",
      explanation: "When a sentence starts with 'Not only' (inversion rule), it must be followed by an auxiliary verb before the subject. It should be: 'Not only did the central bank raise...'.",
      frequency_score: 5
    },
    {
      topic: "SBI PO",
      difficulty: "PYQ",
      question: "Identify the correct option to connect the two sentences:\nI. The company reported a net loss for the third consecutive quarter.\nII. It decided to hire 200 new engineers to expand its tech department.\n",
      options: ["Although", "Therefore", "Moreover", "Consequently"],
      answer: "Although",
      explanation: "The two statements are contrasting (reporting a loss vs. hiring more people/expanding). 'Although' is the correct connector to show contrast: 'Although the company reported a net loss... it decided to hire...'.",
      frequency_score: 5
    }
  ]
};
