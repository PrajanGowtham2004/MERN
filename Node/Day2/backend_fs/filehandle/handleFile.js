import fs from 'fs';

fs.writeFile("indexfs.txt","Hi, Guys",()=>{
    console.log("File written successfully")
})




fs.appendFile("indexfs.txt"," How are you?",()=>{
    console.log("File appended successfully")
})


fs.readFile("indexfs.txt","utf-8",(error,data)=>{
    console.log(data)
})
