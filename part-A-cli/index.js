const tasktitle = process.argv[2];
if(!tasktitle){
    console.log("Please enter a task");
} else {
    console.log("Your Task:", tasktitle);
}