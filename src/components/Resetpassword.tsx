import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAuth, confirmPasswordReset } from 'firebase/auth';

const ResetPassword: React.FC = () => {
    const [newPassword, setNewPassword] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [oobCode, setOobCode] = useState<string | null>(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const code = queryParams.get('oobCode');
        if (code) {
            setOobCode(code);
        } else {
            setMessage('Invalid or missing password reset code.');
        }
    }, [location]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!oobCode) return;

        const auth = getAuth();

        try {
            await confirmPasswordReset(auth, oobCode, newPassword);
            setMessage('Password has been reset successfully. You can now log in.');
            navigate('/login'); // Redirect to the login page after successful password reset
        } catch (error) {
            setMessage('Error resetting password. Please try again.');
        }
    };

    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Reset Password</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter new password"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Reset Password
          </button>
        </form>
        {message && (
          <p className="mt-4 text-center text-green-500 font-semibold">
            {message}
          </p>
        )}
      </div>
    </div>
    );
};

export default ResetPassword;