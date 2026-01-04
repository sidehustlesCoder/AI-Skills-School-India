import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageSquare, Terminal, Settings, Wand2, Zap, Play, Share2, MousePointer2, ExternalLink, Camera, Layers, Lightbulb, BookOpen } from 'lucide-react';

const ToolGuide = ({ title, icon, summary, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border border-white/10 rounded-xl overflow-hidden mb-6 bg-slate-800/30 backdrop-blur-md transition-all duration-300">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition"
            >
                <div className="flex items-center gap-5">
                    <div className="p-3 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl text-blue-400 border border-blue-500/20">
                        {icon}
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-0.5">{title}</h3>
                        <p className="text-gray-400 text-sm font-medium">{summary}</p>
                    </div>
                </div>
                <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-6 h-6 text-gray-500" />
                </div>
            </button>
            {isOpen && (
                <div className="px-6 py-8 border-t border-white/10 bg-slate-900/40 prose prose-invert max-w-none">
                    {children}
                </div>
            )}
        </div>
    );
};

// eslint-disable-next-line no-unused-vars
const SectionHeader = ({ icon: Icon, title }) => (
    <h4 className="flex items-center gap-2 text-blue-400 mt-8 mb-4">
        <Icon className="w-5 h-5" />
        <span className="uppercase tracking-wider text-sm font-bold">{title}</span>
    </h4>
);

const DetailBox = ({ title, color, children }) => (
    <div className={`p-5 rounded-xl mb-4 border border-${color}-500/10 bg-${color}-500/5`}>
        <h5 className={`text-${color}-400 font-bold mb-2 flex items-center gap-2`}>
            {title}
        </h5>
        <div className="text-sm text-gray-300 leading-relaxed">
            {children}
        </div>
    </div>
);

const PromptExample = ({ prompt, color = "blue" }) => (
    <div className={`mt-4 p-4 bg-${color}-500/5 border border-${color}-500/10 rounded-xl relative group`}>
        <div className="text-xs font-mono text-gray-400 mb-2 uppercase tracking-tight flex items-center gap-2">
            <Terminal className="w-3 h-3" /> Sample Prompt
        </div>
        <p className="text-sm text-gray-300 italic pr-12 leading-relaxed">"{prompt}"</p>
        <button
            onClick={() => navigator.clipboard.writeText(prompt)}
            className={`absolute top-4 right-4 bg-${color}-500 text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition shadow-lg shadow-${color}-500/20`}
            title="Copy Prompt"
        >
            <Share2 className="w-4 h-4" />
        </button>
    </div>
);

