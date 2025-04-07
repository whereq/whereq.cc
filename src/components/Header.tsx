import { Dispatch, SetStateAction } from 'react'

interface HeaderProps {
  setNavOpen: Dispatch<SetStateAction<boolean>>
}

export default function Header({ setNavOpen }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 
                       h-12 bg-primary-dark 
                       bg-blue-900 text-orange-300
                       border-b-2 border-orange-700
                       z-10">
      <div className="flex items-center justify-between h-full px-4">
        <h1 className="text-xl font-bold text-accent-DEFAULT">WhereQ Crypto Coin</h1>
        <button 
          className="p-2 rounded-md hover:bg-secondary-dark transition-colors"
          onClick={() => setNavOpen(prev => !prev)}
        >
          ☰
        </button>
      </div>
    </header>
  )
}