interface NavigationProps {
  navOpen: boolean
}

export default function Navigation({ navOpen }: NavigationProps) {
  return (
    <nav className={`flex flex-col 
                     bg-gray-900 text-orange-300
                     bg-secondary-dark transition-all 
                     duration-300 flex-shrink-0 ${navOpen ? 'w-40' : 'w-8'}`}>
      <ul className="p-2 space-y-2">
        <li className="p-2 hover:bg-primary-dark rounded cursor-pointer flex items-center">
          {navOpen ? 'Dashboard' : 'D'}
        </li>
        <li className="p-2 hover:bg-primary-dark rounded cursor-pointer flex items-center">
          {navOpen ? 'Profile' : 'P'}
        </li>
        <li className="p-2 hover:bg-primary-dark rounded cursor-pointer flex items-center">
          {navOpen ? 'Settings' : 'S'}
        </li>
      </ul>
    </nav>
  )
}