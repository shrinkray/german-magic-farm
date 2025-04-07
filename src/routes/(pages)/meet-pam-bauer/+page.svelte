<script lang="ts">
	import Seo from '$lib/Seo.svelte';
	import PhotoCluster from '$lib/PhotoCluster.svelte';
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
<section class="py-30 container">
	<div class="section">
		<h1>Meet Pam Bauer – Owner & Trainer at German Magic Farm</h1>

		<p class="pull-quote section-description">
			Pam Bauer, owner and resident trainer at German Magic Farm, brings over 32 years of
			international riding and teaching experience to her training program. Her journey has taken
			her through Germany, Austria, Japan, and now the United States, where she shares her deep
			knowledge and passion for horses with riders of all levels.
		</p>

		<p class="grande">
			Pam began her teaching career in Germany, where she earned her official training license and
			judging credentials—up to Level 3 in dressage and 1.30m in jumping. She taught both
			disciplines to riders and horses of all ages and skill levels, and during her 15 years of
			teaching there, she earned her Silver Medal and coached the Bavarian Pony Team to multiple
			national championship victories.
		</p>

		<p class="grande">
			Following her success in Germany, Pam spent a year training and teaching in Austria before
			heading to Japan. There, she competed in dressage up to the <a
				href="https://www.fei.org/"
				target="_blank"
				rel="noopener noreferrer">FEI</a
			>
			5th level and rode for Olympic dressage rider Mieko Yagi. She served as Chief Instructor at the
			prestigious
			<a href="https://whereintokyo.com/venues/25112.html" target="_blank" rel="noopener noreferrer"
				>Tokyo Riding Club</a
			>, where she trained horses and students all the way to Grand Prix level. In addition to her
			competitive and training work, Pam also volunteered at a
			<a
				href="https://www.paraplegie.ch/spz/en/medical-services/therapies/pferdegestutzte-therapien/equine-therapy/"
				target="_blank"
				rel="noopener noreferrer">hypotherapie facility</a
			> (similar to USA handicapped riding), offering therapeutic riding support for individuals with
			disabilities.
		</p>

		<p class="grande">
			Now based in the U.S., Pam runs her own training business, dividing her time between her home
			base at German Magic Farm, nearby farms, and the many horse shows she attends with her
			students and training horses.
		</p>

		<p class="grande">
			Pam specializes in building strong partnerships between horse and rider. She emphasizes
			correct and effective body positioning and aids in both dressage and jumping disciplines,
			helping her students become confident, capable riders.
		</p>

		<p class="grande">
			Pam helps riders who had an accident in the past and are looking to get back into riding. If
			you have a fear or phobia of equestrian activities, she has helped others overcome
			difficulties and grow into confident riders and lovers of the sport. You will not find a
			more skilled and compassionate trainer in the Midwest.
		</p>

		<p class="grande">
			With her diverse international background, years of professional experience, and ability to
			connect with horses and riders of all types, Pam creates a supportive, relaxed, and fun
			learning environment for everyone at German Magic Farm.
		</p>

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
	p {
		padding-block: var(--size-fluid-1);
	}
</style>
