function add(arrText) {
    if (arrText[1] != undefined) {
      let newTask = {
        name: "",
        done: false
      };
      arrText.forEach(text => {
        if (text == "") return
        newTask.name += `${text} `;
      })
      newTask.name = newTask.name.trim();
      tasks.push(newTask);
      console.log(`Task '${newTask.name}' was added`);
     
    }
    else {
      console.log("Error: no tasks were given");
    }
  }