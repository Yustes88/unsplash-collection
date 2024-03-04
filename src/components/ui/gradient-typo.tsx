import React, {type ReactNode} from 'react'

type HeadingProps = {
  children: ReactNode
  heading: string
}

export const GradientTypo: React.FC<HeadingProps> = ({children, heading}) => {
  return (
    <div className="space-y-4 text-center">
      <h1 className="gradient-text animate-gradient text-display font-semibold capitalize text-transparent">
        {heading}
      </h1>
      {children}
    </div>
  )
}
