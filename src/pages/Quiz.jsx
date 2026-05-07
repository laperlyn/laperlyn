import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { useStardust } from '../context/StardustContext';

// --- The 100 Question Bank ---
const baseQuestions = [
    // LEVEL 1 (Questions 1-5)
    { questionText: 'At what distance can a newborn baby see objects clearly?', options: [{ answerText: 'Across the room', isCorrect: false }, { answerText: '8 to 12 inches', isCorrect: true }, { answerText: '3 to 4 feet', isCorrect: false }] },
    { questionText: 'How many bones is a human baby born with?', options: [{ answerText: '206', isCorrect: false }, { answerText: '300 (they fuse together later)', isCorrect: true }, { answerText: '250', isCorrect: false }] },
    { questionText: 'Babies are actually born WITHOUT which body part?', options: [{ answerText: 'Kneecaps (they are cartilage!)', isCorrect: true }, { answerText: 'Tear ducts', isCorrect: false }, { answerText: 'Tailbone', isCorrect: false }] },
    { questionText: 'When do babies start developing unique fingerprints?', options: [{ answerText: 'Right after birth', isCorrect: false }, { answerText: 'While in the womb', isCorrect: true }, { answerText: 'At 3 months old', isCorrect: false }] },
    { questionText: 'Which sense is the first to fully develop?', options: [{ answerText: 'Sight', isCorrect: false }, { answerText: 'Hearing', isCorrect: true }, { answerText: 'Smell', isCorrect: false }] },
    
    // LEVEL 2 (Questions 6-10)
    { questionText: 'What color are most babies eyes when they are born?', options: [{ answerText: 'Brown', isCorrect: false }, { answerText: 'Blue/Blue-Gray', isCorrect: true }, { answerText: 'Green', isCorrect: false }] },
    { questionText: 'How many taste buds does a baby have compared to an adult?', options: [{ answerText: 'About the same', isCorrect: false }, { answerText: 'Way more (around 30,000)', isCorrect: true }, { answerText: 'Fewer, they develop later', isCorrect: false }] },
    { questionText: 'On average, how many diapers will a baby go through in their first year?', options: [{ answerText: '1,000', isCorrect: false }, { answerText: '2,500 - 3,000', isCorrect: true }, { answerText: '5,000', isCorrect: false }] },
    { questionText: 'True or False: Babies cry tears immediately after birth.', options: [{ answerText: 'True', isCorrect: false }, { answerText: 'False (tear ducts aren\'t fully open yet)', isCorrect: true }] },
    { questionText: 'What is a baby\'s first recognized color?', options: [{ answerText: 'Red', isCorrect: true }, { answerText: 'Blue', isCorrect: false }, { answerText: 'Yellow', isCorrect: false }] },
    
    // LEVEL 3 (Questions 11-15): Baby Anatomy & Physiology
    { questionText: 'What size is a newborn baby\'s stomach on their first day of life?', options: [{ answerText: 'The size of an apple', isCorrect: false }, { answerText: 'The size of a cherry', isCorrect: true }, { answerText: 'The size of a ping-pong ball', isCorrect: false }] },
    { questionText: 'What is the medical term for a baby\'s first poop?', options: [{ answerText: 'Colostrum', isCorrect: false }, { answerText: 'Lanugo', isCorrect: false }, { answerText: 'Meconium', isCorrect: true }] },
    { questionText: 'Which body part grows the least from birth to adulthood?', options: [{ answerText: 'The nose', isCorrect: false }, { answerText: 'The eyes', isCorrect: true }, { answerText: 'The ears', isCorrect: false }] },
    { questionText: 'What is the fine, downy hair that covers some newborns called?', options: [{ answerText: 'Lanugo', isCorrect: true }, { answerText: 'Vernix', isCorrect: false }, { answerText: 'Fontanelle', isCorrect: false }] },
    { questionText: 'How much of a newborn\'s body weight is made up of their head?', options: [{ answerText: 'About 10%', isCorrect: false }, { answerText: 'About 25%', isCorrect: true }, { answerText: 'About 40%', isCorrect: false }] },

    // LEVEL 4 (Questions 16-20): Sleep & Sounds
    { questionText: 'How many hours a day does a typical newborn sleep?', options: [{ answerText: '14 to 17 hours', isCorrect: true }, { answerText: '8 to 10 hours', isCorrect: false }, { answerText: '20 to 22 hours', isCorrect: false }] },
    { questionText: 'Which of these sounds is most soothing to a newborn?', options: [{ answerText: 'Complete silence', isCorrect: false }, { answerText: 'White noise (like a vacuum or heartbeat)', isCorrect: true }, { answerText: 'Classical music only', isCorrect: false }] },
    { questionText: 'At what age do babies typically establish a circadian rhythm (day/night sleep cycle)?', options: [{ answerText: '2 weeks', isCorrect: false }, { answerText: '3 to 6 months', isCorrect: true }, { answerText: '1 year', isCorrect: false }] },
    { questionText: 'What percentage of a newborn\'s sleep is in the REM (Rapid Eye Movement) stage?', options: [{ answerText: 'About 20%', isCorrect: false }, { answerText: 'About 50%', isCorrect: true }, { answerText: 'About 80%', isCorrect: false }] },
    { questionText: 'Which reflex causes a baby to throw their arms out when startled?', options: [{ answerText: 'Rooting reflex', isCorrect: false }, { answerText: 'Moro reflex', isCorrect: true }, { answerText: 'Babinski reflex', isCorrect: false }] },

    // LEVEL 5 (Questions 21-25): Major Milestones
    { questionText: 'At what age do most babies flash their first "real" (social) smile?', options: [{ answerText: 'Within the first week', isCorrect: false }, { answerText: 'Around 2 months', isCorrect: true }, { answerText: 'Around 5 months', isCorrect: false }] },
    { questionText: 'When do babies usually begin to crawl?', options: [{ answerText: '4 to 5 months', isCorrect: false }, { answerText: '7 to 10 months', isCorrect: true }, { answerText: '12 to 14 months', isCorrect: false }] },
    { questionText: 'What is the typical age range for a baby to take their first independent steps?', options: [{ answerText: '9 to 15 months', isCorrect: true }, { answerText: '6 to 8 months', isCorrect: false }, { answerText: '18 to 24 months', isCorrect: false }] },
    { questionText: 'Which of the following is usually a baby\'s first fine motor skill?', options: [{ answerText: 'Using a spoon', isCorrect: false }, { answerText: 'The pincer grasp (picking up small objects)', isCorrect: false }, { answerText: 'Swiping at hanging objects', isCorrect: true }] },
    { questionText: 'When do babies typically start responding to their own name?', options: [{ answerText: '3 months', isCorrect: false }, { answerText: '6 to 7 months', isCorrect: true }, { answerText: '12 months', isCorrect: false }] },

    // LEVEL 6 (Questions 26-30): Diet & Teeth
    { questionText: 'When do pediatricians generally recommend introducing solid foods?', options: [{ answerText: '3 months', isCorrect: false }, { answerText: 'Around 6 months', isCorrect: true }, { answerText: '9 months', isCorrect: false }] },
    { questionText: 'Which teeth usually erupt first in a baby\'s mouth?', options: [{ answerText: 'Upper front teeth (incisors)', isCorrect: false }, { answerText: 'Lower front teeth (incisors)', isCorrect: true }, { answerText: 'Molars', isCorrect: false }] },
    { questionText: 'Why shouldn\'t babies under 1 year old consume honey?', options: [{ answerText: 'It causes tooth decay rapidly', isCorrect: false }, { answerText: 'Risk of infant botulism', isCorrect: true }, { answerText: 'It is a common allergy', isCorrect: false }] },
    { questionText: 'How many primary (baby) teeth will a child eventually get?', options: [{ answerText: '20', isCorrect: true }, { answerText: '24', isCorrect: false }, { answerText: '32', isCorrect: false }] },
    { questionText: 'True or False: Some babies are born with teeth.', options: [{ answerText: 'True (they are called natal teeth)', isCorrect: true }, { answerText: 'False', isCorrect: false }] },

    // LEVEL 7 (Questions 31-35): Animal Babies!
    { questionText: 'What is a baby kangaroo called?', options: [{ answerText: 'Calf', isCorrect: false }, { answerText: 'Joey', isCorrect: true }, { answerText: 'Kit', isCorrect: false }] },
    { questionText: 'Which animal baby is called a "puggle"?', options: [{ answerText: 'Baby platypus or echidna', isCorrect: true }, { answerText: 'Baby hedgehog', isCorrect: false }, { answerText: 'Baby penguin', isCorrect: false }] },
    { questionText: 'How long is an elephant\'s pregnancy (gestation period)?', options: [{ answerText: '9 months', isCorrect: false }, { answerText: '15 months', isCorrect: false }, { answerText: '22 months', isCorrect: true }] },
    { questionText: 'What color are baby flamingos when they hatch?', options: [{ answerText: 'Pink', isCorrect: false }, { answerText: 'White/Gray', isCorrect: true }, { answerText: 'Orange', isCorrect: false }] },
    { questionText: 'Which animal father carries the babies during pregnancy?', options: [{ answerText: 'Seahorse', isCorrect: true }, { answerText: 'Emperor Penguin', isCorrect: false }, { answerText: 'Sea Turtle', isCorrect: false }] },

    // LEVEL 8 (Questions 36-40): Nursery Rhymes & Stories
    { questionText: 'In the nursery rhyme, who sat on a wall and had a great fall?', options: [{ answerText: 'Jack', isCorrect: false }, { answerText: 'Humpty Dumpty', isCorrect: true }, { answerText: 'Little Boy Blue', isCorrect: false }] },
    { questionText: 'According to the song, what does the "Itsy Bitsy Spider" go up?', options: [{ answerText: 'The water spout', isCorrect: true }, { answerText: 'The garden wall', isCorrect: false }, { answerText: 'The grandfather clock', isCorrect: false }] },
    { questionText: 'In "Rock-a-bye Baby," where is the cradle placed?', options: [{ answerText: 'On the floor', isCorrect: false }, { answerText: 'In the nursery', isCorrect: false }, { answerText: 'On the tree top', isCorrect: true }] },
    { questionText: 'Who kissed the girls and made them cry?', options: [{ answerText: 'Georgie Porgie', isCorrect: true }, { answerText: 'Peter Piper', isCorrect: false }, { answerText: 'Simple Simon', isCorrect: false }] },
    { questionText: 'What did the cow jump over in "Hey Diddle Diddle"?', options: [{ answerText: 'The fence', isCorrect: false }, { answerText: 'The moon', isCorrect: true }, { answerText: 'The spoon', isCorrect: false }] },

    // LEVEL 9 (Questions 41-45): Baby Gear & Items
    { questionText: 'What is a "binky" a common slang term for?', options: [{ answerText: 'A baby blanket', isCorrect: false }, { answerText: 'A pacifier', isCorrect: true }, { answerText: 'A baby bottle', isCorrect: false }] },
    { questionText: 'What is a "onesie"?', options: [{ answerText: 'A baby toy', isCorrect: false }, { answerText: 'A stroller accessory', isCorrect: false }, { answerText: 'A one-piece infant bodysuit', isCorrect: true }] },
    { questionText: 'What is the purpose of a baby swaddle?', options: [{ answerText: 'To keep them warm and mimic the womb', isCorrect: true }, { answerText: 'To help them learn to crawl', isCorrect: false }, { answerText: 'To protect their knees', isCorrect: false }] },
    { questionText: 'What is a bassinet?', options: [{ answerText: 'A type of baby formula', isCorrect: false }, { answerText: 'A small bed specifically for young infants', isCorrect: true }, { answerText: 'A baby carrier worn by parents', isCorrect: false }] },
    { questionText: 'At what age should a baby stop using a rear-facing car seat?', options: [{ answerText: 'When they turn 1', isCorrect: false }, { answerText: 'As long as they fit the seat\'s height/weight limits', isCorrect: true }, { answerText: 'When they can sit up unassisted', isCorrect: false }] },

    // LEVEL 10 (Questions 46-50): Word Origins & Names
    { questionText: 'What does the word "infant" literally mean in Latin?', options: [{ answerText: 'Tiny person', isCorrect: false }, { answerText: 'Unable to speak', isCorrect: true }, { answerText: 'New life', isCorrect: false }] },
    { questionText: 'According to Social Security Administration data, what has been a top girl\'s name in the US for the 2010s/2020s?', options: [{ answerText: 'Jessica', isCorrect: false }, { answerText: 'Olivia', isCorrect: true }, { answerText: 'Mary', isCorrect: false }] },
    { questionText: 'According to SSA data, what has been a top boy\'s name in the US for the 2010s/2020s?', options: [{ answerText: 'Liam', isCorrect: true }, { answerText: 'Michael', isCorrect: false }, { answerText: 'John', isCorrect: false }] },
    { questionText: 'The word "baby" comes from what linguistic phenomenon?', options: [{ answerText: 'Greek mythology', isCorrect: false }, { answerText: 'Babbling sounds made by infants', isCorrect: true }, { answerText: 'An Old English royal title', isCorrect: false }] },
    { questionText: 'In many languages, words for "Mother" start with the "M" sound. Why?', options: [{ answerText: 'It is coincidence', isCorrect: false }, { answerText: 'It was standardized by the Romans', isCorrect: false }, { answerText: 'It is one of the easiest sounds for a baby to make', isCorrect: true }] },

    // LEVEL 11 (Questions 51-55): Pregnancy & Birth Stats
    { questionText: 'What percentage of babies are actually born on their exact due date?', options: [{ answerText: 'About 5%', isCorrect: true }, { answerText: 'About 25%', isCorrect: false }, { answerText: 'About 50%', isCorrect: false }] },
    { questionText: 'Which day of the week has the most births globally?', options: [{ answerText: 'Monday', isCorrect: false }, { answerText: 'Tuesday', isCorrect: true }, { answerText: 'Sunday', isCorrect: false }] },
    { questionText: 'Which month has the most birthdays?', options: [{ answerText: 'February', isCorrect: false }, { answerText: 'September', isCorrect: true }, { answerText: 'December', isCorrect: false }] },
    { questionText: 'What is the average weight of a newborn baby in the US?', options: [{ answerText: '5.5 pounds', isCorrect: false }, { answerText: '7.5 pounds', isCorrect: true }, { answerText: '9 pounds', isCorrect: false }] },
    { questionText: 'According to Guinness World Records, what was the weight of the heaviest baby to survive?', options: [{ answerText: '14 lbs 5 oz', isCorrect: false }, { answerText: '18 lbs 2 oz', isCorrect: false }, { answerText: '22 lbs 8 oz', isCorrect: true }] },

    // LEVEL 12 (Questions 56-60): Brains & Cognition
    { questionText: 'By age 1, a baby\'s brain has grown to what percentage of its adult size?', options: [{ answerText: '25%', isCorrect: false }, { answerText: '60%', isCorrect: true }, { answerText: '90%', isCorrect: false }] },
    { questionText: 'What is "object permanence"?', options: [{ answerText: 'Knowing an object exists even when hidden', isCorrect: true }, { answerText: 'A baby\'s favorite toy', isCorrect: false }, { answerText: 'The ability to hold items securely', isCorrect: false }] },
    { questionText: 'At what age do babies usually develop object permanence?', options: [{ answerText: 'Birth', isCorrect: false }, { answerText: '6 to 8 months', isCorrect: true }, { answerText: '2 years', isCorrect: false }] },
    { questionText: 'True or False: Babies can understand words long before they can speak them.', options: [{ answerText: 'True', isCorrect: true }, { answerText: 'False', isCorrect: false }] },
    { questionText: 'Which classical composer is often associated with the (debated) "effect" that makes babies smarter?', options: [{ answerText: 'Beethoven', isCorrect: false }, { answerText: 'Bach', isCorrect: false }, { answerText: 'Mozart', isCorrect: true }] },

    // LEVEL 13 (Questions 61-65): Twins & Multiples
    { questionText: 'What causes identical twins?', options: [{ answerText: 'Two eggs fertilized by two sperm', isCorrect: false }, { answerText: 'One fertilized egg splitting into two', isCorrect: true }, { answerText: 'A baby born with two heads', isCorrect: false }] },
    { questionText: 'Which continent has the highest rate of twin births?', options: [{ answerText: 'North America', isCorrect: false }, { answerText: 'Asia', isCorrect: false }, { answerText: 'Africa', isCorrect: true }] },
    { questionText: 'Do identical twins have the exact same fingerprints?', options: [{ answerText: 'Yes', isCorrect: false }, { answerText: 'No', isCorrect: true }] },
    { questionText: 'What is the record for the most surviving babies born in a single delivery?', options: [{ answerText: '7 (Septuplets)', isCorrect: false }, { answerText: '8 (Octuplets)', isCorrect: false }, { answerText: '9 (Nonuplets)', isCorrect: true }] },
    { questionText: 'Fraternal twins are as genetically similar as...', options: [{ answerText: 'Standard siblings', isCorrect: true }, { answerText: 'Identical twins', isCorrect: false }, { answerText: 'First cousins', isCorrect: false }] },

    // LEVEL 14 (Questions 66-70): Global Traditions
    { questionText: 'In which country is it a tradition to let babies nap outside in the freezing cold?', options: [{ answerText: 'Canada', isCorrect: false }, { answerText: 'Sweden/Scandinavia', isCorrect: true }, { answerText: 'Russia', isCorrect: false }] },
    { questionText: 'In Japan, what baby body part is traditionally kept in a wooden box after it falls off?', options: [{ answerText: 'First baby tooth', isCorrect: false }, { answerText: 'Umbilical cord', isCorrect: true }, { answerText: 'First lock of hair', isCorrect: false }] },
    { questionText: 'What is the "Dol" tradition in South Korea?', options: [{ answerText: 'A baby\'s first birthday celebration and fortune-telling', isCorrect: true }, { answerText: 'A traditional naming ceremony', isCorrect: false }, { answerText: 'A special lullaby sung by grandmothers', isCorrect: false }] },
    { questionText: 'In Bali, babies are not allowed to do what for the first three months of life?', options: [{ answerText: 'Eat solid food', isCorrect: false }, { answerText: 'Be exposed to sunlight', isCorrect: false }, { answerText: 'Touch the ground', isCorrect: true }] },
    { questionText: 'In Finland, what does the government send to all expectant mothers?', options: [{ answerText: 'A maternity box that can double as a crib', isCorrect: true }, { answerText: 'A year supply of diapers', isCorrect: false }, { answerText: 'A personalized silver spoon', isCorrect: false }] },

    // LEVEL 15 (Questions 71-75): Famous Pop Culture Babies
    { questionText: 'What was the name of the baby in the movie "The Hangover"?', options: [{ answerText: 'Carlos', isCorrect: true }, { answerText: 'Alan Jr.', isCorrect: false }, { answerText: 'Doug', isCorrect: false }] },
    { questionText: 'In "The Simpsons," what is the name of Homer and Marge\'s baby?', options: [{ answerText: 'Lisa', isCorrect: false }, { answerText: 'Maggie', isCorrect: true }, { answerText: 'Patty', isCorrect: false }] },
    { questionText: 'What is the name of Prince William and Kate Middleton\'s firstborn child?', options: [{ answerText: 'Prince Harry', isCorrect: false }, { answerText: 'Prince George', isCorrect: true }, { answerText: 'Prince Louis', isCorrect: false }] },
    { questionText: 'Which animated movie features a brilliant baby who wears a suit?', options: [{ answerText: 'The Boss Baby', isCorrect: true }, { answerText: 'Despicable Me', isCorrect: false }, { answerText: 'Incredibles 2', isCorrect: false }] },
    { questionText: 'In the Star Wars series "The Mandalorian," what is "Baby Yoda\'s" real name?', options: [{ answerText: 'Yaddle', isCorrect: false }, { answerText: 'Grogu', isCorrect: true }, { answerText: 'Mando', isCorrect: false }] },

    // LEVEL 16 (Questions 76-80): The Womb & Before Birth
    { questionText: 'At what week of pregnancy can a baby\'s heartbeat usually be detected by ultrasound?', options: [{ answerText: 'Week 2', isCorrect: false }, { answerText: 'Week 6', isCorrect: true }, { answerText: 'Week 12', isCorrect: false }] },
    { questionText: 'What is the amniotic sac filled with?', options: [{ answerText: 'Mostly water and baby\'s urine', isCorrect: true }, { answerText: 'Blood', isCorrect: false }, { answerText: 'Air', isCorrect: false }] },
    { questionText: 'True or False: Babies cry in the womb.', options: [{ answerText: 'True (they show crying behaviors)', isCorrect: true }, { answerText: 'False', isCorrect: false }] },
    { questionText: 'What sense develops while the baby is still in the womb?', options: [{ answerText: 'Hearing', isCorrect: true }, { answerText: 'Taste', isCorrect: false }, { answerText: 'Both Hearing and Taste', isCorrect: true }] },
    { questionText: 'How does a baby breathe in the womb?', options: [{ answerText: 'Through their nose', isCorrect: false }, { answerText: 'Through the umbilical cord delivering oxygen', isCorrect: true }, { answerText: 'They hold their breath', isCorrect: false }] },

    // LEVEL 17 (Questions 81-85): Baby Superpowers
    { questionText: 'Why can newborns swallow and breathe at the same time?', options: [{ answerText: 'Their vocal cords are positioned higher', isCorrect: true }, { answerText: 'They have an extra lung valve', isCorrect: false }, { answerText: 'They cannot do this, it is a myth', isCorrect: false }] },
    { questionText: 'What happens if you support a newborn upright with their feet touching a flat surface?', options: [{ answerText: 'They will lock their knees', isCorrect: false }, { answerText: 'They will mimic a stepping motion (Stepping Reflex)', isCorrect: true }, { answerText: 'They will pull their feet up', isCorrect: false }] },
    { questionText: 'Babies are naturally good at swimming in their first few months. This is called the...', options: [{ answerText: 'Dive reflex', isCorrect: true }, { answerText: 'Float response', isCorrect: false }, { answerText: 'Aqua reflex', isCorrect: false }] },
    { questionText: 'Compared to adults, how fast does a newborn\'s heart beat?', options: [{ answerText: 'About half as fast', isCorrect: false }, { answerText: 'About the same', isCorrect: false }, { answerText: 'Nearly twice as fast (120-160 bpm)', isCorrect: true }] },
    { questionText: 'What is unique about a newborn\'s knees?', options: [{ answerText: 'They are made entirely of cartilage, not bone', isCorrect: true }, { answerText: 'They bend backward slightly', isCorrect: false }, { answerText: 'They do not exist yet', isCorrect: false }] },

    // LEVEL 18 (Questions 86-90): More Milestones
    { questionText: 'When do babies typically say their first actual word?', options: [{ answerText: '6 months', isCorrect: false }, { answerText: '10 to 14 months', isCorrect: true }, { answerText: '18 to 24 months', isCorrect: false }] },
    { questionText: 'What is "tummy time" used for?', options: [{ answerText: 'Strengthening neck and shoulder muscles', isCorrect: true }, { answerText: 'Helping digestion', isCorrect: false }, { answerText: 'Encouraging sleep', isCorrect: false }] },
    { questionText: 'At what age can most babies sit up completely unassisted?', options: [{ answerText: '4 months', isCorrect: false }, { answerText: '7 to 9 months', isCorrect: true }, { answerText: '12 months', isCorrect: false }] },
    { questionText: 'When do babies typically start clapping their hands?', options: [{ answerText: '4 months', isCorrect: false }, { answerText: '9 to 11 months', isCorrect: true }, { answerText: '15 months', isCorrect: false }] },
    { questionText: 'By 18 months, about how many words can a typical toddler say?', options: [{ answerText: '1 to 5', isCorrect: false }, { answerText: '10 to 50', isCorrect: true }, { answerText: 'Over 200', isCorrect: false }] },

    // LEVEL 19 (Questions 91-95): Fun & Surprising Facts
    { questionText: 'What percentage of a baby\'s body is water?', options: [{ answerText: '50%', isCorrect: false }, { answerText: '78%', isCorrect: true }, { answerText: '95%', isCorrect: false }] },
    { questionText: 'In the 1900s, what bizarre item could you use to mail a baby via USPS?', options: [{ answerText: 'A special padded envelope', isCorrect: false }, { answerText: 'Parcel post (stamps pinned to their clothes)', isCorrect: true }, { answerText: 'A birdcage-like box', isCorrect: false }] },
    { questionText: 'How many bones does a baby lose (via fusing) by adulthood?', options: [{ answerText: 'None', isCorrect: false }, { answerText: 'Around 94', isCorrect: true }, { answerText: 'Around 20', isCorrect: false }] },
    { questionText: 'Why do babies constantly put things in their mouths?', options: [{ answerText: 'Because they are always hungry', isCorrect: false }, { answerText: 'It has the most nerve endings and helps them learn about objects', isCorrect: true }, { answerText: 'To sharpen their gums', isCorrect: false }] },
    { questionText: 'When do babies usually get their actual permanent eye color?', options: [{ answerText: 'Birth', isCorrect: false }, { answerText: '6 to 12 months', isCorrect: true }, { answerText: '3 years old', isCorrect: false }] },

    // LEVEL 20 (Questions 96-100): The Final Stretch!
    { questionText: 'What is the soft spot on a baby\'s head called?', options: [{ answerText: 'The fontanelle', isCorrect: true }, { answerText: 'The cranium gap', isCorrect: false }, { answerText: 'The vertex', isCorrect: false }] },
    { questionText: 'What happens to a baby\'s weight by their first birthday?', options: [{ answerText: 'It doubles', isCorrect: false }, { answerText: 'It triples', isCorrect: true }, { answerText: 'It quadruples', isCorrect: false }] },
    { questionText: 'Which vitamin is typically given as a shot to newborns shortly after birth?', options: [{ answerText: 'Vitamin C', isCorrect: false }, { answerText: 'Vitamin K (for blood clotting)', isCorrect: true }, { answerText: 'Vitamin D', isCorrect: false }] },
    { questionText: 'What is the average length of a newborn baby?', options: [{ answerText: '14 to 16 inches', isCorrect: false }, { answerText: '19 to 21 inches', isCorrect: true }, { answerText: '24 to 26 inches', isCorrect: false }] },
    { questionText: 'How many diapers does a baby typically go through per day in the first month?', options: [{ answerText: '3 to 4', isCorrect: false }, { answerText: '8 to 12', isCorrect: true }, { answerText: '15 to 20', isCorrect: false }] }
];

