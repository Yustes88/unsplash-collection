import {type ClassValue} from 'clsx'
import {Search} from 'lucide-react'
import {cn} from '~/lib/utils'
import {Input, type InputProps} from './input'

interface SearchInputProps {
  className?: ClassValue
}

export default function SearchInput({
  className,
  ...props
}: InputProps & SearchInputProps) {
  return (
    <div className="w-full">
      <label htmlFor="search"></label>
      <div className="relative mt-2 flex rounded-md shadow-sm">
        <Input
          {...props}
          type="text"
          name="search"
          id="search"
          className={cn('h-14', className)}
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <Search size={24} className="text-gray-100" />
        </div>
      </div>
    </div>
  )
}
