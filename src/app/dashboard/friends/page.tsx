"use client"
import { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import { 
  PencilIcon, 
  TrashIcon,
  PlusIcon,
  EnvelopeIcon,
  PhoneIcon
} from '@heroicons/react/24/outline'

interface Friend {
  id: string;
  name: string;
  email: string;
  phone?: string;
  totalOwed: number;
  totalOwes: number;
}

export default function Friends() {
  const [friends, setFriends] = useState<Friend[]>([
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1 234 567 8900',
      totalOwed: 50,
      totalOwes: 0,
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      totalOwed: 0,
      totalOwes: 100,
    },
  ]);

  const [showFriendModal, setShowFriendModal] = useState(false);
  const [editingFriend, setEditingFriend] = useState<Friend | null>(null);

  const handleAddFriend = (data: Partial<Friend>) => {
    if (data.id) {
      // Editing existing friend
      setFriends(friends.map(friend => 
        friend.id === data.id 
          ? { ...friend, ...data }
          : friend
      ));
    } else {
      // Adding new friend
      const newFriend = {
        id: (friends.length + 1).toString(),
        ...data,
        totalOwed: 0,
        totalOwes: 0,
      } as Friend;
      setFriends([...friends, newFriend]);
    }
    setShowFriendModal(false);
    setEditingFriend(null);
  };

  const handleDeleteFriend = (friendId: string) => {
    setFriends(friends.filter(friend => friend.id !== friendId));
  };

  return (
    <div className="flex min-h-screen bg-gray-950">
      <Sidebar />
      
      <main className="flex-1 ml-64">
        <div className="p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold text-white">Friends</h1>
              <button
                onClick={() => {
                  setEditingFriend(null);
                  setShowFriendModal(true);
                }}
                className="bg-[#4ADE80] text-black px-4 py-2 rounded-lg hover:bg-[#22c55e] transition-all transform hover:scale-105 flex items-center space-x-2"
              >
                <PlusIcon className="w-5 h-5" />
                <span>Add Friend</span>
              </button>
            </div>

            <div className="bg-gray-900 rounded-xl border border-gray-800">
              <div className="border-b border-gray-800 p-6">
                <h2 className="text-lg font-semibold text-white">Friend List</h2>
              </div>
              {friends.map((friend) => (
                <div key={friend.id} className="p-6 flex items-center justify-between hover:bg-gray-800/50 transition-colors border-b border-gray-800 last:border-b-0">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gray-800 rounded-full w-12 h-12 flex items-center justify-center">
                      <span className="text-lg font-medium text-[#4ADE80]">
                        {friend.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-white">{friend.name}</p>
                      <div className="flex items-center space-x-4 mt-1">
                        <div className="flex items-center text-gray-400">
                          <EnvelopeIcon className="w-4 h-4 mr-1" />
                          <span className="text-sm">{friend.email}</span>
                        </div>
                        {friend.phone && (
                          <div className="flex items-center text-gray-400">
                            <PhoneIcon className="w-4 h-4 mr-1" />
                            <span className="text-sm">{friend.phone}</span>
                          </div>
                        )}
                      </div>
                      <div className="flex items-center space-x-4 mt-2">
                        {friend.totalOwed > 0 && (
                          <span className="text-sm text-[#4ADE80]">
                            Owes you ${friend.totalOwed}
                          </span>
                        )}
                        {friend.totalOwes > 0 && (
                          <span className="text-sm text-red-400">
                            You owe ${friend.totalOwes}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => {
                        setEditingFriend(friend);
                        setShowFriendModal(true);
                      }}
                      className="p-2 text-gray-400 hover:text-[#4ADE80] rounded-lg transition-colors"
                    >
                      <PencilIcon className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleDeleteFriend(friend.id)}
                      className="p-2 text-gray-400 hover:text-red-400 rounded-lg transition-colors"
                    >
                      <TrashIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
              {friends.length === 0 && (
                <div className="p-6 text-center text-gray-400">
                  No friends added yet. Add your first friend to start tracking debts!
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {showFriendModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-gray-900 rounded-xl p-6 w-full max-w-md">
            <h2 className="text-xl font-bold text-white mb-4">
              {editingFriend ? 'Edit Friend' : 'Add Friend'}
            </h2>
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              handleAddFriend({
                id: editingFriend?.id,
                name: formData.get('name') as string,
                email: formData.get('email') as string,
                phone: formData.get('phone') as string,
              });
            }}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={editingFriend?.name}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#4ADE80]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    defaultValue={editingFriend?.email}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#4ADE80]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    defaultValue={editingFriend?.phone}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#4ADE80]"
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-4 mt-6">
                <button
                  type="button"
                  onClick={() => {
                    setShowFriendModal(false);
                    setEditingFriend(null);
                  }}
                  className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#4ADE80] text-black px-4 py-2 rounded-lg hover:bg-[#22c55e] transition-colors"
                >
                  {editingFriend ? 'Save Changes' : 'Add Friend'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