export default function Quiz() {
  const { addPoints } = useStardust(); 

  // --- Quiz Logic (State) ---
  const [shuffledQuestions, setShuffledQuestions] = useState([]); 
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [totalScore, setTotalScore] = useState(0);       
  const [segmentScore, setSegmentScore] = useState(0);   
  
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  
  const [showSegmentBreak, setShowSegmentBreak] = useState(false); 
  const [showFinalScore, setShowFinalScore] = useState(false);     

  const QUESTIONS_PER_LEVEL = 5;

  useEffect(() => {
    shuffleDeck();
  }, []);

  const shuffleDeck = () => {
    let shuffled = [...baseQuestions];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setShuffledQuestions(shuffled);
  };

  if (shuffledQuestions.length === 0) return null;

  const handleAnswerOptionClick = (isCorrect, index) => {
    if (isAnswered) return; 

    setSelectedAnswer(index);
    setIsAnswered(true);

    if (isCorrect) {
      setTotalScore(totalScore + 1);
      setSegmentScore(segmentScore + 1);
      
      // ✨ ADDING POINTS IMMEDIATELY UPON A CORRECT ANSWER! ✨
      addPoints(10); 
      
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#A020F0', '#EEDCFF', '#ffffff']
      });
    }

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      
      if (nextQuestion >= shuffledQuestions.length) {
        setShowFinalScore(true);
        addPoints(50); // Big bonus for finishing everything
      } 
      else if (nextQuestion % QUESTIONS_PER_LEVEL === 0) {
        setShowSegmentBreak(true);
        // We removed the level-up reward here since they now get it per question!
      } 
      else {
        setCurrentQuestion(nextQuestion);
        resetTurn();
      }
    }, 1500);
  };

  const resetTurn = () => {
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  const continueToNextLevel = () => {
    setCurrentQuestion(currentQuestion + 1);
    setSegmentScore(0); 
    setShowSegmentBreak(false);
    resetTurn();
  };

  const restartGame = () => {
    shuffleDeck();
    setCurrentQuestion(0);
    setTotalScore(0);
    setSegmentScore(0);
    setShowFinalScore(false);
    setShowSegmentBreak(false);
    resetTurn();
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.quizBox}>
        
        {showFinalScore ? (
          <div style={styles.scoreSection}>
            <h1 style={{ fontSize: '3rem', color: 'var(--primary-purple)', marginBottom: '1rem' }}>
              Quiz Complete!
            </h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
              Grand Total: {totalScore} out of {shuffledQuestions.length}
            </p>
            
            <div style={styles.emailBox}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--text-main)' }}>You made it to the end!</h3>
              <p style={{ marginBottom: '1.5rem', fontSize: '0.9rem' }}>Join the Laperlyn waitlist for more fun, parenting tips, and early access to our beautiful clothing launch.</p>
              <input type="email" placeholder="Enter your email address..." style={styles.inputField} />
              <button onClick={() => alert("Email captured!")} style={styles.submitBtn}>
                Join the Family
              </button>
            </div>

            <button onClick={restartGame} style={styles.restartBtn}>
              Play Again ↺
            </button>
          </div>
        ) 
        
        : showSegmentBreak ? (
          <div style={styles.scoreSection}>
            <span style={styles.levelBadge}>Level {currentQuestion / QUESTIONS_PER_LEVEL} Complete!</span>
            <h1 style={{ fontSize: '2.5rem', color: 'var(--primary-purple)', margin: '1rem 0' }}>
              You got {segmentScore} / {QUESTIONS_PER_LEVEL} right!
            </h1>
            <p style={{ fontSize: '1.1rem', marginBottom: '2.5rem', color: 'var(--text-light)' }}>
              Current Grand Total: {totalScore}.
            </p>
            <button onClick={continueToNextLevel} style={styles.submitBtn}>
              Start Next Level &rarr;
            </button>
          </div>
        ) 
        
        : (
          <>
            <div style={styles.questionSection}>
              <div style={styles.questionCount}>
                <span>Level {Math.floor(currentQuestion / QUESTIONS_PER_LEVEL) + 1}</span> 
                <span style={{ color: 'var(--text-light)', marginLeft: '10px', fontSize: '0.9rem'}}>
                  (Q: {currentQuestion + 1}/{shuffledQuestions.length})
                </span>
              </div>
              <div style={styles.questionText}>{shuffledQuestions[currentQuestion].questionText}</div>
            </div>

            <div style={styles.answerSection}>
              {shuffledQuestions[currentQuestion].options.map((option, index) => {
                
                let buttonStyle = styles.answerBtn;
                if (isAnswered) {
                  if (option.isCorrect) {
                    buttonStyle = { ...styles.answerBtn, ...styles.correctBtn };
                  } else if (selectedAnswer === index && !option.isCorrect) {
                    buttonStyle = { ...styles.answerBtn, ...styles.incorrectBtn };
                  }
                }

                return (
                  <button
                    key={index}
                    style={buttonStyle}
                    onClick={() => handleAnswerOptionClick(option.isCorrect, index)}
                    disabled={isAnswered}
                  >
                    {option.answerText}
                  </button>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const styles = {
  pageContainer: { padding: '4rem 5%', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '70vh' },
  quizBox: { backgroundColor: '#ffffff', width: '100%', maxWidth: '750px', borderRadius: '35px', padding: '4rem 3rem', boxShadow: '0 20px 50px rgba(160, 32, 240, 0.08)', textAlign: 'center' },
  questionCount: { fontSize: '1.2rem', fontWeight: '900', color: 'var(--primary-purple)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '1px' },
  questionText: { fontSize: '2.2rem', fontWeight: '900', color: 'var(--text-main)', marginBottom: '3rem', lineHeight: '1.3' },
  answerSection: { display: 'flex', flexDirection: 'column', gap: '1.2rem' },
  answerBtn: { width: '100%', padding: '1.4rem', fontSize: '1.1rem', fontWeight: '800', color: 'var(--text-main)', backgroundColor: 'var(--bg-cream)', border: '2px solid var(--accent-purple)', borderRadius: '20px', cursor: 'pointer', transition: 'all 0.2s', textAlign: 'left' },
  correctBtn: { backgroundColor: '#D1E7DD', borderColor: '#0F5132', color: '#0F5132' },
  incorrectBtn: { backgroundColor: '#F8D7DA', borderColor: '#842029', color: '#842029' },
  scoreSection: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
  levelBadge: { backgroundColor: 'var(--accent-purple)', color: 'var(--primary-purple)', padding: '8px 20px', borderRadius: '30px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '1px' },
  emailBox: { backgroundColor: 'var(--accent-purple)', padding: '2.5rem', borderRadius: '25px', width: '100%', marginBottom: '2rem' },
  inputField: { width: '100%', padding: '1.2rem', borderRadius: '15px', border: 'none', marginBottom: '1rem', fontSize: '1.1rem', outline: 'none' },
  submitBtn: { width: '100%', padding: '1.2rem', borderRadius: '15px', border: 'none', backgroundColor: 'var(--primary-purple)', color: 'white', fontSize: '1.2rem', fontWeight: '900', cursor: 'pointer', transition: 'transform 0.2s' },
  restartBtn: { marginTop: '1rem', padding: '1rem 2.5rem', backgroundColor: 'var(--bg-cream)', color: 'var(--primary-purple)', border: '2px solid var(--primary-purple)', borderRadius: '30px', fontSize: '1.1rem', fontWeight: '900', cursor: 'pointer'}
};
