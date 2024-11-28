"use client"
import { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import {
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  VideoCameraIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/outline'

interface FAQ {
  question: string;
  answer: string;
}

export default function Support() {
  const [selectedCategory, setSelectedCategory] = useState('general')
  const [searchQuery, setSearchQuery] = useState('')

  const supportCategories = [
    {
      id: 'general',
      name: 'General Help',
      icon: QuestionMarkCircleIcon,
      description: 'Basic questions about using DebtDive',
    },
    {
      id: 'chat',
      name: 'Live Chat',
      icon: ChatBubbleLeftRightIcon,
      description: 'Chat with our support team',
    },
    {
      id: 'docs',
      name: 'Documentation',
      icon: DocumentTextIcon,
      description: 'Detailed guides and tutorials',
    },
    {
      id: 'video',
      name: 'Video Tutorials',
      icon: VideoCameraIcon,
      description: 'Learn through video guides',
    },
  ]

  const faqs: FAQ[] = [
    {
      question: 'How do I add a new debt?',
      answer: 'To add a new debt, click the "Add New Debt" button on the dashboard or debts page. Fill in the required information including the friend, amount, and type of debt (borrowed or lent).',
    },
    {
      question: 'Can I edit or delete a debt?',
      answer: 'Yes! Each debt entry has edit and delete buttons. Click the edit (pencil) icon to modify a debt, or the delete (trash) icon to remove it.',
    },
    {
      question: 'How do I add friends?',
      answer: 'Navigate to the Friends page and click "Add Friend". Enter their name, email, and optional phone number. You can also edit or remove friends from the same page.',
    },
    {
      question: 'What happens when a debt is settled?',
      answer: 'When a debt is settled, you can either delete it or mark it as paid (feature coming soon). This will update your total balance and friend statistics.',
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes, we take security seriously. All your data is encrypted and stored securely. We never share your personal information with third parties.',
    },
  ]

  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="flex min-h-screen bg-gray-950">
      <Sidebar />
      
      <main className="flex-1 ml-64">
        <div className="p-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-white mb-2">Support Center</h1>
              <p className="text-gray-400">Get help with DebtDive. We're here to help!</p>
            </div>

            {/* Search */}
            <div className="mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#4ADE80]"
                />
              </div>
            </div>

            {/* Support Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {supportCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`p-6 rounded-xl border ${
                    selectedCategory === category.id
                      ? 'border-[#4ADE80] bg-gray-900'
                      : 'border-gray-800 bg-gray-900 hover:border-gray-700'
                  } transition-colors group`}
                >
                  <category.icon
                    className={`w-8 h-8 mb-4 ${
                      selectedCategory === category.id
                        ? 'text-[#4ADE80]'
                        : 'text-gray-400 group-hover:text-[#4ADE80]'
                    }`}
                  />
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-400">{category.description}</p>
                </button>
              ))}
            </div>

            {/* FAQs */}
            <div className="bg-gray-900 rounded-xl border border-gray-800">
              <div className="border-b border-gray-800 p-6">
                <h2 className="text-lg font-semibold text-white">
                  Frequently Asked Questions
                </h2>
              </div>
              <div className="divide-y divide-gray-800">
                {filteredFAQs.map((faq, index) => (
                  <div key={index} className="p-6">
                    <h3 className="text-white font-medium mb-2">{faq.question}</h3>
                    <p className="text-gray-400">{faq.answer}</p>
                  </div>
                ))}
                {filteredFAQs.length === 0 && (
                  <div className="p-6 text-center">
                    <p className="text-gray-400">No matching FAQs found.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Contact Support */}
            <div className="mt-8 bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-lg font-semibold text-white mb-4">
                Still need help?
              </h2>
              <p className="text-gray-400 mb-4">
                Our support team is available 24/7 to help you with any questions or issues.
              </p>
              <button className="bg-[#4ADE80] text-black px-4 py-2 rounded-lg hover:bg-[#22c55e] transition-colors">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
