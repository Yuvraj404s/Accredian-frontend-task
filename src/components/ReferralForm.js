import { useState } from "react";


const ReferralForm = ({ onClose, onSuccess }) => {
  const [referrerName, setReferrerName] = useState("");
  const [referrerEmail, setReferrerEmail] = useState("");
  const [referrerPhone, setReferrerPhone] = useState("");
  const [refereeName, setRefereeName] = useState("");
  const [refereeEmail, setRefereeEmail] = useState("");
  const [refereePhone, setRefereePhone] = useState("");
  const [course, setCourse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://accredian-backend-task-oa4m.onrender.com/api/referral/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ referrerName, referrerEmail, referrerPhone, refereeName, refereeEmail, refereePhone, course }),
    });

    const data = await response.json();
    console.log(data);

    if (response.ok) {
      onSuccess(); 
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-4/5 max-w-6xl h-auto flex flex-col md:flex-row">
        <div className="hidden md:flex w-1/2 bg-blue-500 p-6 items-center justify-center bg-left">
        </div>
        <div className="w-full md:w-1/2 p-6 relative">
          <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-900" onClick={onClose}>
            ✕
          </button>

          <h2 className="text-3xl font-bold text-gray-900">
            Refer your <span className="text-blue-800">friend!</span>
          </h2>

          <form onSubmit={handleSubmit} className="mt-6 p-6 border rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex justify-center items-center">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Friend's Details</h3>
                <input 
                  type="text" 
                  placeholder="Friend's Name" 
                  className="w-full px-4 py-2 border rounded-lg mt-3" 
                  onChange={(e) => setReferrerName(e.target.value)} 
                  required 
                />
                <input 
                  type="email" 
                  placeholder="Friend's Email" 
                  className="w-full px-4 py-2 border rounded-lg mt-3" 
                  onChange={(e) => setReferrerEmail(e.target.value)} 
                  required 
                />
                <input 
                  type="tel" 
                  placeholder="Friend's phone" 
                  maxLength="10"
                  pattern="[0-9]{10}"
                  className="w-full px-4 py-2 border rounded-lg mt-3" 
                  onChange={(e) => setReferrerPhone(e.target.value)} 
                  required 
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Your Details</h3>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-2 border rounded-lg mt-3" 
                  onChange={(e) => setRefereeName(e.target.value)} 
                  required 
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full px-4 py-2 border rounded-lg mt-3" 
                  onChange={(e) => setRefereeEmail(e.target.value)} 
                  required 
                />
                <input 
                  type="tel" 
                  placeholder="Your phone" 
                  maxLength="10"
                  pattern="[0-9]{10}"
                  className="w-full px-4 py-2 border rounded-lg mt-3" 
                  onChange={(e) => setRefereePhone(e.target.value)} 
                  required 
                />
              </div>
              <div>
                <select 
                  className="w-full px-4 py-2 border rounded-lg mt-3 overflow-y-auto" 
                  onChange={(e) => setCourse(e.target.value)} 
                  required 
                >
                  <option disabled selected hidden>Select Course</option>
                  <option>Full Stack Development</option>
                  <option>Computer Architecture</option>
                  <option>Introduction to Python</option>
                  <option>Introduction to Core Java</option>
                  <option>Data Structure and Algorithms</option>
                  <option>Data Science</option>
                  <option>Cyber Security</option>
                  <option>Artificial Intelligence</option>
                  <option>Machine Learning</option>
                </select>
              </div>
            </div>
            <button 
              type="submit" 
              className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-900"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReferralForm;
