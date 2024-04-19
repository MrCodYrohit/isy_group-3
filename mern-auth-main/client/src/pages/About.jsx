import React from 'react';
import logo from '../img_logo.png'; // Import the image
export default function About() {
  return (
    <div className="relative overflow-hidden min-h-screen bg-gradient-to-br from-yellow-200 to-green-400">
      <div className="absolute inset-0 opacity-30 animate-blob"></div>
      <div className="px-4 py-12 max-w-4xl mx-auto relative z-10">
        <h1 className="text-4xl font-bold mb-8 text-black text-center">About Us</h1>
        

        <hr className="mb-8 border-green-300" />

        <div className="mb-8 bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-green-800">Who We Are</h2>
          <hr className="mb-4 border-green-300" />
          <p className="text-gray-700">
            <strong className="text-green-800">CareerSync</strong> is a leading networking platform designed to bridge the gap between professionals based on educational qualifications and company affiliations. Our mission is to empower individuals to build meaningful connections, explore career opportunities, and grow professionally in their respective fields.
          </p>
        </div>

        <div className="mb-8 bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-green-800">Our Vision</h2>
          <hr className="mb-4 border-green-300" />
          <p className="text-gray-700">
            To create a dynamic and inclusive community where professionals can connect, collaborate, and thrive. We aim to be the go-to platform for targeted networking, offering personalized networking opportunities tailored to each user's educational background and career aspirations.
          </p>
        </div>

        <div className="mb-8 bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-green-800">What Sets Us Apart</h2>
          <hr className="mb-4 border-green-300" />
          <ul className="list-disc list-inside text-gray-700">
            <li className="mb-2">
              <strong className="text-green-800">Targeted Networking:</strong> Unlike generic networking platforms, CareerSync offers degree-based filtering, allowing users to connect with peers who share similar academic backgrounds. This unique feature enables more meaningful and relevant connections.
            </li>
            <li className="mb-2">
              <strong className="text-green-800">Company Affiliation:</strong> Our platform also facilitates connections based on current or past employment at specific companies. This helps users gain insights into desired organizations and industries, opening doors to new career opportunities and collaborations.
            </li>
            <li className="mb-2">
              <strong className="text-green-800">User-Centric Experience:</strong> We prioritize user privacy and security, ensuring a safe and seamless networking experience. Our intuitive interface and personalized recommendations make it easy for users to find and connect with professionals who align with their interests and goals.
            </li>
          </ul>
        </div>

        <div className="mb-8 bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-green-800">Join Our Community</h2>
          <hr className="mb-4 border-green-300" />
          <p className="text-gray-700">
            Whether you're a recent graduate looking to connect with alumni or an experienced professional seeking to expand your network within your industry, CareerSync has something for everyone. Join our growing community today and take the first step towards enhancing your professional network and career growth.
          </p>
        </div>

        <div className="mb-8 bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-green-800">Contact Us</h2>
          <hr className="mb-4 border-indigo-300" />
          <p className="text-gray-700">
            <strong className="text-green-800">Email:</strong> contact@CareerSync.com <br />
            <strong className="text-green-800">Phone:</strong> +91 (123) 456-7890 <br />
            <strong className="text-green-800">Address:</strong> IIIT-Delhi, New Delhi
          </p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-green-800">Follow Us</h2>
          <hr className="mb-4 border-green-300" />
          <p className="text-gray-700">
            Stay connected with us on LinkedIn, Twitter, and Facebook for the latest updates, networking tips, and upcoming events.
          </p>
        </div>
      </div>
    </div>
  );
}