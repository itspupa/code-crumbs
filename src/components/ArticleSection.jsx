import { Search, ChevronDown } from "lucide-react";

export default function ArticleSection() {
  return (
    <div className="w-full max-w-7xl mx-auto md:px-6 lg:px-8 mb-10">
      <h2 className="text-xl font-bold mb-4 px-4">Latest articles</h2>
      <div className="bg-[#EFEEEB] px-4 py-4 md:py-3 md:rounded-sm flex flex-col space-y-4 md:flex-row-reverse md:items-center md:space-y-0 md:justify-between">
        <div className="w-full md:max-w-sm">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#75716B] bg-[#FFFFFF]" />
            <input
              type="text"
              placeholder="Search"
              className="w-full py-3 px-3 rounded-sm border border-[#DAD6D1] text focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
          </div>
        </div>
        <div className="md:hidden w-full">
          <label className="block text-sm font-medium text-[#75716B] mb-2">Category</label>
          <div className="relative">
            <select className="w-full py-3 px-3 rounded-sm border border-[#DAD6D1] focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white appearance-none">
              <option value="highlight">Highlight</option>
              <option value="cat">Cat</option>
              <option value="inspiration">Inspiration</option>
              <option value="general">General</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>
        <div className="hidden md:flex space-x-2">
          <button
            className="px-4 py-3 transition-colors rounded-sm text-sm text-[#43403B] font-medium bg-[#DAD6D1]"
          >
            Highlight
          </button>
          <button
            className="px-4 py-3 transition-colors rounded-sm text-sm text-[#75716B] font-medium"
          >
            Cat
          </button>
          <button
            className="px-4 py-3 transition-colors rounded-sm text-sm text-[#75716B] font-medium"
          >
            Inspiration
          </button>
          <button
            className="px-4 py-3 transition-colors rounded-sm text-sm text-[#75716B] font-medium"
          >
            General
          </button>
        </div>
      </div>
    </div>
  );
}