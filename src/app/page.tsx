"use client"
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AuthModal from '@/components/AuthModal'
import {
  ChartBarIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  BellAlertIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  ShieldCheckIcon,
  ArrowTrendingUpIcon,
  DocumentChartBarIcon,
} from '@heroicons/react/24/outline'

export default function Home() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');

  const features = [
    {
      name: 'Smart Debt Tracking',
      description: 'Automatically track who owes you and who you owe with intelligent debt management.',
      icon: ChartBarIcon,
    },
    {
      name: 'Split Expenses',
      description: 'Easily split bills and expenses among friends, roommates, or groups.',
      icon: CurrencyDollarIcon,
    },
    {
      name: 'Group Management',
      description: 'Create and manage groups for different occasions and track shared expenses.',
      icon: UserGroupIcon,
    },
  ];

  const benefits = [
    {
      title: 'Real-time Notifications',
      description: 'Stay updated with instant notifications for new debts, payments, and reminders.',
      icon: BellAlertIcon,
    },
    {
      title: 'Payment History',
      description: 'Access complete payment history and transaction records anytime.',
      icon: ClockIcon,
    },
    {
      title: 'Seamless Communication',
      description: 'Built-in messaging system for debt-related discussions and reminders.',
      icon: ChatBubbleLeftRightIcon,
    },
    {
      title: 'Secure Transactions',
      description: 'Bank-level security for all your financial data and transactions.',
      icon: ShieldCheckIcon,
    },
    {
      title: 'Debt Analytics',
      description: 'Visualize your lending and borrowing patterns with detailed analytics.',
      icon: ArrowTrendingUpIcon,
    },
    {
      title: 'Export Reports',
      description: 'Generate and export detailed reports for personal record-keeping.',
      icon: DocumentChartBarIcon,
    },
  ];

  const pricing = [
    {
      name: 'Basic',
      price: 'Free',
      features: [
        'Up to 5 active debts',
        'Basic debt tracking',
        'Email notifications',
        'Mobile app access',
      ],
      cta: 'Get Started',
      highlighted: false,
    },
    {
      name: 'Pro',
      price: '$4.99',
      period: '/month',
      features: [
        'Unlimited active debts',
        'Group expense splitting',
        'Priority support',
        'Advanced analytics',
        'Custom categories',
        'Payment reminders',
      ],
      cta: 'Start Free Trial',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: [
        'All Pro features',
        'Custom integration',
        'Dedicated support',
        'Team management',
        'Advanced security',
        'API access',
      ],
      cta: 'Contact Sales',
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-[#4ADE80]">DebtDive</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-[#4ADE80] transition-colors">Features</a>
              <a href="#pricing" className="text-gray-300 hover:text-[#4ADE80] transition-colors">Pricing</a>
              <a href="#about" className="text-gray-300 hover:text-[#4ADE80] transition-colors">About</a>
              <a href="/dashboard" className="bg-[#4ADE80] text-black px-4 py-2 rounded-lg hover:bg-[#22c55e] transition-all transform hover:scale-105">
                Launch App
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex flex-col items-center justify-center min-h-screen py-32 px-4">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            Track Your <span className="text-[#4ADE80]">Debts</span>,<br />
            Maintain Your Friendships
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
            The smart way to manage personal debts and keep your relationships strong.
            Never forget who owes what with DebtDive.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <button onClick={() => setShowAuthModal(true)} className="w-full sm:w-auto bg-[#4ADE80] text-black px-8 py-4 rounded-xl font-bold hover:bg-[#22c55e] transition-all transform hover:scale-105">
              Get Started Free
            </button>
            <button onClick={() => setShowAuthModal(true)} className="w-full sm:w-auto bg-gray-800 text-[#4ADE80] px-8 py-4 rounded-xl font-bold hover:bg-gray-700 transition-all">
              Try Demo
            </button>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <div id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose DebtDive?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our platform is designed to make debt tracking and expense sharing as
              simple and stress-free as possible.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-[#4ADE80] transition-colors"
              >
                <feature.icon className="h-12 w-12 text-[#4ADE80] mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.name}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Everything You Need</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Powerful features to help you manage shared expenses and maintain healthy
              financial relationships.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="flex items-start p-6 bg-gray-900 rounded-xl border border-gray-800"
              >
                <benefit.icon className="h-8 w-8 text-[#4ADE80] flex-shrink-0" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose the plan that best fits your needs. All plans include our core
              features to help you manage debts effectively.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan) => (
              <div
                key={plan.name}
                className={`bg-gray-900 rounded-xl border ${
                  plan.highlighted
                    ? 'border-[#4ADE80] scale-105'
                    : 'border-gray-800'
                } p-6 flex flex-col`}
              >
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-gray-400">{plan.period}</span>
                  )}
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-400">
                      <svg
                        className="h-5 w-5 text-[#4ADE80] mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => {
                    setAuthMode('signup');
                    setShowAuthModal(true);
                  }}
                  className={`w-full py-2 rounded-lg font-medium transition-colors ${
                    plan.highlighted
                      ? 'bg-[#4ADE80] text-black hover:bg-[#22c55e]'
                      : 'bg-gray-800 text-white hover:bg-gray-700'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center mb-8">
            <Image
              src="/logo.png"
              alt="DebtDive Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="ml-2 text-xl font-bold">DebtDive</span>
          </div>
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} DebtDive. All rights reserved.
          </p>
        </div>
      </footer>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        mode={authMode}
      />
    </div>
  );
}
