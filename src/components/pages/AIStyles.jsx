import React, { useState } from 'react';
import { Camera, Zap, Palette, Video, Info, Copy, Check, ChevronRight, Wand2, Lightbulb, Box, Film, Maximize2 } from 'lucide-react';

const StyleCard = ({ title, description, example, category, image }) => {
    const [copied, setCopied] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(example);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div
            className="group bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 flex flex-col h-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Image Section */}
            <div className="relative aspect-video overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60"></div>

                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-purple-600/80 backdrop-blur-md text-white text-[10px] font-bold rounded-full border border-white/20 uppercase tracking-wider">
                        {category}
                    </span>
                </div>

                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20">
                        <Maximize2 className="w-6 h-6 text-white" />
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">{title}</h3>
                    <div className="p-1.5 bg-white/5 rounded-lg text-gray-500 group-hover:text-purple-400 transition-colors">
                        <Film className="w-4 h-4" />
                    </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2 italic">
                    {description}
                </p>

                <div className="mt-auto">
                    <div className="bg-slate-950/50 rounded-xl p-4 border border-white/5 group-hover:border-purple-500/30 transition-all duration-300">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] uppercase font-bold text-gray-500 tracking-widest">Master Prompt</span>
                            <button
                                onClick={handleCopy}
                                className="bg-white/5 hover:bg-white/10 p-1.5 rounded-lg transition-colors flex items-center gap-1.5 group/btn"
                                title="Copy Prompt"
                            >
                                {copied ? (
                                    <><Check className="w-3 h-3 text-green-400" /> <span className="text-[10px] text-green-400 font-bold">Copied</span></>
                                ) : (
                                    <><Copy className="w-3 h-3 text-gray-400 group-hover/btn:text-purple-400" /> <span className="text-[10px] text-gray-400 group-hover/btn:text-purple-400">Copy</span></>
                                )}
                            </button>
                        </div>
                        <p className="text-xs text-gray-300 line-clamp-2 font-mono leading-tight">
                            "{example}"
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// eslint-disable-next-line no-unused-vars
const SectionHeader = ({ title, icon: Icon, subtitle }) => (
    <div className="mb-12">
        <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-2xl text-purple-400 border border-purple-500/20 shadow-lg shadow-purple-500/10">
                <Icon className="w-7 h-7" />
            </div>
            <div>
                <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight uppercase">{title}</h2>
                <div className="flex items-center gap-2 mt-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-purple-500 animate-pulse"></div>
                    <p className="text-gray-400 text-sm font-medium tracking-wide">{subtitle}</p>
                </div>
            </div>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-purple-500/50 via-white/10 to-transparent"></div>
    </div>
);

