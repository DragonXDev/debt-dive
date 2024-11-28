"use client"
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  HomeIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  QuestionMarkCircleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline'

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
    { name: 'Friends', href: '/dashboard/friends', icon: UserGroupIcon },
    { name: 'Debts', href: '/dashboard/debts', icon: CurrencyDollarIcon },
    { name: 'Analytics', href: '/dashboard/analytics', icon: ChartBarIcon },
  ]

  const bottomNavigation = [
    { name: 'Settings', href: '/dashboard/settings', icon: Cog6ToothIcon },
    { name: 'Support', href: '/dashboard/support', icon: QuestionMarkCircleIcon },
  ]

  return (
    <div className={`fixed top-0 left-0 h-full bg-gray-900 border-r border-gray-800 transition-all duration-300 ${
      collapsed ? 'w-16' : 'w-64'
    }`}>
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          {!collapsed && (
            <Link href="/" className="text-xl font-bold text-[#4ADE80] hover:opacity-80 transition-opacity">
              DebtDive
            </Link>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1 rounded-lg text-gray-400 hover:text-[#4ADE80] hover:bg-gray-800 transition-colors"
          >
            {collapsed ? (
              <ChevronRightIcon className="w-5 h-5" />
            ) : (
              <ChevronLeftIcon className="w-5 h-5" />
            )}
          </button>
        </div>

        <nav className="flex-1 space-y-8 p-4">
          <div className="space-y-4">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-[#4ADE80] text-black'
                      : 'text-gray-400 hover:text-[#4ADE80] hover:bg-gray-800'
                  }`}
                >
                  <item.icon className="w-6 h-6 flex-shrink-0" />
                  {!collapsed && <span>{item.name}</span>}
                </Link>
              )
            })}
          </div>

          <div className="space-y-4">
            {bottomNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-3 p-3 rounded-lg text-gray-400 hover:text-[#4ADE80] hover:bg-gray-800 transition-colors"
              >
                <item.icon className="w-6 h-6 flex-shrink-0" />
                {!collapsed && <span>{item.name}</span>}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </div>
  )
}
