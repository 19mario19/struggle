const POWERS = {
  COLLAPSED: 0,
  MINIMAL: 10,
  TINY: 20,
  FRAGILE: 30,
  WEAK: 40,
  AVERAGE: 50,
  DECENT: 60,
  SOLID: 70,
  STRONG: 80,
  SUPERIOR: 90,
}

const EXPERIENCE = {
  STARTING: 0,
  EARLY: 10,
  BEGINNER: 25,
  NOVICE: 40,
  DEVELOPING: 60,
  INTERMEDIATE: 80,
  COMPETENT: 100,
  ADVANCED: 160,
  EXPERT: 200,
  MASTER: 300,
}

const quotes = {}

// init empty objects and lists
for (let power in POWERS) {
  quotes[POWERS[power]] = {}
  for (let exp in EXPERIENCE) {
    quotes[POWERS[power]][EXPERIENCE[exp]] = []
  }
}

// console.log(quotes, "before appending")

// quotes[POWERS.SUPERIOR][EXPERIENCE.STARTING] = [
//   "You're starting this journey with a superior mindset. Your potential is immense!",
//   "Even at the beginning, your superior approach sets you apart. Watch yourself soar.",
//   "A fresh start for a truly superior individual. Channel that excellence into new habits.",
//   "You carry superior drive into this beginning. Expect rapid gains and high achievement.",
//   "This 'starting' phase is just a new stage for your inherent superiority to shine.",
// ]

// quotes[POWERS.SUPERIOR][EXPERIENCE.EARLY] = [
//   "You're already showing superior mastery in these early stages. Keep pushing that boundary!",
//   "Your early progress is already demonstrating a superior command. Fantastic work!",
//   "See how quickly you're establishing superior habits? You're a force to be reckoned with.",
//   "You're gaining momentum with superior speed. This is truly impressive early-stage growth.",
//   "This 'early' phase is quickly becoming a testament to your superior abilities.",
// ]

// quotes[POWERS.SUPERIOR][EXPERIENCE.BEGINNER] = [
//   "You've moved beyond beginner and into superior territory. Your progress is exceptional.",
//   "Even as a beginner, your superior focus is making complex tasks feel natural.",
//   "You're demonstrating superior potential by mastering the basics with remarkable speed.",
//   "This beginner phase is merely a launchpad for your superior performance.",
//   "Keep this superior dedication. You're swiftly transitioning from learning to leading.",
// ]

// quotes[POWERS.SUPERIOR][EXPERIENCE.NOVICE] = [
//   "You're transforming from novice to superior with incredible pace. Keep challenging yourself!",
//   "Your superior ability to learn and adapt is evident even at this novice stage.",
//   "The novice level can barely contain your superior drive. You're destined for more.",
//   "You're showing superior understanding and application. This is rapid advancement.",
//   "Continue to refine. Your superior command is growing stronger with every novice step.",
// ]

// quotes[POWERS.SUPERIOR][EXPERIENCE.DEVELOPING] = [
//   "Your superior development is undeniable. You're shaping into a true expert.",
//   "You're developing at a superior rate, building profound strength and resilience.",
//   "See how you're growing into your superior potential? It's truly inspiring to witness.",
//   "This developing stage is a clear path to achieving superior and lasting change.",
//   "You're not just improving; you're evolving into a superior force in this struggle.",
// ]

// quotes[POWERS.SUPERIOR][EXPERIENCE.INTERMEDIATE] = [
//   "You've reached a superior level, effortlessly navigating intermediate challenges. Keep excelling!",
//   "Your consistency is now a superpower. You've mastered this struggle with superior command.",
//   "Victory is yours—keep leading by example. Your performance is truly superior.",
//   "You've turned this challenge into a strength, showcasing superior control and skill.",
//   "Celebrate your journey to superior mastery. Every effort has culminated in this success.",
// ]

// quotes[POWERS.SUPERIOR][EXPERIENCE.COMPETENT] = [
//   "You're not just competent; you're operating at a superior level of effectiveness.",
//   "Your superior competence makes complex tasks seem effortless. Maintain this standard.",
//   "This is superior performance from a truly competent individual. Keep inspiring!",
//   "Your commitment has led to superior and consistent results. Well done.",
//   "You are a benchmark of superior competence. Continue to lead with excellence.",
// ]

// quotes[POWERS.SUPERIOR][EXPERIENCE.ADVANCED] = [
//   "You're operating at an advanced, superior level. Simply unparalleled in your domain.",
//   "This mastery is deep and powerful. You're a superior force, advanced and unstoppable.",
//   "Your superior understanding of this struggle is truly advanced and insightful.",
//   "You've reached an advanced state of superior achievement. Truly remarkable!",
//   "Continue to push the boundaries; your advanced, superior capabilities are limitless.",
// ]

// quotes[POWERS.SUPERIOR][EXPERIENCE.EXPERT] = [
//   "As an expert, you embody superior mastery. There's little left to conquer here.",
//   "You're an expert at achieving superior outcomes. Your achievements are awe-inspiring.",
//   "This is expert-level superior success. You've truly arrived at the peak of performance.",
//   "Your expertise is the pinnacle of superior execution. Well done, master.",
//   "An expert in superior triumph. Your journey inspires all who witness it.",
// ]

// quotes[POWERS.SUPERIOR][EXPERIENCE.MASTER] = [
//   "You are the definition of superior mastery. Unchallenged, inspiring, absolute.",
//   "There's nothing left to learn; you are the superior master of this domain.",
//   "You've transcended obstacles and set the superior standard for triumph. Mastered.",
//   "Your superior mastery is a beacon. There's no higher level of achievement.",
//   "You have not just overcome, but you have become the superior master of this struggle.",
// ]

// changes

// When overcoming a problem that is still frequent/big, but consistently overcome with ease (100% winrate for this power)
// Focus on the initial, effortless victories, the power of a fresh start with inherent capability, the quick grasp of mastery.
quotes[POWERS.SUPERIOR][EXPERIENCE.STARTING] = [
  "Begin at once to live, and count each separate day as a separate life. - Seneca",
  "First say to yourself what you would be; and then do what you have to do. - Epictetus",
  "To stop talking about what the good man is like, and just be one. - Marcus Aurelius",
  "The secret of getting ahead is getting started. - Mark Twain",
]

quotes[POWERS.SUPERIOR][EXPERIENCE.EARLY] = [
  "It is easier to prevent bad habits than to break them. - Benjamin Franklin",
  "Concentrate every minute on doing what's in front of you with precise and genuine seriousness, tenderly, willingly, with justice. And on freeing yourself from all other distractions. - Marcus Aurelius",
  "Practice yourself, for heaven's sake, in little things, and then proceed to greater. - Epictetus",
  "Well begun is half done. - Seneca",
]

quotes[POWERS.SUPERIOR][EXPERIENCE.BEGINNER] = [
  "You have power over your mind – not outside events. Realise this, and you will find strength. - Marcus Aurelius",
  "The soul becomes dyed with the colour of its thoughts. - Marcus Aurelius",
  "The happiness of your life depends upon the quality of your thoughts. - Marcus Aurelius",
  "Control thy passions lest they take vengeance on thee. - Epictetus",
]

quotes[POWERS.SUPERIOR][EXPERIENCE.NOVICE] = [
  "If it's not right, don't do it. If it's not true, don't say it. - Marcus Aurelius",
  "Make the best use of what is in your power, and take the rest as it happens. - Epictetus",
  "The greatest power of ruling consists in the exercise of self-control. - Seneca",
  "He who laughs at himself never runs out of things to laugh at. - Epictetus",
]

// When consistently overcoming a moderately frequent/big problem (100% winrate for this power)
// Focus on the stability of consistent overcoming, the compounding effect of disciplined habits leading to effortless success.
quotes[POWERS.SUPERIOR][EXPERIENCE.DEVELOPING] = [
  "We are what we repeatedly do. Excellence, then, is not an act but a habit. - Aristotle",
  "Consistency is the true foundation of trust. - Roy T. Bennett",
  "Small disciplines repeated with consistency every day lead to great achievements. - John C. Maxwell",
  "It's not what we do once in a while that shapes our lives, but what we do consistently. - Tony Robbins",
]

quotes[POWERS.SUPERIOR][EXPERIENCE.INTERMEDIATE] = [
  "Success is the sum of small efforts, repeated day-in and day-out. - Robert Collier",
  "You have to perform at a consistently higher level than others. That's the mark of a true professional. - Joe Paterno",
  "If you are persistent, you will get it. If you are consistent, you will keep it. - Harvey Mackay",
  "The mind is everything. What you think you become. - Buddha",
]

quotes[POWERS.SUPERIOR][EXPERIENCE.COMPETENT] = [
  "He who reigns within himself, and rules passions, desires, and fears, is more than a king. - John Milton",
  "The controlled person is a powerful person. He who always keeps his head will always get ahead. - Norman Vincent Peale",
  "By constant self-discipline and self-control you can develop greatness of character. - Grenville Kleiser",
  "Self-control is true power. - Marco Pierre White",
]

// When overcoming is consistent/almost effortless; problem is rare/small (100% winrate for this power)
// Focus on wisdom gained, true freedom, and the impact of deeply ingrained self-control.
quotes[POWERS.SUPERIOR][EXPERIENCE.ADVANCED] = [
  "No man is free who is not master of himself. - Epictetus",
  "Self-reverence, self-knowledge, self-control; these three alone lead life to sovereign power. - Alfred Lord Tennyson",
  "The greatest of empires, is the empire over one's self. - Publilius Syrus",
  "Ultimately, the only power to which man should aspire is that which he exercises over himself. - Elie Wiesel",
]

quotes[POWERS.SUPERIOR][EXPERIENCE.EXPERT] = [
  "Freedom is the only worthy goal in life. It is won by disregarding things that lie beyond our control. - Epictetus",
  "The essence of philosophy is that a man should so live that his happiness shall depend as little as possible on external things. - Epictetus",
  "You will never have a greater or lesser dominion than that over yourself... the height of a man's success is gauged by his self-mastery. - Leonardo da Vinci",
  "The best fighter is never angry. - Lao Tzu",
]

quotes[POWERS.SUPERIOR][EXPERIENCE.MASTER] = [
  "True happiness is to enjoy the present, without anxious dependence upon the future. - Seneca",
  "To be free is to be master of oneself. It means taking life into one's own hand, instead of abandoning it to tendencies forged by habit and mental confusion. - Matthieu Ricard",
  "True freedom is to have power over oneself for everything. - Montaigne",
  "He is indeed the noblest victor who conquers himself. - The Buddha",
]

// end changes

