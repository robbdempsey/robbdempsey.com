
import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { CSharpIcon, ElasticIcon, NextJSIcon, NodeJsIcon, PostgresIcon, PythonIcon, ReactIcon } from '@/components/Icons'
import {
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import SocialLink from '@/components/SocialLink'
import WorkContent from '@/components/WorkContent'


export const metadata: Metadata = {
  title: 'Work',
  description:
    'Expert at aligning technology with business goals to provide the highest ROI.  A fast-paced strategist with deep experience helping companies through product discovery and development initiatives.',
}

export default function Work() {


  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <h2>
              Production Experience with:
            </h2>
          </div>
            <SocialLink href="https://nodejs.org" icon={NodeJsIcon} className="mt-3">JavaScript, TypeScript</SocialLink>
            <SocialLink href="https://www.python.org/" icon={PythonIcon} className="mt-3">Python</SocialLink>
            <SocialLink href="https://dotnet.microsoft.com/en-us/languages/csharp" icon={CSharpIcon} className="mt-3">C# & .NET</SocialLink>
            <SocialLink href="https://react.dev/" icon={ReactIcon} className="mt-3">React</SocialLink>
            <SocialLink href="https://nextjs.org/" icon={NextJSIcon} className="mt-3">Next.js</SocialLink>
            <SocialLink href="https://www.elastic.co/elasticsearch" icon={ElasticIcon} className="mt-3">Elasticsearch</SocialLink>
            <SocialLink href="https://www.postgresql.org/" icon={PostgresIcon} className="mt-3">PostgreSQL</SocialLink>

        </div>
        <div className="order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Product Focused CTO and Full-stack Engineer
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p key="p1">
              I've worked in technology for 20+ years across 7 different industries. During that time
              I have taken on roles of leadership and individual contributor, which have allowed
              me to pair my formal education in Business with my self-taught Software Development skills.
            </p>
            <p key="p2">
              For the past ten years I have been self-employed and have helped multiple client deliver
              projects ranging from $10k to $1M of investment. As a consultant I bring my knowledge
              of technical stacks and business solutions to the table while I focus on crafting code
              to produce what the client wants.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://github.com/robbdempsey" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/robbdempsey" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
          </ul>
        </div>
      </div>
      <WorkContent />
    </Container>
  )
}
