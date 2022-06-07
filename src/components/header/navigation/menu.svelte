<script>
	import { page } from '$app/stores';

  function clickOutside(node) {
    const handleClick = (event) => {
      if (!node.contains(event.target)) {
        node.dispatchEvent(new CustomEvent("outclick"));
      }
    };

    document.addEventListener("click", handleClick, true);

    return {
      destroy() {
        document.removeEventListener("click", handleClick, true);
      }
    };
  }

  export let open = false;
</script>

<style lang="scss">
  @import './menu.scss';
</style>

<!-- {#if open}
    <div>
        {#each ['Home', 'Example', 'About', 'Contact'] as link, i}
            <p>
                {link}
            </p>
        {/each}
    </div>

    use:clickOutside on:outclick={() => (open = false)}
{/if} -->

{#if open}
  <ul
    class="navigation__menu .active"
    use:clickOutside on:outclick={() => (open = false)}
  >
    <li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">Home</a></li>
    <li class:active={$page.url.pathname === '/about'}>
      <a sveltekit:prefetch href="/about">About</a>
    </li>
    <li class:active={$page.url.pathname === '/todos'}>
      <a sveltekit:prefetch href="/todos">Todos</a>
    </li>
    <li class:active={$page.url.pathname === '/profile'}>
      <a sveltekit:prefetch href="/profile">Profil</a>
    </li>
  </ul>
{/if}