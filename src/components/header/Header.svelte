<script>
	import Menu from './navigation/menu.svelte';
	import Hamburger from './navigation/hamburger.svelte';
	import Profile from '$components/profile/profile.svelte';


	let open = false;
</script>

<header>
	<nav>
		<Hamburger bind:open={open}/>
		<Menu bind:open={open}/>
		<Profile />
	</nav>
</header>

<style lang="scss">
	@import './header.scss';
</style>