export default function AIPrompting({ onBack }) {
    return (
        <div className="pt-24 pb-20 px-4 min-h-screen bg-slate-900/50">
            <div className="max-w-4xl mx-auto">
                <header className="mb-16 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6">
                        <BookOpen className="w-4 h-4" /> AI Prompting Guide 2025
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-white to-purple-400 bg-clip-text text-transparent leading-tight">
                        AI Prompting Guide
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Master the art of communication with AI. From cinematic screenplays to hyper-realistic visuals, learn the frameworks for elite output.
                    </p>
                </header>

                <div className="space-y-6">
                    {/* Section 1: Scriptwriting */}
                    <ToolGuide
                        title="Scriptwriting & Idea Generation"
                        icon={<MessageSquare className="w-6 h-6" />}
                        summary="ChatGPT, Gemini, Claude, and more specialized scriptwriting tools."
                    >
                        <div className="space-y-12">
                            {/* ChatGPT Section */}
                            <div className="space-y-6">
                                <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                                    <Zap className="w-6 h-6 text-green-400" /> ChatGPT
                                </h3>
                                <p className="text-gray-300">
                                    ChatGPT excels at generating creative text, dialogue, storylines, and detailed narrative scripts for video, audio, or written formats. It works especially well when you provide clear goals and context.
                                </p>

                                <div className="space-y-6">
                                    <h5 className="text-blue-400 font-bold uppercase tracking-wider text-sm">How to Use</h5>
                                    <p className="text-gray-400 text-sm">When prompting ChatGPT:</p>
                                    <ul className="list-disc pl-5 text-gray-300 space-y-2 text-sm">
                                        <li>Provide clear context (e.g., topic, format, length).</li>
                                        <li>Specify elements like tone, style, and audience.</li>
                                        <li>Use specific instructions rather than vague requests.</li>
                                        <li>Collaborate interactively — ChatGPT allows back-and-forth refinement, helping you revise and expand ideas quickly.</li>
                                    </ul>
                                </div>

                                <div className="grid md:grid-cols-3 gap-4">
                                    <DetailBox title="Conversational" color="green">Revise ideas collaboratively in real time.</DetailBox>
                                    <DetailBox title="Versatile" color="blue">From corporate scripts to fantasy stories.</DetailBox>
                                    <DetailBox title="Style-aware" color="purple">Mimicking specific genres, formats, or voices.</DetailBox>
                                </div>

                                <div className="p-6 bg-slate-800/40 rounded-2xl border border-white/5">
                                    <h5 className="text-white font-bold mb-4">Prompting Tips</h5>
                                    <div className="grid md:grid-cols-2 gap-6 text-sm">
                                        <div className="space-y-2 text-green-400/80">
                                            <p className="font-bold border-b border-green-400/20 pb-1">INCLUDE:</p>
                                            <ul className="text-gray-300 space-y-1 list-disc pl-4">
                                                <li>Clear theme or concept</li>
                                                <li>Target audience</li>
                                                <li>Desired tone (serious, funny, cinematic)</li>
                                                <li>Character roles</li>
                                            </ul>
                                        </div>
                                        <div className="space-y-2 text-red-400/80">
                                            <p className="font-bold border-b border-red-400/20 pb-1">AVOID:</p>
                                            <ul className="text-gray-300 space-y-1 list-disc pl-4">
                                                <li>Overloading with jargon</li>
                                                <li>Leaving out structure (bullets, timestamps)</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <SectionHeader icon={Camera} title="Creative Video Work (2025 Edition)" />
                                <div className="space-y-4">
                                    <p className="text-gray-300 text-sm font-bold">ChatGPT is highly effective at:</p>
                                    <ul className="grid md:grid-cols-2 gap-2 text-xs text-gray-400 bg-slate-800/20 p-4 rounded-xl list-none">
                                        <li className="flex items-center gap-2"><Zap className="w-3 h-3 text-green-400" /> Generating dialogue & storylines</li>
                                        <li className="flex items-center gap-2"><Zap className="w-3 h-3 text-green-400" /> Writing narrative scripts</li>
                                        <li className="flex items-center gap-2"><Zap className="w-3 h-3 text-green-400" /> Structuring video content</li>
                                        <li className="flex items-center gap-2"><Zap className="w-3 h-3 text-green-400" /> Brainstorming unique concepts</li>
                                    </ul>

                                    <DetailBox title="What's New in 2025?" color="purple">
                                        <ul className="list-disc pl-4 space-y-3 text-xs">
                                            <li><strong>Multimodal Prompting:</strong> Include images, voice recordings, and video frames for context (Veo/Frames/Canvas).</li>
                                            <li><strong>Live Refinement:</strong> GPT-4o update scripts in real time based on partial inputs.</li>
                                            <li><strong>Fewer Instructions:</strong> Better memory and fine-tuning for structure and pacing.</li>
                                        </ul>
                                    </DetailBox>

                                    <div className="space-y-3">
                                        <p className="text-white font-bold text-xs uppercase tracking-widest mt-6">Prompt Examples</p>
                                        <PromptExample prompt="Write a 2-minute video script in the style of a motivational short film. A single mom working two jobs finally gets her nursing license. Use emotional dialogue, a cinematic arc, and a powerful voiceover." color="blue" />
                                        <PromptExample prompt="Outline a 4-part YouTube series called ‘Modern Cowboys’, covering how traditional ranchers are using AI, drones, and solar energy in 2025. Each part should include a topic title, scene structure, and key interview ideas." color="green" />
                                        <PromptExample prompt="Suggest 5 video ideas for a Gen Z-focused channel that mixes AI tools with creative hobbies (e.g., music, writing, art). The ideas should be fun, engaging, and easy to film." color="purple" />
                                        <PromptExample prompt="Create a prompt for Google Veo to generate a cinematic scene of a dusty Southern town at golden hour. Include a teenage girl in cowboy boots walking along train tracks, with voiceover narration about chasing freedom. Style: modern western, soft lens flares, melancholy tone." color="orange" />
                                        <PromptExample prompt="Write a 1-minute voiceover script for a dramatic AI-generated short about loneliness in the digital age. The visuals should include a man in a dark apartment, neon lights from the city outside, and slow zooms. Add a poetic narration with a hopeful ending." color="blue" />
                                    </div>

                                    <div className="mt-6 p-5 bg-red-500/5 border border-red-500/10 rounded-xl">
                                        <h6 className="text-red-400 font-bold text-xs mb-2">Prompting Pitfalls to Avoid:</h6>
                                        <p className="text-xs text-gray-400 mb-2">Don't overload with too many requests. Break it down:</p>
                                        <code className="block p-3 bg-black/30 rounded text-green-400 text-[10px]">
                                            "Give me: A logline, Scene outline, Sample dialogue."
                                        </code>
                                        <p className="text-xs text-gray-400 mt-2 mb-2">Be explicit about format:</p>
                                        <code className="block p-3 bg-black/30 rounded text-blue-400 text-[10px]">
                                            "Write it as a 3-act script with headings: ACT I, ACT II, ACT III."
                                        </code>
                                    </div>

                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                        <div className="p-3 bg-slate-800/40 rounded border border-white/5 text-[10px] text-gray-400">Use "Continue from here" for fast iteration</div>
                                        <div className="p-3 bg-slate-800/40 rounded border border-white/5 text-[10px] text-gray-400">Specify platform (TikTok, Reels, Film)</div>
                                        <div className="p-3 bg-slate-800/40 rounded border border-white/5 text-[10px] text-gray-400">Repurpose content via reframing prompts</div>
                                    </div>

                                    <div className="flex justify-center mt-4">
                                        <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-2 bg-green-500/20 text-green-400 rounded-full font-bold hover:bg-green-500/30 transition text-sm">
                                            Try ChatGPT <ExternalLink className="w-3 h-3" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <hr className="border-white/10" />

                            {/* Gemini Section */}
                            <div className="space-y-6">
                                <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                                    <Layers className="w-6 h-6 text-blue-400" /> Gemini
                                </h3>
                                <p className="text-gray-300">
                                    Gemini specializes in generating multi-modal content, combining visuals with textual explanations.
                                </p>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <DetailBox title="When to use Gemini" color="blue">
                                        Use when you need visual structure, presentation-ready content, or are working in Google tools.
                                    </DetailBox>
                                    <DetailBox title="When to use ChatGPT" color="green">
                                        Use when you want story-rich dialogue, flexible script shaping, or deep narrative control.
                                    </DetailBox>
                                </div>

                                <DetailBox title="What Gemini Excels At (2025)" color="orange">
                                    <p className="mb-3">Google's multimodal AI designed for content that blends visuals, text, and media structure.</p>
                                    <ul className="grid grid-cols-2 gap-2 list-disc pl-4 text-xs">
                                        <li>Educational videos</li>
                                        <li>Product explainers</li>
                                        <li>Visual-first content (YouTube/Reels)</li>
                                        <li>Google integrations (Docs/Slides/Drive)</li>
                                    </ul>
                                </DetailBox>

                                <div className="p-6 bg-slate-800/40 rounded-2xl border border-white/5">
                                    <h5 className="text-white font-bold mb-4">Prompting Best Practices</h5>
                                    <div className="grid md:grid-cols-2 gap-4 text-xs">
                                        <div>
                                            <p className="font-bold text-blue-400 mb-2">INCLUDE:</p>
                                            <ul className="space-y-1 text-gray-400 italic">
                                                <li>Text + Visual Intent ("cut to drone shot")</li>
                                                <li>Aesthetic preferences (cinematic, minimalist)</li>
                                                <li>On-screen elements (overlays, graphs)</li>
                                                <li>Audio/Voiceover tone</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="font-bold text-green-400 mb-2">NEW IN 2025:</p>
                                            <ul className="space-y-1 text-gray-400 italic">
                                                <li>Multimodal sketch-to-video input</li>
                                                <li>Cross-tool prompt memory</li>
                                                <li>Smarter visual data guidance</li>
                                                <li>Beta Storyboard Mode</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <PromptExample prompt="Write a 2-minute educational video script explaining the causes of wildfires. Include voiceover narration, on-screen bullet points for key facts, visual cues for drone footage of forests, animated fire maps, and calming background music." color="blue" />
                                    <PromptExample prompt="Outline a 4-part product demo video for a smart home device. Each part should include: Intro problem (30 sec), Feature demo (1 min), Testimonials (45 sec), Call to action (15 sec). Include visual transitions, overlay text, and suggested B-roll footage." color="orange" />
                                </div>

                                <div className="p-4 bg-blue-500/5 border border-blue-500/10 rounded-xl">
                                    <h6 className="text-blue-400 font-bold text-xs mb-2">Visual Details Gemini Responds Well To:</h6>
                                    <div className="flex flex-wrap gap-2">
                                        {['top-down', 'close-up', 'wide drone shot', 'vintage country', 'clean startup', 'gritty realism'].map(tag => (
                                            <span key={tag} className="px-2 py-1 bg-blue-500/10 border border-blue-500/20 rounded text-[10px] text-blue-300">{tag}</span>
                                        ))}
                                    </div>
                                </div>

                                <DetailBox title="Integration Tip" color="green">
                                    In Docs/Slides, highlight your outline and prompt Gemini to expand into a full script or visualize data with suggested chart styles.
                                </DetailBox>

                                <div className="flex justify-center">
                                    <a href="https://gemini.google.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-2 bg-blue-500/20 text-blue-400 rounded-full font-bold hover:bg-blue-500/30 transition text-sm">
                                        Try Gemini <ExternalLink className="w-3 h-3" />
                                    </a>
                                </div>
                            </div>

                            <hr className="border-white/10" />

                            {/* Claude Section */}
                            <div className="space-y-6">
                                <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                                    <MessageSquare className="w-6 h-6 text-purple-400" /> Claude
                                </h3>
                                <p className="text-gray-300">
                                    Claude is known for its ability to create thoughtful, emotionally intelligent, and ethically grounded content.
                                </p>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <DetailBox title="Key Strengths" color="purple">
                                        Narrative depth, character-driven storytelling, social/moral themes, and emotionally complex prompts.
                                    </DetailBox>
                                    <DetailBox title="Differences" color="blue">
                                        Claude is emotionally rich/nuanced; ChatGPT is dynamic/collaborative; Gemini is highly visual/integrated.
                                    </DetailBox>
                                </div>

                                <div className="p-6 bg-slate-800/40 rounded-2xl border border-white/5">
                                    <h5 className="text-white font-bold mb-4">What's New in Claude 2025</h5>
                                    <ul className="text-xs text-gray-400 space-y-3">
                                        <li><strong>200K+ Context:</strong> Retains deep narrative context across entire seasons or episodes.</li>
                                        <li><strong>Psychology Modeling:</strong> Understands human-like emotional arcs and internal dilemmas.</li>
                                        <li><strong>Global/Cultural Awareness:</strong> Refined diversity in voices and ethical viewpoints.</li>
                                    </ul>
                                </div>

                                <div className="space-y-4">
                                    <h5 className="text-white font-bold text-sm">How to Prompt Claude:</h5>
                                    <div className="grid grid-cols-2 gap-4 text-[11px] text-gray-400 border-l-2 border-purple-500/30 pl-4 py-2">
                                        <div><strong>INCLUDE:</strong> Central themes, internal conflict, character backgrounds, raw/poetic tone.</div>
                                        <div><strong>AVOID:</strong> Vague prompts, requests for purely visual concepts without context.</div>
                                    </div>
                                    <PromptExample prompt="Write a 5-minute short film script about a refugee father trying to reconnect with his daughter over video calls while working abroad. Show emotional distance, cultural tension, and a hopeful resolution." color="purple" />
                                </div>

                                <div className="flex justify-center">
                                    <a href="https://www.anthropic.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-2 bg-purple-500/20 text-purple-400 rounded-full font-bold hover:bg-purple-500/30 transition text-sm">
                                        Try Claude <ExternalLink className="w-3 h-3" />
                                    </a>
                                </div>
                            </div>

                            <hr className="border-white/10" />

                            {/* Technical & Research Section */}
                            <div className="grid md:grid-cols-2 gap-8">
                                {/* CoPilot */}
                                <div className="space-y-4">
                                    <h4 className="text-xl font-bold text-blue-400 flex items-center gap-2">
                                        <Terminal className="w-5 h-5" /> CoPilot
                                    </h4>
                                    <p className="text-xs text-gray-400">Structured, logic-driven content for technical tutorials and software workflows.</p>
                                    <DetailBox title="2025 Features" color="blue">
                                        Tutorial logic awareness (recap points), IDE integration (Dual Scripting), and paced narration flow.
                                    </DetailBox>
                                    <PromptExample prompt="Write a detailed 10-minute YouTube script for a beginner tutorial on building a password generator in Python. Include step-by-step code walkthroughs." color="blue" />
                                    <div className="p-3 bg-slate-800/40 rounded border border-white/5 text-[10px] text-gray-500 uppercase font-bold tracking-widest text-center">
                                        Try CoPilot: github.com/features/copilot
                                    </div>
                                </div>

                                {/* Perplexity */}
                                <div className="space-y-4">
                                    <h4 className="text-xl font-bold text-orange-400 flex items-center gap-2">
                                        <BookOpen className="w-5 h-5" /> Perplexity
                                    </h4>
                                    <p className="text-xs text-gray-400">Fact-first, research-focused assistant for data-driven analytical narratives.</p>
                                    <DetailBox title="Research Edge" color="orange">
                                        Live web access, auto-referencing citations, and journalistic summary logic for factual scripts.
                                    </DetailBox>
                                    <PromptExample prompt="Outline a 6-part educational YouTube video on the global rise of electric vehicles. Reference real-world data and reports." color="orange" />
                                    <div className="p-3 bg-slate-800/40 rounded border border-white/5 text-[10px] text-gray-500 uppercase font-bold tracking-widest text-center">
                                        Try Perplexity: perplexity.ai
                                    </div>
                                </div>
                            </div>

                            {/* Squibbler */}
                            <div className="mt-8 p-6 bg-slate-800/40 rounded-3xl border border-white/10 group hover:border-blue-500/30 transition-colors">
                                <h4 className="text-xl font-bold text-white flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 bg-blue-500/20 rounded flex items-center justify-center text-blue-400">
                                        <Settings className="w-4 h-4" />
                                    </div>
                                    Squibbler
                                </h4>
                                <p className="text-sm text-gray-300 mb-4">
                                    Built for professional scriptwriters and long-form storytellers. Specialized tools for outlining and screenplay formatting.
                                </p>
                                <div className="grid md:grid-cols-4 gap-3 text-[10px] text-gray-400 uppercase tracking-tighter">
                                    <div className="p-2 bg-black/20 rounded text-center">Film/TV Scripting</div>
                                    <div className="p-2 bg-black/20 rounded text-center">Multi-Part Series</div>
                                    <div className="p-2 bg-black/20 rounded text-center">Character Arcs</div>
                                    <div className="p-2 bg-black/20 rounded text-center">Screenwriting AI</div>
                                </div>
                            </div>
                        </div>
                    </ToolGuide>

                    {/* Section 2: Image Generation */}
                    <ToolGuide
                        title="AI Image Generation"
                        icon={<Camera className="w-6 h-6" />}
                        summary="Universal formula for high-end cinematic visuals."
                    >
                        <SectionHeader icon={Terminal} title="The Universal Formula" />
                        <div className="p-6 bg-slate-800/80 rounded-2xl border-2 border-dashed border-blue-500/30 text-center mb-10">
                            <p className="text-xl font-mono text-white leading-relaxed">
                                <span className="text-blue-400">[Subject]</span> + <span className="text-green-400">[Scene/Setting]</span> + <span className="text-purple-400">[Style/Medium]</span> + <span className="text-orange-400">[Lighting/Mood]</span> + <span className="text-pink-400">[Composition]</span>
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h5 className="text-white font-bold mb-4 flex items-center gap-2">
                                    <Zap className="w-4 h-4 text-blue-400" /> Tool-Specific Strategy
                                </h5>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="p-4 bg-slate-800/40 rounded-xl border border-white/5">
                                        <h6 className="text-blue-400 font-bold text-sm mb-2">Midjourney (V7)</h6>
                                        <p className="text-xs text-gray-400">Focus on <strong>cinematic lighting</strong> and texture. Use <code>--stylize</code> and <code>--chaos</code> for variety.</p>
                                    </div>
                                    <div className="p-4 bg-slate-800/40 rounded-xl border border-white/5">
                                        <h6 className="text-orange-400 font-bold text-sm mb-2">DALL-E 3</h6>
                                        <p className="text-xs text-gray-400">Best for <strong>literal adherence</strong> and complex text-within-image requirements.</p>
                                    </div>
                                    <div className="p-4 bg-slate-800/40 rounded-xl border border-white/5">
                                        <h6 className="text-purple-400 font-bold text-sm mb-2">Adobe Firefly</h6>
                                        <p className="text-xs text-gray-400">Optimized for <strong>commercial safety</strong> and seamless professional editing integration.</p>
                                    </div>
                                    <div className="p-4 bg-slate-800/40 rounded-xl border border-white/5">
                                        <h6 className="text-green-400 font-bold text-sm mb-2">Meta & Grok</h6>
                                        <p className="text-xs text-gray-400">Fast, <strong>conversational</strong> tools for instant visual brainstorming and exploration.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ToolGuide>

                    {/* Section 3: Video Generation */}
                    <ToolGuide
                        title="AI Video Generation"
                        icon={<Video className="w-6 h-6" />}
                        summary="Cinematic language for VEO 3 and flagship models."
                    >
                        <div className="space-y-8">
                            <SectionHeader icon={Camera} title="Professional Requirements" />
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div className="flex gap-4">
                                        <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 text-blue-400 text-xs font-bold">1</div>
                                        <div>
                                            <h6 className="text-white font-bold text-sm">Action Specificity</h6>
                                            <p className="text-xs text-gray-400">Use high-energy active verbs (e.g., "cascading," "racing," "pulsating").</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 text-blue-400 text-xs font-bold">2</div>
                                        <div>
                                            <h6 className="text-white font-bold text-sm">Camera Motion Control</h6>
                                            <p className="text-xs text-gray-400">Specify shots: "tracking shot," "slow cinematic pan," or "dolly zoom."</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 text-blue-400 text-xs font-bold">3</div>
                                        <div>
                                            <h6 className="text-white font-bold text-sm">Lighting & Mood</h6>
                                            <p className="text-xs text-gray-400">Define the atmosphere: "golden hour," "heavy mist," or "dramatic backlighting."</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex gap-4">
                                        <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 text-blue-400 text-xs font-bold">4</div>
                                        <div>
                                            <h6 className="text-white font-bold text-sm">Cinematic Language</h6>
                                            <p className="text-xs text-gray-400">Terms matter: "50mm prime lens," "shallow depth of field," "70mm film grain."</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 text-blue-400 text-xs font-bold">5</div>
                                        <div>
                                            <h6 className="text-white font-bold text-sm">Physical Realism</h6>
                                            <p className="text-xs text-gray-400">Ensure believable physics to avoid AI artifacts and visual distortion.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 text-blue-400 text-xs font-bold">6</div>
                                        <div>
                                            <h6 className="text-white font-bold text-sm">Artistic Style</h6>
                                            <p className="text-xs text-gray-400">Experimental looks: "Claymation," "Cyberpunk Neon," or "B&W Noir."</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <PromptExample
                                prompt="Cinematic low-angle tracking shot of a 1950s car driving through a neon-lit futuristic city, heavy rain reflecting on the asphalt, 35mm film style, high motion."
                                color="blue"
                            />
                        </div>
                    </ToolGuide>

                    {/* Section 4: Key Tips */}
                    <ToolGuide
                        title="Key Strategies for 2025"
                        icon={<Lightbulb className="w-6 h-6" />}
                        summary="The fundamentals that never change."
                    >
                        <div className="grid md:grid-cols-2 gap-6">
                            <DetailBox title="Context is King" color="orange">
                                Always tell the AI <strong>who</strong> the content is for and <strong>where</strong> it will be posted (e.g., "for a LinkedIn tech audience").
                            </DetailBox>
                            <DetailBox title="Iterative Refinement" color="green">
                                Treat the first output as a blueprint. Use "Live Refinement" tools to tweak specific elements without starting from scratch.
                            </DetailBox>
                            <DetailBox title="Visual Clarity" color="blue">
                                Describe the environment as vividly as the subject. A grounded scene provides better character consistency.
                            </DetailBox>
                            <DetailBox title="The 80/20 Rule" color="purple">
                                Let the AI do 80% of the mechanical work, but use the final 20% for human nuance and emotional calibration.
                            </DetailBox>
                        </div>
                    </ToolGuide>
                </div>

                <div className="mt-20 p-10 rounded-3xl bg-gradient-to-br from-blue-600/10 via-slate-800 to-purple-600/10 border border-white/10 text-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <h2 className="text-3xl font-bold mb-4">Level Up Your Prompts</h2>
                    <p className="text-gray-400 mb-8 max-w-md mx-auto">
                        Communication is the true engine of creativity. Use these frameworks to transform your ideas into professional assets.
                    </p>
                    <button
                        onClick={onBack}
                        className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-bold hover:scale-105 transition shadow-lg shadow-blue-500/20"
                    >
                        Back to Student Dashboard
                    </button>

                    <div className="mt-8 flex justify-center gap-6 text-gray-500 text-sm">
                        <span className="flex items-center gap-1"><ExternalLink className="w-4 h-4" /> 2025 Best Practices</span>
                        <span className="flex items-center gap-1"><MousePointer2 className="w-4 h-4" /> Prompt Engineering</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Helper icons for the component
const Video = (props) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="m22 8-6 4 6 4V8Z" /><rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
    </svg>
);

const Image = (props) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
);
