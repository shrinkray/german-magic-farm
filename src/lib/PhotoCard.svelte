<script>
	const pics = [
		{
			title: 'SERVICES',
			photo: './pam-bauer-horseshow-kid.webp',
			link: './services',
			excerpt:
				'Group and individual lessons, training for your OR your horse, or test out new skills at a horse show!'
		},
		{
			title: 'MEET PAM',
			photo: './pam-bauer-teaching.webp',
			link: './meet-pam-bauer',
			excerpt: 'Meet Pam Bauer, resident trainer & owner at German Magic Farm'
		},
		{
			title: 'CLINICS',
			photo: './jumping-clinic.webp',
			link: './clinics',
			excerpt: 'Learn, practice and have fun training at a clinic with different clinicians!'
		}
	];
</script>

<div class="container">
	<div class="auto-grid">
		{#each pics as { title, photo, link, excerpt }}
			<div class="card navflow">
				<h3>{title}</h3>
				<a href={link}><img class="square" src={photo} alt={title} /> </a>
				<div class="excerpt">{excerpt}</div>
				<a class="button" href={link}>Learn more</a>
			</div>
		{/each}
	</div>
</div>

<style>
	.container {
		padding-block: 2em;
	}

	div.navflow > * {
		margin-bottom: 2em;
	}

	img {
		margin-bottom: 2em;
	}

	.card > *:not(:first-child) {
	}

	.excerpt {
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.flow {
		margin-bottom: 2em;
	}

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

	.button {
		border: none;
		border-radius: 0.25em;
		background-color: var(--primary-color);
		text-decoration: none;
		color: white;
		font-size: 1em;
		cursor: pointer;
		padding: 0.5em 1.5em;
	}

	.button:hover {
		text-decoration: underline;
	}

	/* a {
		text-decoration: none;
		color: var(--primary-color);
	}
	a:hover {
		text-decoration: underline;
	} */
</style>
