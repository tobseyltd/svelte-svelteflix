<script>
	import '../app.postcss';
</script>

<nav class="flex w-100 h-12 items-center justify-between text-primary">
	<a href="/">Svelteflix</a>

  <div>
    <a href="/movies">Movies</a>
    <a href="/watchlist">Watchlist</a>
    <a href="/logn">Log in</a>
  </div>
</nav>

<slot />
