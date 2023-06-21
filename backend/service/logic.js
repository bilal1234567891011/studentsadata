const db=require('./db')


const addStudent=(id,Name,Dob,selects,gender,Division)=>{
    return db.Student.findOne({id}).then(result=>{
         if(result){
             return {
                 statusCode:404,
                 message:"Student already exist"
             }
         
             }
             else{
                 const newEMP=new db.User({
                     id,Name,Dob,selects,gender,Division})
                 newEMP.save()
 
                 return{
                     statusCode:200,
                     message  :"Student detailes added"
                     
                 }
         }
     })  
 
 }


 const allStudent=()=>{
    return db.Student.find().then(result=>{
        if (result) {
            return {
                statusCode:200,
                Students: result
            }
        }
        else{
            return {
                statusCode:404,
                message:"no data avilabe"
            }
        }
    })
}

 module.exports={
 allStudent,addStudent,
}