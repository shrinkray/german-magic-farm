<script lang="ts">
	import Seo from '$lib/Seo.svelte';
	import PhotoCluster from '$lib/PhotoCluster.svelte';
	import SmallLogo from '$lib/SmallLogo.svelte';
	import SmallLogoLayers from '$lib/SmallLogoLayers.svelte';
</script>

<svelte:head
	><meta
		property="og:image"
		content="https://www.germanmagicfarm.com/pam-bauer-winter-trot.webp"
	/><meta property="og:image:width" content="600" /><meta
		property="og:image:height"
		content="600"
	/><meta property="og:image:alt" content="Pam Bauer riding in winter" /></svelte:head
>
<PhotoCluster />
<section class="section">
	<div class="container flow">
		<h1>Meet Pam Bauer</h1>

		<p>
			Pam Bauer is the resident trainer & owner here at German Magic Farm. Having ridden for over 31
			years she brings to her farm the collective experiences from working in various countries like
			Germany, Austria, Japan and now here in the US.
		</p>

		<p>
			Pam began her teaching career in Germany where she taught jumping and dressage to all ages and
			levels of riders and horses. She earned her training license in Germany and also her judging
			license up through dressage Level 3 and up through 1.30m for judging jumping.
		</p>

		<p>
			At home in Germany, Pam earned her Silver Medal; and taught for 15 years. She coached the
			Bavarian Pony Team to winning their national championships several times.
		</p>

		<p>Pam trained and taught in Austria for a year after working in Germany.</p>

		<p>
			Next it was off to Japan for Pam where she showed dressage up through FEI 5th level and rode
			for the well known Mieko Yagi who represented Japan at the Olympics in dressage.
		</p>

		<p>
			Pam was Chief Instructor for the famous Tokyo Riding Club and trained horses and students up
			through Grand Prix. Once again in Japan she taught and trained dressage & jumping to various
			horses and riders. In Japan Pam also volunteered at a hypotherapie facility (similar to USA
			handicapped riding).
		</p>

		<p>
			In recent years Pam moved to the USA and began her own training business. She spends her time
			between training at her own German Magic Farm, at various nearby farms, and of course the many
			different shows she attends with students and training horses.
		</p>

		<p>
			Specializing in developing that vital partnership between horse and rider; she helps her
			students learn the necessary effective body positions for both dressage and jumping
			disciplines & educating them in giving correct and effective aids.
		</p>

		<p>
			Pam's vast array of experience from working for several professionals in addition the
			knowledge gained from traveling to different countries, gives her the ability to successfully
			work with all breeds of horses and all types of riders!.
		</p>

		<p>Pam happily provides a fun, relaxed atmosphere for her students and equine friends!</p>
		<br />
	</div>
	<div class="center-w-grid static-logo"><SmallLogoLayers /></div>
</section>

<Seo
	title="Pam Bauer resident trainer and owner German Magic Farm"
	description="Learn all about resident trainer at German Magic Farm; Pamela Bauer"
	type="WebPage"
	image="./pam-bauer-teaching.jpg"
/>

<style>
	.section {
		padding-block: var(--size-fluid-5);
	}

	h3 {
		border-bottom: 1px solid #ddd;
	}
</style>
