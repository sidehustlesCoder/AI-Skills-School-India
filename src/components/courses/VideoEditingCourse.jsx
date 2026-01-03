import React from 'react';
import { ArrowLeft, Play, CheckCircle, Clock, BookOpen, Download, ExternalLink, Scissors, Sparkles } from 'lucide-react';

export default function VideoEditingCourse({ onBack }) {
    const modules = [
        {
            number: 1,
            title: "AI-Powered Editing Fundamentals",
            duration: "1 hour",
            lessons: [
                "Introduction to AI Video Editing",
                "CapCut vs DaVinci Resolve vs Adobe Premiere",
                "Setting Up Your Editing Workspace",
                "Understanding Timeline Basics"
            ]
        },
        {
            number: 2,
            title: "Auto-Editing with AI",
            duration: "1.5 hours",
            lessons: [
                "Auto-Cut & Beat Sync Features",
                "AI-Powered Color Grading",
                "Smart Object Removal",
                "Background Replacement with AI"
            ]
        },
        {
            number: 3,
            title: "Advanced Transitions & Effects",
            duration: "2 hours",
            lessons: [
                "Cinematic Transitions Library",
                "AI Motion Tracking",
                "Green Screen & Chroma Key",
                "Speed Ramping & Time Effects"
            ]
        },
        {
            number: 4,
            title: "Audio Enhancement with AI",
            duration: "1 hour",
            lessons: [
                "AI Noise Removal & Enhancement",
                "Auto-Ducking Background Music",
                "Voice Isolation Techniques",
                "Sound Effects Library"
            ]
        },
        {
            number: 5,
            title: "Platform-Specific Editing",
            duration: "1.5 hours",
            lessons: [
                "Instagram Reels Editing Workflow",
                "YouTube Shorts Optimization",
                "WhatsApp Status Videos",
                "LinkedIn Video Best Practices"
            ]
        },
        {
            number: 6,
            title: "Professional Workflows",
            duration: "2 hours",
            lessons: [
                "Batch Editing Multiple Videos",
                "Creating Editing Templates",
                "Keyboard Shortcuts Mastery",
                "Export Settings for Every Platform"
            ]
        }
    ];

    const tools = [
        { name: "CapCut", purpose: "Primary Editing Tool", cost: "Free / ₹340/mo Pro", link: "https://www.capcut.com" },
        { name: "DaVinci Resolve", purpose: "Professional Editing", cost: "Free", link: "https://www.blackmagicdesign.com/products/davinciresolve" },
        { name: "Runway ML", purpose: "AI Effects & Removal", cost: "Free (125 credits)", link: "https://runwayml.com" },
        { name: "Adobe Firefly", purpose: "AI Enhancements", cost: "Free tier", link: "https://firefly.adobe.com" },
        { name: "Epidemic Sound", purpose: "Royalty-Free Music", cost: "₹1,275/mo", link: "https://www.epidemicsound.com" }
    ];

    const projects = [
        {
            title: "Project 1: Instagram Reel Transformation",
            description: "Transform raw footage into a viral-worthy Instagram Reel",
            deliverables: [
                "30-second polished Reel",
                "Auto-synced to trending audio",
                "AI color grading applied",
                "Smooth transitions between clips",
                "Optimized for mobile viewing"
            ]
        },
        {
            title: "Project 2: YouTube Tutorial Edit",
            description: "Edit a complete YouTube tutorial video with professional quality",
            deliverables: [
                "5-10 minute tutorial video",
                "Intro/outro animations",
                "Lower thirds and text overlays",
                "B-roll integration",
                "Background music with auto-ducking"
            ]
        },
        {
            title: "Project 3: Product Showcase Video",
            description: "Create a professional product demo using AI tools",
            deliverables: [
                "60-second product showcase",
                "AI background replacement",
                "Object tracking and highlights",
                "Professional color grading",
                "Export for multiple platforms"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-slate-900 text-white">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 border-b border-purple-500/20">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <button onClick={onBack} className="flex items-center text-gray-300 hover:text-white mb-4 transition">
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to Courses
                    </button>
                    <h1 className="text-4xl font-bold mb-4">AI से Video Editing सीखें</h1>
                    <p className="text-xl text-gray-300 mb-6">
                        Professional editing techniques using AI-powered tools for Instagram, YouTube & WhatsApp
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2 text-purple-400" />
                            <span>6 सप्ताह</span>
                        </div>
                        <div className="flex items-center">
                            <BookOpen className="w-4 h-4 mr-2 text-blue-400" />
                            <span>38 Lessons</span>
                        </div>
                        <div className="flex items-center">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                            <span>मध्यम स्तर</span>
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
                                    <div key={module.number} className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-purple-500/50 transition">
                                        <div className="flex items-start justify-between mb-4">
                                            <div>
                                                <div className="text-purple-400 text-sm font-semibold mb-1">Module {module.number}</div>
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
                                                    <Scissors className="w-4 h-4 mr-2 mt-1 text-blue-400 flex-shrink-0" />
                                                    <span>{lesson}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Projects */}
                        <section>
                            <h2 className="text-2xl font-bold mb-6">Hands-On Projects</h2>
                            <div className="space-y-4">
                                {projects.map((project, idx) => (
                                    <div key={idx} className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-xl p-6 border border-purple-500/30">
                                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                        <p className="text-gray-300 mb-4">{project.description}</p>
                                        <div className="space-y-2">
                                            <div className="font-semibold text-sm text-purple-400">Deliverables:</div>
                                            <ul className="space-y-1">
                                                {project.deliverables.map((item, i) => (
                                                    <li key={i} className="flex items-start text-sm text-gray-300">
                                                        <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* AI Features Highlight */}
                        <section className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-xl p-8 border border-purple-500/30">
                            <div className="flex items-center mb-4">
                                <Sparkles className="w-6 h-6 mr-2 text-purple-400" />
                                <h3 className="text-2xl font-bold">AI-Powered Features You'll Master</h3>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-slate-800/50 p-4 rounded-lg">
                                    <div className="font-semibold text-purple-400 mb-2">🎨 Auto Color Grading</div>
                                    <div className="text-sm text-gray-300">AI analyzes your footage and applies professional color corrections automatically</div>
                                </div>
                                <div className="bg-slate-800/50 p-4 rounded-lg">
                                    <div className="font-semibold text-blue-400 mb-2">🔊 Smart Audio Sync</div>
                                    <div className="text-sm text-gray-300">Automatically sync cuts to music beats and remove background noise</div>
                                </div>
                                <div className="bg-slate-800/50 p-4 rounded-lg">
                                    <div className="font-semibold text-green-400 mb-2">✂️ Auto-Cut Detection</div>
                                    <div className="text-sm text-gray-300">AI identifies and removes silent parts, filler words, and bad takes</div>
                                </div>
                                <div className="bg-slate-800/50 p-4 rounded-lg">
                                    <div className="font-semibold text-orange-400 mb-2">🎭 Object Removal</div>
                                    <div className="text-sm text-gray-300">Remove unwanted objects from your videos with AI-powered inpainting</div>
                                </div>
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
                                            <a href={tool.link} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">
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
                                <div className="text-2xl font-bold">₹0 - ₹1,600/mo</div>
                                <div className="text-xs text-gray-400 mt-1">Free tools are professional-grade</div>
                            </div>
                        </div>

                        {/* Download Resources */}
                        <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-xl p-6 border border-purple-500/30">
                            <h3 className="text-lg font-bold mb-4">📚 Course Resources</h3>
                            <div className="space-y-3">
                                <button className="w-full flex items-center justify-between bg-slate-800 hover:bg-slate-700 px-4 py-3 rounded-lg transition">
                                    <span className="text-sm">Keyboard Shortcuts PDF</span>
                                    <Download className="w-4 h-4" />
                                </button>
                                <button className="w-full flex items-center justify-between bg-slate-800 hover:bg-slate-700 px-4 py-3 rounded-lg transition">
                                    <span className="text-sm">Editing Templates</span>
                                    <Download className="w-4 h-4" />
                                </button>
                                <button className="w-full flex items-center justify-between bg-slate-800 hover:bg-slate-700 px-4 py-3 rounded-lg transition">
                                    <span className="text-sm">Sample Footage</span>
                                    <Download className="w-4 h-4" />
                                </button>
                                <button className="w-full flex items-center justify-between bg-slate-800 hover:bg-slate-700 px-4 py-3 rounded-lg transition">
                                    <span className="text-sm">Color Grading LUTs</span>
                                    <Download className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Skills You'll Gain */}
                        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                            <h3 className="text-lg font-bold mb-4">✨ Skills You'll Gain</h3>
                            <div className="flex flex-wrap gap-2">
                                {['AI Editing', 'Color Grading', 'Audio Mixing', 'Transitions', 'Effects', 'Export Optimization', 'Batch Processing', 'Template Creation'].map((skill, idx) => (
                                    <span key={idx} className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-xs border border-purple-500/30">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
