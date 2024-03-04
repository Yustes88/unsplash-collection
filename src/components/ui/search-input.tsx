import Image from 'next/image'

export default function SearchInput() {
  return (
    <div className="w-full ">
      <label htmlFor="search"></label>
      <div className="relative mt-2 flex rounded-md shadow-sm">
        <input
          type="text"
          name="search"
          id="search"
          className="h-14 min-w-0 flex-auto rounded-md border-0 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-100 sm:text-sm sm:leading-6"
          placeholder="  Search high-resolution images from Unsplash"
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
