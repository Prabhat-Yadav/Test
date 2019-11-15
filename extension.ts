import * as vscode from 'vscode';
const branch = require('git-branch');

const branch = require('git-branch');
// var getRepoInfo = require('git-repo-info');

//const branchName = require('current-git-branch');


/**
 * @param {vscode.ExtensionContext} context
 */
export function activate(context: vscode.ExtensionContext)  {

	let folderPath = vscode.workspace.rootPath;
	let yuyuyu = vscode.window.onDidChangeWindowState;


	let disposable = vscode.commands.registerCommand('extension.teest', function () {
		  if (folderPath) {
			branch(`${folderPath}`)
				.then(name => {
				 repoName(folderPath, function(err, reponame) {
					 vscode.window.showInformationMessage(yuyuyu)

					vscode.window.set
					vscode.window.setStatusBarMessage("GitSwirl AAAAAAAAA  [Repository]: "+ reponame + " [Branch]: "+ name);
				});
					
				}) //=> 'master'
				.catch(console.error);
		}
		else {
			vscode.window.setStatusBarMessage("NO REPO ddddd Please Enter Into A Repo")
			
		}
		
		

	    //  vscode.window.setStatusBarMessage(repoName.sync());
	});
	context.subscriptions.push(disposable);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
module.exports = {
	activate,
export function	deactivate()}
