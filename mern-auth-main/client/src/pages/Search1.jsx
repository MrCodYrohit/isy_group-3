import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const linkedInProfiles = [
  ["Koneni Bhavya", "B.Tech", "Google", "https://www.linkedin.com/in/koneni-bhavya-b459a178/","a"],
  ["Pratichi Misra", "B.Sc", "Google", "https://www.linkedin.com/in/pratichi-misra-44914930/","a"],
  ["Birendra Singh Bisht", "B.Tech", "Microsoft", "https://linkedin.com/in/birendrasinghbisht","a"],
  ["Roma Datta Chobey", "B.Tech", "Google", "https://linkedin.com/in/roma-datta-chobey-8474bb31","a"],
  ["Akshay Patil", "B.Tech", "Microsoft", "https://linkedin.com/in/akshay-patil-techsme007","a"],
  ["Surbhi Garg", "B.Tech", "Google", "https://linkedin.com/in/surbhi-garg-9b5375134","a"],
  ["Sanchit Singhal", "B.Tech", "Google", "https://linkedin.com/in/sanchit-singhal-a7324558","a"],
  ["Navneet Singh Gaur", "B.Tech", "Microsoft", "https://linkedin.com/in/navneetsinghgaur","a"],
  ["Nikhil Jindal", "B.Tech", "Google", "https://linkedin.com/in/nikhil-jindal-b1212812b","a"],
  ["Vinay Joglekar", "B.Sc", "Google", "https://linkedin.com/in/vinayjoglekar/","a"],
  ["Ankit Saraf", "B.Tech", "Microsoft", "https://www.linkedin.com/in/thisissaraf/","a"],
  ["Bhuban Seth", "M.Tech", "Google", "https://linkedin.com/in/bhuban-seth-29041517","a"],
  ["Nitin Aggarwal", "B.Tech", "Google", "https://linkedin.com/in/niti94","a"],
  ["Shivani Maheshwari", "B.Tech", "Google", "https://linkedin.com/in/shivanimaheshwari1","a"],
  ["Akshay Patil", "B.Tech", "Microsoft", "https://linkedin.com/in/akshay-patil-techsme007","a"],
  ["Ajay Sharma", "B.Tech", "Microsoft", "https://linkedin.com/in/aj2000","a"],
  ["Daksha Ladia", "B.Tech", "Microsoft", "https://linkedin.com/in/dakshaladia","a"],
  ["Souvik Nandi", "B.Tech", "Microsoft", "https://linkedin.com/in/souvik-nandi","a"],
  ["Ashish Panery", "B.Tech", "Microsoft", "https://linkedin.com/in/ashishpanery","a"],
  ["Jatin K Malik", "B.Tech", "Microsoft", "https://linkedin.com/in/jatinkrmalik","a"],
  ["Ankush K.", "B.Tech", "Microsoft", "https://linkedin.com/in/ankushkhd","a"],
  ["Rahul Gupta", "B.Tech", "Microsoft", "https://linkedin.com/in/rahul-gupta-bb468a15a","a"],
  ["Asif Aziz", "B.Sc", "Microsoft", "https://linkedin.com/in/aasif-azeez-mct","a"],
  ["Azam Hayat", "B.Tech", "Microsoft", "https://linkedin.com/in/azam-hayat-5427b1172","a"],
  ["Rishabh Kalra", "B.Tech", "Microsoft", "https://linkedin.com/in/itsmerishabhkalra","a"],
  ["Nitin Kumar Bhola", "B.Tech", "Microsoft", "https://linkedin.com/in/nitinbhola27","a"],
  ["Jaya Prakash Sharma", "B.Tech", "Microsoft", "https://linkedin.com/in/jaysharma1906","a"],
  ["Akshay Sahu", "B.Tech", "Google", "https://linkedin.com/in/akshay4923", "IITDelhi"],
  ["Himanshu Raj", "B.Tech", "Google", "https://www.linkedin.com/in/akshay4923/", "IIITDelhi"],
  ["Nihesh Anderson", "B.Tech", "Google", "https://www.linkedin.com/in/nihesh/", "IIITDelhi"],
  ["Amit Mittal", "M.Tech", "Google", "https://www.linkedin.com/in/amit-mittal-9aa3b026/", "IITDelhi"],
  ["Rahul Nagar", "B.Tech", "Google", "https://www.linkedin.com/in/rahulnagar8/", "IITDelhi"],
  ["Udit G.", "M.Tech", "Google", "https://www.linkedin.com/in/uditgoyal/", "IITDelhi"],
  ["Rupakshi(Rupi) Goyal", "M.Tech", "Google", "https://www.linkedin.com/in/rupakshi-goel/", "IITDelhi"],
  ["Alisha Agarwal", "B.Tech", "Google", "https://www.linkedin.com/in/alisha-agrawal-a66141b5/", "IITDelhi"],
  ["Tamal Patra", "M.Tech", "Google", "https://www.linkedin.com/in/tamal-patra-27a494137/", "IITDelhi"],
  ["Shiven Mian", "B.Tech", "Microsoft", "https://www.linkedin.com/in/shivenmian/", "IIITDelhi"],
  ["Abhinav Jadon", "B.Tech", "Google", "https://www.linkedin.com/in/jadonabhinav/", "IIITDelhi"],
  ["Apoorva Sharma", "B.Tech", "Google", "https://www.linkedin.com/in/apoorva-sharma-b9b952241/", "DTU"],
  ["Ankur Sharma", "B.Tech", "Microsoft", "https://www.linkedin.com/in/ankur-sharma-984166144/", "IITDelhi"],
  ["Vishal Singh", "B.Tech", "Google", "https://www.linkedin.com/in/vishal-singh-4754a4104/", "IITDelhi"],
  ["Shiv Kandikuppa", "B.Tech", "Google", "https://www.linkedin.com/in/shiv12095/", "IIITDelhi"],
  ["Sunishka Sharma", "B.Tech", "Google", "https://www.linkedin.com/in/sunishka-sharma/", "IIITDelhi"],
  ["Saikat Guha", "B.Tech", "Microsoft", "https://www.linkedin.com/in/saikatguha/", "IITDelhi"],
  ["Saurabhi Adhikari", "B.Tech", "Google", "https://www.linkedin.com/in/surabhi-adhikari-648367137/", "DTU"],
  ["Gaurav Mishra", "B.Tech", "Google", "https://www.linkedin.com/in/gaurav-mishra-b307a437/", "IITDelhi"],
  ["Tushar Gupta", "B.Tech", "Google", "https://www.linkedin.com/in/tushargupta18/", "IIITDelhi"],
  ["Misha Khurana", "B.Tech", "Google", "https://www.linkedin.com/in/misha-khurana/", "IITDelhi"],
  ["Pooja Aggarwal", "B.Tech", "Google", "https://www.linkedin.com/in/poojaaggarwal2612/", "IITDelhi"],
  ["Aariah Bari", "B.Tech", "Google", "https://www.linkedin.com/in/aairah-bari-567aa2196/", "IIITDelhi"],
  ["Hamzah Akhtar", "B.Tech", "Google", "https://www.linkedin.com/in/hamzah-akhtar-a7471a170/", "IIITDelhi"],
  ["Gunagya Singh Mamak", "B.Tech", "Google", "https://www.linkedin.com/in/gunagya-singh-mamak-225424185/", "DTU"],
  ["Shakunt Trehan", "B.Tech", "Google", "https://www.linkedin.com/in/shakunt-trehan/", "DTU"],
  ["Amit Kumar", "B.Tech", "Google", "https://www.linkedin.com/in/amit-kumar-8087751ba/", "DTU"],
  ["Larika Sehgal", "B.Tech", "Google", "https://www.linkedin.com/in/larikasehgal/", "IIITDelhi"],
  ["Amit Pratap Singh", "B.Tech", "Google", "https://www.linkedin.com/in/aps554/", "DTU"],
  ["Harshit Muhal", "B.Tech", "Microsoft", "https://www.linkedin.com/in/harshitmuhal/", "DTU"],
  ["Sankalp Bansal", "B.Tech", "Google", "https://www.linkedin.com/in/sankalpbansal/", "NSUT"],
  ["Kush Misra", "B.Tech", "Google", "https://www.linkedin.com/in/kush-misra/", "NSUT"],
  ["Anmol Singhal ", "B.Tech", "TCS", "https://www.linkedin.com/in/anmolsinghal21?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "IIITDelhi"],
  ["Dinesh Joshi", "M.tech", "TCS", "https://www.linkedin.com/in/dinesh-joshi11?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "IIITDelhi"],
  ["Gaurav Bhatla", "M.Tech", "TCS", "https://www.linkedin.com/in/gourav-bhathla?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "NSUT"],
  ["Shikhar Asthana", "M.tech", "TCS", "https://www.linkedin.com/in/shikhar-asthana?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "DTU"],
  ["Dr. Lokender Tiwari", "P.HD", "TCS", "https://www.linkedin.com/in/lokender?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "IIITDelhi"],
  ["Prabha Kumari", "B.Tech", "TCS", "https://www.linkedin.com/in/prabha-kumari-6200a11b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app","a"],
  ["Harsh Kumar Agarwal ", "B.Tech", "TCS", "https://www.linkedin.com/in/harsh-kumar-agarwal-b8bb92187?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "IIITDelhi"],
  ["Sahil Singh ", "B.Sc", "TCS", "https://www.linkedin.com/in/sahil-singh-280897159?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app","a"],
  ["Vansh Bhateja", "B.Sc", "TCS", "https://www.linkedin.com/in/vansh-bhateja-8027651b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app","a"],
  ["Rengasami Ramanujan", "B.Sc", "Google", "https://www.linkedin.com/in/rengasami-r-90140227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app","a"],
  ["Daniel Ananth", "B.Sc", "TCS", "https://www.linkedin.com/in/daniel-ananth-christopher-8668742a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app","a"],
  ["Prachi Aggarwal", "B.Tech", "TCS", "https://www.linkedin.com/in/prachi-aggarwal-a5944919a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "IIITDelhi"],
  ["Saad Ahmad", "B.Tech", "TCS", "https://www.linkedin.com/in/saad-ahmad-10384b195?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "IIITDelhi"],
  ["Vamshi Krishna Vannekala", "M.Tech", "TCS", "https://www.linkedin.com/in/vamshi-krishna-vannekala-43146b20b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "IIITDelhi"],
  ["Pulkita Gupta", "M.Tech", "TCS", "https://www.linkedin.com/in/pulkita-gupta?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "IIITDelhi"],
  ["Abhinav kanoria", "B.Tech", "TCS", "https://www.linkedin.com/in/abhinav-kanoria-753202122?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "DTU"],
  ["Parbhakar Nawale", "B.Tech", "TCS", "https://www.linkedin.com/in/prabhakar-nawale-43b0b2146?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "DTU"],
  ["Shubham Gupta", "M.Tech", "TCS", "https://www.linkedin.com/in/shubham-sg?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "DTU"],
  ["Alok Pandey", "M.Tech", "TCS", "https://www.linkedin.com/in/alokpandey-1206?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "DTU"],
  ["Parth S. ", "B.Tech", "TCS", "https://www.linkedin.com/in/parthsharma6321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "NSUT"],
  ["Anubhav Dhankhar", "B.Tech", "TCS", "https://www.linkedin.com/in/dhankhar18?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "NSUT"],
  ["Sneha Kodukula", "M.Tech", "TCS", "https://www.linkedin.com/in/snehakodukula?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "NSUT"],
  ["Abhishek Aman", "M.Tech", "TCS", "https://www.linkedin.com/in/abhishek-aman-211b681b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "NSUT"],
  ["Karnam Soujanya", "B.Sc", "Chegg", "https://www.linkedin.com/in/karnam-soujanya-40b8861a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "IITDelhi"],
  ["Nandani A.", "B.Sc", "Project research associate", "https://www.linkedin.com/in/nandani-a-b01421121?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "IITDelhi"],
  ["Mofeezur Rahman", "B.Sc", "SeNSE IITD", "https://www.linkedin.com/in/mofeezur-rahman-428b031b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "IITDelhi"],
  ["Dr. Ashima Yadav", "B.Sc", "Researcher", "https://www.linkedin.com/in/ashima19?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "DTU"],
  ["Sanket Bose", "M.Tech", "Telstra", "https://www.linkedin.com/in/sanket-bose-39768714b/", "NSUT"],
  ["Adya Pandey", "B.Sc", "EY-Parethenon", "https://www.linkedin.com/in/adya-pandey-29203a204?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "NSUT"],
  ["Dipanshu Yadav", "B.Tech", "Google", "https://www.linkedin.com/in/dipanshu-yadav-18243a19b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "NSUT"],
  ["Vaidehee T.", "B.Tech", "Google", "https://www.linkedin.com/in/vaidehee-thakur?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "NSUT"],
  ["Ayushi Arya", "B.Tech", "Microsoft", "https://www.linkedin.com/in/ayushi-arya-b636831b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "NSUT"],
  ["Adwita Arora", "B.Tech", "Microsoft", "https://www.linkedin.com/in/adwitaarora?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "NSUT"],
  ["Nupur Sudhakar", "B.Tech", "Microsoft", "https://www.linkedin.com/in/nupur-sudhakar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "NSUT"],
  ["Harshit Kumar", "M.Tech", "Google", "https://www.linkedin.com/in/hk9999?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "NSUT"],
  ["Lakshay Piplani", "M.Tech", "Google", "https://www.linkedin.com/in/lakshay-piplani-827544151?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "NSUT"],
  ["Rajat Dua", "M.Tech", "Microsoft", "https://www.linkedin.com/in/rajat-dua-143a5312a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "NSUT"],
  ["Sneha Kodukula", "M.Tech", "Microsoft", "https://www.linkedin.com/in/snehakodukula?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "NSUT"]
];

// console.log(data);


// Degree options for dropdown
const degreeOptions = ["B.Tech", "M.Tech", "B.Sc"];

// Company options for dropdown
const companyOptions = ["Google", "Microsoft", "TCS"];

// College options for dropdown
const collegeOptions = ["NSUT", "DTU", "IITDelhi", "IIITDelhi"];

export default function Search1() {
  const [searchDegree, setSearchDegree] = useState('');
  const [searchCompany, setSearchCompany] = useState('');
  const [searchCollege, setSearchCollege] = useState('');
  const [filteredProfiles, setFilteredProfiles] = useState([]);

  const handleSearchDegree = (e) => {
    setSearchDegree(e.target.value);
  };

  const handleSearchCompany = (e) => {
    setSearchCompany(e.target.value);
  };

  const handleSearchCollege = (e) => {
    setSearchCollege(e.target.value);
  };

  const handleSearch = () => {
    const filtered = linkedInProfiles.filter((profile) => {
      const degreeMatch = searchDegree
        ? profile[1].toLowerCase() === searchDegree.toLowerCase()
        : true;
      const companyMatch = searchCompany
        ? profile[2].toLowerCase() === searchCompany.toLowerCase()
        : true;
      const collegeMatch = searchCollege
        ? profile[4].toLowerCase() === searchCollege.toLowerCase()
        : true;
      return degreeMatch && companyMatch && collegeMatch;
    });
    setFilteredProfiles(filtered);
  };

  return (
    <div className="container mx-auto p-4">
      <Link to="/Profile" className="mb-4 inline-block">
        <button className="bg-green-800 hover:bg-green-500 text-white font-bold py-2 px-4 rounded">
          Back
        </button>
      </Link>

      <h1 className="text-2xl font-bold mb-4 text-center  text-purple-800">Search LinkedIn Profiles</h1>
      <h2 className="text-lg font-bold mb-2">Filter by Degree 🎓</h2>
      <div className="flex mb-4">
        <select
          value={searchDegree}
          onChange={handleSearchDegree}
          className="border border-gray-300 rounded px-4 py-2 w-full"
        >
          <option value="">Select Degree</option>
          {degreeOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <h2 className="text-lg font-bold mb-2">Filter by Company Employed 🤵🏻‍♂️</h2>
      <div className="flex mb-4">
        <select
          value={searchCompany} onChange={handleSearchCompany}
          className="border border-gray-300 rounded px-4 py-2 w-full"
          >
          <option value="">Select Company</option>
          {companyOptions.map((option) => (
          <option key={option} value={option}>
          {option}
          </option>
          ))}
          </select>
          </div>
          <h2 className="text-lg font-bold mb-2">Filter by College 🏫</h2>
          <div className="flex mb-4">
        <select
          value={searchCollege}
          onChange={handleSearchCollege}
          className="border border-gray-300 rounded px-4 py-2 w-full"
        >
          <option value="">Select Collage</option>
          {collegeOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
          <button
               onClick={handleSearch}
               className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
             >
          Search 🔎
          </button>
          {filteredProfiles.length > 0 ? (
          <div>
          <h2 className="text-xl font-bold mb-2">Search Results:</h2>
          <ul>
          {filteredProfiles.map((profile, index) => (
          <li key={index} className="mb-2">
          <a
                         href={profile[3]}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="text-blue-500 hover:underline"
                       >
          {profile[0]} ({profile[1]}, {profile[2]})
          </a>
          </li>
          ))}
          </ul>
          </div>
          ) : (
          <p className="text-gray-500">No profiles found.</p>
          )}
          </div>
          );
          }