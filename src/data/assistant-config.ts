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
      title: "Strategic Impact & Projects",
      description: "Explore key projects in retail transformation and enterprise innovation with measurable business outcomes.",
      buttonText: "Show me his impact",
      nextLevel: "project_categories"
    },
    experience: {
      title: "Leadership Experience",
      description: "Over 14 years leading global teams, scaling design culture, and driving business transformation in retail and enterprise IT.",
      buttonText: "Tell me about his experience",
      nextLevel: "experience_details"
    },
    skills: {
      title: "Core Competencies",
      description: "Deep expertise in Design Leadership, Retail Strategy, AI integration, and building high-performing UX teams.",
      buttonText: "What are his core skills?",
      nextLevel: "skills_breakdown"
    },
    background: {
      title: "Thought Leadership & Education",
      description: "Industry analysis on retail trends, publications on design, and a unique academic background combining Psychology, Sociology, and an MBA.",
      buttonText: "Tell me his background",
      nextLevel: "background_details"
    }
  },

  // Level 2: More detailed categories
  experience_details: {
    current_role: {
      title: "Strategic Head, Retail Initiatives @ TCS",
      description: "Led experience transformation for a major digital commerce suite, integrating AI, ONDC, and RMNs to drive an ~8% AOV increase and create new revenue streams.",
      buttonText: "Details of current role",
      nextLevel: "current_role_deep"
    },
    previous_roles: {
      title: "Previous Leadership Roles",
      description: "Founded and led a Design Thinking Center of Excellence, scaled design culture to 6,000 associates, and drove 90-100% platform adoption rates as a Design Director.",
      buttonText: "Explore previous roles",
      nextLevel: "career_progression"
    },
    achievements: {
      title: "Key Career Achievements",
      description: "Quantifiable successes include a 60% boost in design efficiency, a 25% improvement in UX designer retention, and a 90% reduction in project initiation time.",
      buttonText: "Show major achievements",
      nextLevel: "achievement_details"
    }
  },

  project_categories: {
    featured_project_1: {
      title: "Next-Gen Retail: AI-Powered Commerce",
      description: "Spearheaded the integration of Agentic AI, ONDC, and RMNs into a commerce suite, boosting AOV by ~8% and opening new markets.",
      buttonText: "Explore the AI Commerce project",
      nextLevel: "project_1_details"
    },
    featured_project_2: {
      title: "CoE: Driving Design Transformation",
      description: "Founded a Center of Excellence for Design Thinking, scaling UX as a core competency for 6,000 associates and winning a Golden Stevie Award.",
      buttonText: "Learn about the CoE",
      nextLevel: "project_2_details"
    },
    featured_project_3: {
      title: "Enterprise Digital Transformation",
      description: "Led a portfolio of initiatives that reduced project planning from months to days, increased employee engagement by 40%, and collaboration by 45%.", 
      buttonText: "See enterprise projects",
      nextLevel: "project_3_details"
    },
    thought_leadership: {
      title: "Industry Insights & Publications",
      description: "Authored strategic analyses on the future of retail, voice ordering, the Indian Kirana market, and the future of work.",
      buttonText: "Explore his publications",
      nextLevel: "thought_leadership_details"
    }
  },

  skills_breakdown: {
    leadership_skills: {
      title: "Design Leadership & Strategy",
      description: "Vision Development, Global Design Operations, C-suite Stakeholder Management, Team Building, and Change Management.",
      buttonText: "Leadership expertise",
      nextLevel: "leadership_skills_details"
    },
    domain_skills: {
      title: "Retail & Business Acumen",
      description: "Retail Transformation Strategy, Digital Commerce (Omnichannel), ONDC Implementation, Retail Media Networks (RMN), and Business Solution Design.",
      buttonText: "Retail expertise",
      nextLevel: "domain_skills_details"
    },
    tech_innovation_skills: {
      title: "Innovation & Emerging Tech",
      description: "AI/ML Integration in UX, Agentic AI Design, Conversational AI Strategy, and Futures Thinking.",
      buttonText: "Innovation expertise",
      nextLevel: "tech_skills_details"
    }
  },

  // Level 3: Deep dives into specific areas
  current_role_deep: {
    ondc_rmn: {
      title: "ONDC & RMN Strategy",
      description: "Architected the ONDC framework, expanding market reach by an estimated 15%, and launched an RMN strategy projected to add 2-6% to retailer revenue.",
      buttonText: "Explain his ONDC/RMN work",
      nextLevel: "impact_metrics"
    },
    agentic_ai: {
      title: "Agentic AI Implementation",
      description: "Oversaw AI use for personalization, virtual advisors, and fraud detection, enhancing key CX metrics by an estimated 15-20%.",
      buttonText: "How did he use Agentic AI?",
      nextLevel: "impact_metrics"
    },
    gpt_guide: {
      title: "ChatGPT Buying Guide",
      description: "Championed integration of a GPT-based guide that improved user task completion by ~22% and cut related support queries by ~41%.",
      buttonText: "Tell me about the Buying Guide",
      nextLevel: "impact_metrics"
    }
  },

  project_1_details: {
    challenge: {
      title: "AI Commerce - The Challenge",
      description: "The core challenge was to modernize an architecturally robust but experientially outdated commerce suite to capitalize on emerging tech like AI, ONDC, and RMNs.",
      buttonText: "What was the problem?",
      nextLevel: "project_1_solution"
    },
    solution: {
      title: "AI Commerce - Strategic Contribution", 
      description: "Prashanth led the strategic integration of these technologies, directed market research, translated technical capabilities into design strategies, and ensured alignment across product, engineering, and data science.",
      buttonText: "How did he solve it?",
      nextLevel: "project_1_results"
    },
    results: {
      title: "AI Commerce - Business Results",
      description: "The initiative achieved an ~8% AOV increase, enabled penetration into new geographies and retail IT spending segments, and positioned the suite as a market leader in AI and network commerce.",
      buttonText: "What were the results?", 
      nextLevel: "project_categories"
    }
  },
  
  project_2_details: {
     challenge: {
      title: "CoE - The Challenge",
      description: "The primary challenge was to establish and embed Design Thinking and UX as core, respected competencies within a massive, engineering-dominated Enterprise IT unit to drive innovation.",
      buttonText: "What was the challenge?",
      nextLevel: "project_2_solution"
    },
    solution: {
      title: "CoE - Key Initiatives", 
      description: "He established a UX career framework (90% adoption), gamified career progression, led design for a custom Agile platform (100% adoption), and built a secure in-house design collaboration tool (95% adoption).",
      buttonText: "What were the key initiatives?",
      nextLevel: "project_2_results"
    },
    results: {
      title: "CoE - Organizational Impact",
      description: "The CoE drove a 25% improvement in UX designer retention, a 35% increase in project delivery speed, a 60% boost in design efficiency, and a significant lift in employee satisfaction.",
      buttonText: "What was the impact?", 
      nextLevel: "project_categories"
    }
  },

  // Level 4: Granular details
    impact_metrics: {
    aov_increase: {
      title: "~8% Increase in Average Order Value",
      description: "Achieved by implementing next-generation retail experiences and personalized recommendations powered by Agentic AI across web, mobile, and in-store channels.",
      buttonText: "More about AOV lift",
      nextLevel: null
    },
    efficiency_gains: {
      title: "90% Reduction in Project Initiation Time",
      description: "By designing and driving adoption of a unified project planning platform, he reduced a process that took months down to just two days.",
      buttonText: "More on efficiency gains",
      nextLevel: null
    },
     adoption_rates: {
      title: "90-100% Platform Adoption Rates",
      description: "Consistently drove massive adoption for new enterprise platforms through a combination of user-centered design, strategic communication, and effective change management.",
      buttonText: "How he drives adoption",
      nextLevel: null
    }
  }
};

// Contact and action buttons
export const CONTACT_INFO = {
  email: "prashanthk@live.com",
  linkedin: "https://www.linkedin.com/in/krishprashanth/", 
  portfolio: "https://www.prashanthkrish.com",
  resume: "/assets/Prashanth_Kothandaraman_Resume.pdf" // Update this path if needed
};

export const ACTION_BUTTONS = {
  resume: {
    text: "Download Full Resume",
    action: "download_resume"
  },
  contact: {
    text: "Get in Touch", 
    action: "show_contact"
  },
  linkedin: {
    text: "View LinkedIn Profile",
    action: "external_linkedin" // Custom action to link out
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
