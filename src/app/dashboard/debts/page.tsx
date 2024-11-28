"use client"
import Sidebar from '@/components/Sidebar';

export default function Debts() {
  return (
    <div className="flex min-h-screen bg-gray-950">
      <Sidebar />
      
      <main className="flex-1 ml-64 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-white">My Debts</h1>
            <button className="bg-[#4ADE80] hover:bg-[#22c55e] text-black px-4 py-2 rounded-lg transition-all transform hover:scale-105">
              Add New Debt
            </button>
          </div>

          {/* Debt Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <h3 className="text-[#4ADE80] text-lg font-semibold mb-4">Money You're Owed</h3>
              <div className="space-y-4">
                {['John Doe', 'Alice Smith', 'Bob Johnson'].map((person) => (
                  <div key={person} className="flex justify-between items-center p-4 bg-gray-800 rounded-lg">
                    <div>
                      <p className="font-medium">{person}</p>
                      <p className="text-sm text-gray-400">Due in 5 days</p>
                    </div>
                    <p className="text-[#4ADE80] font-semibold">+$50.00</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <h3 className="text-red-400 text-lg font-semibold mb-4">Money You Owe</h3>
              <div className="space-y-4">
                {['Sarah Wilson', 'Mike Brown'].map((person) => (
                  <div key={person} className="flex justify-between items-center p-4 bg-gray-800 rounded-lg">
                    <div>
                      <p className="font-medium">{person}</p>
                      <p className="text-sm text-gray-400">Due in 3 days</p>
                    </div>
                    <p className="text-red-400 font-semibold">-$30.00</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Debt History */}
          <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
            <h3 className="text-xl font-semibold mb-6">Debt History</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-gray-400 text-left">
                    <th className="pb-4 px-4">Person</th>
                    <th className="pb-4 px-4">Amount</th>
                    <th className="pb-4 px-4">Date</th>
                    <th className="pb-4 px-4">Due Date</th>
                    <th className="pb-4 px-4">Status</th>
                    <th className="pb-4 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { person: 'John Doe', amount: 50, date: '2024-01-15', dueDate: '2024-02-15', status: 'Pending' },
                    { person: 'Sarah Wilson', amount: -30, date: '2024-01-14', dueDate: '2024-02-14', status: 'Paid' },
                    { person: 'Alice Smith', amount: 25, date: '2024-01-13', dueDate: '2024-02-13', status: 'Overdue' },
                  ].map((debt) => (
                    <tr key={debt.person} className="border-t border-gray-800">
                      <td className="py-4 px-4">{debt.person}</td>
                      <td className={`py-4 px-4 ${debt.amount > 0 ? 'text-[#4ADE80]' : 'text-red-400'}`}>
                        {debt.amount > 0 ? '+' : ''}{debt.amount}.00
                      </td>
                      <td className="py-4 px-4">{debt.date}</td>
                      <td className="py-4 px-4">{debt.dueDate}</td>
                      <td className="py-4 px-4">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          debt.status === 'Pending' ? 'bg-yellow-500/20 text-yellow-500' :
                          debt.status === 'Paid' ? 'bg-[#4ADE80]/20 text-[#4ADE80]' :
                          'bg-red-500/20 text-red-500'
                        }`}>
                          {debt.status}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <button className="text-[#4ADE80] hover:text-[#22c55e] transition-colors">
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
