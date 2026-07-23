export const readingComprehensionData = {
  id: "readingComprehension",
  title: "Reading Comprehension",
  category: "Advanced",
  description: "Learn how to read passages efficiently, analyze core themes, and answer inference-based questions.",
  explanation: {
    meaning: "Reading Comprehension (RC) is about reading a long passage and answering questions based on it. It's like being a detective: you are given a case file (the passage) and you have to search for clues, understand the writer's motive (tone), and draw logical conclusions. In competitive exams, speed and accuracy are key!",
    realLifeExamples: [
      {
        text: "Passage: 'Rohan always carries an umbrella. Even on sunny days, he keeps it in his backpack.' Question: Can we infer Rohan is careless?",
        analysis: "No! Rohan carries an umbrella even when it's not raining, meaning he is very careful and prepared for any weather."
      }
    ],
    animationType: "sentenceBuilder",
    keyConcepts: [
      {
        name: "Skimming vs. Scanning",
        description: "Skimming is reading quickly to get the main idea (the 'gist'). Scanning is looking for specific keywords or facts (dates, names, statistics).",
        example: "Skim to find out *what* the paragraph is about; scan to find *when* the company was founded."
      },
      {
        name: "Direct vs. Inference Questions",
        description: "Direct questions have answers written directly in the passage. Inference questions require you to 'read between the lines' and understand what the author implies but does not state directly.",
        example: "If a passage says 'Rohan arrived sweating and gasping', we infer he ran or walked fast, even if the text doesn't say so."
      },
      {
        name: "Locating the Main Idea",
        description: "The main idea is often stated in the first 2-3 sentences of the passage or in the concluding paragraph. Look for repeating themes.",
        example: "If every paragraph mentions honeybees and crops, the main idea is likely 'The role of honeybees in agriculture'."
      }
    ]
  },
  questions: [
    {
      topic: "Reading Comprehension",
      difficulty: "Beginner",
      question: "Passage: 'The honeybee is crucial for agriculture because it pollinates crops. Without bees, many fruits and vegetables would disappear from our tables.'\nQuestion: Why are honeybees important according to the passage?",
      options: [
        "They make delicious honey.",
        "They pollinate crops, securing fruits and vegetables.",
        "They are colorful insects.",
        "They do not sting humans."
      ],
      answer: "They pollinate crops, securing fruits and vegetables.",
      explanation: "The passage directly states they are crucial because they pollinate crops and without them, fruits and vegetables would disappear.",
      frequency_score: 5
    },
    {
      topic: "Reading Comprehension",
      difficulty: "Intermediate",
      question: "Passage: 'Unlike traditional schools, online education allows students to learn at their own pace. This flexibility helps working professionals upskill without quitting their jobs.'\nQuestion: What can be inferred about traditional schools from the passage?",
      options: [
        "They are cheaper than online schools.",
        "They do not offer flexible pacing.",
        "They are only for children.",
        "They do not have qualified teachers."
      ],
      answer: "They do not offer flexible pacing.",
      explanation: "The passage says online education allows students to learn at their own pace 'unlike traditional schools'. This implies traditional schools do not allow this self-paced flexibility.",
      frequency_score: 5
    },
    {
      topic: "Reading Comprehension",
      difficulty: "Advanced",
      question: "Passage: 'The rise of artificial intelligence has sparked a fierce debate. Techno-optimists argue that AI will automate mundane tasks, freeing humans for creative pursuits. On the other hand, critics worry about mass unemployment and the loss of human agency.'\nQuestion: Which of the following best describes the author's tone in the passage?",
      options: ["Highly optimistic", "Extremely critical", "Neutral and objective", "Sarcastic"],
      answer: "Neutral and objective",
      explanation: "The author presents both sides of the debate (the arguments of optimists and the worries of critics) without taking a side, making the tone neutral and objective.",
      frequency_score: 5
    },
    {
      topic: "Reading Comprehension",
      difficulty: "PYQ",
      question: "Passage: 'To mitigate climate change, countries must transition from fossil fuels to renewable energy. However, this transition requires massive investments and political will, which are currently lacking in many developing nations.'\nQuestion: According to the passage, what is the main hurdle for developing nations in transitioning to renewable energy?",
      options: [
        "Lack of renewable energy sources.",
        "Lack of massive investments and political will.",
        "Lack of skilled workforce.",
        "Public opposition to renewable energy."
      ],
      answer: "Lack of massive investments and political will.",
      explanation: "The passage explicitly states that the transition requires 'massive investments and political will, which are currently lacking in many developing nations'.",
      frequency_score: 5
    }
  ]
};
