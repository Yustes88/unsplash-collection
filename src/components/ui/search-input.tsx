import Image from 'next/image'

export default function SearchInput() {
  return (
    <div>
      <label htmlFor="search"></label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          type="text"
          name="search"
          id="search"
          className="block w-full flex-1 rounded-md border-0 py-2.5 pl-5 pr-60 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Enter your keywords..."
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <Image
            src="svg/Search.svg"
            alt="Search image"
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>
  )
}
