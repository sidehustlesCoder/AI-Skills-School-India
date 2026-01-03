import React from 'react';
import { ArrowLeft, Play, CheckCircle, Clock, BookOpen, Download, ExternalLink, DollarSign, TrendingUp, Users } from 'lucide-react';

export default function ContentMonetizationCourse({ onBack }) {
    const modules = [
        {
            number: 1,
            title: "Building Your Content Brand",
            duration: "1 hour",
            lessons: [
                "Finding Your Niche in Indian Market",
                "Creating a Content Strategy",
                "Building Your Personal Brand",
                "Understanding Your Audience"
            ]
        },
        {
            number: 2,
            title: "YouTube Monetization Mastery",
            duration: "2 hours",
            lessons: [
                "YouTube Partner Program Requirements",
                "AdSense Setup for India",
                "Maximizing CPM & RPM",
                "YouTube Shorts Fund",
                "Super Thanks & Channel Memberships"
            ]
        },
        {
            number: 3,
            title: "Instagram & Reels Revenue",
            duration: "1.5 hours",
            lessons: [
                "Instagram Reels Bonus Program",
                "Brand Collaborations & Sponsored Posts",
                "Affiliate Marketing on Instagram",
                "Instagram Shopping Integration"
            ]
        },
        {
            number: 4,
            title: "Freelancing & Client Work",
            duration: "2 hours",
            lessons: [
                "Setting Up on Fiverr & Upwork",
                "Pricing Your Services in INR",
                "Creating Winning Proposals",
                "Managing Client Expectations",
                "Building Long-term Relationships"
            ]
        },
        {
            number: 5,
            title: "Multiple Revenue Streams",
            duration: "1.5 hours",
            lessons: [
                "Selling Digital Products (Templates, Presets)",
                "Online Course Creation",
                "Patreon & Membership Models",
                "Sponsored Content Deals",
                "Affiliate Marketing Strategies"
            ]
        },
        {
            number: 6,
            title: "Scaling Your Business",
            duration: "1 hour",
            lessons: [
                "Hiring Virtual Assistants",
                "Automating Content Workflows",
                "Tax & Legal Compliance in India",
                "GST Registration for Creators",
                "Scaling to ₹1 Lakh/month"
            ]
        }
    ];

    const revenueStreams = [
        { name: "YouTube AdSense", potential: "₹20,000 - ₹2,00,000/mo", difficulty: "Medium", time: "6-12 months" },
        { name: "Brand Sponsorships", potential: "₹10,000 - ₹5,00,000/deal", difficulty: "Medium", time: "3-6 months" },
        { name: "Freelance Editing", potential: "₹15,000 - ₹1,00,000/mo", difficulty: "Easy", time: "1-2 months" },
        { name: "Digital Products", potential: "₹5,000 - ₹50,000/mo", difficulty: "Easy", time: "2-3 months" },
        { name: "Online Courses", potential: "₹25,000 - ₹3,00,000/mo", difficulty: "Hard", time: "6-12 months" },
        { name: "Affiliate Marketing", potential: "₹10,000 - ₹1,00,000/mo", difficulty: "Medium", time: "3-6 months" }
    ];

    const caseStudies = [
        {
            name: "Rahul - Tech YouTuber",
            location: "Mumbai",
            timeline: "12 months",
            revenue: "₹1.2 Lakh/month",
            streams: ["YouTube AdSense (₹60K)", "Sponsorships (₹40K)", "Affiliate (₹20K)"],
            story: "Started with zero subscribers, now has 150K+ subscribers creating tech reviews in Hindi"
        },
        {
            name: "Priya - Instagram Creator",
            location: "Bangalore",
            timeline: "8 months",
            revenue: "₹80,000/month",
            streams: ["Brand Deals (₹50K)", "Reels Bonus (₹15K)", "Digital Products (₹15K)"],
            story: "Built a lifestyle brand on Instagram with 75K followers, focusing on Indian fashion"
        },
        {
            name: "Amit - Freelance Editor",
            location: "Delhi",
            timeline: "6 months",
            revenue: "₹1.5 Lakh/month",
            streams: ["Client Work (₹1L)", "Templates (₹30K)", "Courses (₹20K)"],
            story: "Quit his job to freelance full-time, now works with international clients"
        }
    ];

    const actionPlan = [
        {
            month: "Month 1-2",
            focus: "Foundation",
            goals: [
                "Create 20 pieces of content",
                "Set up all social media profiles",
                "Join freelance platforms",
                "Build portfolio"
            ]
        },
        {
            month: "Month 3-4",
            focus: "Growth",
            goals: [
                "Reach 1,000 subscribers/followers",
                "Land first freelance client",
                "Create first digital product",
                "Network with other creators"
            ]
        },
        {
            month: "Month 5-6",
            focus: "Monetization",
            goals: [
                "Apply for YouTube Partner Program",
                "Pitch to 10 brands for sponsorships",
                "Launch online course/membership",
                "Earn first ₹25,000"
            ]
        },
        {
            month: "Month 7-12",
            focus: "Scaling",
            goals: [
                "Diversify to 3+ revenue streams",
                "Reach ₹1 Lakh/month",
                "Hire virtual assistant",
                "Build email list of 1,000+"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-slate-900 text-white">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 border-b border-green-500/20">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <button onClick={onBack} className="flex items-center text-gray-300 hover:text-white mb-4 transition">
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to Courses
                    </button>
                    <h1 className="text-4xl font-bold mb-4">Content Creation & Monetization</h1>
                    <p className="text-xl text-gray-300 mb-6">
                        Build your brand and earn through AI video content - Hindi & Regional language support
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2 text-green-400" />
                            <span>4 सप्ताह</span>
                        </div>
                        <div className="flex items-center">
                            <BookOpen className="w-4 h-4 mr-2 text-emerald-400" />
                            <span>24 Lessons</span>
                        </div>
                        <div className="flex items-center">
                            <CheckCircle className="w-4 h-4 mr-2 text-blue-400" />
                            <span>सभी स्तर</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Course Content */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Modules */}
                        <section>
                            <h2 className="text-2xl font-bold mb-6">Course Modules</h2>
                            <div className="space-y-4">
                                {modules.map((module) => (
                                    <div key={module.number} className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-green-500/50 transition">
                                        <div className="flex items-start justify-between mb-4">
                                            <div>
                                                <div className="text-green-400 text-sm font-semibold mb-1">Module {module.number}</div>
                                                <h3 className="text-xl font-bold">{module.title}</h3>
                                            </div>
                                            <div className="flex items-center text-sm text-gray-400">
                                                <Clock className="w-4 h-4 mr-1" />
                                                {module.duration}
                                            </div>
                                        </div>
                                        <ul className="space-y-2">
                                            {module.lessons.map((lesson, idx) => (
                                                <li key={idx} className="flex items-start text-gray-300">
                                                    <DollarSign className="w-4 h-4 mr-2 mt-1 text-emerald-400 flex-shrink-0" />
                                                    <span>{lesson}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Case Studies */}
                        <section>
                            <h2 className="text-2xl font-bold mb-6">Success Stories</h2>
                            <div className="space-y-4">
                                {caseStudies.map((study, idx) => (
                                    <div key={idx} className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-xl p-6 border border-green-500/30">
                                        <div className="flex items-start justify-between mb-4">
                                            <div>
                                                <h3 className="text-xl font-bold">{study.name}</h3>
                                                <div className="text-sm text-gray-400">{study.location} • {study.timeline}</div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-2xl font-bold text-green-400">{study.revenue}</div>
                                                <div className="text-xs text-gray-400">Monthly Revenue</div>
                                            </div>
                                        </div>
                                        <p className="text-gray-300 mb-4">{study.story}</p>
                                        <div className="space-y-1">
                                            <div className="font-semibold text-sm text-green-400">Revenue Breakdown:</div>
                                            {study.streams.map((stream, i) => (
                                                <div key={i} className="text-sm text-gray-300 flex items-center">
                                                    <CheckCircle className="w-3 h-3 mr-2 text-emerald-400" />
                                                    {stream}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* 12-Month Action Plan */}
                        <section>
                            <h2 className="text-2xl font-bold mb-6">Your 12-Month Action Plan</h2>
                            <div className="space-y-4">
                                {actionPlan.map((phase, idx) => (
                                    <div key={idx} className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                                        <div className="flex items-center justify-between mb-4">
                                            <div>
                                                <div className="text-green-400 font-semibold">{phase.month}</div>
                                                <h3 className="text-xl font-bold">{phase.focus}</h3>
                                            </div>
                                            <TrendingUp className="w-6 h-6 text-green-400" />
                                        </div>
                                        <ul className="space-y-2">
                                            {phase.goals.map((goal, i) => (
                                                <li key={i} className="flex items-start text-gray-300">
                                                    <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-emerald-400 flex-shrink-0" />
                                                    <span>{goal}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Revenue Potential */}
                        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 sticky top-4">
                            <h3 className="text-xl font-bold mb-4">💰 Revenue Streams</h3>
                            <div className="space-y-3">
                                {revenueStreams.map((stream, idx) => (
                                    <div key={idx} className="pb-3 border-b border-slate-700 last:border-0">
                                        <div className="font-semibold mb-1">{stream.name}</div>
                                        <div className="text-sm text-green-400 mb-1">{stream.potential}</div>
                                        <div className="flex items-center justify-between text-xs text-gray-400">
                                            <span>Difficulty: {stream.difficulty}</span>
                                            <span>{stream.time}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 p-4 bg-green-900/20 rounded-lg border border-green-500/30">
                                <div className="font-semibold text-green-400 mb-2">🎯 Realistic Goal</div>
                                <div className="text-2xl font-bold">₹50K - ₹1L/mo</div>
                                <div className="text-xs text-gray-400 mt-1">Within 6-12 months</div>
                            </div>
                        </div>

                        {/* Tools & Platforms */}
                        <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-500/30">
                            <h3 className="text-lg font-bold mb-4">🛠️ Platforms You'll Use</h3>
                            <div className="space-y-2 text-sm">
                                <div className="flex items-center justify-between">
                                    <span>YouTube Studio</span>
                                    <ExternalLink className="w-3 h-3" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <span>Instagram Business</span>
                                    <ExternalLink className="w-3 h-3" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <span>Fiverr / Upwork</span>
                                    <ExternalLink className="w-3 h-3" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <span>Gumroad / Instamojo</span>
                                    <ExternalLink className="w-3 h-3" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <span>Patreon / Buy Me Coffee</span>
                                    <ExternalLink className="w-3 h-3" />
                                </div>
                            </div>
                        </div>

                        {/* Download Resources */}
                        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                            <h3 className="text-lg font-bold mb-4">📚 Resources</h3>
                            <div className="space-y-3">
                                <button className="w-full flex items-center justify-between bg-slate-700 hover:bg-slate-600 px-4 py-3 rounded-lg transition">
                                    <span className="text-sm">Pricing Calculator</span>
                                    <Download className="w-4 h-4" />
                                </button>
                                <button className="w-full flex items-center justify-between bg-slate-700 hover:bg-slate-600 px-4 py-3 rounded-lg transition">
                                    <span className="text-sm">Brand Pitch Template</span>
                                    <Download className="w-4 h-4" />
                                </button>
                                <button className="w-full flex items-center justify-between bg-slate-700 hover:bg-slate-600 px-4 py-3 rounded-lg transition">
                                    <span className="text-sm">Contract Templates</span>
                                    <Download className="w-4 h-4" />
                                </button>
                                <button className="w-full flex items-center justify-between bg-slate-700 hover:bg-slate-600 px-4 py-3 rounded-lg transition">
                                    <span className="text-sm">Tax Guide for Creators</span>
                                    <Download className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Community */}
                        <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-500/30">
                            <div className="flex items-center mb-4">
                                <Users className="w-5 h-5 mr-2 text-green-400" />
                                <h3 className="text-lg font-bold">Join Creator Community</h3>
                            </div>
                            <p className="text-sm text-gray-300 mb-4">
                                Connect with 5,000+ Indian creators, share your wins, and get feedback on your strategy.
                            </p>
                            <button className="w-full bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg font-semibold transition">
                                Join Discord
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
