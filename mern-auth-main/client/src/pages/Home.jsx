import React from 'react';
import logo from '../img_logo.png'; // Import the image

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-600 relative">
      <div className="absolute inset-0 opacity-30 animate-blob"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 text-center">
        <div className="flex items-center justify-center mb-6">
          <h1 className="text-4xl font-bold text-black"></h1>
          <img src={logo} alt="Logo" className="ml-4 h-50" />
        </div>
        <h2 className="text-2xl font-semibold mb-4 text-indigo-100">Your companion to LinkedIn!</h2>
        <div className="bg-grey rounded-lg p-8 shadow-lg mb-8">
          <h3 className="text-xl font-bold mb-4 text-indigo-100">Why Choose CareerSync?</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-indigo-100 rounded-lg p-4 text-indigo-800">
              <strong>Targeted Networking:</strong> Connect with professionals who share your educational and professional interests.
            </div>
            <div className="bg-green-100 rounded-lg p-4 text-green-800">
              <strong>Industry Insights:</strong> Stay updated with industry trends, job opportunities, and career advice from experienced professionals.
            </div>
            <div className="bg-orange-100 rounded-lg p-4 text-orange-800">
              <strong>Career Growth:</strong> Access a network of mentors, peers, and industry leaders to help you advance in your career.
            </div>
            <div className="bg-pink-100 rounded-lg p-4 text-pink-800">
              <strong>Secure and Private:</strong> Your privacy is our priority. Connect and interact with professionals in a safe and secure environment.
            </div>
          </div>
        </div>
        <div className="bg-grey rounded-lg p-8 shadow-lg">
          <h3 className="text-xl font-bold mb-4 text-indigo-100">Testimonials</h3>
          <div className="flex justify-between">
            <blockquote className="bg-indigo-100 rounded-lg p-4 w-5/12 text-indigo-800">
              <p className="mb-2">
                "CareerSync has been instrumental in helping me find like-minded professionals in my industry. The degree-based filtering is a game-changer!"
              </p>
              <cite>- Saloni, Marketing Manager</cite>
            </blockquote>
            <blockquote className="bg-green-100 rounded-lg p-4 w-5/12 text-green-800">
              <p className="mb-2">
                "I've discovered new career opportunities and gained valuable insights into my industry through ProfessionalConnect's company affiliation feature."
              </p>
              <cite>- Raj, Software Developer</cite>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}