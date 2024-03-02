import {Loader2, Mail} from 'lucide-react'
import {Button} from '~/components/ui/button'
import SearchInput from '~/components/ui/search-input'

const HomePage = () => {
  return (
    <main className="relative isolate mt-16 min-h-full">
      <img
        src="/images/hero-image.png"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-2 px-6 h-[510px] pb-32 text-center lg:px-8">
        <h1 className="text-display font-bold tracking-tight">Search</h1>
        <p className="mt-2 text-sm">
          Search high-resolution images from Unsplash
        </p>
        <SearchInput />
      </div>

      {/*
      <h1 className="text-display font-semibold">Title - Be Vietnam</h1>
      <p className="text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, fugiat!
      </p>
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, fugiat!
      </p>

      <p className="text-xs text-dark-100">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
        recusandae quisquam distinctio possimus id reiciendis quae quis
        consectetur voluptate perspiciatis repudiandae, facilis, tenetur illo
        repellendus, quidem quod debitis delectus ut.
      </p> */}

      {/*  <div className="flex items-center gap-5">
        <Button variant="outline">Outline</Button>
        <Button variant="default">Default</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="link">Link</Button>
        <Button disabled icon={<Loader2 className="size-4 animate-spin" />}>
          Please wait
        </Button>
        <Button variant="secondary" icon={<Mail className=" size-4" />}>
          Login with Email
        </Button>
      </div> */}
    </main>
  )
}

export default HomePage
