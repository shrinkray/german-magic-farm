<div class="contact-container">
	<div class="contact">
		<h2>Contact Pam</h2>
		<p><strong>German Magic Farm</strong></p>
		<p>14082 Rightmire Rd</p>
		<p>Dundee, Mi 48131</p>
		<p class="nowrap squeeze">
			<span class="phone-icon icn"></span> <a href="tel:7346523775" class="bold">(734) 652-3775</a>
		</p>
		<p class="nowrap squeeze">
			<span class="mail-icon icn"></span>
			<a href="mailto:pam@germanmagicfarm.com" class="bold">pam@germanmagicfarm.com</a>
		</p>
	</div>
	<div class="contact-image">
		<img class="transparent-1" src="/rider-7.svg" alt="German Magic Farm" />
	</div>
</div>

<style>
	.contact > * {
		padding-bottom: 0.5em;
		margin-bottom: 0.5em;
	}

	h2 {
		border-bottom: 1px solid #ddd;
	}

	.squeeze {
		font-size: 1.1rem;
	}
	.transparent-1 {
		opacity: 0.6;

		@media (width < 600px) {
			display: none;
		}
	}
	.contact-container {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: start;
	}
	.contact-image {
		display: block;
	}

	@media (width < 965px) {
		.contact-container {
			width: 100%;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
		}
		.contact-image {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
</style>
