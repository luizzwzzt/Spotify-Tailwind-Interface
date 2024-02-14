import { HomeIcon, Library, Search } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <div className=" flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>

      <nav className="space-y-5 mt-10">
        <a href="" className="flex items-center gap-3 text=xs font-semibold text-zinc-200">
          <HomeIcon />
          Home
        </a>

        <a href="" className="flex items-center gap-3 text=xs font-semibold text-zinc-200">
          <Search />
          Search
        </a>

        <a href="" className="flex items-center gap-3 text=xs font-semibold text-zinc-200">
          <Library />
          You Library
        </a>
      </nav>

      <nav className="mt-10 pt-10 border-t border-zinc-800 flex flex-col gap-3">
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Hot Hills Brasil
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Funk Brasil 2017
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Funk Brasil 2024
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          MTG Brasil 4
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Phonk Music
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Bruno Mars
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Taylor Swift
        </a>
      </nav>
    </aside>
  );
}