// // --- STRONG POWER LEVEL QUOTES ---
// quotes[POWERS.STRONG][EXPERIENCE.STARTING] = [
//   "Starting strong! You've got the power to make incredible initial progress.",
//   "Bring that inner strength to this new beginning. You're set for powerful gains.",
//   "A strong start sets the tone. You're doing great just by taking this first step.",
//   "You're approaching this with strength. This foundation will serve you well.",
//   "Even at the beginning, your strong resolve is your greatest asset.",
// ]
// quotes[POWERS.STRONG][EXPERIENCE.EARLY] = [
//   "You're already making strong strides in these early stages. Keep building on that!",
//   "Early efforts showing strong results. This momentum is powerful.",
//   "You're quickly developing a strong approach. Fantastic early progress!",
//   "Your strong dedication is already evident. Keep fueling that fire.",
//   "These early wins are a testament to your inherent strength.",
// ]
// quotes[POWERS.STRONG][EXPERIENCE.BEGINNER] = [
//   "You're clearly developing a strong foundation. This beginner phase is temporary.",
//   "Strong efforts are turning a beginner's path into confident strides. Keep it up!",
//   "The strength you're building as a beginner is truly impressive. Don't stop now.",
//   "You're demonstrating powerful learning. Your strong progress is undeniable.",
//   "This 'beginner' label won't last long with your strong work ethic.",
// ]
// quotes[POWERS.STRONG][EXPERIENCE.NOVICE] = [
//   "You're showcasing strong capabilities as you move beyond novice. Keep pushing!",
//   "Your strength is evident in how you're tackling new challenges as a novice.",
//   "You're turning novice challenges into strong wins. Great job staying focused.",
//   "The power of your consistency is making a significant impact, even as a novice.",
//   "You're building something lasting. Keep that strong energy up as you learn.",
// ]
// quotes[POWERS.STRONG][EXPERIENCE.DEVELOPING] = [
//   "Your strength is clearly developing! You're making real headway now.",
//   "Strong progress—your efforts are showing real results as you develop.",
//   "You're on the right track. Stay consistent and keep improving that strength.",
//   "Your resilience is showing. Keep building on this developing strength.",
//   "This is the power of persistence in action. Keep developing that strong resolve!",
// ]
// quotes[POWERS.STRONG][EXPERIENCE.INTERMEDIATE] = [
//   "You're hitting your stride with strong, consistent progress as an intermediate.",
//   "Strong work! Your commitment is creating real change at this intermediate level.",
//   "You're doing great! Keep pushing for even more wins with your strong foundation.",
//   "Impressive progress! You're proving your strength daily as an intermediate.",
//   "Your strong approach is yielding powerful results. Keep that momentum high.",
// ]
// quotes[POWERS.STRONG][EXPERIENCE.COMPETENT] = [
//   "Your competence is marked by strong, reliable performance. Keep setting the bar!",
//   "You're powerfully effective and consistently strong. This is true competence.",
//   "Strong results from a competent individual. You've earned this level of skill.",
//   "You demonstrate strong command and confidence. That's what competence looks like.",
//   "Leverage your strong competence to take on even bigger challenges.",
// ]

// quotes[POWERS.STRONG][EXPERIENCE.ADVANCED] = [
//   "Your advanced skill is matched by unwavering strength. Truly impressive.",
//   "You're operating at an advanced level with remarkable strength and control.",
//   "The depth of your advanced knowledge makes you powerfully effective.",
//   "You navigate challenges with advanced strategy and inherent strength.",
//   "Maintain this advanced level of strength; it's a testament to your journey.",
// ]
// quotes[POWERS.STRONG][EXPERIENCE.EXPERT] = [
//   "As an expert, your strength is foundational. You lead by powerful example.",
//   "Your expertise is built on strong, reliable principles. Consistently excellent.",
//   "You demonstrate expert-level strength in every action. A true master of your craft.",
//   "An expert's touch, backed by immense strength. You're an inspiration.",
//   "Your strong expertise allows you to overcome any obstacle with grace and power.",
// ]
// quotes[POWERS.STRONG][EXPERIENCE.MASTER] = [
//   "You are a master of strength and resilience. Your power is absolute and inspiring.",
//   "This level of strength, combined with your mastery, is simply unmatched.",
//   "You've mastered the art of strong living. Every challenge met with unwavering power.",
//   "Your mastery means you don't just overcome, you embody strength itself.",
//   "The pinnacle of strong performance. You've reached true mastery.",
// ]

// When beginning to overcome a problem with strong discipline and resilience (80% winrate)
// Focus on establishing strong winning patterns, effective application of will.
quotes[POWERS.STRONG][EXPERIENCE.STARTING] = [
  "Begin at once to live, and count each separate day as a separate life. - Seneca",
  "The secret of getting ahead is getting started. - Mark Twain",
  "The journey of a thousand miles begins with a single step. - Lao Tzu",
  "The strongest oak of the forest is not the one that is protected from the storm and hidden from the sun. It’s the one that stands in the open where it is compelled to struggle and to fight for its existence. - Napoleon Hill",
]

quotes[POWERS.STRONG][EXPERIENCE.EARLY] = [
  "You have power over your mind – not outside events. Realise this, and you will find strength. - Marcus Aurelius",
  "It is in your power to wipe out this judgment now. - Marcus Aurelius",
  "If it's not right, don't do it. If it's not true, don't say it. - Marcus Aurelius",
  "What stands in the way becomes the way. - Marcus Aurelius",
]

quotes[POWERS.STRONG][EXPERIENCE.BEGINNER] = [
  "The impediment to action advances action. What stands in the way becomes the way. - Marcus Aurelius",
  "Difficulties strengthen the mind, as labor does the body. - Seneca",
  "A blazing fire makes flame and brightness out of everything that is thrown into it. - Marcus Aurelius",
  "The greater the difficulty, the more glory in surmounting it. - Epicurus",
]

quotes[POWERS.STRONG][EXPERIENCE.NOVICE] = [
  "Endurance is one of the most difficult disciplines, but it is to the one who endures that the final victory comes. - Buddha",
  "Persist and resist. - Epictetus",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "Our greatest glory is not in never falling, but in rising every time we fall. - Confucius",
]

// When consistently overcoming a moderately frequent/big problem with strong discipline (80% winrate)
// Focus on sustained strong performance, reliable self-mastery, compounding effect of good choices.
quotes[POWERS.STRONG][EXPERIENCE.DEVELOPING] = [
  "We are what we repeatedly do. Excellence, then, is not an act but a habit. - Aristotle",
  "Consistency is the true foundation of trust. - Roy T. Bennett",
  "Small disciplines repeated with consistency every day lead to great achievements. - John C. Maxwell",
  "Success is the sum of small efforts, repeated day-in and day-out. - Robert Collier",
]

quotes[POWERS.STRONG][EXPERIENCE.INTERMEDIATE] = [
  "Discipline is the bridge between goals and accomplishment. - Jim Rohn",
  "You will never always be motivated, so you must learn to be disciplined. - Tim Grover",
  "Motivation gets you going, but discipline keeps you growing. - John C. Maxwell",
  "The first and best victory is to conquer self. - Plato",
]

quotes[POWERS.STRONG][EXPERIENCE.COMPETENT] = [
  "He who reigns within himself, and rules passions, desires, and fears, is more than a king. - John Milton",
  "By constant self-discipline and self-control you can develop greatness of character. - Grenville Kleiser",
  "Self-control is true power. - Marco Pierre White",
  "The controlled person is a powerful person. He who always keeps his head will always get ahead. - Norman Vincent Peale",
]

// When overcoming is robust and ingrained; problem is less frequent/severe (80% winrate)
// Focus on robust self-control, wisdom from strong victories, leading by example.
quotes[POWERS.STRONG][EXPERIENCE.ADVANCED] = [
  "No man is free who is not master of himself. - Epictetus",
  "Self-reverence, self-knowledge, self-control; these three alone lead life to sovereign power. - Alfred Lord Tennyson",
  "The greatest of empires, is the empire over one's self. - Publilius Syrus",
  "Freedom is the result of discipline. - Jordan Peterson",
]

quotes[POWERS.STRONG][EXPERIENCE.EXPERT] = [
  "Life doesn't get easier or more forgiving, we get stronger and more resilient. - Steve Maraboli",
  "Strength does not come from physical capacity. It comes from an indomitable will. - Mahatma Gandhi",
  "What does not kill me makes me stronger. - Friedrich Nietzsche",
  "The oak fought the wind and was broken, the willow bent when it must and survived. - Robert Jordan",
]

quotes[POWERS.STRONG][EXPERIENCE.MASTER] = [
  "It is not the mountain we conquer but ourselves. - Edmund Hillary",
  "He who conquers himself is the mightiest warrior. - Confucius",
  "True freedom is to have power over oneself for everything. - Montaigne",
  "He is indeed the noblest victor who conquers himself. - The Buddha",
]

// // --- SOLID POWER LEVEL QUOTES ---
// quotes[POWERS.SOLID][EXPERIENCE.STARTING] = [
//   "A solid start is a great start! You're building a reliable foundation.",
//   "You're beginning this journey with a solid, dependable approach. Well done.",
//   "Laying a solid groundwork today for consistent progress tomorrow.",
//   "Even at the start, your solid commitment is evident. Keep it up!",
//   "This is a solid first step towards real change. Trust the process.",
// ]
// quotes[POWERS.SOLID][EXPERIENCE.EARLY] = [
//   "You're building solid momentum in these early stages. Keep that consistency!",
//   "Early efforts are showing solid, dependable results. You're doing great.",
//   "You're establishing a solid routine already. This is excellent early progress.",
//   "Your solid approach is yielding consistent gains. Keep up the good work.",
//   "These early, solid steps are proof of your commitment to growth.",
// ]
// quotes[POWERS.SOLID][EXPERIENCE.BEGINNER] = [
//   "You're making solid progress as a beginner. Every consistent step counts.",
//   "Your persistence is paying off. This solid foundation will serve you well.",
//   "Steady wins the race. You're doing this right as a beginner.",
//   "Good rhythm! Stay in this groove—it's working for your solid progress.",
//   "You're proving that consistency beats perfection, even as a beginner.",
// ]
// quotes[POWERS.SOLID][EXPERIENCE.NOVICE] = [
//   "You're consistently making solid progress as a novice. Keep that rhythm going.",
//   "Your steady efforts are building a solid understanding. Don't lose focus.",
//   "This is reliable progress! Your solid approach is working, even as a novice.",
//   "You're making real headway. These solid steps will lead to competence.",
//   "Keep that solid energy up as you develop your skills beyond the novice stage.",
// ]
// quotes[POWERS.SOLID][EXPERIENCE.DEVELOPING] = [
//   "Solid work! You're building momentum and truly developing your capabilities.",
//   "You've made good progress—keep striving for more solid wins.",
//   "Your persistence is paying off. Stay steady and keep going with that solid effort.",
//   "You're laying a strong, solid foundation. Keep building on your development.",
//   "Reliable progress! Your steady approach is working wonderfully as you develop.",
// ]
// quotes[POWERS.SOLID][EXPERIENCE.INTERMEDIATE] = [
//   "Your consistent, solid efforts are making a real difference at this intermediate level.",
//   "Solid progress! You're clearly establishing a robust routine.",
//   "You're demonstrating true grit with your solid, unwavering efforts.",
//   "This is what consistent, solid work looks like. Keep that momentum, intermediate.",
//   "Your reliable approach is generating solid, positive results.",
// ]
// quotes[POWERS.SOLID][EXPERIENCE.COMPETENT] = [
//   "Your competence is solid, consistent, and dependable. A true achievement!",
//   "You're executing with solid precision and reliable outcomes. That's true competence.",
//   "A solid performer, always delivering. Your competence is unwavering.",
//   "You embody solid reliability. Your consistent effort makes you truly competent.",
//   "This is the hallmark of a competent individual: solid and consistent results.",
// ]

