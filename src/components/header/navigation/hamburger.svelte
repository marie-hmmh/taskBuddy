<script>
  export let open = false;

	const handleMobileIconClick = () => (open = !open);
</script>

<style lang="scss">
  @import './hamburger.scss';
</style>

<button class={`burger ${open ? ' active' : ''}`} on:click={handleMobileIconClick}>
			<span></span>
			<span></span>
			<span></span>
</button>