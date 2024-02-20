const url = args[0]
let jsonData = JSON.stringify(JSON.parse(atob(url.replace("https://discord.com/__development/link?s=","").split(".")[1])),null,4)
jsonData
