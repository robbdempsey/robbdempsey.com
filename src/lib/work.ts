import { type ImageProps } from 'next/image'

export type Role = {
  company: string
  title: string
  description: string
  logo?: ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
  technologies: string[]
}

const contract: Role[] = [
	{
		company: "E-commerce Product Discovery",
		description: "Worked with a globally distributed team building a headless solution for online product discovery. The work included backend APIs and data persistence, as well as, storefront product listing pages for major US/UK based retailers.",
		title: "Full-stack Engineer",
		start: "2 years",
		end: "",
		technologies: ["React", "TypeScript", "PostgreSQL", "GraphQL", "Shopify", "NestJS", "Elasticsearch", "BigCommerce", "Redis"],
	},
	{
		company: "Financial Technology Platform",
		description: "This was greenfield project that targeted companies focusing on residential home services. The goal being to help lift the burden of billing from the back offices of the potential customers. During the two year period with the client we designed and built a subscription billing platform and the project wrapped up with the first paying customer on the platform.",
		title: "Full-stack Engineer",
		start: "2 years",
		end: "",
		technologies: ["React", "Node.js", "AWS", "Serverless", "GraphQL", "Amazon Lambda", "DynamoDB", "Amazon SQS", "Apollo"],
	},
	{
		company: "Library Management System",
		description: "Designed and built a messaging application for an existing library management platform. Created a data management backend, on top of AWS’s Pinpoint, to facilitate desired user experience on the frontend. Worked with product and design teams to build UI in React/TypeScript.",
		title: "Full-stack Engineer",
		start: "6 months",
		end: "",
		technologies: ["React", "Node.js", "AWS", "PostgreSQL", "TypeScript"],
	},
	{
		company: "Medical Device Supply Platform",
		description: "I worked with the Operations team to establish business rules for filing insurance claims. After defining the rules, I developed a RESTful API to ensure they were followed by partner systems referring fulfillment orders to the client.",
		title: "Backend Engineer",
		start: "1 year",
		end: "",
		technologies: ["Scala", "Rest API"],
	},
	{
		company: "Human Capital Management",
		description: "I focused on orchestration and data persistence in an event-driven architecture, building both frontend and backend systems to help the business query PII data.",
		title: "Backend Engineer",
		start: "18 months",
		end: "",
		technologies: ["React", "Node.js", "PostgreSQL", "Docker", "Rest API"],
	},
	{
		company: "Gaming Platform",
		description: "Worked with a team to implement 3rd party SDKs that will allow for streaming of video content to groups of friends.",
		title: "Full-stack Engineer",
		start: "3 months",
		end: "",
		technologies: ["React", "Next.js", "Stripe"],
	},
	{
		company: "Health Insurance",
		description: "Created a backend proxy layer that helps facilitate insurance eligibility quotes.",
		title: "Backend Engineer",
		start: "6 months",
		end: "",
		technologies: ["Node.js", "TypeScript"],
	}
]

const fte = [
	{
		company: "Solid Earth",
		description: "I was brought on board to turn around Solid Earth’s product development efforts and lead the creation of a new product.  In addition to this product being nominated for two innovation awards in our industry, we realized our first new revenue in 4 years and enjoyed a 41% growth in our user base. Solid Earth was acquired in 2017.",
		title: "Chief Technology Officer",
		start: "March 2011",
		end: "March 2015",
		technologies: ["C#", "Angular 1.0", "Node.js"],
	},
	{
		company: "Fishbowl",
		description: "While I was at VC-backed Fishbowl, we scaled from 18-150 employees, and grew annual revenue from $1 million to $15 million.  The last product my 13-person team worked on enjoyed 30% revenue growth for four years straight. Fishbowl was acquired in 2017 by STG Partners.",
		title: "Development Manager/Senior Developer/Consultant",
		start: "May 2003",
		end: "March 2011",
		technologies: ["C#", "port25", "unitymail", "perl", "ASP.net"],
	},
	{
		company: "MessageMedia",
		description: "I implemented and supported the email marketing platform UnityMail for US and European clients.  Working with engineering and sales teams, I created an upsell product that produced top-line revenues.",
		title: "Professional Services Consultant/Support Engineer",
		start: "August 2000",
		end: "March 2002",
		technologies: [],
	}
]

export { contract, fte }
export default contract
