import React from "react";
import { useState } from "react";
import ReferralForm from "../components/ReferralForm";
import SuccessModal from "../components/SuccessModal";

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  
  return (
    <div className="w-full min-h-[70vh] bg-gray-100 flex flex-col items-center py-2 px-2 md:px-0">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-xl p-10 md:p-14 mt-10 flex flex-col md:flex-row items-center gap-10 relative min-h-[500px] bg-custom">
        <div className="md:w-1/3 text-center md:text-left">
          <h2 className="text-5xl font-bold text-gray-900 leading-snug">Let's Learn & Earn</h2>
          <p className="text-2xl text-gray-700 mt-4">Get a chance to win up to <span className="text-blue-600 font-semibold">Rs. 15,000</span></p>
          {!showForm && (
            <button onClick={() => setShowForm(true)} className="mt-6 inline-block bg-blue-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-blue-900 transition-all">
                Refer Now
            </button>
          )}
          {showForm && <ReferralForm onClose={() => setShowForm(false)} onSuccess={() => { setShowForm(false); setShowSuccessModal(true); }} />}
          {showSuccessModal && <SuccessModal message="Referral sent successfully!" onClose={() => setShowSuccessModal(false)} />}
        </div>
      </div>
    </div>
  );
};

export default Home;
