import React, { useState, useEffect } from 'react';
import Modal from '../ui/Modal';

export default function VideoGalleryModal({ isOpen, onClose }) {
    const [demos, setDemos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (isOpen) {
            const fetchDemos = async () => {
                try {
                    const res = await fetch('http://localhost:3000/api/demos');
                    const data = await res.json();
                    setDemos(data);
                    setLoading(false);
                } catch (error) {
                    console.error("Error fetching demos:", error);
                    setLoading(false);
                }
            };
            fetchDemos();
        }
    }, [isOpen]);

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="AI Generation Demos" maxWidth="max-w-4xl">
            {loading ? (
                <div className="py-20 text-center text-gray-400">Loading demos...</div>
            ) : (
                <div className="grid md:grid-cols-2 gap-4">
                    {demos.map((demo, idx) => (
                        <div key={idx} className="bg-slate-800 rounded-xl overflow-hidden group">
                            <div className="relative aspect-video bg-black">
                                <video
                                    controls
                                    className="w-full h-full object-cover"
                                    poster={demo.poster}
                                >
                                    <source src={demo.url} type="video/mp4" />
                                </video>
                            </div>
                            <div className="p-3">
                                <h4 className="font-medium text-white">{demo.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </Modal>
    );
}
