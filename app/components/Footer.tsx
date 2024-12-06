export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6"> {/* Updated background color */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>&copy; {new Date().getFullYear()} Genesis Global Youth Impact IT Team. All rights reserved.</p>
      </div>
    </footer>
  )
}

