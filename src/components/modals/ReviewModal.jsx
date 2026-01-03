import React, { useState } from 'react';
import { Star, X } from 'lucide-react';

export default function ReviewModal({ isOpen, onClose, onReviewSubmit, user }) {
    const [rating, setRating] = useState(5);
    const [comment, setComment] = useState('');
    const [name, setName] = useState(user ? user.name : '');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsSubmitting(true);

        try {
            const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';
            const response = await fetch(`${baseUrl}/api/reviews`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user_name: name,
                    rating,
                    comment
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to submit review');
            }

            const newReview = await response.json();
            onReviewSubmit(newReview);
            onClose();
            // Reset form
            setComment('');
            if (!user) setName('');
            setRating(5);

        } catch (err) {
            setError(err.message || 'Something went wrong');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-slate-900 border border-orange-500/30 rounded-2xl w-full max-w-md p-6 relative shadow-2xl animate-fadeIn">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
                >
                    <X className="w-6 h-6" />
                </button>

                <h2 className="text-2xl font-bold mb-6 text-center">
                    <span className="bg-gradient-to-r from-orange-400 to-green-400 bg-clip-text text-transparent">Rate Your Experience</span>
                </h2>

                {error && (
                    <div className="bg-red-500/20 text-red-200 p-3 rounded-lg mb-4 text-sm text-center">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col items-center gap-2 mb-4">
                        <label className="text-gray-300 font-medium">Your Rating</label>
                        <div className="flex gap-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    type="button"
                                    onClick={() => setRating(star)}
                                    className="focus:outline-none transition transform hover:scale-110"
                                >
                                    <Star
                                        className={`w-8 h-8 ${star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'}`}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {!user && (
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Your Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-orange-500 transition"
                                placeholder="Enter your name"
                            />
                        </div>
                    )}

                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Review</label>
                        <textarea
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            required
                            rows="4"
                            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-orange-500 transition"
                            placeholder="Share your learning experience..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 bg-gradient-to-r from-orange-600 to-green-600 rounded-lg font-bold hover:from-orange-700 hover:to-green-700 transition transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit Review'}
                    </button>
                </form>
            </div>
        </div>
    );
}
