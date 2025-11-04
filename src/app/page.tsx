import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'

import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'

import image1 from '@public/images/aspens-crested-butte.jpg'
import image2 from '@public/images/south-platte-headwaters.jpg'
import image3 from '@public/images/trout.jpg'
import image4 from '@public/images/kings-college-garden.jpg'
import image5 from '@public/images/st-elmo.jpg'

import { formatDate } from '@/lib/formatDate'

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  console.log(image1)

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default async function Home() {

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Fullstack Software Engineer, Outdoorsman.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Hey, I'm Robb! Most days you can find me clicking a keyboard
            and building products for the clients I work with. When I'm
            not at the computer you will find me somewhere in the outdoors.
            I'm currently living just outside of Nashville, TN.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com/robbdempsey"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/robbdempsey/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
    </>
  )
}