const AIStyles = ({ onBack }) => {
    const sections = [
        {
            title: "Genres & Aesthetics",
            icon: Palette,
            subtitle: "Classical and modern visual storytelling frameworks",
            styles: [
                {
                    title: "Film Noir",
                    category: "Genre",
                    description: "High-contrast, deep shadows, moody and mysterious cinematic look.",
                    example: "A hardboiled detective standing in a rain-slicked neon alley, charcoal shadows, 1940s noir aesthetic.",
                    image: "https://img1.wsimg.com/isteam/ip/c54da5eb-6699-4c21-868a-f9e1eda4ffba/danbritain0234_generate_a_slassic_film_noir_sc.png/:/cr=t:5.39%25,l:0%25,w:100%25,h:89.22%25/rs=w:388,h:194,cg:true"
                },
                {
                    title: "Western",
                    category: "Genre",
                    description: "Vast landscapes, rugged textures, and earthy tones inspired by frontier cinema.",
                    example: "A lone cowboy silhouetted against a dusty canyon at sunset, grainy film texture, sepia grading.",
                    image: "https://img1.wsimg.com/isteam/ip/c54da5eb-6699-4c21-868a-f9e1eda4ffba/danbritain0234_generate_a_classic_western_film.png/:/cr=t:5.39%25,l:0%25,w:100%25,h:89.22%25/rs=w:388,h:194,cg:true"
                },
                {
                    title: "Science Fiction",
                    category: "Genre",
                    description: "Futuristic technology, chrome surfaces, and industrial futuristic designs.",
                    example: "A sprawling megacity with hovering vehicles and crystalline skyscrapers, anamorphic lens flares.",
                    image: "https://img1.wsimg.com/isteam/ip/c54da5eb-6699-4c21-868a-f9e1eda4ffba/danbritain0234_generate_a_typical_science_fict.png/:/cr=t:5.39%25,l:0%25,w:100%25,h:89.22%25/rs=w:388,h:194,cg:true"
                },
                {
                    title: "Cyberpunk",
                    category: "Aesthetic",
                    description: "High-tech/low-life, rain-drenched neon streets, and chrome accents.",
                    example: "Cybernetic protagonist under flickering neon signs in a rainy Tokyo street, electric blue and magenta lighting.",
                    image: "https://img1.wsimg.com/isteam/ip/c54da5eb-6699-4c21-868a-f9e1eda4ffba/danbritain0234_Generate_a_bustling_rain-soaked.png/:/cr=t:5.39%25,l:0%25,w:100%25,h:89.22%25/rs=w:388,h:194,cg:true"
                },
                {
                    title: "Steampunk",
                    category: "Aesthetic",
                    description: "Victorian designs meets steam-powered machinery and brass elements.",
                    example: "A grand brass-geared airship floating over a Victorian London skyline, sepia tones, intricate mechanical details.",
                    image: "https://img1.wsimg.com/isteam/ip/c54da5eb-6699-4c21-868a-f9e1eda4ffba/danbritain0234_Create_a_scene_set_in_a_Victori.png/:/cr=t:5.39%25,l:0%25,w:100%25,h:89.22%25/rs=w:388,h:194,cg:true"
                },
                {
                    title: "1980s Aesthetic",
                    category: "Aesthetic",
                    description: "Synth-wave colors, VHS textures, and retro-futuristic vibes.",
                    example: "A teenager on a bike at dusk with a giant synth-wave neon sun on the horizon, VHS glitch effect.",
                    image: "https://img1.wsimg.com/isteam/ip/c54da5eb-6699-4c21-868a-f9e1eda4ffba/danbritain0234_generate_a_typical_film_scene_f.png/:/cr=t:5.39%25,l:0%25,w:100%25,h:89.22%25/rs=w:388,h:194,cg:true"
                }
            ]
        },
        {
            title: "Director Styles",
            icon: Wand2,
            subtitle: "Signature visual palettes of legendary filmmakers",
            styles: [
                {
                    title: "Wes Anderson",
                    category: "Director",
                    description: "Perfect symmetry, pastel palettes, and a whimsical storybook quality.",
                    example: "A perfectly symmetrical hotel lobby with pastel pink walls and quirky uniformed staff, 35mm film.",
                    image: "https://img1.wsimg.com/isteam/ip/c54da5eb-6699-4c21-868a-f9e1eda4ffba/How-to-follow-wes-anderson-style.png/:/cr=t:5.56%25,l:0%25,w:100%25,h:88.89%25/rs=w:388,h:194,cg:true"
                },
                {
                    title: "Stanley Kubrick",
                    category: "Director",
                    description: "One-point perspective, clinical atmosphere, and symmetrical wide shots.",
                    example: "A bright white symmetrical hallway in a futuristic space station, extreme wide angle, clinical precision.",
                    image: "https://img1.wsimg.com/isteam/ip/c54da5eb-6699-4c21-868a-f9e1eda4ffba/190424124802-stanley-kubrick-design-museum11.jpg/:/cr=t:0%25,l:2.85%25,w:94.3%25,h:100%25/rs=w:388,h:194,cg:true"
                },
                {
                    title: "Quentin Tarantino",
                    category: "Director",
                    description: "Bold colors, extreme close-ups, and a gritty yet cool 70s-90s look.",
                    example: "A grainy 1970s diner standoff, low angle trunk shot, vibrant orange and yellow color palette.",
                    image: "https://img1.wsimg.com/isteam/ip/c54da5eb-6699-4c21-868a-f9e1eda4ffba/reservoir-dogs-trunk-shot.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:388,h:194,cg:true"
                }
            ]
        },
        {
            title: "Cinematography & Lighting",
            icon: Camera,
            subtitle: "Technical camera effects and lighting conditions",
            styles: [
                {
                    title: "Golden Hour",
                    category: "Lighting",
                    description: "Warm, soft, magical glow occurring just after sunrise or before sunset.",
                    example: "A field of wheat at sunset, golden soft light, volumetric sunrays, 8k resolution.",
                    image: "https://img1.wsimg.com/isteam/ip/c54da5eb-6699-4c21-868a-f9e1eda4ffba/danbritain0234_Create_a_shot_of_two_people_sit.png/:/cr=t:5.39%25,l:0%25,w:100%25,h:89.22%25/rs=w:388,h:194,cg:true"
                },
                {
                    title: "Deep Focus",
                    category: "Camera",
                    description: "Technique where everything from foreground to background is in sharp focus.",
                    example: "A grand library where the dust motes in the front and the books in the back are all razor sharp.",
                    image: "https://img1.wsimg.com/isteam/ip/c54da5eb-6699-4c21-868a-f9e1eda4ffba/danbritain0234_Generate_a_scene_set_inside_a_g.png/:/cr=t:5.39%25,l:0%25,w:100%25,h:89.22%25/rs=w:388,h:194,cg:true"
                },
                {
                    title: "Fisheye Shot",
                    category: "Camera",
                    description: "Ultra-wide, distorted perspective with curved edges for a dynamic feel.",
                    example: "A skatepark filmed from a ground-level fisheye lens, warped edges, high energy motion.",
                    image: "https://img1.wsimg.com/isteam/ip/c54da5eb-6699-4c21-868a-f9e1eda4ffba/danbritain0234_fish_eye_shot_scene_of_a_woman_.png/:/cr=t:5.39%25,l:0%25,w:100%25,h:89.22%25/rs=w:388,h:194,cg:true"
                }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-white py-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <header className="mb-24 text-center relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/10 blur-[150px] rounded-full -z-10"></div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 text-purple-400 text-xs font-bold mb-8 uppercase tracking-[0.2em]">
                        <Zap className="w-4 h-4 animate-pulse" /> Cinematic Intelligence 2025
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter">
                        <span className="bg-gradient-to-r from-purple-400 via-white to-blue-400 bg-clip-text text-transparent">AI STYLES</span>
                        <span className="text-white/20"> GUIDE</span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
                        The definitive visual library for AI creators. Master the aesthetics, lighting, and camera work of professional cinema.
                    </p>
                    <button
                        onClick={onBack}
                        className="group relative px-8 py-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 flex items-center gap-3 mx-auto overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <span className="relative z-10 text-sm font-bold uppercase tracking-widest">Back to Portal</span>
                        <ChevronRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </header>

                <div className="space-y-32">
                    {sections.map((section, idx) => (
                        <section key={idx}>
                            <SectionHeader
                                title={section.title}
                                icon={section.icon}
                                subtitle={section.subtitle}
                            />
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                                {section.styles.map((style, sIdx) => (
                                    <StyleCard key={sIdx} {...style} />
                                ))}
                            </div>
                        </section>
                    ))}
                </div>

                {/* Footer Tip Section */}
                <div className="mt-40 relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-[32px] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                    <div className="relative bg-slate-900/90 backdrop-blur-3xl p-12 md:p-20 rounded-[30px] border border-white/10 text-center overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <Box className="w-40 h-40 text-purple-500" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight italic uppercase">Unlock Pure Vision</h2>
                        <p className="text-gray-400 max-w-3xl mx-auto mb-12 text-lg md:text-xl font-medium leading-relaxed">
                            "The best AI art isn't made by the smartest prompt, but by the most cinematic eye."
                            Combine these styles with our **AI Video Tools** to create viral content that feels like high-budget Hollywood production.
                        </p>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                            <div className="flex items-center gap-3 px-6 py-3 bg-white/5 rounded-2xl border border-white/10 shadow-inner">
                                <div className="p-2 bg-yellow-500/20 rounded-lg">
                                    <Lightbulb className="w-5 h-5 text-yellow-400" />
                                </div>
                                <span className="text-sm font-bold tracking-wide">PRO TIP: Layer styles for unique aesthetics</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AIStyles;