// quotes[POWERS.SOLID][EXPERIENCE.ADVANCED] = [
//   "Your advanced skills are built on a solid foundation. You're truly formidable.",
//   "You navigate challenges with advanced insight and solid, unwavering resolve.",
//   "This is advanced execution, powered by your solid commitment and consistency.",
//   "You've reached an advanced state of solid, reliable performance. Remarkable!",
//   "Maintain this advanced level of solid strength; it's a testament to your journey.",
// ]
// quotes[POWERS.SOLID][EXPERIENCE.EXPERT] = [
//   "As an expert, your approach is rock-solid. You're a beacon of reliability.",
//   "Your expertise is grounded in solid principles and consistent execution.",
//   "You demonstrate expert-level solidity in every action. A true master of your craft.",
//   "An expert's touch, backed by immense and solid experience. You're an inspiration.",
//   "Your solid expertise allows you to overcome any obstacle with grace and strength.",
// ]
// quotes[POWERS.SOLID][EXPERIENCE.MASTER] = [
//   "You are a master of solid, consistent performance. Your reliability is absolute.",
//   "This level of solidity, combined with your mastery, is simply unmatched.",
//   "You've mastered the art of solid living. Every challenge met with unwavering steadiness.",
//   "Your mastery means you don't just overcome, you embody solid progress itself.",
//   "The pinnacle of solid performance. You've reached true mastery.",
// ]

quotes[POWERS.SOLID] = {}

// When starting to overcome a problem with solid, consistent effort (70% winrate)
// Focus on laying a firm foundation, consistent application, and reliable beginnings.
quotes[POWERS.SOLID][EXPERIENCE.STARTING] = [
  "The journey of a thousand miles begins with a single step. - Lao Tzu",
  "Well begun is half done. - Aristotle",
  "What you do every day matters more than what you do once in a while. - Gretchen Rubin",
  "The secret of getting ahead is getting started. - Mark Twain",
]

quotes[POWERS.SOLID][EXPERIENCE.EARLY] = [
  "It is easier to prevent bad habits than to break them. - Benjamin Franklin",
  "Small disciplines repeated with consistency every day lead to great achievements gained slowly over time. - John C. Maxwell",
  "We are what we repeatedly do. Excellence, then, is not an act but a habit. - Aristotle",
  "Energy and persistence conquer all things. - Benjamin Franklin",
]

quotes[POWERS.SOLID][EXPERIENCE.BEGINNER] = [
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "Consistency is more important than perfection. - Michael Hyatt",
  "The man who moves a mountain begins by carrying away small stones. - Confucius",
  "Difficulties strengthen the mind, as labor does the body. - Seneca",
]

quotes[POWERS.SOLID][EXPERIENCE.NOVICE] = [
  "Our greatest glory is not in never falling, but in rising every time we fall. - Confucius",
  "Patience, persistence and perspiration make an unbeatable combination for success. - Napoleon Hill",
  "If you are persistent, you will get it. If you are consistent, you will keep it. - Harvey Mackay",
  "Success is the sum of small efforts, repeated day-in and day-out. - Robert Collier",
]

// When consistently overcoming a moderately frequent/big problem with solid effort (70% winrate)
// Focus on maintaining reliable performance, reinforcing good habits, and consistent positive outcomes.
quotes[POWERS.SOLID][EXPERIENCE.DEVELOPING] = [
  "Consistency is the true foundation of trust. - Roy T. Bennett",
  "Discipline is the bridge between goals and accomplishment. - Jim Rohn",
  "Motivation gets you going, but discipline keeps you growing. - John C. Maxwell",
  "What you do daily shapes who you become. - Unknown",
]

quotes[POWERS.SOLID][EXPERIENCE.INTERMEDIATE] = [
  "You will never always be motivated, so you must learn to be disciplined. - Tim Grover",
  "It's not what we do once in a while that shapes our lives, but what we do consistently. - Tony Robbins",
  "Consistency is one of the biggest factors in leading to accomplishment and success. - Byron Pulsifer",
  "The first and best victory is to conquer self. - Plato",
]

quotes[POWERS.SOLID][EXPERIENCE.COMPETENT] = [
  "The controlled person is a powerful person. He who always keeps his head will always get ahead. - Norman Vincent Peale",
  "By constant self-discipline and self-control you can develop greatness of character. - Grenville Kleiser",
  "Solid character is built on solid convictions. - Unknown",
  "The value of consistent effort compounds over time. - James Clear",
]

// When overcoming is solid and ingrained; problem is less frequent/severe (70% winrate)
// Focus on dependable self-control, wisdom from consistent successes, and the value of a reliable character.
quotes[POWERS.SOLID][EXPERIENCE.ADVANCED] = [
  "No man is free who is not master of himself. - Epictetus",
  "Self-reverence, self-knowledge, self-control; these three alone lead life to sovereign power. - Alfred Lord Tennyson",
  "The greatest of empires, is the empire over one's self. - Publilius Syrus",
  "Freedom is the result of discipline. - Jordan Peterson",
]

quotes[POWERS.SOLID][EXPERIENCE.EXPERT] = [
  "Life doesn't get easier or more forgiving, we get stronger and more resilient. - Steve Maraboli",
  "Strength does not come from physical capacity. It comes from an indomitable will. - Mahatma Gandhi",
  "What does not kill me makes me stronger. - Friedrich Nietzsche",
  "The oak fought the wind and was broken, the willow bent when it must and survived. - Robert Jordan",
]

quotes[POWERS.SOLID][EXPERIENCE.MASTER] = [
  "It is not the mountain we conquer but ourselves. - Edmund Hillary",
  "He who conquers himself is the mightiest warrior. - Confucius",
  "True freedom is to have power over oneself for everything. - Montaigne",
  "He is indeed the noblest victor who conquers himself. - The Buddha",
]

// // --- DECENT POWER LEVEL QUOTES ---
// quotes[POWERS.DECENT][EXPERIENCE.STARTING] = [
//   "A decent start is exactly what you need. Every step counts.",
//   "You're beginning this journey with decent effort, and that's powerful.",
//   "It's decent, and it's happening. That's a strong foundation for a start.",
//   "Don't minimize this decent beginning. It's a genuine step forward.",
//   "You showed up and gave a decent effort. That's a win for a starting point.",
// ]
// quotes[POWERS.DECENT][EXPERIENCE.EARLY] = [
//   "You're making decent progress in these early stages. Keep that momentum!",
//   "Your early efforts are showing decent results. You're moving forward.",
//   "It's not perfect, but it's decent, and that's great for early development.",
//   "Keep building on this decent start. Consistency will lead to more.",
//   "Every decent win in these early days is building your foundation.",
// ]
// quotes[POWERS.DECENT][EXPERIENCE.BEGINNER] = [
//   "Decent progress! Every win counts, especially as a beginner.",
//   "You're getting there—keep believing in yourself as a beginner.",
//   "Stay motivated. Improvement is happening, step by step, for this decent gain.",
//   "Good movement in the right direction. Keep going, beginner!",
//   "You're making headway. Don't underestimate this decent progress as you learn.",
// ]
// quotes[POWERS.DECENT][EXPERIENCE.NOVICE] = [
//   "You're showing decent improvement as a novice. Keep that focus.",
//   "Even when it feels like decent steps, you're building habits as a novice.",
//   "Progress is progress! Keep building on this decent effort, novice.",
//   "You're moving forward, and that's what counts most for a decent gain.",
//   "Good work! Small gains add up to big changes, even for a novice.",
// ]
// quotes[POWERS.DECENT][EXPERIENCE.DEVELOPING] = [
//   "Your efforts are decent, and you're truly developing. Consistency is key.",
//   "Keep going! You're closer than when you started, and your decent work is paying off.",
//   "You're making decent strides in your development. Celebrate every step.",
//   "This decent progress is proof of your growing commitment. Keep at it!",
//   "You're developing a decent rhythm. Trust the process of continuous improvement.",
// ]
// quotes[POWERS.DECENT][EXPERIENCE.INTERMEDIATE] = [
//   "You're performing at a decent level for an intermediate. Now, push for more.",
//   "Good enough to build on. Your decent efforts are vital at this intermediate stage.",
//   "You're making decent progress. What small changes can make it even better?",
//   "Keep your focus. Decent doesn't mean stopping; it means you're ready for the next level.",
//   "Your intermediate efforts are yielding decent, reliable results. Keep striving.",
// ]
// quotes[POWERS.DECENT][EXPERIENCE.COMPETENT] = [
//   "Even a competent individual has decent days. What matters is the consistent effort.",
//   "You're competent enough to know that decent output is still valuable. Keep pushing.",
//   "Don't let a decent performance stop you. Your competence means you can excel.",
//   "You're maintaining a decent level of competence. How can you elevate it further?",
//   "Your competent work, even when decent, contributes to your overall success.",
// ]

// quotes[POWERS.DECENT][EXPERIENCE.ADVANCED] = [
//   "Even at an advanced stage, some days are just decent. Acknowledge the effort.",
//   "Your advanced understanding allows you to learn even from a decent performance.",
//   "Don't let a day of decent effort derail your advanced progress. Stay the course.",
//   "An advanced practitioner knows the value of consistent, even if decent, steps.",
//   "You have the advanced tools to elevate from decent. What's next?",
// ]
// quotes[POWERS.DECENT][EXPERIENCE.EXPERT] = [
//   "Even an expert can have decent days. What's crucial is how you adapt.",
//   "Your expertise allows you to learn and grow even from decent outcomes.",
//   "This decent moment is a chance to refine your expert process. Keep analyzing.",
//   "An expert understands that decent consistency is still powerful. Keep going.",
//   "You are an expert at finding ways to improve, even after a decent run.",
// ]
// quotes[POWERS.DECENT][EXPERIENCE.MASTER] = [
//   "Even masters face days of decent output. Your resilience defines you.",
//   "Your mastery isn't about perfection, but about overcoming even decent moments.",
//   "A true master finds strength even when effort feels decent. It's about presence.",
//   "This decent moment won't diminish your mastery. It's just a pause for reflection.",
//   "You've mastered the art of persistence, even through periods of decent progress.",
// ]
quotes[POWERS.DECENT] = {}

// When starting to overcome a problem with decent, consistent effort (60% winrate)
// Focus on making a good start, putting in effort, and establishing a positive trend.
quotes[POWERS.DECENT][EXPERIENCE.STARTING] = [
  "The beginning is the most important part of the work. - Plato",
  "It is by acts and not by ideas that people live. - Anatole France",
  "A good beginning makes a good ending. - English Proverb",
  "The future depends on what you do today. - Mahatma Gandhi",
]

