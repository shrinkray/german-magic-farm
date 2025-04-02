<script lang="ts">
	import { page } from '$app/stores';

	export let title: string;
	export let description: string;
	export let type: string;
	export let image: string | null = null;

	$: url = $page.url.href;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	{@html `<script type="application/ld+json">
{
    "@context": "http://schema.org",
    "@type": "${type}",
    "name": "${title}",
    "description": "${description}",
    "url": "${url}",
    "image": "${image}"
}
</script>`}
</svelte:head>
