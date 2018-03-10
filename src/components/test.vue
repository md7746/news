<template>
	<div style="width:100%;height: 300px;overflow:scroll;border:1px solid #000">
		<ul
		  v-infinite-scroll="loadMore"
		  infinite-scroll-disabled="loading"
		  infinite-scroll-distance="30">
		  <li v-for="item in list">{{ item }}</li>
		</ul>
	</div>
</template>
<script>
	export default {
		name: 'Test',
		data:function(){
			
				return {list:[1,2,3,4,5,6,7,8,7,6,5]}
			
		},
		methods: {
			loadMore() {
				this.loading = true;
				setTimeout(() => {
					let last = this.list[this.list.length - 1];
					for (let i = 1; i <= 10; i++) {
						this.list.push(last + i);
					}
					this.loading = false;
				}, 500);
			}
		}
	}
</script>
<style scoped>
	*{box-sizing: border-box;}
</style>