import { useState } from 'react';

const ALL_FACTS = [
  // ── BRAIN & DEVELOPMENT ──────────────────────────────────────────────────
  { id: 1, category: "Brain & Development", teaser: "How fast does a baby's brain grow?", detail: "A baby's brain doubles in size during their first year of life! By age three, it will be 80% of its adult size. This is why sleep and nutrition are so critical.", color: "#E6E1FA" },
  { id: 2, category: "Brain & Development", teaser: "How many neurons does a newborn have?", detail: "A newborn is born with roughly 100 billion neurons — about the same number as an adult. The difference is in the connections: babies spend years wiring them together.", color: "#E6E1FA" },
  { id: 3, category: "Brain & Development", teaser: "How many neural connections form every second?", detail: "In the first few years of life, a child's brain forms more than 1 million new neural connections every single second. No other period of life comes close.", color: "#E6E1FA" },
  { id: 4, category: "Brain & Development", teaser: "When do babies first recognize faces?", detail: "Babies can distinguish their mother's face from a stranger's within hours of birth. By 3 months they recognize dozens of familiar faces and prefer symmetrical ones.", color: "#E6E1FA" },
  { id: 5, category: "Brain & Development", teaser: "Can babies tell apart languages they've never heard?", detail: "Yes! Newborns can distinguish the sounds of any human language — a skill that gradually narrows to just their native language(s) by around 10–12 months.", color: "#E6E1FA" },
  { id: 6, category: "Brain & Development", teaser: "Do babies dream?", detail: "Babies spend about 50% of their sleep in REM (the dreaming stage), compared to 20% for adults. Scientists believe this intense REM sleep is critical for brain development.", color: "#E6E1FA" },
  { id: 7, category: "Brain & Development", teaser: "When does a child's prefrontal cortex finish developing?", detail: "Not until around age 25! The prefrontal cortex — responsible for decision-making, impulse control and planning — is the very last part of the brain to fully mature.", color: "#E6E1FA" },
  { id: 8, category: "Brain & Development", teaser: "Why do babies love peek-a-boo?", detail: "Because they're genuinely surprised every time. Until about 8 months, babies lack 'object permanence' — the understanding that things exist even when hidden.", color: "#E6E1FA" },
  { id: 9, category: "Brain & Development", teaser: "Are babies natural mathematicians?", detail: "Yes! Studies show babies as young as 5 months understand basic addition and subtraction. They look longer at 'wrong' answers, showing they expected the correct one.", color: "#E6E1FA" },
  { id: 10, category: "Brain & Development", teaser: "When do babies start understanding fairness?", detail: "By 15 months, babies show signs of expecting equal distribution of resources between people — an early moral instinct that emerges long before language does.", color: "#E6E1FA" },
  { id: 11, category: "Brain & Development", teaser: "Can babies feel empathy?", detail: "Research shows babies as young as 10 months will try to comfort a crying person. By 14 months, they will spontaneously help a stranger who can't reach something.", color: "#E6E1FA" },
  { id: 12, category: "Brain & Development", teaser: "Why do toddlers have no filter?", detail: "The prefrontal cortex, which controls impulse inhibition and social filtering, is barely functional in toddlers. When a 3-year-old says something embarrassing, their brain literally can't stop it.", color: "#E6E1FA" },
  { id: 13, category: "Brain & Development", teaser: "Do babies have a sense of humor?", detail: "Yes — babies begin laughing at around 3–4 months, and by 6 months they develop a genuine sense of incongruity. They find unexpected, silly events funny — just like adults.", color: "#E6E1FA" },
  { id: 14, category: "Brain & Development", teaser: "How much do children's brains use?", detail: "Children's brains consume an enormous 50% of the body's total glucose — compared to 20% for adults. Growing a brain is metabolically expensive work.", color: "#E6E1FA" },
  { id: 15, category: "Brain & Development", teaser: "Can babies remember before they can talk?", detail: "Yes. Infants form implicit memories (skills, associations) from birth. However, explicit autobiographical memory — the kind you can consciously recall — doesn't solidify until around age 3.", color: "#E6E1FA" },

  // ── BODY & BIOLOGY ───────────────────────────────────────────────────────
  { id: 16, category: "Body & Biology", teaser: "How many bones are babies born with?", detail: "Babies are born with about 300 bones! As they grow, some of these bones fuse together. By adulthood, they will only have 206.", color: "#E3EDE4" },
  { id: 17, category: "Body & Biology", teaser: "Why are babies so flexible?", detail: "Baby bones contain more cartilage than adult bones, and their joints are looser. This flexibility helps them fit through the birth canal and allows for rapid early growth.", color: "#E3EDE4" },
  { id: 18, category: "Body & Biology", teaser: "Do newborns actually shed tears?", detail: "Nope! Newborns cry a lot, but they don't produce actual tears until they are between 1 and 3 months old because their tear ducts are still developing.", color: "#E3EDE4" },
  { id: 19, category: "Body & Biology", teaser: "Why do babies' eyes change color?", detail: "Most babies are born with blue or grey eyes because melanin hasn't fully developed. Over the first 6–12 months, melanin production increases and reveals the true eye color.", color: "#E3EDE4" },
  { id: 20, category: "Body & Biology", teaser: "What is vernix and why is it important?", detail: "Vernix is the waxy, white coating on a newborn's skin. It acts as a moisturizer, protects from bacteria, and regulates temperature during the transition to outside life.", color: "#E3EDE4" },
  { id: 21, category: "Body & Biology", teaser: "How fast do babies' nails grow?", detail: "A baby's fingernails grow at about 0.1mm per day — faster than adult nails relative to body size. Many parents file them while the baby sleeps to avoid scratches.", color: "#E3EDE4" },
  { id: 22, category: "Body & Biology", teaser: "Why do babies have a soft spot on their head?", detail: "The fontanelle (soft spot) allows the skull to compress during birth and then expand rapidly as the brain grows. The front fontanelle typically closes between 9–18 months.", color: "#E3EDE4" },
  { id: 23, category: "Body & Biology", teaser: "How big is a newborn's stomach?", detail: "At birth, a baby's stomach is about the size of a marble — roughly 5–7ml. By day 3 it grows to the size of a ping-pong ball. This is why they feed so frequently.", color: "#E3EDE4" },
  { id: 24, category: "Body & Biology", teaser: "Why do babies have such big heads?", detail: "A newborn's head accounts for about 25% of total body length, compared to 12% in adults. The disproportionate size accommodates the rapidly growing brain.", color: "#E3EDE4" },
  { id: 25, category: "Body & Biology", teaser: "Do babies have kneecaps?", detail: "Babies are born without hard kneecaps! They have cartilage in that area instead. True bone kneecaps don't fully ossify until between ages 2 and 6.", color: "#E3EDE4" },
  { id: 26, category: "Body & Biology", teaser: "How many diapers does a baby use in a year?", detail: "The average baby uses between 2,500 and 3,000 diapers in their first year of life. That's roughly 8–10 diaper changes every single day.", color: "#E3EDE4" },
  { id: 27, category: "Body & Biology", teaser: "Why do babies breathe faster than adults?", detail: "Newborns breathe 40–60 times per minute; adults breathe 12–20 times. Babies need more oxygen per unit of body weight because their metabolisms are running so fast.", color: "#E3EDE4" },
  { id: 28, category: "Body & Biology", teaser: "Can a baby be born with teeth?", detail: "Yes! About 1 in 2,000 babies is born with 'natal teeth.' They are usually removed because they can interfere with feeding and may be a choking risk.", color: "#E3EDE4" },
  { id: 29, category: "Body & Biology", teaser: "What is lanugo?", detail: "Lanugo is the fine, downy hair that covers a fetus from about 16 weeks. Most of it sheds before birth, but premature babies are sometimes born covered in it.", color: "#E3EDE4" },
  { id: 30, category: "Body & Biology", teaser: "How do babies regulate body temperature?", detail: "Babies can't shiver to generate heat like adults can — they rely on burning 'brown fat' deposits around the neck and shoulders. This is why keeping newborns warm is so critical.", color: "#E3EDE4" },
  { id: 31, category: "Body & Biology", teaser: "Why does a baby's head smell so good?", detail: "Science has confirmed it! The scent is a cocktail of chemicals including amniotic fluid, vernix, and compounds from the sebaceous glands. It triggers a calming response in caregivers — thought to be an evolutionary bonding mechanism.", color: "#E3EDE4" },
  { id: 32, category: "Body & Biology", teaser: "How strong is a baby's grip?", detail: "The palmar grasp reflex is so strong that a newborn can support their own body weight by gripping a finger. This reflex is a remnant from our primate ancestors.", color: "#E3EDE4" },
  { id: 33, category: "Body & Biology", teaser: "When do babies develop fingerprints?", detail: "Fingerprints begin forming around week 10 of pregnancy and are fully formed by week 24. Even identical twins have different fingerprints.", color: "#E3EDE4" },

  // ── SENSES & PERCEPTION ──────────────────────────────────────────────────
  { id: 34, category: "Senses & Perception", teaser: "What is a baby's strongest sense at birth?", detail: "Smell! A newborn's sense of smell is highly developed. They can recognize their mother's unique scent within hours of being born.", color: "#FFEBE1" },
  { id: 35, category: "Senses & Perception", teaser: "How far can newborns see?", detail: "At birth, a baby's vision is quite blurry — they can only focus clearly on objects 20–30cm away. Conveniently, that is exactly the distance from the breast to the face while feeding.", color: "#FFEBE1" },
  { id: 36, category: "Senses & Perception", teaser: "Can babies hear in the womb?", detail: "Yes! By 18–20 weeks, a fetus can hear sounds from outside the womb. Research shows newborns already prefer the sound of their mother's voice and their native language.", color: "#FFEBE1" },
  { id: 37, category: "Senses & Perception", teaser: "What colors do babies see first?", detail: "At birth, babies see mostly in shades of grey. Red is the first true color they can detect, followed by yellow, green, and finally blue — which requires the most specialized cone cells.", color: "#FFEBE1" },
  { id: 38, category: "Senses & Perception", teaser: "Why do babies put everything in their mouths?", detail: "A baby's mouth has more nerve endings per square millimeter than any other part of their body. They are literally using their mouths to 'see' and learn about objects!", color: "#FFEBE1" },
  { id: 39, category: "Senses & Perception", teaser: "Can babies taste food in the womb?", detail: "Yes! Flavors from the mother's diet pass into amniotic fluid. Studies show that what a pregnant mother eats influences her baby's later food preferences.", color: "#FFEBE1" },
  { id: 40, category: "Senses & Perception", teaser: "Do babies prefer music?", detail: "Research shows newborns already prefer the melodies their mothers listened to during pregnancy. Familiar musical patterns cause measurable heart rate changes in newborns.", color: "#FFEBE1" },
  { id: 41, category: "Senses & Perception", teaser: "Why do babies track moving objects?", detail: "Babies have a strong preference for moving objects from birth — especially faces. This 'social tracking' reflex develops even before voluntary eye movement is possible.", color: "#FFEBE1" },
  { id: 42, category: "Senses & Perception", teaser: "When do babies understand pointing?", detail: "Around 9 months, babies begin following a pointed finger to look at what someone is indicating. This 'joint attention' is a huge cognitive milestone and a key predictor of language development.", color: "#FFEBE1" },
  { id: 43, category: "Senses & Perception", teaser: "Can newborns feel pain?", detail: "Absolutely yes — newborns have a fully functional pain system from birth. For many years, this was incorrectly doubted by the medical community.", color: "#FFEBE1" },
  { id: 44, category: "Senses & Perception", teaser: "Why do babies stare at faces so intently?", detail: "Faces are the most complex visual stimulus a baby encounters. They stare because they are running intensive pattern-recognition computations, learning what a human face looks like.", color: "#FFEBE1" },

  // ── SLEEP ────────────────────────────────────────────────────────────────
  { id: 45, category: "Sleep", teaser: "Why do babies smile in their sleep?", detail: "It is usually a reflex! In the first month, sleep smiles are a sign that your baby's nervous system is developing properly. They aren't actually dreaming of milk... yet.", color: "#E1EDF5" },
  { id: 46, category: "Sleep", teaser: "How much do newborns sleep?", detail: "Newborns sleep between 16–20 hours per day — but rarely more than 2–4 hours in a row. Their sleep cycles are shorter than adults (50 min vs 90 min) and have more REM.", color: "#E1EDF5" },
  { id: 47, category: "Sleep", teaser: "When do babies sleep through the night?", detail: "Most babies don't consistently sleep through the night until after 6 months, and many not until 12 months or beyond. Night waking is completely biologically normal.", color: "#E1EDF5" },
  { id: 48, category: "Sleep", teaser: "Why do babies sleep so noisily?", detail: "Babies spend 50% of sleep in active REM, during which they grunt, twitch, whimper, and make faces. This is completely normal and does NOT mean they need to be picked up.", color: "#E1EDF5" },
  { id: 49, category: "Sleep", teaser: "Can white noise help babies sleep?", detail: "Yes! White noise mimics the constant whooshing sound babies heard in the womb (which is about 85 decibels — as loud as a vacuum cleaner). It's deeply familiar and soothing.", color: "#E1EDF5" },
  { id: 50, category: "Sleep", teaser: "Do babies have sleep cycles like adults?", detail: "Babies have much shorter sleep cycles — about 45–50 minutes compared to 90 minutes in adults. This is why they often wake briefly between cycles and may need resettling.", color: "#E1EDF5" },
  { id: 51, category: "Sleep", teaser: "Why do overtired babies have trouble sleeping?", detail: "Overtired babies release cortisol and adrenaline to stay awake. These stress hormones are stimulating and make it harder, not easier, to settle. It's a vicious cycle.", color: "#E1EDF5" },
  { id: 52, category: "Sleep", teaser: "What percentage of a newborn's sleep is dreaming?", detail: "About 50%, compared to 20% for adults. Scientists believe the intense amount of REM sleep in infants is directly related to the extraordinary amount of brain development happening.", color: "#E1EDF5" },
  { id: 53, category: "Sleep", teaser: "Can babies have nightmares?", detail: "True nightmares require complex narrative memory and self-awareness, which aren't developed until around age 2–3. Distress in sleeping babies is usually a physiological reflex, not a bad dream.", color: "#E1EDF5" },
  { id: 54, category: "Sleep", teaser: "Why do babies nap so much?", detail: "Naps aren't just rest — they are active learning consolidation periods. Research shows babies perform significantly better on memory tasks after a nap than after an equivalent period awake.", color: "#E1EDF5" },

  // ── LANGUAGE & COMMUNICATION ─────────────────────────────────────────────
  { id: 55, category: "Language", teaser: "When does a baby start learning language?", detail: "Before birth! Fetuses begin processing speech sounds in the third trimester. At birth, a baby already has a preference for their mother's language over foreign languages.", color: "#FEF3DC" },
  { id: 56, category: "Language", teaser: "How many words does a typical 2-year-old know?", detail: "Most 2-year-olds have a vocabulary of around 50–200 words and understand many more. By age 3, vocabulary often explodes to 1,000+ words.", color: "#FEF3DC" },
  { id: 57, category: "Language", teaser: "What is 'motherese' and why does it work?", detail: "Motherese (or child-directed speech) is the high-pitched, melodic, slow speech adults instinctively use with babies. Research shows it's optimized for language learning — it highlights word boundaries and emotional content.", color: "#FEF3DC" },
  { id: 58, category: "Language", teaser: "When do babies understand their own name?", detail: "Most babies begin to recognize and respond to their own name by around 4–7 months. It's often one of the very first words they understand.", color: "#FEF3DC" },
  { id: 59, category: "Language", teaser: "What is the babbling stage?", detail: "Between 4–6 months, babies begin babbling — producing repetitive consonant-vowel sounds like 'ba-ba' or 'da-da.' This is their way of practicing the motor movements of speech.", color: "#FEF3DC" },
  { id: 60, category: "Language", teaser: "Can babies learn two languages at once?", detail: "Absolutely! Bilingual babies are not confused by two languages — they track them separately from very early on. Bilingualism actually enhances executive function and cognitive flexibility.", color: "#FEF3DC" },
  { id: 61, category: "Language", teaser: "What is the 'word spurt'?", detail: "Around 18 months, many children experience a sudden explosion in vocabulary — learning multiple new words per day. Scientists believe a critical neural threshold has been crossed.", color: "#FEF3DC" },
  { id: 62, category: "Language", teaser: "Do babies understand more than they can say?", detail: "Far more. 'Receptive vocabulary' (words understood) consistently outpaces 'expressive vocabulary' (words spoken) by a ratio of roughly 3:1 throughout early childhood.", color: "#FEF3DC" },
  { id: 63, category: "Language", teaser: "Why do toddlers repeat things so obsessively?", detail: "Repetition is how children build strong neural pathways. When a toddler demands the same book 15 times in a row, they are literally deepening the grooves of that memory.", color: "#FEF3DC" },
  { id: 64, category: "Language", teaser: "What is 'over-extension' in toddler speech?", detail: "This is when toddlers apply a word too broadly — calling all men 'daddy' or all four-legged animals 'dog.' It reveals logical thinking: they've identified a category and are testing its boundaries.", color: "#FEF3DC" },
  { id: 65, category: "Language", teaser: "Can reading to babies really make a difference?", detail: "Yes. Children who are read to regularly from infancy show measurably larger vocabularies, better school readiness, and stronger reading skills years later. Every single book counts.", color: "#FEF3DC" },
  { id: 66, category: "Language", teaser: "When do children start telling jokes?", detail: "Basic joke structure (incongruity + resolution) emerges around ages 3–4. Children this age love jokes where something is intentionally 'wrong,' like calling a shoe a hat.", color: "#FEF3DC" },

  // ── EMOTIONS & SOCIAL ────────────────────────────────────────────────────
  { id: 67, category: "Emotions & Social", teaser: "When do babies show stranger anxiety?", detail: "Stranger anxiety typically appears around 6–8 months — right when object permanence kicks in. Babies now understand that familiar people exist, and that unfamiliar people are 'different.'", color: "#FFE8F0" },
  { id: 68, category: "Emotions & Social", teaser: "What is 'social referencing'?", detail: "Around 8–10 months, babies begin to look at a caregiver's face to interpret ambiguous situations. If you look worried at something, they will be scared of it. If you smile, they will approach.", color: "#FFE8F0" },
  { id: 69, category: "Emotions & Social", teaser: "Do babies feel jealousy?", detail: "Research published in Developmental Psychology found that babies as young as 6 months show jealousy — they cry and seek attention when they see their mother interact warmly with another baby.", color: "#FFE8F0" },
  { id: 70, category: "Emotions & Social", teaser: "When does separation anxiety peak?", detail: "Separation anxiety typically peaks around 14–18 months and again around age 2.5. It reflects a healthy attachment bond — the child values the parent enough to protest their absence.", color: "#FFE8F0" },
  { id: 71, category: "Emotions & Social", teaser: "Do babies prefer happy faces?", detail: "By 3 months, babies look longer at happy faces than at neutral or angry ones. They appear to be drawn to positive emotional signals — a bias that persists throughout life.", color: "#FFE8F0" },
  { id: 72, category: "Emotions & Social", teaser: "What is 'parallel play'?", detail: "Between ages 2–3, children often play alongside other children without interacting much. This 'parallel play' is completely normal and is actually an important social developmental stage.", color: "#FFE8F0" },
  { id: 73, category: "Emotions & Social", teaser: "When do children start lying?", detail: "Around age 2–3 — and it's a sign of intelligence! Effective lying requires theory of mind (understanding that others have different knowledge) and executive function. It's cognitively demanding.", color: "#FFE8F0" },
  { id: 74, category: "Emotions & Social", teaser: "Do babies understand the concept of 'mine'?", detail: "A sense of ownership and 'mine' emerges strongly around 18–24 months. It precedes sharing, which is why toddlers are notoriously possessive — sharing requires suppressing a powerful instinct.", color: "#FFE8F0" },
  { id: 75, category: "Emotions & Social", teaser: "Why do toddlers have tantrums?", detail: "Tantrums happen when big feelings (anger, frustration, disappointment) overwhelm a brain that hasn't yet developed the wiring to regulate them. It's not manipulation — the child is genuinely overwhelmed.", color: "#FFE8F0" },
  { id: 76, category: "Emotions & Social", teaser: "When do children start to show guilt?", detail: "True guilt (feeling bad about an action's effect on others) appears around age 3–4 when theory of mind develops. Before this, children may look upset — but that's usually about getting caught.", color: "#FFE8F0" },
  { id: 77, category: "Emotions & Social", teaser: "Can babies sense your emotions?", detail: "Yes. Research shows that babies' cortisol levels rise in response to a parent's stressed voice or body language, even when the parent is trying to hide it. Babies are exquisitely attuned.", color: "#FFE8F0" },

  // ── PLAY & LEARNING ──────────────────────────────────────────────────────
  { id: 78, category: "Play & Learning", teaser: "Why is play 'the work of childhood'?", detail: "Play is the primary mechanism through which children learn social rules, develop language, build motor skills, process emotions, and understand cause and effect. It isn't a break from learning — it IS the learning.", color: "#E8F4E8" },
  { id: 79, category: "Play & Learning", teaser: "When does pretend play begin?", detail: "Pretend play (making a block 'food' or a stick a 'sword') typically begins around 18 months and explodes between ages 2–4. It requires sophisticated mental representation skills.", color: "#E8F4E8" },
  { id: 80, category: "Play & Learning", teaser: "Why do children love messy play?", detail: "Messy play with textures like sand, mud, and water activates multiple senses simultaneously. This multisensory input creates richer and more durable memories and neural pathways.", color: "#E8F4E8" },
  { id: 81, category: "Play & Learning", teaser: "Do children learn better through play or instruction?", detail: "Both — but differently. Guided play produces better learning outcomes than free play alone, but children who are 'directly instructed' on one toy function explore it less and discover fewer of its other properties.", color: "#E8F4E8" },
  { id: 82, category: "Play & Learning", teaser: "Why do children love building and knocking things down?", detail: "Constructive play builds understanding of physics, causality, spatial reasoning, and engineering concepts. The destruction part is equally important — it tests predictions about how structures behave.", color: "#E8F4E8" },
  { id: 83, category: "Play & Learning", teaser: "When do children start drawing recognizable figures?", detail: "Around age 3–4, children begin drawing 'tadpole figures' — a circle with lines for limbs. They typically add torsos by age 5. Children's drawings reliably reflect cognitive, not artistic, development.", color: "#E8F4E8" },
  { id: 84, category: "Play & Learning", teaser: "Why do kids ask 'why' so much?", detail: "Between ages 2–5, children enter a 'why' phase driven by genuine epistemic curiosity. Studies show children ask about 40,000 questions between ages 2 and 5. They are building causal models of the world.", color: "#E8F4E8" },
  { id: 85, category: "Play & Learning", teaser: "What do children learn from board games?", detail: "Board games teach turn-taking, rule-following, winning gracefully, losing gracefully, counting, probability concepts, social negotiation, and emotional regulation — a remarkably complete educational package.", color: "#E8F4E8" },
  { id: 86, category: "Play & Learning", teaser: "Why is outdoor play so important?", detail: "Outdoor play is linked to reduced anxiety, better attention span, improved vitamin D levels, enhanced gross motor skills, and reduced myopia risk. Some researchers call nature a 'neurodevelopmental nutrient.'", color: "#E8F4E8" },
  { id: 87, category: "Play & Learning", teaser: "When do children understand rules of games?", detail: "Children begin to understand and follow simple game rules around age 3–4, but genuinely internalize rules (applying them fairly, even when it's disadvantageous) around age 5–7.", color: "#E8F4E8" },

  // ── FOOD & NUTRITION ─────────────────────────────────────────────────────
  { id: 88, category: "Food & Nutrition", teaser: "Why are babies picky eaters?", detail: "Evolutionary biologists think picky eating in toddlers is a protective mechanism. The age of peak picky eating (18 months–3 years) coincides with when children become mobile enough to find food independently — and potentially toxic plants.", color: "#FFF3E0" },
  { id: 89, category: "Food & Nutrition", teaser: "How many times does a new food need to be offered?", detail: "Research suggests a child may need to be exposed to a new food 10–15 times before accepting it. Trying it once or twice and concluding 'they don't like it' is one of the most common feeding mistakes.", color: "#FFF3E0" },
  { id: 90, category: "Food & Nutrition", teaser: "Why do toddlers refuse foods they loved last week?", detail: "'Food jags' and sudden food rejection are completely normal between ages 2–6. They're driven by changes in sensory sensitivity, autonomy drives, and genuine neurological development — not stubbornness.", color: "#FFF3E0" },
  { id: 91, category: "Food & Nutrition", teaser: "What does breast milk taste like?", detail: "It changes! Breast milk takes on flavors from the mother's diet. Garlic, vanilla, mint, and spices all pass into milk. This early flavor exposure is thought to reduce picky eating later.", color: "#FFF3E0" },
  { id: 92, category: "Food & Nutrition", teaser: "Why do babies need so much fat in their diet?", detail: "Fat provides 50% of the calories in breast milk because babies' brains are about 60% fat. Dietary fat is literally the building material for neural development.", color: "#FFF3E0" },
  { id: 93, category: "Food & Nutrition", teaser: "When do babies start needing solid food?", detail: "Around 6 months, breast milk alone can no longer meet a baby's iron needs. The WHO and most pediatric bodies recommend starting solids at 6 months, not earlier.", color: "#FFF3E0" },
  { id: 94, category: "Food & Nutrition", teaser: "Can babies taste sweetness before birth?", detail: "Yes! Fetuses show swallowing more amniotic fluid when it contains a sweet flavor and less when it contains a bitter one. A preference for sweetness is literally innate.", color: "#FFF3E0" },
  { id: 95, category: "Food & Nutrition", teaser: "Why do babies love carbohydrates?", detail: "Carbs provide fast glucose, which is jet fuel for the developing brain. Children's taste preferences are biologically tuned toward calorie-dense foods during the critical growth period.", color: "#FFF3E0" },
  { id: 96, category: "Food & Nutrition", teaser: "What is 'division of responsibility' in feeding?", detail: "The most evidence-backed approach to feeding children: the parent decides what food is offered, when, and where. The child decides whether to eat and how much. Pressure and coercion consistently worsen outcomes.", color: "#FFF3E0" },
  { id: 97, category: "Food & Nutrition", teaser: "Why does food presentation matter to kids?", detail: "For children, the appearance of food is a primary source of information about whether it is safe to eat. Colorful, 'wrong-looking' or mixed foods trigger more suspicion. Simple presentation often helps.", color: "#FFF3E0" },

  // ── MILESTONES ───────────────────────────────────────────────────────────
  { id: 98, category: "Milestones", teaser: "What is the average age for first steps?", detail: "The typical range is 9–15 months, with the average around 12 months. However, some perfectly healthy children don't walk independently until 18 months.", color: "#EDE8F5" },
  { id: 99, category: "Milestones", teaser: "When do babies say their first word?", detail: "Most babies say their first recognizable word between 10–14 months. Words before this (like 'mama' at 6 months) are typically babbling rather than intentional naming.", color: "#EDE8F5" },
  { id: 100, category: "Milestones", teaser: "What is the 'pincer grasp' and why does it matter?", detail: "The pincer grasp — using thumb and index finger to pick up small objects — typically develops around 9–12 months. It's a critical milestone for feeding independence, writing, and fine motor development.", color: "#EDE8F5" },
  { id: 101, category: "Milestones", teaser: "When do babies first roll over?", detail: "Tummy to back rolling typically appears first at around 2–4 months; back to tummy rolling follows at 4–6 months. This milestone requires significant neck and core muscle development.", color: "#EDE8F5" },
  { id: 102, category: "Milestones", teaser: "When does a baby's first social smile appear?", detail: "The first true social smile (in response to a face, not just gas!) typically appears between 6–8 weeks. It's one of the most emotionally significant moments for new parents.", color: "#EDE8F5" },
  { id: 103, category: "Milestones", teaser: "When do children typically start reading?", detail: "Most children learn to read between ages 5–7. However, the underlying phonological awareness skills that make reading possible develop from age 2 onwards through rhymes, songs, and stories.", color: "#EDE8F5" },
  { id: 104, category: "Milestones", teaser: "What is the 'object permanence' milestone?", detail: "Object permanence — understanding that things continue to exist when out of sight — develops around 4–7 months. Before this, if you hide a toy, a baby genuinely believes it's gone.", color: "#EDE8F5" },
  { id: 105, category: "Milestones", teaser: "When do children understand time?", detail: "A true understanding of past, present, and future doesn't develop until around age 4–5. Before this, 'yesterday,' 'tomorrow,' and 'last year' are largely interchangeable in a toddler's mind.", color: "#EDE8F5" },
  { id: 106, category: "Milestones", teaser: "When do children start to draw circles?", detail: "Drawing a closed circle is a surprisingly complex motor milestone that typically develops around age 2.5–3. It requires coordinated bimanual hand control and spatial planning.", color: "#EDE8F5" },
  { id: 107, category: "Milestones", teaser: "When do most children stop napping?", detail: "Daytime napping typically ends between ages 3–5, though there's huge variation. Brain development research suggests that even children who 'don't nap' benefit from a quiet rest period.", color: "#EDE8F5" },
  { id: 108, category: "Milestones", teaser: "When do children develop handedness?", detail: "Consistent hand preference usually emerges between ages 3–4, though true dominance may not be fully established until age 5–6. Trying to change a child's natural handedness is no longer recommended.", color: "#EDE8F5" },

  // ── SCIENCE & CURIOSITIES ────────────────────────────────────────────────
  { id: 109, category: "Science & Curiosities", teaser: "Are babies born with an innate sense of rhythm?", detail: "Yes! A 2009 study found that newborns just 2–3 days old show a preference for rhythmic beats and are sensitive to when a beat is skipped. A sense of rhythm appears to be hardwired.", color: "#E0F4FF" },
  { id: 110, category: "Science & Curiosities", teaser: "Can babies be bored?", detail: "Yes — and it matters. Babies who experience chronic understimulation show measurably slower cognitive and social development. Responsive caregiving and varied stimulation are essential.", color: "#E0F4FF" },
  { id: 111, category: "Science & Curiosities", teaser: "Why do children have imaginary friends?", detail: "About 65% of children have imaginary friends at some point. Far from being a concern, it's associated with higher creativity, stronger language skills, and better social perspective-taking.", color: "#E0F4FF" },
  { id: 112, category: "Science & Curiosities", teaser: "Do babies prefer looking at attractive faces?", detail: "Studies show that even 3-month-old babies spend more time looking at faces that adults rated as more attractive. The bias toward attractive faces appears to be present from very early infancy.", color: "#E0F4FF" },
  { id: 113, category: "Science & Curiosities", teaser: "Why do children's drawings look so similar worldwide?", detail: "Children from radically different cultures draw very similar things at the same developmental stages — tadpole figures, house shapes, family scenes. It suggests cognitive development, not culture, drives early art.", color: "#E0F4FF" },
  { id: 114, category: "Science & Curiosities", teaser: "Can babies recognize their mother's heartbeat?", detail: "Research suggests that the specific rhythm of the mother's heartbeat — heard throughout pregnancy — has a calming effect on newborns. It's one reason skin-to-skin contact is so effective.", color: "#E0F4FF" },
  { id: 115, category: "Science & Curiosities", teaser: "Do children have a sense of justice?", detail: "Yale University research found that babies as young as 6 months prefer characters who 'help' over characters who 'hinder.' A basic moral sense — preferring good over bad — appears to be innate.", color: "#E0F4FF" },
  { id: 116, category: "Science & Curiosities", teaser: "Why are children's memories so vivid but unreliable?", detail: "Children's episodic memories are richly detailed but highly susceptible to suggestion and contamination. Leading questions can permanently alter a child's memory of an event. This is why interviewing techniques in child psychology are carefully controlled.", color: "#E0F4FF" },
  { id: 117, category: "Science & Curiosities", teaser: "Are children naturally generous?", detail: "Fascinatingly, children under 2 are quite generous in studies, but children between 3–7 tend to become more selfish before generosity re-emerges more strongly. Moral development is not a straight line.", color: "#E0F4FF" },
  { id: 118, category: "Science & Curiosities", teaser: "Do twins have their own secret language?", detail: "Some twins develop 'idioglossia' — a private communication system intelligible only to each other. It's more common in identical twins and usually disappears as regular language develops.", color: "#E0F4FF" },
  { id: 119, category: "Science & Curiosities", teaser: "Can babies tell the difference between living and non-living things?", detail: "Yes! By 12 months, babies understand that people and animals are 'agents' that move under their own power, while objects require force. This distinction is one of the earliest conceptual categories.", color: "#E0F4FF" },
  { id: 120, category: "Science & Curiosities", teaser: "Why do children believe in magic?", detail: "Until about age 7–8, children are in a 'magical thinking' phase where they genuinely cannot consistently distinguish magical from mechanical causation. Santa Claus isn't a choice — it's where they are developmentally.", color: "#E0F4FF" },
  { id: 121, category: "Science & Curiosities", teaser: "Are babies born with musical pitch discrimination?", detail: "Babies as young as 2 months can detect pitch changes of as little as half a semitone. This innate pitch sensitivity is more acute than in most adults and is thought to be a precursor to language.", color: "#E0F4FF" },
  { id: 122, category: "Science & Curiosities", teaser: "Do children have better memories than adults for some things?", detail: "Yes — children outperform adults on certain visual memory tasks, including remembering complex scenes and color details. Their 'high-fidelity' memory has less top-down filtering than adult memory.", color: "#E0F4FF" },
  { id: 123, category: "Science & Curiosities", teaser: "Why do children fear the dark?", detail: "Fear of the dark peaks around ages 3–6 and is cognitively normal. At this age, children have enough imagination to populate the dark with scary things, but not enough logic to consistently dismiss it.", color: "#E0F4FF" },

  // ── HEALTH & IMMUNITY ────────────────────────────────────────────────────
  { id: 124, category: "Health & Immunity", teaser: "Are babies born with an immune system?", detail: "Partially. Newborns have passive immunity from maternal antibodies transferred through the placenta and breast milk, but their own immune system is immature and continues developing for years.", color: "#E5F5E0" },
  { id: 125, category: "Health & Immunity", teaser: "Why do babies get sick so often?", detail: "The average baby gets 6–12 colds in their first year. Each cold introduces new viruses and trains the immune system. Daycare children get sick more at first, but have fewer infections in primary school.", color: "#E5F5E0" },
  { id: 126, category: "Health & Immunity", teaser: "What is the 'hygiene hypothesis'?", detail: "Evidence suggests that limited early exposure to microbes and infection is linked to higher rates of allergies and autoimmune disease. Some degree of childhood illness may be immunologically necessary.", color: "#E5F5E0" },
  { id: 127, category: "Health & Immunity", teaser: "Why do fever temperatures feel different for children?", detail: "Children can have higher fevers (40°C+) with milder illnesses than adults, partly because their immune responses are more vigorous and partly because smaller bodies warm faster.", color: "#E5F5E0" },
  { id: 128, category: "Health & Immunity", teaser: "How does the gut microbiome affect child development?", detail: "The gut microbiome — established largely in the first 1,000 days — influences immune function, metabolism, brain development, and even mental health. Delivery mode, feeding, and antibiotic use all shape it.", color: "#E5F5E0" },
  { id: 129, category: "Health & Immunity", teaser: "Can children grow out of allergies?", detail: "Yes — and more commonly than once thought. About 80% of children with egg allergies and 65% with milk allergies will outgrow them by adolescence. Peanut and tree nut allergies are less likely to resolve.", color: "#E5F5E0" },
  { id: 130, category: "Health & Immunity", teaser: "Why are premature babies more vulnerable?", detail: "The immune system, lungs, brain, and gut all undergo critical development in the final weeks of pregnancy. Premature babies miss this window and require NICU support to survive and develop those systems outside the womb.", color: "#E5F5E0" },
  { id: 131, category: "Health & Immunity", teaser: "What is colostrum and why is it called 'liquid gold'?", detail: "Colostrum is the thick, yellowish first milk produced in the first days after birth. It is incredibly rich in antibodies, proteins, and immune factors — effectively the baby's first vaccine.", color: "#E5F5E0" },
  { id: 132, category: "Health & Immunity", teaser: "Do children heal faster than adults?", detail: "Yes — children's cells divide more rapidly, inflammation resolves more quickly, and their stem cells are more active. A child can heal a broken bone about twice as fast as an adult.", color: "#E5F5E0" },
  { id: 133, category: "Health & Immunity", teaser: "Why do growth spurts happen during illness?", detail: "Growth hormone is secreted in large amounts during sleep. When children are ill, they sleep more — and measurable spurts in height often follow within days of a fever. Parents sometimes report that children look taller after being sick.", color: "#E5F5E0" },

  // ── PSYCHOLOGY & PERSONALITY ─────────────────────────────────────────────
  { id: 134, category: "Psychology & Personality", teaser: "Are children born with personality?", detail: "Largely yes. Temperament studies — including identical twin research — show that roughly 50% of personality traits like shyness, emotional reactivity, and sociability are heritable from birth.", color: "#F5E6FF" },
  { id: 135, category: "Psychology & Personality", teaser: "What are the three main temperament types?", detail: "Researchers Thomas and Chess identified 'Easy' (adaptable, positive), 'Difficult' (intense, irregular, negative), and 'Slow to Warm Up' (cautious, low intensity). About 35% of children don't fit neatly into any category.", color: "#F5E6FF" },
  { id: 136, category: "Psychology & Personality", teaser: "What is 'goodness of fit' in parenting?", detail: "Research shows child outcomes depend less on the specific temperament type and more on how well the parenting style matches the child's temperament. A 'difficult' child with a matched parenting approach often thrives.", color: "#F5E6FF" },
  { id: 137, category: "Psychology & Personality", teaser: "Do birth order effects actually exist?", detail: "Research shows modest but real effects: firstborns tend to score slightly higher on IQ and achievement; later-borns score higher on openness and risk-taking. The effects are real but often overstated.", color: "#F5E6FF" },
  { id: 138, category: "Psychology & Personality", teaser: "Can babies be introverts?", detail: "Yes — introversion/extroversion has a strong genetic component and is visible from the earliest months. Infants who react intensely to novelty are more likely to grow into introverted, cautious adults.", color: "#F5E6FF" },
  { id: 139, category: "Psychology & Personality", teaser: "What is 'growth mindset' and when does it develop?", detail: "Carol Dweck's research shows that by age 3–4, children already have implicit theories of intelligence — either fixed ('I'm smart or I'm not') or growth-oriented ('I can get better at things'). Parental praise style is a key influence.", color: "#F5E6FF" },
  { id: 140, category: "Psychology & Personality", teaser: "Why do some children seem fearless?", detail: "Fearlessness in children is linked to lower baseline cortisol, reduced amygdala reactivity, and higher sensation-seeking dopamine pathways — all largely genetic. It is NOT simply 'bad parenting.'", color: "#F5E6FF" },
  { id: 141, category: "Psychology & Personality", teaser: "What is 'secure attachment' and why does it matter?", detail: "Secure attachment — formed when a caregiver reliably responds to a baby's needs — is the single strongest predictor of a child's future mental health, relationship quality, and resilience. It doesn't require perfection, just consistent responsiveness.", color: "#F5E6FF" },
  { id: 142, category: "Psychology & Personality", teaser: "Can anxiety be inherited by children?", detail: "Yes — anxiety disorders have a heritability of about 30–40%. However, environmental factors (parenting modeling, adverse experiences, coping skills) play an equally significant role in whether genetic risk is expressed.", color: "#F5E6FF" },
  { id: 143, category: "Psychology & Personality", teaser: "Why do siblings often have such different personalities?", detail: "Despite sharing 50% of DNA and the same parents, siblings experience quite different environments. Birth order, peer groups, differential parental treatment, and unique experiences all lead to surprisingly distinct personalities.", color: "#F5E6FF" },

  // ── MOVEMENT & MOTOR SKILLS ──────────────────────────────────────────────
  { id: 144, category: "Movement", teaser: "Why do babies kick so much in the womb?", detail: "Fetal movement — which begins around weeks 16–22 — is essential for joint and muscle development. Babies who move less in utero often have underdeveloped joints at birth.", color: "#E8F0FE" },
  { id: 145, category: "Movement", teaser: "What is the Moro reflex?", detail: "The Moro (startle) reflex — where a baby throws out arms and legs when surprised — is an involuntary response present from birth. It's thought to be a vestigial grasping response from our primate ancestry.", color: "#E8F0FE" },
  { id: 146, category: "Movement", teaser: "Do all babies crawl before walking?", detail: "No! About 7% of typically developing children skip crawling entirely and go straight to pulling up and walking. Crawling is not a required developmental milestone.", color: "#E8F0FE" },
  { id: 147, category: "Movement", teaser: "Why is tummy time so important?", detail: "Tummy time strengthens the neck, shoulder, and core muscles needed for sitting, crawling, and walking. It also prevents the head flattening (positional plagiocephaly) that can result from too much time on the back.", color: "#E8F0FE" },
  { id: 148, category: "Movement", teaser: "When do children learn to ride a bike?", detail: "The average age for learning to ride without stabilisers is 4–6 years. Balance bikes (no pedals) significantly accelerate this, as they teach balance before adding the complexity of pedalling.", color: "#E8F0FE" },
  { id: 149, category: "Movement", teaser: "Why do babies bounce when they hear music?", detail: "Babies begin spontaneously moving to music around 6 months — before they can speak or walk. This rhythmic movement is produced by the motor system independently of deliberate control.", color: "#E8F0FE" },
  { id: 150, category: "Movement", teaser: "When do children develop a mature walking gait?", detail: "A fully adult walking pattern (heel-strike, arm swing, smooth hip rotation) doesn't develop until around age 7. Before this, children walk with a characteristic wide-based, high-step gait.", color: "#E8F0FE" },
  { id: 151, category: "Movement", teaser: "Can babies swim?", detail: "Newborns have a diving reflex — they automatically hold their breath and make swimming movements when submerged. This reflex fades around 6 months, which is why formal swimming lessons begin later.", color: "#E8F0FE" },
  { id: 152, category: "Movement", teaser: "When do babies sit independently?", detail: "Most babies sit without support between 6–8 months. Before this, the core muscles — particularly the deep stabilising muscles — are not strong enough to maintain the upright position.", color: "#E8F0FE" },
  { id: 153, category: "Movement", teaser: "Why do toddlers fall so often?", detail: "A toddler's center of gravity is much higher relative to their body than an adult's. Combined with still-developing balance circuits in the cerebellum, frequent falls are completely normal until about age 3.", color: "#E8F0FE" },

  // ── PREGNANCY & BIRTH ────────────────────────────────────────────────────
  { id: 154, category: "Pregnancy & Birth", teaser: "When does a fetus first have a heartbeat?", detail: "Electrical cardiac activity begins around week 6 of pregnancy. A recognizable heartbeat on ultrasound appears at around 6–7 weeks and may beat up to 170 times per minute in early pregnancy.", color: "#FFF0F5" },
  { id: 155, category: "Pregnancy & Birth", teaser: "How much does the uterus grow during pregnancy?", detail: "The uterus grows from roughly the size of a pear (7.5cm) to the size of a large watermelon by term — about 500 times its original volume. It's one of the most dramatic organ changes in human biology.", color: "#FFF0F5" },
  { id: 156, category: "Pregnancy & Birth", teaser: "What triggers labor to begin?", detail: "The exact trigger is still not fully understood! Research points to signals from the fetal lungs signalling readiness, combined with hormonal cascades. The baby effectively 'signals' it is ready to be born.", color: "#FFF0F5" },
  { id: 157, category: "Pregnancy & Birth", teaser: "Can a fetus recognize music before birth?", detail: "Yes — studies show that music played regularly during the third trimester produces measurable calming responses in the same baby after birth. Prenatal music exposure has lasting effects.", color: "#FFF0F5" },
  { id: 158, category: "Pregnancy & Birth", teaser: "How many cells are in a newborn?", detail: "Approximately 26 trillion cells — all descended from a single fertilized egg over roughly 9 months. This represents about 40 rounds of cell division.", color: "#FFF0F5" },
  { id: 159, category: "Pregnancy & Birth", teaser: "What is the most common birth month?", detail: "In the UK and US, September is statistically the most common birth month — particularly mid-September. This points to a spike in conceptions around the Christmas and New Year holiday period.", color: "#FFF0F5" },
  { id: 160, category: "Pregnancy & Birth", teaser: "Does the placenta produce hormones?", detail: "Yes — the placenta is essentially a temporary endocrine organ. It produces progesterone, estrogen, human chorionic gonadotropin (hCG), and many other hormones that maintain pregnancy.", color: "#FFF0F5" },
  { id: 161, category: "Pregnancy & Birth", teaser: "What is the amniotic fluid made of?", detail: "Early in pregnancy, amniotic fluid is essentially a filtrate of maternal blood. From the second trimester onward, it is largely made of fetal urine — meaning babies spend months in their own wee. (It's sterile and essential.)", color: "#FFF0F5" },
  { id: 162, category: "Pregnancy & Birth", teaser: "How much does a baby weigh at birth on average?", detail: "The average birth weight in the UK is about 3.4kg (7.5 lbs). Babies born weighing below 2.5kg are classified as low birth weight and may need additional monitoring.", color: "#FFF0F5" },
  { id: 163, category: "Pregnancy & Birth", teaser: "Can twins have different fathers?", detail: "Yes — in rare cases (heteropaternal superfecundation), fraternal twins can have different fathers if two eggs were fertilized by sperm from different men during the same cycle. It's rare but documented.", color: "#FFF0F5" },

  // ── PARENTING SCIENCE ────────────────────────────────────────────────────
  { id: 164, category: "Parenting Science", teaser: "Does skin-to-skin contact really matter?", detail: "Profoundly. Skin-to-skin contact (kangaroo care) regulates a newborn's temperature, heart rate, and breathing; reduces cortisol; boosts oxytocin; and improves breastfeeding outcomes. The benefits are measurable for months.", color: "#FDECEA" },
  { id: 165, category: "Parenting Science", teaser: "Can you 'spoil' a baby by responding too quickly?", detail: "No — the evidence consistently shows the opposite. Babies whose cries are promptly and consistently responded to become more independent toddlers, not more demanding ones. Secure attachment fosters confidence.", color: "#FDECEA" },
  { id: 166, category: "Parenting Science", teaser: "What parenting style has the best outcomes?", detail: "Decades of research point to 'authoritative' parenting — warm, responsive, and emotionally connected, but also consistent with expectations and limits — as producing the best outcomes across nearly all measures.", color: "#FDECEA" },
  { id: 167, category: "Parenting Science", teaser: "Does screen time really harm children?", detail: "The research is nuanced. Passive background TV is harmful. Video calls with familiar people are beneficial. High-quality educational content with co-viewing and discussion is largely neutral to positive.", color: "#FDECEA" },
  { id: 168, category: "Parenting Science", teaser: "How does parental stress affect babies?", detail: "Chronic parental stress elevates cortisol in infants through altered interaction quality, tone of voice, and touch. Babies are exquisitely sensitive to emotional state and co-regulate with their caregivers.", color: "#FDECEA" },
  { id: 169, category: "Parenting Science", teaser: "Does baby-wearing improve development?", detail: "Studies show babies who are carried more cry less, have better sleep patterns, and show enhanced vestibular (balance) development. The close physical contact also regulates heart rate and breathing.", color: "#FDECEA" },
  { id: 170, category: "Parenting Science", teaser: "What is the 'serve and return' interaction?", detail: "The single most important thing a caregiver can do for brain development: notice when a baby initiates (a gesture, sound, look), respond to it, and wait for the baby's response. This back-and-forth literally builds neural architecture.", color: "#FDECEA" },
  { id: 171, category: "Parenting Science", teaser: "How does reading together differ from screen time?", detail: "Shared book reading is uniquely interactive — it involves conversation, pointing, questioning, and emotional attunement that passive screen exposure cannot replicate. Even 15 minutes daily has measurable effects.", color: "#FDECEA" },
  { id: 172, category: "Parenting Science", teaser: "Why is consistent routine important for children?", detail: "Routines activate the prefrontal cortex — the 'planning' brain — and reduce cortisol. Children with predictable routines show better sleep, reduced anxiety, improved self-regulation, and stronger language development.", color: "#FDECEA" },
  { id: 173, category: "Parenting Science", teaser: "Does co-sleeping increase bonding?", detail: "Research shows co-sleeping increases breastfeeding duration and may enhance maternal responsiveness. Safe co-sleeping practices vary significantly by region — always check current local guidelines.", color: "#FDECEA" },

  // ── EXTRA CURIOSITIES ────────────────────────────────────────────────────
  { id: 174, category: "Science & Curiosities", teaser: "Why do babies hiccup so much?", detail: "Hiccups are extremely common in newborns — babies even hiccup in the womb. The diaphragm, which controls breathing, is still immature and prone to spasms. Hiccups may also help develop lung capacity.", color: "#E0F4FF" },
  { id: 175, category: "Science & Curiosities", teaser: "Can babies tell the time?", detail: "By 6 weeks, babies begin to develop a circadian rhythm — a sense of day and night. By 3–4 months most have established a basic day/night cycle, though full circadian maturity takes years.", color: "#E0F4FF" },
  { id: 176, category: "Body & Biology", teaser: "Why do babies have an innie belly button?", detail: "The shape of the belly button (innie or outie) is determined entirely by random chance during healing after the umbilical cord falls off — not by how the cord was cut.", color: "#E3EDE4" },
  { id: 177, category: "Brain & Development", teaser: "What is 'scaffolding' in child development?", detail: "Scaffolding (from Vygotsky) is when an adult supports a child to achieve something just beyond their current ability, then gradually withdraws support. It's how humans have efficiently transmitted knowledge for millennia.", color: "#E6E1FA" },
  { id: 178, category: "Language", teaser: "Why do children learn grammar without being taught?", detail: "Children acquire grammatical rules implicitly from language exposure alone — they never need to be taught 'subject before verb.' Linguist Chomsky called this the 'language acquisition device' — an innate grammar-learning faculty.", color: "#FEF3DC" },
  { id: 179, category: "Play & Learning", teaser: "Why is boredom good for children?", detail: "Unstructured, 'boring' time activates the default mode network — the brain's creative problem-solving circuitry. Children who are regularly bored develop stronger internal motivation, creativity, and self-regulation.", color: "#E8F4E8" },
  { id: 180, category: "Emotions & Social", teaser: "When do children first feel embarrassment?", detail: "Embarrassment requires self-awareness and a sense of social comparison — both of which develop around 18–24 months. The early sign is the characteristic look-away, face-cover, and smile combo.", color: "#FFE8F0" },
  { id: 181, category: "Movement", teaser: "Why do babies instinctively turn their head to find the breast?", detail: "The rooting reflex — where a baby turns toward anything that strokes its cheek — is present from birth and begins fading at about 4 months. It's a survival reflex that ensures the baby finds food.", color: "#E8F0FE" },
  { id: 182, category: "Sleep", teaser: "Can sleep training harm children?", detail: "Multiple large studies, including a 2012 Cochrane review, found no evidence of harm from graduated extinction sleep training in healthy infants over 6 months. Parental wellbeing is also a legitimate health consideration.", color: "#E1EDF5" },
  { id: 183, category: "Health & Immunity", teaser: "How does breastfeeding protect against infection?", detail: "Breast milk contains secretory IgA antibodies that coat the gut lining, blocking pathogens. Remarkably, when a nursing baby is infected, the baby's saliva signals the mother's immune system to produce targeted antibodies in the milk within 48 hours.", color: "#E5F5E0" },
  { id: 184, category: "Science & Curiosities", teaser: "Why do children believe their thoughts can cause events?", detail: "'Magical thinking' in children includes the belief that wishing for something could make it happen. This completely normal 3–7 age phase is why children sometimes feel guilty when unrelated bad things happen after an angry thought.", color: "#E0F4FF" },
  { id: 185, category: "Parenting Science", teaser: "Does praise affect children's motivation?", detail: "Carol Dweck's famous research showed that praising effort ('you worked so hard') consistently produces more motivated, resilient children than praising ability ('you're so smart'), which leads to avoidance of challenge.", color: "#FDECEA" },
  { id: 186, category: "Food & Nutrition", teaser: "Do children really need less sleep as they grow?", detail: "Yes. Newborns need 14–17 hours. By age 3–5: 10–13 hours. School age (6–13): 9–11 hours. Teens: 8–10 hours. Most teens are chronically sleep-deprived due to biological circadian shifts that push sleep timing later.", color: "#FFF3E0" },
  { id: 187, category: "Psychology & Personality", teaser: "Why do children exaggerate so dramatically?", detail: "'Everything hurts SO MUCH' and 'I'm STARVING' aren't lies — they reflect a genuine inability to modulate emotional intensity. Young children experience emotions at full volume and don't yet have language to express degrees.", color: "#F5E6FF" },
  { id: 188, category: "Brain & Development", teaser: "What is the 'critical period' for language?", detail: "There is a sensitive window for language acquisition that runs from birth to roughly age 7, and more weakly to puberty. Children who acquire language in this window achieve far better outcomes than those who don't.", color: "#E6E1FA" },
  { id: 189, category: "Milestones", teaser: "When do children develop a theory of mind?", detail: "Theory of mind — the understanding that other people have different knowledge, beliefs, and perspectives — typically develops around age 3–4. The 'false belief task' is the classic test. Before this, children genuinely can't understand that you don't know what they know.", color: "#EDE8F5" },
  { id: 190, category: "Pregnancy & Birth", teaser: "Do babies feel pain during birth?", detail: "This remains an active research area. Newborns show clear pain responses immediately after birth. The stress hormones involved in labor may provide some natural analgesia, but the experience is likely uncomfortable.", color: "#FFF0F5" },
  { id: 191, category: "Body & Biology", teaser: "How much do babies grow in the first year?", detail: "In the first year of life, a baby's height increases by about 50% — from around 50cm to 75cm. Weight typically triples from birth weight. No other period of postnatal growth is this rapid.", color: "#E3EDE4" },
  { id: 192, category: "Science & Curiosities", teaser: "Are babies born with a preference for human voices?", detail: "Yes — within days of birth, babies can distinguish human voices from other sounds, and prefer them. Within weeks, they prefer their mother's voice specifically. Language learning begins through this social preference.", color: "#E0F4FF" },
  { id: 193, category: "Play & Learning", teaser: "Why is water play so important?", detail: "Water play builds early understanding of physics (volume, displacement, flow), supports sensory integration, develops fine motor skills, and is intrinsically calming. It's one of the most developmentally rich activities available.", color: "#E8F4E8" },
  { id: 194, category: "Emotions & Social", teaser: "When do babies begin imitating facial expressions?", detail: "Within the first hours of life, newborns can imitate basic facial expressions like tongue protrusion and mouth opening. This is one of the earliest and most remarkable human social abilities.", color: "#FFE8F0" },
  { id: 195, category: "Brain & Development", teaser: "What does 'pruning' mean in brain development?", detail: "From age 2–10, the brain systematically eliminates unused neural connections in a process called synaptic pruning. 'Use it or lose it' is literally true at the cellular level — experiences shape which connections survive.", color: "#E6E1FA" },
  { id: 196, category: "Language", teaser: "Why do some children talk very late?", detail: "About 15–20% of children are 'late talkers' without any underlying cause. Most catch up on their own. However, late talking combined with social communication difficulties is worth early professional assessment.", color: "#FEF3DC" },
  { id: 197, category: "Health & Immunity", teaser: "What is 'fourth trimester' and why does it matter?", detail: "The first 3 months outside the womb are sometimes called the 'fourth trimester' — babies are still highly dependent on the womb-like conditions of darkness, constant holding, rhythmic movement, and feeding to thrive.", color: "#E5F5E0" },
  { id: 198, category: "Parenting Science", teaser: "Does playing classical music make babies smarter?", detail: "The 'Mozart Effect' is largely a myth. The original 1993 study found a short-term spatial task benefit in college students — never in babies. Rich, interactive musical play has benefits; passive music exposure has minimal measurable effect on IQ.", color: "#FDECEA" },
  { id: 199, category: "Psychology & Personality", teaser: "Are children naturally more optimistic than adults?", detail: "Yes — research shows that children are more optimistic and have higher 'optimism bias' than adults. This bias actually seems adaptive: expecting positive outcomes is associated with greater motivation and persistence.", color: "#F5E6FF" },
  { id: 200, category: "Science & Curiosities", teaser: "Do babies have a sense of beauty?", detail: "Research shows that by 3–4 months, babies prefer symmetrical patterns, harmonious colors, and 'pleasing' music — suggesting an innate aesthetic sensibility that precedes cultural learning.", color: "#E0F4FF" },
  { id: 201, category: "Movement", teaser: "Why do babies love being rocked?", detail: "Vestibular stimulation (the rocking/swaying sensation) activates the same calming circuits that were stimulated constantly in the womb by the mother's movement. It's deeply familiar before birth.", color: "#E8F0FE" },
  { id: 202, category: "Body & Biology", teaser: "What is the rooting reflex?", detail: "The rooting reflex causes a baby to turn its head and open its mouth when its cheek is stroked. It's a survival mechanism that ensures babies can locate the nipple for feeding without needing to 'learn' the skill.", color: "#E3EDE4" },
  { id: 203, category: "Brain & Development", teaser: "Does bilingualism delay language development?", detail: "No — this is a persistent myth. Bilingual children's total vocabulary across both languages equals or exceeds monolinguals. They may say first words at the same time or slightly later, but this is completely normal and temporary.", color: "#E6E1FA" },
  { id: 204, category: "Milestones", teaser: "When do children start counting?", detail: "Children begin rote counting (reciting numbers) at around age 2, but one-to-one correspondence (understanding that each number word corresponds to one object) typically develops around 3–4 years.", color: "#EDE8F5" },
  { id: 205, category: "Food & Nutrition", teaser: "Why do children often dislike bitter foods?", detail: "Bitterness sensitivity is innate and much stronger in children than adults. Many toxic plants are bitter — evolution likely made children extra-sensitive to bitter taste as a safety mechanism.", color: "#FFF3E0" },
  { id: 206, category: "Pregnancy & Birth", teaser: "What is the purpose of the umbilical cord?", detail: "The umbilical cord delivers oxygen and nutrients from the placenta to the fetus, and returns deoxygenated blood and waste back. It contains two arteries and one vein, twisted together in a natural rope-like structure.", color: "#FFF0F5" },
];

