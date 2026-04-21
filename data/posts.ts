export interface Post {
  id: number;
  slug: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  content: string;
  tags: string[];
  image: string;
  gallery?: string[];
  youtubeId?: string;
}

export const posts: Post[] = [
  {
    id: 1,
    slug: "short-films",
    title: "Short Films",
    date: "February 09",
    readTime: "1 min read",
    category: "Research and Analysis",
    excerpt:
      "A brief history of short films, from Thomas Edison's kinetoscope to the serial comedies of the 1920s.",
    content: `A short film is a film with a low running time. The Academy of Motion Picture Arts and Sciences define a short film which runs only a minute or less. 

It wasn't until 1910s when films started to get longer than about ten minutes. The first set of films were presented in 1894 and it was through Thomas Edison's device called a kinetoscope. It was made for individuals viewing only. 

Comedy short films were produced in large numbers compared to lengthy features such as D.W Griffith's 1915 *The Birth of a Nation*. By the 1920s, a ticket purchased a varied program including a feature and several supporting works from categories such as second feature, short comedy, 4–10-minute cartoon, travelogue and newsreel. 

Short comedies were especially common, and typically came in a serial or series (such as the *Our Gang* movies, or the many outings of Charlie Chaplin's Little Tramp character). 

Animated cartoons came principally as short subjects; virtually all major film production companies had units assigned to develop and produce shorts, and many companies, especially in the silent and very early sound era, produced mostly or only short subjects.`,
    tags: ["Research", "Short Films", "History"],
    image: "/images/short-films-hero.png",
    gallery: ["/images/short-films-hero.png"],
  },
  {
    id: 2,
    slug: "codes-and-convention",
    title: "Codes & Convention",
    date: "February 09",
    readTime: "3 min read",
    category: "Research and Analysis",
    excerpt:
      "An in-depth look at the codes and conventions that define short films, from length and storylines to creative opposition to mainstream aesthetics.",
    content: `Short film refers to any film not considered a feature film in terms of length. Although length is the most obvious characterisation of a short film, films of this type will share codes and conventions which separate them from other forms of video.

### Length
A short film will most commonly last between 3 to 20 minutes, however the length varies greatly and can last as little as a minute and up to 40. Short film competition Depict! specifically asks for films lasting 90 seconds, playing on the idea that feature films will usually last 90 minutes.

### Storylines
Storylines are generally kept simple and easy to follow and will be based over a short period of time. The narrative is usually condensed and there will be limited dialogue. Instead characters will be developed through images and actions rather than extended and lengthy dialogue sequences.

### Character
Due to the length and simplicity in storyline, a short film will usually introduce between 1 and 3 main characters as creating back stories and developing characters is again limited. This is also done in order to keep the audience engaged and be able to follow the storyline without being bombarded with information and new people. Short films will usually last only long enough to connect the audience to few characters and will not have a developed enough storyline to hold a large cast.

### Twist
Including a twist is a common convention in short film although this is not a general rule and not all short films will use this format. However, a twist allows the filmmaker to tell a short story in an interesting way and they are able to do this as the short storyline gives less clues to the ending.

### Creativity
Overall short films allow for much more creativity and abstraction. They will often be made up of a number of creative shots and soundtrack making up an artistic and sometimes quirky piece. The director or filmmaker are able to use more creative flair placing their own signature look on the piece as there is less pressure to make a profitable film for a large audience. Well established directors such as Martin Scorsese, Spike Jonze and Tim Burton, make short film despite their popularity and success in mainstream for these reasons.

### Budget
Budgets for short film are usually quite low. Short films are unlikely to make any money which effects the amount spent in the making and they are often made by first time filmmakers or experimental artists and filmmakers with no or little funding. This effects the overall look of the film creating a more home made or arty look. There are exceptions of this however where a film made on a low budget looks near professional and others which will have a large budget to spend on making.

### Niche Audience
Short films have a lot smaller and niche audience than mainstream due to the creative nature, length and simple storyline. Although largely accessible, many are not aware of short film. This is largely due to popularity decreasing through the 30’s onwards, and the limited access in mainstream forms such as prime time television and cinema. Short film also varies in genre and style and will appeal to a much more specific audience.

### Emotion
Short films are used to convey a strong emotion to the viewer whether this is laughter, pleasure, sadness or anger, sometimes making comments on morals or society in the process. Short films can be a lot more powerful in this way as it is easy to make something appear differently to how it is or to get the audience thinking about a particular topic without having the time to make up their minds while watching, leaving them to contemplate after the film has finished. There will also usually be a stronger connection to the characters as they are shown closely throughout, with the creativity allowing for more humour and pleasure.

### Online Distribution
Unlike mainstream film, short films are largely accessible for free through the internet. There are many sites who distribute short films online from independent to established sites such as the BBC. This is the easiest and most effective way for short film to reach audiences as they are very rarely shown at cinemas or on television. DVDs can be brought with selections of short films on, however, they are most widely accessed over the web. As short film is based much more on creativity and expression rather than mainstream and profit, it is much more important for the filmmaker to reach a wide audience and distribute films to them for free.

### Opposition to Mainstream
All of these codes and conventions largely make short film in opposition to mainstream. They hold a very different format and style to each other and short film will usually try to give audiences a different outlet of film to the mainstream.`,
    tags: ["Research", "Short Films", "Codes", "Conventions"],
    image: "/images/codes-conventions-hero.png",
    gallery: ["/images/codes-conventions-hero.png"],
  },
  {
    id: 3,
    slug: "genre-brainstorming",
    title: "Genre Brainstorming",
    date: "February 09",
    readTime: "2 min read",
    category: "Research and Analysis",
    excerpt:
      "Struggling with your first short film idea? Let's brainstorm through the most effective genres for short-form storytelling—from real-time dramas to high-concept sci-fi.",
    content: `Short films can be hard to tackle. You need to find a story that fits in a smaller space and still feels like it has scope and scale.

I would suggest just picking something that happens in real time, or close to it. Especially if this is your first short script. That way, you're writing within a constraint that naturally fits into a short time.

If you're not even sure how to begin, we can brainstorm within genres:

### Drama
This is sort of a sweeping genre that covers a lot of things. But there are many dramatic moments of life that you might want to highlight. Short films are excellent for focusing on a single, powerful emotional moment or character study. They can deliver impactful narratives in a concise timeframe.

### Comedy
Comedy is such a versatile genre that it can fit into any situation. In these short situations, it can carry us in and out quickly. A well-executed comedic short can leave a lasting impression, especially those with a strong ending, or punchline.

### Horror
Horror stands out among genres because it can make you feel something nothing else can: fear. It's also popular for being acquired and turned into features. Short films can build tension and deliver scares effectively in a limited time. You can arrive late and leave early.

### Experimental
Not every short film has to be narrative. So many of the ones I love are just artistic expressions of emotions or ideas. Filmmakers can experiment with visual techniques, narrative structures, and abstract concepts. Short films provide a platform for artistic exploration and pushing boundaries. Why not test yours?

### Thriller/Suspense
These genres work very well in short format because you can plant suspense very quickly, and then have a satisfying payoff, within the time constraints. Again, find a scenario that's happening in real-time and use that. We can meet the characters and get into it quickly.

### Science Fiction
The future is so fun to explore, and so are advances in technology. The worldbuilding here is limitless, just get it across fast. Shorts don't usually have big budgets, but you can spend wisely here and show your vision, especially for a proof of concept.`,
    tags: ["Research", "Short Films", "Genres", "Brainstorming"],
    image: "/images/placeholder.jpg",
    gallery: ["/images/placeholder.jpg"],
  },
  {
    id: 4,
    slug: "target-audience",
    title: "Target Audience",
    date: "February 09",
    readTime: "1 min read",
    category: "Research and Analysis",
    excerpt:
      "Defining the core demographic for 'Drowning in Silence' and exploring the mixed reactions to mental health discussions in our culture.",
    content: `Our project was primarily targeted for the age category of **18-24**. The plan was to create mental health awareness in an age where information is so accessible that basic things are often overlooked. This project was essentially our way of playing a part in raising that awareness.

At the film premiere, we received mixed reviews. Some audience members were glad that these issues were being discussed openly, while others showed visible discomfort. We believe this reaction is completely valid, as mental health is often a taboo subject that isn't talked about enough in our local cultures.`,
    tags: ["Research", "Target Audience", "Mental Health", "Awareness"],
    image: "/images/placeholder.jpg",
    gallery: ["/images/placeholder.jpg"],
  },
  {
    id: 5,
    slug: "main-idea",
    title: "Main Idea",
    date: "February 21",
    readTime: "1 min read",
    category: "Pre-Production",
    excerpt:
      "Now here we are, sitting in our class with our teacher thinking about an Idea for our short film because apparently we were the only group who didn't have an idea yet.",
    content: `Now here we are, sitting in our class with our teacher thinking about an Idea for our short film because apparently we were the only group who didn't have an idea yet. Now after watching multiple projects of A levels Graduates we come to a conclusion that we will go for an idea where there will be a guy who will be somewhat in a dream within a dream and will keep trying to turn of the tap for water but he wakes up again and again just to see that the water is still dripping and in the end he just wakes to see that that everything is ok and it was just a dream.`,
    tags: ["Pre-Production", "Concept", "Idea"],
    image: "/images/placeholder.jpg",
    gallery: ["/images/placeholder.jpg"],
  },
  {
    id: 6,
    slug: "casting",
    title: "Casting",
    date: "February 21",
    readTime: "1 min read",
    category: "Pre-Production",
    excerpt:
      "After weeks of hunting for a person to cast in our film, we finally found a person named Shahan Akbar.",
    content: `After weeks of hunting for a person to cast in our film, we finally found a person named Shahan Akbar. He's a close friend of Ziyad's and on top of that he was also really good at acting, so he was a perfect match for our film and we are definitely looking forward to work with him in the future.`,
    tags: ["Pre-Production", "Casting", "Actor"],
    image: "/images/casting-new.jpeg",
    gallery: ["/images/casting-new.jpeg"],
  },
  {
    id: 7,
    slug: "equipment",
    title: "Equipment",
    date: "February 21",
    readTime: "1 min read",
    category: "Pre-Production",
    excerpt:
      "As student filmmakers without a stable income, we decided to use whatever gear we already had — and honestly, we think it's more than enough.",
    content: `We personally think that as student filmmakers who don't have any stable income source of our own, we won't be able to afford renting out high-end camera gear — so we think that we should use whatever we have. I personally believe that we will be able to produce a good quality production with our available gear. Which is an iPhone 15 Pro Max, a Cinepeer CQ5 Gimbal, and a Tripod. However, we will be purchasing some equipment for lighting as that is very important.

Here's the full list of equipment we used for our film:

- iPhone 15 Pro Max (main camera)
- Cinepeer CQ5 Gimbal (for smooth moving shots)
- Standard Tripod (for stable, locked-off shots)
- Two RGB LED Stick lights (Key lights)
- Two High Wattage LED bulbs (additional lighting)`,
    tags: ["Pre-Production", "Equipment", "Camera"],
    image: "/images/equipment-new.jpeg",
    gallery: ["/images/equipment-new.jpeg", "/images/gimbal-new.jpeg"],
  },
  {
    id: 8,
    slug: "budgeting",
    title: "Budgeting",
    date: "February 22",
    readTime: "1 min read",
    category: "Pre-Production",
    excerpt:
      "So me and Ziyad sat down and thought about the budget for our project and since we are just students we didn't have much of a budget.",
    content: `So me and Ziyad sat down and thought about the budget for our project and since we are just students we didn't have much of a budget and wanted to finish the project as soon as possible and for as cheap as possible. So I used Chat GPT to create a budget sheet for us.

After some consultation with our Media teacher we came to a conclusion that we need not one but two kinds of lights — a Key light and a Fill light. Sir also told us how we could make a cheap Key light ourselves which would cost around PKR 5K, so that combined with a Fill light would bring the total to around PKR 15K. This was pretty good considering renting the lights was costing around PKR 3K per day — and in case of any reshoots we would have to rent them out again — so buying them outright was clearly the better idea.

After noting down all the budgets we gave the list to ChatGPT to produce a budget sheet. Media Studies is pretty expensive...`,
    tags: ["Pre-Production", "Budget", "Planning"],
    image: "/images/budgeting-new.jpg",
    gallery: ["/images/budgeting-new.jpg"],
  },
  {
    id: 9,
    slug: "getting-the-fill-light",
    title: "Getting the Fill Light",
    date: "February 22",
    readTime: "1 min read",
    category: "Pre-Production",
    excerpt:
      "In the start we were really worried about the lighting of our project and specifically the fill light.",
    content: `In the start we were really worried about the lighting of our project and specifically the fill light but thankfully our friend Shahan اکبر (the main actor in our film) had a ring light at his home so he let us use that as a fill light for our film.`,
    tags: ["Pre-Production", "Lighting", "Equipment"],
    image: "/images/placeholder.jpg",
    gallery: ["/images/placeholder.jpg"],
  },
  {
    id: 10,
    slug: "getting-the-key-light",
    title: "Getting the Key Light",
    date: "February 22",
    readTime: "1 min read",
    category: "Pre-Production",
    excerpt:
      "Ziyad had a pair of RGB stick lights which he got from China a year ago.",
    content: `Ziyad had a pair of RGB stick lights which he got from China a year ago, they were pretty high quality lights and we decided to use those as our main key lights for our film.`,
    tags: ["Pre-Production", "Lighting", "Equipment"],
    image: "/images/key-light-new.jpeg",
    gallery: ["/images/key-light-new.jpeg"],
  },
  {
    id: 11,
    slug: "shoot-location",
    title: "Shoot Location",
    date: "February 22",
    readTime: "1 min read",
    category: "Production",
    excerpt:
      "We Decided to shoot our film in Ziyad's house as it was accessible to everyone.",
    content: `We Decided to shoot our film in Ziyad's house as it was accessible to everyone and on top of that his parents were away on an international trip so he was home alone, meaning we could shoot our project while having fun.`,
    tags: ["Production", "Location", "Shoot"],
    image: "/images/shoot-location-new.jpeg",
    gallery: ["/images/shoot-location-new.jpeg"],
  },
  {
    id: 12,
    slug: "shoot-day-1",
    title: "Shoot Day 1",
    date: "February 22",
    readTime: "1 min read",
    category: "Production",
    excerpt:
      "Today was the first day of our shoot and honestly things were harder than I thought they would be.",
    content: `Today was the first day of our shoot and honestly things were harder than I thought they would be but we still managed to get some of the shots that we needed but we still had much work left for the next day.`,
    tags: ["Production", "Shoot", "Behind the Scenes"],
    image: "/images/shoot-day-1-new.jpeg",
    gallery: ["/images/shoot-day-1-new.jpeg", "/images/shoot-day-1-alt.jpeg"],
  },
  {
    id: 13,
    slug: "shoot-day-2",
    title: "Shoot Day 2",
    date: "February 22",
    readTime: "1 min read",
    category: "Production",
    excerpt:
      "Finally! Today was the second day of our shoot and I can confidently say that we have captured all the necessary shots.",
    content: `Finally! Today was the second day of our shoot and I can confidently say that we have captured all the necessary shots we need for our project and honestly, I think our project will turn out to be decent.`,
    tags: ["Production", "Shoot", "Behind the Scenes"],
    image: "/images/shoot-day-2-new.jpeg",
    gallery: ["/images/shoot-day-2-new.jpeg"],
  },
  {
    id: 14,
    slug: "post-production",
    title: "Post Production",
    date: "February 22",
    readTime: "1 min read",
    category: "Post-Production",
    excerpt:
      "After the shoot, me and Ziyad sat down to edit our film and we were using Adobe Premiere Pro.",
    content: `After the shoot, me and Ziyad sat down to edit out film and we were using Adobe Premiere Pro for our project and honestly we really had fun doing this although a major part of the work was done by Ziyad because he is pro at this.`,
    tags: ["Post-Production", "Editing", "Adobe Premiere Pro"],
    image: "/images/editing-new.png",
    gallery: ["/images/editing-new.png"],
  },
  {
    id: 15,
    slug: "a-media-club-powered-event",
    title: "A Media Club Powered Event",
    date: "February 23",
    readTime: "1 min read",
    category: "Distribution",
    excerpt:
      "So we got to know that our school's film media club event is happening soon.",
    content: `So we got to know that our school's film media club event is happening soon so me and Ziyad decided that we will be screening our project in that event alongside other fellow media students. But we still had to take permission from the student council.`,
    tags: ["Distribution", "Event", "Screening"],
    image: "/images/placeholder.jpg",
    gallery: ["/images/placeholder.jpg"],
  },
  {
    id: 16,
    slug: "film-screening-approval",
    title: "Film Screening Approval",
    date: "February 23",
    readTime: "1 min read",
    category: "Distribution",
    excerpt:
      "Surprisingly today we got the news that the film screening has been approved by the admin.",
    content: `Surprisingly today we got the news that the film screening has been approved by the admin and all we have to do now is find a sponsor for the SMD screens and a food sponsor if possible. This is great news!`,
    tags: ["Distribution", "Approval", "Event"],
    image: "/images/placeholder.jpg",
    gallery: ["/images/placeholder.jpg"],
  },
  {
    id: 17,
    slug: "poster-crisis",
    title: "Poster Crisis",
    date: "February 23",
    readTime: "1 min read",
    category: "Distribution",
    excerpt:
      "After many tries of trying to design a perfect poster for our film ourselves, we were still unable to design a poster that looked professional.",
    content: `After many tries of trying to design a perfect poster for our film ourselves, we were still unable to design a poster that looked professional so we had no choice but to use AI to generate the poster of our film.`,
    tags: ["Distribution", "Poster", "Design"],
    image: "/images/film-poster-new.jpeg",
    gallery: ["/images/film-poster-new.jpeg"],
  },
  {
    id: 18,
    slug: "sponsor-for-the-film-premiere",
    title: "Sponsor for the Film Premiere",
    date: "February 23",
    readTime: "1 min read",
    category: "Distribution",
    excerpt:
      "The sponsor for the SMD screens was handled by another student in our class thankfully so the event was 100% confirmed.",
    content: `The sponsor for the SMD screens was handled by another student in our class thankfully so the event was 100% confirmed but we still needed a food sponsor. I reached out multiple companies for a sponsor and honestly not with much hope because sponsoring this event from marketing point of view wasn't actually very beneficial. But luckily I landed a sponsor of ice creams by a company named 'Melado'. They gave us 50 Ice creams in return for some pretty easy deliverables.`,
    tags: ["Distribution", "Sponsorship", "Event"],
    image: "/images/placeholder.jpg",
    gallery: ["/images/placeholder.jpg"],
  },
  {
    id: 19,
    slug: "the-film-premiere",
    title: "The Film Premiere",
    date: "February 23",
    readTime: "1 min read",
    category: "Distribution",
    excerpt:
      "Today was the long awaited film premiere event and our film not bad at all if we compare it to the others.",
    content: `Today was the long awaited film premiere event and our film not bad at all if we compare it to the others, but still we were really impressed by some of the work that our fellow students had done. It was a really fun day I think everyone in our class would agree! the free ice creams, the random fun we had together, the amount of students that gathered to see our work. I can confidently say that the film media club powered event in our school was a huge success! However, Sadly our Actor was unable to attend the event.`,
    tags: ["Premiere", "Event", "Screening"],
    image: "/images/film-premiere-hero.jpeg",
    gallery: [
      "/images/film-premiere-hero.jpeg",
      "/images/film-premiere-pic.png",
      "/videos/film-premiere-1.mp4",
      "/videos/film-premiere-2.mp4",
    ],
  },
  {
    id: 20,
    slug: "final-product",
    title: "Final Product",
    date: "April 21",
    readTime: "2 min read",
    category: "Final Product",
    excerpt:
      "The wait is over! After months of pre-production, filming, and editing, we are proud to present our final short film, 'Drowning In Silence'.",
    content: `The wait is over! After months of pre-production, filming, and editing, we are proud to present our final short film, 'Drowning In Silence'. This project has been an incredible journey for us as media students, and we've learned so much about the art of storytelling and filmmaking.

We hope you enjoy watching it as much as we enjoyed creating it. Thank you to everyone who supported us throughout this process!`,
    tags: ["Final Product", "Short Film", "Premiere"],
    image: "/images/hero-bg.jpg",
    gallery: ["/images/hero-bg.jpg"],
    youtubeId: "d2VoTYZ4mCI",
  },
];

export const categories = [
  "All",
  "Research and Analysis",
  "Pre-Production",
  "Production",
  "Post-Production",
  "Distribution",
  "Final Product",
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAdjacentPosts(slug: string): { prev: Post | null; next: Post | null } {
  const index = posts.findIndex((p) => p.slug === slug);
  return {
    prev: index > 0 ? posts[index - 1] : null,
    next: index < posts.length - 1 ? posts[index + 1] : null,
  };
}
