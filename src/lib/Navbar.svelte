<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import Moon from './icons/moon.svelte';
	import Sun from './icons/sun.svelte';
	import { Hamburger } from 'svelte-hamburgers';
	import SmallLogoLayers from './SmallLogoLayers.svelte';

	let open: boolean = false;
	let nav: HTMLElement;
	let hamburgerBtn: HTMLDivElement;

	const navs = [
		{
			title: 'Home',
			href: '/'
		},
		{
			title: 'Services',
			href: '/services'
		},

		{
			title: 'Shows & Competitions',
			href: '/shows-and-competitions'
		},
		{
			title: 'Clinics',
			href: '/clinics'
		},
		{
			title: 'Meet Pam Bauer',
			href: '/meet-pam-bauer'
		},
		{
			title: 'Contact',
			href: '/contact'
		}
	];

	let currentTheme = '';

	// Close menu when clicking outside
	function handleClickOutside(event: MouseEvent | TouchEvent) {
		const target = event.target as Node;
		if (open && nav && !nav.contains(target) && !hamburgerBtn.contains(target)) {
			open = false;
		}
	}

	// Close menu when clicking a link
	function handleLinkClick() {
		open = false;
	}

	onMount(() => {
		// currentTheme = document.documentElement.dataset.theme;
		const userPrefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

		const hasUserSetDarkModeManually = document.documentElement.dataset.theme == 'dark';

		if (!hasUserSetDarkModeManually) {
			setTheme(userPrefersDarkMode ? 'dark' : 'light');
		}

		document.addEventListener('click', handleClickOutside);
		document.addEventListener('touchstart', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
			document.removeEventListener('touchstart', handleClickOutside);
		};
	});

	const setTheme = (theme: string) => {
		document.documentElement.dataset.theme = theme;
		document.cookie = `siteTheme=${theme};max-age=31536000;path="/"`;
		currentTheme = theme;
	};

	$: url = $page.url.href;
	$: routeId = $page.url.pathname;
</script>

<div class="bg-color" data-theme={currentTheme}>
	<header class="header-wrap">
		<div class="flex">
			<a class="logo flex" href="/">
				<SmallLogoLayers />
				<span class="serif site-title">German Magic Farm</span>
			</a>

			<!-- begin dark light toggle code -->
			<div class="move-moon relative">
				{#if currentTheme == 'light'}
					<a class="moon" href={'#'} on:click={() => setTheme('dark')}>
						<Moon />
					</a>
				{:else}
					<a class="sun" href={'#'} on:click={() => setTheme('light')}>
						<Sun />
					</a>
				{/if}
			</div>
		</div>
		<div class="menu-toggle-btn">
			{#if open}
				<div class="relative">
					<nav class="color-border" bind:this={nav}>
						<ul class="flow-bottom text-left">
							{#each navs as { title, href }}
								<li>
									<a
										{href}
										class:active={href === '/' ? routeId === '/' : url.includes(href)}
										{title}
										on:click={handleLinkClick}
									>
										{title}
									</a>
								</li>
							{/each}
						</ul>
					</nav>
				</div>
			{/if}

			<div bind:this={hamburgerBtn}>
				<Hamburger bind:open />
			</div>
		</div>
	</header>
</div>

<style>
	.bg-color {
		background-color: var(--header-color);
	}
	.header-wrap {
		width: min(97%, 1230px);
		margin-inline: auto;
		padding-top: 0.5em;
	}
	.flex {
		display: flex;
	}
	.text-left {
		justify-content: flex-start;
	}

	span {
		font-size: var(--fs-400);
		font-weight: 700;
		line-height: 1;
		margin-left: 0.5em;
	}

	a.logo {
		color: var(--logo-color);
		align-items: center;
	}

	a.logo:hover {
		color: var(--logo-color);
		align-items: center;
		border-bottom: 3px solid transparent;
	}
	.sun:hover, .moon:hover {
		border-bottom: 3px solid transparent;
	}

	.site-title {
		font-size: var(--fs-500);
		font-weight: 700;
	}

	[data-theme='dark'] a.logo {
		color: var(--heading-color);
	}

	span {
		padding-left: 8px;
	}

	.moon {
		color: var(--interactive-color);
	}

	.move-moon {
		margin-left: auto;
		padding-right: 1em;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	nav {
		padding: 0.5em;
		background-color: var(--sand-8);
		color: white;
		border-bottom: 3px solid #ffcd02;
		z-index: 5;
		position: absolute;
		margin-top: 60px;
		left: 0;

		@media (max-width: 480px) {
			width: 100%;
		}
	}
	.relative {
		position: relative;
	}

	.color-border:after {
		background: linear-gradient(
			to right,
			#000 25%,
			#ffcd02 25%,
			#ffcd02 50%,
			#e84f47 50%,
			#e84f47 75%,
			#000 75%
		);
		position: absolute;
		content: '';
		height: 4px;
		right: 0;
		left: 0;
		top: 0;
	}

	ul {
		display: flex;
		flex-direction: column;
		text-align: left;
		padding: 0 0.5rem;
		list-style: none;
		font-size: 1.5em;
	}

	a {
		text-decoration: none;
		color: var(--sand-2);
		font-family: 'Montserrat', sans-serif;
		font-weight: 400;
		border-bottom: 3px solid transparent;
	}
	a:hover {
		border-bottom: 3px solid var(--stone-1);
	}
	.logo {
		color: white;
	}
	.active {
		color: white;
		border-bottom: 3px solid var(--interactive-color);

	}
</style>
