import React, { useState } from 'react';
import Modal from '../ui/Modal';
import { Mail, Lock, User, ArrowRight, Github } from 'lucide-react';

export default function AuthModal({ isOpen, onClose, initialView = 'signin', onLoginSuccess }) {
    const [view, setView] = useState(initialView);
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const endpoint = view === 'signin' ? '/api/login' : '/api/register';
        const body = view === 'signin'
            ? { email: formData.email, password: formData.password }
            : formData;

        try {
            const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';
            const response = await fetch(`${baseUrl}${endpoint}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });

            const data = await response.json();

            if (response.ok) {
                if (onLoginSuccess) {
                    onLoginSuccess(data.user);
                }
                onClose();
            } else {
                setError(data.error || 'Something went wrong');
            }
        } catch (err) {
            setError('Failed to connect to server');
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={view === 'signin' ? 'Welcome Back!' : 'Start Your Free Trial'}
        >
            <div className="flex p-1 mb-6 bg-slate-800 rounded-lg">
                <button
                    className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${view === 'signin' ? 'bg-slate-700 text-white shadow' : 'text-gray-400 hover:text-white'
                        }`}
                    onClick={() => { setView('signin'); setError(''); }}
                >
                    Sign In
                </button>
                <button
                    className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${view === 'signup' ? 'bg-gradient-to-r from-orange-600 to-green-600 text-white shadow' : 'text-gray-400 hover:text-white'
                        }`}
                    onClick={() => { setView('signup'); setError(''); }}
                >
                    Free Trial
                </button>
            </div>

            {error && (
                <div className="mb-4 p-3 bg-red-500/10 border border-red-500/50 rounded-lg text-red-500 text-sm text-center">
                    {error}
                </div>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
                {view === 'signup' && (
                    <div>
                        <label className="block text-sm text-gray-400 mb-1">Full Name</label>
                        <div className="relative">
                            <User className="absolute left-3 top-2.5 w-5 h-5 text-gray-500" />
                            <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Ex. Rahul Kumar"
                                className="w-full bg-slate-800 border border-gray-700 rounded-lg py-2.5 pl-10 pr-4 text-white focus:outline-none focus:border-orange-500 transition"
                            />
                        </div>
                    </div>
                )}

                <div>
                    <label className="block text-sm text-gray-400 mb-1">Email Address</label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-2.5 w-5 h-5 text-gray-500" />
                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            className="w-full bg-slate-800 border border-gray-700 rounded-lg py-2.5 pl-10 pr-4 text-white focus:outline-none focus:border-orange-500 transition"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm text-gray-400 mb-1">Password</label>
                    <div className="relative">
                        <Lock className="absolute left-3 top-2.5 w-5 h-5 text-gray-500" />
                        <input
                            type="password"
                            name="password"
                            required
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="••••••••"
                            className="w-full bg-slate-800 border border-gray-700 rounded-lg py-2.5 pl-10 pr-4 text-white focus:outline-none focus:border-orange-500 transition"
                        />
                    </div>
                </div>

                <button
                    disabled={loading}
                    className="w-full py-3 mt-2 bg-gradient-to-r from-orange-600 to-green-600 rounded-lg font-semibold hover:from-orange-700 hover:to-green-700 transition flex items-center justify-center gap-2 group disabled:opacity-50"
                >
                    {loading ? 'Processing...' : (view === 'signin' ? 'Sign In' : 'Start 7-Day Free Trial')}
                    {!loading && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />}
                </button>

                <div className="relative my-6 text-center">
                    <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-700"></div></div>
                    <span className="relative bg-slate-900 px-3 text-sm text-gray-500">Or continue with</span>
                </div>

                <button className="w-full py-2.5 bg-white text-slate-900 rounded-lg font-medium hover:bg-gray-100 transition flex items-center justify-center gap-2">
                    <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4" />
                    Google
                </button>
            </form>

            <p className="mt-4 text-center text-xs text-gray-500">
                By continuing, you agree to our Terms of Service and Privacy Policy.
            </p>
        </Modal>
    );
}
