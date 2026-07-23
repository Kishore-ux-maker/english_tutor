import { sentenceData } from './foundation/sentence';
import { nounsData } from './foundation/nouns';
import { pronounsData } from './foundation/pronouns';
import { verbsData } from './foundation/verbs';
import { articlesData } from './foundation/articles';
import { adjectivesData } from './foundation/adjectives';

import { tensesData } from './grammar/tenses';
import { subjectVerbAgreementData } from './grammar/subjectVerbAgreement';
import { prepositionsData } from './grammar/prepositions';
import { conjunctionsData } from './grammar/conjunctions';

import { voiceData } from './intermediate/voice';
import { narrationData } from './intermediate/narration';
import { modalsData } from './intermediate/modals';

import { errorSpottingData } from './advanced/errorSpotting';
import { clozeTestData } from './advanced/clozeTest';
import { paraJumblesData } from './advanced/paraJumbles';
import { readingComprehensionData } from './advanced/readingComprehension';

import { sbiPoData } from './exam/sbiPo';
import { ibpsData } from './exam/ibps';
import { catData } from './exam/cat';

export const topics = [
  sentenceData,
  nounsData,
  pronounsData,
  verbsData,
  articlesData,
  adjectivesData,
  tensesData,
  subjectVerbAgreementData,
  prepositionsData,
  conjunctionsData,
  voiceData,
  narrationData,
  modalsData,
  errorSpottingData,
  clozeTestData,
  paraJumblesData,
  readingComprehensionData,
  sbiPoData,
  ibpsData,
  catData
];

export const categories = [
  { name: "Foundation", topics: ["sentence", "nouns", "pronouns", "verbs", "articles", "adjectives"] },
  { name: "Grammar", topics: ["tenses", "subjectVerbAgreement", "prepositions", "conjunctions"] },
  { name: "Intermediate", topics: ["voice", "narration", "modals"] },
  { name: "Advanced", topics: ["errorSpotting", "clozeTest", "paraJumbles", "readingComprehension"] },
  { name: "Exam Level", topics: ["sbiPo", "ibps", "cat"] }
];
