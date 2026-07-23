export const paraJumblesData = {
  id: "paraJumbles",
  title: "Para Jumbles",
  category: "Advanced",
  description: "Learn how to link scattered sentences together to form a logical, readable paragraph.",
  explanation: {
    meaning: "Para Jumbles (or sentence rearrangements) are like scrambled stories. You are given 4 or 5 sentences in a random order, and you have to rearrange them so they tell a smooth, logical story. Think of it like organizing a photo album in chronological order so it tells the story of a vacation!",
    realLifeExamples: [
      {
        text: "Sentences: A: He ate it quickly. B: Rohan bought a sandwich. C: He was very hungry.",
        analysis: "Logical order: B (Rohan bought a sandwich) → C (He was very hungry - gives the reason) → A (He ate it quickly - action). So, B-C-A."
      }
    ],
    animationType: "sentenceBuilder",
    keyConcepts: [
      {
        name: "Find the Opening Sentence",
        description: "The opening sentence introduces the topic. It is usually independent, containing proper nouns or general statements. It rarely starts with pronouns (he, she, it) or transition words (but, however, therefore, moreover).",
        example: "'Solar energy is clean.' is a good opener. 'But it is expensive.' is NOT."
      },
      {
        name: "Identify Mandatory Pairs",
        description: "Look for clues that link two sentences together. For example: a pronoun in sentence B referring to a noun in sentence A; a cause in sentence A and effect in B; chronology (first, then, finally).",
        example: "A: 'Rohan went to London.' B: 'There, he met his uncle.' A and B form a mandatory pair."
      },
      {
        name: "Look for Transition Words",
        description: "Words like 'however', 'although', 'on the other hand' indicate contrast. 'Furthermore', 'in addition' show continuation. 'Consequently', 'hence', 'thus' indicate the conclusion.",
        example: "A sentence starting with 'consequently' is usually near the end."
      }
    ]
  },
  questions: [
    {
      topic: "Para Jumbles",
      difficulty: "Beginner",
      question: "Rearrange the following sentences:\n1. He wanted to buy a book.\n2. Ramesh walked into a bookstore.\n3. Finally, he purchased a grammar guide.\n4. He searched the shelves for an hour.\n",
      options: ["2 - 1 - 4 - 3", "1 - 2 - 4 - 3", "2 - 4 - 1 - 3", "4 - 2 - 1 - 3"],
      answer: "2 - 1 - 4 - 3",
      explanation: "2 introduces the character Ramesh and setting. 1 gives his motive (wanted to buy). 4 describes his search. 3 gives the final result (finally purchased). So, 2-1-4-3 is logical.",
      frequency_score: 5
    },
    {
      topic: "Para Jumbles",
      difficulty: "Intermediate",
      question: "Rearrange the following sentences:\nA. However, their numbers have declined dramatically due to poaching.\nB. Elephants are highly intelligent and social animals.\nC. Consequently, conservation groups are working hard to protect them.\nD. They live in close-knit family herds led by a matriarch.\n",
      options: ["B - D - A - C", "B - A - D - C", "D - B - A - C", "B - D - C - A"],
      answer: "B - D - A - C",
      explanation: "B introduces 'Elephants'. D continues describing them ('They live...'). A introduces a contrasting problem ('However, their numbers have declined...'). C gives the consequence ('Consequently, conservation groups...'). Order is B-D-A-C.",
      frequency_score: 5
    },
    {
      topic: "Para Jumbles",
      difficulty: "Advanced",
      question: "Rearrange the sentences:\nA. This rise in temperature is causing glaciers to melt rapidly.\nB. Carbon dioxide emissions are the primary driver of global warming.\nC. As a result, sea levels are rising across the globe, threatening coastal cities.\nD. These emissions trap heat in the earth's atmosphere.\n",
      options: ["B - D - A - C", "B - A - D - C", "D - B - A - C", "B - D - C - A"],
      answer: "B - D - A - C",
      explanation: "B introduces the topic: Carbon emissions. D explains how 'These emissions' (connecting B to D) trap heat. A describes 'This rise in temperature' (connecting D to A) causing melting. C gives the final effect ('As a result, sea levels...'). Order is B-D-A-C.",
      frequency_score: 5
    },
    {
      topic: "Para Jumbles",
      difficulty: "PYQ",
      question: "Rearrange the sentences:\nA. In the long run, it damages the trust between citizens and the state.\nB. Corruption is a cancer that eats away at the vitals of democracy.\nC. Furthermore, it diverts precious funds meant for poverty alleviation.\nD. Initially, it might seem like a shortcut to get things done.\n",
      options: ["B - D - C - A", "B - D - A - C", "B - C - D - A", "D - B - C - A"],
      answer: "B - D - C - A",
      explanation: "B is the general introduction ('Corruption is a cancer...'). D shows the initial perception ('Initially, it might seem...'). C adds a further disadvantage ('Furthermore, it diverts funds...'). A shows the long-term impact ('In the long run, it damages...'). Order is B-D-C-A.",
      frequency_score: 5
    }
  ]
};
