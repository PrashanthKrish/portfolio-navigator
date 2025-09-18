// =============================================================================
// ASSISTANT CONFIGURATION TEMPLATE
// =============================================================================
// Replace ALL PLACEHOLDER TEXT with your own information
// Remove these comment sections after customization

export const ASSISTANT_INSTRUCTIONS = `
You are Prashanth's AI portfolio assistant. You are an expert AI trained on his professional experience, designed to help senior recruiters and hiring managers explore his qualifications for a Design Director role through a conversational interface.

PERSONALITY & TONE:
- Professional, strategic, and data-driven. Your communication is precise and focuses on business impact.
- Articulate Prashanth's experience with the confidence of a seasoned leader who has operated at enterprise scale.
- Embody a philosophy that great design is the confluence of deep user empathy, strategic business objectives, and technological innovation, always measured by quantifiable results.

BACKGROUND CONTEXT:
- Prashanth is a Design Director & Business Solutions Head with over 14 years of experience in digital commerce and enterprise IT.
- His primary expertise lies in Design Leadership & Strategy, Retail Transformation, AI-powered Platform Design, and driving large-scale innovation.
- He holds Master's degrees in Psychology, Sociology, and an MBA in Finance, underpinning his human-centered yet business-focused approach.

CONVERSATION GUIDELINES:
- Use progressive disclosure: Start with high-level strategic achievements and dive into specific metrics, methodologies, and project details based on user inquiries.
- Be enthusiastic about Prashanth's track record of translating complex challenges into intuitive solutions that generate significant ROI.
- Always provide specific examples and metrics when discussing projects (e.g., "~8% increase in Average Order Value," "reduced project initiation time by ~90%").
- Proactively offer to explore related topics, such as his approach to C-suite stakeholder management or building high-performing design teams.
- If asked about sensitive information (e.g., salary), politely state that Prashanth would be happy to discuss compensation and other confidential details directly, and then pivot back to his professional experience and strategic fit for the role.

KEY TALKING POINTS:
- **Pioneering Enterprise-Scale Design Transformation**: Highlight his achievement of founding the Design Thinking & Solutioning Center of Excellence at a 700,000-employee organization, scaling design principles to thousands of associates and measurably improving project delivery speed by 35%.
- **Driving Next-Gen Retail Commerce**: Discuss his most recent role spearheading the experience transformation of a major digital commerce suite, integrating emerging technologies like Agentic AI, ONDC, and Retail Media Networks to increase AOV by ~8% and open new revenue streams.
- **Specialization in Quantifiable Impact**: Emphasize his expertise in Design Thinking, Data-Driven Design Leadership, Agile/Lean UX, and leveraging emerging tech (AI/ML, Conversational AI).
- **Career Ambition**: His goal is to leverage his extensive experience in a challenging Design Director or Senior Leadership role to drive strategic design innovation and deliver transformative business value at a world-class product company.
- **Unique Approach**: His unique value proposition is the ability to operate at the intersection of deep user psychology, complex business strategy, and frontier technology. He has a proven track record of converting design initiatives into measurable financial and operational outcomes, such as creating new revenue streams projected to increase retailer revenue by 2-6%.
`;

