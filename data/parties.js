/*
  THE PARTY LIBRARY — all site content lives here.

  A recipe can link the video it's based on with  video: "https://..."

  To add a new party: copy the whole { ... } block for Hollywood Halloween,
  paste it after it (separated by a comma), and change the details.
  Put that party's images in /images/<slug>/ and point to them below.

  Menu hotspots are percentages of the menu image (left/top = where the box
  starts, width/height = how big it is). Nudge them if a click area is off.
*/
window.PARTIES = [
  {
    slug: "hollywood-halloween",
    title: "A Hollywood Halloween",
    date: "October 2026",
    tagline: "A dinner party for the stars, the starlets, and the restless dead.",

    // How the book looks on the shelf
    spine: { color: "#161412", ink: "#efe6d2", label: "Hollywood Halloween", height: 100 },

    costume: {
      theme: "Celebrity Couples",
      description: "Come as one half of a famous pair, or bring your other half and come as both.",
      // One entry per slide: { src: "images/.../file.jpg", title: "Couple name", caption: "Your note" }
      // For several photos of the same couple on one slide, make src a list: src: ["a.jpg", "b.jpg"]
      images: [
        {
          src: "images/hollywood-halloween/costumes/couple-17.jpg",
          title: "Sonny & Cher",
          caption: "Pictured here at the 1973 Oscars, but there's so many iconic outfits for these two"
        },
        {
          src: ["images/hollywood-halloween/costumes/couple-18.webp", "images/hollywood-halloween/costumes/couple-19.jpg"],
          title: "John Lennon & Yoko Ono",
          caption: "Left is probably their most known fit, but the bed-in with the signs would be gold"
        },
        {
          src: "images/hollywood-halloween/costumes/couple-16.jpg",
          title: "Britney Spears & Justin Timberlake",
          caption: "The Canadian tuxedo made history that night"
        },
        {
          src: ["images/hollywood-halloween/costumes/couple-14.jpg", "images/hollywood-halloween/costumes/couple-15.jpg"],
          title: "Angelina Jolie & Brad Pitt",
          caption: "Can do this dressy or casual - technically these outfits are from a movie, but they were a real life couple"
        },
        {
          src: "images/hollywood-halloween/costumes/couple-13.jpg",
          title: "Pamela Anderson & Tommy Lee",
          caption: "Very punk rock chic, plus who doesn't want to be Pam Anderson"
        },
        {
          src: "images/hollywood-halloween/costumes/couple-12.jpg",
          title: "Eminem & Christina Aguilera",
          caption: "Ok sure, they weren't a couple (they may have beefed), but they had a famous exchange at the 2002 MTV music awards which has inspired tons of couples costumes"
        },
        {
          src: "images/hollywood-halloween/costumes/couple-11.jpg",
          title: "Jordan Belfort & Naomi",
          caption: "Wolf of Wall Street provides lots of fits to work with for these two"
        },
        {
          src: "images/hollywood-halloween/costumes/couple-10.jpg",
          title: "JFK & Jackie Kennedy",
          caption: "A classic, Jackie O had phenomenal style so lots to draw from there"
        },
        {
          src: "images/hollywood-halloween/costumes/couple-09.jpg",
          title: "JFK & Marilyn Monroe",
          caption: "Oop - in case you prefer blondes"
        },
        {
          src: "images/hollywood-halloween/costumes/couple-08.jpg",
          title: "Taylor Swift & Travis Kelce",
          caption: "Can be super easy for a guy if they just want to wear a jersey"
        },
        {
          src: "images/hollywood-halloween/costumes/couple-07.jpg",
          title: "Jay-Z & Beyoncé",
          caption: "These suits from the Ape Shit music video would go so hard"
        },
        {
          src: "images/hollywood-halloween/costumes/couple-06.jpg",
          title: "MGK & Megan Fox",
          caption: "Both have such distinctive looks there's a lot of ways you can do these two"
        },
        {
          src: ["images/hollywood-halloween/costumes/couple-04.webp", "images/hollywood-halloween/costumes/couple-05.webp"],
          title: "Lana Del Rey & Jeffrey Dufrene",
          caption: "I've seen this done a few times online and always love it, I think it goes best if you do Lana in her Lust for Life era and camo / alligator plushy for Jeffrey"
        },
        {
          src: "images/hollywood-halloween/costumes/couple-03.jpg",
          title: "Bradley Cooper & Lady Gaga",
          caption: "Can either do the iconic Oscar's performance or them in A Star is Born"
        },
        {
          src: "images/hollywood-halloween/costumes/couple-02.jpg",
          title: "Kim K & Kanye",
          caption: "They might not be together anymore, but so many recognizable ways to do them"
        },
        {
          src: "images/hollywood-halloween/costumes/couple-01.jpg",
          title: "Tom Brady & Gisele",
          caption: "Once a power couple, always a power couple"
        }
      ]
    },

    decor: {
      intro: "Everything that went into setting the scene, with links where you can find it.",
      // Each section has a title and items. For an item, note, link, store and image are all optional.
      sections: [
        {
          title: "The Tablescape",
          items: [
            { name: "Tablecloth", note: "", link: "https://a.co/d/0iUzLSOA", store: "Amazon" },
            { name: "Pumpkin Name Card Holders", note: "I got a mix of orange and gold.", link: "https://a.co/d/06akYvT2", store: "Amazon" },
            { name: "Candle Holders", note: "I bought these years ago and get so much use out of them. I love these!", link: "https://a.co/d/0cnl3vA7", store: "Amazon" },
            { name: "Candlesticks", note: "I prefer unscented for dinner parties.", link: "https://a.co/d/042HjAmx", store: "Amazon" },
            { name: "Gold Star / Moon Decor", note: "I got these last year for my birthday party and had some left over to adorn the table!", link: "https://www.amazon.com/Decor365-Decorations-Birthday-Graduation-Celestial/dp/B07SXC3QCT", store: "Amazon" }
          ]
        },
        {
          title: "Menus",
          text: "For the menus, I had one-side as classic Halloween movie posters and the other side for the menu. I got a little crafty and printed these out one-sided and glued each page to a piece of construction paper. In hindsight, I would use a printing service and have them done on card stock to save time.",
          // Add the photo later, e.g. src: "images/hollywood-halloween/menus.jpg"
          photo: { src: "", caption: "The printed menus", placeholder: "Photo of the menus coming soon" },
          gallery: {
            id: "posters",
            label: "Browse the movie posters",
            title: "The Movie Posters",
            description: "The classic Halloween movie posters on the back of each menu.",
            images: [
              { src: "images/hollywood-halloween/posters/poster-01.webp", title: "The Texas Chainsaw Massacre" },
              { src: "images/hollywood-halloween/posters/poster-02.webp", title: "A Nightmare on Elm Street" },
              { src: "images/hollywood-halloween/posters/poster-03.webp", title: "The Exorcist" },
              { src: "images/hollywood-halloween/posters/poster-04.webp", title: "Halloween" },
              { src: "images/hollywood-halloween/posters/poster-05.webp", title: "Scream" },
              { src: "images/hollywood-halloween/posters/poster-06.webp", title: "The Shining" },
              { src: "images/hollywood-halloween/posters/poster-07.webp", title: "Poltergeist" },
              { src: "images/hollywood-halloween/posters/poster-08.webp", title: "Frankenstein" }
            ]
          }
        },
        {
          title: "Around the Room",
          items: [
            // Paste the Spotify playlist URL into link when it's ready
            { name: "The Twilight Zone & Halloween Music", note: "The Twilight Zone playing on the TV, with a Halloween playlist over it.", link: "", linkLabel: "Listen on Spotify", pending: "Spotify playlist coming soon" },
            { name: "Mini Pumpkin Pails", note: "Used these to cover the bulbs on our string lights.", link: "https://www.pavilions.com/shop/pd/signature-select-mini-pumpkin-pails-8-ct/971299417", store: "Pavilions" }
          ]
        }
      ]
    },

    prep: {
      intro: "The plan for Friday, October 30: guests at 8:30, ready to greet them by 8:15.",
      // key: true highlights a step
      timeline: [
        {
          title: "Earlier in the Week",
          subtitle: "Sunday – Wednesday",
          steps: [
            { time: "Sun – Wed", what: "Shop for everything on the grocery list. If the octopus is frozen, buy it now and move it to the fridge Wednesday night to thaw slowly." },
            { time: "Wednesday", what: "Make the gnocchi dough, shape it, and freeze on a sheet pan, then bag. Cook straight from frozen; no thawing." }
          ]
        },
        {
          title: "Thursday",
          subtitle: "The day before",
          steps: [
            { time: "Dessert", what: "Bake the flourless chocolate cake, cool completely, then wrap and refrigerate. It’s even better after a day." },
            { time: "Eggs", what: "Hard boil and peel. Make the yolk filling and keep it in a piping or zip-top bag. Store whites and filling separately in the fridge." },
            { time: "Chicken", what: "Mix the maple Dijon marinade and marinate the chicken overnight." },
            { time: "Octopus", what: "Simmer until tender, cool in its liquid, and refrigerate." },
            { time: "Skewers", what: "Cut the cheese, wash and dry the olives, and pick your “eyeball” components." }
          ]
        },
        {
          title: "Friday, Party Day",
          subtitle: "Guests at 8:30 · ready by 8:15",
          steps: [
            { time: "Morning", what: "Pipe the deviled eggs, garnish and cover. Assemble the eyeball skewers. Both go back in the fridge." },
            { time: "Afternoon", what: "Pick the sage leaves, grate the Parmesan, and chill the drinks." },
            { time: "3:30 pm", what: "Set the table: tablecloth, candle holders and candlesticks, pumpkin name cards. Put the pumpkin pails on the string lights. Set out serving dishes and utensils with a sticky note for each dish." },
            { time: "5:00 pm", what: "Reset the kitchen: wash up, then run and empty the dishwasher so it’s ready for after dinner." },
            { time: "5:45 pm", what: "Move the chicken into its roasting dish in a single layer, spoon the marinade over, cover, and return it to the fridge." },
            { time: "6:00 pm", what: "Finish the octopus: sear 2–3 minutes per side, toss with olive oil, lemon and smoked paprika, then plate, cover and refrigerate. It’s lovely served cool or at room temperature." },
            { time: "6:20 pm", what: "Make the brown butter sage sauce in your large skillet and leave it in the pan off the heat. Fill the gnocchi pot with salted water, cover, and leave it on the stove." },
            { time: "6:40 pm", what: "Whip the cream and refrigerate. Stack the dessert plates and forks. Final wipe-down of the kitchen." },
            { time: "7:00 pm", what: "Get ready! 75 minutes, all yours.", key: true },
            { time: "7:50 pm", what: "Two-minute break: take the chicken out of the fridge to take the chill off." },
            { time: "8:15 pm", what: "Ready to receive. Preheat the oven to 425°F. Light the candles, switch on the string lights and music. Set out the skewers, deviled eggs and octopus. Take the cake out of the fridge and turn the gnocchi water on low.", key: true },
            { time: "8:30 pm", what: "Guests arrive. Slide the chicken into the oven (timer: 20 minutes), then appetizers and drinks." },
            { time: "8:50 pm", what: "Check the chicken: once the thickest piece reads 165°F (give it up to 5 more minutes), rest it under foil. Rewarm the brown butter on low and bring the water to a boil." },
            { time: "9:00 pm", what: "Boil the gnocchi from frozen (2–3 minutes, until they float), toss in the brown butter with Parmesan, and serve with the chicken. This is the only real cooking once guests are here." },
            { time: "9:45 pm", what: "Dessert: slice the cake and add whipped cream, berries and a powdered sugar cobweb." }
          ],
          note: "Chicken breasts cook quickly and dry out if they wait, so they go in as guests arrive: 20–25 minutes at 425°F, until the thickest piece reads 165°F. That timing lands them right as the gnocchi is ready."
        }
      ],
      groceryNote: "Sized for 8 guests. Check quantities against your recipes, and your pantry for staples. Tap an item to check it off; checks are saved on this device.",
      groceries: [
        {
          section: "Produce",
          items: ["Fresh sage (2 bunches)", "Fresh thyme or rosemary (1 bunch)", "Garlic (2 heads)", "Lemons (3)", "Cherry tomatoes (1 pint, optional for skewers)", "Fresh chives", "Berries for the cake (2 containers)"]
        },
        {
          section: "Meat & Seafood",
          items: ["Octopus (about 3 lbs, cooked or raw/frozen)", "Boneless, skinless chicken breasts (about 4 lbs, 6 large)", "Salami or pepperoni (optional for skewers)"]
        },
        {
          section: "Dairy & Eggs",
          items: ["Eggs (2 dozen: 12 for deviled, a few for gnocchi, 4 for cake)", "Unsalted butter (1 lb)", "Parmesan (small wedge)","Mini mozzarella balls (2 containers, for the eyeballs)", "Heavy cream (small carton, for whipping)"]
        },
        {
          section: "Pantry",
          items: ["Canned pumpkin purée (15 oz, not pie filling)", "All-purpose flour", "Maple syrup (real)", "Dijon mustard and whole grain mustard", "Mayonnaise", "Apple cider vinegar", "Olive oil", "Bittersweet chocolate (8 oz)", "Unsweetened cocoa powder", "Granulated sugar", "Powdered sugar (for cobweb decor)", "Vanilla extract", "Nutmeg", "Smoked paprika", "Bay leaves", "Kosher salt and black pepper"]
        },
        {
          section: "Skewers & Decor",
          items: ["Green olives stuffed with pimento (jar, for the irises)", "Black olives (can, for the pupils)", "Long toothpicks or skewers"]
        }
      ]
    },

    // A photo from the evening, e.g. "images/hollywood-halloween/evening.jpg"
    photo: { src: "", caption: "A scene from the evening" },

    menu: {
      image: "images/hollywood-halloween/menu.webp",
      alt: "A Hollywood Halloween dinner menu: appetizers, mains and dessert",
      dishes: [
        {
          id: "skewered-eyeballs",
          name: "Skewered Eyeballs",
          course: "Appetizers",
          subtitle: "Caprese skewers with a stare",
          hotspot: { left: 37.5, top: 36.0, width: 25, height: 3.6 },
          recipe: {
            serves: "8 (16 skewers)",
            time: "20 minutes",
            video: "https://www.instagram.com/reel/DdJ_qGgCKaL/",
            ingredients: [
              "32 fresh mozzarella balls (ciliegine)",
              "16 black olives, sliced into rounds",
              "16 cherry tomatoes",
              "Fresh basil leaves",
              "Balsamic glaze",
              "Flaky salt and cracked pepper",
              "16 cocktail skewers"
            ],
            steps: [
              "Press a small olive round into each mozzarella ball to make the pupil.",
              "Thread a tomato, a folded basil leaf and two eyeballs onto each skewer.",
              "Arrange on a platter, drizzle with balsamic glaze and season just before serving."
            ],
            notes: "A dot of balsamic in the centre of each olive makes the eyes look extra bloodshot."
          }
        },
        {
          id: "deviled-eggs",
          name: "Deviled Eggs",
          course: "Appetizers",
          subtitle: "",
          hotspot: { left: 41.5, top: 39.7, width: 18, height: 3.6 },
          recipe: {
            serves: "8 (24 halves, 3 each)",
            time: "30 minutes",
            ingredients: [
              "12 large eggs",
              "½ cup mayonnaise",
              "1 tbsp Dijon mustard",
              "1 tsp white wine vinegar",
              "Salt and pepper",
              "Smoked paprika and chives, to finish"
            ],
            steps: [
              "Boil the eggs for 11 minutes, then cool them in ice water and peel.",
              "Halve lengthwise and pop the yolks into a bowl.",
              "Mash the yolks with mayonnaise, mustard, vinegar, salt and pepper until smooth.",
              "Pipe or spoon the filling back into the whites.",
              "Dust with smoked paprika and scatter with chives."
            ],
            notes: "Make the filling up to a day ahead; fill the whites just before guests arrive."
          }
        },
        {
          id: "octopus-tentacles",
          name: "Octopus Tentacles",
          course: "Appetizers",
          subtitle: "Charred, with lemon and smoked paprika",
          hotspot: { left: 38.5, top: 43.3, width: 23.5, height: 3.6 },
          recipe: {
            serves: "8",
            time: "1 hour 30 minutes",
            ingredients: [
              "About 3 lb octopus (1 large or 2 small), cleaned",
              "1 lemon, halved, plus wedges to serve",
              "3 bay leaves",
              "¼ cup olive oil",
              "1½ tsp smoked paprika",
              "3 cloves garlic, grated",
              "Flaky salt and parsley"
            ],
            steps: [
              "Simmer the octopus with the lemon halves and bay leaves for 45–60 minutes, until a knife slides in easily.",
              "Let it cool in the liquid, then cut off the tentacles.",
              "Toss with olive oil, garlic and smoked paprika.",
              "Char in a very hot pan or on a grill for 2–3 minutes per side.",
              "Finish with salt, parsley and lemon wedges."
            ],
            notes: ""
          }
        },
        {
          id: "pumpkin-gnocchi",
          name: "Pumpkin Gnocchi",
          course: "Mains",
          subtitle: "With brown butter sage sauce",
          hotspot: { left: 34.5, top: 59.4, width: 31, height: 4.8 },
          recipe: {
            serves: "8",
            time: "1 hour 15 minutes",
            ingredients: [
              "1 can (15 oz) pumpkin purée, blotted dry (about 1¾ cups)",
              "1 egg plus 1 yolk",
              "⅔ cup grated Parmesan, plus more to serve",
              "Pinch of nutmeg",
              "About 2½ cups all-purpose flour",
              "10 tbsp (1¼ sticks) butter",
              "A big handful of fresh sage leaves"
            ],
            steps: [
              "Spread the pumpkin on paper towels and press out as much moisture as you can; drier pumpkin means less flour and lighter gnocchi.",
              "Mix the pumpkin, egg, yolk, Parmesan, nutmeg and a big pinch of salt.",
              "Fold in flour a little at a time until you have a soft dough that barely sticks.",
              "Roll into ropes on a floured board and cut into 1-inch pillows.",
              "Boil in salted water; lift them out about 30 seconds after they float.",
              "Meanwhile, melt the butter with the sage until it smells nutty and turns golden brown.",
              "Toss the gnocchi in the brown butter and finish with Parmesan and black pepper."
            ],
            notes: "Freeze the cut gnocchi on a tray and boil straight from frozen to get ahead."
          }
        },
        {
          id: "maple-dijon-chicken",
          name: "Maple Dijon Chicken",
          course: "Mains",
          subtitle: "",
          hotspot: { left: 36.5, top: 67.0, width: 27, height: 3.6 },
          recipe: {
            serves: "8",
            time: "35 minutes, plus marinating overnight",
            video: "https://www.instagram.com/reel/DC9wE3wPmKj/",
            ingredients: [
              "About 4 lb boneless, skinless chicken breasts (6 large)",
              "½ cup maple syrup",
              "⅓ cup Dijon mustard",
              "1½ tbsp whole-grain mustard",
              "3 cloves garlic, minced",
              "1½ tbsp fresh thyme leaves",
              "Salt and pepper"
            ],
            steps: [
              "Whisk together the maple syrup, both mustards, garlic and thyme. Season the chicken with salt and pepper, coat it in the marinade, and refrigerate overnight.",
              "Heat the oven to 425°F. Arrange the breasts in a single layer with a little space between them (a sheet pan or two dishes) and spoon the marinade over.",
              "Roast for 20–25 minutes, basting once, until the thickest piece reads 165°F.",
              "If you'd like more color on top, slide it under the broiler for a minute.",
              "Rest 5–10 minutes under loose foil, slice, and spoon the pan juices over to serve."
            ],
            notes: "Before marinating, pound any thick breasts to an even thickness so they all finish cooking at the same time."
          }
        },
        {
          id: "flourless-chocolate-cake",
          name: "Flourless Chocolate Cake",
          course: "Dessert",
          subtitle: "",
          hotspot: { left: 34.5, top: 85.4, width: 31.5, height: 3.8 },
          recipe: {
            serves: "8 to 10",
            time: "1 hour, plus cooling",
            ingredients: [
              "8 oz bittersweet chocolate, chopped",
              "½ cup (1 stick) butter",
              "¾ cup sugar",
              "4 eggs",
              "½ cup cocoa powder",
              "1 tsp vanilla",
              "Pinch of salt",
              "Whipped cream or berries, to serve"
            ],
            steps: [
              "Heat the oven to 350°F. Butter a 9-inch springform pan and line the base with parchment.",
              "Melt the chocolate and butter together, then whisk in the sugar.",
              "Whisk in the eggs one at a time, then the vanilla and salt.",
              "Sift in the cocoa and fold until smooth.",
              "Bake 25–30 minutes, until the top has a thin crust and the centre barely wobbles.",
              "Cool completely, then dust with cocoa and serve with whipped cream."
            ],
            notes: "Even better made the day before."
          }
        }
      ]
    }
  }
];
