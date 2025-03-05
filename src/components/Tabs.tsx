'use client' 

import clsx from 'clsx'

type Tab = {
	name: string;
}

interface ITabs {
	current: string;
	onClick: (tabName: string) => void;
	tabs: Tab[];
}

export default function Tabs({ current, onClick, tabs }: ITabs) {
	if (!tabs || (tabs && tabs.length === 0)) return null

	return (
		<div className="hidden sm:block">
      <div className="border-b border-zinc-700/40">
			  <nav aria-label="Tabs" className="-mb-px flex space-x-8">
			  	{tabs?.map(item => {
	  				return (
							<div
	              key={item.name}
	              aria-current={current ? 'page' : undefined}
	              className={clsx(
	                current === item.name
	                  ? 'border-zinc-100 text-zinc-100'
	                  : 'border-transparent text-zinc-600 dark:text-zinc-500 hover:border-zinc-500 hover:text-zinc-500 hover:cursor-pointer',
	                'whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium',
	              )}
	              onClick={() => onClick(item.name)}
	            >
	              {item.name}
	            </div>
  					)
			  	})}
			  </nav>
      </div>
    </div>
	)
}