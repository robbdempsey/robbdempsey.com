'use client';

import Card from '@/components/Card'
import { Section } from '@/components/Section'
import { Role } from '@/lib/work'
import { CONTRACT_WORK, FTE_WORK } from '@/lib/constants'

interface IWorkSection {
	role: Role;
	type: string;
}

const Detail = ({ role, type }: IWorkSection) => {
	let duration = '';
	const { description, end, start, technologies = [], title } = role;

	if (type === CONTRACT_WORK && start) {
		duration = `duration: ${start}`
	}

	if (type === FTE_WORK && start) {
		const endDate = end ? ` - ${end}` : ' - present'
		duration = `dates: ${start}${endDate}`
	}

	return (
		<Card as="article">
			<Card.Title as="h3">
				{title}
			</Card.Title>

			<Card.Description>{description}</Card.Description>

			{technologies.length > 0 && (
				<div className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"	>
					technologies: {technologies.sort().map((item, index) => {
						return index === technologies.length -1 ? item.toLowerCase() : `${item.toLowerCase()}, `
	            	})}
				</div>
			)}

			{duration && (
				<div className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"	>
					<span>{duration}</span>
				</div>
			)}
		</Card>
	)
}



export default function WorkSection({ role, type }: IWorkSection) {

	return (
		<Section title={role.company}>
			<Detail role={role} type={type} />
		</Section>
	)
}