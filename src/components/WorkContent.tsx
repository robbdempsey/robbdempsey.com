'use client';

import { useState } from 'react'

import Tabs from '@/components/Tabs'
import WorkSection from '@/components/WorkSection'
import { contract, fte, Role } from '@/lib/work'
import { CONTRACT_WORK, FTE_WORK } from '@/lib/constants'

const tabs = [
  { name: CONTRACT_WORK },
  { name: FTE_WORK }
]

export default function WorkContent() {
	const [currentTab, setCurrentTab] = useState<string>(CONTRACT_WORK)
	
	return (
		<div className="grid grid-cols-1 gap-y-16 lg:grid-rows-[auto_1fr] lg:gap-y-12 mt-10">
      <Tabs
        current={currentTab}
        onClick={(name) => name && setCurrentTab(name)}
        tabs={tabs}
      />

      {currentTab === CONTRACT_WORK && (
				contract?.map((item) => <WorkSection key={`worksection-${item.company}-${item.title}`} role={item} type={CONTRACT_WORK}/>)
    	)}

      {currentTab === FTE_WORK && (
				fte?.map((item) => <WorkSection key={`worksection-${item.company}-${item.title}`} role={item} type={FTE_WORK} />)
    	)}
    </div>
	)
}