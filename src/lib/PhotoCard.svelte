<script>
	const pics = [
		{
			title: 'SERVICES',
			photo: './pam-bauer-horseshow-kid.jpg',
			link: './services',
			excerpt: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit'
		},
		{
			title: 'MEET PAM',
			photo: './pam-bauer-teaching.jpg',
			link: '#',
			excerpt: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit'
		},
		{
			title: 'CLINICS',
			photo: './jumping-clinic.jpg',
			link: './clinics',
			excerpt: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit'
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
