import Image from 'next/image'
import React from 'react'

export function SearchResult() {
  const items = Array.from({length: 8}).map((_, index) => (
    <Image
      alt="Photo"
      key={index}
      width={400}
      height={400}
      src={`https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`}
    />
  ))

  return (
    <div>
      <div className="grid grid-cols-4 gap-4">{items}</div>
    </div>
  )
}
