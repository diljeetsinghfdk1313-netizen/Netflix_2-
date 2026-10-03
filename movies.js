/*
  Add and edit movie records here. All movie pages load this one file.
  Use YYYY-MM-DD for releaseDate. Movies with the newest valid releaseDate
  appear first automatically. Put poster files beside the HTML files and use
  only the filename, such as "name.jpg".

  Record format:
  {
    id: "unique-movie-slug",
    title: "Movie title",
    releaseDate: "2026-10-03",
    posterFile: "name.jpg",
    overview: "Short movie description.",
    language: "Hindi",
    genre: "Drama",
    telegramUrl: "https://t.me/your_channel/123"
  }
*/

/*
  Movie catalogue
  Poster files must be placed beside your HTML files.
  posterFile uses the movie title with spaces replaced by underscores.
  Example: "Dhurandhar.jpg"

  IMPORTANT:
  - Confirm release dates before publishing.
  - Add a real Telegram post URL to telegramUrl for each movie.
  - Only include movies and links you are authorized to publish.
*/

window.MOVIE_DATA = [
  // 2025 — Hindi
  {
    id: "dhurandhar",
    title: "Dhurandhar",
    releaseDate: "2025-12-05",
    posterFile: "Dhurandhar.jpg",
    overview: "An undercover operative becomes involved in a dangerous mission.",
    language: "Hindi",
    genre: "Action, Thriller",
    telegramUrl: ""
  },
  {
    id: "tu-meri-main-tera-main-tera-tu-meri",
    title: "Tu Meri Main Tera Main Tera Tu Meri",
    releaseDate: "2025-12-25",
    posterFile: "Tu_Meri_Main_Tera_Main_Tera_Tu_Meri.jpg",
    overview: "A romantic comedy about love and relationships.",
    language: "Hindi",
    genre: "Romance, Comedy",
    telegramUrl: "https://t.me/+H7mFBecJLVE0MTll"
  },
  {
    id: "kis-kisko-pyaar-karoon-2",
    title: "Kis Kisko Pyaar Karoon 2",
    releaseDate: "2025-12-12",
    posterFile: "Kis_Kisko_Pyaar_Karoon_2.jpg",
    overview: "A comedy sequel involving complicated romantic situations.",
    language: "Hindi",
    genre: "Comedy",
    telegramUrl: ""
  },
  {
    id: "raat-akeli-hai-the-bansal-murders",
    title: "Raat Akeli Hai: The Bansal Murders",
    releaseDate: "2025-12-19",
    posterFile: "Raat_Akeli_Hai_The_Bansal_Murders.jpg",
    overview: "An inspector investigates a disturbing series of murders.",
    language: "Hindi",
    genre: "Crime, Mystery, Thriller",
    telegramUrl: ""
  },
  {
    id: "durlabh-prasad-ki-dusri-shaadi",
    title: "Durlabh Prasad Ki Dusri Shaadi",
    releaseDate: "2025-12-19",
    posterFile: "Durlabh_Prasad_Ki_Dusri_Shaadi.jpg",
    overview: "A family comedy centred on a second marriage.",
    language: "Hindi",
    genre: "Comedy, Drama",
    telegramUrl: ""
  },
  {
    id: "saali-mohabbat",
    title: "Saali Mohabbat",
    releaseDate: "2025-12-12",
    posterFile: "Saali_Mohabbat.jpg",
    overview: "A suspense drama exploring relationships and secrets.",
    language: "Hindi",
    genre: "Thriller, Drama",
    telegramUrl: ""
  },
  {
    id: "the-great-shamsuddin-family",
    title: "The Great Shamsuddin Family",
    releaseDate: "2025-12-12",
    posterFile: "The_Great_Shamsuddin_Family.jpg",
    overview: "A family drama about relatives, relationships and everyday conflicts.",
    language: "Hindi",
    genre: "Comedy, Drama",
    telegramUrl: ""
  },
  {
    id: "homebound",
    title: "Homebound",
    releaseDate: "2025-09-26",
    posterFile: "Homebound.jpg",
    overview: "Two childhood friends navigate ambition, identity and social barriers.",
    language: "Hindi",
    genre: "Drama",
    telegramUrl: ""
  },
  {
    id: "the-bengal-files",
    title: "The Bengal Files",
    releaseDate: "2025-09-05",
    posterFile: "The_Bengal_Files.jpg",
    overview: "A political historical drama about events in Bengal.",
    language: "Hindi",
    genre: "Historical, Drama, Thriller",
    telegramUrl: ""
  },
  {
    id: "param-sundari",
    title: "Param Sundari",
    releaseDate: "2025-08-29",
    posterFile: "Param_Sundari.jpg",
    overview: "A romantic story involving two people from different backgrounds.",
    language: "Hindi",
    genre: "Romance, Comedy",
    telegramUrl: ""
  },
  {
    id: "war-2",
    title: "War 2",
    releaseDate: "2025-08-14",
    posterFile: "War_2.jpg",
    overview: "An action spy thriller involving rival agents and a high-stakes mission.",
    language: "Hindi",
    genre: "Action, Spy, Thriller",
    telegramUrl: ""
  },
  {
    id: "coolie",
    title: "Coolie",
    releaseDate: "2025-08-14",
    posterFile: "Coolie.jpg",
    overview: "An action thriller involving a powerful figure and a dangerous network.",
    language: "Hindi",
    genre: "Action, Thriller",
    telegramUrl: ""
  },
  {
    id: "son-of-sardaar-2",
    title: "Son of Sardaar 2",
    releaseDate: "2025-08-01",
    posterFile: "Son_of_Sardaar_2.jpg",
    overview: "A comedy sequel filled with family conflicts and misunderstandings.",
    language: "Hindi",
    genre: "Comedy, Action",
    telegramUrl: ""
  },
  {
    id: "saiyaara",
    title: "Saiyaara",
    releaseDate: "2025-07-18",
    posterFile: "Saiyaara.jpg",
    overview: "A romantic drama about music, love and personal struggles.",
    language: "Hindi",
    genre: "Romance, Drama, Musical",
    telegramUrl: ""
  },
  {
    id: "maharaj",
    title: "Maharaj",
    releaseDate: "2024-06-21",
    posterFile: "Maharaj.jpg",
    overview: "A journalist challenges a powerful religious figure in a historical drama.",
    language: "Hindi",
    genre: "Historical, Drama",
    telegramUrl: ""
  },
  {
    id: "sikandar",
    title: "Sikandar",
    releaseDate: "2025-03-30",
    posterFile: "Sikandar.jpg",
    overview: "An action drama following a man confronting powerful adversaries.",
    language: "Hindi",
    genre: "Action, Drama",
    telegramUrl: ""
  },
  {
    id: "raid-2",
    title: "Raid 2",
    releaseDate: "2025-05-01",
    posterFile: "Raid_2.jpg",
    overview: "An income tax officer investigates a powerful target.",
    language: "Hindi",
    genre: "Crime, Thriller, Drama",
    telegramUrl: ""
  },
  {
    id: "kesari-chapter-2",
    title: "Kesari Chapter 2",
    releaseDate: "2025-04-18",
    posterFile: "Kesari_Chapter_2.jpg",
    overview: "A courtroom drama inspired by the aftermath of the Jallianwala Bagh massacre.",
    language: "Hindi",
    genre: "Historical, Courtroom, Drama",
    telegramUrl: ""
  },
  {
    id: "bhool-chuk-maaf",
    title: "Bhool Chuk Maaf",
    releaseDate: "2025-05-23",
    posterFile: "Bhool_Chuk_Maaf.jpg",
    overview: "A romantic comedy involving a wedding and an unusual predicament.",
    language: "Hindi",
    genre: "Romance, Comedy",
    telegramUrl: ""
  },
  {
    id: "housefull-5",
    title: "Housefull 5",
    releaseDate: "2025-06-06",
    posterFile: "Housefull_5.jpg",
    overview: "A comedy mystery involving wealthy characters and a murder investigation.",
    language: "Hindi",
    genre: "Comedy, Mystery",
    telegramUrl: ""
  },
  {
    id: "metro-in-dino",
    title: "Metro... In Dino",
    releaseDate: "2025-07-04",
    posterFile: "Metro_In_Dino.jpg",
    overview: "Interconnected urban relationships unfold through love and heartbreak.",
    language: "Hindi",
    genre: "Romance, Drama, Musical",
    telegramUrl: ""
  },
  {
    id: "sitaare-zameen-par",
    title: "Sitaare Zameen Par",
    releaseDate: "2025-06-20",
    posterFile: "Sitaare_Zameen_Par.jpg",
    overview: "A basketball coach works with a team of neurodivergent players.",
    language: "Hindi",
    genre: "Comedy, Drama, Sports",
    telegramUrl: ""
  },
  {
    id: "aap-jaisa-koi",
    title: "Aap Jaisa Koi",
    releaseDate: "2025-07-11",
    posterFile: "Aap_Jaisa_Koi.jpg",
    overview: "A relationship drama about love, expectations and personal change.",
    language: "Hindi",
    genre: "Romance, Drama",
    telegramUrl: ""
  },
  {
    id: "maalik",
    title: "Maalik",
    releaseDate: "2025-07-11",
    posterFile: "Maalik.jpg",
    overview: "A crime drama following a man navigating the criminal underworld.",
    language: "Hindi",
    genre: "Crime, Action, Drama",
    telegramUrl: ""
  },
  {
    id: "diplomat",
    title: "The Diplomat",
    releaseDate: "2025-03-14",
    posterFile: "The_Diplomat.jpg",
    overview: "An Indian diplomat becomes involved in a complicated international case.",
    language: "Hindi",
    genre: "Political, Thriller, Drama",
    telegramUrl: ""
  },
  {
    id: "mere-husband-ki-biwi",
    title: "Mere Husband Ki Biwi",
    releaseDate: "2025-02-21",
    posterFile: "Mere_Husband_Ki_Biwi.jpg",
    overview: "A romantic comedy about relationships and unexpected complications.",
    language: "Hindi",
    genre: "Romance, Comedy",
    telegramUrl: ""
  },
  {
    id: "chhaava",
    title: "Chhaava",
    releaseDate: "2025-02-14",
    posterFile: "Chhaava.jpg",
    overview: "A historical action drama about Maratha ruler Sambhaji Maharaj.",
    language: "Hindi",
    genre: "Historical, Action, Drama",
    telegramUrl: ""
  },
  {
    id: "emergency",
    title: "Emergency",
    releaseDate: "2025-01-17",
    posterFile: "Emergency.jpg",
    overview: "A historical political drama centred on India's Emergency period.",
    language: "Hindi",
    genre: "Biography, Historical, Political",
    telegramUrl: ""
  },
  {
    id: "sky-force",
    title: "Sky Force",
    releaseDate: "2025-01-24",
    posterFile: "Sky_Force.jpg",
    overview: "A military action drama inspired by an Indian Air Force operation.",
    language: "Hindi",
    genre: "Action, War, Drama",
    telegramUrl: ""
  },
  {
    id: "deva",
    title: "Deva",
    releaseDate: "2025-01-31",
    posterFile: "Deva.jpg",
    overview: "A police officer investigates a complicated case while confronting his past.",
    language: "Hindi",
    genre: "Action, Crime, Thriller",
    telegramUrl: ""
  },
  {
    id: "mere-naam-tu",
    title: "Mere Naam Tu",
    releaseDate: "2025-01-01",
    posterFile: "Mere_Naam_Tu.jpg",
    overview: "Placeholder record; verify the title and release date before publishing.",
    language: "Hindi",
    genre: "Drama",
    telegramUrl: ""
  },

  // 2025 — Punjabi
  {
    id: "sardaar-ji-3",
    title: "Sardaar Ji 3",
    releaseDate: "2025-06-27",
    posterFile: "Sardaar_Ji_3.jpg",
    overview: "A fantasy comedy adventure featuring a larger-than-life ghost hunter.",
    language: "Punjabi",
    genre: "Comedy, Fantasy",
    telegramUrl: ""
  },
  {
    id: "saunkan-saunkanay-2",
    title: "Saunkan Saunkanay 2",
    releaseDate: "2025-05-30",
    posterFile: "Saunkan_Saunkanay_2.jpg",
    overview: "A comedy sequel built around family relationships and misunderstandings.",
    language: "Punjabi",
    genre: "Comedy, Family",
    telegramUrl: ""
  },
  {
    id: "akaal",
    title: "Akaal",
    releaseDate: "2025-04-10",
    posterFile: "Akaal.jpg",
    overview: "A period action drama set against a historical Punjabi backdrop.",
    language: "Punjabi",
    genre: "Action, Historical, Drama",
    telegramUrl: ""
  },
  {
    id: "ardab-mutiyaran-2",
    title: "Ardab Mutiyaran 2",
    releaseDate: "2025-01-01",
    posterFile: "Ardab_Mutiyaran_2.jpg",
    overview: "Placeholder record; verify the title and release date before publishing.",
    language: "Punjabi",
    genre: "Comedy, Drama",
    telegramUrl: ""
  },
  {
    id: "jatt-and-juliet-3",
    title: "Jatt & Juliet 3",
    releaseDate: "2024-06-27",
    posterFile: "Jatt_and_Juliet_3.jpg",
    overview: "A romantic comedy following two police officers through an eventful assignment.",
    language: "Punjabi",
    genre: "Romance, Comedy",
    telegramUrl: ""
  },
  {
    id: "carry-on-jatta-3",
    title: "Carry on Jatta 3",
    releaseDate: "2023-06-29",
    posterFile: "Carry_on_Jatta_3.jpg",
    overview: "A comedy of errors driven by mistaken identities and family complications.",
    language: "Punjabi",
    genre: "Comedy",
    telegramUrl: ""
  },
  {
    id: "shinda-shinda-no-papa",
    title: "Shinda Shinda No Papa",
    releaseDate: "2024-05-10",
    posterFile: "Shinda_Shinda_No_Papa.jpg",
    overview: "A father-son comedy about parenting, family and growing up.",
    language: "Punjabi",
    genre: "Comedy, Family",
    telegramUrl: ""
  },
  {
    id: "jatt-nuu-chudail-takri",
    title: "Jatt Nuu Chudail Takri",
    releaseDate: "2024-03-15",
    posterFile: "Jatt_Nuu_Chudail_Takri.jpg",
    overview: "A supernatural comedy involving a man and a mysterious woman.",
    language: "Punjabi",
    genre: "Comedy, Horror",
    telegramUrl: ""
  },
  {
    id: "kudi-haryane-val-di",
    title: "Kudi Haryane Val Di",
    releaseDate: "2024-06-14",
    posterFile: "Kudi_Haryane_Val_Di.jpg",
    overview: "A romantic comedy crossing cultural and regional boundaries.",
    language: "Punjabi",
    genre: "Romance, Comedy",
    telegramUrl: ""
  },
  {
    id: "warning-2",
    title: "Warning 2",
    releaseDate: "2024-02-02",
    posterFile: "Warning_2.jpg",
    overview: "An action crime thriller involving rivalries and dangerous confrontations.",
    language: "Punjabi",
    genre: "Action, Crime, Thriller",
    telegramUrl: ""
  },

  // 2025 — English
  {
    id: "avatar-fire-and-ash",
    title: "Avatar: Fire and Ash",
    releaseDate: "2025-12-19",
    posterFile: "Avatar_Fire_and_Ash.jpg",
    overview: "The Sully family faces new challenges on Pandora.",
    language: "English",
    genre: "Science Fiction, Adventure, Action",
    telegramUrl: ""
  },
  {
    id: "anaconda-2025",
    title: "Anaconda",
    releaseDate: "2025-12-25",
    posterFile: "Anaconda.jpg",
    overview: "An adventure involving a dangerous giant snake.",
    language: "English",
    genre: "Adventure, Comedy, Thriller",
    telegramUrl: ""
  },
  {
    id: "wake-up-dead-man",
    title: "Wake Up Dead Man: A Knives Out Mystery",
    releaseDate: "2025-12-12",
    posterFile: "Wake_Up_Dead_Man_A_Knives_Out_Mystery.jpg",
    overview: "Detective Benoit Blanc investigates another elaborate mystery.",
    language: "English",
    genre: "Mystery, Crime, Comedy",
    telegramUrl: ""
  },
  {
    id: "five-nights-at-freddys-2",
    title: "Five Nights at Freddy's 2",
    releaseDate: "2025-12-05",
    posterFile: "Five_Nights_at_Freddys_2.jpg",
    overview: "A horror sequel returning to the world of haunted animatronics.",
    language: "English",
    genre: "Horror, Thriller",
    telegramUrl: ""
  },
  {
    id: "wicked-for-good",
    title: "Wicked: For Good",
    releaseDate: "2025-11-21",
    posterFile: "Wicked_For_Good.jpg",
    overview: "The story of Elphaba and Glinda continues in the land of Oz.",
    language: "English",
    genre: "Fantasy, Musical, Drama",
    telegramUrl: ""
  },
  {
    id: "now-you-see-me-now-you-dont",
    title: "Now You See Me: Now You Don't",
    releaseDate: "2025-11-14",
    posterFile: "Now_You_See_Me_Now_You_Dont.jpg",
    overview: "Illusionists reunite for a high-stakes heist.",
    language: "English",
    genre: "Crime, Thriller, Comedy",
    telegramUrl: ""
  },
  {
    id: "predator-badlands",
    title: "Predator: Badlands",
    releaseDate: "2025-11-07",
    posterFile: "Predator_Badlands.jpg",
    overview: "A young Predator faces a dangerous test on a remote world.",
    language: "English",
    genre: "Science Fiction, Action",
    telegramUrl: ""
  },
  {
    id: "black-phone-2",
    title: "Black Phone 2",
    releaseDate: "2025-10-17",
    posterFile: "Black_Phone_2.jpg",
    overview: "A supernatural horror story continues after the original film.",
    language: "English",
    genre: "Horror, Thriller",
    telegramUrl: ""
  },
  {
    id: "tron-ares",
    title: "Tron: Ares",
    releaseDate: "2025-10-10",
    posterFile: "Tron_Ares.jpg",
    overview: "A sophisticated digital program enters the human world.",
    language: "English",
    genre: "Science Fiction, Action",
    telegramUrl: ""
  },
  {
    id: "the-conjuring-last-rites",
    title: "The Conjuring: Last Rites",
    releaseDate: "2025-09-05",
    posterFile: "The_Conjuring_Last_Rites.jpg",
    overview: "Paranormal investigators confront another disturbing case.",
    language: "English",
    genre: "Horror, Mystery",
    telegramUrl: ""
  },
  {
    id: "nobody-2",
    title: "Nobody 2",
    releaseDate: "2025-08-15",
    posterFile: "Nobody_2.jpg",
    overview: "A former assassin is drawn into another violent confrontation.",
    language: "English",
    genre: "Action, Thriller",
    telegramUrl: ""
  },
  {
    id: "freakier-friday",
    title: "Freakier Friday",
    releaseDate: "2025-08-08",
    posterFile: "Freakier_Friday.jpg",
    overview: "A family comedy revisiting a body-swapping predicament.",
    language: "English",
    genre: "Comedy, Fantasy, Family",
    telegramUrl: ""
  },
  {
    id: "fantastic-four-first-steps",
    title: "The Fantastic Four: First Steps",
    releaseDate: "2025-07-25",
    posterFile: "The_Fantastic_Four_First_Steps.jpg",
    overview: "Marvel's superhero family faces a threat to their world.",
    language: "English",
    genre: "Superhero, Action, Science Fiction",
    telegramUrl: ""
  },
  {
    id: "jurassic-world-rebirth",
    title: "Jurassic World Rebirth",
    releaseDate: "2025-07-02",
    posterFile: "Jurassic_World_Rebirth.jpg",
    overview: "An expedition ventures into a dangerous dinosaur habitat.",
    language: "English",
    genre: "Adventure, Science Fiction, Action",
    telegramUrl: ""
  },
  {
    id: "superman-2025",
    title: "Superman",
    releaseDate: "2025-07-11",
    posterFile: "Superman.jpg",
    overview: "Clark Kent balances his Kryptonian heritage with life on Earth.",
    language: "English",
    genre: "Superhero, Action, Adventure",
    telegramUrl: ""
  },
  {
    id: "f1-the-movie",
    title: "F1: The Movie",
    releaseDate: "2025-06-27",
    posterFile: "F1_The_Movie.jpg",
    overview: "A veteran racing driver returns to Formula One to help a struggling team.",
    language: "English",
    genre: "Sports, Drama, Action",
    telegramUrl: ""
  },
  {
    id: "how-to-train-your-dragon-2025",
    title: "How to Train Your Dragon",
    releaseDate: "2025-06-13",
    posterFile: "How_to_Train_Your_Dragon.jpg",
    overview: "A young Viking forms an unexpected bond with a dragon.",
    language: "English",
    genre: "Fantasy, Adventure, Family",
    telegramUrl: ""
  },
  {
    id: "mission-impossible-final-reckoning",
    title: "Mission: Impossible – The Final Reckoning",
    releaseDate: "2025-05-23",
    posterFile: "Mission_Impossible_The_Final_Reckoning.jpg",
    overview: "Ethan Hunt faces a global threat in another high-risk mission.",
    language: "English",
    genre: "Action, Spy, Thriller",
    telegramUrl: ""
  },
  {
    id: "lilo-and-stitch-2025",
    title: "Lilo & Stitch",
    releaseDate: "2025-05-23",
    posterFile: "Lilo_and_Stitch.jpg",
    overview: "A Hawaiian girl befriends a mischievous alien.",
    language: "English",
    genre: "Family, Comedy, Science Fiction",
    telegramUrl: ""
  },
  {
    id: "final-destination-bloodlines",
    title: "Final Destination Bloodlines",
    releaseDate: "2025-05-16",
    posterFile: "Final_Destination_Bloodlines.jpg",
    overview: "A family tries to escape a terrifying chain of fatal events.",
    language: "English",
    genre: "Horror, Thriller",
    telegramUrl: ""
  },
  {
    id: "thunderbolts",
    title: "Thunderbolts*",
    releaseDate: "2025-05-02",
    posterFile: "Thunderbolts.jpg",
    overview: "A group of antiheroes undertake a dangerous mission.",
    language: "English",
    genre: "Superhero, Action, Adventure",
    telegramUrl: ""
  },
  {
    id: "sinners",
    title: "Sinners",
    releaseDate: "2025-04-18",
    posterFile: "Sinners.jpg",
    overview: "Twin brothers return home and encounter a sinister supernatural force.",
    language: "English",
    genre: "Horror, Thriller, Drama",
    telegramUrl: ""
  },
  {
    id: "a-minecraft-movie",
    title: "A Minecraft Movie",
    releaseDate: "2025-04-04",
    posterFile: "A_Minecraft_Movie.jpg",
    overview: "A group of unlikely heroes enters a block-shaped fantasy world.",
    language: "English",
    genre: "Fantasy, Adventure, Comedy",
    telegramUrl: ""
  },
  {
    id: "snow-white-2025",
    title: "Snow White",
    releaseDate: "2025-03-21",
    posterFile: "Snow_White.jpg",
    overview: "A live-action musical reimagining of the classic fairy tale.",
    language: "English",
    genre: "Fantasy, Musical, Family",
    telegramUrl: ""
  },
  {
    id: "captain-america-brave-new-world",
    title: "Captain America: Brave New World",
    releaseDate: "2025-02-14",
    posterFile: "Captain_America_Brave_New_World.jpg",
    overview: "Sam Wilson navigates a political crisis after becoming Captain America.",
    language: "English",
    genre: "Superhero, Action, Thriller",
    telegramUrl: ""
  },
  {
    id: "paddington-in-peru",
    title: "Paddington in Peru",
    releaseDate: "2025-02-14",
    posterFile: "Paddington_in_Peru.jpg",
    overview: "Paddington travels to Peru on an adventure with the Brown family.",
    language: "English",
    genre: "Adventure, Comedy, Family",
    telegramUrl: ""
  },
  {
    id: "the-monkey",
    title: "The Monkey",
    releaseDate: "2025-02-21",
    posterFile: "The_Monkey.jpg",
    overview: "A mysterious toy monkey triggers a series of horrific events.",
    language: "English",
    genre: "Horror, Comedy",
    telegramUrl: ""
  },
  {
    id: "wolf-man",
    title: "Wolf Man",
    releaseDate: "2025-01-17",
    posterFile: "Wolf_Man.jpg",
    overview: "A family faces a terrifying transformation and a growing threat.",
    language: "English",
    genre: "Horror, Thriller",
    telegramUrl: ""
  },
  {
    id: "sonic-the-hedgehog-3",
    title: "Sonic the Hedgehog 3",
    releaseDate: "2024-12-20",
    posterFile: "Sonic_the_Hedgehog_3.jpg",
    overview: "Sonic and his friends confront a powerful new rival.",
    language: "English",
    genre: "Action, Adventure, Comedy",
    telegramUrl: ""
  },
  {
    id: "mufasa-the-lion-king",
    title: "Mufasa: The Lion King",
    releaseDate: "2024-12-20",
    posterFile: "Mufasa_The_Lion_King.jpg",
    overview: "The origin story of Mufasa and his rise to kingship.",
    language: "English",
    genre: "Adventure, Drama, Family",
    telegramUrl: ""
  },

  // 2024 — Hindi
  {
    id: "pushpa-2-the-rule",
    title: "Pushpa 2: The Rule",
    releaseDate: "2024-12-05",
    posterFile: "Pushpa_2_The_Rule.jpg",
    overview: "Pushpa faces new rivals as his influence expands.",
    language: "Hindi",
    genre: "Action, Crime, Drama",
    telegramUrl: ""
  },
  {
    id: "baby-john",
    title: "Baby John",
    releaseDate: "2024-12-25",
    posterFile: "Baby_John.jpg",
    overview: "A former police officer tries to protect his daughter from dangerous enemies.",
    language: "Hindi",
    genre: "Action, Thriller",
    telegramUrl: ""
  },
  {
    id: "singham-again",
    title: "Singham Again",
    releaseDate: "2024-11-01",
    posterFile: "Singham_Again.jpg",
    overview: "A police officer and his allies unite against a powerful adversary.",
    language: "Hindi",
    genre: "Action, Crime",
    telegramUrl: ""
  },
  {
    id: "bhool-bhulaiyaa-3",
    title: "Bhool Bhulaiyaa 3",
    releaseDate: "2024-11-01",
    posterFile: "Bhool_Bhulaiyaa_3.jpg",
    overview: "A supernatural comedy involving mysteries, ghosts and mistaken identities.",
    language: "Hindi",
    genre: "Horror, Comedy",
    telegramUrl: ""
  },
  {
    id: "vicky-vidya-ka-woh-wala-video",
    title: "Vicky Vidya Ka Woh Wala Video",
    releaseDate: "2024-10-11",
    posterFile: "Vicky_Vidya_Ka_Woh_Wala_Video.jpg",
    overview: "A couple's private recording goes missing, triggering comic chaos.",
    language: "Hindi",
    genre: "Comedy, Drama",
    telegramUrl: ""
  },
  {
    id: "jigra",
    title: "Jigra",
    releaseDate: "2024-10-11",
    posterFile: "Jigra.jpg",
    overview: "A determined woman attempts to rescue her brother from imprisonment.",
    language: "Hindi",
    genre: "Action, Thriller, Drama",
    telegramUrl: ""
  },
  {
    id: "stree-2",
    title: "Stree 2",
    releaseDate: "2024-08-15",
    posterFile: "Stree_2.jpg",
    overview: "The people of Chanderi face another supernatural threat.",
    language: "Hindi",
    genre: "Horror, Comedy",
    telegramUrl: ""
  },
  {
    id: "khel-khel-mein",
    title: "Khel Khel Mein",
    releaseDate: "2024-08-15",
    posterFile: "Khel_Khel_Mein.jpg",
    overview: "Friends discover unexpected secrets during a dinner gathering.",
    language: "Hindi",
    genre: "Comedy, Drama",
    telegramUrl: ""
  },
  {
    id: "veda",
    title: "Vedaa",
    releaseDate: "2024-08-15",
    posterFile: "Vedaa.jpg",
    overview: "A young woman fights injustice with help from a former soldier.",
    language: "Hindi",
    genre: "Action, Drama",
    telegramUrl: ""
  },
  {
    id: "kill",
    title: "Kill",
    releaseDate: "2024-07-05",
    posterFile: "Kill.jpg",
    overview: "An army commando battles armed attackers aboard a train.",
    language: "Hindi",
    genre: "Action, Thriller",
    telegramUrl: ""
  },
  {
    id: "bad-newz",
    title: "Bad Newz",
    releaseDate: "2024-07-19",
    posterFile: "Bad_Newz.jpg",
    overview: "A comedy about an unusual pregnancy and complicated relationships.",
    language: "Hindi",
    genre: "Comedy, Romance",
    telegramUrl: ""
  },
  {
    id: "sarfira",
    title: "Sarfira",
    releaseDate: "2024-07-12",
    posterFile: "Sarfira.jpg",
    overview: "An entrepreneur pursues an ambitious plan to make air travel affordable.",
    language: "Hindi",
    genre: "Drama, Biography",
    telegramUrl: ""
  },
  {
    id: "chandu-champion",
    title: "Chandu Champion",
    releaseDate: "2024-06-14",
    posterFile: "Chandu_Champion.jpg",
    overview: "A sports drama inspired by the life of an Indian athlete.",
    language: "Hindi",
    genre: "Sports, Biography, Drama",
    telegramUrl: ""
  },
  {
    id: "munjya",
    title: "Munjya",
    releaseDate: "2024-06-07",
    posterFile: "Munjya.jpg",
    overview: "A young man encounters a mischievous supernatural creature.",
    language: "Hindi",
    genre: "Horror, Comedy",
    telegramUrl: ""
  },
  {
    id: "mr-and-mrs-mahi",
    title: "Mr. & Mrs. Mahi",
    releaseDate: "2024-05-31",
    posterFile: "Mr_and_Mrs_Mahi.jpg",
    overview: "A couple's relationship evolves through their shared love of cricket.",
    language: "Hindi",
    genre: "Sports, Romance, Drama",
    telegramUrl: ""
  },
  {
    id: "crew",
    title: "Crew",
    releaseDate: "2024-03-29",
    posterFile: "Crew.jpg",
    overview: "Three airline crew members become involved in a risky scheme.",
    language: "Hindi",
    genre: "Comedy, Crime",
    telegramUrl: ""
  },
  {
    id: "laapata-ladies",
    title: "Laapataa Ladies",
    releaseDate: "2024-03-01",
    posterFile: "Laapataa_Ladies.jpg",
    overview: "Two brides are accidentally switched during a train journey.",
    language: "Hindi",
    genre: "Comedy, Drama",
    telegramUrl: ""
  },
  {
    id: "article-370",
    title: "Article 370",
    releaseDate: "2024-02-23",
    posterFile: "Article_370.jpg",
    overview: "A political action drama about events surrounding the abrogation of Article 370.",
    language: "Hindi",
    genre: "Political, Action, Thriller",
    telegramUrl: ""
  },
  {
    id: "teri-baaton-mein-aisa-uljha-jiya",
    title: "Teri Baaton Mein Aisa Uljha Jiya",
    releaseDate: "2024-02-09",
    posterFile: "Teri_Baaton_Mein_Aisa_Uljha_Jiya.jpg",
    overview: "A robotics engineer falls for a highly advanced humanoid robot.",
    language: "Hindi",
    genre: "Romance, Science Fiction, Comedy",
    telegramUrl: ""
  },
  {
    id: "fighter",
    title: "Fighter",
    releaseDate: "2024-01-25",
    posterFile: "Fighter.jpg",
    overview: "Indian Air Force pilots take on a dangerous aerial mission.",
    language: "Hindi",
    genre: "Action, Drama",
    telegramUrl: ""
  },

  // 2024 — English
  {
    id: "deadpool-and-wolverine",
    title: "Deadpool & Wolverine",
    releaseDate: "2024-07-26",
    posterFile: "Deadpool_and_Wolverine.jpg",
    overview: "Deadpool teams up with Wolverine on a multiverse-spanning adventure.",
    language: "English",
    genre: "Superhero, Action, Comedy",
    telegramUrl: ""
  },
  {
    id: "inside-out-2",
    title: "Inside Out 2",
    releaseDate: "2024-06-14",
    posterFile: "Inside_Out_2.jpg",
    overview: "Riley experiences new emotions as she enters adolescence.",
    language: "English",
    genre: "Animation, Family, Comedy",
    telegramUrl: ""
  },
  {
    id: "despicable-me-4",
    title: "Despicable Me 4",
    releaseDate: "2024-07-03",
    posterFile: "Despicable_Me_4.jpg",
    overview: "Gru and his family face a new enemy while welcoming a new member.",
    language: "English",
    genre: "Animation, Comedy, Family",
    telegramUrl: ""
  },
  {
    id: "dune-part-two",
    title: "Dune: Part Two",
    releaseDate: "2024-03-01",
    posterFile: "Dune_Part_Two.jpg",
    overview: "Paul Atreides joins the Fremen as conflict grows across Arrakis.",
    language: "English",
    genre: "Science Fiction, Adventure, Drama",
    telegramUrl: ""
  },
  {
    id: "godzilla-x-kong-the-new-empire",
    title: "Godzilla x Kong: The New Empire",
    releaseDate: "2024-03-29",
    posterFile: "Godzilla_x_Kong_The_New_Empire.jpg",
    overview: "Two giant creatures confront a threat hidden deep within the planet.",
    language: "English",
    genre: "Action, Science Fiction, Adventure",
    telegramUrl: ""
  },
  {
    id: "kingdom-of-the-planet-of-the-apes",
    title: "Kingdom of the Planet of the Apes",
    releaseDate: "2024-05-10",
    posterFile: "Kingdom_of_the_Planet_of_the_Apes.jpg",
    overview: "A young ape questions the order of his world and its history.",
    language: "English",
    genre: "Science Fiction, Action, Adventure",
    telegramUrl: ""
  },
  {
    id: "twisters",
    title: "Twisters",
    releaseDate: "2024-07-19",
    posterFile: "Twisters.jpg",
    overview: "Storm chasers confront powerful tornadoes across the American plains.",
    language: "English",
    genre: "Action, Adventure, Thriller",
    telegramUrl: ""
  },
  {
    id: "venom-the-last-dance",
    title: "Venom: The Last Dance",
    releaseDate: "2024-10-25",
    posterFile: "Venom_The_Last_Dance.jpg",
    overview: "Eddie Brock and Venom face a threat that follows them across worlds.",
    language: "English",
    genre: "Superhero, Action, Science Fiction",
    telegramUrl: ""
  },
  {
    id: "gladiator-ii",
    title: "Gladiator II",
    releaseDate: "2024-11-22",
    posterFile: "Gladiator_II.jpg",
    overview: "A new gladiator fights for survival and honour in ancient Rome.",
    language: "English",
    genre: "Historical, Action, Drama",
    telegramUrl: ""
  },
  {
    id: "moana-2",
    title: "Moana 2",
    releaseDate: "2024-11-27",
    posterFile: "Moana_2.jpg",
    overview: "Moana sets sail on a new voyage across the ocean.",
    language: "English",
    genre: "Animation, Adventure, Musical",
    telegramUrl: ""
  },
  {
    id: "wicked-2024",
    title: "Wicked",
    releaseDate: "2024-11-22",
    posterFile: "Wicked.jpg",
    overview: "The story of Elphaba and Glinda before Dorothy arrives in Oz.",
    language: "English",
    genre: "Fantasy, Musical, Drama",
    telegramUrl: ""
  },
  {
    id: "beetlejuice-beetlejuice",
    title: "Beetlejuice Beetlejuice",
    releaseDate: "2024-09-06",
    posterFile: "Beetlejuice_Beetlejuice.jpg",
    overview: "The mischievous ghost returns to cause chaos for the Deetz family.",
    language: "English",
    genre: "Fantasy, Comedy, Horror",
    telegramUrl: ""
  },
  {
    id: "a-quiet-place-day-one",
    title: "A Quiet Place: Day One",
    releaseDate: "2024-06-28",
    posterFile: "A_Quiet_Place_Day_One.jpg",
    overview: "A woman tries to survive the first day of an alien invasion.",
    language: "English",
    genre: "Horror, Science Fiction, Thriller",
    telegramUrl: ""
  },
  {
    id: "bad-boys-ride-or-die",
    title: "Bad Boys: Ride or Die",
    releaseDate: "2024-06-07",
    posterFile: "Bad_Boys_Ride_or_Die.jpg",
    overview: "Two Miami detectives try to clear their captain's name.",
    language: "English",
    genre: "Action, Comedy, Crime",
    telegramUrl: ""
  },
  {
    id: "furiosa-a-mad-max-saga",
    title: "Furiosa: A Mad Max Saga",
    releaseDate: "2024-05-24",
    posterFile: "Furiosa_A_Mad_Max_Saga.jpg",
    overview: "Furiosa fights to survive in a brutal post-apocalyptic world.",
    language: "English",
    genre: "Action, Adventure, Science Fiction",
    telegramUrl: ""
  },
  {
    id: "the-fall-guy",
    title: "The Fall Guy",
    releaseDate: "2024-05-03",
    posterFile: "The_Fall_Guy.jpg",
    overview: "A stunt performer becomes entangled in the disappearance of a movie star.",
    language: "English",
    genre: "Action, Comedy, Romance",
    telegramUrl: ""
  },
  {
    id: "king-fu-panda-4",
    title: "Kung Fu Panda 4",
    releaseDate: "2024-03-08",
    posterFile: "Kung_Fu_Panda_4.jpg",
    overview: "Po searches for a successor while facing a new shape-shifting enemy.",
    language: "English",
    genre: "Animation, Action, Comedy",
    telegramUrl: ""
  },
  {
    id: "ghostbusters-frozen-empire",
    title: "Ghostbusters: Frozen Empire",
    releaseDate: "2024-03-22",
    posterFile: "Ghostbusters_Frozen_Empire.jpg",
    overview: "The Ghostbusters confront a supernatural force threatening the city.",
    language: "English",
    genre: "Fantasy, Comedy, Adventure",
    telegramUrl: ""
  },
  {
    id: "the-wild-robot",
    title: "The Wild Robot",
    releaseDate: "2024-09-27",
    posterFile: "The_Wild_Robot.jpg",
    overview: "A robot learns to survive in the wilderness and care for a young animal.",
    language: "English",
    genre: "Animation, Science Fiction, Family",
    telegramUrl: ""
  },
  {
    id: "transformers-one",
    title: "Transformers One",
    releaseDate: "2024-09-20",
    posterFile: "Transformers_One.jpg",
    overview: "An animated origin story about the friendship of Optimus Prime and Megatron.",
    language: "English",
    genre: "Animation, Action, Science Fiction",
    telegramUrl: ""
  },

  // Additional Hindi releases
  {
    id: "12th-fail",
    title: "12th Fail",
    releaseDate: "2023-10-27",
    posterFile: "12th_Fail.jpg",
    overview: "A student overcomes hardship while preparing for the civil service examination.",
    language: "Hindi",
    genre: "Biography, Drama",
    telegramUrl: ""
  },
  {
    id: "animal",
    title: "Animal",
    releaseDate: "2023-12-01",
    posterFile: "Animal.jpg",
    overview: "A troubled son seeks his father's approval amid escalating violence.",
    language: "Hindi",
    genre: "Action, Crime, Drama",
    telegramUrl: ""
  },
  {
    id: "sam-bahadur",
    title: "Sam Bahadur",
    releaseDate: "2023-12-01",
    posterFile: "Sam_Bahadur.jpg",
    overview: "A biographical drama about Indian Army officer Sam Manekshaw.",
    language: "Hindi",
    genre: "Biography, War, Drama",
    telegramUrl: ""
  },
  {
    id: "dunki",
    title: "Dunki",
    releaseDate: "2023-12-21",
    posterFile: "Dunki.jpg",
    overview: "Friends pursue a difficult journey to reach a life abroad.",
    language: "Hindi",
    genre: "Comedy, Drama",
    telegramUrl: ""
  },
  {
    id: "salaar",
    title: "Salaar: Part 1 – Ceasefire",
    releaseDate: "2023-12-22",
    posterFile: "Salaar_Part_1_Ceasefire.jpg",
    overview: "Two friends become caught in a violent struggle for power.",
    language: "Hindi",
    genre: "Action, Crime, Thriller",
    telegramUrl: ""
  },
  {
    id: "jawan",
    title: "Jawan",
    releaseDate: "2023-09-07",
    posterFile: "Jawan.jpg",
    overview: "A vigilante takes on corruption through a series of high-profile actions.",
    language: "Hindi",
    genre: "Action, Thriller",
    telegramUrl: ""
  },
  {
    id: "pathaan",
    title: "Pathaan",
    releaseDate: "2023-01-25",
    posterFile: "Pathaan.jpg",
    overview: "An Indian spy races to stop a major national security threat.",
    language: "Hindi",
    genre: "Action, Spy, Thriller",
    telegramUrl: ""
  },
  {
    id: "rocky-aur-rani-kii-prem-kahaani",
    title: "Rocky Aur Rani Kii Prem Kahaani",
    releaseDate: "2023-07-28",
    posterFile: "Rocky_Aur_Rani_Kii_Prem_Kahaani.jpg",
    overview: "A couple from different families attempt to win over their relatives.",
    language: "Hindi",
    genre: "Romance, Comedy, Drama",
    telegramUrl: ""
  },
  {
    id: "tu-jhoothi-main-makkaar",
    title: "Tu Jhoothi Main Makkaar",
    releaseDate: "2023-03-08",
    posterFile: "Tu_Jhoothi_Main_Makkaar.jpg",
    overview: "A couple's modern romance becomes complicated by their approach to commitment.",
    language: "Hindi",
    genre: "Romance, Comedy",
    telegramUrl: ""
  },
  {
    id: "dream-girl-2",
    title: "Dream Girl 2",
    releaseDate: "2023-08-25",
    posterFile: "Dream_Girl_2.jpg",
    overview: "A man disguises himself as a woman to solve financial problems.",
    language: "Hindi",
    genre: "Comedy, Romance",
    telegramUrl: ""
  },

  // Additional Punjabi releases
  {
    id: "maujaan-hi-maujaan",
    title: "Maujaan Hi Maujaan",
    releaseDate: "2023-10-20",
    posterFile: "Maujaan_Hi_Maujaan.jpg",
    overview: "Three brothers navigate family life and comic complications.",
    language: "Punjabi",
    genre: "Comedy, Family",
    telegramUrl: ""
  },
  {
    id: "mastaney",
    title: "Mastaney",
    releaseDate: "2023-08-25",
    posterFile: "Mastaney.jpg",
    overview: "A historical Punjabi drama set during the era of Sikh warriors.",
    language: "Punjabi",
    genre: "Historical, Action, Drama",
    telegramUrl: ""
  },
  {
    id: "white-punjab",
    title: "White Punjab",
    releaseDate: "2023-10-13",
    posterFile: "White_Punjab.jpg",
    overview: "A crime drama exploring difficult realities in contemporary Punjab.",
    language: "Punjabi",
    genre: "Crime, Drama",
    telegramUrl: ""
  },
  {
    id: "buhe-bariyan",
    title: "Buhe Bariyan",
    releaseDate: "2023-09-29",
    posterFile: "Buhe_Bariyan.jpg",
    overview: "A social drama focused on women's lives and community expectations.",
    language: "Punjabi",
    genre: "Drama",
    telegramUrl: ""
  },
  {
    id: "gaddi-jaandi-ae-chalaangaan-maardi",
    title: "Gaddi Jaandi Ae Chalaangaan Maardi",
    releaseDate: "2023-09-28",
    posterFile: "Gaddi_Jaandi_Ae_Chalaangaan_Maardi.jpg",
    overview: "A family comedy featuring a vehicle and a series of unexpected mishaps.",
    language: "Punjabi",
    genre: "Comedy, Family",
    telegramUrl: ""
  },
  {
    id: "carry-on-jatta-3-2023",
    title: "Carry on Jatta 3",
    releaseDate: "2023-06-29",
    posterFile: "Carry_on_Jatta_3.jpg",
    overview: "A comedy of errors involving relationships and family secrets.",
    language: "Punjabi",
    genre: "Comedy",
    telegramUrl: ""
  },
  {
    id: "annhi-dea-mazak-ae",
    title: "Annhi Dea Mazaak Ae",
    releaseDate: "2023-04-21",
    posterFile: "Annhi_Dea_Mazaak_Ae.jpg",
    overview: "A romantic comedy built around mistaken assumptions.",
    language: "Punjabi",
    genre: "Romance, Comedy",
    telegramUrl: ""
  },
  {
    id: "chal-jindiye",
    title: "Chal Jindiye",
    releaseDate: "2023-03-24",
    posterFile: "Chal_Jindiye.jpg",
    overview: "A drama exploring the lives and struggles of Punjabi people abroad.",
    language: "Punjabi",
    genre: "Drama",
    telegramUrl: ""
  },

  // Additional English releases
  {
    id: "oppenheimer",
    title: "Oppenheimer",
    releaseDate: "2023-07-21",
    posterFile: "Oppenheimer.jpg",
    overview: "A biographical drama about physicist J. Robert Oppenheimer and the atomic bomb.",
    language: "English",
    genre: "Biography, Historical, Drama",
    telegramUrl: ""
  },
  {
    id: "barbie",
    title: "Barbie",
    releaseDate: "2023-07-21",
    posterFile: "Barbie.jpg",
    overview: "Barbie enters the real world and begins questioning her identity.",
    language: "English",
    genre: "Comedy, Fantasy, Adventure",
    telegramUrl: ""
  },
  {
    id: "guardians-of-the-galaxy-vol-3",
    title: "Guardians of the Galaxy Vol. 3",
    releaseDate: "2023-05-05",
    posterFile: "Guardians_of_the_Galaxy_Vol_3.jpg",
    overview: "The Guardians undertake a mission connected to Rocket's past.",
    language: "English",
    genre: "Superhero, Science Fiction, Adventure",
    telegramUrl: ""
  },
  {
    id: "spider-man-across-the-spider-verse",
    title: "Spider-Man: Across the Spider-Verse",
    releaseDate: "2023-06-02",
    posterFile: "Spider_Man_Across_the_Spider_Verse.jpg",
    overview: "Miles Morales travels across alternate universes and meets other Spider-People.",
    language: "English",
    genre: "Animation, Superhero, Adventure",
    telegramUrl: ""
  },
  {
    id: "john-wick-chapter-4",
    title: "John Wick: Chapter 4",
    releaseDate: "2023-03-24",
    posterFile: "John_Wick_Chapter_4.jpg",
    overview: "John Wick fights powerful enemies in pursuit of freedom.",
    language: "English",
    genre: "Action, Thriller, Crime",
    telegramUrl: ""
  },
  {
    id: "the-super-mario-bros-movie",
    title: "The Super Mario Bros. Movie",
    releaseDate: "2023-04-05",
    posterFile: "The_Super_Mario_Bros_Movie.jpg",
    overview: "Mario and Luigi enter a fantastical world filled with familiar characters.",
    language: "English",
    genre: "Animation, Adventure, Comedy",
    telegramUrl: ""
  },
  {
    id: "the-batman",
    title: "The Batman",
    releaseDate: "2022-03-04",
    posterFile: "The_Batman.jpg",
    overview: "Batman investigates corruption and a series of crimes in Gotham City.",
    language: "English",
    genre: "Action, Crime, Mystery",
    telegramUrl: ""
  },
  {
    id: "top-gun-maverick",
    title: "Top Gun: Maverick",
    releaseDate: "2022-05-27",
    posterFile: "Top_Gun_Maverick.jpg",
    overview: "A veteran pilot trains a new generation for a dangerous mission.",
    language: "English",
    genre: "Action, Drama",
    telegramUrl: ""
  },
  {
    id: "avatar-the-way-of-water",
    title: "Avatar: The Way of Water",
    releaseDate: "2022-12-16",
    posterFile: "Avatar_The_Way_of_Water.jpg",
    overview: "Jake Sully's family seeks safety among the ocean-dwelling Na'vi.",
    language: "English",
    genre: "Science Fiction, Adventure",
    telegramUrl: ""
  },
  {
    id: "black-panther-wakanda-forever",
    title: "Black Panther: Wakanda Forever",
    releaseDate: "2022-11-11",
    posterFile: "Black_Panther_Wakanda_Forever.jpg",
    overview: "Wakanda faces a new threat while mourning its king.",
    language: "English",
    genre: "Superhero, Action, Drama",
    telegramUrl: ""
  },
  {
    id: "doctor-strange-in-the-multiverse-of-madness",
    title: "Doctor Strange in the Multiverse of Madness",
    releaseDate: "2022-05-06",
    posterFile: "Doctor_Strange_in_the_Multiverse_of_Madness.jpg",
    overview: "Doctor Strange navigates dangerous alternate realities.",
    language: "English",
    genre: "Superhero, Fantasy, Action",
    telegramUrl: ""
  },
  {
    id: "everything-everywhere-all-at-once",
    title: "Everything Everywhere All at Once",
    releaseDate: "2022-03-25",
    posterFile: "Everything_Everywhere_All_at_Once.jpg",
    overview: "A laundromat owner discovers that she must connect with alternate versions of herself.",
    language: "English",
    genre: "Science Fiction, Action, Comedy",
    telegramUrl: ""
  }
];

