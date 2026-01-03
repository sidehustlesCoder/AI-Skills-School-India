import React from 'react';
import { ArrowLeft, Play, CheckCircle, Clock, BookOpen, Download, ExternalLink } from 'lucide-react';

export default function AIVideoCreationCourse({ onBack }) {
    const modules = [
        {
            number: 1,
            title: "Introduction to AI Video Creation",
            duration: "30 min",
            lessons: [
                "What is AI Video Creation?",
                "Tools Overview (Runway, Pika, ChatGPT)",
                "Success Stories from Indian Creators"
            ]
        },
        {
            number: 2,
            title: "Script Writing with AI",
            duration: "1 hour",
            lessons: [
                "Define Your Video Concept",
                "Generate Scripts with ChatGPT/Gemini",
                "Refine and Add Timestamps",
                "Practice Exercise: Create 30s Reel Script"
            ]
        },
        {
            number: 3,
            title: "Visual Content Generation",
            duration: "1.5 hours",
            lessons: [
                "AI Image Generation (Leonardo AI, Bing)",
                "Scene Planning & Prompts",
                "AI Video Generation (Runway, Pika)",
                "Project Organization"
            ]
        },
        {
            number: 4,
            title: "AI Voice Synthesis",
            duration: "45 min",
            lessons: [
                "Free vs Paid Tools Comparison",
                "Voice Settings for Different Platforms",
                "Generate Professional Voiceovers",
                "Audio Enhancement Techniques"
            ]
        },
        {
            number: 5,
            title: "Video Assembly & Editing",
            duration: "2 hours",
            lessons: [
                "Complete CapCut Tutorial",
                "Timeline Structure & Layers",
                "Transitions and Effects",
                "Export Settings for YouTube/Reels"
            ]
        },
        {
            number: 6,
            title: "Publishing & Optimization",
            duration: "1 hour",
            lessons: [
                "SEO Optimization for YouTube",
                "Thumbnail Creation Best Practices",
                "Instagram Reels Strategy",
                "Analytics & Growth Hacking"
            ]
        }
    ];

    const tools = [
        { name: "ChatGPT", purpose: "Script Generation", cost: "Free / ₹1,650/mo", link: "https://chat.openai.com" },
        { name: "Leonardo AI", purpose: "Image Generation", cost: "Free (150/day)", link: "https://leonardo.ai" },
        { name: "Runway ML", purpose: "Video Generation", cost: "Free (125 credits)", link: "https://runwayml.com" },
        { name: "ElevenLabs", purpose: "Voice Synthesis", cost: "₹899/mo", link: "https://elevenlabs.io" },
        { name: "CapCut", purpose: "Video Editing", cost: "Free", link: "https://www.capcut.com" }
    ];

    const assignments = [
        {
            title: "Assignment 1: Your First AI Reel",
            description: "Create a 30-second Instagram Reel about '3 AI Tools Every Student Should Know'",
            requirements: [
                "Use ChatGPT for script generation",
                "Generate 3 images with Leonardo AI",
                "Create voiceover (your voice or AI)",
                "Edit in CapCut",
                "Export and submit"
            ]
        },
        {
            title: "Assignment 2: YouTube Tutorial",
            description: "Create a 3-5 minute YouTube video on any AI-related topic",
            requirements: [
                "Complete script with timestamps",
                "Mix of AI images and screen recordings",
                "Professional voiceover",
                "Add background music",
                "Create custom thumbnail"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-slate-900 text-white">
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-900/50 to-green-900/50 border-b border-orange-500/20">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <button onClick={onBack} className="flex items-center text-gray-300 hover:text-white mb-4 transition">
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to Courses
                    </button>
                    <h1 className="text-4xl font-bold mb-4">AI Video Creation for YouTube & Reels</h1>
                    <p className="text-xl text-gray-300 mb-6">
                        Master AI tools like Runway, Pika, and ChatGPT for creating viral content in Hindi & English
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2 text-orange-400" />
                            <span>8 सप्ताह</span>
                        </div>
                        <div className="flex items-center">
                            <BookOpen className="w-4 h-4 mr-2 text-green-400" />
                            <span>42 Lessons</span>
                        </div>
                        <div className="flex items-center">
                            <CheckCircle className="w-4 h-4 mr-2 text-blue-400" />
                            <span>शुरुआती से उन्नत</span>
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
                                    <div key={module.number} className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-orange-500/50 transition">
                                        <div className="flex items-start justify-between mb-4">
                                            <div>
                                                <div className="text-orange-400 text-sm font-semibold mb-1">Module {module.number}</div>
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
                                                    <Play className="w-4 h-4 mr-2 mt-1 text-green-400 flex-shrink-0" />
                                                    <span>{lesson}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Assignments */}
                        <section>
                            <h2 className="text-2xl font-bold mb-6">Practical Assignments</h2>
                            <div className="space-y-4">
                                {assignments.map((assignment, idx) => (
                                    <div key={idx} className="bg-gradient-to-r from-orange-900/20 to-green-900/20 rounded-xl p-6 border border-orange-500/30">
                                        <h3 className="text-xl font-bold mb-2">{assignment.title}</h3>
                                        <p className="text-gray-300 mb-4">{assignment.description}</p>
                                        <div className="space-y-2">
                                            <div className="font-semibold text-sm text-orange-400">Requirements:</div>
                                            <ul className="space-y-1">
                                                {assignment.requirements.map((req, i) => (
                                                    <li key={i} className="flex items-start text-sm text-gray-300">
                                                        <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                                                        <span>{req}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Tools Required */}
                        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 sticky top-4">
                            <h3 className="text-xl font-bold mb-4">Tools You'll Use</h3>
                            <div className="space-y-3">
                                {tools.map((tool, idx) => (
                                    <div key={idx} className="pb-3 border-b border-slate-700 last:border-0">
                                        <div className="flex items-start justify-between mb-1">
                                            <div className="font-semibold">{tool.name}</div>
                                            <a href={tool.link} target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">
                                                <ExternalLink className="w-4 h-4" />
                                            </a>
                                        </div>
                                        <div className="text-sm text-gray-400">{tool.purpose}</div>
                                        <div className="text-xs text-green-400 mt-1">{tool.cost}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 p-4 bg-green-900/20 rounded-lg border border-green-500/30">
                                <div className="font-semibold text-green-400 mb-2">💰 Total Cost</div>
                                <div className="text-2xl font-bold">₹0 - ₹2,500/mo</div>
                                <div className="text-xs text-gray-400 mt-1">Start with 100% free tools</div>
                            </div>
                        </div>

                        {/* Download Resources */}
                        <div className="bg-gradient-to-br from-orange-900/30 to-green-900/30 rounded-xl p-6 border border-orange-500/30">
                            <h3 className="text-lg font-bold mb-4">📚 Course Resources</h3>
                            <div className="space-y-3">
                                <button className="w-full flex items-center justify-between bg-slate-800 hover:bg-slate-700 px-4 py-3 rounded-lg transition">
                                    <span className="text-sm">Prompt Templates</span>
                                    <Download className="w-4 h-4" />
                                </button>
                                <button className="w-full flex items-center justify-between bg-slate-800 hover:bg-slate-700 px-4 py-3 rounded-lg transition">
                                    <span className="text-sm">Cheat Sheets</span>
                                    <Download className="w-4 h-4" />
                                </button>
                                <button className="w-full flex items-center justify-between bg-slate-800 hover:bg-slate-700 px-4 py-3 rounded-lg transition">
                                    <span className="text-sm">Sample Projects</span>
                                    <Download className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
