<script>
	import Contact from '$lib/Contact.svelte';
</script>

<section class="fade | section rounded">
	<div class="larger-wrapper flexible-grid">
		<div class="intro col">
			<h1>Willkommen!</h1>

			<p class="pull-quote section-description">
				German Magic Farm is a private training and lesson facility located in historic, Dundee
				Michigan. Our tranquil farm offers a huge outdoor arena, grass pastures, and access to
				trail riding.
			</p>

			<p class="grande">
				Resident trainer and owner; Pamela Bauer, is a German native who has traveled the world
				teaching and training dressage and jumping to horses and riders. From beginner to Grand
				Prix; German Magic Farm is happy to provide riders of all ages a relaxed fun atmosphere for
				perfecting riding skills; or for training your next equine star!
			</p>

			<p class="grande">
				Whether it's lessons in dressage, hunters, jumpers; or even a program suited to eventing
				horses, German Magic Farm can provide the perfect mixture of German and American training to
				suit your needs!
			</p>

			<div class="space-y-20"></div>

			<a href="./contact" class="button my-20"> Let's get started!</a>
		</div>
		<div class="contact col">
			<Contact />
		</div>
	</div>
</section>

<style>
	.flexible-grid {
		display: flex;
		gap: 1.5rem;
		margin-bottom: 4rem;

		@media (width < 660px) {
			flex-wrap: wrap;
		}
	}

	.col {
		@media (width < 660px) {
			padding-top: 2rem;
			padding-bottom: 2rem;
		}
	}

	.intro {
		flex-grow: 1;
		margin-top: 2rem;
	}
	.contact {
		display: flex;
		flex-direction: column;
		justify-content: center; /* centers vertically */
		flex-shrink: 1;
	}
	.button {
		border: none;
		border-radius: 0.25em;
		background-color: var(--primary-color);
		text-decoration: none;
		color: white;
		font-family: 'Lato-Bold';
		font-size: 1em;
		cursor: pointer;
		padding: 0.5em 1.5em;
		transition: 0.2s ease-in-out 0s;
	}

	.button:hover {
		text-decoration: underline;
		transform: scale(1.25);
	}
</style>
