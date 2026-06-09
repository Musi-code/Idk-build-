/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PortfolioItem, Capability, Testimonial, FAQItem, WorkflowStep } from "./types";

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "seedance",
    title: "TopView - Seedance 2.0",
    description: "Make cinematic long-story visuals with rich narrative depth and character generation.",
    category: "BRAND CAMPAIGN",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA71bCTbGhJix8azbK1034s08PfI7I7wwENaP0_xFCZu92YH3l2hjWHQ48_R-9-Xh3W-WxkKUp5KtgdJNwZvRgkbo1OrCBmEpdJJKPVVIXBvAFWdogZXpM5ZTF9dfxXAwsNfjLE6GMscfjyEOhjx-RpoXcbhdwDcMwHMjEdbcRf8aIrs4HTNyjUm8IM8fE9Ssg373RNtnUGaPCU1K-68zuQlJqE_sMIHud33fNp3dshneWp8xk56MCiS_8nnIFzOGqddcgK3YFEJdfPJ7w",
    client: "TopView.AI",
    tools: ["Seedance 2.0", "Kling ai", "Veo3"],
    youtubeId: "RoPOvoHoaUc"
  },
  {
    id: "lovart",
    title: "Pro designs with Lovart agent",
    description: "Turn concepts and rough descriptions into design, art, and high-impact visual media assets.",
    category: "BRAND STORY",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRr7mGXMiJgGtyI-dScu6tvO_V7JUbfJWA6mKBoLtqcsNH4XcJ2TMrlo4EZvS4Xk_M91pfD_ctEfpLyc2g_4w3MwevRpPyVqzlZS9Y_48-hv_gNvDdL_KFVCOAnnABEvCSlZXvIL0or9S7VWuIG6Xza214BL_oo2CSfeL24M1Jwh8lSME_7kfNSyHwsxDrfGlQz0S6eN1GugTI52YioKLgbStPnpeLvc9iNCebVjfxWiQ4yN3-K1l_lydAn4Q1ILW95mU7ayzpiRH6s5M",
    client: "Lovart.AI",
    tools: ["Lovart agent", "Seedream", "Nano Banana"],
    youtubeId: "4DAhBiF-Xm4"
  },
  {
    id: "motion-visuals",
    title: "AI Motion & Visuals",
    description: "Create stunning visuals and highly dynamic storytelling videos with high-octane visual outputs.",
    category: "BRAND STORY",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZN7zG8b0vi9hc44YL_Uuvvln-g8dJ7PDPSzB-_Gi40LvZr9nPs70oJr9JRzQjc_rRNJdFeJWvsiSJIijYKnKVDWkvdupkImmuirVMmDhzZyRu5CkzfJFyVJeoIsub3usoKoRYSYunTSc4-ZGqNJrC1CbHGfBmSx-NruA4W5X5-Td7n7AqImciuwQN6cDQl-qIOl5ylmBBWgw14Rcz-I06cA0bhna-OPQVeQbmfGQ8xE_XGhOEElVme6bjTQOZK0vyKq0o1lLsMexpwkA",
    client: "Invideo.AI",
    tools: ["Seedance 2.0", "Kling ai", "Veo3"],
    youtubeId: "vAiaPlqRnHU"
  },
  {
    id: "brand-film",
    title: "Cinematic Brand Film",
    description: "Complete professional video editing integrating AI tools for high-fidelity conversion results.",
    category: "BRAND STORY",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAaiyrUaLlQLcSrAC1AGggM8rn2_Yye-b0iGZBXr6funkiwOw7xtoWVjbQHwu88f1I-wzeM92C-5npNmu3pYKpy3sXcISZu-TBo_B8mFeujTii0Fkv2uA3j5uJ7lAQWzV3BcjfHU0cBgKRBLmurL7P7ZGFDWGx-TEoRqm8BF3Yxq4cN-_67GO5i4RzKO-jv_AZL2DeoIAIGLTGpf1tP4e-pJfbAO3YABisb_DPM5wKor1OoRdbDtvkLtCL0HcbQyoEF0cwqTy70pR9bWhc",
    client: "Wondershare Filmora",
    tools: ["Filmora AI Suite", "Wondershare Vidu", "Audition", "DaVinci Resolve"],
    youtubeId: "fi_r1vI-Rxo"
  }
];

