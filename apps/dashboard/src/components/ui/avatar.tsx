'use client'

import * as React from 'react'

export function Avatar({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ' + className}
      {...props}
    />
  )
}

export function AvatarImage({ className, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      className={'aspect-square h-full w-full ' + className}
      {...props}
    />
  )
}

export function AvatarFallback({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={'flex h-full w-full items-center justify-center rounded-full bg-muted ' + className}
      {...props}
    />
  )
}
