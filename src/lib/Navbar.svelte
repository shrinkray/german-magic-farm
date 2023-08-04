<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import Moon from './icons/moon.svelte';
	import Sun from './icons/sun.svelte';
	import { Hamburger } from 'svelte-hamburgers';

	let open;

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
			title: 'Meet Pam Bauer',
			href: '/meet-pam-bauer'
		},
		{
			title: 'Clinics',
			href: '/clinics'
		},
		{
			title: 'Contact',
			href: '/contact'
		}
	];

	let currentTheme = '';

	onMount(() => {
		// currentTheme = document.documentElement.dataset.theme;
		const userPrefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

		const hasUserSetDarkModeManually = document.documentElement.dataset.theme == 'dark';

		if (!hasUserSetDarkModeManually) {
			setTheme(userPrefersDarkMode ? 'dark' : 'light');
		}
	});

	const setTheme = (theme) => {
		document.documentElement.dataset.theme = theme;
		document.cookie = `siteTheme=${theme};max-age=31536000;path="/"`;
		currentTheme = theme;
	};

	$: url = $page.url.href;
	$: routeId = $page.url.pathname;
</script>

<div class="flex">
	<a class="logo flex" href="/">
		<img src="./german-magic-farm-logo-short.svg" alt="" />
		<span>German Magic Farm</span>
	</a>

	{#if open}
		<div class="relative">
			<!-- show menu -->
			<nav class="color-border">
				<ul>
					{#each navs as { title, href }}
						<li>
							<a {href} class:active={href === '/' ? routeId === '/' : url.includes(href)} {title}
								>{title}</a
							>
						</li>
					{/each}
				</ul>
			</nav>
		</div>
	{/if}

	<Hamburger bind:open />
	<!-- begin dark light toggle code -->
	<div class="relative move-moon">
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

<style>
	.flex {
		display: flex;
		align-items: center;
	}

	span {
		font-size: var(--fs-400);
		font-weight: 700;
	}

	a.logo {
		color: var(--color);
		align-items: center;
	}

	span {
		padding-left: 8px;
	}

	.moon {
		color: var(--primary-color);
	}

	.move-moon {
		margin-left: auto;
		padding-right: 1em;
	}
	nav {
		padding: 0.5em;
		background-color: #343a40;
		color: white;
		border-bottom: 3px solid #ffcd02;
		z-index: 5;
		position: absolute;
		margin-top: 20px;
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

	.nav-wrapper {
		display: flex;
		align-items: center;
		max-width: var(--size-md);
		padding-inline: 2em;
	}

	/* by default this had padding-inline-start: 40px; so at larger sizes it will need that back on think it was 40px or 1em? */
	ul {
		display: flex;
		flex-direction: column;
		text-align: center;
		padding: 0;
		list-style: none;
		font-size: 1.5em;
	}

	a {
		text-decoration: none;
		color: #aaa;
	}
	.logo {
		color: white;
	}
	.active {
		color: white;
	}
</style>
