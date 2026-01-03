import React from 'react';
import Modal from '../ui/Modal';
import { CheckCircle, IndianRupee, ShieldCheck } from 'lucide-react';

export default function EnrollmentModal({ isOpen, onClose, plan, course }) {
    const itemName = course ? course.title : (plan ? `${plan.name} Plan` : 'Selected Plan');
    const price = course ? '4,999' : (plan ? plan.price : '0');
    const originalPrice = course ? '12,999' : (plan ? plan.originalPrice : '0');

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Complete Your Enrollment" maxWidth="max-w-xl">
            <div className="space-y-6">
                {/* Order Summary */}
                <div className="bg-slate-800 p-4 rounded-xl border border-gray-700">
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <p className="text-sm text-gray-400">You are enrolling in:</p>
                            <h4 className="font-semibold text-lg text-white">{itemName}</h4>
                        </div>
                        {plan && <span className="bg-orange-500/20 text-orange-400 text-xs px-2 py-1 rounded">Annual</span>}
                    </div>
                    <div className="flex items-end gap-2 mt-4">
                        <span className="text-3xl font-bold flex items-center text-green-400">
                            <IndianRupee className="w-6 h-6" />{price}
                        </span>
                        <span className="text-gray-500 line-through mb-1 text-sm">₹{originalPrice}</span>
                        <span className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded mb-1 ml-auto">
                            60% OFF Applied
                        </span>
                    </div>
                </div>

                {/* Benefits Recap */}
                <div className="space-y-2">
                    <h5 className="text-sm font-medium text-gray-300">What's included:</h5>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-400">
                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Lifetime Access</li>
                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Certificate of Completion</li>
                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Premium Community</li>
                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Mobile & TV Access</li>
                    </ul>
                </div>

                {/* Payment Methods */}
                <div>
                    <label className="block text-sm text-gray-400 mb-3">Select Payment Method</label>
                    <div className="grid grid-cols-3 gap-3">
                        <button className="flex flex-col items-center justify-center p-3 border border-orange-500 bg-orange-500/10 rounded-lg">
                            <span className="font-bold text-white">UPI</span>
                            <span className="text-[10px] text-gray-400">GPay/PhonePe</span>
                        </button>
                        <button className="flex flex-col items-center justify-center p-3 border border-gray-700 bg-slate-800 hover:bg-slate-700 rounded-lg">
                            <span className="font-bold text-white">Card</span>
                            <span className="text-[10px] text-gray-400">Credit/Debit</span>
                        </button>
                        <button className="flex flex-col items-center justify-center p-3 border border-gray-700 bg-slate-800 hover:bg-slate-700 rounded-lg">
                            <span className="font-bold text-white">NetBanking</span>
                            <span className="text-[10px] text-gray-400">All Banks</span>
                        </button>
                    </div>
                </div>

                {/* Secure Badge */}
                <div className="flex items-center justify-center gap-2 text-xs text-gray-500 bg-slate-900/50 py-2 rounded">
                    <ShieldCheck className="w-4 h-4 text-green-500" />
                    100% Secure Payment with 256-bit Encryption
                </div>

                <button className="w-full py-4 bg-gradient-to-r from-orange-600 to-green-600 rounded-lg font-bold text-lg hover:from-orange-700 hover:to-green-700 transition shadow-lg shadow-orange-900/20">
                    Complete Payment & Start Learning
                </button>
            </div>
        </Modal>
    );
}
