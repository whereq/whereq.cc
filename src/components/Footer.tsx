export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 h-12 
                       flex items-center justify-center
                       bg-primary-dark z-10
                       bg-gray-700 text-orange-300
                       font-medium 
                       border-t-2 border-orange-700">
      <div className="flex items-center justify-center h-full">
        <p className="text-sm">© {new Date().getFullYear()} WhereQ.cc --- Crypto Coin</p>
      </div>
    </footer>
  )
}