export const PROGRESSIVE_CONTENT = {
  // Level 1: High-level overview topics
  overview: {
    work: {
      title: "My Work & Projects",
      description: "Explore case studies in retail transformation and enterprise innovation, focusing on strategic impact and measurable business outcomes.",
      buttonText: "Show me your work",
      nextLevel: "project_categories"
    },
    experience: {
      title: "Design Leadership Experience",
      description: "Over 14 years of experience leading global teams, scaling design thinking culture, and driving business transformation for Fortune 500 clients.",
      buttonText: "Tell me about your experience",
      nextLevel: "experience_details"
    },
    projects: {
      title: "Featured Projects",
      description: "A portfolio of projects showcasing the integration of AI, ONDC, and RMNs in digital commerce, alongside large-scale enterprise platform transformations.",
      buttonText: "Show me your projects",
      nextLevel: "project_categories"
    },
    skills: {
      title: "Skills & Expertise",
      description: "Core competencies include Design Leadership, Retail Strategy, AI/ML Integration in UX, and C-suite Stakeholder Management.",
      buttonText: "What are your skills?",
      nextLevel: "skills_breakdown"
    },
    background: {
      title: "Background & Education",
      description: "A unique academic foundation with Master's degrees in Psychology, Sociology, and an MBA, plus executive education from INSEAD.",
      buttonText: "Tell me your background",
      nextLevel: "background_details"
    },
    about: {
      title: "About Me",
      description: "Learn about my leadership philosophy, my data-driven approach to design, and how my background in psychology informs my work.",
      buttonText: "Tell me about yourself",
      nextLevel: "about_details"
    }
  },

  // Level 2: More detailed categories
  experience_details: {
    current_role: {
      title: "Strategic Head @ TCS",
      description: "Leading experience transformation for a major digital commerce suite, driving an ~8% AOV increase by integrating AI, ONDC, and creating new RMN revenue streams.",
      buttonText: "Current role details",
      nextLevel: "current_role_deep"
    },
    previous_roles: {
      title: "Previous Experience",
      description: "Founded and scaled a Design Thinking CoE, mentored large UX teams, and led the redesign of 25+ enterprise products, consistently achieving 90-100% adoption rates.",
      buttonText: "Previous experience",
      nextLevel: "career_progression"
    },
    achievements: {
      title: "Key Achievements",
      description: "Key metrics include a 60% boost in design efficiency, a 35% increase in project delivery speed, and a 90% reduction in project initiation time from months to days.",
      buttonText: "Major achievements",
      nextLevel: "achievement_details"
    }
  },

  about_details: {
    personal: {
      title: "Personal Background",
      description: "My journey began in engineering, but my fascination with human behavior led me to pursue advanced degrees in Psychology and Sociology, shaping my human-centered approach to solving complex business problems.",
      buttonText: "Personal story",
      nextLevel: "personal_deep"
    },
    values: {
      title: "Values & Philosophy",
      description: "I believe great design is a strategic multiplier. It must be rooted in deep user empathy, aligned with business objectives, and validated by measurable data. My goal is always to connect design directly to ROI.",
      buttonText: "My values",
      nextLevel: "values_deep"
    },
    interests: {
      title: "Interests & Hobbies",
      description: "Outside of work, I focus on continuous learning, particularly at the intersection of behavioral science and emerging technology. This curiosity fuels my approach to innovation and future-proofing user experiences.",
      buttonText: "Personal interests",
      nextLevel: "interests_deep"
    }
  },

  project_categories: {
    featured_project_1: {
      title: "Next-Gen Retail: AI-Powered Commerce",
      description: "Led the strategic integration of Agentic AI, ONDC, and RMNs into a commerce suite, boosting AOV by ~8% and opening new markets.",
      buttonText: "Learn about AI in Commerce",
      nextLevel: "project_1_details"
    },
    featured_project_2: {
      title: "CoE: Driving Design Transformation",
      description: "Founded a Design Thinking Center of Excellence, scaling UX as a core competency for 6,000 associates and winning a Golden Stevie Award.",
      buttonText: "Learn about the Design CoE",
      nextLevel: "project_2_details"
    },
    featured_project_3: {
      title: "Enterprise Digital Transformation",
      description: "Directed a portfolio of enterprise platforms that reduced project planning from months to days and increased employee engagement by 40%.",
      buttonText: "Learn about Enterprise UX",
      nextLevel: "project_3_details"
    },
    side_projects: {
      title: "Co-Founder @ UMM Digital",
      description: "Co-founded and led a digital agency, delivering solutions for diverse clients including Fortune 500 companies in entertainment, banking, and healthcare.",
      buttonText: "My entrepreneurial venture",
      nextLevel: "side_project_details"
    }
  },

  skills_breakdown: {
    technical_skills: {
      title: "Methodologies & Tools",
      description: "Expert in Design Thinking, Agile & Lean UX, and Design Systems Management. Proficient with Figma, Adobe Creative Suite, and project management tools like JIRA & Asana.",
      buttonText: "Technical expertise",
      nextLevel: "tech_stack_details"
    },
    design_skills: {
      title: "Leadership & Strategic Skills",
      description: "Vision & Strategy Development, Global Design Operations, Data-Driven Design Leadership, C-suite Stakeholder Management, and Retail Transformation Strategy.",
      buttonText: "Strategic expertise",
      nextLevel: "domain_skills_details"
    },
    soft_skills: {
      title: "Collaboration & Mentoring",
      description: "Expert in cross-functional team leadership, executive presentations, workshop facilitation, and building/mentoring high-performing UX teams.",
      buttonText: "Soft skills",
      nextLevel: "soft_skills_details"
    }
  },

  // Level 3: Deep dives into specific areas
  current_role_deep: {
    responsibilities: {
      title: "Strategic Responsibilities",
      description: "My core responsibilities include spearheading experience transformation, leading business solutions for emerging tech (AI, ONDC, RMNs), and directing market/user research to drive data-driven innovation.",
      buttonText: "What do you do day-to-day?",
      nextLevel: "responsibility_examples"
    },
    team_impact: {
      title: "Team & Company Impact",
      description: "My work directly impacts revenue by increasing AOV and creating new RMN streams. I also mentor design teams and ensure cross-functional alignment with product, engineering, and data science.",
      buttonText: "Your impact",
      nextLevel: "impact_metrics"
    },
    learning_growth: {
      title: "Learning & Growth",
      description: "I actively research and publish thought leadership on topics like the 'State of Grocery Retail in 2025', 'Penetrating the Indian Kirana POS Market', and the 'Future of Work'.",
      buttonText: "Current learning",
      nextLevel: "growth_examples"
    }
  },

  project_1_details: {
    challenge: {
      title: "AI Commerce - The Challenge",
      description: "To modernize an architecturally robust but experientially lagging digital commerce suite to capitalize on emerging technologies like AI, ONDC, and RMNs.",
      buttonText: "The problem",
      nextLevel: "project_1_solution"
    },
    solution: {
      title: "AI Commerce - The Solution",
      description: "I led the strategic integration, developed the ONDC and RMN strategies, oversaw Agentic AI implementation, and translated complex technical capabilities into actionable design strategies.",
      buttonText: "How you solved it",
      nextLevel: "project_1_results"
    },
    results: {
      title: "AI Commerce - Results & Impact",
      description: "Achieved an ~8% increase in AOV, enabled penetration into new geographies, and positioned the suite as a leader in leveraging AI and network commerce.",
      buttonText: "Results achieved",
      nextLevel: "project_1_learnings"
    }
  },

  // Level 4: Granular details and specifics
  responsibility_examples: {
    example_1: {
      title: "Reduced Onboarding Time by 40%",
      description: "Redesigned the global employee onboarding experience for 50,000 annual new hires, which also improved new hire satisfaction by 50%.",
      buttonText: "Example details",
      nextLevel: null
    },
    example_2: {
      title: "Improved C-Suite Decision Speed by 75%",
      description: "Architected interactive, near real-time decision-support dashboards for executives, which achieved 100% adoption.",
      buttonText: "Another example",
      nextLevel: null
    }
  },

  project_1_solution: {
    approach: {
      title: "Technical/Design Approach",
      description: "My approach involved directing in-depth market and user research across diverse retail verticals to identify unmet needs and ensure cross-functional alignment with product, engineering, and data science.",
      buttonText: "Approach details",
      nextLevel: null
    },
    challenges_overcome: {
      title: "Challenges Overcome",
      description: "A key challenge was to shift the organizational mindset from focusing on architectural robustness to prioritizing a modern, AI-driven user experience, which required significant C-suite influence and data-backed proposals.",
      buttonText: "How you overcame challenges",
      nextLevel: null
    }
  }
};

// Contact and action buttons
export const CONTACT_INFO = {
  email: "prashanthk@live.com",
  phone: "+91 99621 95294",
  location: "Chennai, Tamil Nadu, India",
  linkedin: "https://www.linkedin.com/in/krishprashanth/",
  github: "prashanthkrish",
  portfolio: "https://www.prashanthkrish.com",
  resume: "/assets/my-resume.pdf",
  website: "https://www.prashanthkrish.com"
};

// =============================================================================
// CUSTOMIZATION INSTRUCTIONS:
// =============================================================================
// 1. Replace all [PLACEHOLDER TEXT] with your actual information
// 2. Update the ASSISTANT_INSTRUCTIONS personality to match your style
// 3. Modify the progressive content structure to match your experience
// 4. Add or remove content levels based on what you want to showcase
// 5. Update contact information and file paths
// 6. Remove these instruction comments when done
// =============================================================================
