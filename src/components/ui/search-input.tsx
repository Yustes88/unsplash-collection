import Image from 'next/image'

export default function SearchInput() {
  return (
    <div className='w-full sm:w-[32rem]'>
      <label htmlFor="search"></label>
      <div className="relative flex mt-2 rounded-md shadow-sm">
        <input
          type="text"
          name="search"
          id="search"
          className="min-w-0 h-14 flex-auto rounded-md border-0 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-100 sm:text-sm sm:leading-6"
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
