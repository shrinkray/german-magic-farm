<script>
	export let size = 'small';
</script>

<img
	alt="experiment"
	class:small={size === 'small'}
	class:medium={size === 'medium'}
	src="./spotless-dressage.webp"
	{...$$restProps}
/>

<style>
	.small {
		width: 100px;
		height: auto;
		object-fit: cover;
	}
</style>
