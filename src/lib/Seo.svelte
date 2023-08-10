<script>
	import { page } from '$app/stores';

	export let title;
	export let description;
	export let type;
	export let image;

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
      "image": "${image}",
    }
  </script>`}
</svelte:head>
