import { TechnologyItem } from '@/src/types/index'
import { TechnologyImgs } from '@/src/types/index'
import github from '@/public/icons/github2.svg'
import react from '@/public/icons/react.svg'
import nextjs from '@/public/icons/nextdotjs.svg'
import js from '@/public/icons/javascript.svg'
import html from '@/public/icons/html5.svg'
import css from '@/public/icons/css.svg'
import ts from '@/public/icons/typescript.svg'
import python from '@/public/icons/python.svg'
import tailwindcss from '@/public/icons/tailwindcss.svg'
import figma from '@/public/icons/figma.svg'
import git from '@/public/icons/git.svg'

export const TechnologyItems: TechnologyItem[] = [
	{
		id: 1,
		heading: 'Languages:',
		key: 'languages',
	},
	{
		id: 2,
		heading: 'Framework:',
		key: 'framework',
	},
	{
		id: 3,
		heading: 'Tools:',
		key: 'tools',
	},
]

export const TechnologyImg: Record<string, TechnologyImgs[]> = {
	languages: [
		{
			id: 1,
			img: js,
			alt: 'Logo of javascript',
		},
		{
			id: 2,
			img: ts,
			alt: 'Logo of typescript',
		},
		{
			id: 3,
			img: html,
			alt: 'Logo of html',
		},
		{
			id: 4,
			img: css,
			alt: 'Logo of css',
		},
		{
			id: 5,
			img: python,
			alt: 'Logo of python',
		},
	],
	framework: [
		{
			id: 1,
			img: nextjs,
			alt: 'Logo of NextJs',
		},
		{
			id: 2,
			img: react,
			alt: 'Logo of react',
		},
	],
	tools: [
		{
			id: 1,
			img: tailwindcss,
			alt: 'Logo of tailwindcss',
		},
		{
			id: 2,
			img: git,
			alt: 'Logo of git',
		},
		{
			id: 3,
			img: github,
			alt: 'Logo of github',
		},
		{
			id: 4,
			img: figma,
			alt: 'Logo of figma',
		},
	],
}
