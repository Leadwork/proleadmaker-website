export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
  category: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "How to Build a High-Converting B2B Outbound Strategy in 2026",
    slug: "hight-converting-b2b-outbound-strategy",
    excerpt: "Learn the secrets of signal-based prospecting and how to reach the right decision-makers at the perfect time.",
    content: `
      <p>Outbound sales has changed. In 2026, generic blast emails no longer work. To win, you need <strong>Signal-Based Lead Intelligence</strong>.</p>
      
      <h2>What is Signal-Based Prospecting?</h2>
      <p>It's the process of identifying prospects based on real-time events that indicate a higher intent to buy. These signals include:</p>
      <ul>
        <li>Recent funding rounds</li>
        <li>New executive hires</li>
        <li>Technologies used by the company</li>
        <li>Job postings for specific roles</li>
      </ul>

      <h2>The Triple-Verification Advantage</h2>
      <p>Data accuracy is the foundation of outreach. At ProLeadMaker, we don't just scrape; we verify every single lead through three distinct layers of validation...</p>
    `,
    date: "May 12, 2026",
    author: "MD. Al Amin",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    category: "Strategy",
    readTime: "6 min read"
  },
  {
    id: "2",
    title: "Why Manual Data Research Beats Automated Scraping Every Time",
    slug: "manual-vs-automated-data-research",
    excerpt: "Discover why human-verified data leads to 40% higher open rates and fewer bounce backs in your cold email campaigns.",
    content: `
      <p>Automation is great, but when it comes to contact data, it often fails to capture the nuances of human organizations...</p>
      
      <h2>The Problem with Generic Scraping</h2>
      <p>Automated tools often pick up outdated titles, catch-all emails, and irrelevant contacts. This leads to high bounce rates and damage to your sender reputation.</p>

      <h2>The Human Touch in Data</h2>
      <p>Our manual research team identifies the exact person responsible for the problem your product solves. We don't just find an email; we find the <em>right</em> person...</p>
    `,
    date: "May 10, 2026",
    author: "MD. Al Amin",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    category: "Data Quality",
    readTime: "4 min read"
  },
  {
    id: "3",
    title: "The Ultimate Guide to Local Lead Generation for Service Businesses",
    slug: "local-lead-generation-guide",
    excerpt: "A step-by-step guide for HVAC, plumbing, and real estate businesses to dominate their local market with targeted leads.",
    content: `
      <p>For local businesses, location is everything. But blanket marketing is expensive and inefficient...</p>
      
      <h2>Targeting the Right Neighborhoods</h2>
      <p>We use geographic filters combined with property signals to identify leads that are most likely to need your services...</p>
    `,
    date: "May 5, 2026",
    author: "MD. Al Amin",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    category: "Local Growth",
    readTime: "8 min read"
  }
];
