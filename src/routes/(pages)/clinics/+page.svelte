<script lang="ts">
	import Hero from '$lib/Hero.svelte';
	import Seo from '$lib/Seo.svelte';
	import clinicData from '$lib/data/clinics.json';
	import SmallLogoLayers from '$lib/SmallLogoLayers.svelte';
	import type { ClinicsData } from '$lib/types/clinics';

	const data = clinicData as ClinicsData;

	// Get the current date at the start of the day (no time component)
	const currentDate = new Date();
	currentDate.setHours(0, 0, 0, 0);
	// console.log('Current date:', currentDate);

	// Helper function to parse dates like "September 9-10, 2023" or "June 12-13, 2024"
	function parseClinicDate(dateStr: string) {
		try {
			// Extract the year from the end of the string
			const year = dateStr.split(' ').pop();
			// console.log('Year from end:', year);

			// Split on hyphen and take the first date
			const firstDate = dateStr.split('-')[0].trim();
			// console.log('First date part:', firstDate);
			
			// Parse the date parts
			const parts = firstDate.split(' ');
			// console.log('Date parts:', parts);
			
			// Handle cases where the day might have a comma
			const month = parts[0];
			const day = parts[1]?.replace(',', '');

			// Log the parsed components
			// console.log('Parsed components:', { month, day, year });
			
			if (!month || !day || !year) {
				console.error('Missing date components for:', dateStr);
				return new Date(0);
			}

			// Convert to numbers
			const dayNum = parseInt(day);
			const yearNum = parseInt(year);
			const monthNum = getMonthNumber(month);

			// Log the numeric components
			// console.log('Numeric components:', { monthNum, dayNum, yearNum });

			// Validate components
			if (isNaN(dayNum) || isNaN(yearNum) || monthNum === -1) {
				console.error('Invalid numeric components for:', dateStr);
				return new Date(0);
			}

			// Create date object and set to start of day
			const date = new Date(yearNum, monthNum, dayNum);
			date.setHours(0, 0, 0, 0);

			// Validate final date
			if (isNaN(date.getTime())) {
				console.error('Invalid date created for:', dateStr);
				return new Date(0);
			}

			// console.log(`Successfully parsed date for ${dateStr}:`, date.toISOString());
			return date;
		} catch (error) {
			console.error('Error parsing date:', dateStr, error);
			return new Date(0);
		}
	}

	// Helper function to convert month name to number (0-11)
	function getMonthNumber(month: string): number {
		const months: { [key: string]: number } = {
			'January': 0, 'February': 1, 'March': 2, 'April': 3,
			'May': 4, 'June': 5, 'July': 6, 'August': 7,
			'September': 8, 'October': 9, 'November': 10, 'December': 11
		};
		const monthNum = months[month];
		if (monthNum === undefined) {
			console.error('Invalid month:', month);
			return -1;
		}
		return monthNum;
	}

	// Filter the clinics to get upcoming and past events
	const upcomingClinics = data.clinics.filter((clinic) => {
		const clinicDate = parseClinicDate(clinic.date);
		const isUpcoming = clinicDate >= currentDate;
		// console.log(`Clinic ${clinic.title}: ${clinic.date} -> ${clinicDate} is upcoming:`, isUpcoming);
		return isUpcoming;
	});

	const pastClinics = data.clinics.filter((clinic) => {
		const clinicDate = parseClinicDate(clinic.date);
		const isPast = clinicDate < currentDate;
		// console.log(`Clinic ${clinic.title}: ${clinic.date} -> ${clinicDate} is past:`, isPast);
		return isPast;
	});

	// console.log('Upcoming clinics:', upcomingClinics.length);
	// console.log('Past clinics:', pastClinics.length);
</script>

<svelte:head>
	<meta property="og:image" content={data.seo.image} />
	<meta property="og:image:width" content="740" />
	<meta property="og:image:height" content="423" />
	<meta property="og:image:alt" content="Shows at German Magic Farm" />
</svelte:head>

<div class="hero-wrapper">
	<Hero
		herotitle={data.pageTitle}
		tagline={data.pageTagline}
		--bg-image="url('/clinic-collage.webp')"
		--bg-opacity="0.6"
	/>
</div>

<div class="container px-4 py-8">
	<section class="section">
		<h2 class="section-title">What clinics are coming up?</h2>
		<p class="pull-quote section-description">
			German Magic Farm offers an inspiring place to learn, grow, and enjoy the experience of a
			clinic—taught by the best instructors you will find. If you are interested in our offering a
			clinic, please <a href="/contact">contact us</a>.
		</p>
		<div class="grid">
			{#if upcomingClinics.length > 0}
				{#each upcomingClinics as clinic}
					<article class="show-card">
						<h3 class="show-title">{clinic.title}</h3>
						<p><strong>Date:</strong> {clinic.date}</p>
						<p>{clinic.description}</p>
					</article>
				{/each}
			{:else}
				<p class="py-20">
					We are sorry, there are currently no clinics to show. Please let us know what types of
					training you need.
				</p>
			{/if}
		</div>
	</section>

	<section class="section past-clinics rounded">
		<div class="container grid">
			<h2 class="section-title">Past Clinics</h2>
			<p>Take a look at the types of clinics we have hosted in the past.</p>
			<div class="space-y-20"></div>

			{#if pastClinics.length > 0}
				{#each pastClinics as clinic}
					<article class="show-card past-clinic prose">
						<h3 class="show-title">{clinic.title}</h3>
						<p><strong>Date:</strong> {clinic.date}</p>
						<p>{clinic.description}</p>
					</article>
				{/each}
			{:else}
				<p class="py-20">No past clinics found.</p>
			{/if}
		</div>
		<div class="container">
			<!-- Check out my list on Chat GPT -->
		</div>
	</section>
</div>
<div class="center-w-grid static-logo py-10"><SmallLogoLayers /></div>

<Seo
	title={data.seo.title}
	description={data.seo.description}
	type={data.seo.type}
	image={data.seo.image}
/>

<style>
	.hero-wrapper {
		width: 100%;
	}
	.section {
		padding: var(--size-fluid-4) 0;
		background-color: var(--surface-2);
	}
	.show-card {
		background: var(--surface-1);
		border-radius: var(--radius-3);
		box-shadow: var(--shadow-2);
		padding: var(--size-fluid-3);
		margin: var(--size-fluid-2);
	}
	.show-title {
		font-size: var(--font-size-fluid-2);
		padding-top: 0;
		color: var(--text-1);
		margin: 0;
	}
	.past-clinics,
	.past-clinic {
		background-color: var(--accent-fade);
	}
</style>
