<template>
	<div class="hello">
		<h1>{{ title }}</h1>
		<pre>{{ message }}</pre>
		<hr>
		<div class="area"
			v-on:click.left.prevent="left"
			v-on:click.middle.prevent="middle"
			v-on:click.right.prevent="right">
				click here!
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
		left: function() {
			this.message = '[left button]';
		}, 
		right: function() {
			this.message = '[right button]'
		}, 
		middle: function() {
			this.message = '[middle button]';
		}, 
	}, 
}
</script>
