import { Link } from 'react-router-dom';
import { Trello } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <div className="text-center space-y-6">
        <div className="flex items-center justify-center space-x-3">
          <Trello className="w-12 h-12 text-green-500" />
          <h1 className="text-5xl font-bold">TaskFlow</h1>
        </div>
        <Link
          to="/board"
          className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
        >
          Go to Kanban Board
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;