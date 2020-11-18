<template>
	<div class="hello">
		<h1>{{ title }}</h1>
		<pre>{{ message }}</pre>
		<hr>
		<div><input type="text" 
				v-on:keypress="type"
				v-on:keydown.delete="clear"
				v-on:keydown.space="space"
				v-on:keydown.enter="enter">
		</div>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld', 
		props: {
			title: String, 
		}, 
		data: function() {
			return {
				message: '', 
			};
		}, 
		methods: {
			type: function(event) {
				this.message += event.key + ' ';
				if (event.key == "Escape") {
					this.message = '';
				}
				event.target.value = '';
			}, 
			clear: function() {
				this.message = '';
			}
		}, 
	}
</script>
