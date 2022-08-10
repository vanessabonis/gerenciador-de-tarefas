import axios from 'axios';

export default {
	devServer: {
		port: process.env.VUE_APP_PORT || 8081,
		proxy: process.env.VUE_APP_API_ROOT || 'http://localhost:8080/',
		https: true
	},
	configureWebpack: {
		output: {
			libraryExport: 'default',
			resolve: {
				symlinks: false
			}
		}
	}
}

export const axiosClient = axios.create({
	baseURL: process.env.VUE_APP_API_ROOT || 'http://localhost:8080/',
	headers: {
		'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS'
	},
});

// axiosClient.interceptors.request.use(
// 	(config) => {
// 		const token = localStorage.getItem('token');
// 		  // eslint-disable-next-line
// 		if (token) config.headers!['Authorization'] = `Bearer ${token}`;
// 		return config;
// 	},
// 	(error) => Promise.reject(error)
// );