export const CAPABILITIES: Capability[] = [
  {
    id: "creative-editing",
    title: "Creative Editing Expertise",
    description: "A video creator with a sharp eye for pacing, cinematic effects, and high-impact storytelling that keeps audiences fully hooked from the first second.",
    iconName: "MovieEdit"
  },
  {
    id: "cross-platform",
    title: "Cross-Platform Reach",
    description: "Employs cutting-edge AI pipelines to transform creative ideas into highly polished, platform-optimized, ready-to-publish content — delivered incredibly fast.",
    iconName: "Hub"
  },
  {
    id: "influence",
    title: "Authentic Influence",
    description: "In-depth understanding of audience engagement and conversion triggers. We design visual elements that make users watch, share, and buy.",
    iconName: "Verified"
  },
  {
    id: "brainstorming",
    title: "AI Brainstorming",
    description: "We simplify highly complex technologies and brand value propositions into relatable, human-centered narratives that build deep customer trust.",
    iconName: "Brain"
  },
  {
    id: "brand-results",
    title: "Proven Brand Results",
    description: "Combines creative artistry with data-driven workflows, ensuring active promotion outcomes that elevate retention and drive key performance metrics.",
    iconName: "TrendingUp"
  },
  {
    id: "market-insights",
    title: "Market Insights",
    description: "Always stays ahead of emerging web and visual formats, testing beta AI models daily to create bleeding-edge pieces designed for modern impact.",
    iconName: "BarChart"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Naska",
    initials: "N",
    company: "Essence&More.",
    rating: 5,
    quote: "Exal understood our brand instantly. The content delivered was highly creative, absolutely on-point, and exceeded the exact level of premium production and scale we were looking for."
  },
  {
    id: "t2",
    name: "Victoria tang",
    initials: "VT",
    company: "Indegravity Agency",
    rating: 5,
    quote: "He has a spectacular talent for simplifying complex technical ideas without discarding the engagement factor. Our target audience was captivated and fully loved every single piece."
  },
  {
    id: "t3",
    name: "Vera Li",
    initials: "VL",
    company: "Wondershare Filmora",
    rating: 5,
    quote: "Professional, hyper-creative, and extremely easy to synchronize with desde day one. Exal brought visual solutions and story points to the table we didn't even realize we needed."
  }
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    phase: "Phase 01",
    title: "Brand Strategy Alignment",
    description: "We conduct an intensive research dive to dissect your core narrative, brand identity, and audience hooks. Goal is defining a highly structured visual and thematic roadmap.",
    details: [
      "Audience conversion analysis",
      "Narrative arc and visual storyboard formation"
    ]
  },
  {
    phase: "Phase 02",
    title: "AI Scene & Concept Design",
    description: "Our artists employ advanced latent space tools and trained custom models to iterate scenic visuals, detailed storyboards, and character designs at lighting speed.",
    details: [
      "Cinematic styling & prompt architecture",
      "High-resolution canvas mapping & scale preparation"
    ]
  },
  {
    phase: "Phase 03",
    title: "Cinematic Editing & Design",
    description: "We assemble the raw outputs into full professional timelines, synchronizing motion curves, applying sound effects assets, voiceovers, and premium visual pacing.",
    details: [
      "Frame interpolation & upscale treatment",
      "Precision spatial color grading",
      "Soundscapes & custom voice sync"
    ]
  },
  {
    phase: "Phase 04",
    title: "Distribution Delivery",
    description: "Get full-resolution master files and cross-platform variations tailored to outperform algorithms on vertical platforms vs hero horizontal displays.",
    details: [
      "Ratio conversions (16:9, 9:16, 1:1)",
      "High bitrate production file exports",
      "Performance and integration consultation"
    ]
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq1",
    question: "What specific AI generation tools do you combine?",
    answer: "We deploy state-of-the-art cinematic models such as Kling ai, Seedance, Wan ai, Midjourney. These raw generator modules are then refined with top-tier professional editing suites like Adobe Premiere, After Effects, and DaVinci Resolve to ensure high-end precision."
  },
  {
    id: "faq2",
    question: "How long does a typical campaign production take?",
    answer: "A standard highly customized cinematic brand film or long-story social visual set takes 4 to 7 business days from target storyboard approval to direct master exports. Rapid assets can be provisioned in as quick as 48 hours."
  },
  {
    id: "faq4",
    question: "Who owns the commercial rights of the finalized assets?",
    answer: "You do. Upon project delivery and sign-off, full intellectual property and absolute unrestricted commercial distribution rights are transferred to your brand for certain period with specific price structure"
  }
];
