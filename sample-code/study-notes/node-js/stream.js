"use strict";var fs=require("fs"),rs1=fs.createReadStream("./sample.txt","utf-8"),ws1=fs.createWriteStream("./sample-write.txt","utf-8");rs1.on("data",e=>{console.log("DATA:"),console.log(e)}),rs1.on("end",()=>{console.log("END")}),ws1.write("Testing for write stream!"),rs1.pipe(ws1,!1);