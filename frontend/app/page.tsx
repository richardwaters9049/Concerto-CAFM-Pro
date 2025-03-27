// Home Page Component
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-6xl font-bold bg-gradient-to-b from-blue-200 to-gray-600 text-transparent bg-clip-text p-6">Welcome to Concerto CAFM Pro</h1>
      <p className="mt-4 text-white text-4xl p-6">
        A modern facility management platform built with Next.js and Go.
      </p>
    </div>
  );
}
