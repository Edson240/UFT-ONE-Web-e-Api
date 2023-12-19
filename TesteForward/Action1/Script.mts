Dim totalRows 
totalRows = DataTable.GetSheet("Register").GetRowCount

Dim i
i = 1
While i <= totalRows
	Wait(1)
	Browser("ForwardCars").Page("ForwardCars").WebButton("Guest").Click
	Browser("ForwardCars").Page("ForwardCars").WebMenu("Log In Register").Select "Register" @@ script infofile_;_ZIP::ssf68.xml_;_
	Browser("ForwardCars").Page("ForwardCars").WebEdit("firstname").Set DataTable.GetSheet("Register").GetParameter("firstname").ValueByRow(i) @@ script infofile_;_ZIP::ssf70.xml_;_
	Browser("ForwardCars").Page("ForwardCars").WebEdit("lastname").Set DataTable.GetSheet("Register").GetParameter("lastname").ValueByRow(i) @@ script infofile_;_ZIP::ssf72.xml_;_
	Browser("ForwardCars").Page("ForwardCars").WebEdit("username").Set DataTable.GetSheet("Register").GetParameter("username").ValueByRow(i) @@ script infofile_;_ZIP::ssf74.xml_;_
	Browser("ForwardCars").Page("ForwardCars").WebEdit("password").Set DataTable.GetSheet("Register").GetParameter("password").ValueByRow(i) @@ script infofile_;_ZIP::ssf76.xml_;_
	Wait(2)
	Browser("ForwardCars").Page("ForwardCars").WebButton("Register").Click @@ script infofile_;_ZIP::ssf78.xml_;_
	Wait(2)
	AIUtil.SetContext Browser("creationtime:=0")
	AIUtil("button", "Sign In").CheckExists True
	AIUtil.FindTextBlock("Sign In").Highlight
	Wait(3)
	AIUtil.FindTextBlock("Please sign in").CheckExists True
	i = i + 1
Wend
 @@ script infofile_;_ZIP::ssf46.xml_;_
