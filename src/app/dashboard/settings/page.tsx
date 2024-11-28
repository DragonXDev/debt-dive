"use client"
import Sidebar from '@/components/Sidebar';

export default function Settings() {
  return (
    <div className="flex min-h-screen bg-gray-950">
      <Sidebar />
      
      <main className="flex-1 ml-64 p-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-8">Settings</h1>

          {/* Profile Settings */}
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 mb-8">
            <h2 className="text-xl font-semibold mb-6">Profile Settings</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Profile Picture
                </label>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-[#4ADE80] rounded-full flex items-center justify-center text-black font-bold">
                    JD
                  </div>
                  <button className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors">
                    Change Photo
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[#4ADE80]"
                  defaultValue="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[#4ADE80]"
                  defaultValue="john@example.com"
                />
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 mb-8">
            <h2 className="text-xl font-semibold mb-6">Notification Settings</h2>
            <div className="space-y-4">
              {[
                { title: 'Email Notifications', description: 'Receive updates about your debts via email' },
                { title: 'Push Notifications', description: 'Get instant updates on your device' },
                { title: 'Payment Reminders', description: 'Get notified before payment due dates' },
                { title: 'Friend Activity', description: 'Notifications about friend requests and updates' },
              ].map((setting) => (
                <div key={setting.title} className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{setting.title}</h3>
                    <p className="text-sm text-gray-400">{setting.description}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#4ADE80]/25 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4ADE80]"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Privacy Settings */}
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 mb-8">
            <h2 className="text-xl font-semibold mb-6">Privacy Settings</h2>
            <div className="space-y-4">
              {[
                { title: 'Profile Visibility', description: 'Control who can see your profile' },
                { title: 'Debt Privacy', description: 'Choose who can see your debt information' },
                { title: 'Friend Requests', description: 'Allow others to send you friend requests' },
              ].map((setting) => (
                <div key={setting.title} className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{setting.title}</h3>
                    <p className="text-sm text-gray-400">{setting.description}</p>
                  </div>
                  <select className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[#4ADE80]">
                    <option>Everyone</option>
                    <option>Friends Only</option>
                    <option>Private</option>
                  </select>
                </div>
              ))}
            </div>
          </div>

          {/* Account Settings */}
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h2 className="text-xl font-semibold mb-6">Account Settings</h2>
            <div className="space-y-4">
              <button className="w-full bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors">
                Change Password
              </button>
              <button className="w-full bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors">
                Export Data
              </button>
              <button className="w-full bg-red-500/10 hover:bg-red-500/20 text-red-500 px-4 py-2 rounded-lg transition-colors">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
