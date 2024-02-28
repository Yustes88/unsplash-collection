import {Loader2, Mail} from 'lucide-react'
import {Button} from '~/components/ui/button'

const HomePage = () => {
  return (
    <div className="container space-y-3">
      <h1 className="text-display font-semibold">Title - Be Vietnam</h1>
      <p className="text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, fugiat!
      </p>
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, fugiat!
      </p>

      <p className="text-dark-100 text-xs">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
        recusandae quisquam distinctio possimus id reiciendis quae quis
        consectetur voluptate perspiciatis repudiandae, facilis, tenetur illo
        repellendus, quidem quod debitis delectus ut.
      </p>

      <div className="flex items-center gap-5">
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
      </div>
    </div>
  )
}

export default HomePage
