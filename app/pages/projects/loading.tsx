export default function Loading() {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">
        <div className="space-y-4 mb-12 animate-pulse">
          <div className="h-10 w-48 bg-slate-200 dark:bg-slate-800 rounded-lg"></div>
          <div className="h-4 w-full max-w-2xl bg-slate-200 dark:bg-slate-800 rounded-lg"></div>
        </div>
  
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-64 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-slate-900 animate-pulse"></div>
          ))}
        </div>
      </div>
    );
  }