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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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
    id: 11,
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
    id: 12,
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
    id: 13,
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
    id: 14,
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
    id: 15,
    slug: "the-film-premiere",
    title: "The Film Premiere",
    date: "February 23",
    readTime: "1 min read",
    category: "Premiere",
    excerpt:
      "Today was the long awaited film premiere event and our film was not bad at all if we compare it to the others.",
    content: `Today was the long awaited film premiere event and our film was not bad at all if we compare it to the others, but still we were really impressed by some of the work that our fellow students had done. It was a really fun day I think everyone in our class would agree! the free ice creams, the random fun we had together, the amount of students that gathered to see our work. I can confidently say that the film media club powered event in our school was a huge success! However, Sadly our Actor was unable to attend the event.`,
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
    id: 16,
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
  "Pre-Production",
  "Production",
  "Post-Production",
  "Distribution",
  "Premiere",
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
