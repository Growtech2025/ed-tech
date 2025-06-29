import React, { useState } from 'react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const CloseAccount = () => {
  const [reason, setReason] = useState('');
  const [confirm, setConfirm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!confirm) {
      alert('⚠️ Please confirm that you want to close your account.');
      return;
    }

    console.log('Account Closure Reason:', reason);
    alert('✅ Your account closure request has been submitted.');
  };

  return (
    <div className="max-w-2xl mx-auto mt-12 bg-white shadow-lg rounded-xl p-8 border-t-8 border-red-600">
      <div className="flex items-center gap-3 mb-6">
        <ExclamationTriangleIcon className="h-7 w-7 text-red-600" />
        <h2 className="text-2xl font-bold text-red-700">Close Your Account</h2>
      </div>

      <p className="text-gray-700 text-sm mb-6">
        We're really sorry to see you go. Closing your account is <strong className="text-red-600">permanent</strong> and cannot be undone.
        All your personal data and activity history will be deleted from our system.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Reason */}
        <div>
          <label className="block text-gray-800 font-medium mb-1">Reason for closing your account (optional)</label>
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            rows={4}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
            placeholder="Let us know if there's anything we could have done better..."
          />
        </div>

        {/* Confirmation */}
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            checked={confirm}
            onChange={(e) => setConfirm(e.target.checked)}
            className="mt-1 h-4 w-4 accent-red-600"
          />
          <label className="text-sm text-gray-800 leading-tight">
            I understand that closing my account is <strong className="text-red-600">permanent</strong> and all my data will be lost.
          </label>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md transition-all shadow-sm"
          >
            🛑 Close My Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default CloseAccount;