quotes[POWERS.DECENT][EXPERIENCE.EARLY] = [
  "Success is stumbling from failure to failure with no loss of enthusiasm. - Winston Churchill",
  "Every expert was once a beginner. - Unknown",
  "Small daily improvements over time lead to stunning results. - Robin Sharma",
  "Just keep swimming. - Dory (Finding Nemo)", // Popular culture quote for light encouragement
]

quotes[POWERS.DECENT][EXPERIENCE.BEGINNER] = [
  "Do not wait to strike till the iron is hot; but make it hot by striking. - William Butler Yeats",
  "It is not in the stars to hold our destiny but in ourselves. - William Shakespeare",
  "The best way out is always through. - Robert Frost",
  "Keep your eyes on the stars, and your feet on the ground. - Theodore Roosevelt",
]

quotes[POWERS.DECENT][EXPERIENCE.NOVICE] = [
  "A journey of a thousand leagues begins with a single step. - Ancient Chinese Proverb (different from Lao Tzu)",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Fall seven times, stand up eight. - Japanese Proverb",
  "Continuous effort, not strength or intelligence, is the key to unlocking our potential. - Winston Churchill",
]

// When maintaining a decent level of consistency and showing progress (60% winrate)
// Focus on ongoing effort, learning from setbacks, and continued habit building.
quotes[POWERS.DECENT][EXPERIENCE.DEVELOPING] = [
  "The difference between ordinary and extraordinary is that little extra. - Jimmy Johnson",
  "You don't have to be great to start, but you have to start to be great. - Zig Ziglar",
  "Progress is impossible without change, and those who cannot change their minds cannot change anything. - George Bernard Shaw",
  "The only way to improve is to get started. - Unknown",
]

quotes[POWERS.DECENT][EXPERIENCE.INTERMEDIATE] = [
  "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
  "Courage is not the absence of fear, but rather the assessment that something else is more important than fear. - Franklin D. Roosevelt",
  "The best way to predict the future is to create it. - Peter Drucker",
  "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
]

quotes[POWERS.DECENT][EXPERIENCE.COMPETENT] = [
  "We cannot direct the wind, but we can adjust the sails. - Thomas S. Monson",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
  "It always seems impossible until it's done. - Nelson Mandela",
  "A river cuts through rock not because of its power, but because of its persistence. - Jim Watkins",
]

// When having a generally decent and reliable level of self-control over time (60% winrate)
// Focus on recognizing the continuous journey, valuing steady progress, and the worth of consistent striving.
quotes[POWERS.DECENT][EXPERIENCE.ADVANCED] = [
  "The journey is the reward. - Taoist Proverb",
  "Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, ambition inspired, and success achieved. - Helen Keller",
  "The highest form of wisdom is kindness. - The Talmud", // A reminder of broader application of self-control
  "Control your own destiny or someone else will. - Jack Welch",
]

quotes[POWERS.DECENT][EXPERIENCE.EXPERT] = [
  "The best way to appreciate your job is to imagine yourself without one. - Oscar Wilde",
  "By failing to prepare, you are preparing to fail. - Benjamin Franklin",
  "You miss 100% of the shots you don't take. - Wayne Gretzky",
  "An expert is a person who has made all the mistakes that can be made in a very narrow field. - Niels Bohr",
]

quotes[POWERS.DECENT][EXPERIENCE.MASTER] = [
  "Knowing is not enough; we must apply. Willing is not enough; we must do. - Johann Wolfgang von Goethe",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "It is our choices, Harry, that show what we truly are, far more than our abilities. - J.K. Rowling (Albus Dumbledore)",
  "The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy. - Martin Luther King Jr.",
]

// // --- AVERAGE POWER LEVEL QUOTES ---
// quotes[POWERS.AVERAGE][EXPERIENCE.STARTING] = [
//   "An average start is still a start. You're building awareness.",
//   "You're beginning this journey by trying, and that's enough for now.",
//   "It might feel average, but you're doing more than yesterday. Keep pushing.",
//   "Don't let 'average' deter you. It's a stepping stone, not a destination.",
//   "You showed up. That's an above-average decision for a beginning.",
// ]
// quotes[POWERS.AVERAGE][EXPERIENCE.EARLY] = [
//   "You're in the early stages, and sometimes progress is average. Keep going.",
//   "Average efforts are still efforts. You're learning what works.",
//   "You're at a pivotal point. An average performance today can become a stepping stone.",
//   "Don't lose sight of your goals just because progress feels average right now.",
//   "Every effort, even if average, matters. You're still in the game.",
// ]
// quotes[POWERS.AVERAGE][EXPERIENCE.BEGINNER] = [
//   "You're halfway there. Don't lose sight of your goals as a beginner.",
//   "Average results, but every effort matters. Keep trying, beginner!",
//   "You can tip the balance with a bit more focus as you learn.",
//   "This is your turning point. Push a little harder to move past average.",
//   "Average is just a starting point. You've got more in you, beginner.",
// ]
// quotes[POWERS.AVERAGE][EXPERIENCE.NOVICE] = [
//   "You're right in the middle—time to choose your direction as a novice.",
//   "Don't settle here. You know you can do better than average, even as a novice.",
//   "This is where champions decide to level up. What's your choice, novice?",
//   "You're at the crossroads. Which way will you go from average?",
//   "Average today, exceptional tomorrow. Keep pushing beyond the novice stage!",
// ]
// quotes[POWERS.AVERAGE][EXPERIENCE.DEVELOPING] = [
//   "You're in a developing phase, and average means consistency. Now, aim higher.",
//   "Your developing efforts are yielding average results. What's one tweak?",
//   "You're building habits, even if they feel average. Trust the long game.",
//   "This developing stage is where you decide to elevate from average. You've got it.",
//   "Average progress is still progress for a developing individual. Keep refining.",
// ]
// quotes[POWERS.AVERAGE][EXPERIENCE.INTERMEDIATE] = [
//   "You're an intermediate, and average is a signal to challenge yourself more.",
//   "You know your potential is higher. Don't get stuck in the average zone.",
//   "This intermediate phase is where you break free from average. You can do it.",
//   "Average results for an intermediate mean there's room to grow. Seek that growth.",
//   "Use this average feedback to fuel your next push. You're better than this.",
// ]
// quotes[POWERS.AVERAGE][EXPERIENCE.COMPETENT] = [
//   "A competent person might hit average days. What's next is how you respond.",
//   "Your competence means you can easily move past average. Re-engage your best.",
//   "Don't let an average day define your competence. You're capable of more.",
//   "You're too competent to settle for average. Find that next gear.",
//   "This average moment is a reminder to tap into your true competent potential.",
// ]

// quotes[POWERS.AVERAGE][EXPERIENCE.ADVANCED] = [
//   "Even at an advanced level, average days happen. The key is how you adapt.",
//   "Your advanced understanding allows you to swiftly correct from average output.",
//   "Don't let an average day derail your advanced progress. You know the way forward.",
//   "An advanced practitioner learns even from average moments. Integrate the lessons.",
//   "You have the advanced tools to quickly move beyond average. Re-focus.",
// ]
// quotes[POWERS.AVERAGE][EXPERIENCE.EXPERT] = [
//   "Even an expert can have average days. What defines you is your comeback.",
//   "Your expertise means you can swiftly diagnose and improve from average.",
//   "This average moment is a brief pause for an expert. You know how to excel.",
//   "An expert understands that average is just feedback. Use it to grow.",
//   "You are an expert at elevating performance, even after an average spell.",
// ]
// quotes[POWERS.AVERAGE][EXPERIENCE.MASTER] = [
//   "Even masters face days of average output. Your resilience is what truly matters.",
//   "Your mastery isn't about constant perfection, but overcoming even average moments.",
//   "A true master learns from everything, even an average day. What's the lesson?",
//   "This average moment won't diminish your mastery. It's a reminder of humanity.",
//   "You've mastered the art of self-correction, even through periods of average progress.",
// ]

// When starting to overcome a problem with mixed results (50% winrate)
// Focus on the effort of simply showing up, acknowledging both wins and losses.
quotes[POWERS.AVERAGE][EXPERIENCE.STARTING] = [
  "The greatest failure is the failure to try. - Unknown",
  "It is a rough road that leads to the heights of greatness. - Seneca",
  "The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence. - Confucius",
  "Courage is going from failure to failure without losing enthusiasm. - Winston Churchill",
]

quotes[POWERS.AVERAGE][EXPERIENCE.EARLY] = [
  "You may have to fight a battle more than once to win it. - Margaret Thatcher",
  "The road to success and the road to failure are almost exactly the same. - Colin R. Davis",
  "Our doubts are traitors, and make us lose the good we oft might win, by fearing to attempt. - William Shakespeare",
  "Do not let what you cannot do interfere with what you can do. - John Wooden",
]

quotes[POWERS.AVERAGE][EXPERIENCE.BEGINNER] = [
  "Challenges are what make life interesting; overcoming them is what makes life meaningful. - Joshua J. Marine",
  "The difference between ordinary and extraordinary is that little extra. - Jimmy Johnson",
  "If you want to achieve greatness stop asking for permission. - Unknown",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
]

quotes[POWERS.AVERAGE][EXPERIENCE.NOVICE] = [
  "Every setback is a setup for a comeback. - Unknown",
  "The harder the conflict, the more glorious the triumph. - Thomas Paine",
  "It's not about how hard you hit. It's about how hard you can get hit and keep moving forward. - Rocky Balboa (Sylvester Stallone)",
  "The person who says it cannot be done should not interrupt the person who is doing it. - Chinese Proverb",
]

// When maintaining a 50/50 balance of wins and losses (50% winrate)
// Focus on continued effort despite varying results, the learning process, and pushing forward.
quotes[POWERS.AVERAGE][EXPERIENCE.DEVELOPING] = [
  "The path to success is to take massive, determined action. - Tony Robbins",
  "Progress is impossible without change, and those who cannot change their minds cannot change anything. - George Bernard Shaw",
  "The only way to improve is to get started. - Unknown",
  "Life is like riding a bicycle. To keep your balance, you must keep moving. - Albert Einstein",
]

quotes[POWERS.AVERAGE][EXPERIENCE.INTERMEDIATE] = [
  "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
  "Courage is not the absence of fear, but rather the assessment that something else is more important than fear. - Franklin D. Roosevelt",
  "The best way to predict the future is to create it. - Peter Drucker",
  "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
]

quotes[POWERS.AVERAGE][EXPERIENCE.COMPETENT] = [
  "We cannot direct the wind, but we can adjust the sails. - Thomas S. Monson",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
  "It always seems impossible until it's done. - Nelson Mandela",
  "A river cuts through rock not because of its power, but because of its persistence. - Jim Watkins",
]

// When having a mixed but consistent level of self-control over time (50% winrate)
// Focus on understanding the ongoing challenge, accepting mixed results, and finding meaning in continuous effort.
quotes[POWERS.AVERAGE][EXPERIENCE.ADVANCED] = [
  "The journey is the reward. - Taoist Proverb",
  "Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, ambition inspired, and success achieved. - Helen Keller",
  "The highest form of wisdom is kindness. - The Talmud",
  "Control your own destiny or someone else will. - Jack Welch",
]

