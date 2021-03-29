
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name) {
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */

var tasks = ['hello', 'quit', 'exit', 'help'];

var fs=require('fs');
var data=fs.readFileSync('database.json','utf-8');
try {
  if (data == "") throw "Empty"
}
catch { data = '[{ "name": "hi", "done": true }] ' }
var tasksD=JSON.parse(data);




function onDataReceived(text) {

  if (text.trim() === 'quit' || text.trim() === 'exit') {
    quit();
  }
  else if (text.trim().split(" ", 1) == 'hello' || text.trim() === 'hello') {
    if (text.trim() === 'hello') {
      var tt = "";
      hello(tt);
    } else {
      var nameUser = text.trim().substring((text.trim()).lastIndexOf(" ") + 1);
      hello(nameUser);
    }
  }
  else if (text.trim() === 'help' || text.trim().split(" ", 1) == 'help') {
    help();
  }
  else if (text.trim() === 'list') {
    list(tasksD);
  }
  else if (text.trim().split(" ", 1) == 'add') {
    var element;
    element = text.trim().split(" ").pop().trim();
    add(element, tasksD)
  }
  else if (text.trim().split(" ", 1) == 'remove') {
    var re = text.trim().split(" ").pop().trim();
    remove(re, tasksD);
  }
  else if (text.trim().split(" ", 1) == 'edit') {
    var ed = text.trim().split(" ");
    edit(ed, tasksD);
  }
  else if (text.trim().split(" ", 1) == 'check') {
    var che = text.trim().split(" ");
    check(tasksD, che);
  }
  else if (text.trim().split(" ", 1) == 'uncheck') {
    var chec = text.trim().split(" ");
    uncheck(tasksD, chec);
  }
  else {
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c) {
  console.log('unknown command: "' + c.trim() + '"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(nameUser) {
  if (nameUser === "") {
    console.log('hello!');
  }
  else {
    console.log('hello ' + nameUser + '!')
  }
}


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit() {
  var fs = require('fs');

  fs.writeFileSync('database.json', data);
  console.log('Quitting now, goodbye!')
  process.exit();
}
/** 
 * lists all the possible commands
 * 
@returns {void}
*/
function help() {
  console.log("hello ,quit or exit,list,add,remove,check,uncheck");
}

/**
 * 
 * @returns {void}
 */
function list(tasksD) {
  for (let i = 0; i < tasksD.length; i++) {
    if (tasksD[i].done) {
      console.log("[✓] " + tasksD[i].name)
    }
    else {
      console.log("[ ] " + tasksD[i].name)
    }
  }
}
/**
 * 
 * @returns {void}
 * 
 */
function add(element, tasksD) {
  if (element === 'add') {
    console.log("error");
  }
  else {
    let newTask = {
      name: element.trim(),
      done: false
    };
    tasksD.push(newTask);
    console.log(element + " is added");
  }
}
/**
 * @returns {void}
 */
function remove(re, tasksD) {
  if (re === 'remove') {
    tasksD.pop()
    console.log("the last tasks is deleted")
  }
  else {
    if (re >= 0 && re <= tasks.length) {
      tasksD.splice(parseInt(re) - 1, 1);
      console.log("tasks" + re + " is deleted");
    }
    else {
      console.log(re + " is not exist")
    }
  }
}

/**
 * @returns {void}
 */
function edit(re, tasksD) {
  if (re.length == 1) {
    console.log("error");
  }
  else if (re.length == 2) {
    tasksD[tasksD.length - 1].name = re[1];
    console.log("last tasks edited")
  }
  else if (re.length == 3) {
    tasksD[re[1] - 1].name = re[2];
    console.log("task " + re[1] + " edited")
  }
}
/**
 * 
 * @returns {void}
 */
function check(tasksD, che) {
  if (che.length == 1) {
    console.log("error");
  }
  else {
    tasksD[che[1] - 1].done = true;
  }
}

/**
 * @returns {void}
 */
function uncheck(tasksD, chec) {
  if (chec.length == 1) {
    console.log("error");
  }
  else {
    tasksD[chec[1] - 1].done = false;
  }
}




// The following line starts the application
startApp("Hilal Masri")
