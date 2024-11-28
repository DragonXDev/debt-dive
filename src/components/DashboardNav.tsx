"use client"
import { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { BellIcon, UserCircleIcon, FunnelIcon } from '@heroicons/react/24/outline';

const filters = {
  status: ['All', 'Pending', 'Paid', 'Overdue'],
  type: ['All', 'Owed to me', 'I owe'],
  timeframe: ['All time', 'This month', 'Last month', 'This year'],
  amount: ['All', 'Under $50', '$50 - $200', 'Over $200'],
};

export default function DashboardNav() {
  const [activeFilters, setActiveFilters] = useState({
    status: 'All',
    type: 'All',
    timeframe: 'All time',
    amount: 'All',
  });

  return (
    <div className="h-16 bg-gray-900/50 backdrop-blur-sm border-b border-gray-800">
      <div className="h-full px-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {Object.entries(filters).map(([category, options]) => (
            <Menu as="div" className="relative" key={category}>
              <Menu.Button className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-300 hover:text-white rounded-lg hover:bg-gray-800">
                <FunnelIcon className="w-4 h-4" />
                {category.charAt(0).toUpperCase() + category.slice(1)}
                <span className="text-[#4ADE80]">{activeFilters[category as keyof typeof activeFilters]}</span>
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-lg bg-gray-900 shadow-lg ring-1 ring-gray-800 focus:outline-none">
                  <div className="py-1">
                    {options.map((option) => (
                      <Menu.Item key={option}>
                        {({ active }) => (
                          <button
                            onClick={() => setActiveFilters({
                              ...activeFilters,
                              [category]: option,
                            })}
                            className={`
                              ${active ? 'bg-gray-800 text-white' : 'text-gray-300'}
                              ${activeFilters[category as keyof typeof activeFilters] === option ? 'text-[#4ADE80]' : ''}
                              group flex w-full items-center px-4 py-2 text-sm
                            `}
                          >
                            {option}
                          </button>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          ))}
        </div>
        
        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-400 hover:text-[#4ADE80] rounded-lg relative">
            <BellIcon className="w-6 h-6" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-[#4ADE80] rounded-full"></span>
          </button>
          <div className="h-8 w-px bg-gray-800"></div>
          <Menu as="div" className="relative">
            <Menu.Button className="flex items-center gap-3">
              <span className="text-sm text-gray-300">John Doe</span>
              <UserCircleIcon className="w-8 h-8 text-gray-400 hover:text-[#4ADE80]" />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-lg bg-gray-900 shadow-lg ring-1 ring-gray-800 focus:outline-none">
                <div className="py-1">
                  {[
                    { name: 'Your Profile', href: '/dashboard/profile' },
                    { name: 'Settings', href: '/dashboard/settings' },
                    { name: 'Sign out', href: '/logout' },
                  ].map((item) => (
                    <Menu.Item key={item.name}>
                      {({ active }) => (
                        <a
                          href={item.href}
                          className={`
                            ${active ? 'bg-gray-800 text-white' : 'text-gray-300'}
                            block px-4 py-2 text-sm
                          `}
                        >
                          {item.name}
                        </a>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  );
}