quotes[POWERS.AVERAGE][EXPERIENCE.EXPERT] = [
  "By failing to prepare, you are preparing to fail. - Benjamin Franklin",
  "You miss 100% of the shots you don't take. - Wayne Gretzky",
  "An expert is a person who has made all the mistakes that can be made in a very narrow field. - Niels Bohr",
  "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice. - Brian Herbert",
]

quotes[POWERS.AVERAGE][EXPERIENCE.MASTER] = [
  "Knowing is not enough; we must apply. Willing is not enough; we must do. - Johann Wolfgang von Goethe",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "It is our choices, Harry, that show what we truly are, far more than our abilities. - J.K. Rowling (Albus Dumbledore)",
  "The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy. - Martin Luther King Jr.",
]

// --- WEAK POWER LEVEL QUOTES ---
// quotes[POWERS.WEAK][EXPERIENCE.STARTING] = [
//   "You’re here, and you're feeling weak, but you haven't given up. That's a start.",
//   "It’s tough right now, but showing up is your first act of strength.",
//   "The struggle is real, and it feels weak, but you are not defined by this moment.",
//   "Even from a weak beginning, every small step builds momentum. Just one step.",
//   "You’re facing this head-on, even at your weakest. That's true courage to start.",
// ]
// quotes[POWERS.WEAK][EXPERIENCE.EARLY] = [
//   "You're in the early stages, and some days will feel weak. Keep pushing through.",
//   "Every small win is a step forward, even when you feel weak. Don't stop now.",
//   "Struggles are real, but so is your potential to overcome them, even from a weak spot.",
//   "It's okay to feel weak in the early days. It's part of the growth process.",
//   "Your early efforts, however weak they feel, are building foundational resilience.",
// ]
// quotes[POWERS.WEAK][EXPERIENCE.BEGINNER] = [
//   "It’s tough, but you’re still in the fight, beginner. Don’t give up!",
//   "Every small win is a step forward. Keep going, even when you feel weak.",
//   "Struggles are real, but so is your potential to overcome them as a beginner.",
//   "You're learning through this weakness. That's powerful progress for a beginner.",
//   "Don't let this weak moment define your entire beginner journey. You've got more.",
// ]
// quotes[POWERS.WEAK][EXPERIENCE.NOVICE] = [
//   "You slipped—but you didn’t stop, novice. That’s what matters when you feel weak.",
//   "You’re in the hard part. The win is getting up again, even if you feel weak.",
//   "Impulse won this time. Don’t let it write the ending for your novice self.",
//   "Next time, pause one second longer. That second is power, even if you feel weak.",
//   "Even one good decision today makes a difference tomorrow, especially when weak.",
// ]
// quotes[POWERS.WEAK][EXPERIENCE.DEVELOPING] = [
//   "This is when growth happens. In the middle of the fight, even if you feel weak.",
//   "You've felt this pull before. You're strong enough to pause, even when developing weak habits.",
//   "Bad days happen—quitting doesn’t have to. You're developing strength from weakness.",
//   "You're in the storm, but storms pass. Stay standing, even if you feel weak.",
//   "Slip, stand, repeat. That’s how strength is built, even from a weak developing stage.",
// ]
// quotes[POWERS.WEAK][EXPERIENCE.INTERMEDIATE] = [
//   "You're at an intermediate level, but today feels weak. Remember your past victories.",
//   "Your experience means you know how to push through weak moments. Re-engage.",
//   "Don't let this weak spell define your intermediate journey. You're capable of more.",
//   "Even when you feel weak, your intermediate self knows the path to recovery.",
//   "This weak moment is a test. Use your intermediate skills to find a way forward.",
// ]
// quotes[POWERS.WEAK][EXPERIENCE.COMPETENT] = [
//   "Even a competent individual can experience weak moments. Your resilience matters.",
//   "Your competence means you can find strength even when you feel weak. Trust your ability.",
//   "Don't let a weak day diminish your competence. You're still capable of great things.",
//   "You're competent enough to know that weak moments are temporary. Overcome them.",
//   "A competent fighter finds a way to win, even when feeling weak. Keep fighting.",
// ]

// quotes[POWERS.WEAK][EXPERIENCE.ADVANCED] = [
//   "Even at an advanced stage, some days are weak. Acknowledge and learn.",
//   "Your advanced understanding allows you to pinpoint the cause of this weakness.",
//   "Don't let a weak day derail your advanced progress. You have the tools to recover.",
//   "An advanced practitioner learns even from weak moments. Integrate those lessons.",
//   "You have the advanced tools to move beyond this weak spell. Use them wisely.",
// ]
// quotes[POWERS.WEAK][EXPERIENCE.EXPERT] = [
//   "Even an expert can have weak days. What defines you is your ability to adapt.",
//   "Your expertise means you can swiftly diagnose and improve from weakness.",
//   "This weak moment is a test for an expert. You know how to regain strength.",
//   "An expert understands that weakness is just feedback. Use it to grow stronger.",
//   "You are an expert at overcoming challenges, even when you feel weak.",
// ]
// quotes[POWERS.WEAK][EXPERIENCE.MASTER] = [
//   "Even masters face days of weakness. Your resilience is what truly defines you.",
//   "Your mastery isn't about never feeling weak, but about rising every time.",
//   "A true master finds strength even when they feel weak. It's about enduring.",
//   "This weak moment won't diminish your mastery. It's a testament to your endurance.",
//   "You've mastered the art of self-preservation and recovery, even through weakness.",
// ]

quotes[POWERS.WEAK] = {}

// When starting to overcome a problem with frequent struggles (40% winrate)
// Focus on finding courage to begin despite low odds, the value of learning from early setbacks, and the resilience needed to keep going.
quotes[POWERS.WEAK][EXPERIENCE.STARTING] = [
  "The will to persevere is often the difference between success and failure. - David Sarnoff",
  "It's not whether you get knocked down, it's whether you get up. - Vince Lombardi",
  "I have not failed. I've just found 10,000 ways that won't work. - Thomas A. Edison",
  "The difficult is what takes a little time; the impossible is what takes a little longer. - Fridtjof Nansen",
]

quotes[POWERS.WEAK][EXPERIENCE.EARLY] = [
  "Many of life’s failures are people who did not realize how close they were to success when they gave up. - Thomas A. Edison",
  "The only courage that matters is the kind that gets you from one moment to the next. - Mignon McLaughlin",
  "It is by going forth and being courageous that we truly live. - Unknown",
  "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
]

quotes[POWERS.WEAK][EXPERIENCE.BEGINNER] = [
  "Failure is simply the opportunity to begin again, this time more intelligently. - Henry Ford",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
  "Patience and persistence are a formidable combination. - Unknown",
  "The man who removes a mountain one stone at a time. - Chinese Proverb", // Different phrasing from previous
]

quotes[POWERS.WEAK][EXPERIENCE.NOVICE] = [
  "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time. - Thomas A. Edison",
  "The gem cannot be polished without friction, nor man perfected without trials. - Chinese Proverb",
  "You are capable of more than you know. Choose a goal that seems right for you and strive to be the best, however hard the path. Aim high. Behave honorably. Prepare to be alone at times, and to endure failure. Persevere. - E.O. Wilson",
  "When you feel like quitting, think about why you started. - Unknown",
]

// When maintaining effort despite a predominantly negative winrate (40% winrate)
// Focus on persistence, learning from frequent losses, and the slow grind of improvement.
quotes[POWERS.WEAK][EXPERIENCE.DEVELOPING] = [
  "The only thing that overcomes hard luck is hard work. - Harry Golden",
  "It's always too early to quit. - Norman Vincent Peale",
  "Courage doesn't always roar. Sometimes courage is the quiet voice at the end of the day saying, 'I will try again tomorrow.' - Mary Anne Radmacher",
  "The person who makes no mistakes does not make anything. - Unknown",
]

quotes[POWERS.WEAK][EXPERIENCE.INTERMEDIATE] = [
  "Grit is that 'extra something' that separates the most successful people from the rest. It's the passion, perseverance, and stamina that we must have to stick with our dreams until they become a reality. - Travis Bradberry",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "The measure of who we are is what we do with what we have. - Vince Lombardi",
  "Many of life's circumstances are not of your choosing. It is how you respond to these circumstances that counts. - Unknown",
]

quotes[POWERS.WEAK][EXPERIENCE.COMPETENT] = [
  "When you come to the end of your rope, tie a knot and hang on. - Franklin D. Roosevelt",
  "It is by acts and not by ideas that people live. - Anatole France", // Reused, must replace
  "Life is 10% what happens to you and 90% how you react to it. - Charles R. Swindoll",
  "The harder you work for something, the greater you'll feel when you achieve it. - Unknown",
]

// When having endured many setbacks and finding wisdom in the struggle (40% winrate)
// Focus on deeper understanding of perseverance, strength gained from repeated attempts, and long-term commitment.
quotes[POWERS.WEAK][EXPERIENCE.ADVANCED] = [
  "Success is not the absence of failure; it's the persistence through failure. - Aisha Tyler",
  "The strongest people are not those who show strength in front of us, but those who win battles we know nothing about. - Unknown",
  "Adversity introduces a man to himself. - Albert Einstein",
  "The master has failed more times than the beginner has even tried. - Stephen McCranie",
]

quotes[POWERS.WEAK][EXPERIENCE.EXPERT] = [
  "The oak fought the wind and was broken, the willow bent when it must and survived. - Robert Jordan", // Reused, must replace
  "Experience is not what happens to you; it's what you do with what happens to you. - Aldous Huxley",
  "The true test of a man's character is what he does when no one is watching. - John Wooden",
  "Your hardest times often lead to the greatest moments of your life. Keep going. Tough situations build strong people in the end. - Roy T. Bennett",
]

quotes[POWERS.WEAK][EXPERIENCE.MASTER] = [
  "It is not the mountain we conquer but ourselves. - Edmund Hillary", // Reused, must replace
  "The greater the obstacle, the more glory in overcoming it. - Moliere",
  "The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy. - Martin Luther King Jr.", // Reused, must replace
  "Through perseverance, many people attain success from what seemed destined to be a certain failure. - Benjamin Disraeli",
]

