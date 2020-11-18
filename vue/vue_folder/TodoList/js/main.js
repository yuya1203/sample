var app = new Vue({
	el: '#app',
	data: {
	  newItem: '',
	  todos: []
	},
	methods: {
	  addItem: function(event) {
		//alert();  動作確認
			  // もしnewItemが空だったらreturnで処理を終了させる
			  // 未入力の場合リストに追加させない
			  if(this.newItem == '') return;
			  // テキストボックスに入った値(newItem)をtodoへ代入
			  // デフォルトでfalseに設定、チェックするとtrue
		var todo = {
		  item: this.newItem, 
				  isDone: false
		};
			  // 配列todosへtodoを追加
		this.todos.push(todo);
			  // タスク追加した後にテキストボックスを空欄に戻す
			  this.newItem = ''; 
	  }, 
		  deleteItem: function(index) {
		  //alert(index);   splice(削除する要素の位置, 削除する要素の数)
		  this.todos.splice(index, 1)
		  }
	}
  })
  