Dim linhas 
linhas = DataTable.GetSheet("EmprestimoTeste").GetRowCount

Dim i
i = 1
While i <= linhas	
	Browser("ForwardCars").Page("ForwardCars").WebButton("Guest").Click
	Browser("ForwardCars").Page("ForwardCars").WebMenu("Log In Register").Select "Log In" @@ script infofile_;_ZIP::ssf2.xml_;_
	Browser("ForwardCars").Page("ForwardCars").WebEdit("username").Set DataTable.GetSheet("EmprestimoTeste").GetParameter("username").ValueByRow(i) @@ script infofile_;_ZIP::ssf3.xml_;_
	Browser("ForwardCars").Page("ForwardCars").WebEdit("password").Set DataTable.GetSheet("EmprestimoTeste").GetParameter("password").ValueByRow(i) @@ script infofile_;_ZIP::ssf4.xml_;_
	Browser("ForwardCars").Page("ForwardCars").WebButton("Sign In").Click @@ script infofile_;_ZIP::ssf5.xml_;_
	Wait(1)
	Browser("ForwardCars").Page("ForwardCars").Link("Loan Application").Click @@ script infofile_;_ZIP::ssf8.xml_;_
	Browser("ForwardCars").Page("ForwardCars").WebEdit("First Name").Set DataTable.GetSheet("EmprestimoTeste").GetParameter("firstname").ValueByRow(i) @@ script infofile_;_ZIP::ssf9.xml_;_
	Browser("ForwardCars").Page("ForwardCars").WebEdit("Last Name").Set  DataTable.GetSheet("EmprestimoTeste").GetParameter("lastname").ValueByRow(i) @@ script infofile_;_ZIP::ssf11.xml_;_
	Browser("ForwardCars").Page("ForwardCars").WebEdit("dob").Set  DataTable.GetSheet("EmprestimoTeste").GetParameter("dob").ValueByRow(i) @@ script infofile_;_ZIP::ssf32.xml_;_
	Browser("ForwardCars").Page("ForwardCars").WebEdit("address-line1").Set  DataTable.GetSheet("EmprestimoTeste").GetParameter("address-line1").ValueByRow(i) @@ script infofile_;_ZIP::ssf15.xml_;_
	Wait(1)
	Browser("ForwardCars").Page("ForwardCars").WebEdit("employer").Set  DataTable.GetSheet("EmprestimoTeste").GetParameter("employer").ValueByRow(i) @@ script infofile_;_ZIP::ssf17.xml_;_
	Browser("ForwardCars").Page("ForwardCars").WebEdit("city").Set  DataTable.GetSheet("EmprestimoTeste").GetParameter("city").ValueByRow(i) @@ script infofile_;_ZIP::ssf18.xml_;_
	Browser("ForwardCars").Page("ForwardCars").WebEdit("phone").Set  DataTable.GetSheet("EmprestimoTeste").GetParameter("phone").ValueByRow(i) @@ script infofile_;_ZIP::ssf20.xml_;_
	Browser("ForwardCars").Page("ForwardCars").WebEdit("state").Set  DataTable.GetSheet("EmprestimoTeste").GetParameter("state").ValueByRow(i) @@ script infofile_;_ZIP::ssf21.xml_;_
	Browser("ForwardCars").Page("ForwardCars").WebEdit("ltJob").Set  DataTable.GetSheet("EmprestimoTeste").GetParameter("ltJob").ValueByRow(i) @@ script infofile_;_ZIP::ssf23.xml_;_
	Browser("ForwardCars").Page("ForwardCars").WebEdit("postal-code").Set  DataTable.GetSheet("EmprestimoTeste").GetParameter("zip").ValueByRow(i) @@ script infofile_;_ZIP::ssf24.xml_;_
	Browser("ForwardCars").Page("ForwardCars").WebEdit("yIncome").Set  DataTable.GetSheet("EmprestimoTeste").GetParameter("ylncome").ValueByRow(i) @@ script infofile_;_ZIP::ssf25.xml_;_
	Browser("ForwardCars").Page("ForwardCars").WebEdit("dob").Set  DataTable.GetSheet("EmprestimoTeste").GetParameter("dob").ValueByRow(i) @@ script infofile_;_ZIP::ssf26.xml_;_
	Browser("ForwardCars").Page("ForwardCars").WebEdit("lAmount").Set  DataTable.GetSheet("EmprestimoTeste").GetParameter("lAmount").ValueByRow(i) @@ script infofile_;_ZIP::ssf28.xml_;_
	Browser("ForwardCars").Page("ForwardCars").WebButton("48 mo").Click @@ script infofile_;_ZIP::ssf40.xml_;_
	Wait(2)
	Browser("ForwardCars").Page("ForwardCars").WebButton("Apply").Click
	Wait(2)
	AIUtil.SetContext Browser("creationtime:=0")
	AIUtil.FindTextBlock("Application Submitted!").CheckExists True
	AIUtil("button", "OK").CheckExists True
	Browser("ForwardCars").Page("ForwardCars").WebButton("OK").Click @@ script infofile_;_ZIP::ssf30.xml_;_
	i = i + 1		
Wend

 @@ script infofile_;_ZIP::ssf37.xml_;_
