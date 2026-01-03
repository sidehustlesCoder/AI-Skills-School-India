import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Video, Terminal, Settings, Wand2, FlaskConical, Zap, Play, Share2, MousePointer2, ExternalLink, Camera, Layers, Music, Image } from 'lucide-react';

const ToolGuide = ({ title, icon, summary, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border border-white/10 rounded-xl overflow-hidden mb-6 bg-slate-800/30 backdrop-blur-md transition-all duration-300">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition"
            >
                <div className="flex items-center gap-5">
                    <div className="p-3 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl text-green-400 border border-green-500/20">
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

const SectionHeader = ({ icon: Icon, title }) => (
    <h4 className="flex items-center gap-2 text-green-400 mt-8 mb-4">
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

const PromptStructure = ({ examplePrompts, title = "Ideal Prompt Structure" }) => (
    <div className="mt-6 space-y-4">
        <SectionHeader icon={Terminal} title={title} />
        <div className="mt-6 p-6 bg-slate-800/80 rounded-xl border border-white/5 font-mono text-sm">
            <h5 className="text-gray-400 mb-3 flex items-center gap-2">
                <Share2 className="w-4 h-4" /> Example Prompts:
            </h5>
            <div className="space-y-3">
                {examplePrompts.map((prompt, i) => (
                    <div key={i} className="text-green-300 italic group relative">
                        "{prompt}"
                        <button
                            onClick={() => navigator.clipboard.writeText(prompt)}
                            className="bg-green-500 text-white px-2 py-1 rounded text-[10px] ml-2 opacity-0 group-hover:opacity-100 transition inline-flex items-center gap-1"
                        >
                            Copy
                        </button>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default function VideoTools({ onBack }) {
    return (
        <div className="pt-24 pb-20 px-4 min-h-screen bg-slate-900/50">
            <div className="max-w-4xl mx-auto">
                <header className="mb-16 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full border border-green-500/20 text-green-400 text-sm font-semibold mb-6">
                        <Video className="w-4 h-4" /> AI Skills School Exclusive
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-white to-green-400 bg-clip-text text-transparent leading-tight">
                        AI Video Tools
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Your complete guide to cinematic AI video generation. Master motion, camera control, and storytelling with the latest 2025 models.
                    </p>
                </header>

                <div className="space-y-6">
                    {/* Google Flow (Veo 3) */}
                    <ToolGuide
                        title="Google Flow (Veo 3)"
                        icon={<Zap className="w-6 h-6" />}
                        summary="Getting Started with Veo 3 in Google Flow: Step-by-Step Guide"
                    >
                        <p className="text-gray-400 text-sm mb-6 italic">
                            <strong>Note:</strong> Veo 3 can be accessed through various platforms and third-party tools, but for the most direct and integrated experience, Google Flow (from Google Labs) is the best option. It provides access to all the latest features in a clean, organized layout—perfect for both beginners and pros.
                        </p>

                        <SectionHeader icon={MousePointer2} title="Step 1: Open Flow and Start a New Project" />
                        <ol className="list-decimal pl-5 space-y-2 text-gray-300 mb-6">
                            <li>Go to <strong>Google Labs &gt; Flow</strong>.</li>
                            <li>Click <strong>“+ New Project”</strong> to begin.</li>
                            <li>You’ll now see the Flow interface.</li>
                        </ol>
                        <p className="text-sm text-gray-400 mb-6 bg-slate-800/50 p-4 rounded-lg border border-white/5">
                            At the bottom of the screen is your <strong>Prompt Box</strong>—think of it as your control center. This is where you’ll type your video prompts.
                        </p>

                        <SectionHeader icon={Settings} title="Step 2: Select Your Mode" />
                        <p className="text-sm text-gray-300 mb-4 font-medium">On the left-hand dropdown, choose from:</p>
                        <div className="grid md:grid-cols-3 gap-4 mb-6">
                            <DetailBox title="Text to Video" color="blue">Type a detailed prompt and generate a video.</DetailBox>
                            <DetailBox title="Frames to Video" color="green">Upload a starting/ending image to animate.</DetailBox>
                            <DetailBox title="Ingredients to Video" color="orange">Build scenes with specific custom elements.</DetailBox>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h5 className="text-blue-400 font-bold mb-3 flex items-center gap-2">
                                    <Terminal className="w-4 h-4" /> Text to Video
                                </h5>
                                <p className="text-sm text-gray-300 mb-4">Use this structure for the best results with Veo 3:</p>
                                <div className="bg-slate-800/40 p-5 rounded-xl border border-white/10 mb-4">
                                    <h6 className="text-white text-xs font-bold uppercase tracking-wider mb-3 text-orange-400">Prompt Template:</h6>
                                    <ul className="text-xs text-gray-400 space-y-1 pl-4 list-disc">
                                        <li><strong>Scene Description:</strong> What’s happening? Cinematic, documentary, surreal?</li>
                                        <li><strong>Characters:</strong> Who, age, gender, clothing, emotion, body language.</li>
                                        <li><strong>Setting:</strong> Specific location, time, weather, indoor/outdoor.</li>
                                        <li><strong>Style:</strong> Realistic, animated, vintage, handheld, drone shot.</li>
                                        <li><strong>Sound/Music:</strong> Background music, voiceover, natural sound.</li>
                                        <li><strong>Dialogue:</strong> Exact speech and delivery tone.</li>
                                        <li><strong>Camera:</strong> Wide shot, close-up, slow pan, zoom in.</li>
                                        <li><strong>Mood/Tone:</strong> Romantic, tense, eerie, peaceful...</li>
                                    </ul>
                                </div>
                                <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl relative group">
                                    <span className="absolute -top-3 left-4 bg-blue-500 text-white text-[10px] px-2 py-1 rounded font-bold">💡 EXAMPLE</span>
                                    <p className="text-sm text-gray-200 italic">"A young girl in 1960s Nashville walks into a dusty record store at sunset. She's wearing a yellow dress and holding a notebook. The air is warm, and music plays softly from a jukebox in the corner. Shot in vintage 16mm style with soft lighting and grain. She says, 'This is where it all begins.' Camera pans slowly toward her face."</p>
                                    <button
                                        onClick={() => navigator.clipboard.writeText("A young girl in 1960s Nashville walks into a dusty record store at sunset. She's wearing a yellow dress and holding a notebook. The air is warm, and music plays softly from a jukebox in the corner. Shot in vintage 16mm style with soft lighting and grain. She says, 'This is where it all begins.' Camera pans slowly toward her face.")}
                                        className="mt-3 bg-blue-500 text-white px-3 py-1 rounded text-[10px] opacity-0 group-hover:opacity-100 transition inline-flex items-center gap-1"
                                    >
                                        Copy Example
                                    </button>
                                </div>
                            </div>

                            <div>
                                <h5 className="text-green-400 font-bold mb-3 flex items-center gap-2">
                                    <Image className="w-4 h-4" /> Frames to Video
                                </h5>
                                <p className="text-sm text-gray-300 mb-3">Upload a starting image or an image to match the final frame.</p>
                                <ul className="text-sm text-gray-400 space-y-1 mb-4 pl-4 list-disc">
                                    <li>Upload an image to start your video.</li>
                                    <li>Choose if the image should be a starting point, ending point, or both.</li>
                                    <li>Then write your prompt (as above) to animate the scene.</li>
                                </ul>
                                <div className="p-3 bg-orange-500/10 border border-orange-500/20 rounded-xl text-xs text-orange-300">
                                    <strong>⚠️ Note:</strong> As mentioned in the course, some versions (Veo 2 vs Veo 3) may limit how frames work—check latest updates for compatibility.
                                </div>
                            </div>

                            <div>
                                <h5 className="text-orange-400 font-bold mb-3 flex items-center gap-2">
                                    <Layers className="w-4 h-4" /> Ingredients to Video
                                </h5>
                                <p className="text-sm text-gray-300 mb-3">Think of this as your way to build a scene with custom elements.</p>
                                <ul className="text-sm text-gray-400 space-y-1 mb-4 pl-4 list-disc">
                                    <li>Add a person with a specific look or outfit.</li>
                                    <li>Include a product or branded item.</li>
                                    <li>Place objects into the scene (e.g., “a red vintage typewriter on a desk”).</li>
                                </ul>
                                <p className="text-xs text-green-400 font-bold mb-2 italic">💡 Great for ads, product demos, or specific storytelling moments.</p>
                                <p className="text-sm text-gray-400">After choosing “Ingredients to Video,” simply add your elements, then write your scene prompt as usual.</p>
                            </div>

                            <div>
                                <SectionHeader icon={Settings} title="Step 3: Choose Your Model" />
                                <p className="text-sm text-gray-300 mb-2">Click the Settings icon (top-right):</p>
                                <ul className="text-sm text-gray-400 space-y-1 mb-4 pl-4 list-disc">
                                    <li>Choose between <strong>Veo 2 or Veo 3</strong></li>
                                    <li>Choose <strong>Fast or Quality</strong> mode</li>
                                </ul>
                                <p className="text-xs text-gray-500 italic">
                                    (We go over this in the course in more detail, including side-by-side comparisons of Veo 2 vs Veo 3, quality vs speed, and cost differences.)
                                </p>
                            </div>

                            <div className="border-t border-white/10 pt-6">
                                <h6 className="text-white font-bold mb-2 flex items-center gap-2">
                                    <ExternalLink className="w-4 h-4 text-orange-400" /> Final Tip
                                </h6>
                                <p className="text-sm text-gray-400">
                                    Google may update Flow’s layout or features frequently—and may even show different versions in different locations. If you notice a major change, check back in the course—I’ll always upload a new tutorial video when something important changes.
                                </p>
                            </div>
                        </div>
                    </ToolGuide>

                    {/* Runway ML */}
                    <ToolGuide
                        title="Runway ML"
                        icon={<Wand2 className="w-6 h-6" />}
                        summary="A Comprehensive Guide to Using Runway for AI Video Creation"
                    >
                        <p className="text-gray-300 mb-6">
                            Runway is one of the most versatile and user-friendly AI platforms, making it a favorite for creatives looking to push the boundaries of video editing. With its ability to tackle common challenges like morphing and distortion, Runway streamlines the process of creating dynamic and visually stunning videos.
                        </p>

                        <SectionHeader icon={Zap} title="Why Use Runway?" />
                        <div className="grid md:grid-cols-3 gap-4 mb-8 text-sm">
                            <DetailBox title="AI Precision" color="blue">Overcome common issues like distortion and awkward transitions.</DetailBox>
                            <DetailBox title="Effortless Expansion" color="green">Extend videos seamlessly with intelligent camera directions.</DetailBox>
                            <DetailBox title="Advanced Editing" color="orange">Convert styles or adjust ratios without losing quality.</DetailBox>
                        </div>

                        <SectionHeader icon={MousePointer2} title="Getting Started" />
                        <ul className="list-disc pl-5 text-gray-300 space-y-2 mb-6">
                            <li><strong>Visit the Platform:</strong> Head over to <a href="https://runwayml.com/" className="text-green-400 hover:underline">Runway</a>.</li>
                            <li><strong>Explore Tools:</strong> Browse the catalog, including the renamed <strong>Generative Session</strong>.</li>
                        </ul>

                        <SectionHeader icon={Layers} title="Core Features" />
                        <div className="space-y-4 mb-8">
                            <div className="bg-slate-800/40 p-4 rounded-xl border border-white/5">
                                <h6 className="text-white font-bold text-sm mb-2 flex items-center gap-2 underline italic">1. Sessions Overview (Left Panel)</h6>
                                <ul className="text-xs text-gray-400 space-y-2">
                                    <li><strong className="text-gray-200">Prompt:</strong> Text prompts to guide camera or character actions alongside images.</li>
                                    <li><strong className="text-gray-200">Camera:</strong> Manually adjust zoom, pan, tilt, and roll with real-time preview.</li>
                                    <li><strong className="text-gray-200">Act One:</strong> Transform webcam footage into new styles or swap characters (details in course).</li>
                                    <li><strong className="text-gray-200">Expand Video:</strong> Change 16:9 to 9:16 by generating content instead of cropping.</li>
                                </ul>
                            </div>
                        </div>

                        <SectionHeader icon={Settings} title="How to Use Each Session" />
                        <ol className="list-decimal pl-5 text-sm text-gray-300 space-y-2 mb-6">
                            <li><strong>Choose Your Tool:</strong> Select Prompt or Camera.</li>
                            <li><strong>Upload an Image:</strong> Set start and end frames to dictate AI motion.</li>
                            <li><strong>Optional Prompt:</strong> Describe specific movements or actions.</li>
                            <li className="text-green-400 font-bold italic">Tip: Begin with no prompt to see the AI’s inspiration, then refine it.</li>
                        </ol>

                        <SectionHeader icon={Terminal} title="Prompt Crafting Tips" />
                        <p className="text-sm text-gray-400 mb-4">Focus on <strong>movement</strong> rather than image content.</p>
                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                            <div className="p-4 bg-slate-800/80 rounded-lg border border-white/5">
                                <span className="text-[10px] text-orange-400 font-bold uppercase">Input</span>
                                <p className="text-xs text-gray-300 italic mt-1">"A character posing with a peace sign."</p>
                            </div>
                            <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                                <span className="text-[10px] text-green-400 font-bold uppercase">Better Prompt</span>
                                <p className="text-xs text-gray-300 italic mt-1">"Subject cheerfully poses, her hands forming a peace sign."</p>
                            </div>
                        </div>

                        <PromptStructure
                            title="Sample Prompts for Inspiration"
                            examplePrompts={[
                                "Seamless Transitions: Continuous hyperspeed FPV footage: The camera flies through a glacial canyon to a dreamy cloudscape.",
                                "Camera Movements: A glowing ocean at night. The camera starts with a macro close-up of a jellyfish, then zooms out to reveal the whole ocean.",
                                "Text Title Cards: Dynamic title screen: Black paint pours over a colorful wall, forming the word 'Runway' with cinematic lighting."
                            ]}
                        />

                        <SectionHeader icon={Play} title="Generating Video" />
                        <div className="bg-slate-800/40 p-5 rounded-xl border border-white/10 grid md:grid-cols-2 gap-4 mb-8 text-sm">
                            <div className="space-y-2">
                                <p>• <strong>Aspect Ratio:</strong> Select 16:9, 9:16, etc.</p>
                                <p>• <strong>Duration:</strong> 5 or 10s (extendable).</p>
                            </div>
                            <div className="space-y-2">
                                <p>• <strong>Select Model:</strong> Use <strong>Turbo</strong> for optimal speed/quality.</p>
                                <p>• <strong>Generate:</strong> Click Generate for your first iteration.</p>
                            </div>
                        </div>

                        <SectionHeader icon={Settings} title="Post-Generation Options" />
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-[10px] text-gray-400 font-mono mb-8">
                            <div className="p-2 bg-slate-800 rounded border border-white/5">Regenerate</div>
                            <div className="p-2 bg-slate-800 rounded border border-white/5">Extend (+8s)</div>
                            <div className="p-2 bg-slate-800 rounded border border-white/5">Lip Sync</div>
                            <div className="p-2 bg-slate-800 rounded border border-white/5">Video to Video</div>
                            <div className="p-2 bg-slate-800 rounded border border-white/5">Edit Time</div>
                            <div className="p-2 bg-slate-800 rounded border border-white/5">Expand Video</div>
                            <div className="p-2 bg-slate-800 rounded border border-white/5">Download</div>
                        </div>

                        <SectionHeader icon={Video} title="Additional Features" />
                        <div className="grid md:grid-cols-2 gap-6 mb-8 text-sm">
                            <div>
                                <h6 className="text-white font-bold mb-2">Camera Movement</h6>
                                <p className="text-xs text-gray-400 italic">Fine-tune: Horizontal (Pan), Vertical (Tilt), Zoom, Roll with real-time preview.</p>
                            </div>
                            <div>
                                <h6 className="text-white font-bold mb-2">Act One</h6>
                                <p className="text-xs text-gray-400 italic">Record webcam footage to animate character movement and expressions instantly.</p>
                            </div>
                        </div>

                        <div className="mt-8 p-6 bg-gradient-to-r from-green-500/10 to-transparent rounded-2xl border-l-4 border-green-500">
                            <h6 className="text-white font-bold mb-2 text-lg italic underline">In Summary</h6>
                            <p className="text-sm text-gray-300">
                                Runway simplifies the process of creating high-quality, AI-enhanced videos. Whether you're crafting cinematic transitions, animating characters, or repurposing videos for new formats, this platform is your go-to tool for seamless creativity.
                            </p>
                            <a href="https://runwayml.com/" className="mt-4 inline-flex items-center gap-2 text-green-400 font-bold hover:underline">
                                Start experimenting today at Runway <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>
                    </ToolGuide>

                    {/* Dream Machine */}
                    <ToolGuide
                        title="Luma Dream Machine"
                        icon={<Layers className="w-6 h-6" />}
                        summary="Cinematic realism and high-quality motion."
                    >
                        <p className="text-gray-300 mb-6">Dream Machine excels at natural motion and follows conversational prompts with high accuracy.</p>

                        <SectionHeader icon={Terminal} title="Advanced Features" />
                        <ul className="list-disc pl-5 text-sm text-gray-400 space-y-1 mb-6">
                            <li><strong>Modify:</strong> Adjust visuals via descriptions (e.g., "Make it warmer").</li>
                            <li><strong>Consisten Characters:</strong> Upload an image and use <code>@character</code>.</li>
                            <li><strong>Visual Reference:</strong> Use <code>@style</code> to guide the aesthetic.</li>
                            <li><strong>Loop:</strong> Add "loop" to the prompt for seamless repeats.</li>
                        </ul>

                        <PromptStructure
                            examplePrompts={[
                                "A realistic video of a man walking through New York City, it's a sunny day, busy and bright.",
                                "A macro shot of a blue butterfly landing on a flower, slow motion, shallow depth of field, cinematic style."
                            ]}
                        />
                    </ToolGuide>

                    {/* Haiper */}
                    <ToolGuide
                        title="Haiper"
                        icon={<Play className="w-6 h-6" />}
                        summary="Simple, precise, and great for action shots."
                    >
                        <DetailBox title="Strategy Guide" color="orange">
                            Use strong action words like <strong>"jumping"</strong> or <strong>"exploding"</strong>. Haiper's model responds directly to precision and kinetic energy.
                        </DetailBox>

                        <div className="mt-6 p-4 bg-slate-800 rounded-xl border border-white/5">
                            <h5 className="text-white font-bold text-sm mb-2">Cinematic Angles</h5>
                            <p className="text-xs text-gray-400 italic">"a drone shot of a statue in a park", "low angle shot of a runner on a track"</p>
                        </div>
                    </ToolGuide>

                    {/* Pika Labs */}
                    <ToolGuide
                        title="Pika Labs"
                        icon={<MousePointer2 className="w-6 h-6" />}
                        summary="Creative potential with unique animation effects."
                    >
                        <SectionHeader icon={Terminal} title="Camera Commands" />
                        <div className="grid grid-cols-2 gap-3 text-xs font-mono text-green-300">
                            <div className="p-3 bg-slate-800 rounded">dash camera pan right</div>
                            <div className="p-3 bg-slate-800 rounded">dash camera zoom in</div>
                            <div className="p-3 bg-slate-800 rounded">dash camera rotate clockwise</div>
                        </div>

                        <PromptStructure
                            examplePrompts={[
                                "A bustling city street at noon, crowded with people. dash camera pan right and dash camera zoom in on a street performer."
                            ]}
                        />
                    </ToolGuide>

                    {/* InVideo */}
                    <ToolGuide
                        title="InVideo AI"
                        icon={<Music className="w-6 h-6" />}
                        summary="InVideo: Quick-Generate Stunning AI Videos"
                    >
                        <p className="text-gray-300 mb-6">
                            Create high-quality AI videos in minutes with InVideo’s streamlined workflows. While you sacrifice some control, this “done-for-you” service offers rapid, professional results.
                        </p>

                        <SectionHeader icon={Layers} title="Pre-Defined Workflows Include" />
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                            {['AI Short Video', 'Script-to-AI Video', 'Screenplay-to-AI', 'Brand Story', 'Animated Video', 'And more!'].map((wf) => (
                                <div key={wf} className="p-2 bg-slate-800 rounded border border-white/5 text-[10px] text-gray-400 text-center uppercase tracking-tight">
                                    {wf}
                                </div>
                            ))}
                        </div>

                        <SectionHeader icon={Settings} title="How It Works" />
                        <div className="space-y-6">
                            <DetailBox title="1. Follow Workflow Prompts" color="blue">
                                <ul className="list-disc pl-4 space-y-1">
                                    <li>Upload a script or input a text prompt.</li>
                                    <li>Choose <strong>Generated Video</strong> (subscription required) or <strong>Stock Video</strong>.</li>
                                </ul>
                            </DetailBox>

                            <DetailBox title="2. Customize Settings" color="green">
                                <ul className="list-disc pl-4 space-y-1">
                                    <li><strong>Background Music:</strong> Select the style for the mood.</li>
                                    <li><strong>Language & Captions:</strong> Choose language and font style.</li>
                                    <li><strong>Voice Actors:</strong> Pick narrators by gender, age, or accent.</li>
                                    <li><strong>Branding:</strong> Add your own watermark or logo.</li>
                                </ul>
                            </DetailBox>

                            <DetailBox title="3. Audience & Style Preferences" color="orange">
                                <ul className="list-disc pl-4 space-y-1">
                                    <li><strong>Audience:</strong> Tailor the content tone specifically to your viewers.</li>
                                    <li><strong>Mood:</strong> Educational, entertaining, dramatic, etc.</li>
                                    <li><strong>Platform:</strong> YouTube, Instagram, etc. to auto-adjust aspect ratio.</li>
                                </ul>
                            </DetailBox>

                            <DetailBox title="4. Generate & Edit" color="purple">
                                InVideo produces your video. You can refine the output using their editing tools to adjust clips, text overlays, and more.
                            </DetailBox>
                        </div>

                        <div className="mt-8 p-6 bg-blue-500/5 rounded-2xl border border-blue-500/10 text-center">
                            <p className="text-sm text-gray-400 mb-4">
                                InVideo makes professional AI video creation accessible to everyone—fast, simple, and versatile.
                            </p>
                            <a href="https://invideo.io/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-400 font-bold hover:underline">
                                Visit Invideo <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>
                    </ToolGuide>

                    {/* KlingAI */}
                    <ToolGuide
                        title="KlingAI"
                        icon={<Wand2 className="w-6 h-6" />}
                        summary="KlingAI: Create Dynamic AI Videos"
                    >
                        <p className="text-gray-300 mb-6">
                            KlingAI provides intuitive tools to generate AI-powered videos with customizable prompts and camera movements. Here's how to get started (note the layout of all AI tools may vary slightly over time):
                        </p>

                        <div className="space-y-8">
                            <div>
                                <h5 className="text-blue-400 font-bold mb-3 flex items-center gap-2">
                                    <Terminal className="w-4 h-4" /> Text to video
                                </h5>
                                <ol className="list-decimal pl-5 text-sm text-gray-300 space-y-2 mb-4">
                                    <li>Select <strong>video</strong> from the left hand panel.</li>
                                    <li>Choose <strong>text to video</strong> at the top.</li>
                                    <li>Prompt as shown in the video lecture in the text prompt box (required).</li>
                                    <li><strong className="text-green-400">Deep Seek Optimize:</strong> Click to let Deep Seek optimize the prompt and select the generation you think best suits your desired video output.</li>
                                    <li>Below the prompt box describe any music or sound effects you'd like (optional).</li>
                                    <li>In the settings below this window, choose duration, orientation and the number of outputs.</li>
                                    <li><strong>Generate!</strong></li>
                                </ol>
                                <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl text-xs text-blue-300 italic">
                                    💡 After generation, you have options to lipsync and multi-elements below the video.
                                </div>
                            </div>

                            <div>
                                <h5 className="text-green-400 font-bold mb-3 flex items-center gap-2">
                                    <Image className="w-4 h-4" /> Image to video
                                </h5>
                                <ol className="list-decimal pl-5 text-sm text-gray-300 space-y-2 mb-4">
                                    <li>Select <strong>video</strong> from the left hand panel.</li>
                                    <li>Choose <strong>image to video</strong> at the top.</li>
                                    <li>Upload your image (click/drop/paste).</li>
                                    <li>Select whether the image should be your <strong>start or end frame</strong>.</li>
                                    <li>Prompt primarily for <strong>movement</strong> (more basic than text-to-video).</li>
                                    <li>In the settings below this window, choose duration, orientation and the number of outputs.</li>
                                    <li><strong>Generate!</strong></li>
                                </ol>
                                <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-xl text-xs text-green-300 italic">
                                    💡 After generation, you have options to lipsync and multi-elements below the video.
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 p-6 bg-slate-800/40 rounded-2xl border border-white/10 text-center">
                            <p className="text-sm text-gray-300 mb-4">
                                KlingAI empowers you to create personalized, professional AI videos with ease. Experiment with the tools and unleash your creativity!
                            </p>
                            <a href="https://klingai.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white bg-gradient-to-r from-blue-600 to-green-600 px-6 py-2 rounded-full font-bold hover:scale-105 transition">
                                Visit KlingAI <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>
                    </ToolGuide>

                    {/* Kaiber */}
                    <ToolGuide
                        title="Kaiber"
                        icon={<Layers className="w-6 h-6" />}
                        summary="Integrated canvas for combining multiple AI models."
                    >
                        <p className="text-gray-300 text-sm mb-4">Kaiber provides a single subscription to access Luma, Runway, Kling, Minimax, and Mochi on a single dynamic canvas.</p>
                        <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                            <h6 className="font-bold text-green-400 mb-1 italic">Canvas Logic</h6>
                            <p className="text-xs text-gray-300">A project workspace that organizes your workflow from left to right: Subject &gt; Keyframes &gt; Fine-tuning &gt; Generation.</p>
                        </div>
                    </ToolGuide>
                </div>

                <div className="mt-20 p-10 rounded-3xl bg-gradient-to-br from-green-600/10 via-slate-800 to-orange-600/10 border border-white/10 text-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <h2 className="text-3xl font-bold mb-4">Ready to Direct?</h2>
                    <p className="text-gray-400 mb-8 max-w-md mx-auto">
                        These tools are the future of filmmaking. Combine them with your image mastery to create world-class content.
                    </p>
                    <button
                        onClick={onBack}
                        className="px-10 py-4 bg-gradient-to-r from-orange-600 to-green-600 rounded-xl font-bold hover:scale-105 transition shadow-lg shadow-orange-500/20"
                    >
                        Back to Student Dashboard
                    </button>

                    <div className="mt-8 flex justify-center gap-6 text-gray-500 text-sm">
                        <span className="flex items-center gap-1"><ExternalLink className="w-4 h-4" /> Comprehensive Review</span>
                        <span className="flex items-center gap-1"><MousePointer2 className="w-4 h-4" /> Multi-Model Workflows</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
