<script lang="ts">
	import Contact from '$lib/Contact.svelte';
	import Seo from '$lib/Seo.svelte';
	import SmallLogoLayers from '$lib/SmallLogoLayers.svelte';
</script>

<section class="py-30 container">
	<div class="section">
		<h1>Questions?</h1>
		<p class="pull-quote section-description">
			Please reach out to us on Facebook, call, or email. We will get back to you as soon as possible.
		</p>

		



		<!-- <form 
			name="contact"
			method="POST"
			data-netlify="true"
			data-netlify-honeypot="bot-field"
		>
			<input type="hidden" name="form-name" value="contact" />
			<p class="hidden">
				<label>
					Don't fill this out if you're human: <input name="bot-field" />
				</label>
			</p>
			<div class="form-group">
				<label for="name">Name</label>
				<input type="text" id="name" name="name" required />
			</div>
			<div class="form-group">
				<label for="email">Email</label>
				<input type="email" id="email" name="email" required />
			</div>
			<div class="form-group">
				<label for="message">Message</label>
				<textarea id="message" name="message" required></textarea>
			</div>
			<button type="submit">Send Message</button>
		</form> -->
		
	</div>
</section>

<section class="section">
	<div class="larger-wrapper contact-map">
		<div class="contact-info col"><Contact /></div>
		<div class="map col">
			<div class="map-container">
				<div class="map-overlay"></div>
				<iframe
					title="Map showing location of German Magic Farm in Dundee, Michigan"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1027.3392084379652!2d-83.63739278065546!3d41.96147313325206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883c9dcaecb22297%3A0x9a8a3080e9bc5486!2sGerman%20Magic%20Farm!5e0!3m2!1sen!2sus!4v1742695523556!5m2!1sen!2sus"
					width="100%"
					height="350"
					style="border:0;"
					allowfullscreen
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
				/>
			</div>
		</div>
	</div>
	<div class="center-w-grid static-logo"><SmallLogoLayers /></div>
</section>

<Seo
	title="Directions | Contact info German Magic Farm"
	description="Directions contact and Map to German Magic Farm"
	type="WebPage"
	image="./german-magic-farm-logo-short.svg"
/>

<style>
	/* .form-group {
		margin-bottom: 1rem;
	}
	label {
		display: block;
		margin-bottom: 0.5rem;
	}
	input, textarea {
		width: 100%;
		padding: 0.5rem;
		border: 1px solid #ddd;
		border-radius: 4px;
	}
	textarea {
		min-height: 150px;
	}
	button {
		background: var(--primary-color);
		color: white;
		padding: 0.5rem 1rem;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		font-family: 'Montserrat', sans-serif;
		font-size: var(--fs-100);
	}
	button:hover {
		background: var(--primary-color-hover);
	}

	form {
		padding-block: var(--size-7);
	}

	label {
		font-family: 'Montserrat', sans-serif;
		margin-top: 1rem;
	} */
	.contact-map {
		display: flex;
		flex-wrap: wrap;
		gap: 1.5em;
		padding-block: var(--size-7);
		padding-right: 2rem;
		background-color: var(--accent-fade);
		margin-bottom: 2rem;
		border-radius: 1rem;
	}

	.contact-info {
		padding-left: 2.5rem;
	}
	@media (width < 600px) {
		.contact-info {
			padding-left: 2rem;
		}
	}
	@media (width < 965px) {
		.contact-info {
			width: 100%;
		}
	}

	.map {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;

		@media (width > 965px) {
			width: 58%;
		}
	}

	input,
	textarea {
		width: 100%;
		padding: 0.75em 1em;
		border-radius: 0.25em;
		border: 1px solid #999;
		color: var(--input-color);
		font-size: var(--fs-300);
	}

	textarea {
		font-size: var(--fs-300);
	}
	.form-group {
		margin-bottom: 1.5em;
	}
	label {
		display: block;
		padding-bottom: 0.5em;
	}

	.map-container {
		position: relative;
		width: 100%;
		height: 350px;
		border-radius: 0.5rem;
		@media (width < 965px) {
			margin-left: 2rem;
		}
	}

	.map-overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(89, 76, 60, 0.3);
		pointer-events: none;
		z-index: 1;
		background-color: rgb(156, 156, 156); /* neutral gray */
		mix-blend-mode: saturation;
		border-radius: 0.5rem;
	}

	iframe {
		position: relative;
		border-radius: 0.5rem;
	}

	.success-message {
		background-color: var(--success-bg, #e6f4ea);
		color: var(--success-color, #10491d);
		padding: 1rem;
		border-radius: 4px;
		margin: 1rem 0;
		text-align: center;
	}

	.hidden {
		display: none;
	}
</style>