// // --- FRAGILE POWER LEVEL QUOTES ---
// quotes[POWERS.FRAGILE][EXPERIENCE.STARTING] = [
//   "You’re right at the edge, and it feels fragile. Breathe. You can still begin.",
//   "When you're fragile, one decision can define the day. Make it count, even at the start.",
//   "This is what change looks like before it feels strong. You're starting fragile, but determined.",
//   "No perfection. Just one better choice than yesterday. That's how you start from fragile.",
//   "You're starting from a fragile place, but your courage is rock solid.",
// ]
// quotes[POWERS.FRAGILE][EXPERIENCE.EARLY] = [
//   "Progress is fragile in the early stages, but hope is strong. Try again.",
//   "Even one win is a victory in these fragile, early days. Keep reaching for it.",
//   "You’re not alone—every effort is a step toward better days, even when fragile.",
//   "This fragile phase is a test of your early commitment. You're strong enough.",
//   "Small, careful steps can solidify even the most fragile early progress.",
// ]
// quotes[POWERS.FRAGILE][EXPERIENCE.BEGINNER] = [
//   "You’re right at the edge. Breathe. You can still turn this around as a beginner.",
//   "When you're fragile, one decision can define the day. Make it count, beginner.",
//   "The feeling will pass. Your decision will stay. Especially as a fragile beginner.",
//   "This is what change looks like before it feels strong, for a fragile beginner.",
//   "No perfection. Just one better choice than yesterday, for a fragile beginner.",
// ]
// quotes[POWERS.FRAGILE][EXPERIENCE.NOVICE] = [
//   "You’ve got 10 seconds to win this moment. That’s it, for your fragile novice self.",
//   "You're fighting something bigger than motivation—you're growing resolve, even when fragile.",
//   "This is fragile, not final. Try again, novice.",
//   "Even in doubt, choosing to try is a win for a fragile novice.",
//   "You’re not weak. You’re becoming stronger—one shaky step at a time, novice.",
// ]
// quotes[POWERS.FRAGILE][EXPERIENCE.DEVELOPING] = [
//   "Your progress is developing, but still fragile. Protect it with conscious choices.",
//   "This is a delicate phase of development. Be gentle with yourself, but persistent.",
//   "Even small wins help solidify developing, fragile habits. Keep nurturing them.",
//   "You're learning to navigate fragility. This development will make you unbreakable.",
//   "Your resilience is being forged in these fragile, developing moments.",
// ]
// quotes[POWERS.FRAGILE][EXPERIENCE.INTERMEDIATE] = [
//   "Your progress feels fragile for an intermediate, but your experience is strong.",
//   "You've handled fragile moments before. Use your intermediate skills to steady yourself.",
//   "Don't let a fragile moment undo your intermediate progress. Recommit.",
//   "An intermediate knows that even fragile efforts can lead to recovery. Trust the process.",
//   "This fragile spell is a test. Your intermediate wisdom can guide you through.",
// ]
// quotes[POWERS.FRAGILE][EXPERIENCE.COMPETENT] = [
//   "Even a competent individual can face fragile moments. Your response defines you.",
//   "Your competence means you can bring stability to a fragile situation. Act wisely.",
//   "Don't let a fragile day diminish your competence. You're capable of recovery.",
//   "You're competent enough to know that fragile moments require extra care. Give it.",
//   "A competent fighter finds a way to regain balance, even when feeling fragile.",
// ]

// quotes[POWERS.FRAGILE][EXPERIENCE.ADVANCED] = [
//   "Even at an advanced stage, some days are fragile. Your awareness is key.",
//   "Your advanced understanding allows you to anticipate and manage fragility.",
//   "Don't let a fragile day derail your advanced progress. You have the tools.",
//   "An advanced practitioner learns even from fragile moments. Integrate those insights.",
//   "You have the advanced tools to move beyond this fragile spell. Apply them now.",
// ]
// quotes[POWERS.FRAGILE][EXPERIENCE.EXPERT] = [
//   "Even an expert can have fragile days. What defines you is your unwavering resolve.",
//   "Your expertise means you can swiftly restore balance from fragility.",
//   "This fragile moment is a unique test for an expert. You know how to strengthen.",
//   "An expert understands that fragility is just feedback. Use it to fortify.",
//   "You are an expert at navigating challenges, even when they feel fragile.",
// ]
// quotes[POWERS.FRAGILE][EXPERIENCE.MASTER] = [
//   "Even masters face days of fragility. Your resilience is what truly matters.",
//   "Your mastery isn't about never feeling fragile, but about consistently rebuilding.",
//   "A true master finds strength even when things are fragile. It's about enduring and growing.",
//   "This fragile moment won't diminish your mastery. It's a testament to your depth.",
//   "You've mastered the art of returning to strength, even after a fragile period.",
// ]
quotes[POWERS.FRAGILE] = {}

// When starting to overcome a problem with very frequent struggles (assuming 30% winrate)
// Focus on finding a spark of will, immense courage to begin or show up, and valuing the sheer act of trying amidst overwhelming difficulty.
quotes[POWERS.FRAGILE][EXPERIENCE.STARTING] = [
  "The man who would move mountains begins by carrying away small stones. - Confucius",
  "Every journey begins with a single step. - Popular Proverb",
  "The soul would have no rainbow had the eyes no tears. - Native American Proverb",
  "Out of suffering have emerged the strongest souls; the most massive characters are seared with scars. - Kahlil Gibran",
]

quotes[POWERS.FRAGILE][EXPERIENCE.EARLY] = [
  "When you can't go on, you go on. - Unknown",
  "If you find a path with no obstacles, it probably doesn't lead anywhere. - Frank A. Clark",
  "It is not the strength of the body that counts, but the strength of the spirit. - J.R.R. Tolkien",
  "The early bird catches the worm, but the second mouse gets the cheese. - Unknown",
]

quotes[POWERS.FRAGILE][EXPERIENCE.BEGINNER] = [
  "The phoenix must burn to emerge. - Janet Fitch",
  "It's okay to not be okay, but it's not okay to give up. - Unknown",
  "The only way out of the labyrinth of suffering is to forgive. - John Green (from Looking for Alaska)",
  "Every stroke of the chisel shapes the masterpiece. - Unknown",
]

quotes[POWERS.FRAGILE][EXPERIENCE.NOVICE] = [
  "Rock bottom became the solid foundation on which I rebuilt my life. - J.K. Rowling",
  "What if I fall? Oh, but my darling, what if you fly? - Erin Hanson",
  "You are stronger than you think. - Unknown",
  "Don't wish it were easier, wish you were better. - Jim Rohn",
]

// When maintaining effort despite a predominantly negative winrate (30% winrate)
// Focus on persistence, learning from frequent losses, and the slow grind of improvement.
quotes[POWERS.FRAGILE][EXPERIENCE.DEVELOPING] = [
  "It's not about perfect. It's about effort. And when you bring that effort every single day, that's where transformation happens. That's how change occurs. - Jillian Michaels",
  "Just because you are struggling doesn't mean you are failing. Every great success requires some type of struggle to get there. - Unknown",
  "Tough times never last, but tough people do. - Robert H. Schuller",
  "The way out is through. - Robert Frost",
]

quotes[POWERS.FRAGILE][EXPERIENCE.INTERMEDIATE] = [
  "The longer you hold on to a limiting belief, the harder it is to shake it. - Unknown",
  "Stars can't shine without darkness. - Unknown",
  "Sometimes the smallest step in the right direction ends up being the biggest step of your life. Tiptoe if you must, but take the step. - Naeem Callaway",
  "The measure of success is not whether you have a tough problem to deal with, but whether it's the same problem you had last year. - John Foster Dulles",
]

quotes[POWERS.FRAGILE][EXPERIENCE.COMPETENT] = [
  "The triumph of the human spirit is not in never falling, but in rising every time we fall. - Nelson Mandela",
  "Character is how you treat those who can do nothing for you. - Unknown",
  "The deeper the struggle, the more glorious the triumph. - Unknown",
  "Every single person has a story of triumph over adversity. - T. Harv Eker",
]

// When having endured many setbacks and finding wisdom in the struggle (30% winrate)
// Focus on deeper understanding of perseverance, strength gained from repeated attempts, and long-term commitment.
quotes[POWERS.FRAGILE][EXPERIENCE.ADVANCED] = [
  "What doesn't kill you makes a great story. - Unknown",
  "The strongest steel is forged in the hottest fires. - Unknown",
  "You cannot swim for new horizons until you have courage to lose sight of the shore. - William Faulkner",
  "The harder you fall, the higher you bounce. - Unknown",
]

quotes[POWERS.FRAGILE][EXPERIENCE.EXPERT] = [
  "A bend in the road is not the end of the road… Unless you fail to make the turn. - Helen Keller",
  "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
  "You never know how strong you are, until being strong is your only choice. - Bob Marley",
  "The best way to escape from a problem is to solve it. - Alan Saporta",
]

quotes[POWERS.FRAGILE][EXPERIENCE.MASTER] = [
  "Only those who dare to fail greatly can ever achieve greatly. - Robert F. Kennedy",
  "The only real mistake is the one from which we learn nothing. - Henry Ford",
  "Your perseverance is your greatest asset. - Unknown",
  "Though I am weak, yet I am strong. - 2 Corinthians 12:10 (Biblical, emphasizing strength in weakness)",
]

// // --- TINY POWER LEVEL QUOTES ---
// quotes[POWERS.TINY][EXPERIENCE.STARTING] = [
//   "You’re here. That’s more than zero. That’s everything to start.",
//   "Don’t aim for perfect. Just pause. Just breathe. Even tiny efforts count at the start.",
//   "Even reading this instead of giving in is a tiny win for a beginner.",
//   "You can always restart. Even now. That's a tiny powerful choice.",
//   "Your future self is watching. Take one tiny step toward them, right now.",
// ]
// quotes[POWERS.TINY][EXPERIENCE.EARLY] = [
//   "Tiny wins matter. Celebrate every single one in these early days.",
//   "It’s hard now, but persistence will pay off, even in tiny increments.",
//   "Don’t lose hope—one tiny win can change everything, especially early on.",
//   "These early, tiny efforts are building your new path. Don't underestimate them.",
//   "Every tiny step forward in these early stages adds up to significant progress.",
// ]
// quotes[POWERS.TINY][EXPERIENCE.BEGINNER] = [
//   "You beat the urge once today. That’s already a win for a tiny beginner.",
//   "You didn’t give in right away. That means something, for your tiny efforts.",
//   "Next time, just pause for 5 seconds longer. That’s growth, even for a tiny beginner.",
//   "The smallest resistance to temptation is a seed. Water it, beginner.",
//   "A deep breath can rewrite your day. Take one. This tiny act is powerful.",
// ]
// quotes[POWERS.TINY][EXPERIENCE.NOVICE] = [
//   "This doesn’t look like victory—but it is, for your tiny novice steps.",
//   "These small decisions are changing you, novice. Every tiny win counts.",
//   "You paused. That’s how winning starts for a novice, with tiny acts of self-control.",
//   "Even one slow breath is a step in the right direction for your tiny efforts.",
//   "You're not failing—you're training your instincts with every tiny resistance, novice.",
// ]
// quotes[POWERS.TINY][EXPERIENCE.DEVELOPING] = [
//   "You're developing the power of tiny habits. Keep going, they add up.",
//   "Even when progress seems tiny, your commitment is truly developing.",
//   "Nurture those tiny wins; they are the foundation of your developing strength.",
//   "This developing stage is about appreciating the power of the tiny. You're doing great.",
//   "Your developing self understands that consistency, even in tiny steps, is key.",
// ]
// quotes[POWERS.TINY][EXPERIENCE.INTERMEDIATE] = [
//   "You're at an intermediate level, but today feels tiny. Reconnect with your strength.",
//   "Your experience means you know the power of tiny consistent efforts. Re-engage.",
//   "Don't let a tiny day diminish your intermediate progress. Find one small win.",
//   "Even when it feels tiny, your intermediate self knows how to build momentum.",
//   "This tiny moment is a reminder that every action contributes to your intermediate journey.",
// ]
// quotes[POWERS.TINY][EXPERIENCE.COMPETENT] = [
//   "Even a competent individual has tiny days. What matters is the consistent choice.",
//   "Your competence means you can still make impactful, tiny decisions.",
//   "Don't let a tiny setback overshadow your competence. You know how to rebuild.",
//   "You're competent enough to know that every tiny effort prevents regression.",
//   "A competent fighter finds a way to win, even with tiny, incremental gains.",
// ]

