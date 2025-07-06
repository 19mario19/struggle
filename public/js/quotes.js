const POWERS = {
  SUPERIOR: 90,
  STRONG: 80,
  SOLID: 70,
  DECENT: 60,
  AVERAGE: 50,
  WEAK: 40,
  FRAGILE: 30,
  TINY: 20,
  MINIMAL: 10,
  COLLAPSED: 0,
}

const EXPERIENCE = {
  STARTING: 0,
  EARLY: 10,
  BEGINNER: 25,
  NOVICE: 40,
  DEVELOPING: 60,
  INTERMEDIATE: 80,
  COMPETENT: 100,
  PROFICIENT: 130,
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

quotes[POWERS.SUPERIOR][EXPERIENCE.STARTING] = [
  "You're starting this journey with a superior mindset. Your potential is immense!",
  "Even at the beginning, your superior approach sets you apart. Watch yourself soar.",
  "A fresh start for a truly superior individual. Channel that excellence into new habits.",
  "You carry superior drive into this beginning. Expect rapid gains and high achievement.",
  "This 'starting' phase is just a new stage for your inherent superiority to shine.",
]

quotes[POWERS.SUPERIOR][EXPERIENCE.EARLY] = [
  "You're already showing superior mastery in these early stages. Keep pushing that boundary!",
  "Your early progress is already demonstrating a superior command. Fantastic work!",
  "See how quickly you're establishing superior habits? You're a force to be reckoned with.",
  "You're gaining momentum with superior speed. This is truly impressive early-stage growth.",
  "This 'early' phase is quickly becoming a testament to your superior abilities.",
]

quotes[POWERS.SUPERIOR][EXPERIENCE.BEGINNER] = [
  "You've moved beyond beginner and into superior territory. Your progress is exceptional.",
  "Even as a beginner, your superior focus is making complex tasks feel natural.",
  "You're demonstrating superior potential by mastering the basics with remarkable speed.",
  "This beginner phase is merely a launchpad for your superior performance.",
  "Keep this superior dedication. You're swiftly transitioning from learning to leading.",
]

quotes[POWERS.SUPERIOR][EXPERIENCE.NOVICE] = [
  "You're transforming from novice to superior with incredible pace. Keep challenging yourself!",
  "Your superior ability to learn and adapt is evident even at this novice stage.",
  "The novice level can barely contain your superior drive. You're destined for more.",
  "You're showing superior understanding and application. This is rapid advancement.",
  "Continue to refine. Your superior command is growing stronger with every novice step.",
]

quotes[POWERS.SUPERIOR][EXPERIENCE.DEVELOPING] = [
  "Your superior development is undeniable. You're shaping into a true expert.",
  "You're developing at a superior rate, building profound strength and resilience.",
  "See how you're growing into your superior potential? It's truly inspiring to witness.",
  "This developing stage is a clear path to achieving superior and lasting change.",
  "You're not just improving; you're evolving into a superior force in this struggle.",
]

quotes[POWERS.SUPERIOR][EXPERIENCE.INTERMEDIATE] = [
  "You've reached a superior level, effortlessly navigating intermediate challenges. Keep excelling!",
  "Your consistency is now a superpower. You've mastered this struggle with superior command.",
  "Victory is yours—keep leading by example. Your performance is truly superior.",
  "You've turned this challenge into a strength, showcasing superior control and skill.",
  "Celebrate your journey to superior mastery. Every effort has culminated in this success.",
]

quotes[POWERS.SUPERIOR][EXPERIENCE.COMPETENT] = [
  "You're not just competent; you're operating at a superior level of effectiveness.",
  "Your superior competence makes complex tasks seem effortless. Maintain this standard.",
  "This is superior performance from a truly competent individual. Keep inspiring!",
  "Your commitment has led to superior and consistent results. Well done.",
  "You are a benchmark of superior competence. Continue to lead with excellence.",
]

quotes[POWERS.SUPERIOR][EXPERIENCE.PROFICIENT] = [
  "Your proficiency is truly superior. You're executing with exceptional skill and insight.",
  "You're not just proficient; you're setting a superior standard for performance.",
  "This profound proficiency demonstrates your superior dedication and powerful results.",
  "Your success lights the way for others as a superior example. Keep shining!",
  "You've proven that consistent, proficient effort leads to superior triumphs.",
]

quotes[POWERS.SUPERIOR][EXPERIENCE.ADVANCED] = [
  "You're operating at an advanced, superior level. Simply unparalleled in your domain.",
  "This mastery is deep and powerful. You're a superior force, advanced and unstoppable.",
  "Your superior understanding of this struggle is truly advanced and insightful.",
  "You've reached an advanced state of superior achievement. Truly remarkable!",
  "Continue to push the boundaries; your advanced, superior capabilities are limitless.",
]

quotes[POWERS.SUPERIOR][EXPERIENCE.EXPERT] = [
  "As an expert, you embody superior mastery. There's little left to conquer here.",
  "You're an expert at achieving superior outcomes. Your achievements are awe-inspiring.",
  "This is expert-level superior success. You've truly arrived at the peak of performance.",
  "Your expertise is the pinnacle of superior execution. Well done, master.",
  "An expert in superior triumph. Your journey inspires all who witness it.",
]

quotes[POWERS.SUPERIOR][EXPERIENCE.MASTER] = [
  "You are the definition of superior mastery. Unchallenged, inspiring, absolute.",
  "There's nothing left to learn; you are the superior master of this domain.",
  "You've transcended obstacles and set the superior standard for triumph. Mastered.",
  "Your superior mastery is a beacon. There's no higher level of achievement.",
  "You have not just overcome, but you have become the superior master of this struggle.",
]

// --- STRONG POWER LEVEL QUOTES ---
quotes[POWERS.STRONG][EXPERIENCE.STARTING] = [
  "Starting strong! You've got the power to make incredible initial progress.",
  "Bring that inner strength to this new beginning. You're set for powerful gains.",
  "A strong start sets the tone. You're doing great just by taking this first step.",
  "You're approaching this with strength. This foundation will serve you well.",
  "Even at the beginning, your strong resolve is your greatest asset.",
]
quotes[POWERS.STRONG][EXPERIENCE.EARLY] = [
  "You're already making strong strides in these early stages. Keep building on that!",
  "Early efforts showing strong results. This momentum is powerful.",
  "You're quickly developing a strong approach. Fantastic early progress!",
  "Your strong dedication is already evident. Keep fueling that fire.",
  "These early wins are a testament to your inherent strength.",
]
quotes[POWERS.STRONG][EXPERIENCE.BEGINNER] = [
  "You're clearly developing a strong foundation. This beginner phase is temporary.",
  "Strong efforts are turning a beginner's path into confident strides. Keep it up!",
  "The strength you're building as a beginner is truly impressive. Don't stop now.",
  "You're demonstrating powerful learning. Your strong progress is undeniable.",
  "This 'beginner' label won't last long with your strong work ethic.",
]
quotes[POWERS.STRONG][EXPERIENCE.NOVICE] = [
  "You're showcasing strong capabilities as you move beyond novice. Keep pushing!",
  "Your strength is evident in how you're tackling new challenges as a novice.",
  "You're turning novice challenges into strong wins. Great job staying focused.",
  "The power of your consistency is making a significant impact, even as a novice.",
  "You're building something lasting. Keep that strong energy up as you learn.",
]
quotes[POWERS.STRONG][EXPERIENCE.DEVELOPING] = [
  "Your strength is clearly developing! You're making real headway now.",
  "Strong progress—your efforts are showing real results as you develop.",
  "You're on the right track. Stay consistent and keep improving that strength.",
  "Your resilience is showing. Keep building on this developing strength.",
  "This is the power of persistence in action. Keep developing that strong resolve!",
]
quotes[POWERS.STRONG][EXPERIENCE.INTERMEDIATE] = [
  "You're hitting your stride with strong, consistent progress as an intermediate.",
  "Strong work! Your commitment is creating real change at this intermediate level.",
  "You're doing great! Keep pushing for even more wins with your strong foundation.",
  "Impressive progress! You're proving your strength daily as an intermediate.",
  "Your strong approach is yielding powerful results. Keep that momentum high.",
]
quotes[POWERS.STRONG][EXPERIENCE.COMPETENT] = [
  "Your competence is marked by strong, reliable performance. Keep setting the bar!",
  "You're powerfully effective and consistently strong. This is true competence.",
  "Strong results from a competent individual. You've earned this level of skill.",
  "You demonstrate strong command and confidence. That's what competence looks like.",
  "Leverage your strong competence to take on even bigger challenges.",
]
quotes[POWERS.STRONG][EXPERIENCE.PROFICIENT] = [
  "As a proficient individual, your strength in this area is undeniable.",
  "You're executing with strong impact and consistent quality. Proficient and powerful!",
  "Your strong proficiency means you can tackle almost anything. Keep refining.",
  "This is what strong, consistent effort looks like at a proficient level.",
  "Your strong, proficient actions are making a profound difference.",
]
quotes[POWERS.STRONG][EXPERIENCE.ADVANCED] = [
  "Your advanced skill is matched by unwavering strength. Truly impressive.",
  "You're operating at an advanced level with remarkable strength and control.",
  "The depth of your advanced knowledge makes you powerfully effective.",
  "You navigate challenges with advanced strategy and inherent strength.",
  "Maintain this advanced level of strength; it's a testament to your journey.",
]
quotes[POWERS.STRONG][EXPERIENCE.EXPERT] = [
  "As an expert, your strength is foundational. You lead by powerful example.",
  "Your expertise is built on strong, reliable principles. Consistently excellent.",
  "You demonstrate expert-level strength in every action. A true master of your craft.",
  "An expert's touch, backed by immense strength. You're an inspiration.",
  "Your strong expertise allows you to overcome any obstacle with grace and power.",
]
quotes[POWERS.STRONG][EXPERIENCE.MASTER] = [
  "You are a master of strength and resilience. Your power is absolute and inspiring.",
  "This level of strength, combined with your mastery, is simply unmatched.",
  "You've mastered the art of strong living. Every challenge met with unwavering power.",
  "Your mastery means you don't just overcome, you embody strength itself.",
  "The pinnacle of strong performance. You've reached true mastery.",
]

// --- SOLID POWER LEVEL QUOTES ---
quotes[POWERS.SOLID][EXPERIENCE.STARTING] = [
  "A solid start is a great start! You're building a reliable foundation.",
  "You're beginning this journey with a solid, dependable approach. Well done.",
  "Laying a solid groundwork today for consistent progress tomorrow.",
  "Even at the start, your solid commitment is evident. Keep it up!",
  "This is a solid first step towards real change. Trust the process.",
]
quotes[POWERS.SOLID][EXPERIENCE.EARLY] = [
  "You're building solid momentum in these early stages. Keep that consistency!",
  "Early efforts are showing solid, dependable results. You're doing great.",
  "You're establishing a solid routine already. This is excellent early progress.",
  "Your solid approach is yielding consistent gains. Keep up the good work.",
  "These early, solid steps are proof of your commitment to growth.",
]
quotes[POWERS.SOLID][EXPERIENCE.BEGINNER] = [
  "You're making solid progress as a beginner. Every consistent step counts.",
  "Your persistence is paying off. This solid foundation will serve you well.",
  "Steady wins the race. You're doing this right as a beginner.",
  "Good rhythm! Stay in this groove—it's working for your solid progress.",
  "You're proving that consistency beats perfection, even as a beginner.",
]
quotes[POWERS.SOLID][EXPERIENCE.NOVICE] = [
  "You're consistently making solid progress as a novice. Keep that rhythm going.",
  "Your steady efforts are building a solid understanding. Don't lose focus.",
  "This is reliable progress! Your solid approach is working, even as a novice.",
  "You're making real headway. These solid steps will lead to competence.",
  "Keep that solid energy up as you develop your skills beyond the novice stage.",
]
quotes[POWERS.SOLID][EXPERIENCE.DEVELOPING] = [
  "Solid work! You're building momentum and truly developing your capabilities.",
  "You've made good progress—keep striving for more solid wins.",
  "Your persistence is paying off. Stay steady and keep going with that solid effort.",
  "You're laying a strong, solid foundation. Keep building on your development.",
  "Reliable progress! Your steady approach is working wonderfully as you develop.",
]
quotes[POWERS.SOLID][EXPERIENCE.INTERMEDIATE] = [
  "Your consistent, solid efforts are making a real difference at this intermediate level.",
  "Solid progress! You're clearly establishing a robust routine.",
  "You're demonstrating true grit with your solid, unwavering efforts.",
  "This is what consistent, solid work looks like. Keep that momentum, intermediate.",
  "Your reliable approach is generating solid, positive results.",
]
quotes[POWERS.SOLID][EXPERIENCE.COMPETENT] = [
  "Your competence is solid, consistent, and dependable. A true achievement!",
  "You're executing with solid precision and reliable outcomes. That's true competence.",
  "A solid performer, always delivering. Your competence is unwavering.",
  "You embody solid reliability. Your consistent effort makes you truly competent.",
  "This is the hallmark of a competent individual: solid and consistent results.",
]
quotes[POWERS.SOLID][EXPERIENCE.PROFICIENT] = [
  "As a proficient individual, your solid understanding makes you incredibly effective.",
  "You're demonstrating solid expertise and reliable performance. Profoundly proficient.",
  "Your proficiency means your actions are always solid and impactful.",
  "This level of solid execution is truly proficient. Keep refining that consistency.",
  "You are a model of solid, proficient work. Well done!",
]
quotes[POWERS.SOLID][EXPERIENCE.ADVANCED] = [
  "Your advanced skills are built on a solid foundation. You're truly formidable.",
  "You navigate challenges with advanced insight and solid, unwavering resolve.",
  "This is advanced execution, powered by your solid commitment and consistency.",
  "You've reached an advanced state of solid, reliable performance. Remarkable!",
  "Maintain this advanced level of solid strength; it's a testament to your journey.",
]
quotes[POWERS.SOLID][EXPERIENCE.EXPERT] = [
  "As an expert, your approach is rock-solid. You're a beacon of reliability.",
  "Your expertise is grounded in solid principles and consistent execution.",
  "You demonstrate expert-level solidity in every action. A true master of your craft.",
  "An expert's touch, backed by immense and solid experience. You're an inspiration.",
  "Your solid expertise allows you to overcome any obstacle with grace and strength.",
]
quotes[POWERS.SOLID][EXPERIENCE.MASTER] = [
  "You are a master of solid, consistent performance. Your reliability is absolute.",
  "This level of solidity, combined with your mastery, is simply unmatched.",
  "You've mastered the art of solid living. Every challenge met with unwavering steadiness.",
  "Your mastery means you don't just overcome, you embody solid progress itself.",
  "The pinnacle of solid performance. You've reached true mastery.",
]

// --- DECENT POWER LEVEL QUOTES ---
quotes[POWERS.DECENT][EXPERIENCE.STARTING] = [
  "A decent start is exactly what you need. Every step counts.",
  "You're beginning this journey with decent effort, and that's powerful.",
  "It's decent, and it's happening. That's a strong foundation for a start.",
  "Don't minimize this decent beginning. It's a genuine step forward.",
  "You showed up and gave a decent effort. That's a win for a starting point.",
]
quotes[POWERS.DECENT][EXPERIENCE.EARLY] = [
  "You're making decent progress in these early stages. Keep that momentum!",
  "Your early efforts are showing decent results. You're moving forward.",
  "It's not perfect, but it's decent, and that's great for early development.",
  "Keep building on this decent start. Consistency will lead to more.",
  "Every decent win in these early days is building your foundation.",
]
quotes[POWERS.DECENT][EXPERIENCE.BEGINNER] = [
  "Decent progress! Every win counts, especially as a beginner.",
  "You're getting there—keep believing in yourself as a beginner.",
  "Stay motivated. Improvement is happening, step by step, for this decent gain.",
  "Good movement in the right direction. Keep going, beginner!",
  "You're making headway. Don't underestimate this decent progress as you learn.",
]
quotes[POWERS.DECENT][EXPERIENCE.NOVICE] = [
  "You're showing decent improvement as a novice. Keep that focus.",
  "Even when it feels like decent steps, you're building habits as a novice.",
  "Progress is progress! Keep building on this decent effort, novice.",
  "You're moving forward, and that's what counts most for a decent gain.",
  "Good work! Small gains add up to big changes, even for a novice.",
]
quotes[POWERS.DECENT][EXPERIENCE.DEVELOPING] = [
  "Your efforts are decent, and you're truly developing. Consistency is key.",
  "Keep going! You're closer than when you started, and your decent work is paying off.",
  "You're making decent strides in your development. Celebrate every step.",
  "This decent progress is proof of your growing commitment. Keep at it!",
  "You're developing a decent rhythm. Trust the process of continuous improvement.",
]
quotes[POWERS.DECENT][EXPERIENCE.INTERMEDIATE] = [
  "You're performing at a decent level for an intermediate. Now, push for more.",
  "Good enough to build on. Your decent efforts are vital at this intermediate stage.",
  "You're making decent progress. What small changes can make it even better?",
  "Keep your focus. Decent doesn't mean stopping; it means you're ready for the next level.",
  "Your intermediate efforts are yielding decent, reliable results. Keep striving.",
]
quotes[POWERS.DECENT][EXPERIENCE.COMPETENT] = [
  "Even a competent individual has decent days. What matters is the consistent effort.",
  "You're competent enough to know that decent output is still valuable. Keep pushing.",
  "Don't let a decent performance stop you. Your competence means you can excel.",
  "You're maintaining a decent level of competence. How can you elevate it further?",
  "Your competent work, even when decent, contributes to your overall success.",
]
quotes[POWERS.DECENT][EXPERIENCE.PROFICIENT] = [
  "As a proficient individual, even a decent day means you're still ahead of many.",
  "Your proficiency ensures that even your 'decent' efforts are high quality.",
  "A temporary dip to decent doesn't negate your proficiency. Re-engage with power.",
  "You're proficient enough to know that decent consistency leads to mastery.",
  "Leverage your proficiency to find a way to turn decent into great.",
]
quotes[POWERS.DECENT][EXPERIENCE.ADVANCED] = [
  "Even at an advanced stage, some days are just decent. Acknowledge the effort.",
  "Your advanced understanding allows you to learn even from a decent performance.",
  "Don't let a day of decent effort derail your advanced progress. Stay the course.",
  "An advanced practitioner knows the value of consistent, even if decent, steps.",
  "You have the advanced tools to elevate from decent. What's next?",
]
quotes[POWERS.DECENT][EXPERIENCE.EXPERT] = [
  "Even an expert can have decent days. What's crucial is how you adapt.",
  "Your expertise allows you to learn and grow even from decent outcomes.",
  "This decent moment is a chance to refine your expert process. Keep analyzing.",
  "An expert understands that decent consistency is still powerful. Keep going.",
  "You are an expert at finding ways to improve, even after a decent run.",
]
quotes[POWERS.DECENT][EXPERIENCE.MASTER] = [
  "Even masters face days of decent output. Your resilience defines you.",
  "Your mastery isn't about perfection, but about overcoming even decent moments.",
  "A true master finds strength even when effort feels decent. It's about presence.",
  "This decent moment won't diminish your mastery. It's just a pause for reflection.",
  "You've mastered the art of persistence, even through periods of decent progress.",
]

// --- AVERAGE POWER LEVEL QUOTES ---
quotes[POWERS.AVERAGE][EXPERIENCE.STARTING] = [
  "An average start is still a start. You're building awareness.",
  "You're beginning this journey by trying, and that's enough for now.",
  "It might feel average, but you're doing more than yesterday. Keep pushing.",
  "Don't let 'average' deter you. It's a stepping stone, not a destination.",
  "You showed up. That's an above-average decision for a beginning.",
]
quotes[POWERS.AVERAGE][EXPERIENCE.EARLY] = [
  "You're in the early stages, and sometimes progress is average. Keep going.",
  "Average efforts are still efforts. You're learning what works.",
  "You're at a pivotal point. An average performance today can become a stepping stone.",
  "Don't lose sight of your goals just because progress feels average right now.",
  "Every effort, even if average, matters. You're still in the game.",
]
quotes[POWERS.AVERAGE][EXPERIENCE.BEGINNER] = [
  "You're halfway there. Don't lose sight of your goals as a beginner.",
  "Average results, but every effort matters. Keep trying, beginner!",
  "You can tip the balance with a bit more focus as you learn.",
  "This is your turning point. Push a little harder to move past average.",
  "Average is just a starting point. You've got more in you, beginner.",
]
quotes[POWERS.AVERAGE][EXPERIENCE.NOVICE] = [
  "You're right in the middle—time to choose your direction as a novice.",
  "Don't settle here. You know you can do better than average, even as a novice.",
  "This is where champions decide to level up. What's your choice, novice?",
  "You're at the crossroads. Which way will you go from average?",
  "Average today, exceptional tomorrow. Keep pushing beyond the novice stage!",
]
quotes[POWERS.AVERAGE][EXPERIENCE.DEVELOPING] = [
  "You're in a developing phase, and average means consistency. Now, aim higher.",
  "Your developing efforts are yielding average results. What's one tweak?",
  "You're building habits, even if they feel average. Trust the long game.",
  "This developing stage is where you decide to elevate from average. You've got it.",
  "Average progress is still progress for a developing individual. Keep refining.",
]
quotes[POWERS.AVERAGE][EXPERIENCE.INTERMEDIATE] = [
  "You're an intermediate, and average is a signal to challenge yourself more.",
  "You know your potential is higher. Don't get stuck in the average zone.",
  "This intermediate phase is where you break free from average. You can do it.",
  "Average results for an intermediate mean there's room to grow. Seek that growth.",
  "Use this average feedback to fuel your next push. You're better than this.",
]
quotes[POWERS.AVERAGE][EXPERIENCE.COMPETENT] = [
  "A competent person might hit average days. What's next is how you respond.",
  "Your competence means you can easily move past average. Re-engage your best.",
  "Don't let an average day define your competence. You're capable of more.",
  "You're too competent to settle for average. Find that next gear.",
  "This average moment is a reminder to tap into your true competent potential.",
]
quotes[POWERS.AVERAGE][EXPERIENCE.PROFICIENT] = [
  "As a proficient individual, an average day is a chance to re-evaluate and optimize.",
  "Your proficiency means you can quickly bounce back from average. Don't worry.",
  "A temporary average doesn't diminish your proficiency. It's a learning moment.",
  "You're proficient enough to know that average is just a number. Your skill is real.",
  "Use your proficiency to identify why this feels average and elevate it.",
]
quotes[POWERS.AVERAGE][EXPERIENCE.ADVANCED] = [
  "Even at an advanced level, average days happen. The key is how you adapt.",
  "Your advanced understanding allows you to swiftly correct from average output.",
  "Don't let an average day derail your advanced progress. You know the way forward.",
  "An advanced practitioner learns even from average moments. Integrate the lessons.",
  "You have the advanced tools to quickly move beyond average. Re-focus.",
]
quotes[POWERS.AVERAGE][EXPERIENCE.EXPERT] = [
  "Even an expert can have average days. What defines you is your comeback.",
  "Your expertise means you can swiftly diagnose and improve from average.",
  "This average moment is a brief pause for an expert. You know how to excel.",
  "An expert understands that average is just feedback. Use it to grow.",
  "You are an expert at elevating performance, even after an average spell.",
]
quotes[POWERS.AVERAGE][EXPERIENCE.MASTER] = [
  "Even masters face days of average output. Your resilience is what truly matters.",
  "Your mastery isn't about constant perfection, but overcoming even average moments.",
  "A true master learns from everything, even an average day. What's the lesson?",
  "This average moment won't diminish your mastery. It's a reminder of humanity.",
  "You've mastered the art of self-correction, even through periods of average progress.",
]

// --- WEAK POWER LEVEL QUOTES ---
quotes[POWERS.WEAK][EXPERIENCE.STARTING] = [
  "You’re here, and you're feeling weak, but you haven't given up. That's a start.",
  "It’s tough right now, but showing up is your first act of strength.",
  "The struggle is real, and it feels weak, but you are not defined by this moment.",
  "Even from a weak beginning, every small step builds momentum. Just one step.",
  "You’re facing this head-on, even at your weakest. That's true courage to start.",
]
quotes[POWERS.WEAK][EXPERIENCE.EARLY] = [
  "You're in the early stages, and some days will feel weak. Keep pushing through.",
  "Every small win is a step forward, even when you feel weak. Don't stop now.",
  "Struggles are real, but so is your potential to overcome them, even from a weak spot.",
  "It's okay to feel weak in the early days. It's part of the growth process.",
  "Your early efforts, however weak they feel, are building foundational resilience.",
]
quotes[POWERS.WEAK][EXPERIENCE.BEGINNER] = [
  "It’s tough, but you’re still in the fight, beginner. Don’t give up!",
  "Every small win is a step forward. Keep going, even when you feel weak.",
  "Struggles are real, but so is your potential to overcome them as a beginner.",
  "You're learning through this weakness. That's powerful progress for a beginner.",
  "Don't let this weak moment define your entire beginner journey. You've got more.",
]
quotes[POWERS.WEAK][EXPERIENCE.NOVICE] = [
  "You slipped—but you didn’t stop, novice. That’s what matters when you feel weak.",
  "You’re in the hard part. The win is getting up again, even if you feel weak.",
  "Impulse won this time. Don’t let it write the ending for your novice self.",
  "Next time, pause one second longer. That second is power, even if you feel weak.",
  "Even one good decision today makes a difference tomorrow, especially when weak.",
]
quotes[POWERS.WEAK][EXPERIENCE.DEVELOPING] = [
  "This is when growth happens. In the middle of the fight, even if you feel weak.",
  "You've felt this pull before. You're strong enough to pause, even when developing weak habits.",
  "Bad days happen—quitting doesn’t have to. You're developing strength from weakness.",
  "You're in the storm, but storms pass. Stay standing, even if you feel weak.",
  "Slip, stand, repeat. That’s how strength is built, even from a weak developing stage.",
]
quotes[POWERS.WEAK][EXPERIENCE.INTERMEDIATE] = [
  "You're at an intermediate level, but today feels weak. Remember your past victories.",
  "Your experience means you know how to push through weak moments. Re-engage.",
  "Don't let this weak spell define your intermediate journey. You're capable of more.",
  "Even when you feel weak, your intermediate self knows the path to recovery.",
  "This weak moment is a test. Use your intermediate skills to find a way forward.",
]
quotes[POWERS.WEAK][EXPERIENCE.COMPETENT] = [
  "Even a competent individual can experience weak moments. Your resilience matters.",
  "Your competence means you can find strength even when you feel weak. Trust your ability.",
  "Don't let a weak day diminish your competence. You're still capable of great things.",
  "You're competent enough to know that weak moments are temporary. Overcome them.",
  "A competent fighter finds a way to win, even when feeling weak. Keep fighting.",
]
quotes[POWERS.WEAK][EXPERIENCE.PROFICIENT] = [
  "As a proficient individual, a weak day is a chance to identify vulnerabilities.",
  "Your proficiency means you can mitigate the impact of weak moments. Apply your skill.",
  "A temporary weak period doesn't erase your proficiency. Re-center and continue.",
  "You're proficient enough to understand the ebb and flow of strength. Recover.",
  "Leverage your proficiency to find a way to navigate this weak phase successfully.",
]
quotes[POWERS.WEAK][EXPERIENCE.ADVANCED] = [
  "Even at an advanced stage, some days are weak. Acknowledge and learn.",
  "Your advanced understanding allows you to pinpoint the cause of this weakness.",
  "Don't let a weak day derail your advanced progress. You have the tools to recover.",
  "An advanced practitioner learns even from weak moments. Integrate those lessons.",
  "You have the advanced tools to move beyond this weak spell. Use them wisely.",
]
quotes[POWERS.WEAK][EXPERIENCE.EXPERT] = [
  "Even an expert can have weak days. What defines you is your ability to adapt.",
  "Your expertise means you can swiftly diagnose and improve from weakness.",
  "This weak moment is a test for an expert. You know how to regain strength.",
  "An expert understands that weakness is just feedback. Use it to grow stronger.",
  "You are an expert at overcoming challenges, even when you feel weak.",
]
quotes[POWERS.WEAK][EXPERIENCE.MASTER] = [
  "Even masters face days of weakness. Your resilience is what truly defines you.",
  "Your mastery isn't about never feeling weak, but about rising every time.",
  "A true master finds strength even when they feel weak. It's about enduring.",
  "This weak moment won't diminish your mastery. It's a testament to your endurance.",
  "You've mastered the art of self-preservation and recovery, even through weakness.",
]

// --- FRAGILE POWER LEVEL QUOTES ---
quotes[POWERS.FRAGILE][EXPERIENCE.STARTING] = [
  "You’re right at the edge, and it feels fragile. Breathe. You can still begin.",
  "When you're fragile, one decision can define the day. Make it count, even at the start.",
  "This is what change looks like before it feels strong. You're starting fragile, but determined.",
  "No perfection. Just one better choice than yesterday. That's how you start from fragile.",
  "You're starting from a fragile place, but your courage is rock solid.",
]
quotes[POWERS.FRAGILE][EXPERIENCE.EARLY] = [
  "Progress is fragile in the early stages, but hope is strong. Try again.",
  "Even one win is a victory in these fragile, early days. Keep reaching for it.",
  "You’re not alone—every effort is a step toward better days, even when fragile.",
  "This fragile phase is a test of your early commitment. You're strong enough.",
  "Small, careful steps can solidify even the most fragile early progress.",
]
quotes[POWERS.FRAGILE][EXPERIENCE.BEGINNER] = [
  "You’re right at the edge. Breathe. You can still turn this around as a beginner.",
  "When you're fragile, one decision can define the day. Make it count, beginner.",
  "The feeling will pass. Your decision will stay. Especially as a fragile beginner.",
  "This is what change looks like before it feels strong, for a fragile beginner.",
  "No perfection. Just one better choice than yesterday, for a fragile beginner.",
]
quotes[POWERS.FRAGILE][EXPERIENCE.NOVICE] = [
  "You’ve got 10 seconds to win this moment. That’s it, for your fragile novice self.",
  "You're fighting something bigger than motivation—you're growing resolve, even when fragile.",
  "This is fragile, not final. Try again, novice.",
  "Even in doubt, choosing to try is a win for a fragile novice.",
  "You’re not weak. You’re becoming stronger—one shaky step at a time, novice.",
]
quotes[POWERS.FRAGILE][EXPERIENCE.DEVELOPING] = [
  "Your progress is developing, but still fragile. Protect it with conscious choices.",
  "This is a delicate phase of development. Be gentle with yourself, but persistent.",
  "Even small wins help solidify developing, fragile habits. Keep nurturing them.",
  "You're learning to navigate fragility. This development will make you unbreakable.",
  "Your resilience is being forged in these fragile, developing moments.",
]
quotes[POWERS.FRAGILE][EXPERIENCE.INTERMEDIATE] = [
  "Your progress feels fragile for an intermediate, but your experience is strong.",
  "You've handled fragile moments before. Use your intermediate skills to steady yourself.",
  "Don't let a fragile moment undo your intermediate progress. Recommit.",
  "An intermediate knows that even fragile efforts can lead to recovery. Trust the process.",
  "This fragile spell is a test. Your intermediate wisdom can guide you through.",
]
quotes[POWERS.FRAGILE][EXPERIENCE.COMPETENT] = [
  "Even a competent individual can face fragile moments. Your response defines you.",
  "Your competence means you can bring stability to a fragile situation. Act wisely.",
  "Don't let a fragile day diminish your competence. You're capable of recovery.",
  "You're competent enough to know that fragile moments require extra care. Give it.",
  "A competent fighter finds a way to regain balance, even when feeling fragile.",
]
quotes[POWERS.FRAGILE][EXPERIENCE.PROFICIENT] = [
  "As a proficient individual, a fragile moment is a chance to deepen your mastery.",
  "Your proficiency means you can navigate even fragile situations with skill.",
  "A temporary fragile period doesn't erase your proficiency. It's a learning opportunity.",
  "You're proficient enough to understand the delicate balance of progress. Restore it.",
  "Leverage your proficiency to find stability in this fragile moment.",
]
quotes[POWERS.FRAGILE][EXPERIENCE.ADVANCED] = [
  "Even at an advanced stage, some days are fragile. Your awareness is key.",
  "Your advanced understanding allows you to anticipate and manage fragility.",
  "Don't let a fragile day derail your advanced progress. You have the tools.",
  "An advanced practitioner learns even from fragile moments. Integrate those insights.",
  "You have the advanced tools to move beyond this fragile spell. Apply them now.",
]
quotes[POWERS.FRAGILE][EXPERIENCE.EXPERT] = [
  "Even an expert can have fragile days. What defines you is your unwavering resolve.",
  "Your expertise means you can swiftly restore balance from fragility.",
  "This fragile moment is a unique test for an expert. You know how to strengthen.",
  "An expert understands that fragility is just feedback. Use it to fortify.",
  "You are an expert at navigating challenges, even when they feel fragile.",
]
quotes[POWERS.FRAGILE][EXPERIENCE.MASTER] = [
  "Even masters face days of fragility. Your resilience is what truly matters.",
  "Your mastery isn't about never feeling fragile, but about consistently rebuilding.",
  "A true master finds strength even when things are fragile. It's about enduring and growing.",
  "This fragile moment won't diminish your mastery. It's a testament to your depth.",
  "You've mastered the art of returning to strength, even after a fragile period.",
]

// --- TINY POWER LEVEL QUOTES ---
quotes[POWERS.TINY][EXPERIENCE.STARTING] = [
  "You’re here. That’s more than zero. That’s everything to start.",
  "Don’t aim for perfect. Just pause. Just breathe. Even tiny efforts count at the start.",
  "Even reading this instead of giving in is a tiny win for a beginner.",
  "You can always restart. Even now. That's a tiny powerful choice.",
  "Your future self is watching. Take one tiny step toward them, right now.",
]
quotes[POWERS.TINY][EXPERIENCE.EARLY] = [
  "Tiny wins matter. Celebrate every single one in these early days.",
  "It’s hard now, but persistence will pay off, even in tiny increments.",
  "Don’t lose hope—one tiny win can change everything, especially early on.",
  "These early, tiny efforts are building your new path. Don't underestimate them.",
  "Every tiny step forward in these early stages adds up to significant progress.",
]
quotes[POWERS.TINY][EXPERIENCE.BEGINNER] = [
  "You beat the urge once today. That’s already a win for a tiny beginner.",
  "You didn’t give in right away. That means something, for your tiny efforts.",
  "Next time, just pause for 5 seconds longer. That’s growth, even for a tiny beginner.",
  "The smallest resistance to temptation is a seed. Water it, beginner.",
  "A deep breath can rewrite your day. Take one. This tiny act is powerful.",
]
quotes[POWERS.TINY][EXPERIENCE.NOVICE] = [
  "This doesn’t look like victory—but it is, for your tiny novice steps.",
  "These small decisions are changing you, novice. Every tiny win counts.",
  "You paused. That’s how winning starts for a novice, with tiny acts of self-control.",
  "Even one slow breath is a step in the right direction for your tiny efforts.",
  "You're not failing—you're training your instincts with every tiny resistance, novice.",
]
quotes[POWERS.TINY][EXPERIENCE.DEVELOPING] = [
  "You're developing the power of tiny habits. Keep going, they add up.",
  "Even when progress seems tiny, your commitment is truly developing.",
  "Nurture those tiny wins; they are the foundation of your developing strength.",
  "This developing stage is about appreciating the power of the tiny. You're doing great.",
  "Your developing self understands that consistency, even in tiny steps, is key.",
]
quotes[POWERS.TINY][EXPERIENCE.INTERMEDIATE] = [
  "You're at an intermediate level, but today feels tiny. Reconnect with your strength.",
  "Your experience means you know the power of tiny consistent efforts. Re-engage.",
  "Don't let a tiny day diminish your intermediate progress. Find one small win.",
  "Even when it feels tiny, your intermediate self knows how to build momentum.",
  "This tiny moment is a reminder that every action contributes to your intermediate journey.",
]
quotes[POWERS.TINY][EXPERIENCE.COMPETENT] = [
  "Even a competent individual has tiny days. What matters is the consistent choice.",
  "Your competence means you can still make impactful, tiny decisions.",
  "Don't let a tiny setback overshadow your competence. You know how to rebuild.",
  "You're competent enough to know that every tiny effort prevents regression.",
  "A competent fighter finds a way to win, even with tiny, incremental gains.",
]
quotes[POWERS.TINY][EXPERIENCE.PROFICIENT] = [
  "As a proficient individual, even a tiny effort means you're still engaged.",
  "Your proficiency allows you to find value in tiny, consistent actions.",
  "A temporary tiny period doesn't erase your proficiency. It's a moment to refocus.",
  "You're proficient enough to understand the power of consistent, tiny efforts.",
  "Leverage your proficiency to find even a tiny way forward today.",
]
quotes[POWERS.TINY][EXPERIENCE.ADVANCED] = [
  "Even at an advanced stage, some days are tiny. Acknowledge the effort.",
  "Your advanced understanding allows you to appreciate the power of tiny habits.",
  "Don't let a tiny day derail your advanced progress. You're too far along.",
  "An advanced practitioner learns even from tiny moments. They all contribute.",
  "You have the advanced tools to make even tiny efforts count. Use them.",
]
quotes[POWERS.TINY][EXPERIENCE.EXPERT] = [
  "Even an expert can have tiny days. What defines you is your consistent return.",
  "Your expertise means you can find significance even in tiny actions.",
  "This tiny moment is a test for an expert. You know how to make every bit count.",
  "An expert understands that tiny efforts compound. Keep building.",
  "You are an expert at navigating challenges, even when progress feels tiny.",
]
quotes[POWERS.TINY][EXPERIENCE.MASTER] = [
  "Even masters face days of tiny output. Your discipline is what truly matters.",
  "Your mastery isn't about giant leaps, but about consistent, tiny steps over time.",
  "A true master finds power even when effort feels tiny. It's about presence and choice.",
  "This tiny moment won't diminish your mastery. It's a testament to your foundation.",
  "You've mastered the art of persistence, even through periods of tiny progress.",
]

// --- MINIMAL POWER LEVEL QUOTES ---
quotes[POWERS.MINIMAL][EXPERIENCE.STARTING] = [
  "You’re here. That’s more than zero. That’s everything to start.",
  "Don’t aim for perfect. Just pause. Just breathe. Even minimal efforts count at the start.",
  "Even reading this instead of giving in is a minimal win for a beginner.",
  "You can always restart. Even now. That's a minimal powerful choice.",
  "Your future self is watching. Take one minimal step toward them, right now.",
]
quotes[POWERS.MINIMAL][EXPERIENCE.EARLY] = [
  "Even the smallest victory is a start in these early stages. Keep trying.",
  "You’re facing a tough challenge, but don’t give up in these early, minimal days.",
  "The first win is the hardest—believe in yourself, even with minimal effort early on.",
  "Your early efforts, however minimal, are building resilience. Keep going.",
  "Don't dismiss this minimal beginning. It's a genuine step forward.",
]
quotes[POWERS.MINIMAL][EXPERIENCE.BEGINNER] = [
  "You’re here, beginner. That’s more than zero. That’s everything for minimal progress.",
  "Don’t aim for perfect. Just pause. Just breathe. Even minimal is a win for beginners.",
  "Even reading this instead of giving in is a minimal win for a beginner.",
  "You can always restart. Even now. That's a minimal powerful choice for a beginner.",
  "Your future self is watching. Take one minimal step toward them, right now, beginner.",
]
quotes[POWERS.MINIMAL][EXPERIENCE.NOVICE] = [
  "Even the smallest victory is a start for a novice. Keep trying.",
  "You’re facing a tough challenge, novice, but don’t give up. Minimal effort still counts.",
  "The first win is the hardest—believe in yourself, novice, even if it's minimal.",
  "This is training your instincts, even with minimal resistance, novice.",
  "You're not failing—you're learning to make minimal improvements, novice.",
]
quotes[POWERS.MINIMAL][EXPERIENCE.DEVELOPING] = [
  "You're developing, even if the progress feels minimal. It's happening.",
  "Small changes, even minimal ones, are the hallmark of developing strength.",
  "Keep nurturing those new habits, even when the gains seem minimal.",
  "You're building resilience through these developing, minimal efforts.",
  "The capacity to make even minimal progress during development is immense.",
]
quotes[POWERS.MINIMAL][EXPERIENCE.INTERMEDIATE] = [
  "It might feel like minimal progress for an intermediate, but you're still choosing to fight.",
  "You've been here before. Even a minimal re-engagement at this stage is a comeback.",
  "Don't lose hope. Your intermediate self knows how to turn minimal into more.",
  "This struggle might have knocked you back, but even minimal effort shows your intermediate power.",
  "Your experience means even a minimal step can quickly lead to recovery.",
]
quotes[POWERS.MINIMAL][EXPERIENCE.COMPETENT] = [
  "Even a competent person can have a minimal day. What matters is you're still here.",
  "Your competence means you know how to turn minimal effort into a stepping stone.",
  "Don't let a minimal setback define your competent journey. Keep pushing.",
  "You're competent enough to know these minimal moments are part of the process.",
  "A competent fighter never quits, even with minimal gains.",
]
quotes[POWERS.MINIMAL][EXPERIENCE.PROFICIENT] = [
  "As a proficient individual, even minimal output is still a win over doing nothing.",
  "Your proficiency means you can turn even minimal energy into meaningful action.",
  "A temporary dip to minimal doesn't erase your proficiency. Recommit now.",
  "You're proficient enough to know that minimal effort can still prevent a collapse.",
  "Leverage your proficiency to find even a minimal way forward today.",
]
quotes[POWERS.MINIMAL][EXPERIENCE.ADVANCED] = [
  "Even at an advanced stage, some days are minimal. Your commitment shines through.",
  "Your advanced understanding helps you navigate even these minimal periods.",
  "Don't let a day of minimal effort derail your advanced progress. Stay the course.",
  "An advanced practitioner finds value even in minimal, foundational acts.",
  "You have the advanced tools to overcome this minimal moment. Use them.",
]
quotes[POWERS.MINIMAL][EXPERIENCE.EXPERT] = [
  "Even an expert can have minimal days. What's crucial is how you respond.",
  "Your expertise allows you to find power even in minimal actions. Trust yourself.",
  "This minimal moment is a test, not a failure, for an expert like you.",
  "An expert understands that consistency, even minimal, is key. Keep going.",
  "You are an expert at getting back on track, even from a minimal starting point.",
]
quotes[POWERS.MINIMAL][EXPERIENCE.MASTER] = [
  "Even masters face days of minimal output. Your resilience defines you.",
  "Your mastery isn't about perfection, but about overcoming even minimal moments.",
  "A true master finds strength even when effort feels minimal. It's about presence.",
  "This minimal moment won't diminish your mastery. It's just a pause.",
  "You've mastered the art of persistence, even through periods of minimal progress.",
]

// collapes has the same messages
for (let exp in EXPERIENCE) {
  quotes[POWERS.COLLAPSED][EXPERIENCE[exp]] = [
    "You hit the bottom. That means the only way left is up.",
    "It’s bad right now. Still, you're here. That’s a spark of your resilience.",
    "Start again. Even after zero, you can still choose your next move.",
    "Everything collapsed—but you didn’t vanish. That matters.",
    "You’re not broken. You’re just restarting from truth, with all your experience.",
    "You opened this app. That alone means you're not done.",
    "Zero isn’t the end—it’s the foundation of a comeback. You've done hard things before.",
    "You already know what giving up feels like. Try something else.",
    "Collapse isn’t defeat unless you stop rising. Use your past strength to begin again.",
    "Breathe. Stand. Begin again, one moment at a time. Your journey isn't over.",
  ]
}

function getExperieceTitle(number) {
  let keys = Object.keys(EXPERIENCE)
  for (let key of keys) {
    if (EXPERIENCE[key] === number) return key
  }
}
function getPowerTitle(number) {
  let keys = Object.keys(POWERS)
  for (let key of keys) {
    if (POWERS[key] === number) return key
  }
}

export { quotes, getExperieceTitle, getPowerTitle }
