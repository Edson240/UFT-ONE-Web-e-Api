Dim linhas 
linhas = DataTable.GetSheet("Login").GetRowCount


Dim i
i = 1
While i <= linhas
	Browser("ForwardCars").Page("ForwardCars").WebButton("Guest").Click @@ script infofile_;_ZIP::ssf3.xml_;_
	Browser("ForwardCars").Page("ForwardCars").WebMenu("Log In Register").Select "Log In" @@ script infofile_;_ZIP::ssf1.xml_;_
	Browser("ForwardCars").Page("ForwardCars").WebEdit("username").Set DataTable.GetSheet("Login").GetParameter("username").ValueByRow(i) @@ script infofile_;_ZIP::ssf4.xml_;_
	Browser("ForwardCars").Page("ForwardCars").WebEdit("password").Set DataTable.GetSheet("Login").GetParameter("password").ValueByRow(i) @@ script infofile_;_ZIP::ssf5.xml_;_
	Wait(1)
	Browser("ForwardCars").Page("ForwardCars").WebButton("Sign In").Click @@ script infofile_;_ZIP::ssf6.xml_;_
	Wait(1)
	AIUtil.SetContext Window("text:=ForwardCars - Trabalho — Microsoft​ Edge", "regexpwndtitle:=Trabalho — Microsoft​ Edge", "regexpwndclass:=Chrome_WidgetWin_1", "is owned window:=False", "is child window:=False")
	AIUtil.FindTextBlock("FORWARD").CheckExists True
	Browser("ForwardCars").Page("ForwardCars").WebElement("xpath:=/html/body/div[1]/div[1]/div/div/div[2]/ul/li[5]/a/span[1]").Click
	Wait(1)
	Browser("ForwardCars").Page("ForwardCars").WebMenu("Log in Register").Select "Logout"
	Browser("ForwardCars").Page("ForwardCars").WebButton("Guest").Click
	Browser("ForwardCars").Page("ForwardCars").WebMenu("Log In Register").Select "Log In"
	i = i + 1		
Wend