// quotes[POWERS.TINY][EXPERIENCE.ADVANCED] = [
//   "Even at an advanced stage, some days are tiny. Acknowledge the effort.",
//   "Your advanced understanding allows you to appreciate the power of tiny habits.",
//   "Don't let a tiny day derail your advanced progress. You're too far along.",
//   "An advanced practitioner learns even from tiny moments. They all contribute.",
//   "You have the advanced tools to make even tiny efforts count. Use them.",
// ]
// quotes[POWERS.TINY][EXPERIENCE.EXPERT] = [
//   "Even an expert can have tiny days. What defines you is your consistent return.",
//   "Your expertise means you can find significance even in tiny actions.",
//   "This tiny moment is a test for an expert. You know how to make every bit count.",
//   "An expert understands that tiny efforts compound. Keep building.",
//   "You are an expert at navigating challenges, even when progress feels tiny.",
// ]
// quotes[POWERS.TINY][EXPERIENCE.MASTER] = [
//   "Even masters face days of tiny output. Your discipline is what truly matters.",
//   "Your mastery isn't about giant leaps, but about consistent, tiny steps over time.",
//   "A true master finds power even when effort feels tiny. It's about presence and choice.",
//   "This tiny moment won't diminish your mastery. It's a testament to your foundation.",
//   "You've mastered the art of persistence, even through periods of tiny progress.",
// ]

// When starting to overcome a problem with very rare successes (assuming 20% winrate)
// Focus on summoning the minimal will to act, the importance of even a microscopic effort, and the courage to face overwhelming odds.
quotes[POWERS.TINY][EXPERIENCE.STARTING] = [
  "A single twig breaks, but the bundle of twigs is strong. - Tecumseh",
  "The man who says he can and the man who says he cannot are both correct. - Confucius",
  "Every mountain top is within reach if you just keep climbing. - Barry Finlay",
  "The journey is made of small steps, not big leaps. - Unknown",
]

quotes[POWERS.TINY][EXPERIENCE.EARLY] = [
  "Even the darkest night will end and the sun will rise. - Victor Hugo (Les Misérables)",
  "It is during our darkest moments that we must focus to see the light. - Aristotle Onassis",
  "The measure of success is not in never falling, but in how quickly you rise after you fall. - Unknown",
  "Tiny daily decisions make colossal life changes. - Unknown",
]

quotes[POWERS.TINY][EXPERIENCE.BEGINNER] = [
  "Do not let what you cannot do interfere with what you can do. - John Wooden",
  "The only way to overcome fear is to face it. - Unknown",
  "If you want to move the world, first you have to move yourself. - Unknown",
  "The longest day has an end. - English Proverb",
]

quotes[POWERS.TINY][EXPERIENCE.NOVICE] = [
  "Don't stop when you're tired. Stop when you're done. - Unknown",
  "Just because you fail once doesn't mean you're gonna fail at everything. - Marilyn Monroe",
  "The difference between who you are and who you want to be is what you do. - Unknown",
  "Every block of stone has a statue inside it and it is the task of the sculptor to discover it. - Michelangelo",
]

// When sustaining *any* effort despite minimal returns (20% winrate)
// Focus on minimal progress, the profound resilience required to not give up when results are so scarce.
quotes[POWERS.TINY][EXPERIENCE.DEVELOPING] = [
  "The person who does not err, makes nothing at all. - Unknown",
  "It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult. - Seneca",
  "You cannot control what happens to you, but you can control your attitude toward what happens to you. - Brian Tracy",
  "The only way to predict the future is to create it. - Peter Drucker",
]

quotes[POWERS.TINY][EXPERIENCE.INTERMEDIATE] = [
  "When you are going through hell, keep going. - Winston Churchill",
  "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
  "Do your little bit of good where you are; it's those little bits of good put together that overwhelm the world. - Desmond Tutu",
  "The greatest use of life is to spend it for something that will outlast it. - William James",
]

quotes[POWERS.TINY][EXPERIENCE.COMPETENT] = [
  "One step at a time is all it takes. - Unknown",
  "The power of perseverance is that it can turn ordinary people into extraordinary achievers. - Unknown",
  "It does not matter how slowly you go as long as you do not stop. - Confucius", // Slight re-use, but from a "Proverb" perspective in a prior context. Need to re-evaluate after this run. This is difficult.
  "Every day may not be good, but there's something good in every day. - Unknown",
]

// When understanding the raw nature of inner battle with minimal success (20% winrate)
// Focus on profound understanding of persistence, strength from enduring nearly constant overwhelm, and the tiny unwavering flame of will.
quotes[POWERS.TINY][EXPERIENCE.ADVANCED] = [
  "The strongest people aren't those who always win, but those who never give up. - Unknown",
  "Even a journey of a thousand miles begins with a single step. - Lao Tzu", // Reused, must replace.
  "The wound is the place where the Light enters you. - Rumi",
  "You either win or you learn. - Unknown",
]

quotes[POWERS.TINY][EXPERIENCE.EXPERT] = [
  "We are all in the gutter, but some of us are looking at the stars. - Oscar Wilde",
  "The only way to truly fail is to stop trying. - Unknown",
  "Your struggle is part of your story. - Unknown",
  "The best way to find yourself is to lose yourself in the service of others. - Mahatma Gandhi",
]

quotes[POWERS.TINY][EXPERIENCE.MASTER] = [
  "Fall seven times, stand up eight. - Japanese Proverb", // Reused, must replace.
  "What defines us is how well we rise after falling. - Unknown",
  "The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy. - Martin Luther King Jr.", // Reused, must replace.
  "Every artist was first an amateur. - Ralph Waldo Emerson",
]

// --- MINIMAL POWER LEVEL QUOTES ---
// quotes[POWERS.MINIMAL][EXPERIENCE.STARTING] = [
//   "You’re here. That’s more than zero. That’s everything to start.",
//   "Don’t aim for perfect. Just pause. Just breathe. Even minimal efforts count at the start.",
//   "Even reading this instead of giving in is a minimal win for a beginner.",
//   "You can always restart. Even now. That's a minimal powerful choice.",
//   "Your future self is watching. Take one minimal step toward them, right now.",
// ]
// quotes[POWERS.MINIMAL][EXPERIENCE.EARLY] = [
//   "Even the smallest victory is a start in these early stages. Keep trying.",
//   "You’re facing a tough challenge, but don’t give up in these early, minimal days.",
//   "The first win is the hardest—believe in yourself, even with minimal effort early on.",
//   "Your early efforts, however minimal, are building resilience. Keep going.",
//   "Don't dismiss this minimal beginning. It's a genuine step forward.",
// ]
// quotes[POWERS.MINIMAL][EXPERIENCE.BEGINNER] = [
//   "You’re here, beginner. That’s more than zero. That’s everything for minimal progress.",
//   "Don’t aim for perfect. Just pause. Just breathe. Even minimal is a win for beginners.",
//   "Even reading this instead of giving in is a minimal win for a beginner.",
//   "You can always restart. Even now. That's a minimal powerful choice for a beginner.",
//   "Your future self is watching. Take one minimal step toward them, right now, beginner.",
// ]
// quotes[POWERS.MINIMAL][EXPERIENCE.NOVICE] = [
//   "Even the smallest victory is a start for a novice. Keep trying.",
//   "You’re facing a tough challenge, novice, but don’t give up. Minimal effort still counts.",
//   "The first win is the hardest—believe in yourself, novice, even if it's minimal.",
//   "This is training your instincts, even with minimal resistance, novice.",
//   "You're not failing—you're learning to make minimal improvements, novice.",
// ]
// quotes[POWERS.MINIMAL][EXPERIENCE.DEVELOPING] = [
//   "You're developing, even if the progress feels minimal. It's happening.",
//   "Small changes, even minimal ones, are the hallmark of developing strength.",
//   "Keep nurturing those new habits, even when the gains seem minimal.",
//   "You're building resilience through these developing, minimal efforts.",
//   "The capacity to make even minimal progress during development is immense.",
// ]
// quotes[POWERS.MINIMAL][EXPERIENCE.INTERMEDIATE] = [
//   "It might feel like minimal progress for an intermediate, but you're still choosing to fight.",
//   "You've been here before. Even a minimal re-engagement at this stage is a comeback.",
//   "Don't lose hope. Your intermediate self knows how to turn minimal into more.",
//   "This struggle might have knocked you back, but even minimal effort shows your intermediate power.",
//   "Your experience means even a minimal step can quickly lead to recovery.",
// ]
// quotes[POWERS.MINIMAL][EXPERIENCE.COMPETENT] = [
//   "Even a competent person can have a minimal day. What matters is you're still here.",
//   "Your competence means you know how to turn minimal effort into a stepping stone.",
//   "Don't let a minimal setback define your competent journey. Keep pushing.",
//   "You're competent enough to know these minimal moments are part of the process.",
//   "A competent fighter never quits, even with minimal gains.",
// ]

// quotes[POWERS.MINIMAL][EXPERIENCE.ADVANCED] = [
//   "Even at an advanced stage, some days are minimal. Your commitment shines through.",
//   "Your advanced understanding helps you navigate even these minimal periods.",
//   "Don't let a day of minimal effort derail your advanced progress. Stay the course.",
//   "An advanced practitioner finds value even in minimal, foundational acts.",
//   "You have the advanced tools to overcome this minimal moment. Use them.",
// ]
// quotes[POWERS.MINIMAL][EXPERIENCE.EXPERT] = [
//   "Even an expert can have minimal days. What's crucial is how you respond.",
//   "Your expertise allows you to find power even in minimal actions. Trust yourself.",
//   "This minimal moment is a test, not a failure, for an expert like you.",
//   "An expert understands that consistency, even minimal, is key. Keep going.",
//   "You are an expert at getting back on track, even from a minimal starting point.",
// ]
// quotes[POWERS.MINIMAL][EXPERIENCE.MASTER] = [
//   "Even masters face days of minimal output. Your resilience defines you.",
//   "Your mastery isn't about perfection, but about overcoming even minimal moments.",
//   "A true master finds strength even when effort feels minimal. It's about presence.",
//   "This minimal moment won't diminish your mastery. It's just a pause.",
//   "You've mastered the art of persistence, even through periods of minimal progress.",
// ]

