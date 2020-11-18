export const state = () => ({
	// memo: メモを保管する配列　メモのオブジェクトを追加していく
	memo: [], 
	// page: 現在表示しているページ番号
	page: 0, 
})

export const mutations = {
	// メモを追加していく処理 obj: 送信されたフォームの値をまとめたオブジェクト
	// → (title, content, Dateオブジェクトの値をまとめたfmt)を
	// 配列オブジェクトのunshiftメソッドでstate.memoの配列の先頭に値を追加する
	insert: function(state, obj) {
		var d = new Date();
		var fmt = d.getFullYear() + '-' + (d.getMonth() +1)
			+ '-' + d.getDate() + ' ' + d.getHours() + ':'
			+ d.getMinutes();
		state.memo.unshift({
			title: obj.title, 
			content: obj.content, 
			created: fmt
		});
	}, 

	// 引数に渡された番号(p)をstate.pageに設定
	set_page: function(state, p) {
		state.page = p;
	}, 

	// メモが保管してある配列(state.memo)を順番に取り出し、渡された引数のメモオブジェクト(obj)と
	// と同じものを探してそれを削除する
	// splice: (追加、削除する位置, 削除する要素数, 追加する要素): 配列から要素を削除・追加して組み替える
	remove:function(state, obj) {
		var num = 0;
		for (let i = 0; i < state.memo.length; i++) {
			const ob = state.memo[i];
			if (ob.title == obj.title 
				&& ob.content == obj.content
				&& ob.created == obj.created) {
					alert('remove it! --' + ob.title);
					state.memo.splice(i, 1);
					return;
			}
		}
	}, 
}
