<script>
	import logo from '$lib/media/logo.svg';
	import tmdb from '$lib/media/tmdb.svg';
	import '../app.postcss';
</script>

<nav class="flex h-12 items-center justify-between text-primary p-6">
	<a href="/">
		<img src={logo} alt="SvelteFlix" class="h-5" />
	</a>

	<div class="space-x-4">
		<a href="/movies">Movies</a>
		<a href="/watchlist">Watchlist</a>
		<a href="/logn">Log in</a>
	</div>
</nav>

<main>
	<slot />
</main>

<footer class="flex justify-center p-6">
	<div class="text-center">
		<p>Data provided by</p>
		<img src={tmdb} alt="tmdb" class="h-3" />
	</div>
</footer>
