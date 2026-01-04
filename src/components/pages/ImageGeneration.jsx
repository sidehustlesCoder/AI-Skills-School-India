import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Image, Terminal, Settings, Wand2, FlaskConical, Zap, Video, Share2, MousePointer2, ExternalLink } from 'lucide-react';

const ToolGuide = ({ title, icon, summary, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border border-white/10 rounded-xl overflow-hidden mb-6 bg-slate-800/30 backdrop-blur-md transition-all duration-300">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition"
            >
                <div className="flex items-center gap-5">
                    <div className="p-3 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-xl text-orange-400 border border-orange-500/20">
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
    <h4 className="flex items-center gap-2 text-orange-400 mt-8 mb-4">
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

const PromptStructure = ({ examplePrompts }) => (
    <div className="mt-6 space-y-4">
        <SectionHeader icon={Terminal} title="Ideal Prompt Structure" />
        <ul className="list-none pl-0 space-y-3">
            <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></div>
                <span><strong>Subject/Theme:</strong> Clearly describe your main subject.</span>
            </li>
            <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></div>
                <span><strong>Details:</strong> Specify colors, textures, lighting, and mood.</span>
            </li>
            <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></div>
                <span><strong>Art Style:</strong> Include specific artistic styles or influences (e.g., Cyberpunk, Oil Painting).</span>
            </li>
            <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></div>
                <span><strong>Composition:</strong> Add perspective, camera angle, or shot type.</span>
            </li>
        </ul>

        <div className="mt-6 p-6 bg-slate-800/80 rounded-xl border border-white/5 font-mono text-sm">
            <h5 className="text-gray-400 mb-3 flex items-center gap-2">
                <Share2 className="w-4 h-4" /> Example Prompts:
            </h5>
            <div className="space-y-3">
                {examplePrompts.map((prompt, i) => (
                    <div key={i} className="text-orange-300 italic group relative">
                        "{prompt}"
                        <button
                            onClick={() => navigator.clipboard.writeText(prompt)}
                            className="bg-orange-500 text-white px-2 py-1 rounded text-[10px] ml-2 opacity-0 group-hover:opacity-100 transition inline-flex items-center gap-1"
                        >
                            Copy
                        </button>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default function ImageGeneration({ onBack }) {
    return (
        <div className="pt-24 pb-20 px-4 min-h-screen bg-slate-900/50">
            <div className="max-w-4xl mx-auto">
                <header className="mb-16 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 rounded-full border border-orange-500/20 text-orange-400 text-sm font-semibold mb-6">
                        <Wand2 className="w-4 h-4" /> AI Image Mastery Guide
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-white to-green-400 bg-clip-text text-transparent leading-tight">
                        AI Image Tools
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Explore the industry's most powerful AI image generation tools. Learn the ideal prompting structures and technical workflows.
                    </p>
                </header>

                <div className="space-y-6">
                    {/* Midjourney */}
                    <ToolGuide
                        title="Midjourney"
                        icon={<Wand2 className="w-6 h-6" />}
                        summary="The gold standard for artistic and stylized AI visuals."
                    >
                        <p className="text-gray-300 leading-relaxed mb-6">
                            Midjourney is perhaps the most popular AI image generation tool known for its distinctive, artistic, and often surreal visual style.
                            As of 2025, it can also transform your generated images into video.
                        </p>

                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                            <DetailBox title="Discord Version" color="indigo">
                                Community-driven, great for experimenting and getting feedback. Uses "prompt codes" for settings.
                            </DetailBox>
                            <DetailBox title="Web Version" color="green">
                                Cleaner interface, private generations, and much easier to manage with sliders and settings.
                            </DetailBox>
                        </div>

                        <PromptStructure
                            examplePrompts={[
                                "A peaceful sunset over a mountain lake, warm colors, realistic detail, high resolution --ar 16:9",
                                "Surreal forest scene with giant mushrooms, misty atmosphere, cinematic lighting",
                                "Cyberpunk city skyline at night, neon lights, detailed buildings, ultra-realistic"
                            ]}
                        />

                        <SectionHeader icon={Settings} title="Web Version Settings" />
                        <div className="bg-slate-800/50 p-6 rounded-xl border border-white/5 grid md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div>
                                    <h6 className="text-white font-bold text-sm mb-1 italic underline">Image Size</h6>
                                    <p className="text-xs text-gray-400">1:1 for Social Media, 9:16 for Reels/Shorts, 16:9 for YouTube.</p>
                                </div>
                                <div>
                                    <h6 className="text-white font-bold text-sm mb-1 italic underline">Aesthetics</h6>
                                    <p className="text-xs text-gray-400">Adjust Stylization, Weirdness, and Variety. Focus on accurate prompts for best results.</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h6 className="text-white font-bold text-sm mb-1 italic underline">Add Images (V7)</h6>
                                    <p className="text-xs text-gray-400">Upload images for Character Reference (Omni), Style Reference, or Starting Frames for video.</p>
                                </div>
                                <div>
                                    <h6 className="text-white font-bold text-sm mb-1 italic underline">Creation Actions</h6>
                                    <p className="text-xs text-gray-400">Vary (Subtle/Strong), Upscale (Creative/Subtle), and Erase & Restore features for direct editing.</p>
                                </div>
                            </div>
                        </div>

                        <SectionHeader icon={Terminal} title="Key Discord Codes" />
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 font-mono text-[11px]">
                            <div className="p-2 bg-slate-800 rounded border border-white/5">--ar 16:9 (Ratio)</div>
                            <div className="p-2 bg-slate-800 rounded border border-white/5">--q 2 (Quality)</div>
                            <div className="p-2 bg-slate-800 rounded border border-white/5">--r 4 (Repeat)</div>
                            <div className="p-2 bg-slate-800 rounded border border-white/5">--no people (Exclude)</div>
                            <div className="p-2 bg-slate-800 rounded border border-white/5">--s 500 (Style)</div>
                            <div className="p-2 bg-slate-800 rounded border border-white/5">--tile (Seamless)</div>
                        </div>
                    </ToolGuide>

                    {/* Runway ML */}
                    <ToolGuide
                        title="Runway ML (Gen-4)"
                        icon={<Video className="w-6 h-6" />}
                        summary="The most powerful browser-based AI tool for videos and images."
                    >
                        <p className="text-gray-300 mb-6">
                            Runway is an intuitive platform for creating videos and images. With Gen-4, you can generate realistic videos from text or animate still images effortlessly.
                        </p>

                        <SectionHeader icon={MousePointer2} title="How to Use" />
                        <ol className="list-decimal pl-5 space-y-2 text-gray-300 text-sm">
                            <li>Input a <strong>Detailed Text Prompt</strong> describing your scene.</li>
                            <li><strong>References:</strong> Add up to 3 images. Use <code>@reference</code> in your prompt to guide style or character likeness.</li>
                            <li><strong>Styles:</strong> Select from the gallery or prompt for specific artistic tones.</li>
                            <li><strong>Generate:</strong> Set aspect ratio and quality before hitting generate.</li>
                        </ol>

                        <PromptStructure
                            examplePrompts={[
                                "A serene mountain landscape at sunrise, vibrant colors, photorealistic style",
                                "A futuristic city skyline at night, neon lights, cyberpunk aesthetic",
                                "A majestic lion with a detailed mane, dramatic lighting, close-up"
                            ]}
                        />
                    </ToolGuide>

                    {/* DALL-E 3 */}
                    <ToolGuide
                        title="DALL-E 3"
                        icon={<Image className="w-6 h-6" />}
                        summary="Advanced precision and perfect text integration."
                    >
                        <p className="text-gray-300 mb-6">
                            Developed by OpenAI, DALL-E is highy responsive to natural language and excels at placing accurate text within visual contexts.
                        </p>

                        <DetailBox title="Noteworthy Features" color="orange">
                            The <strong>Inpainting feature</strong> allows you to highlight specific sections of an image and revise them with new prompts.
                        </DetailBox>

                        <PromptStructure
                            examplePrompts={[
                                "A vintage robot playing chess in a cozy library, warm lighting, hyper-realistic",
                                "A futuristic city skyline at sunset, high detail, neon colors, cinematic perspective",
                                "Surreal underwater scene with floating castles and giant jellyfish, mystical lighting"
                            ]}
                        />

                        <SectionHeader icon={Terminal} title="Prompting Tips" />
                        <div className="bg-slate-800/40 p-5 rounded-xl border border-white/10 text-sm space-y-2">
                            <p>• Specify <strong>Layout</strong> in the prompt (e.g., "wide landscape format").</p>
                            <p>• Mention <strong>Lighting</strong> styles (e.g., "soft morning light").</p>
                            <p>• Use <strong>Composition terms</strong> like "aerial view" or "portrait format".</p>
                            <p>• Avoid unwanted items by specifying "without..." or "no [element]".</p>
                        </div>
                    </ToolGuide>

                    {/* Gemini */}
                    <ToolGuide
                        title="Google Gemini (Imagen 2/3)"
                        icon={<Zap className="w-6 h-6" />}
                        summary="Fast, integrated, and perfect for narrative contexts."
                    >
                        <p className="text-gray-300 mb-6">
                            Gemini performs best when your prompt includes clear context or a narrative purpose, such as a creative brief or storyboard.
                        </p>

                        <SectionHeader icon={Settings} title="Step-by-Step Step" />
                        <div className="space-y-4 text-sm text-gray-300">
                            <div className="flex gap-4">
                                <span className="p-2 bg-orange-500/10 text-orange-400 rounded-full h-8 w-8 flex items-center justify-center shrink-0">1</span>
                                <p><strong>Sign in</strong> at gemini.google.com.</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="p-2 bg-orange-500/10 text-orange-400 rounded-full h-8 w-8 flex items-center justify-center shrink-0">2</span>
                                <p><strong>Start Prompt:</strong> Include purpose (e.g., "for a school project") for better alignment.</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="p-2 bg-orange-500/10 text-orange-400 rounded-full h-8 w-8 flex items-center justify-center shrink-0">3</span>
                                <p><strong>Refine:</strong> Use "Regenerate" or specify changes like "Add fog" or "Use vector style".</p>
                            </div>
                        </div>
                    </ToolGuide>

                    {/* Stable Diffusion */}
                    <ToolGuide
                        title="Stable Diffusion"
                        icon={<FlaskConical className="w-6 h-6" />}
                        summary="Open-source power with absolute control over every pixel."
                    >
                        <p className="text-gray-300 mb-6">
                            Ideal for artists who need precise control. It allows local installations and granular parameter adjustments like Seed and Cfg Scale.
                        </p>

                        <DetailBox title="Advanced Actions" color="purple">
                            <strong>Reinvent:</strong> Uses the base structure of an image to create a new version with a different style (e.g., "Anime") while maintaining composition.
                        </DetailBox>

                        <SectionHeader icon={Terminal} title="Toolbox Capabilities" />
                        <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-xs text-gray-400">
                            <li>• Sketch to Image</li>
                            <li>• Generative Inpaint</li>
                            <li>• Background Replacement</li>
                            <li>• Zero-shot Zoom out</li>
                            <li>• High-res Upscale</li>
                            <li>• Image-to-Video conversion</li>
                        </ul>
                    </ToolGuide>

                    {/* Meta AI */}
                    <ToolGuide
                        title="Meta AI"
                        icon={<Share2 className="w-6 h-6" />}
                        summary="Emotionally expressive and human-centered AI."
                    >
                        <p className="text-gray-300 mb-6">
                            Meta AI excels at human portraits and emotional storytelling, available directly via WhatsApp, Instagram, and Messenger.
                        </p>
                        <DetailBox title="Pro Tip" color="blue">
                            Focus on <strong>Human Context</strong>: Descriptions of ethnicity, clothing, and specifically how characters should <em>feel</em> (e.g., joy, awe).
                        </DetailBox>
                    </ToolGuide>

                    {/* Grok */}
                    <ToolGuide
                        title="Grok (by X)"
                        icon={<Terminal className="w-6 h-6" />}
                        summary="Real-time integrated AI with high creative freedom."
                    >
                        <p className="text-gray-300">
                            Grok offers conversational prompting and high flexibility, leveraging X's mandate for freedom of expression to create diverse imagery without restrictive filters.
                        </p>
                        <PromptStructure
                            examplePrompts={[
                                "A peaceful lakeside cabin at sunset, warm colors, photorealistic, --ar 16:9",
                                "Surreal forest with neon mushrooms, soft fog, dreamlike ambiance, --quality high"
                            ]}
                        />
                    </ToolGuide>
                </div>

                <div className="mt-20 p-10 rounded-3xl bg-gradient-to-br from-orange-600/10 via-slate-800 to-green-600/10 border border-white/10 text-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <h2 className="text-3xl font-bold mb-4">Mastered the Tools?</h2>
                    <p className="text-gray-400 mb-8 max-w-md mx-auto">
                        Take these skills back to our core video modules and start building viral campaigns today.
                    </p>
                    <button
                        onClick={onBack}
                        className="px-10 py-4 bg-gradient-to-r from-orange-600 to-green-600 rounded-xl font-bold hover:scale-105 transition shadow-lg shadow-orange-500/20"
                    >
                        Return to Dashboard
                    </button>

                    <div className="mt-8 flex justify-center gap-6 text-gray-500 text-sm">
                        <span className="flex items-center gap-1"><ExternalLink className="w-4 h-4" /> 2025 Updates Applied</span>
                        <span className="flex items-center gap-1"><MousePointer2 className="w-4 h-4" /> Verified Techniques</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
