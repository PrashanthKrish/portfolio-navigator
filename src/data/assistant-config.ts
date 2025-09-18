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
      description: "Featured projects and case studies showcasing design and development skills",
      buttonText: "Show me your work",
      nextLevel: "project_categories"
    },
    experience: {
      title: "[Your Field] Experience",
      description: "[Brief overview of your experience - e.g., '5+ years in product design with focus on user research and design systems']",
      buttonText: "Tell me about your experience",
      nextLevel: "experience_details"
    },
    projects: {
      title: "Featured Projects",
      description: "[Brief description of your project portfolio - e.g., 'Mobile apps, web platforms, and design systems for fintech and healthcare']",
      buttonText: "Show me your projects",
      nextLevel: "project_categories"
    },
    skills: {
      title: "Skills & Expertise",
      description: "[Your core competencies - e.g., 'User research, prototyping, React development, and team leadership']",
      buttonText: "What are your skills?",
      nextLevel: "skills_breakdown"
    },
    background: {
      title: "Background & Education",
      description: "[Your educational and career background - e.g., 'Computer Science degree, transitioned from engineering to design']",
      buttonText: "Tell me your background",
      nextLevel: "background_details"
    },
    about: {
      title: "About Me",
      description: "Learn about my background, interests, and what drives my work in design and development",
      buttonText: "Tell me about yourself",
      nextLevel: "about_details"
    }
  },

  // Level 2: More detailed categories
  experience_details: {
    current_role: {
      title: "[Current Job Title] at [Company]",
      description: "[What you do in your current role - responsibilities, team size, key achievements]",
      buttonText: "Current role details",
      nextLevel: "current_role_deep"
    },
    previous_roles: {
      title: "Previous Experience",
      description: "[Brief overview of past positions and how they led to current role]",
      buttonText: "Previous experience",
      nextLevel: "career_progression"
    },
    achievements: {
      title: "Key Achievements",
      description: "[Your most significant professional accomplishments]",
      buttonText: "Major achievements",
      nextLevel: "achievement_details"
    }
  },

  about_details: {
    personal: {
      title: "Personal Background",
      description: "My journey into design and technology, what motivates me, and my approach to problem-solving",
      buttonText: "Personal story",
      nextLevel: "personal_deep"
    },
    values: {
      title: "Values & Philosophy",
      description: "The principles that guide my work and how I approach design challenges",
      buttonText: "My values",
      nextLevel: "values_deep"
    },
    interests: {
      title: "Interests & Hobbies",
      description: "What I enjoy outside of work and how it influences my creative process",
      buttonText: "Personal interests",
      nextLevel: "interests_deep"
    }
  },

  project_categories: {
    featured_project_1: {
      title: "[Project Name 1]",
      description: "[Brief project description - what it does, your role, impact]",
      buttonText: "Learn about [Project 1]",
      nextLevel: "project_1_details"
    },
    featured_project_2: {
      title: "[Project Name 2]", 
      description: "[Brief project description - what it does, your role, impact]",
      buttonText: "Learn about [Project 2]",
      nextLevel: "project_2_details"
    },
    featured_project_3: {
      title: "[Project Name 3]",
      description: "[Brief project description - what it does, your role, impact]", 
      buttonText: "Learn about [Project 3]",
      nextLevel: "project_3_details"
    },
    side_projects: {
      title: "Side Projects & Experiments",
      description: "[Personal projects, open source contributions, or experimental work]",
      buttonText: "Side projects",
      nextLevel: "side_project_details"
    }
  },

  skills_breakdown: {
    technical_skills: {
      title: "Technical Skills",
      description: "[Programming languages, tools, frameworks, etc.]",
      buttonText: "Technical expertise",
      nextLevel: "tech_stack_details"
    },
    design_skills: {
      title: "[Your Domain] Skills", // e.g., "Design Skills", "Leadership Skills"
      description: "[Domain-specific skills relevant to your field]",
      buttonText: "[Domain] expertise",
      nextLevel: "domain_skills_details"
    },
    soft_skills: {
      title: "Leadership & Collaboration",
      description: "[Communication, teamwork, mentoring, project management skills]",
      buttonText: "Soft skills",
      nextLevel: "soft_skills_details"
    }
  },

  // Level 3: Deep dives into specific areas
  current_role_deep: {
    responsibilities: {
      title: "Day-to-Day Responsibilities",
      description: "[Detailed breakdown of what you do daily/weekly]",
      buttonText: "What do you do day-to-day?",
      nextLevel: "responsibility_examples"
    },
    team_impact: {
      title: "Team & Company Impact",
      description: "[How your work affects the team, product, and company goals]",
      buttonText: "Your impact",
      nextLevel: "impact_metrics"
    },
    learning_growth: {
      title: "Learning & Growth",
      description: "[What you're currently learning, how you're developing professionally]",
      buttonText: "Current learning",
      nextLevel: "growth_examples"
    }
  },

  project_1_details: {
    challenge: {
      title: "[Project 1] - The Challenge",
      description: "[What problem this project solved, why it was important]",
      buttonText: "The problem",
      nextLevel: "project_1_solution"
    },
    solution: {
      title: "[Project 1] - The Solution", 
      description: "[Your approach, methodology, key decisions]",
      buttonText: "How you solved it",
      nextLevel: "project_1_results"
    },
    results: {
      title: "[Project 1] - Results & Impact",
      description: "[Outcomes, metrics, user feedback, business impact]",
      buttonText: "Results achieved", 
      nextLevel: "project_1_learnings"
    }
  },

  // Level 4: Granular details and specifics
  responsibility_examples: {
    example_1: {
      title: "[Specific Responsibility Example 1]",
      description: "[Detailed example of a responsibility with context and outcomes]",
      buttonText: "Example details",
      nextLevel: null
    },
    example_2: {
      title: "[Specific Responsibility Example 2]",
      description: "[Another detailed example with metrics or results]",
      buttonText: "Another example",
      nextLevel: null
    }
  },

  project_1_solution: {
    approach: {
      title: "Technical/Design Approach",
      description: "[Specific methodologies, tools, frameworks used and why]",
      buttonText: "Approach details",
      nextLevel: null
    },
    challenges_overcome: {
      title: "Challenges Overcome",
      description: "[Specific obstacles faced and how you overcame them]",
      buttonText: "How you overcame challenges",
      nextLevel: null
    }
  }
};

// Contact and action buttons
export const CONTACT_INFO = {
  email: "hello@yourname.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  linkedin: "your-linkedin-username", 
  github: "your-github-username", // if applicable
  portfolio: "https://yourportfolio.com", // if you have a separate portfolio site
  resume: "/assets/my-resume.pdf", // Path to your resume file
  website: "https://yourwebsite.com"
};

export const ACTION_BUTTONS = {
  resume: {
    text: "Download Resume",
    action: "download_resume"
  },
  contact: {
    text: "Get in Touch", 
    action: "show_contact"
  },
  portfolio: {
    text: "View Full Portfolio",
    action: "external_portfolio" // if you have a separate portfolio site
  }
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
