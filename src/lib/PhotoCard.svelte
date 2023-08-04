<script>
	const pics = [
		{
			title: 'SERVICES',
			photo: './pam-bauer-horseshow-kid.jpg',
			link: './services',
			excerpt:
				'Group and individual lessons, training for your OR your horse, or test out new skills at a horse show!'
		},
		{
			title: 'MEET PAM',
			photo: './pam-bauer-teaching.jpg',
			link: '#',
			excerpt: 'Meet Pam Bauer, resident trainer & owner at German Magic Farm'
		},
		{
			title: 'CLINICS',
			photo: './jumping-clinic.jpg',
			link: './clinics',
			excerpt: 'Learn, practice and have fun training at a clinic with different clinicians!'
		}
	];
</script>

<div class="container">
	<div class="auto-grid">
		{#each pics as { title, photo, link, excerpt }}
			<div>
				<h3>{title}</h3>
				<a href={link}><img class="square" src={photo} alt={title} /> </a>
				<p>{excerpt}</p>
			</div>
		{/each}
	</div>
</div>

<style>
	/* .grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2em;
		padding: 2em 0;
	} */

	img {
		width: 100%;
		object-fit: cover;
		object-position: center;
		transition: all 1s ease;
	}

	img:hover {
		transform: scale(1.08);
		/* transform: skewX(-3deg); */
	}
</style>
