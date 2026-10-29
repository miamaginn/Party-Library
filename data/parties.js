/*
  THE PARTY LIBRARY — all site content lives here.

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
            { name: "Candlesticks", note: "I prefer unscented for dinner parties.", link: "https://a.co/d/042HjAmx", store: "Amazon" }
          ]
        },
        {
          title: "Around the Room",
          items: [
            { name: "Mini Pumpkin Pails", note: "Used these to cover the bulbs on our string lights.", link: "https://www.pavilions.com/shop/pd/signature-select-mini-pumpkin-pails-8-ct/971299417", store: "Pavilions" }
          ]
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
            serves: "12 skewers",
            time: "15 minutes",
            ingredients: [
              "24 fresh mozzarella balls (ciliegine)",
              "12 black olives, sliced into rounds",
              "12 cherry tomatoes",
              "Fresh basil leaves",
              "Balsamic glaze",
              "Flaky salt and cracked pepper",
              "12 cocktail skewers"
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
            serves: "24 halves",
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
            serves: "6",
            time: "1 hour 30 minutes",
            ingredients: [
              "1 octopus (about 2 lb), cleaned",
              "1 lemon, halved, plus wedges to serve",
              "2 bay leaves",
              "3 tbsp olive oil",
              "1 tsp smoked paprika",
              "2 cloves garlic, grated",
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
            serves: "6",
            time: "1 hour",
            ingredients: [
              "1 cup pumpkin purée, blotted dry",
              "1 cup ricotta, drained",
              "1 egg",
              "½ cup grated Parmesan, plus more to serve",
              "Pinch of nutmeg",
              "About 2 cups all-purpose flour",
              "½ cup (1 stick) butter",
              "A handful of fresh sage leaves"
            ],
            steps: [
              "Mix the pumpkin, ricotta, egg, Parmesan, nutmeg and a big pinch of salt.",
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
            serves: "6",
            time: "45 minutes",
            ingredients: [
              "8 bone-in, skin-on chicken thighs",
              "⅓ cup maple syrup",
              "¼ cup Dijon mustard",
              "1 tbsp whole-grain mustard",
              "2 cloves garlic, minced",
              "1 tbsp fresh thyme leaves",
              "Salt and pepper"
            ],
            steps: [
              "Heat the oven to 425°F. Season the chicken all over with salt and pepper.",
              "Whisk together the maple syrup, both mustards, garlic and thyme.",
              "Sear the thighs skin side down in an ovenproof skillet until golden, then flip.",
              "Pour the glaze over and roast for 25–30 minutes, basting once, until cooked through.",
              "Rest 5 minutes and spoon the pan sauce over to serve."
            ],
            notes: ""
          }
        },
        {
          id: "flourless-chocolate-cake",
          name: "Flourless Chocolate Cake",
          course: "Dessert",
          subtitle: "",
          hotspot: { left: 34.5, top: 85.4, width: 31.5, height: 3.8 },
          recipe: {
            serves: "10",
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
