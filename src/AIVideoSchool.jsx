import React, { useState, useEffect } from 'react';
import { Play, CheckCircle, Star, Menu, X, ChevronRight, Award, Users, TrendingUp, BookOpen, Globe, IndianRupee } from 'lucide-react';
import AuthModal from './components/modals/AuthModal';
import EnrollmentModal from './components/modals/EnrollmentModal';
import VideoGalleryModal from './components/modals/VideoGalleryModal';
import ImageGeneration from './components/pages/ImageGeneration';
import VideoTools from './components/pages/VideoTools';
import AIPrompting from './components/pages/AIPrompting';
import AIStyles from './components/pages/AIStyles';
import AIVideoCreationCourse from './components/courses/AIVideoCreationCourse';
import VideoEditingCourse from './components/courses/VideoEditingCourse';
import ContentMonetizationCourse from './components/courses/ContentMonetizationCourse';

export default function AIVideoSchool() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [currentView, setCurrentView] = useState('landing'); // 'landing', 'image-gen', 'video-gen', 'prompting', 'styles', 'course-1', 'course-2', 'course-3'

    // Modal States
    const [authModal, setAuthModal] = useState({ isOpen: false, view: 'signin' });
    const [enrollModal, setEnrollModal] = useState({ isOpen: false, plan: null, course: null });
    const [showVideoGallery, setShowVideoGallery] = useState(false);
    const [policyModal, setPolicyModal] = useState({ show: false, title: '', content: '' });

    // Data States
    const [courses, setCourses] = useState([]);
    const [features, setFeatures] = useState([]);
    const [testimonials, setTestimonials] = useState([]);
    const [pricingPlans, setPricingPlans] = useState([]);
    const [stats, setStats] = useState([]);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const openAuth = (view = 'signin') => setAuthModal({ isOpen: true, view });
    const closeAuth = () => setAuthModal({ ...authModal, isOpen: false });

    const openEnroll = (item, type = 'plan') => {
        setEnrollModal({
            isOpen: true,
            plan: type === 'plan' ? item : null,
            course: type === 'course' ? item : null
        });
    };
    const closeEnroll = () => setEnrollModal({ isOpen: false, plan: null, course: null });

    const handleMobileLinkClick = () => setMobileMenuOpen(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';
                const apiBase = `${baseUrl}/api`;
                const [coursesRes, featuresRes, testimonialsRes, statsRes, plansRes] = await Promise.all([
                    fetch(`${apiBase}/courses`),
                    fetch(`${apiBase}/features`),
                    fetch(`${apiBase}/testimonials`),
                    fetch(`${apiBase}/stats`),
                    fetch(`${apiBase}/plans`)
                ]);

                const [coursesData, featuresData, testimonialsData, statsData, plansData] = await Promise.all([
                    coursesRes.json(),
                    featuresRes.json(),
                    testimonialsRes.json(),
                    statsRes.json(),
                    plansRes.json()
                ]);

                setCourses(coursesData);
                setFeatures(featuresData);
                setTestimonials(testimonialsData);
                setStats(statsData);
                setPricingPlans(plansData);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };

        // Check for existing session
        const savedUser = localStorage.getItem('ai_school_user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }

        fetchData();
    }, []);

    const handleLoginSuccess = (userData) => {
        setUser(userData);
        localStorage.setItem('ai_school_user', JSON.stringify(userData));
    };

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem('ai_school_user');
    };

    // Icon mapping for features
    const getFeatureIcon = (idx) => {
        const icons = [<Play className="w-6 h-6" />, <Award className="w-6 h-6" />, <Users className="w-6 h-6" />, <TrendingUp className="w-6 h-6" />];
        return icons[idx % icons.length];
    };

    const scrollToSection = (id) => {
        setCurrentView('landing');
        setTimeout(() => {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    const openPolicy = (type) => {
        const policies = {
            privacy: {
                title: 'Privacy Policy',
                content: 'We value your privacy. Your data is encrypted and never shared with third parties without consent. Our AI training data is sourced ethically...'
            },
            terms: {
                title: 'Terms of Service',
                content: 'By using AI Skills School, you agree to our terms of use. Content generated must follow our safety guidelines. Commercial rights depend on your plan...'
            },
            refund: {
                title: 'Refund Policy',
                content: 'We offer a 7-day money-back guarantee for our courses if you have consumed less than 20% of the content and are not satisfied.'
            }
        };
        setPolicyModal({ show: true, ...policies[type] });
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-900 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-orange-500"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 text-white font-sans">
            {/* Modals */}
            <AuthModal
                isOpen={authModal.isOpen}
                onClose={closeAuth}
                initialView={authModal.view}
                onLoginSuccess={handleLoginSuccess}
            />

            <EnrollmentModal
                isOpen={enrollModal.isOpen}
                onClose={closeEnroll}
                plan={enrollModal.plan}
                course={enrollModal.course}
            />

            <VideoGalleryModal
                isOpen={showVideoGallery}
                onClose={() => setShowVideoGallery(false)}
            />

            {/* Navigation */}
            <nav className="sticky top-0 w-full bg-slate-900/95 backdrop-blur-lg z-40 border-b border-purple-500/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center space-x-2">
                            <div className="bg-gradient-to-r from-orange-500 via-white to-green-500 p-2 rounded-lg">
                                <Play className="w-6 h-6 text-blue-900" />
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-orange-400 via-white to-green-400 bg-clip-text text-transparent">
                                AI Skills School India
                            </span>
                        </div>

                        <div className="hidden md:flex space-x-8">
                            <button
                                onClick={() => setCurrentView('landing')}
                                className={`${currentView === 'landing' ? 'text-orange-400' : 'text-white'} hover:text-orange-400 transition`}
                            >
                                Home
                            </button>
                            {user && (
                                <>
                                    <button
                                        onClick={() => setCurrentView('image-gen')}
                                        className={`${currentView === 'image-gen' ? 'text-orange-400' : 'text-white'} hover:text-orange-400 transition font-medium`}
                                    >
                                        AI Image Tools
                                    </button>
                                    <button
                                        onClick={() => setCurrentView('video-gen')}
                                        className={`${currentView === 'video-gen' ? 'text-green-400' : 'text-white'} hover:text-green-400 transition font-medium`}
                                    >
                                        AI Video Tools
                                    </button>
                                    <button
                                        onClick={() => setCurrentView('prompting')}
                                        className={`${currentView === 'prompting' ? 'text-blue-400' : 'text-white'} hover:text-blue-400 transition font-medium`}
                                    >
                                        AI Prompting
                                    </button>
                                    <button
                                        onClick={() => setCurrentView('styles')}
                                        className={`${currentView === 'styles' ? 'text-purple-400' : 'text-white'} hover:text-purple-400 transition font-medium`}
                                    >
                                        AI Styles
                                    </button>
                                </>
                            )}
                            {!user && (
                                <>
                                    <a href="#courses" className="hover:text-orange-400 transition" onClick={(e) => { e.preventDefault(); setCurrentView('landing'); setTimeout(() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>Courses</a>
                                    <a href="#pricing" className="hover:text-orange-400 transition" onClick={(e) => { e.preventDefault(); setCurrentView('landing'); setTimeout(() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>Pricing</a>
                                    <a href="#testimonials" className="hover:text-orange-400 transition" onClick={(e) => { e.preventDefault(); setCurrentView('landing'); setTimeout(() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>Reviews</a>
                                </>
                            )}
                        </div>

                        <div className="hidden md:flex space-x-4 items-center">
                            <div className="flex items-center gap-1 text-sm text-gray-400">
                                <Globe className="w-4 h-4" />
                                <span>Hindi/English</span>
                            </div>
                            {user ? (
                                <div className="flex items-center gap-4">
                                    <span className="text-orange-400 font-medium">नमस्ते, {user.name}</span>
                                    <button
                                        onClick={() => { handleLogout(); setCurrentView('landing'); }}
                                        className="px-4 py-2 border border-white/20 rounded-lg hover:bg-white/10 transition"
                                    >
                                        Logout
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <button
                                        onClick={() => openAuth('signin')}
                                        className="px-4 py-2 text-orange-400 hover:text-orange-300 transition"
                                    >
                                        Sign In
                                    </button>
                                    <button
                                        onClick={() => openAuth('signup')}
                                        className="px-6 py-2 bg-gradient-to-r from-orange-600 to-green-600 rounded-lg hover:from-orange-700 hover:to-green-700 transition"
                                    >
                                        Free Trial शुरू करें
                                    </button>
                                </>
                            )}
                        </div>

                        <button
                            className="md:hidden"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {mobileMenuOpen && (
                    <div className="md:hidden bg-slate-800 border-t border-purple-500/20">
                        <div className="px-4 py-4 space-y-3">
                            <button onClick={() => { setCurrentView('landing'); handleMobileLinkClick(); }} className="block w-full text-left hover:text-orange-400">Home</button>
                            {user && (
                                <>
                                    <button onClick={() => { setCurrentView('image-gen'); handleMobileLinkClick(); }} className="block w-full text-left font-bold text-orange-400">AI Image Tools</button>
                                    <button onClick={() => { setCurrentView('video-gen'); handleMobileLinkClick(); }} className="block w-full text-left font-bold text-green-400">AI Video Tools</button>
                                    <button onClick={() => { setCurrentView('prompting'); handleMobileLinkClick(); }} className="block w-full text-left font-bold text-blue-400">AI Prompting</button>
                                    <button onClick={() => { setCurrentView('styles'); handleMobileLinkClick(); }} className="block w-full text-left font-bold text-purple-400">AI Styles</button>
                                </>
                            )}
                            {!user && (
                                <>
                                    <a href="#courses" onClick={(e) => { e.preventDefault(); setCurrentView('landing'); handleMobileLinkClick(); setTimeout(() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="block hover:text-orange-400">Courses</a>
                                    <a href="#pricing" onClick={(e) => { e.preventDefault(); setCurrentView('landing'); handleMobileLinkClick(); setTimeout(() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="block hover:text-orange-400">Pricing</a>
                                    <a href="#testimonials" onClick={(e) => { e.preventDefault(); setCurrentView('landing'); handleMobileLinkClick(); setTimeout(() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="block hover:text-orange-400">Reviews</a>
                                </>
                            )}
                            {!user && (
                                <button
                                    onClick={() => { handleMobileLinkClick(); openAuth('signup'); }}
                                    className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-orange-600 to-green-600 rounded-lg"
                                >
                                    Free Trial शुरू करें
                                </button>
                            )}
                        </div>
                    </div>
                )}
            </nav>

            {currentView === 'image-gen' && <ImageGeneration onBack={() => setCurrentView('landing')} />}
            {currentView === 'video-gen' && <VideoTools onBack={() => setCurrentView('landing')} />}
            {currentView === 'prompting' && <AIPrompting onBack={() => setCurrentView('landing')} />}
            {currentView === 'styles' && <AIStyles onBack={() => setCurrentView('landing')} />}
            {currentView === 'course-1' && <AIVideoCreationCourse onBack={() => setCurrentView('landing')} />}
            {currentView === 'course-2' && <VideoEditingCourse onBack={() => setCurrentView('landing')} />}
            {currentView === 'course-3' && <ContentMonetizationCourse onBack={() => setCurrentView('landing')} />}

            {currentView === 'landing' && (
                <>
                    {/* Hero Section */}
                    <section className="pt-32 pb-20 px-4">
                        <div className="max-w-7xl mx-auto">
                            <div className="text-center mb-12">
                                <div className="inline-block mb-4 px-4 py-2 bg-orange-500/20 rounded-full border border-orange-500/30">
                                    <span className="text-sm">🇮🇳 भारत में 50,000+ students ने join किया है</span>
                                </div>

                                <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-white to-green-400 bg-clip-text text-transparent">
                                    AI Video Creation सीखें
                                    <br />घर बैठे, अपनी भाषा में
                                </h1>

                                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                                    YouTube, Instagram & Reels के लिए professional videos बनाएं AI की मदद से।
                                    Hindi & English में complete training। ₹50,000 - ₹2 Lakh महीना तक कमाने का मौका!
                                </p>
                            </div>

                            {/* Demo Video Section */}
                            <div className="max-w-5xl mx-auto mb-12 cursor-pointer group" onClick={() => setShowVideoGallery(true)}>
                                <div className="relative rounded-2xl overflow-hidden border-2 border-orange-500/30 shadow-2xl group-hover:border-orange-500/60 transition duration-300 aspect-video">
                                    <iframe
                                        className="w-full h-full pointer-events-none"
                                        src="https://www.youtube.com/embed/tKv1RqoSoJA?autoplay=1&mute=1&loop=1&playlist=tKv1RqoSoJA&controls=0&showinfo=0&rel=0&modestbranding=1"
                                        title="Hero Video"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent pointer-events-none"></div>
                                    <div className="absolute bottom-0 inset-x-0 h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black/40">
                                        <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/50 transform scale-100 group-hover:scale-110 transition">
                                            <Play className="w-12 h-12 text-white fill-white" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="bg-red-600 text-white text-xs px-3 py-1 rounded-full font-semibold animate-pulse">
                                                🔴 LIVE Demo
                                            </div>
                                            <div className="bg-white/20 backdrop-blur text-white text-xs px-3 py-1 rounded-full">
                                                AI Generated in 60 seconds
                                            </div>
                                        </div>
                                        <p className="text-white text-sm md:text-base font-medium">
                                            ✨ See how AI creates stunning videos from simple text prompts
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                                <button
                                    onClick={() => openAuth('signup')}
                                    className="px-8 py-4 bg-gradient-to-r from-orange-600 to-green-600 rounded-lg text-lg font-semibold hover:from-orange-700 hover:to-green-700 transition transform hover:scale-105"
                                >
                                    7 दिन Free में सीखें <ChevronRight className="inline w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => setShowVideoGallery(true)}
                                    className="px-8 py-4 bg-white/10 backdrop-blur rounded-lg text-lg font-semibold hover:bg-white/20 transition border border-white/20"
                                >
                                    More Demos देखें
                                </button>
                            </div>

                            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-400" />
                                    <span>कोई credit card नहीं चाहिए</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-400" />
                                    <span>7 दिन का free trial</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-400" />
                                    <span>कभी भी cancel करें</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-400" />
                                    <span>UPI/Paytm/Cards</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Stats Section */}
                    <section className="py-12 px-4 bg-gradient-to-r from-orange-900/30 to-green-900/30">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                {stats.map((stat, idx) => (
                                    <div key={idx} className="text-center">
                                        <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-green-400 bg-clip-text text-transparent mb-2">
                                            {stat.number}
                                        </div>
                                        <div className="text-gray-400">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Features Grid */}
                    <section id="features" className="py-20 px-4 bg-slate-800/50">
                        <div className="max-w-7xl mx-auto">
                            <h2 className="text-4xl font-bold text-center mb-4">क्यों चुनें AI Skills School India</h2>
                            <p className="text-center text-gray-400 mb-12">भारतीयों के लिए, भारतीयों द्वारा बनाया गया</p>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {features.map((feature, idx) => (
                                    <div key={idx} className="bg-gradient-to-br from-orange-900/50 to-green-900/50 p-6 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition hover:-translate-y-1">
                                        <div className="bg-orange-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                            {getFeatureIcon(idx)}
                                        </div>
                                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                        <p className="text-gray-400">{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Courses Section */}
                    <section id="courses" className="py-20 px-4">
                        <div className="max-w-7xl mx-auto">
                            <h2 className="text-4xl font-bold text-center mb-4">Popular Courses</h2>
                            <p className="text-center text-gray-400 mb-12">Hindi & English में complete video training</p>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {courses.map((course, idx) => (
                                    <div key={idx} className="bg-slate-800 rounded-xl overflow-hidden border border-orange-500/20 hover:border-orange-500/40 transition group">
                                        <div className="relative h-48 overflow-hidden">
                                            <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
                                            <div className="absolute top-4 right-4 bg-orange-600 px-3 py-1 rounded-full text-sm">
                                                {course.level}
                                            </div>
                                            <div className="absolute top-4 left-4 bg-green-600 px-3 py-1 rounded-full text-sm">
                                                Hindi/English
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                                            <p className="text-gray-400 mb-4">{course.description}</p>
                                            <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                                                <span className="flex items-center gap-1">
                                                    <BookOpen className="w-4 h-4" /> {course.lessons} lessons
                                                </span>
                                                <span>{course.duration}</span>
                                            </div>
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={() => setCurrentView(`course-${idx + 1}`)}
                                                    className="flex-1 py-2 bg-gradient-to-r from-orange-600 to-green-600 rounded-lg hover:from-orange-700 hover:to-green-700 transition font-semibold"
                                                >
                                                    View Course
                                                </button>
                                                <button
                                                    onClick={() => openEnroll(course, 'course')}
                                                    className="flex-1 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition font-semibold border border-white/20"
                                                >
                                                    Enroll Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Testimonials */}
                    <section id="testimonials" className="py-20 px-4 bg-slate-800/50">
                        <div className="max-w-7xl mx-auto">
                            <h2 className="text-4xl font-bold text-center mb-4">हमारे Students क्या कहते हैं</h2>
                            <p className="text-center text-gray-400 mb-12">भारत भर से सफलता की कहानियां</p>
                            <div className="grid md:grid-cols-3 gap-8">
                                {testimonials.map((testimonial, idx) => (
                                    <div key={idx} className="bg-gradient-to-br from-orange-900/30 to-green-900/30 p-6 rounded-xl border border-orange-500/20">
                                        <div className="flex gap-1 mb-4">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                            ))}
                                        </div>
                                        <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                                        <div className="flex items-center gap-3">
                                            <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                                            <div>
                                                <div className="font-semibold">{testimonial.name}</div>
                                                <div className="text-sm text-gray-400">{testimonial.role}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Pricing */}
                    <section id="pricing" className="py-20 px-4">
                        <div className="max-w-7xl mx-auto">
                            <h2 className="text-4xl font-bold text-center mb-4">अपना Plan चुनें</h2>
                            <p className="text-center text-gray-400 mb-12">भारतीय छात्रों के लिए विशेष कीमतें</p>

                            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                                {pricingPlans.map((plan, idx) => (
                                    <div key={idx} className={`rounded-xl p-8 border-2 ${plan.popular ? 'border-orange-500 bg-gradient-to-br from-orange-900/50 to-green-900/50 scale-105' : 'border-orange-500/20 bg-slate-800'}`}>
                                        {plan.popular && (
                                            <div className="bg-gradient-to-r from-orange-500 to-green-500 text-center py-1 px-4 rounded-full text-sm font-semibold mb-4 inline-block">
                                                सबसे Popular
                                            </div>
                                        )}
                                        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                        <div className="mb-2">
                                            <span className="text-gray-400 line-through text-lg">₹{plan.originalPrice}</span>
                                        </div>
                                        <div className="mb-6">
                                            <span className="text-5xl font-bold flex items-start">
                                                <IndianRupee className="w-8 h-8 mt-2" />{plan.price}
                                            </span>
                                            <span className="text-gray-400">/{plan.period}</span>
                                        </div>
                                        <ul className="space-y-3 mb-8">
                                            {plan.features?.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                                    <span className="text-gray-300 text-sm">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <button
                                            onClick={() => openEnroll(plan, 'plan')}
                                            className={`w-full py-3 rounded-lg font-semibold transition ${plan.popular ? 'bg-gradient-to-r from-orange-600 to-green-600 hover:from-orange-700 hover:to-green-700' : 'bg-white/10 hover:bg-white/20'}`}
                                        >
                                            अभी शुरू करें
                                        </button>
                                        <p className="text-center text-xs text-gray-500 mt-3">UPI • Paytm • Cards • Net Banking</p>
                                    </div>
                                ))}
                            </div>

                            <div className="text-center mt-8 text-sm text-gray-400">
                                <p>💳 सभी major payment methods accepted | 🔒 100% Secure payments</p>
                                <p className="mt-2">GST invoice available for businesses</p>
                            </div>
                        </div>
                    </section>

                    {/* About Section */}
                    <section id="about" className="py-20 px-4 bg-slate-800">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Empowering the Next Generation of <span className="text-orange-500">Indian Creators</span></h2>
                                    <p className="text-gray-300 mb-4 text-lg">
                                        AI Skills School India is more than just an educational platform. We are a community of innovators, storytellers, and tech enthusiasts dedicated to mastering AI tools for the Indian market.
                                    </p>
                                    <p className="text-gray-300 mb-6">
                                        With offices in Mumbai, Delhi, and Bangalore, we've helped over 10,000+ creators transition from traditional editing to AI-powered workflows. Our mission is to make high-end video production accessible to everyone.
                                    </p>
                                    <div className="flex space-x-4">
                                        <div className="bg-slate-700 p-4 rounded-xl border border-slate-600">
                                            <div className="text-orange-500 font-bold text-2xl mb-1">10K+</div>
                                            <div className="text-sm text-gray-400">Students Joined</div>
                                        </div>
                                        <div className="bg-slate-700 p-4 rounded-xl border border-slate-600">
                                            <div className="text-orange-500 font-bold text-2xl mb-1">50+</div>
                                            <div className="text-sm text-gray-400">AI Modules</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative">
                                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80" alt="About AI Skills School" className="rounded-2xl shadow-2xl" />
                                    <div className="absolute -bottom-6 -right-6 bg-orange-600 p-6 rounded-2xl hidden md:block">
                                        <p className="font-bold text-xl italic">"Transforming Indian Digital Space"</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Contact Section */}
                    <section id="contact" className="py-20 px-4 bg-slate-900">
                        <div className="max-w-7xl mx-auto text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In <span className="text-orange-500">Touch</span></h2>
                            <p className="text-gray-400">Have questions? We're here to help you on your AI journey.</p>
                        </div>
                        <div className="max-w-3xl mx-auto bg-slate-800 p-8 rounded-2xl border border-orange-500/20">
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                                        <input type="text" className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition" placeholder="Rahul Sharma" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                                        <input type="email" className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition" placeholder="rahul@example.com" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                                    <select className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition">
                                        <option>Course Inquiry</option>
                                        <option>Business Partnership</option>
                                        <option>Technical Support</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                    <textarea rows="4" className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition" placeholder="How can we help you?"></textarea>
                                </div>
                                <button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-lg shadow-lg shadow-orange-900/20 transition transform hover:-translate-y-1">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="py-20 px-4 bg-gradient-to-r from-orange-900/50 to-green-900/50">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                अपने Video Creation Career की शुरुआत करें
                            </h2>
                            <p className="text-xl text-gray-300 mb-8">
                                50,000+ भारतीय students के साथ AI video mastery की journey शुरू करें
                            </p>
                            <button
                                onClick={() => openAuth('signup')}
                                className="px-10 py-4 bg-white text-orange-900 rounded-lg text-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105"
                            >
                                7 दिन का Free Trial आज ही शुरू करें
                            </button>
                            <p className="text-sm text-gray-400 mt-4">
                                कोई credit card नहीं • 7 दिन free trial • कभी भी cancel करें • UPI/Paytm accepted
                            </p>
                        </div>
                    </section>

                </>
            )}

            {/* Footer */}
            <footer className="bg-slate-900 py-12 px-4 border-t border-orange-500/20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="bg-gradient-to-r from-orange-500 via-white to-green-500 p-2 rounded-lg">
                                    <Play className="w-5 h-5 text-blue-900" />
                                </div>
                                <span className="font-bold">AI Skills School</span>
                            </div>
                            <p className="text-gray-400 text-sm">भारतीय creators को AI video technology से सशक्त बनाना</p>
                            <div className="mt-4 text-sm text-gray-400">
                                <p>📍 Offices: Mumbai, Delhi, Bangalore</p>
                                <p>📞 Support: 1800-123-4567</p>
                                <p>✉️ support@aivideoschool.in</p>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Courses</h4>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li><button onClick={() => scrollToSection('courses')} className="hover:text-orange-400 transition">AI Video Generation</button></li>
                                <li><button onClick={() => scrollToSection('courses')} className="hover:text-orange-400 transition">Advanced Editing</button></li>
                                <li><button onClick={() => scrollToSection('courses')} className="hover:text-orange-400 transition">Content Strategy</button></li>
                                <li><button onClick={() => scrollToSection('courses')} className="hover:text-orange-400 transition">Monetization Course</button></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Company</h4>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li><button onClick={() => scrollToSection('about')} className="hover:text-orange-400 transition">About Us</button></li>
                                <li><button onClick={() => scrollToSection('features')} className="hover:text-orange-400 transition">Careers</button></li>
                                <li><button onClick={() => scrollToSection('contact')} className="hover:text-orange-400 transition">Contact</button></li>
                                <li><button onClick={() => scrollToSection('pricing')} className="hover:text-orange-400 transition">Become Instructor</button></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Support</h4>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li><button onClick={() => scrollToSection('contact')} className="hover:text-orange-400 transition">Help Center</button></li>
                                <li><button onClick={() => openPolicy('privacy')} className="hover:text-orange-400 transition">Privacy Policy</button></li>
                                <li><button onClick={() => openPolicy('terms')} className="hover:text-orange-400 transition">Terms of Service</button></li>
                                <li><button onClick={() => openPolicy('refund')} className="hover:text-orange-400 transition">Refund Policy</button></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-orange-500/20 pt-8 text-center">
                        <p className="text-gray-400 text-sm">© 2026 AI Skills School India. All rights reserved.</p>
                        <p className="text-gray-500 text-xs mt-2">🇮🇳 Proudly Made in India | भारत में बना</p>
                    </div>
                </div>
            </footer>

            {/* Policy Modal */}
            {policyModal.show && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
                    <div className="bg-slate-900 border border-orange-500/30 rounded-2xl max-w-2xl w-full p-8 relative">
                        <button onClick={() => setPolicyModal({ ...policyModal, show: false })} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
                            <X className="w-6 h-6" />
                        </button>
                        <h3 className="text-2xl font-bold mb-4 text-orange-500">{policyModal.title}</h3>
                        <div className="text-gray-300 leading-relaxed mb-6 whitespace-pre-wrap">
                            {policyModal.content}
                        </div>
                        <button onClick={() => setPolicyModal({ ...policyModal, show: false })} className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 rounded-lg border border-slate-600 transition">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
