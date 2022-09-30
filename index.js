// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    desciption: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}



// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take crap out of the littter box"); // task 0
const task2 = newTask("Do Laundry", "Do the laundry as done"); // task 1
const tasks = [task1, task2];



task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed

console.log(tasks);