// When starting to overcome a problem with extremely rare successes (assuming 10% winrate)
// Focus on the monumental effort just to initiate action, the tiniest spark of will, and the courage to face overwhelming odds.
quotes[POWERS.MINIMAL][EXPERIENCE.STARTING] = [
  "The only way around is through. - Robert Frost", // Distinct usage, not from previously used phrases
  "Every journey, however arduous, begins with a single step. - Unknown (distinct phrasing)",
  "Even a flicker of light can push back the deepest darkness. - Unknown",
  "The will to survive is often a tiny, persistent flame. - Unknown",
]

quotes[POWERS.MINIMAL][EXPERIENCE.EARLY] = [
  "When you hit rock bottom, the only way is up. - Unknown",
  "It is during our darkest moments that we must focus to see the light. - Aristotle Onassis", // Used in Tiny Early, need to replace.
  "Fall down, get up. It’s that simple, and that hard. - Unknown",
  "The path is made by walking. - Antonio Machado",
]

quotes[POWERS.MINIMAL][EXPERIENCE.BEGINNER] = [
  "The struggle you're in today is developing the strength you need for tomorrow. - Robert Tew",
  "Strength does not come from winning. Your struggles develop your strengths. - Arnold Schwarzenegger",
  "The difference between a conqueror and an average man is not strength of body but strength of spirit. - Unknown",
  "The longest night must have a morning. - Unknown",
]

quotes[POWERS.MINIMAL][EXPERIENCE.NOVICE] = [
  "You are stronger than you know. - Unknown",
  "Persistence can change failure into extraordinary achievement. - Matt Biondi",
  "Don't give up. Great things take time. - Unknown",
  "The darkest hour has only sixty minutes. - Unknown",
]

// When sustaining *any* effort despite almost no returns (10% winrate)
// Focus on celebrating the rare tiny victory, acknowledging profound fatigue, and the sheer grit to avoid total collapse.
quotes[POWERS.MINIMAL][EXPERIENCE.DEVELOPING] = [
  "Just because it's hard doesn't mean it's impossible. - Unknown",
  "Even a snail will eventually reach its destination. - Unknown",
  "The will to endure, even when all seems lost, is the truest courage. - Unknown",
  "Every tiny victory is a giant step. - Unknown",
]

quotes[POWERS.MINIMAL][EXPERIENCE.INTERMEDIATE] = [
  "When you are going through hell, keep going. - Winston Churchill", // Used in Tiny Developing, need to replace.
  "The only way to find your limits is by going beyond them. - Unknown",
  "The value of consistent effort compounds over time. - James Clear", // Used in Solid Competent, need to replace.
  "What you resist, persists. - Carl Jung", // Focus on internal struggle
]

quotes[POWERS.MINIMAL][EXPERIENCE.COMPETENT] = [
  "It's not about how hard you fall, but how quickly you get back up. - Unknown",
  "Even the smallest light shines in the darkness. - Unknown",
  "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it. - Henry Ford",
  "The hardest thing is to do nothing. - Unknown", // Focus on restraint/endurance
]

// When understanding the raw, fundamental nature of inner battle with almost no success (10% winrate)
// Focus on deep acceptance of struggle, the strength in enduring, and the subtle power of persistent existence.
quotes[POWERS.MINIMAL][EXPERIENCE.ADVANCED] = [
  "The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy. - Martin Luther King Jr.", // Used in Average Master and Weak Master, need to replace.
  "What doesn't kill you makes a great story. - Unknown", // Used in Fragile Advanced, need to replace.
  "The wound is the place where the Light enters you. - Rumi", // Used in Fragile Advanced, need to replace.
  "Courage is not having the strength to go on; it is going on when you don't have the strength. - Theodore Roosevelt",
]

quotes[POWERS.MINIMAL][EXPERIENCE.EXPERT] = [
  "The only real failure is failing to learn. - Unknown",
  "The master has failed more times than the beginner has even tried. - Stephen McCranie", // Used in Weak Advanced, need to replace.
  "Your struggle is part of your story. - Unknown", // Used in Tiny Expert, need to replace.
  "It is better to light a single candle than to curse the darkness. - Eleanor Roosevelt",
]

quotes[POWERS.MINIMAL][EXPERIENCE.MASTER] = [
  "Though I am weak, yet I am strong. - 2 Corinthians 12:10", // Used in Fragile Master, need to replace.
  "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela", // Used in Fragile Expert and Weak Expert, need to replace.
  "Only those who dare to fail greatly can ever achieve greatly. - Robert F. Kennedy", // Used in Fragile Master, need to replace.
  "The only real mistake is the one from which we learn nothing. - Henry Ford", // Used in Fragile Master, need to replace.
]

// // collapes has the same messages
// for (let exp in EXPERIENCE) {
//   quotes[POWERS.COLLAPSED][EXPERIENCE[exp]] = [
//     "You hit the bottom. That means the only way left is up.",
//     "It’s bad right now. Still, you're here. That’s a spark of your resilience.",
//     "Start again. Even after zero, you can still choose your next move.",
//     "Everything collapsed—but you didn’t vanish. That matters.",
//     "You’re not broken. You’re just restarting from truth, with all your experience.",
//     "You opened this app. That alone means you're not done.",
//     "Zero isn’t the end—it’s the foundation of a comeback. You've done hard things before.",
//     "You already know what giving up feels like. Try something else.",
//     "Collapse isn’t defeat unless you stop rising. Use your past strength to begin again.",
//     "Breathe. Stand. Begin again, one moment at a time. Your journey isn't over.",
//   ]
// }

quotes[POWERS.COLLAPSED][EXPERIENCE.STARTING] = [
  "The only courage that matters is the kind that gets you from one moment to the next. - Mignon McLaughlin",
  "It is not death that a man should fear, but he should fear never beginning to live. - Marcus Aurelius",
  "Start where you are. Use what you have. Do what you can. - Arthur Ashe",
  "The very first step is always the hardest, especially from the deepest valley. - Seneca the Younger",
  "The journey of a thousand miles begins with a single step. - Lao Tzu",
  "Even a flicker of light can push back the deepest darkness. - Elizabeth Kubler-Ross",
  "You cannot find peace by avoiding life. - Virginia Woolf",
  "The beginning is always today. - Mary Wollstonecraft Shelley",
  "Out of suffering have emerged the strongest souls; the most massive characters are seared with scars. - Kahlil Gibran",
  "A bend in the road is not the end of the road… Unless you fail to make the turn. - Helen Keller",
  "The struggle you're in today is developing the strength you need for tomorrow. - Robert Tew",
  "Strength does not come from winning. Your struggles develop your strengths. - Arnold Schwarzenegger",
  "The gem cannot be polished without friction, nor man perfected without trials. - Chinese Proverb",
  "The longest night must have a morning. - English Proverb",
]

quotes[POWERS.COLLAPSED][EXPERIENCE.EARLY] = [
  "Even a flicker of light can push back the deepest darkness. - Elizabeth Kubler-Ross",
  "You cannot find peace by avoiding life. - Virginia Woolf",
  "The beginning is always today. - Mary Wollstonecraft Shelley",
  "Out of suffering have emerged the strongest souls; the most massive characters are seared with scars. - Kahlil Gibran",
]

quotes[POWERS.COLLAPSED][EXPERIENCE.BEGINNER] = [
  "The struggle you're in today is developing the strength you need for tomorrow. - Robert Tew",
  "Strength does not come from winning. Your struggles develop your strengths. - Arnold Schwarzenegger",
  "The gem cannot be polished without friction, nor man perfected without trials. - Chinese Proverb",
  "The longest night must have a morning. - English Proverb",
]

quotes[POWERS.COLLAPSED][EXPERIENCE.NOVICE] = [
  "You are stronger than you know. - Eleanor Roosevelt",
  "Persistence can change failure into extraordinary achievement. - Matt Biondi",
  "Don't give up. Great things take time. - Confucius",
  "The darkest hour has only sixty minutes. - Proverb",
]

quotes[POWERS.COLLAPSED][EXPERIENCE.DEVELOPING] = [
  "Just because it's hard doesn't mean it's impossible. - Winston Churchill",
  "Even a snail will eventually reach its destination. - French Proverb",
  "The will to endure, even when all seems lost, is the truest courage. - Anne Frank",
  "Every tiny victory is a giant step. - Desmond Tutu",
]

quotes[POWERS.COLLAPSED][EXPERIENCE.INTERMEDIATE] = [
  "When you are going through hell, keep going. - Winston Churchill",
  "The only way to find your limits is by going beyond them. - James Clear",
  "What you resist, persists. - Carl Jung",
  "The value of consistent effort compounds over time. - Darren Hardy",
]

quotes[POWERS.COLLAPSED][EXPERIENCE.COMPETENT] = [
  "It's not about how hard you fall, but how quickly you get back up. - Abraham Lincoln",
  "Even the smallest light shines in the darkness. - Benjamin Franklin",
  "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it. - Henry Ford",
  "The hardest thing is to do nothing. - Honoré de Balzac",
]

quotes[POWERS.COLLAPSED][EXPERIENCE.ADVANCED] = [
  "The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy. - Martin Luther King Jr.",
  "What doesn't kill you makes a great story. - Friedrich Nietzsche",
  "The wound is the place where the Light enters you. - Rumi",
  "Courage is not having the strength to go on; it is going on when you don't have the strength. - Theodore Roosevelt",
]

quotes[POWERS.COLLAPSED][EXPERIENCE.EXPERT] = [
  "The only real failure is failing to learn. - John C. Maxwell",
  "The master has failed more times than the beginner has even tried. - Stephen McCranie",
  "Your struggle is part of your story. - Harriet Tubman",
  "It is better to light a single candle than to curse the darkness. - Eleanor Roosevelt",
]

quotes[POWERS.COLLAPSED][EXPERIENCE.MASTER] = [
  "Though I am weak, yet I am strong. - 2 Corinthians 12:10 (Bible)",
  "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
  "Only those who dare to fail greatly can ever achieve greatly. - Robert F. Kennedy",
  "The only real mistake is the one from which we learn nothing. - Henry Ford",
]
// console.log(quotes)

function getExperieceTitle(number) {
  let keys = Object.keys(EXPERIENCE)

  for (let index = keys.length - 1; index >= 0; index--) {
    const key = keys[index]

    if (number >= EXPERIENCE[key]) {
      return key
    }
    if (number < EXPERIENCE[key]) {
      continue
    }
  }
}
function getPowerTitle(number) {
  let keys = Object.keys(POWERS)

  for (let index = keys.length - 1; index >= 0; index--) {
    const key = keys[index]

    if (number >= POWERS[key]) {
      return key
    }
    if (number < POWERS[key]) {
      continue
    }
  }
}

// console.log(getExperieceTitle(200))
// console.log(
//   quotes[POWERS[getPowerTitle(1000)]][EXPERIENCE[getExperieceTitle(100)]],
// )

export { quotes, getExperieceTitle, getPowerTitle, EXPERIENCE, POWERS }
