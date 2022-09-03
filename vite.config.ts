import { defineConfig } from 'vite'
import path from 'path'

defineConfig(({ mode }: { mode: string }) => {
	console.log('🟢 Running build')
	console.log(`🟢 Mode: ${mode}`)

	return {
		server: {
			port: 3000,
		},
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './src'),
			},
		},
	}
})
