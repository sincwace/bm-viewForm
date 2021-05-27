<template>
	<div id="app">
		<router-view ref="view" />
	</div>
</template>

<script>
export default {
	name: 'App',
	mounted() {
		document.body.οnresize = this.resize

		// 关闭引导
		var appLoadingBox = document.getElementById('app-loading-box')
		var appLoading = document.getElementById('app-loading')
		if (appLoading && appLoadingBox) {
			appLoadingBox.removeChild(appLoading)
			appLoadingBox.style.opacity = 0
			setTimeout(function() {
				if (appLoadingBox) {
					document.body.removeChild(appLoadingBox)
				}
			}, 1000)
		}
	}
}
</script>

<style lang="less">
html, body {
	margin: 0;
	height: 100%;
	background: #f0f0f0;
	font-family: Microsoft YaHei;
	overflow: hidden;
}

* {
	font-family: Microsoft YaHei;
}

#app {
	height: 100%;
	overflow: hidden;
}
</style>

