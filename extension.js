// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
//var cmd=require('node-cmd');

const branch = require('git-branch');
//const branchName = require('current-git-branch');



// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, extension "uuid" is now active!');

	//Time.diff(date, Time.sub(date, { D: 1 }), '{D} days {s} seconds')
	
	// var folderPath = vscode.workspace.folderPath
	let folderPath = vscode.workspace.rootPath;

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.helloWorld', function () {
		if (folderPath)
		{
		branch(`${folderPath}`)
			.then(name =>{
				vscode.window.setStatusBarMessage(name)}) //=> 'master'
			.catch(console.error);
		}
		else
		{
		vscode.window.setStatusBarMessage("NO REPO")
		}
		
	});

	context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
