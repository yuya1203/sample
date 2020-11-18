
var app = new Vue({
	el: '#app',
	data: {
		bpi: null,
		hasError: false,
		loading: true,
	},
	mounted: function () {
		axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').then(function (response) {
				// console.log(response.bpi);
				// console.log(response.bpi.USD.rate_float);
			this.bpi = response.data.bpi;
			// console.log(this.bpi);
		}.bind(this))
		.catch(function (error) {
			// console.log(error);
			this.hasError = true;
		}.bind(this))
			.finally(function () {
			this.loading = false
		}.bind(this))
	},
	filters: {
		currencyDecimal(value) {
			return value.toFixed(2);
		}
	}
})
