import { 
  FiChevronLeft, 
  FiChevronRight, 
  FiChevronsLeft, 
  FiChevronsRight 
} from 'react-icons/fi';

export default function CustomPagination({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
  totalItems = 0,
  itemsPerPage = 6,
  onItemsPerPageChange,
  itemsPerPageOptions = [6, 12, 24, 48]
}) {
  if (totalPages <= 0) return null;

  // Calculate dynamic page numbers array with ellipsis
  const getPageNumbers = () => {
    const pages = [];
    const delta = 1;

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - delta && i <= currentPage + delta)
      ) {
        pages.push(i);
      } else if (
        (i === currentPage - delta - 1 && i > 1) ||
        (i === currentPage + delta + 1 && i < totalPages)
      ) {
        pages.push('...');
      }
    }

    return pages.filter((page, index, array) => page !== '...' || array[index - 1] !== '...');
  };

  const startItem = totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900/90 text-white border border-slate-800 rounded-2xl p-4 shadow-xl backdrop-blur-md font-sans">
      
      {/* Counter Info & Items Per Page Selector */}
      <div className="flex items-center gap-4 text-xs text-slate-400">
        <span>
          Showing <strong className="text-white font-bold">{startItem}</strong> - <strong className="text-white font-bold">{endItem}</strong> of <strong className="text-[#ff5500] font-bold">{totalItems}</strong> items
        </span>

        {onItemsPerPageChange && (
          <div className="flex items-center gap-2 border-l border-slate-800 pl-4">
            <label htmlFor="perPageSelect" className="text-slate-400">Per page:</label>
            <select
              id="perPageSelect"
              value={itemsPerPage}
              onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
              className="bg-slate-800 text-white border border-slate-700 rounded-lg px-2 py-1 text-xs focus:outline-none focus:border-[#ff5500] cursor-pointer"
            >
              {itemsPerPageOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center gap-1.5">
        
        {/* First Page */}
        <button
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
          aria-label="First page"
          className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:bg-[#ff5500] hover:text-white disabled:opacity-40 disabled:hover:bg-slate-800 border border-slate-700/60 transition-all cursor-pointer disabled:cursor-not-allowed"
        >
          <FiChevronsLeft className="w-4 h-4" />
        </button>

        {/* Prev Page */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Previous page"
          className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:bg-[#ff5500] hover:text-white disabled:opacity-40 disabled:hover:bg-slate-800 border border-slate-700/60 transition-all cursor-pointer disabled:cursor-not-allowed flex items-center gap-1 text-xs px-3"
        >
          <FiChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Prev</span>
        </button>

        {/* Page Number Buttons */}
        <div className="flex items-center gap-1 mx-1">
          {getPageNumbers().map((page, idx) => {
            if (page === '...') {
              return (
                <span key={`ellipsis-${idx}`} className="px-2 text-slate-500 text-xs font-bold">
                  ...
                </span>
              );
            }

            const isCurrent = page === currentPage;
            return (
              <button
                key={page}
                onClick={() => onPageChange(page)}
                className={`min-w-[36px] h-9 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  isCurrent
                    ? 'bg-gradient-to-r from-[#ff5500] to-amber-500 text-white shadow-lg shadow-orange-500/30 border border-orange-400 scale-105'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/50'
                }`}
              >
                {page}
              </button>
            );
          })}
        </div>

        {/* Next Page */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Next page"
          className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:bg-[#ff5500] hover:text-white disabled:opacity-40 disabled:hover:bg-slate-800 border border-slate-700/60 transition-all cursor-pointer disabled:cursor-not-allowed flex items-center gap-1 text-xs px-3"
        >
          <span className="hidden sm:inline">Next</span>
          <FiChevronRight className="w-4 h-4" />
        </button>

        {/* Last Page */}
        <button
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
          aria-label="Last page"
          className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:bg-[#ff5500] hover:text-white disabled:opacity-40 disabled:hover:bg-slate-800 border border-slate-700/60 transition-all cursor-pointer disabled:cursor-not-allowed"
        >
          <FiChevronsRight className="w-4 h-4" />
        </button>

      </div>

    </div>
  );
}