const CATEGORIES = ["All", ...Array.from(new Set(ALL_FACTS.map(f => f.category))).sort()];

const CATEGORY_ICONS = {
  "All": "✦",
  "Brain & Development": "🧠",
  "Body & Biology": "🫀",
  "Senses & Perception": "👁️",
  "Sleep": "🌙",
  "Language": "💬",
  "Emotions & Social": "❤️",
  "Play & Learning": "🎲",
  "Food & Nutrition": "🥦",
  "Milestones": "⭐",
  "Science & Curiosities": "🔬",
  "Health & Immunity": "🛡️",
  "Psychology & Personality": "🪞",
  "Movement": "🏃",
  "Pregnancy & Birth": "🌱",
  "Parenting Science": "🤝",
};

export default function Facts() {
  const [flippedCards, setFlippedCards] = useState({});
  const [activeCategory, setActiveCategory] = useState("All");

  const handleFlip = (id) => {
    setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filtered = activeCategory === "All"
    ? ALL_FACTS
    : ALL_FACTS.filter(f => f.category === activeCategory);

  return (
    <div style={styles.pageContainer}>
      <div style={styles.header}>
        <h1 style={styles.title}>Fascinating Facts</h1>
        <p style={styles.subtitle}>Tap a card to flip it over and discover the tiny, magical mysteries behind how your little one is growing.</p>
      </div>

      {/* Category Filter */}
      <div style={styles.filterWrapper}>
        <div style={styles.filterScroll}>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              style={{
                ...styles.filterBtn,
                ...(activeCategory === cat ? styles.filterBtnActive : {})
              }}
              onClick={() => {
                setActiveCategory(cat);
                setFlippedCards({});
              }}
            >
              <span style={styles.filterIcon}>{CATEGORY_ICONS[cat] || "•"}</span>
              {cat}
              {activeCategory === cat && (
                <span style={styles.filterCount}>
                  {cat === "All" ? ALL_FACTS.length : ALL_FACTS.filter(f => f.category === cat).length}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div style={styles.grid}>
        {filtered.map((fact) => {
          const isFlipped = flippedCards[fact.id];
          return (
            <div key={fact.id} style={styles.cardContainer} onClick={() => handleFlip(fact.id)}>
              <div style={{ ...styles.cardInner, transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>
                <div style={{ ...styles.cardFace, ...styles.cardFront, backgroundColor: fact.color }}>
                  <span style={styles.tapIcon}>👆 Tap to reveal</span>
                  <span style={styles.categoryPill}>{CATEGORY_ICONS[fact.category]} {fact.category}</span>
                  <h3 style={styles.teaserText}>{fact.teaser}</h3>
                </div>
                <div style={{ ...styles.cardFace, ...styles.cardBack }}>
                  <h3 style={styles.didYouKnow}>Did you know?</h3>
                  <p style={styles.detailText}>{fact.detail}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const styles = {
  pageContainer: {
    padding: '4rem 5%',
    maxWidth: '1200px',
    margin: '0 auto',
    minHeight: '70vh',
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  title: {
    fontSize: '3.5rem',
    fontWeight: '900',
    color: 'var(--primary-purple)',
    marginBottom: '1rem',
    letterSpacing: '-1px',
  },
  subtitle: {
    fontSize: '1.3rem',
    color: 'var(--text-light)',
    maxWidth: '600px',
    margin: '0 auto',
  },

  // ── FILTER BAR ──────────────────────────────
  filterWrapper: {
    marginBottom: '3rem',
    overflowX: 'auto',
    WebkitOverflowScrolling: 'touch',
    paddingBottom: '0.5rem',
  },
  filterScroll: {
    display: 'flex',
    gap: '0.6rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  filterBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '0.55rem 1.1rem',
    borderRadius: '999px',
    border: '2px solid #e0d6f5',
    background: '#f9f7ff',
    color: '#6b5ba0',
    fontSize: '0.9rem',
    fontWeight: '700',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    transition: 'all 0.2s ease',
  },
  filterBtnActive: {
    background: 'var(--primary-purple)',
    borderColor: 'var(--primary-purple)',
    color: '#fff',
    boxShadow: '0 4px 14px rgba(110,80,200,0.25)',
  },
  filterIcon: {
    fontSize: '1rem',
  },
  filterCount: {
    background: 'rgba(255,255,255,0.25)',
    borderRadius: '999px',
    padding: '1px 8px',
    fontSize: '0.78rem',
    fontWeight: '800',
  },

  // ── GRID & CARDS ──────────────────────────────
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: '2.5rem',
    perspective: '1000px',
  },
  cardContainer: {
    width: '100%',
    height: '280px',
    cursor: 'pointer',
    perspective: '1000px',
  },
  cardInner: {
    position: 'relative',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    transition: 'transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1)',
    transformStyle: 'preserve-3d',
  },
  cardFace: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    borderRadius: '30px',
    padding: '2.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 15px 35px rgba(0,0,0,0.05)',
  },
  cardFront: {
    color: 'var(--text-main)',
    border: '2px solid transparent',
  },
  tapIcon: {
    position: 'absolute',
    top: '20px',
    fontSize: '0.9rem',
    fontWeight: '800',
    color: 'rgba(0,0,0,0.4)',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  categoryPill: {
    position: 'absolute',
    bottom: '18px',
    fontSize: '0.75rem',
    fontWeight: '700',
    color: 'rgba(0,0,0,0.45)',
    background: 'rgba(0,0,0,0.07)',
    borderRadius: '999px',
    padding: '3px 12px',
  },
  teaserText: {
    fontSize: '1.8rem',
    fontWeight: '900',
    lineHeight: '1.3',
  },
  cardBack: {
    backgroundColor: 'var(--primary-purple)',
    color: 'white',
    transform: 'rotateY(180deg)',
  },
  didYouKnow: {
    fontSize: '1.2rem',
    fontWeight: '900',
    marginBottom: '1rem',
    color: 'var(--accent-purple)',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  detailText: {
    fontSize: '1.15rem',
    lineHeight: '1.6',
    fontWeight: '600',
  },
};