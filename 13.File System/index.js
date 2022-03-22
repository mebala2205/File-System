const fs=require("fs");
const Dateinfo= new Date();
const currentday=`${Dateinfo.getDate()}-${Dateinfo.getMonth()}-${Dateinfo.getFullYear()} ` ;
const data=` Data generated on ${currentday}
Lorem Ipsum is simply dummy text of
the printing and typesetting industry. Lorem Ipsum has been the industry's 
standard dummy text ever since the 1500s, when an unknown printer took a galley
of type and scrambled it to make a type specimen book.`


if(!fs.existsSync("Temp")){
     fs.mkdirSync("Temp")
     fs.appendFile(`./Temp/${currentday}.txt`,data,(err)=>{
         if(err){
             console.log(err);
         }
         else{
             console.log("File is created successfully");
         }
     })
}else{
  fs.appendFile(`./Temp/${currentday}.txt`,data,(err)=>{
      if(err)
      {
          console.log("Erro");
      }
      else{
          console.log("File is creaetd Successfully");
      }
  })
}

fs.readFile(`./Temp/${currentday}.txt`,"utf-8",(err,data)=>{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log(data);
    }
})