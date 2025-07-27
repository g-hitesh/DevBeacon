import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to DevBeacon</h1>
        <p className="text-lg text-center mb-8">
          A community platform for developers to share knowledge and connect
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white  p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Featured Articles</h2>
            <p className="text-gray-600 ">
              Discover the latest articles from our community of developers.
            </p>
          </div>
          
          <div className="bg-white  p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Join the Community</h2>
            <p className="text-gray-600 ">
              Connect with other developers, share your knowledge, and grow together.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}