<script>
	import '../tailwind.css'
	import { page } from '$app/stores'
</script>

<header class="bg-gray-100 shadow-lg">
	<div class="flex container items-center justify-between">
		<h1 class="font-bold text-2xl">INDIE</h1>

		<nav class="space-x-4">
			<a
				href="."
				class="p-4 text-lg inline-flex items-center {$page.path == '/' &&
					'border-b-2 border-yellow-500'}">Todos</a
			>
			<a
				href="test"
				class="p-4 text-lg inline-flex items-center {$page.path ==
					'/test' && 'border-b-2 border-yellow-500'}">Test</a
			>
		</nav>
	</div>
</header>
<slot />
