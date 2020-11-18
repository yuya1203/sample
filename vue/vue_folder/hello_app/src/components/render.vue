<script>
export default {
	name: 'HelloWorld', 
	render: function(h) {
		return h('div', {}, [
			h('h1', 'Render'), 
			h('p', 'this is render sample.'), 
		])
	}
}
</script>

<script>
export default {
	name: 'HelloWorld', 
	render: function(h) {
		return (
			<div>
				<h1>JSX</h1>
				<p>this is JSX message!</p>
			</div>
		);
	}
}
</script>
