export const catData = {
  id: "cat",
  title: "CAT Exam Level",
  category: "Exam Level",
  description: "Master high-level reading comprehension, critical reasoning, and para summary for the CAT VARC section.",
  explanation: {
    meaning: "The CAT Verbal Ability and Reading Comprehension (VARC) section does NOT ask direct grammar or vocabulary questions. Instead, it tests high-level comprehension, logical reasoning, and structure. You must read complex philosophical, scientific, or sociological passages and answer questions that require you to evaluate arguments, strengthen/weaken claims, or summarize paragraphs in a single sentence.",
    realLifeExamples: [
      {
        text: "Typical Question Style: Para Summary (summarizing a 150-word paragraph in a single sentence) and Odd-One-Out Para Jumbles (rearranging 4 sentences and finding the 5th sentence that does not fit the theme).",
        analysis: "Requires understanding of paragraph coherence and logical flow."
      }
    ],
    animationType: "sentenceBuilder",
    keyConcepts: [
      {
        name: "Reading Comprehension in CAT",
        description: "Usually 4 passages with 4 questions each (total 16 questions). Passages are sourced from international journals (Aeon, Smithsonian, The Economist) and cover diverse subjects.",
        example: "Questions ask: 'Which of the following, if true, would most weaken the author's argument?'"
      },
      {
        name: "Verbal Ability in CAT",
        description: "8 questions: Para Jumbles (non-MCQ where you type the order), Para Summary (MCQ), and Odd Sentence Out (non-MCQ).",
        example: "Requires identifying themes and boundary conditions of arguments."
      }
    ]
  },
  questions: [
    {
      topic: "CAT",
      difficulty: "Beginner",
      question: "Which of the following represents a summary of this argument: 'While technology increases productivity, it also leads to hyper-connectivity, which increases stress and burnout among workers.'",
      options: [
        "Technology makes workers highly productive.",
        "Hyper-connectivity is the sole cause of stress.",
        "Technology boosts productivity but compromises worker well-being through stress.",
        "Workers should avoid technology to prevent burnout."
      ],
      answer: "Technology boosts productivity but compromises worker well-being through stress.",
      explanation: "This option captures both the positive aspect (productivity) and the negative aspect (hyper-connectivity/stress) of the argument, summarizing it accurately.",
      frequency_score: 5
    },
    {
      topic: "CAT",
      difficulty: "Intermediate",
      question: "Choose the statement that, if true, would most **weaken** the claim: 'Organic food is healthier because it is grown without synthetic fertilizers.'",
      options: [
        "Organic crops have a lower yield than chemical-based crops.",
        "Synthetic fertilizers do not leave any toxic residues in the final harvested crop and have the same nutritional profile.",
        "Organic food is twice as expensive as conventional food.",
        "Many people prefer the taste of organic vegetables over conventional ones."
      ],
      answer: "Synthetic fertilizers do not leave any toxic residues in the final harvested crop and have the same nutritional profile.",
      explanation: "If synthetic fertilizers leave no toxic residues and organic crops have the exact same nutritional profile, then the claim that organic food is 'healthier' due to the absence of synthetic fertilizers is directly weakened.",
      frequency_score: 5
    },
    {
      topic: "CAT",
      difficulty: "Advanced",
      question: "Identify the 'Odd Sentence Out' among these sentences:\n1. The study of history helps us understand human behavior and societal shifts over centuries.\n2. Archival documents provide raw, unedited glimpses into the decisions of past leaders.\n3. Digital databases have revolutionized the way researchers index historical transcripts.\n4. Space exploration is the ultimate test of human engineering and scientific curiosity.\n",
      options: ["1", "2", "3", "4"],
      answer: "4",
      explanation: "Sentences 1, 2, and 3 all relate to the study of history and historical research methods. Sentence 4 is about space exploration, making it the odd sentence out.",
      frequency_score: 5
    },
    {
      topic: "CAT",
      difficulty: "PYQ",
      question: "Read the passage segment: 'Language is not merely a tool for communication; it is a lens through which we construct reality. Different languages shape how their speakers perceive time, space, and agency.'\nWhat is the core premise of the author?",
      options: [
        "Language is secondary to thought and logic.",
        "Speakers of different languages have different mental models of the world.",
        "English is the most efficient language for spatial description.",
        "Communication is impossible without a shared grammatical structure."
      ],
      answer: "Speakers of different languages have different mental models of the world.",
      explanation: "The passage states that language shapes how speakers 'perceive time, space, and agency'. This directly supports the idea that language shapes their mental models (perception) of the world.",
      frequency_score: 5
    }
  ]
};
