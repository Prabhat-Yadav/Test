// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
var repoName = require('git-repo-name');
//var cmd=require('node-cmd');
// const repoUrl = require('get-repository-url');
const branch = require('git-branch');
// var getRepoInfo = require('git-repo-info');

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

		// // takes a callback
		// repoUrl('git-repo-', function (err, url) {
		// 	vscode.window.setStatusBarMessage(url);
		// 	//=> 'https://github.com/generate/generate'
		// })

		//  or returns a promise
		// repoUrl('gener')
		// 	.then(function (url) {
		// 		vscode.window.setStatusBarMessage(url);
				
		// 		//=> 'https://github.com/generate/generate'
		// 	});

		// var startTime = new Date().getTime();
 
		//vscode.window.setStatusBarMessage(folderPath)


		  if (folderPath) {
			branch(`${folderPath}`)
				.then(name => {
				 vscode.window.setStatusBarMessage(name)
					
				}) //=> 'master'
				.catch(console.error);
		}
		else {
			vscode.window.setStatusBarMessage("NO REPO")
		}
		
		repoName(folderPath, function(err, name) {
			vscode.window.setStatusBarMessage(name);
		  });

	    //  vscode.window.setStatusBarMessage(repoName.sync());
	});
	context.subscriptions.push(disposable);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
module.exports = {
	activate,
	deactivate
}
