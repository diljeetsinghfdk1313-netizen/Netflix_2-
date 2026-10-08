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
 /*
  Movie catalogue — 2026
  Release dates verified against current 2026 movie listings.
  Poster files must be placed beside your HTML files.
  posterFile uses the movie title with spaces replaced by underscores.

  IMPORTANT:
  - Release dates are YYYY-MM-DD.
  - Telegram URLs below are the links supplied for the corresponding titles.
*/

  {
    id: "drishyam-the-conclusion",
    title: "Drishyam: The Conclusion",
    releaseDate: "2026-10-20",
    posterFile: "Drishyam_The_Conclusion.jpg",
    overview: "The final chapter of the Drishyam crime-thriller story, following Vijay Salgaonkar and his family as an old case creates new danger.",
    language: "Hindi",
    genre: "Drama, Mystery, Thriller",
    telegramUrl: "https://t.me/+_-wlpuva4HlhYTZl"
  },

  {
    id: "prem-keetanu",
    title: "Prem Keetanu",
    releaseDate: "2026-10-02",
    posterFile: "Prem_Keetanu.jpg",
    overview: "A Hindi romantic comedy centered on an unconventional relationship and the complications that come with love.",
    language: "Hindi",
    genre: "Comedy, Romance",
    telegramUrl: "https://t.me/+48Teu5mLMqM0MDQ1"
  },

  {
    id: "verity",
    title: "Verity",
    releaseDate: "2026-10-02",
    posterFile: "Verity.jpg",
    overview: "A psychological mystery thriller involving a successful author, a troubled family and disturbing secrets.",
    language: "English",
    genre: "Crime, Drama, Mystery, Romance",
    telegramUrl: "https://t.me/+Gx7i04x0tXlmMjBl"
  },

  {
    id: "digger",
    title: "Digger",
    releaseDate: "2026-10-02",
    posterFile: "Digger.jpg",
    overview: "A comedy about a man whose journey takes an unexpected turn as he becomes involved in a dangerous and unusual situation.",
    language: "English",
    genre: "Comedy",
    telegramUrl: "https://t.me/+zQo7ucXQcUAzNmY9"
  },

  {
    id: "udta-teer",
    title: "Udta Teer",
    releaseDate: "2026-10-03",
    posterFile: "Udta_Teer.jpg",
    overview: "An action-adventure comedy involving an unusual spy mission and a man caught in an extraordinary situation.",
    language: "Hindi",
    genre: "Action, Adventure, Comedy",
    telegramUrl: "https://t.me/+-8wNhOPuM11hNmM1"
  },

  {
    id: "bokshi",
    title: "Bokshi",
    releaseDate: "2026-10-02",
    posterFile: "Bokshi.jpg",
    overview: "A horror drama about a young woman who encounters a terrifying mystery connected to her past.",
    language: "Hindi",
    genre: "Drama, Horror",
    telegramUrl: "https://t.me/+k3LLdV_x7hA3NzM1"
  },

  {
    id: "jailer-2",
    title: "Jailer 2",
    releaseDate: "2026-10-01",
    posterFile: "Jailer_2.jpg",
    overview: "Rajinikanth returns in the action-thriller sequel to Jailer.",
    language: "Tamil",
    genre: "Action, Thriller",
    telegramUrl: "https://t.me/+H2CG1FvivIdhNjc9"
  },

  {
    id: "nayyi-navelli",
    title: "Nayyi Navelli",
    releaseDate: "2026-10-16",
    posterFile: "Nayyi_Navelli.jpg",
    overview: "A Hindi supernatural comedy-drama featuring a woman whose mysterious identity becomes central to the story.",
    language: "Hindi",
    genre: "Comedy, Drama",
    telegramUrl: "https://t.me/+ea5WJN5Tr1tmZTM1"
  },

  {
    id: "prahaar-the-untold-story-of-ujjwal-nikam",
    title: "Prahaar: The Untold Story Of Ujjwal Nikam",
    releaseDate: "2026-10-16",
    posterFile: "Prahaar_The_Untold_Story_Of_Ujjwal_Nikam.jpg",
    overview: "A Hindi drama-thriller inspired by the life and career of prosecutor Ujjwal Nikam.",
    language: "Hindi",
    genre: "Drama, Thriller",
    telegramUrl: "https://t.me/+TctM2N8MzIkxOTBl"
  },

  {
    id: "ranabaali",
    title: "Ranabaali",
    releaseDate: "2026-10-16",
    posterFile: "Ranabaali.jpg",
    overview: "A period action drama set against a turbulent historical backdrop.",
    language: "Telugu",
    genre: "Action, Drama",
    telegramUrl: "https://t.me/+SS2EGiL3PJ81YmY1"
  },

  {
    id: "main-na-raha-mera",
    title: "Main Na Raha Mera",
    releaseDate: "2026-10-23",
    posterFile: "Main_Na_Raha_Mera.jpg",
    overview: "A Hindi romantic drama exploring love, identity and emotional relationships.",
    language: "Hindi",
    genre: "Drama, Romance",
    telegramUrl: "https://t.me/+DfUKubu_SFVkMjY9"
  },

  {
    id: "eh-din-roz-ni-aune",
    title: "Eh Din Roz Ni Aune",
    releaseDate: "2026-10-09",
    posterFile: "Eh_Din_Roz_Ni_Aune.jpg",
    overview: "A Punjabi drama built around relationships, family emotions and the value of important moments in life.",
    language: "Punjabi",
    genre: "Drama",
    telegramUrl: "https://t.me/+tessz3KJvgMxZmE1"
  },

  {
    id: "b-town",
    title: "B Town",
    releaseDate: "2026-10-16",
    posterFile: "B_Town.jpg",
    overview: "A Punjabi drama-thriller involving ambition, relationships and conflict.",
    language: "Punjabi",
    genre: "Drama, Thriller",
    telegramUrl: "https://t.me/+QJwibs6_kawxZmQ1"
  },

  {
    id: "thappi",
    title: "Thappi",
    releaseDate: "2026-10-16",
    posterFile: "Thappi.jpg",
    overview: "A Punjabi drama focusing on relationships and the challenges faced by its central characters.",
    language: "Punjabi",
    genre: "Drama",
    telegramUrl: "https://t.me/+LDYqrIOPdcs0N2Rl"
  },

  {
    id: "daudaak",
    title: "Daudaak",
    releaseDate: "2026-10-23",
    posterFile: "Daudaak.jpg",
    overview: "A Punjabi drama-thriller built around conflict, determination and personal challenges.",
    language: "Punjabi",
    genre: "Drama, Thriller",
    telegramUrl: "https://t.me/+EpbIaA9SGJY4NmVl"
  },

  {
    id: "runner",
    title: "Runner",
    releaseDate: "2026-09-25",
    posterFile: "Runner.jpg",
    overview: "An action thriller following a determined man drawn into a dangerous pursuit.",
    language: "English",
    genre: "Action, Thriller",
    telegramUrl: "https://t.me/+xzRj15ipxJdjNjk1"
  },

  {
    id: "heart-of-the-beast",
    title: "Heart Of The Beast",
    releaseDate: "2026-09-25",
    posterFile: "Heart_Of_The_Beast.jpg",
    overview: "A tense thriller centered on survival and a dangerous encounter.",
    language: "English",
    genre: "Thriller",
    telegramUrl: "https://t.me/+_DtZDHUOgb5mNjI1"
  },

  {
    id: "primetime",
    title: "Primetime",
    releaseDate: "2026-09-25",
    posterFile: "Primetime.jpg",
    overview: "An action crime drama involving ambition, media and escalating danger.",
    language: "English",
    genre: "Action, Crime, Drama, Thriller",
    telegramUrl: "https://t.me/+omlRiIDvR4Y3YzY9"
  },

  {
    id: "the-paradise",
    title: "The Paradise",
    releaseDate: "2026-09-24",
    posterFile: "The_Paradise.jpg",
    overview: "An action thriller set around a dangerous struggle for power and survival.",
    language: "Telugu",
    genre: "Action, Thriller",
    telegramUrl: "https://t.me/+UD7PCId12-JiNGZl"
  },

  {
    id: "resident-evil",
    title: "Resident Evil",
    releaseDate: "2026-09-18",
    posterFile: "Resident_Evil.jpg",
    overview: "A survival horror action film set in the dangerous world of the Resident Evil franchise.",
    language: "English",
    genre: "Action, Horror",
    telegramUrl: "https://t.me/+AYbdW2ENqxpkYmM9"
  },

  {
    id: "chasing-rahul",
    title: "Chasing Rahul",
    releaseDate: "2026-09-18",
    posterFile: "Chasing_Rahul.jpg",
    overview: "An English-language drama centered on a pursuit involving its mysterious central character.",
    language: "English",
    genre: "Drama",
    telegramUrl: "https://t.me/+GuY1OLVALmQyYjk1"
  },

  {
    id: "practical-magic-2",
    title: "Practical Magic 2",
    releaseDate: "2026-09-18",
    posterFile: "Practical_Magic_2.jpg",
    overview: "A fantasy romantic comedy-drama continuing the story of the magical Owens family.",
    language: "English",
    genre: "Comedy, Drama, Fantasy, Romance",
    telegramUrl: "https://t.me/+YQYuDr5dKCsyZDc1"
  },

  {
    id: "fall-2-deadpoint",
    title: "Fall 2: Deadpoint",
    releaseDate: "2026-09-11",
    posterFile: "Fall_2_Deadpoint.jpg",
    overview: "An adventure thriller that puts its characters into another extreme fight for survival.",
    language: "English",
    genre: "Adventure, Drama, Thriller",
    telegramUrl: "https://t.me/+oUzmje95BKwzNWVl"
  },

  {
    id: "singh-vs-kaur-2",
    title: "Singh Vs Kaur 2",
    releaseDate: "2026-09-11",
    posterFile: "Singh_Vs_Kaur_2.jpg",
    overview: "A Punjabi romantic comedy-drama continuing the entertaining rivalry and relationship story.",
    language: "Punjabi",
    genre: "Drama, Comedy, Romance",
    telegramUrl: "https://t.me/+fkzQOUcefiQ3NGJl"
  },

  {
    id: "bol-bhavein-na-bol",
    title: "Bol Bhavein Na Bol",
    releaseDate: "2026-09-04",
    posterFile: "Bol_Bhavein_Na_Bol.jpg",
    overview: "A Punjabi romantic drama focused on relationships and emotional choices.",
    language: "Punjabi",
    genre: "Drama, Romance",
    telegramUrl: "https://t.me/+EfUHjWV3AU1iN2Y1"
  },

  {
    id: "mitti-de-putt",
    title: "Mitti De Putt",
    releaseDate: "2026-09-18",
    posterFile: "Mitti_De_Putt.jpg",
    overview: "A Punjabi action drama centered on courage, loyalty and conflict.",
    language: "Punjabi",
    genre: "Drama, Action",
    telegramUrl: "https://t.me/+SjHx15c3C2NhMmI1"
  },

  {
    id: "tutt-paini-english-ne",
    title: "Tutt Paini English Ne",
    releaseDate: "2026-09-25",
    posterFile: "Tutt_Paini_English_Ne.jpg",
    overview: "A Punjabi comedy-drama built around relationships and humorous cultural situations.",
    language: "Punjabi",
    genre: "Comedy, Drama",
    telegramUrl: "https://t.me/+xodoEM3EVS82NWU1"
  },

  {
    id: "lahukheda",
    title: "Lahukheda",
    releaseDate: "2026-09-16",
    posterFile: "Lahukheda.jpg",
    overview: "A Punjabi drama following its characters through difficult personal and social circumstances.",
    language: "Punjabi",
    genre: "Drama",
    telegramUrl: "https://t.me/+LjNfQK-YTkMzYjE1"
  },

  {
    id: "yaar-jigree-kasooti-degree",
    title: "Yaar Jigree Kasooti Degree",
    releaseDate: "2026-08-07",
    posterFile: "Yaar_Jigree_Kasooti_Degree.jpg",
    overview: "A Punjabi comedy-drama about friendship, college life and the challenges faced by young friends.",
    language: "Punjabi",
    genre: "Comedy, Drama",
    telegramUrl: "https://t.me/+lrw2FA1S90pjOGE9"
  },

  {
    id: "kankaan-de-ohle",
    title: "Kankaan De Ohle",
    releaseDate: "2026-07-31",
    posterFile: "Kankaan_De_Ohle.jpg",
    overview: "A Punjabi drama exploring relationships and emotional struggles.",
    language: "Punjabi",
    genre: "Drama",
    telegramUrl: "https://t.me/+nhpwuuKHppJkYzZl"
  },

  {
    id: "ishqnama",
    title: "Ishqnama",
    releaseDate: "2026-07-24",
    posterFile: "Ishqnama.jpg",
    overview: "A Punjabi romantic drama centered on love and complicated relationships.",
    language: "Punjabi",
    genre: "Romance, Drama",
    telegramUrl: "https://t.me/+zVzfkkXNByphZTY1"
  },

  {
    id: "dastaar",
    title: "Dastaar",
    releaseDate: "2026-07-17",
    posterFile: "Dastaar.jpg",
    overview: "A Punjabi drama exploring identity, family and personal values.",
    language: "Punjabi",
    genre: "Drama",
    telegramUrl: "https://t.me/+KiIhVBAmS2hjMjll"
  },

  {
    id: "sarpanch",
    title: "Sarpanch",
    releaseDate: "2026-07-10",
    posterFile: "Sarpanch.jpg",
    overview: "A Punjabi action drama centered on leadership, conflict and village politics.",
    language: "Punjabi",
    genre: "Action, Drama",
    telegramUrl: "https://t.me/+mAntjRpvCXxlM2U1"
  },

  {
    id: "paige-ishq-puware",
    title: "Paige Ishq Puware",
    releaseDate: "2026-07-03",
    posterFile: "Paige_Ishq_Puware.jpg",
    overview: "A Punjabi drama dealing with love, relationships and emotional challenges.",
    language: "Punjabi",
    genre: "Drama",
    telegramUrl: "https://t.me/+_x5ZSkE2kKcxZWY1"
  },

  {
    id: "carry-on-jatta-4",
    title: "Carry On Jatta 4",
    releaseDate: "2026-06-26",
    posterFile: "Carry_On_Jatta_4.jpg",
    overview: "The fourth installment of the popular Punjabi comedy franchise, continuing its chaotic relationship and family humor.",
    language: "Punjabi",
    genre: "Comedy, Drama",
    telegramUrl: "https://t.me/+KDFw6ZuKK-kzZDk1"
  },

  {
    id: "chaali-din",
    title: "Chaali Din",
    releaseDate: "2026-06-19",
    posterFile: "Chaali_Din.jpg",
    overview: "A Punjabi adventure drama following its characters through an unusual and challenging journey.",
    language: "Punjabi",
    genre: "Adventure, Drama",
    telegramUrl: "https://t.me/+YFzJssPRVxU4MmI1"
  },

  {
    id: "oye-bole-oye-2",
    title: "Oye Bole Oye 2",
    releaseDate: "2026-06-12",
    posterFile: "Oye_Bole_Oye_2.jpg",
    overview: "A Punjabi drama continuing the story of the original film.",
    language: "Punjabi",
    genre: "Drama",
    telegramUrl: "https://t.me/+hOz-3rFLkm82ZTI1"
  },

  {
    id: "chardikala",
    title: "Chardikala",
    releaseDate: "2026-05-29",
    posterFile: "Chardikala.jpg",
    overview: "A Punjabi drama centered on resilience, hope and personal relationships.",
    language: "Punjabi",
    genre: "Drama",
    telegramUrl: "https://t.me/+VF2tSKnrsxIyNWFl"
  },

  {
    id: "top-cop",
    title: "Top Cop",
    releaseDate: "2026-05-22",
    posterFile: "Top_Cop.jpg",
    overview: "A crime mystery thriller following a police investigation involving dangerous and mysterious circumstances.",
    language: "Punjabi, Hindi",
    genre: "Crime, Mystery, Thriller",
    telegramUrl: "https://t.me/+dYpYy9JxhCsxNGU1"
  }


]

/*Newest valid dates first; undated records go last
window.MOVIE_DATA.sort((a, b) => {
  const dateA = Date.parse(a.releaseDate);
  const dateB = Date.parse(b.releaseDate);

  if (Number.isNaN(dateA)) return 1;
  if (Number.isNaN(dateB)) return -1;

  return dateB - dateA;
})*/







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

async function getMoviesWithPosters(movies) {
  const checks = movies.map(movie => {
    return new Promise(resolve => {
      const img = new Image();

      img.onload = () => {
        resolve(movie);
      };

      img.onerror = () => {
        resolve(null);
      };

      img.src = MovieTools.posterSource(movie);
    });
  });

  const results = await Promise.all(checks);

  return results.filter(movie => movie !== null);
}
