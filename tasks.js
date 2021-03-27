
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

var tasks=['hello','quit','exit','help'];
var tasksD = [
  {
    name: "hello",
    done: true
  },
  {
    name: "quit",
    done: false
  },
  {
    name: "exit",
    done: true
  },
  {
    name: "help",
    done: false
  }
]

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
    list(tasksD);
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
  else if(text.trim().split(" ",1)=='edit'){
    var ed=text.trim().split(" ");
    edit(ed,tasks);
  }
  else if(text.trim().split(" ",1)=='check'){
    var che=text.trim().split(" ");
    check(tasksD,che);
  }
  else if(text.trim().split(" ",1)=='uncheck'){
    var chec=text.trim().split(" ");
    uncheck(tasksD,chec);
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
function list(tasksD){
for(let i=0;i<tasksD.length;i++){
  if(tasksD[i].done){
    console.log("[✓] "+tasksD[i].name)
  }
  else{
    console.log("[ ] "+tasksD[i].name)
  }
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

/**
 * @returns {void}
 */
function edit(re,tasks){
  if(re.length==1){
    console.log("error");
  }
  else if(re.length==2){
    tasks[tasks.length-1]=re[1];
    console.log("last tasks edited")
  }
  else if(re.length==3){
    tasks[re[1]-1]=re[2];
    console.log("task "+re[1]+" edited")
  }
}
/**
 * @returns {void}
 */
 function check(tasksD,che){
   if(che.length==1){
     console.log("error");
   }
   else{
     tasksD[che[1]-1].done=true;
   }
 }

 /**
  * @returns {void}
  */
 function uncheck(tasksD,chec){
  if(chec.length==1){
    console.log("error");
  }
  else{
    tasksD[chec[1]-1].done=false;
  }
}
 

// The following line starts the application
startApp("Hilal Masri")
