export default function Home() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
            <main className="text-center p-8">
                <h1 className="text-5xl font-bold text-blue-900 mb-4">
                    Flood Rescue & Relief
                </h1>
                <p className="text-xl text-blue-700 mb-8">
                    Emergency Coordination System
                </p>
                <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Welcome to the Dashboard
                    </h2>
                    <p className="text-gray-600">
                        This system helps coordinate flood rescue operations and relief efforts.
                    </p>
                </div>
            </main>
        </div>
    );
}
