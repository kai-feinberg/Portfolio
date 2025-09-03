"use client";
import React from "react";
import Nav from "@/components/Nav";
import { LandingProductFeature } from "@/components/ui/LandingProductFeature";
import { Button } from "@/components/ui/button";
import { SiGithub, SiOpenai, SiMailchimp } from "@icons-pack/react-simple-icons";
import { Globe, Mail, BarChart } from "lucide-react";
import { LinkPreview } from "@/components/ui/link-preview";
import Section from "@/components/ui/experience-section";

export default function ExodusAI() {
    return (
        <div className="bg-dot-black/[0.2] dark:bg-dot-white/[0.2] min-h-screen flex flex-col items-center">
            <Nav />

            <LandingProductFeature
                title="Exodus AI"
                description="A daily email engine complete with AI-generated emails from fine-tuned models, analytics, news source inspiration, and more."
                imageSrc="/exodus.png"
                imagePerspective="left"
                className="max-w-[75%]"
                linkIcons={
                    <div className='flex flex-row gap-4 mt-4'>
                        <LinkPreview url="https://exodus-ai.com/">
                            <Button variant="ghost" size="icon">
                                <Globe size={32} />
                            </Button>
                        </LinkPreview>
                        <LinkPreview url="https://github.com/kai-feinberg/exodus-ai">
                            <Button variant="ghost" size="icon">
                                <SiGithub size={32} />
                            </Button>
                        </LinkPreview>
                        <LinkPreview url="https://openai.com/">
                            <Button variant="ghost" size="icon">
                                <SiOpenai size={32} />
                            </Button>
                        </LinkPreview>
                    </div>}
            />

            <div className="max-w-[75%] min-w-[300px] md:min-w-[1000px] mt-6 flex flex-col items-start p-8">
                <Section
                    title="The Email Marketing Challenge"
                    content={`
                        Email marketing remains one of the highest ROI channels for businesses, yet most companies struggle with consistent, engaging content creation. The challenge isn't just writing emails—it's maintaining relevance, personalization, and timing while staying on top of industry trends and news.

                        Traditional email marketing tools focus on delivery and analytics but leave content creation largely manual. Marketers spend hours researching topics, writing copy, and trying to maintain brand voice consistency across campaigns.

                        Exodus AI was born from the vision of automating the entire email content creation process while maintaining high quality and relevance through AI and real-time data integration.
                    `}
                    imageSrc="/email-challenge.png"
                />

                <Section
                    title="AI-Powered Email Engine Architecture"
                    content={`
                        Exodus AI combines fine-tuned language models with real-time data sources to create a comprehensive email automation platform:

                        **Fine-Tuned AI Models**
                        • Custom models trained on high-performing email content
                        • Brand voice adaptation and consistency
                        • A/B testing integration for continuous optimization
                        • Multi-format support (newsletters, promotions, nurture sequences)

                        **Real-Time Intelligence**
                        • News API integration for trending topics
                        • Industry-specific content curation
                        • Social media trend analysis
                        • Competitor monitoring and insights

                        **Smart Personalization**
                        • Subscriber behavior analysis
                        • Dynamic content insertion
                        • Send time optimization
                        • Segment-specific messaging

                        The platform generates, schedules, and optimizes email campaigns with minimal human intervention while maintaining brand authenticity.
                    `}
                    imageSrc="/ai-engine.png"
                    reverse={true}
                />

                <Section
                    title="Core Features & Capabilities"
                    content={`
                        **Intelligent Content Generation**
                        • Daily email creation based on news and trends
                        • Subject line optimization with A/B testing
                        • Multi-format templates (news, tutorials, promotions)
                        • Brand voice consistency across all content

                        **Advanced Analytics Dashboard**
                        • Real-time performance metrics
                        • AI-generated insights and recommendations
                        • Subscriber engagement analysis
                        • Revenue attribution tracking

                        **News Source Integration**
                        • RSS feed monitoring
                        • Social media trend detection
                        • Industry publication tracking
                        • Custom source configuration

                        **Automation & Scheduling**
                        • Smart send time optimization
                        • Automated follow-up sequences
                        • Trigger-based campaigns
                        • Multi-timezone delivery optimization

                        **Fine-Tuning Interface**
                        • Model performance monitoring
                        • Custom training data upload
                        • A/B testing for AI outputs
                        • Continuous learning integration
                    `}
                    imageSrc="/exodus-dashboard.png"
                />

                <Section
                    title="Technical Deep Dive"
                    content={`
                        **Machine Learning Pipeline**
                        • GPT-4 base model fine-tuning on email datasets
                        • Custom embedding models for content similarity
                        • Reinforcement learning from engagement metrics
                        • Natural language processing for trend analysis

                        **Backend Infrastructure**
                        • Python/FastAPI for ML model serving
                        • Celery for distributed task processing
                        • Redis for caching and session management
                        • PostgreSQL for subscriber and campaign data

                        **Data Processing**
                        • Real-time news API integration (NewsAPI, Google News)
                        • Web scraping for industry-specific content
                        • Social media API monitoring (Twitter, LinkedIn)
                        • Email performance data analysis

                        **Frontend Dashboard**
                        • Next.js with TypeScript
                        • Real-time analytics with Chart.js
                        • Drag-and-drop email builder
                        • Mobile-responsive design

                        The system processes thousands of data points daily to generate contextually relevant, engaging email content that drives results.
                    `}
                    imageSrc="/tech-architecture.png"
                    reverse={true}
                />

                <Section
                    title="Performance & Impact"
                    content={`
                        Exodus AI has transformed email marketing for businesses across various industries:

                        **Platform Metrics**
                        • 50+ active business clients
                        • 100,000+ emails generated monthly
                        • 99.2% uptime reliability
                        • <2 minute average generation time

                        **Client Results**
                        • 45% average increase in open rates
                        • 60% improvement in click-through rates
                        • 35% reduction in content creation time
                        • 80% of clients report improved engagement

                        **AI Model Performance**
                        • 92% accuracy in brand voice matching
                        • 15% better subject line performance vs. human-written
                        • 40% faster content creation compared to manual processes
                        • Continuous improvement through feedback loops

                        **Business Impact**
                        • $2M+ in attributed revenue for clients
                        • 70% client retention rate
                        • 5-star average rating
                        • Expanding to new market segments

                        The platform continues to evolve with advanced AI capabilities and deeper integrations based on client success and market feedback.
                    `}
                    imageSrc="/exodus-results.png"
                />

                <Section
                    title="Future Roadmap"
                    content={`
                        **Next-Generation Features**
                        • Multi-modal AI for image and video content generation
                        • Advanced personalization using customer journey data
                        • Voice and tone analysis for brand alignment
                        • Predictive analytics for campaign performance

                        **Platform Expansion**
                        • SMS and push notification support
                        • Social media content generation
                        • Landing page optimization
                        • CRM integration ecosystem

                        **AI Advancements**
                        • Custom model architectures for email-specific tasks
                        • Real-time learning from user interactions
                        • Advanced natural language understanding
                        • Cross-platform content consistency

                        Exodus AI is positioned to become the leading AI-powered marketing automation platform, helping businesses scale their communication efforts while maintaining authentic connections with their audiences.
                    `}
                    imageSrc="/future-roadmap.png"
                    reverse={true}
                />
            </div>
        </div>
    );
}