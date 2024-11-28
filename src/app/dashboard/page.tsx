"use client"
import { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import DashboardNav from '@/components/DashboardNav'
import DebtModal from '@/components/DebtModal'
import {
  ArrowUpIcon,
  ArrowDownIcon,
  PencilIcon,
  TrashIcon,
  PlusIcon,
  FunnelIcon,
} from '@heroicons/react/24/outline'

interface Debt {
  id: string;
  type: 'borrowed' | 'lent';
  friendId: string;
  friendName: string;
  amount: number;
  description?: string;
  timestamp: string;
  dueDate?: string;
}

export default function Dashboard() {
  const [showDebtModal, setShowDebtModal] = useState(false);
  const [editingDebt, setEditingDebt] = useState<Debt | null>(null);
  const [filterType, setFilterType] = useState<'all' | 'borrowed' | 'lent'>('all');
  const [debts, setDebts] = useState<Debt[]>([
    {
      id: '1',
      type: 'borrowed',
      friendId: '1',
      friendName: 'John Doe',
      amount: 50,
      description: 'Lunch at restaurant',
      timestamp: '2024-01-15T12:00:00Z',
      dueDate: '2024-02-15',
    },
    {
      id: '2',
      type: 'lent',
      friendId: '2',
      friendName: 'Jane Smith',
      amount: 100,
      description: 'Movie tickets',
      timestamp: '2024-01-14T15:30:00Z',
    },
  ]);

  const [friends] = useState([
    { id: '1', name: 'John Doe', email: 'john@example.com' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com' },
    { id: '3', name: 'Bob Johnson', email: 'bob@example.com' },
  ]);

  const handleSubmitDebt = (data: Partial<Debt>) => {
    const friend = friends.find(f => f.id === data.friendId);
    if (editingDebt) {
      // Update existing debt
      setDebts(debts.map(debt => 
        debt.id === editingDebt.id 
          ? { ...editingDebt, ...data, friendName: friend?.name || '' }
          : debt
      ));
    } else {
      // Add new debt
      const newDebt: Debt = {
        id: (Math.max(...debts.map(d => parseInt(d.id)), 0) + 1).toString(),
        type: data.type as 'borrowed' | 'lent',
        friendId: data.friendId!,
        friendName: friend?.name || '',
        amount: data.amount || 0,
        description: data.description,
        timestamp: new Date().toISOString(),
        dueDate: data.dueDate,
      };
      setDebts([newDebt, ...debts]);
    }
    setShowDebtModal(false);
    setEditingDebt(null);
  };

  const handleEditDebt = (debt: Debt) => {
    setEditingDebt(debt);
    setShowDebtModal(true);
  };

  const handleDeleteDebt = (debtId: string) => {
    setDebts(debts.filter(d => d.id !== debtId));
  };

  const filteredDebts = debts.filter(debt => 
    filterType === 'all' ? true : debt.type === filterType
  );

  const totalBorrowed = debts
    .filter(d => d.type === 'borrowed')
    .reduce((sum, d) => sum + d.amount, 0);

  const totalLent = debts
    .filter(d => d.type === 'lent')
    .reduce((sum, d) => sum + d.amount, 0);

  return (
    <div className="flex min-h-screen bg-gray-950">
      <Sidebar />
      
      <main className="flex-1 ml-64">
        <DashboardNav onNewDebt={() => {
          setEditingDebt(null);
          setShowDebtModal(true);
        }} />
        
        <div className="p-8">
          <div className="max-w-7xl mx-auto">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
                <h3 className="text-sm font-medium text-gray-400 mb-4">Total Balance</h3>
                <div className="flex items-center">
                  <span className={`text-2xl font-bold ${
                    totalLent - totalBorrowed > 0
                      ? 'text-[#4ADE80]'
                      : totalLent - totalBorrowed < 0
                      ? 'text-red-400'
                      : 'text-white'
                  }`}>
                    ${Math.abs(totalLent - totalBorrowed).toFixed(2)}
                  </span>
                  <span className="ml-2 text-sm text-gray-400">
                    {totalLent - totalBorrowed > 0
                      ? 'in your favor'
                      : totalLent - totalBorrowed < 0
                      ? 'you owe'
                      : 'all settled'}
                  </span>
                </div>
              </div>

              <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
                <h3 className="text-sm font-medium text-gray-400 mb-4">Money Borrowed</h3>
                <div className="flex items-center">
                  <ArrowDownIcon className="w-5 h-5 text-red-400 mr-2" />
                  <span className="text-2xl font-bold text-white">
                    ${totalBorrowed.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
                <h3 className="text-sm font-medium text-gray-400 mb-4">Money Lent</h3>
                <div className="flex items-center">
                  <ArrowUpIcon className="w-5 h-5 text-[#4ADE80] mr-2" />
                  <span className="text-2xl font-bold text-white">
                    ${totalLent.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            {/* Debt List Header */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-4">
                <h2 className="text-xl font-semibold text-white">Recent Debts</h2>
                <div className="flex items-center space-x-2 bg-gray-900 rounded-lg p-1">
                  <button
                    onClick={() => setFilterType('all')}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                      filterType === 'all'
                        ? 'bg-gray-800 text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setFilterType('borrowed')}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                      filterType === 'borrowed'
                        ? 'bg-gray-800 text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Borrowed
                  </button>
                  <button
                    onClick={() => setFilterType('lent')}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                      filterType === 'lent'
                        ? 'bg-gray-800 text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Lent
                  </button>
                </div>
              </div>
              <button
                onClick={() => {
                  setEditingDebt(null);
                  setShowDebtModal(true);
                }}
                className="bg-[#4ADE80] text-black px-4 py-2 rounded-lg hover:bg-[#22c55e] transition-all transform hover:scale-105 flex items-center space-x-2"
              >
                <PlusIcon className="w-5 h-5" />
                <span>Add New Debt</span>
              </button>
            </div>

            {/* Debts List */}
            <div className="bg-gray-900 rounded-xl border border-gray-800">
              <div className="divide-y divide-gray-800">
                {filteredDebts.map((debt) => (
                  <div key={debt.id} className="p-6 flex items-center justify-between hover:bg-gray-800/50 transition-colors">
                    <div className="flex items-start space-x-4">
                      <div className={`p-2 rounded-lg ${
                        debt.type === 'borrowed' ? 'bg-red-400/10' : 'bg-[#4ADE80]/10'
                      }`}>
                        {debt.type === 'borrowed' ? (
                          <ArrowDownIcon className="w-5 h-5 text-red-400" />
                        ) : (
                          <ArrowUpIcon className="w-5 h-5 text-[#4ADE80]" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-white">
                          {debt.type === 'borrowed' ? 'Borrowed from' : 'Lent to'}{' '}
                          {debt.friendName}
                        </p>
                        <p className="text-sm text-gray-400">{debt.description}</p>
                        <div className="flex items-center mt-1 space-x-4">
                          <p className="text-sm text-gray-500">
                            {new Date(debt.timestamp).toLocaleDateString()}
                          </p>
                          {debt.dueDate && (
                            <>
                              <span className="text-gray-600">•</span>
                              <p className="text-sm text-gray-500">
                                Due {new Date(debt.dueDate).toLocaleDateString()}
                              </p>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className={`text-lg font-medium ${
                        debt.type === 'borrowed' ? 'text-red-400' : 'text-[#4ADE80]'
                      }`}>
                        ${debt.amount.toFixed(2)}
                      </span>
                      <div className="flex items-center">
                        <button
                          onClick={() => handleEditDebt(debt)}
                          className="p-1 text-gray-400 hover:text-[#4ADE80] rounded-lg transition-colors"
                        >
                          <PencilIcon className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleDeleteDebt(debt.id)}
                          className="p-1 text-gray-400 hover:text-red-400 rounded-lg transition-colors"
                        >
                          <TrashIcon className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                {filteredDebts.length === 0 && (
                  <div className="p-6 text-center text-gray-400">
                    No {filterType === 'all' ? '' : filterType} debts found.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <DebtModal
        isOpen={showDebtModal}
        onClose={() => {
          setShowDebtModal(false);
          setEditingDebt(null);
        }}
        onSubmit={handleSubmitDebt}
        editData={editingDebt}
        friends={friends}
      />
    </div>
  );
}
