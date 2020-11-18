<template>
	<!-- <div class="fixed w-full px-3"> -->
	<div v-show="message" class="fixed w-full px-3">
		<div class="flex bg-red-500 text-white font-bold rounded-t px-4 py-2">
			<label>エラー</label>
			<button @click="deleteMessage" class="ml-auto">
				<i class="material-icons text-white text-1xl">
					clear
				</i>
			</button>
		</div>
		<div class="border border-t-0 border-red-400 rounded-b bg-red-1pp px-4 py-3 text-red-700">
		</div>
	</div>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    computed: {
      // mapGetters(storeのモジュール名、[ 定義したgettersの名前 ]) でコンポーネントの
      // computed に store の getters をマッピングしています。これでコンポーネント上で messages が
      // computed に定義してあるのと同じ用に扱うことが出来るようになります
       ...mapGetters('alert', ['message'])
    },

    // mapMutations(storeのモジュール名、[ 定義したmutationsの名前 ]) でコンポーネントの
    // methods に store の mutations をマッピングしています。これでコンポーネント上で deleteMessage が
    // methods に定義してあるのと同じ用に扱うことが出来るようになります
    methods: {
      ...mapMutations('alert', ['deleteMessage'])
    }
  }
</script>
