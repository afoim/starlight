import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://onani.cn',
	integrations: [
		starlight({
			title: 'AcoFork Docs',
			favicon: '/AcoFork.png',
			disable404Route: true,
			locales: {
				root: {
				  label: '简体中文',
				  lang: 'zh-CN',
				},
			  },
			editLink: {
				baseUrl: 'https://github.com/afoim/starlight/edit/main/docs/',
			},
			logo: {
				src: '/public/AcoFork.webp',
				alt: 'AcoFork Docs',
			},
			social: {
				github: 'https://github.com/afoim',
			},
			sidebar: [
				{
				  label: '开始',
				  items: [
					{ label: '快速开始', link: '/start' }
				  ],
				},
				{
				  label: '部署QQBot',
				  items: [
					{ label: 'NapCat', link: '/qqbot/napcat' }
				  ],
				},
			],
		}),
	],
});
