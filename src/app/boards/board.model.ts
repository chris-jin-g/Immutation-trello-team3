export class Board {
	public name: string;
	public description: string;
	public imagePath: string;
	public stateStr: string;
	constructor(name: string, desc: string,imagePath: string,stateStr: string ){
		this.name = name;
		this.description = desc;
		this.imagePath = imagePath;
		this.stateStr = stateStr;
	}
}