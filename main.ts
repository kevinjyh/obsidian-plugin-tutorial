import { Plugin } from 'obsidian'

export default class ExamplePlujin extends Plugin {
	onload(): void {
		console.log('世界，您好！');
	}
}