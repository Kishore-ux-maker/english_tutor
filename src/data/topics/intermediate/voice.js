export const voiceData = {
  id: "voice",
  title: "Active and Passive Voice",
  category: "Intermediate",
  description: "Learn how to shift focus between the doer of the action (Active) and the receiver (Passive).",
  explanation: {
    meaning: "Voice tells us who is the hero of the sentence. In **Active Voice**, the Subject is active and does the action ('The chef cooked the food'). In **Passive Voice**, the Subject is passive, and the action is done *to* it ('The food was cooked by the chef'). It's like shifting the camera angle from the actor to the result!",
    realLifeExamples: [
      {
        text: "Active: Rohan painted the fence.",
        analysis: "Focus is on Rohan (the doer)."
      },
      {
        text: "Passive: The fence was painted by Rohan.",
        analysis: "Focus shifts to the fence (the receiver)."
      }
    ],
    animationType: "sentenceBuilder",
    keyConcepts: [
      {
        name: "Active Voice Formula",
        description: "Subject + Verb + Object. Simple and direct.",
        example: "The boy flies a kite."
      },
      {
        name: "Passive Voice Formula",
        description: "Object + Auxiliary Verb (be) + Past Participle (V3) + by + Subject.",
        example: "A kite is flown by the boy."
      },
      {
        name: "When to use Passive Voice",
        description: "When the doer of the action is unknown, obvious, or less important than the action itself.",
        example: "The bank was robbed (the robber is unknown)."
      }
    ]
  },
  questions: [
    {
      topic: "Voice",
      difficulty: "Beginner",
      question: "Convert to Passive: 'The cat killed the mouse.'",
      options: [
        "The mouse is killed by the cat.",
        "The mouse was killed by the cat.",
        "The mouse had been killed by the cat.",
        "The mouse was being killed by the cat."
      ],
      answer: "The mouse was killed by the cat.",
      explanation: "Since the active sentence is in the Simple Past ('killed'), the passive structure is 'was/were + V3' ('was killed').",
      frequency_score: 5
    },
    {
      topic: "Voice",
      difficulty: "Intermediate",
      question: "Convert to Active: 'A letter is being written by him.'",
      options: [
        "He writes a letter.",
        "He wrote a letter.",
        "He is writing a letter.",
        "He has written a letter."
      ],
      answer: "He is writing a letter.",
      explanation: "'is being written' is Present Continuous Passive, which corresponds to Present Continuous Active 'is writing'.",
      frequency_score: 5
    },
    {
      topic: "Voice",
      difficulty: "Advanced",
      question: "Convert to Passive: 'Close the door.'",
      options: [
        "The door should be closed.",
        "Let the door be closed.",
        "Let the door close.",
        "You are ordered to close the door."
      ],
      answer: "Let the door be closed.",
      explanation: "For imperative sentences (commands), the passive structure is 'Let + Object + be + V3' or 'You are ordered to...'. 'Let the door be closed' is the standard formal passive form.",
      frequency_score: 5
    },
    {
      topic: "Voice",
      difficulty: "PYQ",
      question: "Identify the correct passive form: 'They are constructing a new bridge across the river.'",
      options: [
        "A new bridge is constructed across the river.",
        "A new bridge was being constructed across the river.",
        "A new bridge is being constructed across the river.",
        "A new bridge has been constructed across the river."
      ],
      answer: "A new bridge is being constructed across the river.",
      explanation: "'are constructing' is Present Continuous, so the passive version is 'is/are + being + V3' ('is being constructed').",
      frequency_score: 5
    }
  ]
};
