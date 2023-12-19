Dim linhas 
linhas = DataTable.GetSheet("registerInvalido").GetRowCount

Browser("ForwardCars").Page("ForwardCars").WebButton("Guest").Click
Browser("ForwardCars").Page("ForwardCars").WebMenu("Log In Register").Select "Register"

Dim i
i = 1
While i <= linhas @@ script infofile_;_ZIP::ssf2.xml_;_
	Browser("ForwardCars").Page("ForwardCars").WebEdit("firstname").Set DataTable.GetSheet("registerInvalido").GetParameter("firstname").ValueByRow(i) @@ script infofile_;_ZIP::ssf3.xml_;_
	Browser("ForwardCars").Page("ForwardCars").WebEdit("lastname").Set DataTable.GetSheet("registerInvalido").GetParameter("lastname").ValueByRow(i) @@ script infofile_;_ZIP::ssf5.xml_;_
	Browser("ForwardCars").Page("ForwardCars").WebEdit("username").Set DataTable.GetSheet("registerInvalido").GetParameter("username").ValueByRow(i) @@ script infofile_;_ZIP::ssf6.xml_;_
	Browser("ForwardCars").Page("ForwardCars").WebEdit("password").Set DataTable.GetSheet("registerInvalido").GetParameter("password").ValueByRow(i) @@ script infofile_;_ZIP::ssf9.xml_;_
	Browser("ForwardCars").Page("ForwardCars").WebButton("Register").Click
	AIUtil.SetContext Browser("creationtime:=2")
	AIUtil.FindTextBlock("Please provide the following").CheckExists True
	Wait(2)
	i = i + 1 @@ script infofile_;_ZIP::ssf26.xml_;_
Wend