/**Newest valid dates first; undated records go last
window.MOVIE_DATA.sort((a, b) => {
  const dateA = Date.parse(a.releaseDate);
  const dateB = Date.parse(b.releaseDate);

  if (Number.isNaN(dateA)) return 1;
  if (Number.isNaN(dateB)) return -1;

  return dateB - dateA;
});*/







window.MovieTools = (() => {
  const movies = Array.isArray(window.MOVIE_DATA) ? window.MOVIE_DATA : [];

  function dateValue(value) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(String(value || ""))) return Number.NaN;
    const timestamp = Date.parse(value + "T00:00:00Z");
    if (!Number.isFinite(timestamp) || new Date(timestamp).toISOString().slice(0, 10) !== value) {
      return Number.NaN;
    }
    return timestamp;
  }

  function sorted() {
    return [...movies].sort((a, b) => {
      const aDate = dateValue(a.releaseDate);
      const bDate = dateValue(b.releaseDate);
      if (Number.isNaN(aDate) && Number.isNaN(bDate)) {
        return String(a.title || "").localeCompare(String(b.title || ""), "hi");
      }
      if (Number.isNaN(aDate)) return 1;
      if (Number.isNaN(bDate)) return -1;
      return bDate - aDate;
    });
  }

  function find(id) {
    return movies.find(movie => movie.id === id);
  }

  function posterSource(movie) {
    const filename = String(movie.posterFile || "").trim();
    if (!filename || filename.includes("/") || filename.includes("\\")) return "";
    return new URL(filename, document.baseURI).href;
  }

  function dateLabel(value) {
    const timestamp = dateValue(value);
    if (Number.isNaN(timestamp)) return "रिलीज़ तारीख़ जल्द";
    return new Intl.DateTimeFormat("hi-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC"
    }).format(new Date(timestamp));
  }

  function telegramLinkIsValid(value) {
    try {
      const url = new URL(value);
      return (url.protocol === "https:" && ["t.me", "telegram.me"].includes(url.hostname)) ||
        url.protocol === "tg:";
    } catch {
      return false;
    }
  }

  return { all: () => [...movies], sorted, find, dateLabel, posterSource, telegramLinkIsValid };
})();