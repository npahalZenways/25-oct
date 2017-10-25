
//exporting a module
export module m1{
	//exporting a claa or any other functions or property
	export class abc {
		name:string;
		constructor(name:string) {
			this.name = name;
		}
	}

	export function hello(argument) {
		console.log(argument);
	}
}

module m2{
	var ab = new m1.abc('hghsdv')
	m1.hello(4567);	
}

function anything(argument: number): number {
	return argument;
}

function anything1(argument: string): string {
	// body...
	return argument;
}

//generics
function anything2<T>(argument:T):T {
	// body...
	return argument;
}

var myNumber = anything2<number>(1);

var myString = anything2<string>('nitin');

var myObject = anything2<object>({name:'nitn'});

var myValue = anything2<boolean>(true);

/*
steps for installing typescript

by command prompt
npm i -g typescript

for sublime
1. ctrl + shift + p, then write install and install package control
2. ctrl + shift + p, then write install and open package control, then install typescript

for compling typescript or converting typescript to javascript
1. open command prompt in the folder where your typescript file is saved
2. write tsc filename.ts || for automatically compiling typescript write tsc -w filename.ts

*/