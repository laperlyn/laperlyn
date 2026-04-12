import { useState, useEffect } from 'react';
import { Baby, Heart, Sparkles, Star, Smile, HeartHandshake } from 'lucide-react';

// --- The Scenarios (All 60 included!) ---
const baseScenarios = [
  // --- SLEEP SCENARIOS ---
  { id: 1, title: "The Midnight Blowout", situation: "It's 3 AM. Baby just had a massive diaper blowout that reached their neck. Do you...", options: [{ text: "Do a full bath. It's the only way.", votes: 30 }, { text: "Wipe them down as best as possible and deal with it tomorrow.", votes: 70 }], message: "Survival mode activated! We've all chosen the wet wipes at 3 AM. 🛁" },
  { id: 2, title: "The Car Seat Nap Trap", situation: "You just pulled into the driveway and the baby finally fell asleep. Do you...", options: [{ text: "Sit in the car and scroll on your phone until they wake up.", votes: 85 }, { text: "Risk it all and try the crib transfer.", votes: 15 }], message: "Ah, the driveway doomscroll. Enjoy the peace and quiet! 🚗" },
  { id: 3, title: "The Pacifier Drop", situation: "Baby drops their pacifier on the floor at the grocery store. You don't have a backup. Do you...", options: [{ text: "Wipe it on your shirt and pop it back in.", votes: 60 }, { text: "Find a bathroom to wash it with soap and water.", votes: 40 }], message: "A little dirt never hurt, right? The immune system is working hard today. 🦠" },
  { id: 4, title: "The Phantom Cry", situation: "You're in the shower and swear you hear the baby crying. Do you...", options: [{ text: "Turn off the water to listen closely (it was nothing).", votes: 80 }, { text: "Rush out soaking wet just to check.", votes: 20 }], message: "Phantom cries are real! Your brain is just on high alert. 🚿" },
  { id: 5, title: "The Early Riser", situation: "Baby wakes up at 4:45 AM ready to start the day. Do you...", options: [{ text: "Bring them into your bed and pray for sleep.", votes: 65 }, { text: "Accept defeat and start making the coffee.", votes: 35 }], message: "Coffee is a parent's best friend. May your espresso be strong! ☕" },
  { id: 6, title: "The Crib Transfer", situation: "Baby fell asleep in your arms. When you lower them into the crib, their eyes flutter open. Do you...", options: [{ text: "Freeze like a statue until they close their eyes.", votes: 75 }, { text: "Abort mission and pick them right back up.", votes: 25 }], message: "The 'statue freeze' is a required parenting skill. Don't breathe! 🛑" },
  { id: 7, title: "The Noisy Toy", situation: "You finally get the baby down, take one step away, and step on a loud musical toy. Do you...", options: [{ text: "Run out of the room as fast as you can.", votes: 55 }, { text: "Drop to the floor and hide.", votes: 45 }], message: "Ninja moves are essential when navigating a baby's room in the dark. 🥷" },
  { id: 8, title: "The Contact Nap", situation: "Baby will only nap while laying on you, but you really have to pee. Do you...", options: [{ text: "Hold it in for the next hour.", votes: 60 }, { text: "Attempt the highly dangerous 'sleeping baby bathroom trip'.", votes: 40 }], message: "Bladders of steel! The things we do for a sleeping baby. 🚽" },
  { id: 9, title: "The Sleep Sack Struggle", situation: "It's bedtime and the baby's favorite sleep sack is in the wash. Do you...", options: [{ text: "Use the backup sack and hope for the best.", votes: 30 }, { text: "Pull it out wet and aggressively blow-dry it.", votes: 70 }], message: "Whatever it takes to protect the bedtime routine! 💨" },
  { id: 10, title: "The Daylight Savings Dread", situation: "Clocks fall back, meaning 6 AM is now 5 AM. Do you...", options: [{ text: "Try shifting their schedule days in advance.", votes: 40 }, { text: "Do nothing and just suffer when the day comes.", votes: 60 }], message: "Daylight savings was definitely invented by someone without kids. ⏰" },

  // --- FEEDING & SOLIDS ---
  { id: 11, title: "The Spit-Up Wardrobe", situation: "You just put on a clean shirt to leave the house, and the baby spits up on your shoulder. Do you...", options: [{ text: "Change your shirt again.", votes: 30 }, { text: "Wipe it off with a burp cloth and wear it like a badge of honor.", votes: 70 }], message: "Baby spit-up is just an accessory at this point. 🍼" },
  { id: 12, title: "The Food Thrower", situation: "Baby discovers gravity and starts throwing all their purees on the floor. Do you...", options: [{ text: "Keep picking it up and saying 'No'.", votes: 40 }, { text: "Let the dog handle the cleanup.", votes: 60 }], message: "Dogs are the real MVPs of the toddler years! 🐶" },
  { id: 13, title: "The Taste Test", situation: "You're warming up a bottle and need to check the temperature. Do you...", options: [{ text: "Squeeze a drop on your wrist.", votes: 75 }, { text: "Take a tiny sip yourself.", votes: 25 }], message: "The wrist check is classic, but hey, some of us get curious! 💧" },
  { id: 14, title: "The Nursing Bite", situation: "Your baby just got their first teeth and bites you while nursing. Do you...", options: [{ text: "Yelp loudly and take them off immediately.", votes: 80 }, { text: "Try to stay calm and unlatch them gently.", votes: 20 }], message: "Ouch! Those tiny little teeth are no joke. 🦷" },
  { id: 15, title: "The Restaurant Meltdown", situation: "You just ordered your food and the baby starts screaming. Do you...", options: [{ text: "Take turns walking them outside while the other eats.", votes: 65 }, { text: "Ask for to-go boxes immediately.", votes: 35 }], message: "Tag-team dining is the ultimate relationship test. 🍽️" },
  { id: 16, title: "The Puree Paint", situation: "Baby sneezes mid-bite while eating carrot puree. It's everywhere. Do you...", options: [{ text: "Immediately get the wet wipes and scrub.", votes: 50 }, { text: "Laugh, take a picture, then clean up.", votes: 50 }], message: "You have to document the mess! Carrot stains are temporary, memories are forever. 🥕" },
  { id: 17, title: "The Floor Snack", situation: "You drop a perfectly good teething cracker on your kitchen floor. Do you...", options: [{ text: "Throw it away.", votes: 20 }, { text: "5-second rule. Blow on it and give it back.", votes: 80 }], message: "The 5-second rule applies double to expensive baby snacks! 🥨" },
  { id: 18, title: "The Pumping Problem", situation: "You're pumping at work and realize you forgot the bottles to store it in. Do you...", options: [{ text: "Use your clean coffee mug.", votes: 40 }, { text: "Cry and throw it out.", votes: 60 }], message: "Liquid gold lost! The heartbreak is real. 😭" },
  { id: 19, title: "The Distracted Eater", situation: "Baby is too distracted to finish their bottle. Do you...", options: [{ text: "Walk around the dark room to keep them focused.", votes: 55 }, { text: "Let them be done and try again later.", votes: 45 }], message: "Everything is fascinating when you've only been on earth for a few months! 🌍" },
  { id: 20, title: "The Secret Snack", situation: "You want a piece of chocolate but don't want the baby to want some. Do you...", options: [{ text: "Eat it quickly while hiding behind the fridge door.", votes: 80 }, { text: "Eat it in front of them and tell them it's spicy.", votes: 20 }], message: "The fridge-door-hide is a classic parenting maneuver! 🍫" },

  // --- DIAPERS & BATH TIME ---
  { id: 21, title: "The Mid-Change Fountain", situation: "You take the old diaper off and the baby starts peeing in the air. Do you...", options: [{ text: "Throw a wipe over it like a grenade.", votes: 75 }, { text: "Just stand back and let it happen.", votes: 25 }], message: "Incoming! The wipe shield is your best defense. 🛡️" },
  { id: 22, title: "The Empty Wipes Pack", situation: "You're mid-poopy diaper change and pull out the very last wipe. Do you...", options: [{ text: "Yell for your partner to bring backup.", votes: 70 }, { text: "Use paper towels and water.", votes: 30 }], message: "Communication is key... especially when yelling from the nursery! 🗣️" },
  { id: 23, title: "The Bath Pooper", situation: "Baby is happily splashing in the tub and suddenly... a floater. Do you...", options: [{ text: "Drain it, scrub the tub, and start over.", votes: 65 }, { text: "Scoop it out and quickly finish the bath.", votes: 35 }], message: "Code Brown in the tub! Happens to the best of us. 💩" },
  { id: 24, title: "The Diaper Bag Dilemma", situation: "You arrive at the park and realize you forgot the diaper bag. Do you...", options: [{ text: "Turn around and go right back home.", votes: 45 }, { text: "Risk it and hope they don't poop for an hour.", votes: 55 }], message: "Living on the edge! May the odds be ever in your favor. 🎲" },
  { id: 25, title: "The Sudden Smell", situation: "You just strapped them perfectly into the car seat and you smell poop. Do you...", options: [{ text: "Unbuckle them and change it now.", votes: 50 }, { text: "Drive fast and change it when you get there.", votes: 50 }], message: "The ultimate dilemma: time vs. smell. 🏎️" },
  { id: 26, title: "The Creams & Lotions", situation: "Baby grabs the tub of diaper cream and gets it all over their hands. Do you...", options: [{ text: "Try to wash it off with water (it won't work).", votes: 40 }, { text: "Aggressively rub it in until they are a slippery seal.", votes: 60 }], message: "Diaper cream is basically waterproof armor. Good luck! 🦭" },
  { id: 27, title: "The Diaper Flipper", situation: "Baby learns to roll over right as you try to wipe them. Do you...", options: [{ text: "Give them a toy to distract them.", votes: 60 }, { text: "Wrestle them like an alligator.", votes: 40 }], message: "Diaper changes or an Olympic wrestling match? Hard to tell. 🐊" },
  { id: 28, title: "The Sizing Up", situation: "You have one box of size 1 diapers left, but baby is starting to get red marks. Do you...", options: [{ text: "Squeeze them into the 1s until the box is empty.", votes: 35 }, { text: "Donate the 1s and move up to size 2 immediately.", votes: 65 }], message: "Those chubby thighs wait for nobody! 📦" },
  { id: 29, title: "The Public Restroom", situation: "The store restroom doesn't have a changing table. Do you...", options: [{ text: "Change them in the trunk of the car.", votes: 85 }, { text: "Change them on the bathroom floor on a mat.", votes: 15 }], message: "Trunk diaper changes are an essential parent skill! 🚗" },
  { id: 30, title: "The Diaper Strip", situation: "You put baby in the crib and they immediately rip off their own diaper. Do you...", options: [{ text: "Put them in a backwards onesie so they can't reach it.", votes: 70 }, { text: "Lecture a 10-month-old on hygiene.", votes: 30 }], message: "The backwards onesie trick is pure genius. 👕" },

  // --- OUTINGS & SOCIAL ---
  { id: 31, title: "The Chatty Stranger", situation: "A stranger at the store leans way too close to look at the baby. Do you...", options: [{ text: "Politely step back and create distance.", votes: 75 }, { text: "Say 'Oh, we are getting over a cold!' to scare them away.", votes: 25 }], message: "Nothing makes people back up faster than the word 'cold'! 😷" },
  { id: 32, title: "The Grocery Store Meltdown", situation: "Baby is screaming, and your cart is only half full. Do you...", options: [{ text: "Abandon the cart and run for the exit.", votes: 30 }, { text: "Speed run the rest of the aisles while singing to them.", votes: 70 }], message: "Supermarket Sweep: Parenting Edition! 🛒" },
  { id: 33, title: "The Plane Ride", situation: "The seatbelt sign turns on just as the baby starts fussing to walk the aisles. Do you...", options: [{ text: "Bust out the unlimited screen time.", votes: 80 }, { text: "Try to bounce them in your seat while apologizing to neighbors.", votes: 20 }], message: "All rules go out the window on airplanes. Screen time saves lives. ✈️" },
  { id: 34, title: "The Unsolicited Advice", situation: "Your relative tells you you're holding the baby wrong. Do you...", options: [{ text: "Smile, nod, and ignore them.", votes: 65 }, { text: "Hand them the baby and say 'You do it then.'", votes: 35 }], message: "Sometimes a polite smile is the best defense mechanism. 😬" },
  { id: 35, title: "The Stroller Squeak", situation: "You're at a quiet museum and your stroller wheels squeak loudly with every step. Do you...", options: [{ text: "Walk on your tiptoes pushing very slowly.", votes: 40 }, { text: "Power through it like you own the place.", votes: 60 }], message: "Own the squeak! You're just announcing the baby's royal arrival. 👑" },
  { id: 36, title: "The Doctor's Office", situation: "Baby is perfectly fine until the doctor walks into the room, then wails. Do you...", options: [{ text: "Apologize profusely to the doctor.", votes: 45 }, { text: "Say 'They were an angel until you walked in!'", votes: 55 }], message: "White coat syndrome starts early! 🩺" },
  { id: 37, title: "The Playdate Share", situation: "Another baby takes your baby's toy and your baby starts crying. Do you...", options: [{ text: "Let them work it out themselves.", votes: 40 }, { text: "Gently intercept and return the toy.", votes: 60 }], message: "Toddler politics are incredibly complex. 🧸" },
  { id: 38, title: "The Loud Sneeze", situation: "Baby finally falls asleep in the carrier while you're shopping. You have to sneeze. Do you...", options: [{ text: "Pinch your nose and swallow the sneeze.", votes: 75 }, { text: "Let it rip and pray they don't wake up.", votes: 25 }], message: "Swallowing a sneeze hurts, but waking a sleeping baby hurts more. 🤧" },
  { id: 39, title: "The Missing Sock", situation: "You arrive at your destination and realize baby only has one sock on. Do you...", options: [{ text: "Take the other one off so they match.", votes: 85 }, { text: "Leave the one on for warmth.", votes: 15 }], message: "Barefoot is better than lopsided! Where do those socks even go? 🧦" },
  { id: 40, title: "The Overdressed Baby", situation: "You dressed them in a cute winter coat, but it's suddenly 75 degrees outside. Do you...", options: [{ text: "Take it off, leaving them in just a plain undershirt.", votes: 60 }, { text: "Let them wear it unzipped so people can see the cute outfit.", votes: 40 }], message: "Weather apps lie. Plain white onesies for the win! ☀️" },

  // --- HEALTH & MILESTONES ---
  { id: 41, title: "The First Fever", situation: "Baby feels warm. You check the temp and it's 100.1. Do you...", options: [{ text: "Call the pediatrician immediately.", votes: 55 }, { text: "Give Tylenol and monitor closely.", votes: 45 }], message: "The first fever is terrifying! You're doing great. 🌡️" },
  { id: 42, title: "The Syringe Spitoon", situation: "You try to give baby medicine and they spit it right back in your face. Do you...", options: [{ text: "Try again by aiming for the cheek pouch.", votes: 70 }, { text: "Mix it into their milk/puree and hope they don't notice.", votes: 30 }], message: "The 'cheek pouch' method is standard medical protocol for babies! 💉" },
  { id: 43, title: "The Nail Clipping Terror", situation: "It's time to clip those razor-sharp baby nails. Do you...", options: [{ text: "Do it while they are sleeping like a stealth ninja.", votes: 80 }, { text: "Distract with TV and do it while they are awake.", votes: 20 }], message: "Stealth mode is the only safe way to handle those little claws. 💅" },
  { id: 44, title: "The Late Walker", situation: "All the babies in your playgroup are walking, but yours just wants to crawl. Do you...", options: [{ text: "Secretly worry and Google it.", votes: 60 }, { text: "Enjoy the fact that they can't run away yet.", votes: 40 }], message: "They'll run soon enough... enjoy the slow phase while it lasts! 🏃" },
  { id: 45, title: "The First Word", situation: "Baby says 'Dada' first, even though you did 90% of the work. Do you...", options: [{ text: "Act happy but secretly resent it.", votes: 45 }, { text: "Immediately start aggressively repeating 'Mama'.", votes: 55 }], message: "It's okay, 'Mama' is harder to say... supposedly. 😉" },
  { id: 46, title: "The Tumble", situation: "Baby bumps their head on the coffee table. Do you...", options: [{ text: "Gasp loudly and rush over.", votes: 30 }, { text: "Act like nothing happened so they don't cry.", votes: 70 }], message: "If you don't panic, they don't panic! The ultimate parenting hack. 💥" },
  { id: 47, title: "The Mystery Rash", situation: "You notice three red bumps on their arm. Do you...", options: [{ text: "Post a picture to a mom group asking for medical advice.", votes: 25 }, { text: "Watch it for a day to see if it disappears.", votes: 75 }], message: "Babies get random bumps. They usually vanish by tomorrow! 🔍" },
  { id: 48, title: "The Teething Drool", situation: "Baby is teething and soaking through a bib every 10 minutes. Do you...", options: [{ text: "Keep changing the bibs.", votes: 40 }, { text: "Let them wear the wet bib and just wipe their chin.", votes: 60 }], message: "It's a waterfall of drool. You can only fight it so much! 🤤" },
  { id: 49, title: "The Couch Climber", situation: "Baby figures out how to climb the couch but not how to get down. Do you...", options: [{ text: "Stand closely behind them to catch them.", votes: 65 }, { text: "Put pillows on the floor and let them learn.", votes: 35 }], message: "Pillow fortresses: saving babies from gravity since the beginning of time. 🛋️" },
  { id: 50, title: "The Snot Sucker", situation: "Baby has a runny nose. Time to use the NoseFrida. Do you...", options: [{ text: "Pin them down and get it done.", votes: 80 }, { text: "Make the other parent do it.", votes: 20 }], message: "It looks gross, it sounds gross, but man does it work! 🤧" },

  // --- PARTNER & HOME LIFE ---
  { id: 51, title: "The Middle of the Night Poke", situation: "Baby cries at 2 AM. You are both pretending to be asleep. Do you...", options: [{ text: "Kick your partner and say 'Your turn.'", votes: 60 }, { text: "Sigh loudly, get up, and hold it against them tomorrow.", votes: 40 }], message: "The 2 AM game of 'sleep chicken' is fierce. 🐔" },
  { id: 52, title: "The Messy House", situation: "In-laws are coming over in 10 minutes. The house looks like a tornado hit. Do you...", options: [{ text: "Shove everything into one closet and lock the door.", votes: 85 }, { text: "Leave it. They know you have a baby.", votes: 15 }], message: "The 'shove and shut' method has saved many households! 🌪️" },
  { id: 53, title: "The Alone Time", situation: "Partner takes the baby out for an hour so you can relax. Do you...", options: [{ text: "Take a hot bath and read a book.", votes: 20 }, { text: "Frantically clean the kitchen and do laundry.", votes: 80 }], message: "Why is it so hard to just sit down when they leave?! 🧹" },
  { id: 54, title: "The Screen Time Guilt", situation: "You need 15 minutes to cook dinner. Do you...", options: [{ text: "Turn on Ms. Rachel. No guilt.", votes: 90 }, { text: "Try to entertain them with wooden spoons and Tupperware.", votes: 10 }], message: "Ms. Rachel is basically the third parent in this house. 📺" },
  { id: 55, title: "The Baby Monitor", situation: "You are watching TV downstairs. The monitor shows baby staring directly into the camera. Do you...", options: [{ text: "Stare back and whisper 'Go to sleep'.", votes: 50 }, { text: "Hide the monitor because it's creepy.", votes: 50 }], message: "Night vision baby monitors are straight out of a horror movie. 👻" },
  { id: 56, title: "The Outfit Selection", situation: "Your partner dressed the baby and nothing matches. Do you...", options: [{ text: "Change the baby before you leave the house.", votes: 40 }, { text: "Praise their effort and let the baby look ridiculous.", votes: 60 }], message: "Hey, at least they are dressed! Plaid and polka dots is a vibe. 👕" },
  { id: 57, title: "The Unpacked Boxes", situation: "The baby has outgrown their clothes, but the next size up is still in attic boxes. Do you...", options: [{ text: "Go to Target and buy new ones to avoid the attic.", votes: 35 }, { text: "Squeeze them into the tight clothes for one more week.", votes: 65 }], message: "Target runs are just self-care anyway. 🎯" },
  { id: 58, title: "The Silent Car Ride", situation: "Baby is asleep in the back seat. You and your partner want to talk. Do you...", options: [{ text: "Whisper incredibly quietly.", votes: 75 }, { text: "Text each other from the front seats.", votes: 25 }], message: "Front-seat texting: modern romance at its finest! 📱" },
  { id: 59, title: "The Coffee Reheat", situation: "You've microwaved your morning coffee three times already. Do you...", options: [{ text: "Microwave it a fourth time.", votes: 45 }, { text: "Add ice and pretend you wanted iced coffee all along.", votes: 55 }], message: "Iced coffee is just a mom's forgotten hot coffee. 🧊" },
  { id: 60, title: "The End of the Day", situation: "Baby is finally asleep for the night. You are exhausted. Do you...", options: [{ text: "Go straight to bed to catch up on sleep.", votes: 30 }, { text: "Stay up too late scrolling your phone for 'me time'.", votes: 70 }], message: "Revenge bedtime procrastination is real. You deserve the quiet time! 🌙" }
];

