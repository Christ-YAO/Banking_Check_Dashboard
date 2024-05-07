"use client";

import { Plus, SearchIcon } from "lucide-react";
import Link from "next/link";

export default function Search({setSearchValue}: {setSearchValue: string}) {
  return (
    <div className="flex gap-4">
      <div className="relative flex flex-1 flex-shrink-0">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 outline-blue-600"
          placeholder="Rechercher un chéquier"
          // onChange={e => handleSearch(e.target.value)}
          // defaultValue={searchParams.get('query')?.toString()}
          onChange={e => setSearchValue(e.target.value)}
        />
        <SearchIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
      </div>
      <Link
        href="/dashboard/save-check"
        className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        <span className="hidden md:block">Enregistrer chèque</span>{" "}
        <Plus className="h-5 md:ml-4" />
      </Link>
    </div>
  );
}
