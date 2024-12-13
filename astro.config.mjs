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
				baseUrl: 'https://github.com/afoim/starlight/edit/main/',
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
					'start',
				  ],
				},
				{
					label: '绕GFW',
					items: [
					  'bypass-gfw',
					],
				},
				{
				  label: '部署QQBot',
				  items: [
					'qqbot/napcat',
					'qqbot/nonebot2',
				  ],
				},
			],
		}),
	],
});