// We will use this array to dynamically assign cute icons to the cards!
const iconOptions = [Baby, Heart, Sparkles, Star, Smile];

export default function Wwyd() {
  const [shuffledScenarios, setShuffledScenarios] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isFinished, setIsFinished] = useState(false);

  // The Magic Randomizer! This runs exactly once when the page first loads.
  useEffect(() => {
    // 1. Copy the original array
    let shuffled = [...baseScenarios];
    
    // 2. Fisher-Yates Shuffle (the best way to truly randomize an array)
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    // 3. Save it to state so React can display it
    setShuffledScenarios(shuffled);
  }, []);

  // Show a blank screen for a split second while shuffling prevents errors
  if (shuffledScenarios.length === 0) return null; 

  const handleVote = (index) => {
    setSelectedOption(index);
  };

  const handleNext = () => {
    if (currentIndex + 1 < shuffledScenarios.length) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null); // Reset the vote for the next card
    } else {
      setIsFinished(true);
    }
  };

  // The End Screen
  if (isFinished) {
    return (
      <div style={styles.pageContainer}>
        <div style={styles.card}>
          <div style={styles.iconCircle}>
            <HeartHandshake size={48} color="var(--primary-purple)" />
          </div>
          <h1 style={styles.title}>You are not alone!</h1>
          <p style={styles.situation}>Parenting is messy, beautiful, and sometimes chaotic. Thank you for sharing your honest moments with our community.</p>
          <button 
            onClick={() => {
              // Re-shuffle and start over!
              let reshuffled = [...baseScenarios].sort(() => Math.random() - 0.5);
              setShuffledScenarios(reshuffled);
              setCurrentIndex(0); 
              setIsFinished(false); 
              setSelectedOption(null);
            }} 
            style={styles.actionBtn}>
            Play Again ↺
          </button>
        </div>
      </div>
    );
  }

  // Grab the current scenario from our SHUFFLED list
  const currentScenario = shuffledScenarios[currentIndex];
  const hasVoted = selectedOption !== null;
  
  // Dynamically pick an icon based on the ID so it stays cute and varied
  const IconComponent = iconOptions[currentScenario.id % iconOptions.length];

  return (
    <div style={styles.pageContainer}>
      
      {/* Header */}
      <div style={styles.header}>
        <span style={styles.badge}>Scenario {currentIndex + 1}</span>
        <h1 style={styles.mainTitle}>What Would You Do?</h1>
        <p style={styles.subtitle}>Real parenting moments. Zero judgment.</p>
      </div>

      {/* The Central Interactive Card */}
      <div style={styles.card}>
        <div style={styles.iconCircle}>
          {/* Renders the dynamic icon we chose above */}
          <IconComponent size={48} color="var(--primary-purple)" />
        </div>
        
        <h2 style={styles.title}>{currentScenario.title}</h2>
        <p style={styles.situation}>"{currentScenario.situation}"</p>

        <div style={styles.optionsContainer}>
          {currentScenario.options.map((option, index) => {
            
            // IF THEY HAVEN'T VOTED YET: Show clicky buttons
            if (!hasVoted) {
              return (
                <button 
                  key={index} 
                  style={styles.voteBtn}
                  onClick={() => handleVote(index)}
                >
                  {option.text}
                </button>
              );
            }

            // IF THEY HAVE VOTED: Show the beautiful animated results
            const isSelected = selectedOption === index;
            return (
              <div key={index} style={styles.resultRow}>
                <div style={styles.resultLabel}>
                  <span style={{ 
                    fontWeight: isSelected ? '900' : '600', 
                    color: isSelected ? 'var(--primary-purple)' : 'var(--text-main)' 
                  }}>
                    {option.text} {isSelected && " ✨"}
                  </span>
                  <span style={{ fontWeight: '900', color: 'var(--text-main)' }}>{option.votes}%</span>
                </div>
                
                <div style={styles.barBackground}>
                  <div style={{
                    ...styles.barFill, 
                    width: `${option.votes}%`,
                    backgroundColor: isSelected ? 'var(--primary-purple)' : 'var(--accent-purple)'
                  }}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* The custom encouragement message appears AFTER they vote */}
        {hasVoted && (
          <div style={styles.encouragement}>
            {currentScenario.message}
          </div>
        )}

        {/* The Next Button */}
        {hasVoted && (
          <div style={styles.nextSection}>
            <button onClick={handleNext} style={styles.nextBtn}>
              {currentIndex + 1 === shuffledScenarios.length ? "Finish &rarr;" : "Next Scenario"}
            </button>
          </div>
        )}
      </div>

    </div>
  );
}

// --- Specific Aesthetics ---
const styles = {
  pageContainer: {
    padding: '3rem 5% 6rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '80vh',
  },
  header: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  badge: {
    backgroundColor: 'var(--accent-purple)',
    color: 'var(--primary-purple)',
    padding: '8px 20px',
    borderRadius: '30px',
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontSize: '0.9rem',
    display: 'inline-block',
    marginBottom: '1rem',
  },
  mainTitle: {
    fontSize: '3rem',
    fontWeight: '900',
    color: 'var(--text-main)',
    marginBottom: '0.5rem',
    letterSpacing: '-1px',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: 'var(--text-light)',
  },
  card: {
    backgroundColor: '#ffffff',
    width: '100%',
    maxWidth: '750px',
    padding: '4rem 3rem',
    borderRadius: '40px',
    boxShadow: '0 25px 60px rgba(160, 32, 240, 0.08)',
    textAlign: 'center',
    position: 'relative',
    marginTop: '2rem',
  },
  iconCircle: {
    width: '90px',
    height: '90px',
    backgroundColor: 'var(--accent-purple)',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto 2rem',
    boxShadow: '0 10px 20px rgba(160, 32, 240, 0.1)',
  },
  title: {
    fontSize: '2.2rem',
    fontWeight: '900',
    color: 'var(--primary-purple)',
    marginBottom: '1rem',
  },
  situation: {
    fontSize: '1.3rem',
    color: 'var(--text-main)',
    marginBottom: '3rem',
    lineHeight: '1.6',
    fontStyle: 'italic',
    padding: '0 1rem',
  },
  optionsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.2rem',
  },
  voteBtn: {
    width: '100%',
    padding: '1.4rem',
    fontSize: '1.15rem',
    fontWeight: '800',
    color: 'var(--text-main)',
    backgroundColor: 'var(--bg-cream)',
    border: '2px solid transparent',
    borderRadius: '20px',
    cursor: 'pointer',
    transition: 'transform 0.2s, box-shadow 0.2s',
    textAlign: 'center',
    boxShadow: '0 5px 15px rgba(0,0,0,0.03)',
  },
  resultRow: {
    marginBottom: '1rem',
    textAlign: 'left',
  },
  resultLabel: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '1.1rem',
    marginBottom: '0.8rem',
    padding: '0 0.5rem',
  },
  barBackground: {
    width: '100%',
    height: '16px',
    backgroundColor: '#F0F0F0',
    borderRadius: '20px',
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    borderRadius: '20px',
    transition: 'width 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)', 
  },
  encouragement: {
    marginTop: '2.5rem',
    padding: '1.5rem',
    backgroundColor: 'var(--accent-purple)',
    color: 'var(--primary-purple)',
    borderRadius: '20px',
    textAlign: 'center',
    fontWeight: '800',
    fontSize: '1.1rem',
    lineHeight: '1.5',
    boxShadow: 'inset 0 2px 10px rgba(160, 32, 240, 0.05)',
  },
  nextSection: {
    marginTop: '2rem',
    paddingTop: '2rem',
    borderTop: '2px dashed var(--accent-purple)',
  },
  nextBtn: {
    padding: '1rem 3rem',
    backgroundColor: 'var(--primary-purple)',
    color: '#ffffff',
    border: 'none',
    borderRadius: '30px',
    fontSize: '1.2rem',
    fontWeight: '900',
    cursor: 'pointer',
    transition: 'transform 0.2s',
    boxShadow: '0 8px 20px rgba(160, 32, 240, 0.2)',
  },
  actionBtn: {
    marginTop: '2rem',
    padding: '1rem 2.5rem',
    backgroundColor: 'var(--bg-cream)',
    color: 'var(--primary-purple)',
    border: '2px solid var(--primary-purple)',
    borderRadius: '30px',
    fontSize: '1.1rem',
    fontWeight: '900',
    cursor: 'pointer',
  }
};