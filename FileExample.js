const fs = require ("fs");

const file = "./ConsumingModules.js";


///////////////////////////////////Sync Reading///////////////////////////////////

function fileReadingSync(){
    const contents = fs.readFileSync(file, "utf-8");
    console.log(contents);
}

// const contents = fs.readFileSync(file, "utf-8");
// console.log(contents);

///////////////////////////////////Async Reading//////////////////////////////////

function fileReadingAsync(){
fs.readFile(file, 'utf-8', function(err, data){
    if(err)
        console.log(err);
    else
    console.log(data);    
})
}

const obj = {"id": 123, "name": "Pavan R", "address": "Bangalore"};

function writeToFile(){
    fs.writeFileSync("SampleTextFile.txt", JSON.stringify(obj), "utf-8");
}

function writeToFileAsync(){
    fs.writeFile("SampleTextFile.txt", "Sample Text to Write", (err)=> {if(err) console.log(err)
        })
}

function appendingTofile(){
    fs.appendFileSync("SampleTextFile.txt", "\nContent will be appended to the next line\n", "utf-8");
}
appendingTofile();

function appendingTofileAsync(){
    fs.appendFile("SampleTextFile.txt", "\nContent will be appended to the next line\n", (err)=> {if(err) console.log(err)
    });
}

// appendingTofile();
appendingTofileAsync();


// fileReadingSync();
// fileReadingAsync();

// writeToFileAsync();
// writeToFile();
console.log("This code will execute after the file reading.");