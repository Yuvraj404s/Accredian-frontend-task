const SuccessModal = ({ message, onClose }) => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded shadow-lg flex flex-col items-center">
          <p className="text-green-700 font-semibold text-2xl">{message}</p>
          <button 
            onClick={onClose} 
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-900">
            Close
          </button>
        </div>
      </div>
    );
  };
  
  export default SuccessModal;
  