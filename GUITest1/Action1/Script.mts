'AIUtil.SetContext Browser("creationtime:=0")
'AIUtil("text_box", "Usemame").Type "pah"
'AIUtil("text_box", "Password").Type "123"
'AIUtil("button", "Sign In").Click

Browser("ForwardCars").Navigate "http://localhost:3434/cars-app/#/login" @@ hightlight id_;_1246308_;_script infofile_;_ZIP::ssf23.xml_;_
Browser("ForwardCars").Page("ForwardCars_3").WebEdit("username").Set GetDataSource("Login").GetValue(2, "user") @@ script infofile_;_ZIP::ssf19.xml_;_
Browser("ForwardCars").Page("ForwardCars_3").WebEdit("password").SetSecure "6570ce35ee4fc02dcd39aaf0" @@ script infofile_;_ZIP::ssf20.xml_;_
Browser("ForwardCars").Page("ForwardCars_3").WebButton("Sign In").Click @@ script infofile_;_ZIP::ssf21.xml_;_
Wait(5)
