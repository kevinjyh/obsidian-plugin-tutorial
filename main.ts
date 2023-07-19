import { Plugin } from 'obsidian'

export default class ExamplePlujin extends Plugin {
	statusBarTextElement: HTMLSpanElement;

	onload(): void {
		this.statusBarTextElement = this.addStatusBarItem().createEl('span');
		this.statusBarTextElement.textContent = '您好';
	}
}