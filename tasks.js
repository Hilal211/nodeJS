
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
function startApp(name){
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
console.log('writ hello and your name:');
var tasks=['hello','quit','exit','help'];
function onDataReceived(text) {
  
  if (text.trim() === 'quit'||text.trim()==='exit') {
    quit();
  }
  else if(text.trim().split(" ",1) == 'hello' || text.trim()==='hello'){
   if(text.trim()==='hello'){
     var tt="";
     hello(tt);
   }else{
    var nameUser=text.trim().substring((text.trim()).lastIndexOf(" ")+1);
    hello(nameUser);
   }
  }
  else if(text.trim()==='help' || text.trim().split(" ",1) == 'help'){
    help();
  }
  else if(text.trim()==='list'){
    list(tasks);
  }
  else if(text.trim().split(" ",1)=='add'){
    var element;
    element=text.trim().split(" ").pop().trim();
    add(element,tasks)
  }
  else if(text.trim().split(" ",1)=='remove'){
    var re=text.trim().split(" ").pop().trim();
    remove(re,tasks);
  }
  else{
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
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(nameUser){
  if(nameUser===""){
    console.log('hello!');
  }
  else{
  console.log('hello '+nameUser+'!')
  }
}


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}
/** 
 * lists all the possible commands
 * 
@returns {void}
*/
function help(){
  console.log("hello ,quit or exit,list,add,remove");
}

/**
 * 
 * @returns {void}
 */
function list(tasks){
for(let i=0;i<tasks.length;i++){
  console.log((i+1)+"-"+tasks[i]+"\n");
}
}
/**
 * 
 * @returns {void}
 * 
 */
function add(element,tasks){
if(element==='add'){
  console.log("error");
}
else{
 tasks=tasks.push(element);
 console.log(element+" is added");
}
}
/**
 * @returns {void}
 */
function remove(re,tasks){
  if(re==='remove'){
    tasks.pop()
    console.log("the last tasks is deleted")
  }
  else{
    if(re>=0 && re<=tasks.length){
    tasks.splice(parseInt(re)-1,1);
    console.log("tasks"+re+" is deleted");
    }
    else{
      console.log(re+" is not exist")
    }
  }
}

// The following line starts the application
startApp("Hilal Masri")
