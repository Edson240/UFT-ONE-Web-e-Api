Dim linhas 
linhas = DataTable.GetSheet("Register").GetRowCount


Dim i
i = 1
While i <= linhas
	Wait(2)		
	Browser("ForwardCars").Page("ForwardCars").WebEdit("username").Set DataTable.GetSheet("Login-Teste").GetParameter("username").ValueByRow(i)
	Browser("ForwardCars").Page("ForwardCars").WebEdit("password").Set DataTable.GetSheet("Login-Teste").GetParameter("password").ValueByRow(i)
	Wait(1)
	Browser("ForwardCars").Page("ForwardCars").WebButton("Sign In").Click
	Wait(1)
	Browser("ForwardCars").Page("ForwardCars").WebElement("xpath:=/html/body/div[1]/div[1]/div/div/div[2]/ul/li[5]/a/span[1]").Click
	Wait(1)
	Browser("ForwardCars").Page("ForwardCars").WebMenu("Log in Register").Select "Logout"
	Browser("ForwardCars").Page("ForwardCars").WebButton("Guest").Click
	Browser("ForwardCars").Page("ForwardCars").WebMenu("Log In Register").Select "Log In"
	i = i + 1		
Wend

