/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  client: string;
  tools: string[];
  youtubeId?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  initials: string;
  company: string;
  rating: number;
  quote: string;
}

export interface Capability {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface WorkflowStep {
  phase: string;
  title: string;
  description: string;
  details: string[];
}
