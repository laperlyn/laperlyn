import { useState, useRef, useEffect } from 'react';
import { useStardust } from '../context/StardustContext';

export default function Stories() {
  const stories = [
    {
      id: 1,
      title: "The Moon's Lost Hat",
      readTime: "3 Min Read",
      theme: "🌙 Sky & Stars",
      content: (
        <>
          <p>High up in the velvet night sky, the Moon was shivering. "Brrr," said the Moon, wrapping a thin cloud around its glowing shoulders. "I seem to have lost my favorite sleeping hat."</p>
          <p>Down below, a little owl named Pip heard the Moon shivering. Pip flew from his branch, scooped up a soft patch of fog from the meadow, and asked the wind to help him carry it up, up, up.</p>
          <p>The wind blew gently, wrapping the soft fog around the top of the Moon. "Oh, thank you, little owl," the Moon yawned, its glow turning warm and sleepy. "Now I can finally rest."</p>
          <p>And with a happy sigh, the Moon closed its eyes, sending a blanket of quiet starlight over the whole world. Goodnight, Moon. Goodnight, Pip.</p>
        </>
      )
    },
    {
      id: 2,
      title: "The Bear Who Forgot How to Yawn",
      readTime: "4 Min Read",
      theme: "🐻 Forest Animals",
      content: (
        <>
          <p>Barnaby Bear was very tired, but there was a big problem. He had forgotten how to yawn! And every bear knows you cannot fall asleep without a good, big yawn.</p>
          <p>He went to the river and asked the frogs, "Do you know how to yawn?" The frogs just went "Ribbit, ribbit," and blinked their big eyes. That didn't help.</p>
          <p>He went to the old oak tree and asked Mrs. Squirrel. She didn't yawn; she just twitched her nose and fell fast asleep in her nest.</p>
          <p>Finally, Barnaby's mama found him. "Come here, my silly bear," she whispered. She wrapped her big, warm arms around him and let out a giant, rumbling <em>YAAAAWN</em>. It was so contagious that Barnaby opened his mouth, stretched his paws, and let out the biggest yawn in the whole forest. He was asleep before his head hit the moss.</p>
        </>
      )
    },
    {
      id: 3,
      title: "The Little Dream Boat",
      readTime: "2 Min Read",
      theme: "⛵ Ocean & Magic",
      content: (
        <>
          <p>Close your eyes and imagine a tiny boat made of soft, white paper. It is waiting for you at the edge of a quiet, purple sea.</p>
          <p>You step inside, and the boat doesn't need a motor or sails. It is carried gently by the sleepy waves. <em>Swoosh, swish. Swoosh, swish.</em></p>
          <p>Above you, the stars are humming a quiet lullaby. The water rocks you left, then right. Left, then right. You are safe. You are warm. And the little dream boat is taking you straight to the land of happy dreams.</p>
        </>
      )
    },
    {
      id: 4,
      title: "Stella and the Sleeping Stars",
      readTime: "3 Min Read",
      theme: "🌟 Sky & Stars",
      content: (
        <>
          <p>Every night, it was Stella's job to tuck the stars into bed. She flew across the sky with her tiny lantern, tapping each star gently on its pointy tip.</p>
          <p>"Goodnight, Orion," she whispered to the three bright stars in a row. They dimmed to a soft glow. "Goodnight, Dipper," she said to the big scoop of stars. They blinked once and settled down.</p>
          <p>But one little star named Blink refused to sleep. "Not yet! Not yet!" Blink sparkled. Stella sat beside Blink and told him the story of the sky—how it was made of midnight blue velvet, and how every star was a dream someone had dreamed long ago.</p>
          <p>Blink listened so carefully that, halfway through the story, he gave one last little flicker and fell fast asleep. Stella smiled, hung her lantern on the edge of the moon, and flew home to her own cozy cloud.</p>
        </>
      )
    },
    {
      id: 5,
      title: "The Sleepy Little Train",
      readTime: "3 Min Read",
      theme: "🚂 Adventure",
      content: (
        <>
          <p>Chuggy the train had been running all day. He had carried apples to the market town, and letters to the lighthouse, and a birthday cake all the way to Grandmother's house.</p>
          <p>Now the sun was gone and the tracks were quiet. Chuggy rolled slowly into his shed and let out a long, steamy sigh. <em>Psssshhh.</em></p>
          <p>The stationmaster draped a big woolly blanket over Chuggy's engine. "You did very well today," he said softly.</p>
          <p>Chuggy's wheels stopped turning. His lights dimmed. And to the quiet rhythm of crickets outside, the little train dreamed of rolling green hills and sunny days still to come.</p>
        </>
      )
    },
    {
      id: 6,
      title: "The Cloud Who Couldn't Rain",
      readTime: "4 Min Read",
      theme: "☁️ Sky & Stars",
      content: (
        <>
          <p>Nimbus was a small gray cloud who had never once rained. All the other clouds poured down in great whooshing storms, but whenever Nimbus tried, nothing came out.</p>
          <p>"Maybe you are just full of something else," said an old, wise rainbow who lived at the edge of the sky.</p>
          <p>Nimbus thought about this for a long, quiet moment. Then, very gently, a soft mist began to fall from him—not quite rain, but a cool, gentle drizzle that made the flowers tip their heads and drink.</p>
          <p>"You see?" smiled the rainbow. "Not everyone makes a storm. Some of us just make things a little bit softer." Nimbus floated home that night feeling very full indeed—full of pride, and peace, and just the right amount of drizzle.</p>
        </>
      )
    },
    {
      id: 7,
      title: "Princess Pea and the Midnight Garden",
      readTime: "4 Min Read",
      theme: "🌸 Magic & Fantasy",
      content: (
        <>
          <p>Princess Pea could never sleep until she had walked once through her midnight garden. It only appeared after dark—a garden full of flowers that glowed softly, like tiny lamps.</p>
          <p>There were blue moonbells that rang when the breeze touched them, and silver ferns that whispered old stories to anyone who stopped to listen.</p>
          <p>Tonight, Pea stopped at her favorite spot: a small pond where the water was perfectly still, and she could see all the stars reflected in it, as if the sky had come down just to say hello.</p>
          <p>She sat there until her eyes grew heavy. Then she walked back to her bed, carrying the quiet magic of the garden inside her chest, and slept the most beautiful sleep of all.</p>
        </>
      )
    },
    {
      id: 8,
      title: "The Dragon Who Was Afraid of the Dark",
      readTime: "5 Min Read",
      theme: "🐉 Magic & Fantasy",
      content: (
        <>
          <p>Ember the dragon had a big problem. He was afraid of the dark. This was embarrassing, because dragons are supposed to be very fierce and brave.</p>
          <p>"But it's so dark when I close my eyes," Ember told his mother.</p>
          <p>His mother smiled a warm, smoky smile. "When you close your eyes," she said, "do you know what you can see? Everything you love. Our cave. Our family. The meadow where we fly on sunny days."</p>
          <p>Ember tried it. He closed his golden eyes tightly. And instead of darkness, he saw his mother's orange wings. He saw the warm glow of home. He saw tomorrow's sunrise, already waiting for him.</p>
          <p>"Oh," said Ember. "It isn't dark in there at all." And for the first time, the little dragon fell asleep with a smile on his scaly face.</p>
        </>
      )
    },
    {
      id: 9,
      title: "The Bunny Who Collected Quiet",
      readTime: "3 Min Read",
      theme: "🐰 Forest Animals",
      content: (
        <>
          <p>Most bunnies collected things like clover and carrots. But Clover the bunny collected quiet.</p>
          <p>She had a jar full of the quiet from under a mushroom on a rainy afternoon. She had a little pouch of the quiet that settles after a thunderstorm. And her most prized possession: a tiny glass bottle of the quiet from the moment just before snow falls.</p>
          <p>Every night before bed, she opened one jar and let the quiet drift into her burrow. It settled over her soft fur like a blanket. Her ears relaxed. Her nose stopped twitching.</p>
          <p>And very soon, Clover the bunny was the quietest thing in the whole wood.</p>
        </>
      )
    },
    {
      id: 10,
      title: "Captain Finn and the Sleepy Sea",
      readTime: "4 Min Read",
      theme: "⛵ Ocean & Magic",
      content: (
        <>
          <p>Captain Finn had sailed every sea there was—except one. The Sleepy Sea, they called it, because no one who sailed it could keep their eyes open.</p>
          <p>Finn steered his little ship through a mist that smelled like warm milk and honey. The waves barely moved—just a soft rolling, like a giant breathing in and out.</p>
          <p>Somewhere in the middle of the Sleepy Sea, there was an island made entirely of soft sand and rustling palm trees that hummed lullabies. Finn had always wanted to find it.</p>
          <p>He never did reach it. His eyes grew too heavy somewhere around the second wave. He tied down the sails, curled up in his hammock, and the Sleepy Sea carried him gently through the night, right back to where he was supposed to be—safe, and rested, and full of wonderful dreams.</p>
        </>
      )
    },
    {
      id: 11,
      title: "The Little Lighthouse Keeper",
      readTime: "4 Min Read",
      theme: "🌊 Ocean & Magic",
      content: (
        <>
          <p>Every night, Mara climbed to the top of the lighthouse to turn on the light. It was her most important job. Ships at sea needed that light to find their way home.</p>
          <p>Tonight, after she switched on the great beam, Mara stayed a moment and watched it sweep across the water. Round and round it turned, steady and sure, saying to the dark sea: <em>You are not lost. You are not alone. Here is the shore.</em></p>
          <p>She thought that was a wonderful thing to say to anyone.</p>
          <p>She climbed back down the winding stairs, made herself a cup of warm tea, and sat by the window watching her light blink out into the endless night. She fell asleep in her chair, and the light kept turning, and every ship on every dark sea found its way home.</p>
        </>
      )
    },
    {
      id: 12,
      title: "The Snail's Very Slow Race",
      readTime: "3 Min Read",
      theme: "🐌 Forest Animals",
      content: (
        <>
          <p>Simon the snail had entered a race. All the other animals laughed. "You'll never finish!" said the rabbit. "You move too slowly!" said the cricket.</p>
          <p>Simon didn't mind. He set off at his own pace, noticing the deep green of the grass, the sparkle of a dewdrop, a tiny beetle waving hello from a leaf.</p>
          <p>By the time night fell, Simon was only halfway to the finish line. He pulled his shell a little tighter around him and curled up on a soft patch of moss. The stars came out above him.</p>
          <p>"I may not finish first," Simon thought happily, "but I have seen the most." And with the whole sky spread out above him, the slow little snail had the very best sleep of anyone in the race.</p>
        </>
      )
    },
    {
      id: 13,
      title: "Grandma Moon's Quilt",
      readTime: "3 Min Read",
      theme: "🌙 Sky & Stars",
      content: (
        <>
          <p>Up in the sky, Grandma Moon was always busy. Every night she unfolded her great starlight quilt and spread it over the sleeping world.</p>
          <p>Each patch of the quilt was a different color of night—deep blue over the ocean, soft black over the mountains, warm purple over the towns and villages where children lay dreaming.</p>
          <p>She moved slowly and carefully, tucking the edges under the hills and smoothing the wrinkles from the horizon.</p>
          <p>"There," she said when she was done, and she sat back in her rocking chair and smiled down at the sleeping world. "All snug. All safe. All still." And the world breathed in and out beneath her quilt, dreaming its slow, beautiful dreams.</p>
        </>
      )
    },
    {
      id: 14,
      title: "The Wizard's Last Spell",
      readTime: "4 Min Read",
      theme: "✨ Magic & Fantasy",
      content: (
        <>
          <p>Old Wizard Aldric only had one spell left in his wand—he had used all the others turning frogs into princes and princes into slightly better princes.</p>
          <p>He decided to save this last spell for something important. Every night he sat by his fire and thought about what that might be.</p>
          <p>One evening, he noticed a small girl outside his tower, too cold to sleep. Without hesitating, Aldric pointed his wand and whispered the spell. A warm golden light spread over her like sunshine, and she curled up in the grass and fell into a deep, peaceful sleep.</p>
          <p>His wand turned to wood. He didn't mind one bit. He went inside, sat down in his chair, and realized that the best magic was always the simplest kind—a little warmth, right when it's needed. He closed his eyes, and slept better than he had in years.</p>
        </>
      )
    },
    {
      id: 15,
      title: "The Sleepy Bees",
      readTime: "3 Min Read",
      theme: "🐝 Forest Animals",
      content: (
        <>
          <p>When the sun went down, the bees came home. One by one, two by two, they flew back to the hive, their legs dusty with golden pollen, their wings tired from the long day's work.</p>
          <p>The queen bee waited at the door, touching each bee gently on the head as they passed. "Well done," she said. "Well done. Well done."</p>
          <p>Inside the hive it was warm and dark and smelled of honey and wax. The bees nestled into their little hexagon rooms, folded their wings, and hummed their last quiet hum.</p>
          <p><em>Mmmmmmm.</em></p>
          <p>The hive grew still. The meadow grew still. And for one quiet night, even the flowers rested.</p>
        </>
      )
    },
    {
      id: 16,
      title: "The Boy Who Talked to Rivers",
      readTime: "4 Min Read",
      theme: "🌿 Nature & Wonder",
      content: (
        <>
          <p>Every evening, Theo went to the river at the bottom of the garden and told it about his day. The river never said anything back, but it listened—he was sure of it.</p>
          <p>Tonight he told it about the ant he had accidentally stepped on and felt sad about, and the way his best friend had made him laugh so hard his stomach hurt, and the strange shape of a cloud he had seen that looked just like a sleeping elephant.</p>
          <p>The river burbled quietly as he talked, its current running soft and slow in the evening cool.</p>
          <p>When he ran out of things to say, Theo sat for a while and just listened back. The water said nothing, and everything, all at once. He walked home feeling lighter, and fell asleep before he even pulled up his blanket.</p>
        </>
      )
    },
    {
      id: 17,
      title: "The Star That Wanted to Be a Firefly",
      readTime: "3 Min Read",
      theme: "🌟 Sky & Stars",
      content: (
        <>
          <p>High above the world, a star named Lumi was watching the fireflies flicker in the meadow below. "Oh, how I wish I could do that," Lumi sighed. "Blink on. Blink off. Up close. In the grass."</p>
          <p>An old star nearby heard this. "You are a star," she said. "You light the way for ships at sea. You help explorers find north. You are the first thing someone wishes on."</p>
          <p>Lumi thought about all the wishes. All the ships. All the explorers.</p>
          <p>"I suppose," said Lumi, "we are not so different, the fireflies and I. We both just try to be a little light in the dark." And with that, Lumi shone a little brighter, blinked softly three times, and felt perfectly and completely like herself.</p>
        </>
      )
    },
    {
      id: 18,
      title: "The Pillow Fort at the End of the World",
      readTime: "4 Min Read",
      theme: "🏡 Home & Comfort",
      content: (
        <>
          <p>On a very stormy night, three children built the greatest pillow fort that had ever existed. They used six blankets, four sofa cushions, two kitchen chairs, and one very cooperative dog named Biscuit.</p>
          <p>Inside the fort, the storm didn't seem so loud. The thunder was just a rumble. The lightning just a flicker. The rain just a drum on the roof above the roof above the roof.</p>
          <p>They told each other their favorite jokes. They ate crackers. They let Biscuit have the corner spot.</p>
          <p>One by one, they fell asleep inside their walls of soft cushions, listening to the rain playing its slow song on the window, warm and safe and together, which is the best place anyone can ever be.</p>
        </>
      )
    },
    {
      id: 19,
      title: "The Tiny Knight and the Enormous Bed",
      readTime: "3 Min Read",
      theme: "⚔️ Magic & Fantasy",
      content: (
        <>
          <p>Sir Tumble was the smallest knight in the kingdom, no bigger than a pea. Every night he faced his greatest challenge: climbing into bed.</p>
          <p>He swung his grappling hook (a bent hairpin), scaled the bedsheet (it took four minutes and considerable effort), and planted his flag (a toothpick with a bit of red ribbon) on the top of the pillow.</p>
          <p>"The north pillow is conquered," he announced to no one in particular.</p>
          <p>Then he took off his tiny helmet, hung up his tiny sword, and sank into the soft white vastness of the pillow like a boat settling into the sea. Up above him, the ceiling was the whole sky. Down below him, the mattress was the whole earth. And tiny Sir Tumble felt exactly as big as he needed to be.</p>
        </>
      )
    },
    {
      id: 20,
      title: "The Garden at Night",
      readTime: "3 Min Read",
      theme: "🌿 Nature & Wonder",
      content: (
        <>
          <p>When the gardener went inside and the last light went out, something wonderful happened in the garden.</p>
          <p>The roses released their deepest perfume, saving it for the night air. The hedgehog emerged from beneath the rhododendron and trotted his little rounds. The moth arrived, gray and velvet, to visit the white flowers that only bloom after dark.</p>
          <p>The garden at night was a different world—slower, softer, full of small rustlings and tiny movements.</p>
          <p>If you close your eyes right now and breathe in, you can almost smell it: cool soil and night-blooming jasmine, the faint green of damp leaves. The garden is out there right now, living its quiet nighttime life. And everything in it is exactly as it should be.</p>
        </>
      )
    },
    {
      id: 21,
      title: "A Whale's Lullaby",
      readTime: "3 Min Read",
      theme: "🐋 Ocean & Magic",
      content: (
        <>
          <p>Deep in the dark blue ocean, the great whale sang her nightly song. It was so low and long that no one on land could hear it, but every fish and every shrimp and every piece of drifting kelp felt it pass through the water like a wave of peace.</p>
          <p>Her song said: <em>All is well. The sea is deep. You are small and you are safe and the water holds you.</em></p>
          <p>Little fish tucked themselves into the coral. The octopus curled each of its eight arms around itself. Even the sharks, just for a moment, swam more slowly.</p>
          <p>The whale's song floated up, up, up through miles of water and out into the night air, too quiet to hear but still there—pressing gently against the sides of the sleeping world like a warm hand.</p>
        </>
      )
    },
    {
      id: 22,
      title: "The Fox Who Chased His Tail",
      readTime: "3 Min Read",
      theme: "🦊 Forest Animals",
      content: (
        <>
          <p>Rufus the fox had been chasing his tail all day. Left, right, left, right—spin, spin, spin—and not once did he catch it.</p>
          <p>"I will never catch it!" he groaned, flopping down in the tall grass.</p>
          <p>A badger passing by stopped and looked. "Why do you need to catch it? It goes everywhere you go. It is always with you."</p>
          <p>Rufus looked back at his tail. It was, he had to admit, a very fine tail—bushy and warm and orange as a sunset. And it had been with him every single day of his life. He had been so busy chasing it that he had never just... appreciated it.</p>
          <p>He curled up in a circle, nose to tail, making himself into a perfect ring of fox. And for the first time, he felt completely, softly whole.</p>
        </>
      )
    },
    {
      id: 23,
      title: "The Night Library",
      readTime: "4 Min Read",
      theme: "📚 Magic & Fantasy",
      content: (
        <>
          <p>Everyone knew that the library closed at six o'clock. But everyone was wrong.</p>
          <p>At midnight, the books opened themselves. Quietly, gently, they turned their own pages—not to be read, but just to remember. Maps unfolded and folded themselves back up. Atlases sighed contentedly at pictures of mountains they had always wanted to visit.</p>
          <p>The oldest book in the library, a cracked brown volume in the corner, did not open. It was too full. Every word in it was a dream that someone had once dreamed in a library chair, and it didn't want to spill a single one.</p>
          <p>At five minutes to dawn, all the books closed. The library went still. And when the librarian arrived in the morning, everything was exactly as she had left it—except that the whole room smelled, very faintly, of adventure.</p>
        </>
      )
    },
    {
      id: 24,
      title: "The Bear Cub's First Snow",
      readTime: "4 Min Read",
      theme: "❄️ Nature & Wonder",
      content: (
        <>
          <p>It was the first time little Rue had ever seen snow. She pressed her nose against the cold glass and watched the flakes fall—each one different, Mama had said, from every flake that had ever existed.</p>
          <p>She went outside and held out her paw. A snowflake landed on it, perfectly six-sided, and then—before she could study it properly—melted away.</p>
          <p>"Where did it go?" she asked.</p>
          <p>"Back to the sky," said Mama. "Everything good comes back, sooner or later."</p>
          <p>Rue thought about that as she climbed into her warm bed, snow still visible through the window, falling quiet and steady as a lullaby. She fell asleep watching it, dreaming of all the things that come back, and all the first times still waiting for her.</p>
        </>
      )
    },
    {
      id: 25,
      title: "The Island That Only Appears at Night",
      readTime: "4 Min Read",
      theme: "🏝️ Ocean & Magic",
      content: (
        <>
          <p>Sailors called it the Dreaming Isle. It rose out of the sea only after dark, and it was gone before sunrise—just a shimmer on the water, as if it had never been there at all.</p>
          <p>The island was covered in a soft, silver grass that glowed faintly. At the center was a tree whose leaves chimed like little bells in the wind.</p>
          <p>No one had ever stayed on the island until morning. They always fell asleep under the chiming tree and woke up in their own beds, or their own boats, or wherever they were supposed to be.</p>
          <p>No one minded. The island gave them the best sleep they had ever had, and a dream they never quite forgot—something warm and golden, just out of reach, like a song you almost remember.</p>
        </>
      )
    },
    {
      id: 26,
      title: "The Horse Who Ran to the Horizon",
      readTime: "4 Min Read",
      theme: "🐴 Adventure",
      content: (
        <>
          <p>Every evening, the white horse named Silver ran toward the horizon. She ran as fast as her legs would carry her, mane streaming, hooves barely touching the earth.</p>
          <p>But no matter how fast she ran, the horizon was always the same distance away. Always just ahead. Always glowing.</p>
          <p>One night, a small bird landed on her back as she ran. "Why do you chase it?" asked the bird. "You'll never reach it."</p>
          <p>"I know," said Silver, slowing to a walk. "But isn't it wonderful that there is always something beautiful ahead?" The bird thought about this and agreed that it was, very much so. They walked slowly home together in the purple dusk, and Silver slept soundly, dreaming of open fields and forever-glowing horizons.</p>
        </>
      )
    },
    {
      id: 27,
      title: "The Boy Made of Starlight",
      readTime: "3 Min Read",
      theme: "✨ Sky & Stars",
      content: (
        <>
          <p>Did you know that the stuff inside you—the actual atoms—was made inside stars, billions of years ago? Real stars, burning in the real sky.</p>
          <p>So when you look up at a star tonight, that light is coming from something that made you.</p>
          <p>You are, in the truest possible way, made of starlight.</p>
          <p>Think about that as you close your eyes. You are not small. You are ancient and made of fire and have been traveling through the universe for longer than you can possibly imagine. You just happen, right now, to be resting. Even starlight needs to rest.</p>
          <p>Goodnight, star child. The universe is very glad you are here.</p>
        </>
      )
    },
    {
      id: 28,
      title: "The Cat Who Guarded the House",
      readTime: "3 Min Read",
      theme: "🐱 Home & Comfort",
      content: (
        <>
          <p>While everyone slept, Marble the cat was on duty. She walked the windowsills, inspected the corners, investigated the strange smell by the back door (just rain, as it turned out), and checked underneath the sofa twice (nothing, as expected).</p>
          <p>She sat on the highest step and listened to the breathing of the sleeping house—the creak of the roof settling, the tick of the kitchen clock, the soft snoring from the big bedroom.</p>
          <p>All was well. All was as it should be.</p>
          <p>Marble circled three times on her favorite chair cushion, tucked her paws beneath her, and closed her golden eyes. She was still listening, even in sleep—ears swiveling gently at the night sounds. The house was safe. The house was hers. And she would be here when you woke up.</p>
        </>
      )
    },
    {
      id: 29,
      title: "The Thousand-Year Tortoise",
      readTime: "4 Min Read",
      theme: "🐢 Nature & Wonder",
      content: (
        <>
          <p>Old Thomas the tortoise had been alive for one thousand years. He had seen mountains rise and rivers change their course. He had watched forests grow from single seeds.</p>
          <p>Children sometimes came and asked him the secret of his long life.</p>
          <p>"Do everything slowly," he said. "Eat slowly. Walk slowly. Think slowly. And when it is time to sleep"—he pulled his head partway into his shell—"sleep completely."</p>
          <p>"What do you dream about?" asked one little girl.</p>
          <p>Thomas considered this for a long, slow moment. "Everything I have ever seen," he said at last. "All of it, all at once. A thousand years of sky and sea and growing things." He blinked his ancient eyes. "It is a very good dream." And slowly, contentedly, he slept.</p>
        </>
      )
    },
    {
      id: 30,
      title: "The Lantern Festival",
      readTime: "4 Min Read",
      theme: "🏮 Magic & Fantasy",
      content: (
        <>
          <p>Once a year, the people of the valley sent their lanterns into the sky. Each person wrote a wish on their lantern, lit the tiny candle inside, and let it go.</p>
          <p>Little Mei let hers go slowly—she was sorry to say goodbye to it. She had drawn a picture of her family on the side, just in case the sky needed to know whose wish it was carrying.</p>
          <p>The lanterns rose in a great warm cloud, dozens of them, hundreds of them, filling the sky with moving golden light.</p>
          <p>Mei watched until she couldn't tell the lanterns from the stars anymore. Then she couldn't tell the stars from her closing eyes. Then she was asleep, wrapped in her father's coat, her wish already halfway to wherever wishes go.</p>
        </>
      )
    },
    {
      id: 31,
      title: "The River Otter's Perfect Day",
      readTime: "3 Min Read",
      theme: "🦦 Forest Animals",
      content: (
        <>
          <p>Nori the otter had just had the perfect day. She had slid down the muddy bank seventeen times. She had caught three fish. She had floated on her back for an entire hour, watching clouds drift by, her paws folded on her chest.</p>
          <p>Now the sun was going down and the river was turning pink and gold. Nori lay on her favorite rock—warm from the day's sun—and went through her perfect day one more time, like turning the pages of a very good book.</p>
          <p>Seventeen slides. Three fish. One hour of floating. And the clouds. Especially the clouds.</p>
          <p>She tucked her nose under her tail and decided that tomorrow she would try for eighteen slides. But right now, this very moment, with the warm rock beneath her and the pink river beside her, everything was perfect exactly as it was.</p>
        </>
      )
    },
    {
      id: 32,
      title: "The Song the Wind Knows",
      readTime: "3 Min Read",
      theme: "🍃 Nature & Wonder",
      content: (
        <>
          <p>The wind knows a song it has been singing since before anyone was born. You can hear it if you're quiet enough—through the leaves, around the corners of buildings, under the gap in the door.</p>
          <p>It is not a happy song or a sad song. It is older than both of those. It is the sound the world makes when it breathes.</p>
          <p>Tonight, let the wind sing to you through your window. Let it carry away the busy thoughts, the worries, the things you forgot to do. The wind will take them and scatter them so gently that by morning you won't even remember what they were.</p>
          <p>Just breathe in. Breathe out. Listen to the world's oldest song, and let it carry you softly down into sleep.</p>
        </>
      )
    },
    {
      id: 33,
      title: "The Princess and the Pebble",
      readTime: "4 Min Read",
      theme: "👸 Magic & Fantasy",
      content: (
        <>
          <p>People always told the story about the princess and the pea, but they never told the true story, which was about the princess and the pebble.</p>
          <p>The pebble was small and gray and ordinary, found on a path outside the palace. Princess Wren picked it up because it was smooth and fit perfectly in her palm.</p>
          <p>That night, when she couldn't sleep, she held the pebble. It was cool at first, then warm from her hand. She rolled it back and forth between her fingers, thinking about the path it had come from, the rain that had smoothed it, the river that had made it round.</p>
          <p>She was asleep before she reached the part about the mountain it had once been part of, and she never let go of the pebble, not even in her dreams.</p>
        </>
      )
    },
    {
      id: 34,
      title: "The Giant's Tiny Garden",
      readTime: "3 Min Read",
      theme: "🌱 Magic & Fantasy",
      content: (
        <>
          <p>Everyone knew that giants grew enormous things—huge cabbages, enormous oaks, pumpkins the size of houses. But secretly, in the corner of his garden, Olaf the giant grew tiny things.</p>
          <p>A rosebush no bigger than his thumbnail. A pond the size of a puddle. A forest of miniature pines, each one perfect, where the smallest beetles lived.</p>
          <p>Every evening, he lay down on the grass—very, very carefully—and looked at his tiny garden from close up. From here, the little rosebush was as tall as a tree. The puddle pond stretched to the horizon. The beetles moved through their forest like giants of their own.</p>
          <p>Olaf watched until the tiny garden faded in the dusk, then rolled gently onto his back and let the real enormous sky settle over him like a blanket, and slept.</p>
        </>
      )
    },
    {
      id: 35,
      title: "The Letter to Tomorrow",
      readTime: "3 Min Read",
      theme: "📝 Home & Comfort",
      content: (
        <>
          <p>Before bed, Lily always wrote a letter to Tomorrow.</p>
          <p>Tonight she wrote: <em>Dear Tomorrow, please be kind. Please bring some sunshine and maybe waffles. I am leaving you my best ideas, which I will think of right before I fall asleep, so please have them ready when I wake up. Also, if you could arrange for my lost eraser to turn up, that would be very nice. Love, Lily.</em></p>
          <p>She folded the letter carefully and slipped it under her pillow.</p>
          <p>She didn't know for certain that Tomorrow read her letters. But every morning, without fail, there was something good waiting—a sunrise, a kind word, something small and unexpected and lovely. That was evidence enough.</p>
          <p>She closed her eyes and waited peacefully for Tomorrow to begin.</p>
        </>
      )
    },
    {
      id: 36,
      title: "Two Fireflies in a Jar",
      readTime: "3 Min Read",
      theme: "✨ Nature & Wonder",
      content: (
        <>
          <p>Felix and Flo were two fireflies in a jar, and it was the best night of their lives.</p>
          <p>A child had caught them gently in cupped hands and placed them in a jar with holes in the lid so they could breathe. All around them was dark, but every time they lit up, the whole jar glowed green-gold.</p>
          <p>"We are like a little lighthouse," said Felix.</p>
          <p>"We are like a lantern," said Flo.</p>
          <p>"We are like a star," said Felix.</p>
          <p>They blinked at each other happily, on-off, on-off, lighting up the dark, small world of the jar. Later, when the child was asleep, a parent tiptoed in and unscrewed the lid and carried the jar outside, and Felix and Flo rose up into the enormous dark sky. But for a little while, they had been a lighthouse and a lantern and a star, all at once. That felt worth remembering.</p>
        </>
      )
    },
    {
      id: 37,
      title: "The Mountain's Dream",
      readTime: "3 Min Read",
      theme: "⛰️ Nature & Wonder",
      content: (
        <>
          <p>Mountains are very slow dreamers. They sleep for a thousand years at a time, and their dreams take just as long.</p>
          <p>Tonight, the mountain at the edge of town was dreaming of being the sea. In its dream, it was liquid and moving, full of fish and salt and the sound of waves. It had been a sea, once—millions of years ago, before it pushed itself slowly up through the earth into the shape it is now.</p>
          <p>If you press your ear to a mountain, some people say, you can faintly hear the ocean inside it. The memory of what it used to be.</p>
          <p>We are all, in our own ways, made of older things. Close your eyes. Listen. What are you made of? What are you still becoming?</p>
        </>
      )
    },
    {
      id: 38,
      title: "The Robot Who Learned to Rest",
      readTime: "4 Min Read",
      theme: "🤖 Adventure",
      content: (
        <>
          <p>Model 7 had never been switched off before. He had been running for three years, two months, and fourteen days without a break, doing calculations and organizing things and answering questions.</p>
          <p>Then one evening, his inventor sat down beside him. "I'm going to turn you off for a little while," she said. "Just for the night."</p>
          <p>"But my tasks—" Model 7 began.</p>
          <p>"Will be there in the morning," she said. "Rest isn't wasted time. Rest is how you come back better."</p>
          <p>Model 7 thought about this as his systems slowed. He found, to his surprise, that powering down felt something like what humans described as peace. All the whirring stopped. The numbers stopped. There was just a clean, dark quiet. <em>Oh,</em> he thought, as his processes stilled. <em>This is rather nice.</em></p>
        </>
      )
    },
    {
      id: 39,
      title: "The Hedgehog Hotel",
      readTime: "3 Min Read",
      theme: "🦔 Forest Animals",
      content: (
        <>
          <p>At the base of the old stone wall, there was a hotel for hedgehogs. It was made of leaves and twigs and was invisible unless you knew exactly where to look.</p>
          <p>Every autumn, the hedgehogs arrived with their little leaf-suitcases and checked in for the winter. The manager—a very round and sensible hedgehog named Dot—assigned each guest a pile of soft leaves and a warm spot.</p>
          <p>"No snoring," she reminded them, though they always did. "No sharp quills sticking out. And if you wake up in February, go straight back to sleep—it isn't spring yet."</p>
          <p>One by one, the guests curled into their perfect round shapes and grew quiet. The hotel settled. The stone wall kept the wind out. And inside, twenty small hearts beat very slowly through the long and comfortable dark.</p>
        </>
      )
    },
    {
      id: 40,
      title: "The Cartographer of Dreams",
      readTime: "4 Min Read",
      theme: "🗺️ Magic & Fantasy",
      content: (
        <>
          <p>Old Marta drew maps of dreams. Every morning she would wake up and sketch what she had dreamed—the landscapes, the roads, the places that only existed in sleep.</p>
          <p>She had maps of a city made of cake, where it rained warm chocolate on Tuesdays. She had a map of a forest where every tree was a different kind of music. She had seventeen maps of the sea with no shore.</p>
          <p>Children came from across the land to look at her maps and plan their own dream journeys. Before sleep, they would trace a finger along a road and say: <em>Tonight, I will go here.</em></p>
          <p>"The best thing about dream maps," Marta always told them, "is that the territory is always bigger than the map." She folded her latest drawing carefully, blew out her candle, and set off to explore something new.</p>
        </>
      )
    },
    {
      id: 41,
      title: "The Last Firefly of Summer",
      readTime: "3 Min Read",
      theme: "🌿 Nature & Wonder",
      content: (
        <>
          <p>By September, most of the fireflies were gone. But every year, one stubborn firefly was always last—still blinking bravely in the cooling evenings when all the others had gone wherever fireflies go in autumn.</p>
          <p>This year, it was a firefly named Luz. She blinked and blinked in the garden, slow and steady, as the nights grew longer and the grass grew cold beneath her feet.</p>
          <p>"Aren't you lonely?" asked a moth.</p>
          <p>"No," said Luz. "I am reminding everyone that the light comes back." She blinked once more—a long, warm pulse of gold against the dark—and then, at last, she went. The garden was dark. But everyone who had seen her last blink carried a little piece of that light inside them, and that is how firefly light survives the winter.</p>
        </>
      )
    },
    {
      id: 42,
      title: "The Enchanted Hammock",
      readTime: "3 Min Read",
      theme: "✨ Magic & Fantasy",
      content: (
        <>
          <p>Between two apple trees, there hung an enchanted hammock. It was white and soft and swayed gently even when there was no wind.</p>
          <p>Anyone who lay in it felt, immediately and completely, that everything was fine. Not pretend-fine or trying-to-be-fine, but truly fine—the kind of fine that comes from the inside, warm and solid and certain.</p>
          <p>The worries didn't disappear. The hammock didn't magic them away. But somehow, from inside the hammock, the worries looked smaller. More manageable. Things that could be dealt with in the morning, in the daylight, by a rested and ready person.</p>
          <p>Close your eyes. You are in the hammock now. The trees sway gently above you. Everything will be looked after. Everything will keep. You can rest.</p>
        </>
      )
    },
    {
      id: 43,
      title: "The Frog Prince of Pond Number Nine",
      readTime: "4 Min Read",
      theme: "🐸 Forest Animals",
      content: (
        <>
          <p>Ferdinand was not a prince turned into a frog by a curse. He was just a frog—green and bumpy and perfectly happy about it.</p>
          <p>Humans kept coming to kiss him anyway, hoping for a transformation. Ferdinand bore this politely. "Nothing personal," he'd explain after each kiss, "but I don't want to be a prince. I want to be a frog."</p>
          <p>"But surely," they'd say, "you'd prefer a palace?"</p>
          <p>"Have you ever sat on a lily pad in the rain?" Ferdinand would ask. They usually hadn't.</p>
          <p>That evening Ferdinand sat on his favorite lily pad as the sun went down, listening to his pond chorus—seventeen frogs singing from seventeen different spots in the reeds. It was, he felt, a far better sound than anything a palace could offer. He settled into the water, let the pond hold him, and closed his golden eyes.</p>
        </>
      )
    },
    {
      id: 44,
      title: "The Cloud Shepherd",
      readTime: "3 Min Read",
      theme: "☁️ Sky & Stars",
      content: (
        <>
          <p>High above the mountains lived a cloud shepherd named Ciel, whose job it was to guide the clouds to where they were needed.</p>
          <p>The fluffy white ones she sent over picnics, so families could look up and find shapes. The tall gray ones she steered toward dry fields that needed rain. The thin wispy ones—her personal favorites—she left to drift wherever they wanted, because they were old and had earned it.</p>
          <p>At the end of each day, she gathered the leftover clouds into a soft pile at the edge of the sky and lay down on top of them. Below her, the world went about its quiet nighttime business. Above her, only stars.</p>
          <p>Ciel stretched out on her cloud bed and sighed a slow, satisfied sigh. Tomorrow there would be more clouds to move. But right now: stillness, and stars, and the whole wide sky to herself.</p>
        </>
      )
    },
    {
      id: 45,
      title: "Goodnight, City",
      readTime: "4 Min Read",
      theme: "🏙️ Home & Comfort",
      content: (
        <>
          <p>The city never fully sleeps, but it does rest. After midnight, something shifts.</p>
          <p>The buses run less often. Restaurants pull down their shutters. Offices go dark, floor by floor, until only a few windows still glow—a night-shift worker, a parent feeding a baby, a writer on the last page of something important.</p>
          <p>The streets belong to foxes now, and to the rain, and to the distant sound of a train.</p>
          <p>Somewhere in the city, a bakery is beginning—the first smell of bread rising in the dark, getting ready for morning. Somewhere, a street cleaner moves through empty roads, leaving everything clean for the day to come.</p>
          <p>The city is taking care of itself while you sleep. Everything is being made ready. You can let go now. Goodnight, city. Goodnight.</p>
        </>
      )
    },
    {
      id: 46,
      title: "The Astronaut's Bedtime",
      readTime: "4 Min Read",
      theme: "🚀 Adventure",
      content: (
        <>
          <p>Three hundred miles above the earth, in the space station, Commander Yuki was getting ready for sleep. First she strapped herself gently into her sleeping bag, which was attached to the wall so she wouldn't float away.</p>
          <p>She pulled up the tiny porthole cover, but not before taking one last look out at the Earth. From here, it was a blue and white marble—beautiful, peaceful, small enough to hold in both hands.</p>
          <p>She thought about everyone on that blue marble, sleeping in their beds. Billions of them, all breathing, all resting, all making their slow way through the dark toward morning.</p>
          <p>"Goodnight, everyone," she whispered to the Earth, which could not hear her but somehow felt like it did. Then she closed the cover, closed her eyes, and slept while the whole world turned beneath her.</p>
        </>
      )
    },
    {
      id: 47,
      title: "The Panda Who Ate Too Much Bamboo",
      readTime: "3 Min Read",
      theme: "🐼 Forest Animals",
      content: (
        <>
          <p>Bao had eaten bamboo for breakfast, bamboo for lunch, bamboo for a snack, bamboo for dinner, and now—sitting round and stuffed beneath her favorite tree—bamboo for a very late second dinner.</p>
          <p>"Bao," said her mother, not unkindly, "you have eaten rather a lot of bamboo today."</p>
          <p>"I know," said Bao, patting her extremely round tummy. "It was very good bamboo."</p>
          <p>She tried to stand up, thought better of it, and stayed put. The tree was comfortable. The night was warm. A full tummy is, in many ways, a very pleasant thing to have.</p>
          <p>With one paw still resting on a bamboo stalk, in case she wanted more in the morning, Bao closed her eyes and fell into a deep and thoroughly satisfied sleep.</p>
        </>
      )
    },
    {
      id: 48,
      title: "The Counting Sheep School",
      readTime: "4 Min Read",
      theme: "🐑 Magic & Fantasy",
      content: (
        <>
          <p>Not many people know that counting sheep requires years of training. The sheep themselves take it very seriously.</p>
          <p>At the Counting Sheep School on the edge of Slumber Valley, young lambs learned the art of the perfect jump—not too high, not too low, just the right amount of fluffy bounce to help a tired mind let go of the day.</p>
          <p>Professor Wool always said: "The secret is in the rhythm. You must be exactly as boring as a heartbeat and exactly as reliable as breathing."</p>
          <p>The graduating class of sheep lined up that night, ready for their first real assignment. One by one they leapt over the fence, soft and steady, soft and steady. One... two... three...</p>
          <p>The child they were counting for was asleep by fourteen. The sheep considered this a great success and trotted home to their own cozy meadow.</p>
        </>
      )
    },
    {
      id: 49,
      title: "The Mermaid Who Collected Moonlight",
      readTime: "3 Min Read",
      theme: "🧜 Ocean & Magic",
      content: (
        <>
          <p>Marina collected moonlight. She swam to the surface on clear nights and scooped it up in her palms—the shimmering path the moon made across the water—and carried it down, down into the deep.</p>
          <p>Her collection lit up the darkest parts of the sea. Little glowing pools of captured moonlight, here and there among the rocks, where shy fish could come and see without being seen.</p>
          <p>On cloudy nights when there was no moonlight to collect, Marina took out her oldest piece—a fat silver handful of moonlight from ten years ago, still warm—and let it glow between her fingers.</p>
          <p>Some beautiful things last, she had learned. The light you carry inside you does not go out just because the sky is dark. She held the moonlight close and let the current rock her, deep and slow, toward sleep.</p>
        </>
      )
    },
    {
      id: 50,
      title: "The Sleepy Village on the Hill",
      readTime: "3 Min Read",
      theme: "🏘️ Home & Comfort",
      content: (
        <>
          <p>On a hill, above the valley, there was a village so small it didn't appear on most maps. Twenty houses. One bakery. One well. One very large and opinionated cat.</p>
          <p>Every night, the village tucked itself in together. The baker covered her bread dough for the morning rise. The miller stopped his wheel. The children were carried upstairs one by one, sleepy and warm.</p>
          <p>Last of all, old Grandpa Henrik walked from house to house checking that the candles were out. "Goodnight," he said to each dark window. "Goodnight, goodnight, goodnight."</p>
          <p>Then he sat on the well and watched the stars for a while—not because he was waiting for anything, but because some things are worth watching just for the sake of it—and then he went to bed too, and the small village on the hill was perfectly and wholly asleep.</p>
        </>
      )
    },
    {
      id: 51,
      title: "The Underwater Meadow",
      readTime: "3 Min Read",
      theme: "🌊 Ocean & Magic",
      content: (
        <>
          <p>Below the surface of the warm shallow sea, there was a meadow—not of grass, but of sea grass, long and green and swaying in the gentle current.</p>
          <p>Small creatures made their homes here. A seahorse wrapped its tail around a stem and held still, swaying. A tiny crab tucked into the sand beneath the roots. A fish as small as your finger hovered in the green shade, perfectly still.</p>
          <p>From above, the sunlight moved through the water and made everything ripple with shifting golden light—the same light on different shapes, over and over, like the world slowly breathing.</p>
          <p>Picture yourself there, just for a moment. The current holding you. The light moving over you. The soft sound of water instead of thoughts. Breathe in. Breathe out. Stay as long as you like.</p>
        </>
      )
    },
    {
      id: 52,
      title: "The Knight Who Was Afraid of Spiders",
      readTime: "4 Min Read",
      theme: "⚔️ Adventure",
      content: (
        <>
          <p>Sir Gallant had fought a dragon, crossed the Frozen Wastes, and climbed the Glass Tower. But there was one thing that made him shriek like a frightened cat: spiders.</p>
          <p>One night, camping alone in the forest, he found one in his helmet. A very small one. Looking at him.</p>
          <p>He sat across the fire from his helmet and they regarded each other for a long time.</p>
          <p>"I won't bother you," said Sir Gallant, "if you won't bother me."</p>
          <p>The spider, having no opinion on the matter, walked in a small circle and stopped.</p>
          <p>It occurred to Sir Gallant that the spider was also just trying to survive in a very large and complicated world. He put the helmet carefully on a log nearby and fell asleep watching it. In the morning, the spider was gone. Sir Gallant was almost, just slightly, disappointed.</p>
        </>
      )
    },
    {
      id: 53,
      title: "Just Right",
      readTime: "2 Min Read",
      theme: "🌙 Home & Comfort",
      content: (
        <>
          <p>The blanket is just the right weight. Not too heavy, not too light—just enough to feel held.</p>
          <p>The pillow is just the right height. Your head sinks in and stays there, and it feels like the pillow was made exactly for you, which in a way it has been, by all the nights you have slept on it.</p>
          <p>The room is just the right dark. Not too bright, not too black—just enough dark to tell your body: this is the time for rest.</p>
          <p>The sounds are just right too. Whatever you can hear—rain, or quiet, or the soft sounds of the house—they are exactly the right sounds for right now.</p>
          <p>You are in exactly the right place. You are exactly the right you. Everything is, right now, just right. Goodnight.</p>
        </>
      )
    },
    {
      id: 54,
      title: "The Sleepy Little Cloud",
      readTime: "2 Min Read",
      theme: "☁️ Sky & Stars",
      content: (
        <>
          <p>High above the quiet town, a fluffy little cloud named Puffy was trying to stay awake. He wanted to see the sunrise, but his puffy eyes kept drooping.</p>
          <p>The night wind whispered, "Go to sleep, little cloud. The sun will be there tomorrow." But Puffy shook his head. He tried counting the stars, but they were too sparkly and made him dizzy.</p>
          <p>Finally, a gentle nightingale flew by and sang a soft, slow lullaby. Puffy's edges grew soft and heavy. He drifted over a quiet hill, settled like a soft blanket of fog, and fell fast asleep, dreaming of golden morning light.</p>
        </>
      )
    },
    {
      id: 55,
      title: "Oliver's Magic Blanket",
      readTime: "3 Min Read",
      theme: "🛌 Cozy & Safe",
      content: (
        <>
          <p>Oliver had a special blue blanket. It wasn't just soft; it was magic. When Oliver pulled it up to his chin, the room transformed.</p>
          <p>The shadows on the wall weren't monsters; they were friendly dancing elephants. The tick-tock of the clock wasn't just noise; it was the steady heartbeat of a gentle giant guarding his room.</p>
          <p>Oliver took a deep breath. The blanket smelled like lavender and warm milk. He closed his eyes, and the magic blanket wrapped him in a warm hug, keeping him safe until morning.</p>
        </>
      )
    },
    {
      id: 56,
      title: "The Firefly Who Forgot to Blink",
      readTime: "3 Min Read",
      theme: "✨ Bugs & Magic",
      content: (
        <>
          <p>Fiona was a firefly with a very bright light, but she had a problem. She couldn't remember how to turn it off! While all the other fireflies blinked gently, Fiona just glowed like a tiny streetlamp.</p>
          <p>"I'm too bright to sleep," she sighed, resting on a dandelion.</p>
          <p>An old, wise moth fluttered down. "You don't need to turn it off, little one," he said softly. "Just close your eyes, take a deep breath in, and let a slow breath out."</p>
          <p>Fiona tried it. Inhale. Exhale. With every slow breath, her light grew a little softer, a little warmer, until it was just a tiny, sleepy ember. Soon, she was fast asleep.</p>
        </>
      )
    },
    {
      id: 57,
      title: "The Whispering Trees",
      readTime: "4 Min Read",
      theme: "🌳 Forest Animals",
      content: (
        <>
          <p>Deep in the Whispering Woods, the trees tell stories to help the forest animals fall asleep. Tonight, the Old Oak was telling the story of the quiet snow.</p>
          <p>"Imagine," the Old Oak rustled its leaves gently, "tiny, soft white flakes falling from the sky. They don't make a sound. They just drift, drift, drift down to the ground."</p>
          <p>The baby foxes curled up in their den, listening. "The snow covers the noisy crunching leaves," the tree whispered. "It makes the whole world soft and quiet."</p>
          <p>By the time the Old Oak finished the story, not a single animal was awake. The whole forest was breathing softly, together.</p>
        </>
      )
    },
    {
      id: 58,
      title: "A Pocketful of Stardust",
      readTime: "2 Min Read",
      theme: "✨ Sky & Stars",
      content: (
        <>
          <p>Before you go to sleep, reach your hand up high into the air and grab a tiny handful of invisible stardust. Do you have it? Hold it tight.</p>
          <p>Now, sprinkle it softly over your toes. They feel warm and sleepy. Sprinkle a little on your knees. They feel heavy and relaxed.</p>
          <p>Take the last bit of stardust and rub it gently on your forehead. It washes away all the busy thoughts of the day, leaving only quiet, peaceful dreams. Goodnight.</p>
        </>
      )
    },
    {
      id: 59,
      title: "The Turtle's Slow Journey to Bed",
      readTime: "4 Min Read",
      theme: "🐢 Ocean & Magic",
      content: (
        <>
          <p>Timmy the Turtle was never in a rush, especially at bedtime. The ocean was quiet, and the moon was shining on the water.</p>
          <p>First, Timmy stretched his front flippers slowly. One. Two. Then, he stretched his back flippers slowly. Three. Four.</p>
          <p>He swam down to the soft, sandy bottom. He wiggled his shell into the warm sand until it fit just right. The water rocked him gently back and forth. There was nothing to do, nowhere to go, just rest.</p>
        </>
      )
    },
    {
      id: 60,
      title: "The Pajama Express",
      readTime: "3 Min Read",
      theme: "🚂 Travel & Adventure",
      content: (
        <>
          <p>All aboard the Pajama Express! This special train only runs at night, and the tickets are free. All you need are your coziest pajamas.</p>
          <p>The train goes <em>chugga-chugga-shhh, chugga-chugga-shhh</em>. The wheels roll over velvet tracks, making hardly any sound at all.</p>
          <p>Looking out the window, you see fields of sleepy sheep and rivers of warm milk. The train is rocking gently from side to side. Next stop: The Land of Nod. Everyone close your eyes, we are almost there.</p>
        </>
      )
    },
    {
      id: 61,
      title: "The Color of Dreams",
      readTime: "2 Min Read",
      theme: "🎨 Magic & Wonder",
      content: (
        <>
          <p>If sleep was a color, what color would it be? Maybe it's a soft, deep purple, like the sky just after the sun goes down.</p>
          <p>Or maybe it's a gentle silver, like the light of the moon on a quiet lake.</p>
          <p>Whatever color it is, imagine it filling your room right now. It is wrapping around you like a soft ribbon, keeping you warm and carrying you off to dreamland.</p>
        </>
      )
    },
    {
      id: 62,
      title: "The Baker Who Baked Sweet Dreams",
      readTime: "3 Min Read",
      theme: "🧁 Cozy & Safe",
      content: (
        <>
          <p>In a little village, there was a baker who didn't bake bread. He baked sweet dreams. Every night, he stirred a big pot of sleepy thoughts.</p>
          <p>He added a pinch of happy memories, a dash of starlight, and a big spoonful of cozy warmth. He baked them until they smelled like vanilla and cinnamon.</p>
          <p>Then, the dream baker blew the dreams out of his window. They floated on the breeze, through the streets, and right into your room. Breathe in deep... can you smell the sweet dreams?</p>
        </>
      )
    },
    {
      id: 63,
      title: "The Little Star That Could",
      readTime: "2 Min Read",
      theme: "🌟 Sky & Stars",
      content: (
        <>
          <p>There was a tiny star at the very edge of the galaxy. It thought it was too small to be seen from Earth.</p>
          <p>"I'm not big enough to make a difference," the little star whispered.</p>
          <p>But down on Earth, a child looking out their bedroom window saw that exact tiny star. "Make a wish," the child's mother said. The little star twinkled as hard as it could, proud to help a child fall asleep with a happy heart.</p>
        </>
      )
    }
  ];

  const [activeStory, setActiveStory] = useState(null);
  
  // --- NEW LOGIC STARTS HERE ---
  const { addPoints } = useStardust();
  const [isReading, setIsReading] = useState(false);
  const contentRef = useRef(null);

  // Stop reading if they close the story early
  useEffect(() => {
    return () => window.speechSynthesis.cancel();
  }, [activeStory]);

  // The Voice Reader
  const toggleSpeech = () => {
    if (isReading) {
      window.speechSynthesis.cancel();
      setIsReading(false);
    } else {
      if (contentRef.current) {
        // Grab the text from the story
        const textToRead = contentRef.current.innerText;
        const utterance = new SpeechSynthesisUtterance(textToRead);
        utterance.rate = 0.85; // Nice, slow, soothing pace
        utterance.pitch = 1;
        
        utterance.onend = () => setIsReading(false);
        window.speechSynthesis.speak(utterance);
        setIsReading(true);
      }
    }
  };

  // The Goodnight Button - Stops voice, awards points, closes story
  const handleFinishStory = () => {
    window.speechSynthesis.cancel(); 
    setIsReading(false);
    addPoints(20); // 🌟 REWARD 20 STARDUST!
    setActiveStory(null);
    alert("✨ Sweet dreams! You earned 20 Stardust Points! ✨");
  };
  // --- NEW LOGIC ENDS HERE ---

  return (
    <div style={styles.nightContainer}>
      {activeStory ? (
        <div style={styles.readerContainer}>
          <button style={styles.backBtn} onClick={() => setActiveStory(null)}>
            &larr; Back to Library
          </button>
          <h1 style={styles.readerTitle}>{activeStory.title}</h1>
          <div style={styles.readerMeta}>
            <span>{activeStory.theme}</span> • <span>{activeStory.readTime}</span>
          </div>

          {/* THE NEW READ TO ME BUTTON */}
          <button style={styles.readToMeBtn} onClick={toggleSpeech}>
            {isReading ? "⏸️ Stop Reading" : "🔊 Read to Me"}
          </button>

          {/* Notice we added ref={contentRef} here so the reader can find the text */}
          <div style={styles.readerContent} ref={contentRef}>
            {activeStory.content}
          </div>

          {/* Updated button to use our new handleFinishStory function */}
          <button style={styles.finishBtn} onClick={handleFinishStory}>
            Goodnight &rarr;
          </button>
        </div>
      ) : (
        <div style={styles.libraryContainer}>
          <div style={styles.header}>
            <h1 style={styles.libraryTitle}>The Sleepy Library</h1>
            <p style={styles.librarySubtitle}>Pick a magical tale to end the day. Dim the lights, snuggle up, and let's go to dreamland.</p>
          </div>

          <div style={styles.grid}>
            {stories.map((story) => (
              <div
                key={story.id}
                style={styles.storyCard}
                onClick={() => setActiveStory(story)}
              >
                <div style={styles.cardHeader}>
                  <span style={styles.themeTag}>{story.theme}</span>
                  <span style={styles.timeTag}>{story.readTime}</span>
                </div>
                <h3 style={styles.cardTitle}>{story.title}</h3>
                <div style={styles.cardFooter}>
                  <span style={styles.readBtn}>Read Story &rarr;</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  nightContainer: {
    backgroundColor: '#130B1C',
    minHeight: '100vh',
    padding: '4rem 5%',
    color: '#EEDCFF',
    transition: 'background-color 0.5s ease',
  },
  libraryContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '4rem',
  },
  libraryTitle: {
    fontSize: '3.5rem',
    fontWeight: '900',
    color: '#FFFFFF',
    letterSpacing: '-1px',
    marginBottom: '1rem',
  },
  librarySubtitle: {
    fontSize: '1.2rem',
    color: '#B78CFF',
    maxWidth: '600px',
    margin: '0 auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '2rem',
  },
  storyCard: {
    backgroundColor: '#201330',
    borderRadius: '25px',
    padding: '2rem',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    border: '1px solid #36224E',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '220px',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1.5rem',
    fontSize: '0.9rem',
    fontWeight: '800',
  },
  themeTag: {
    color: '#FFD9C6',
  },
  timeTag: {
    color: '#8A8494',
  },
  cardTitle: {
    fontSize: '1.6rem',
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: '1.5rem',
    lineHeight: '1.3',
    flexGrow: 1,
  },
  cardFooter: {
    marginTop: 'auto',
  },
  readBtn: {
    color: '#9B6CFF',
    fontWeight: '900',
    fontSize: '1rem',
  },
  readerContainer: {
    maxWidth: '750px',
    margin: '0 auto',
    backgroundColor: '#1A1025',
    padding: '4rem',
    borderRadius: '40px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
  },
  backBtn: {
    background: 'none',
    border: 'none',
    color: '#B78CFF',
    fontSize: '1.1rem',
    fontWeight: '800',
    cursor: 'pointer',
    marginBottom: '3rem',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
  },
  readerTitle: {
    fontSize: '3rem',
    fontWeight: '900',
    color: '#FFFFFF',
    marginBottom: '1rem',
    lineHeight: '1.1',
  },
  readerMeta: {
    fontSize: '1.1rem',
    color: '#8A8494',
    marginBottom: '3rem',
    fontWeight: '600',
  },
  // --- ADD THIS NEW BLOCK ---
  readToMeBtn: {
    backgroundColor: '#36224E',
    color: '#B78CFF',
    border: '2px solid #5A3A82',
    padding: '0.8rem 1.5rem',
    borderRadius: '20px',
    fontSize: '1.1rem',
    fontWeight: '800',
    cursor: 'pointer',
    marginBottom: '2rem',
    display: 'inline-flex',
    alignItems: 'center',
    transition: 'all 0.2s ease',
  },
  // --------------------------
  readerContent: {
    fontSize: '1.4rem',
    lineHeight: '1.8',
    color: '#EEDCFF',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  finishBtn: {
    marginTop: '4rem',
    width: '100%',
    padding: '1.5rem',
    backgroundColor: '#9B6CFF',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '20px',
    fontSize: '1.3rem',
    fontWeight: '900',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  }
};
