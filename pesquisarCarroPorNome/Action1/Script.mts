Dim totalRows2
totalRows2 = DataTable.GetSheet("nomeCarro").GetRowCount


Dim i
i = 1 
While i <= totalRows2
	Wait(1)
	AIUtil.SetContext Browser("creationtime:=0")
	Browser("ForwardCars").Page("ForwardCars").Link("Search").Click @@ script infofile_;_ZIP::ssf3.xml_;_
	Browser("ForwardCars").Page("ForwardCars").WebEdit("Year, Color...").Set DataTable.GetSheet("nomeCarro").GetParameter("marca").ValueByRow(i)
	Wait(1)
	AIUtil.FindTextBlock(DataTable.GetSheet("nomeCarro").GetParameter("resultado").ValueByRow(i), micFromLeft, 1).CheckExists True
	AIUtil.FindTextBlock(DataTable.GetSheet("nomeCarro").GetParameter("resultado").ValueByRow(i), micFromLeft, 1).Highlight
	i = i + 1
Wend

