"use client"

import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import Footer from '@/components/FooterComponent/Footer';

export default function ContactPage() {
  return (
    <>
     
     <div className="h-screen bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center">
        <div className="w-[600px] bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Send us a Message</h2>
            <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 hover:border-gray-400 text-gray-700"
                            placeholder="Your full name"
                        />
                    </div>
                
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 hover:border-gray-400 text-gray-700"
                            placeholder="Enter your email address"
                        />
                    </div>
                </div>
            
                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                    </label>
                    <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 hover:border-gray-400 text-gray-700"
                    placeholder="What's this about?"
                    />
                </div>
            
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                    </label>
                    <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-amber-300 hover:border-gray-400 resize-none text-gray-700"
                    placeholder="Tell us more about your inquiry..."
                    ></textarea>
                </div>
            
                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-amber-600 hover:to-amber-700 transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                >
                        <Send className="h-5 w-5" />
                        <span>Send Message</span>
                </button>
            </div>
        </div>
     </div>
     <Footer/>
    </>
  );
}