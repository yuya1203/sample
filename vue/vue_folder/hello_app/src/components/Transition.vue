<template>
	<div class="hello">
		<h1>{{title}}}</h1><p>{{message}}</p>
		<hr/>
		<button v-on:click="doAction">
			{{btn}}
		</button>
		<transition name="transit">
			<p v-if="flg" class="trans">Transition!</p>
		</transition>>
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
			message: 'Transition Sample!', 
			flg: true, 
			btn: 'show/Hide', 
		};
	}, 
	methods: {
		doAction: function() {
			this.flg = !this.flg;
		}, 
	}, 
}
</script>

<style>
	div {
	margin: 0px;
	padding: 0px;
	text-align: left;
	}
	h1 {
	font-size: 72pt;
	font-weight: bold;
	text-align: right;
	letter-spacing: -8p;
	color: #f0f0f0;
	margin: 0px;
	}
	p {
	margin: 0px;
	color: #666;
	font-size: 16pt;
	}
	pre {
		font-size: 14pt;
		line-height: 1.25;
	}
	div.out {
		padding: 5px 0px;
		background-color: #eee;
		width: 300px;
		height: 200px;
	}
	div.mid {
		padding: 5px 0px;
		background-color: #ddd;
		width: 200px;
		height: 175px;
	}
	div.mid {
		padding: 5px 0px;
		background-color: #ccc;
		width: 100px;
		height: 150px;
	}
	.area {
		width: 300px;
		height: 100px;
		background-color: #ddd;
		padding: 10px;
		font-size: 20pt;
	}
	.inner {
		color: red;
		font-size: 14pt;
	}
	.etc {
		color: green;
		background-color: #eee;
		font-size: 12pt;
		padding: 5px;
	}
	.trans {
		background-color: #ddf;
		padding: 10px;
		font-size: 20pt;
	}
</style>
