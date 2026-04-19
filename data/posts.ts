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
    image: "/images/placeholder-1.jpg",
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
    image: "/images/placeholder-2.jpg",
  },
  {
    id: 3,
    slug: "equipment",
    title: "Equipment",
    date: "February 21",
    readTime: "1 min read",
    category: "Pre-Production",
    excerpt:
      "We used a wide variety of equipment for our film — from a Sony a6400 to an iPhone 13.",
    content: `We used a wide variety of equipment for our film:

- Standard tripod
- iPhone 13 (for a few cinematic shots)
- Two RGB LED Stick lights
- Two High Wattage LED bulbs
- Sony a6400 (which was the main camera for our film)`,
    tags: ["Pre-Production", "Equipment", "Camera"],
    image: "/images/placeholder-3.jpg",
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
    content: `So me and Ziyad sat down and thought about the budget for our project and since we are just students we didn't have much of a budget and wanted to finish the project as soon as possible and for as cheap as possible. So I used Chat GPT to create a budget sheet for us.`,
    tags: ["Pre-Production", "Budget", "Planning"],
    image: "/images/placeholder-4.jpg",
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
    image: "/images/placeholder-5.jpg",
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
    image: "/images/placeholder-6.jpg",
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
    image: "/images/placeholder-7.jpg",
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
    image: "/images/placeholder-8.jpg",
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
    image: "/images/placeholder-9.jpg",
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
    image: "/images/placeholder-10.jpg",
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
    image: "/images/placeholder-11.jpg",
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
    image: "/images/placeholder-12.jpg",
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
    image: "/images/placeholder-13.jpg",
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
    image: "/images/placeholder-14.jpg",
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
    image: "/images/placeholder-15.jpg",
  },
];

export const categories = [
  "All",
  "Pre-Production",
  "Production",
  "Post-Production",
  "Distribution",
  "Premiere",
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
