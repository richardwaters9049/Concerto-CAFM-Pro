import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-gradient-to-b from-blue-200 to-gray-800 p-4">
            <div className="container mx-auto flex justify-between">
                <Link href="/" className="text-white text-xl font-bold">
                    Concerto CAFM Pro
                </Link>
            </div>
        </nav>
    );
}
