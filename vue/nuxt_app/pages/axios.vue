<template>
	<section class="container">
		<h1>{{title}}</h1>
		<p>{{message}}</p>
		<div>
			<input type="text" v-model="msg" />
			<button @click="doClick">Click</button>
		</div>
		<hr>
		<table>
			<tr>
				<th>User ID</th>
				<td>{{json_data.userId}}</td>
			</tr>
			<tr>
				<th>ID</th>
				<td>{{json_data.id}}</td>
			</tr>
			<tr>
				<th>Title</th>
				<td>{{json_data.title}}</td>
			</tr>
			<tr>
				<th>Body</th>
				<td>{{json_data.body}}</td>
			</tr>
		<hr>
	</table>
	</section>
</template>

<script>
const axios = require('axios');

let url = "https://jsonplaceholder.typicode.com/posts/";

export default {
	data: function() {
		return {
			title: 'Axios', 
			message: 'axios sample.', 
			msg: '', 
			json_data: {}, 
		};
	}, 
	methods: {
		doClick:function(event) {
			// get thenは非同期allow関数の中に処理を全て書く
			// v-model="msgで入力ふフィールドの値はthis.msgに保管されている
			axios.get(url + this.msg).then((res) => {
				this.message = 'get ID=' + this.msg;
				this.json_data = res.data;
			}).catch((error) => {
				this.message = 'ERROR!';
				this.json_data = {};
			});
		},
		}
		}
</script>

<style scoped>
input {
	font-size: 14pt;
}
button {
	font-size: 14pt;
}
tr th {
	width:150px;
	background-color: darkblue;
	color: white;
	font-size: 16pt;
}てて
tr td {
	padding: 5px 10px;
	background-color: #eef;
	font-size: 14pt;
}
.container {
	padding: 5px 10px;
}
h1 {
	font-size: 60pt;
	color: #345980;
}
p {
	padding-top: 5px;
	font-size: 20pt;
}
a {
	font-size: 16pt;
}
</style>
