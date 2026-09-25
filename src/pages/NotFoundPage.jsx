import { Link } from 'react-router-dom';
import { FiHome, FiAlertCircle } from 'react-icons/fi';

export default function NotFoundPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center max-w-7xl mx-auto px-4 py-16 text-center">
      <div className="space-y-6 max-w-md">
        <div className="w-20 h-20 rounded-3xl bg-primary/10 border border-indigo-500/20 text-primary flex items-center justify-center mx-auto">
          <FiAlertCircle className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <h1 className="text-6xl font-extrabold text-black">404</h1>
          <h2 className="text-2xl font-bold text-slate-600">Page Not Found</h2>
          <p className="text-slate-400 text-sm">
            The page you are looking for might have been removed or is temporarily unavailable.
          </p>
        </div>

        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-primary hover:bg-primary text-white font-semibold text-sm transition-all shadow-lg shadow-primary/30"
          >
            <FiHome className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
