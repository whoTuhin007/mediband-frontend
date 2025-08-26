import React from 'react';

const DashboardPage = () => {
  return (
    <div className="min-h-screen flex flex-col  py-8 px-2 sm:px-4 bg-gradient-to-br from-blue-50 to-blue-200">
      <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 sm:p-10">
        <h1 className="text-4xl font-extrabold mb-6 text-blue-900 drop-shadow text-center">Dashboard</h1>
        <div className="space-y-6 text-lg text-gray-700">
          <div>
            <h2 className="text-xl font-bold text-blue-800 mb-2">Medical Form</h2>
            <p>View and manage your medical information securely.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-blue-800 mb-2">QR Card</h2>
            <p>Access your QR code for emergency use and quick sharing.</p>
          </div>
         
          <div>
            <h2 className="text-xl font-bold text-blue-800 mb-2">Orders</h2>
            <p>Track and review your recent orders and purchases.</p>
          </div>
        </div>
        <div className="mt-10 text-center text-gray-500">
          <p>Need help? Contact support anytime.</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;