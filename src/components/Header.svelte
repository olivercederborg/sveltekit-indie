<script>
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
				href="chat"
				class="p-4 text-lg inline-flex items-center {$page.path ==
					'/chat' && 'border-b-2 border-yellow-500'}">Chat</a
			>
		</nav>
	</div>
</header>
