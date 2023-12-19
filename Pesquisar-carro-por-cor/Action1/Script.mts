Dim totalRows1
totalRows1 = DataTable.GetSheet("pesquisaCorCarro").GetRowCount


Dim i
i = 1 
While i <= totalRows1
	AIUtil.SetContext Window("text:=ForwardCars - Trabalho — Microsoft​ Edge", "regexpwndtitle:=Trabalho — Microsoft​ Edge", "regexpwndclass:=Chrome_WidgetWin_1", "is owned window:=False", "is child window:=False")
	Browser("ForwardCars").Page("ForwardCars").Link("Search").Click
	Browser("ForwardCars").Page("ForwardCars").WebEdit("Year, Color...").Set DataTable.GetSheet("pesquisaCorCarro").GetParameter("cor").ValueByRow(i) @@ script infofile_;_ZIP::ssf2.xml_;_
	Wait(1)
	Browser("ForwardCars").Page("ForwardCars").WebButton("View Details").Click @@ script infofile_;_ZIP::ssf3.xml_;_
	AIUtil.FindTextBlock(DataTable.GetSheet("pesquisaCorCarro").GetParameter("cor").ValueByRow(i), micFromBottom, 1).CheckExists True
	AIUtil.FindTextBlock(DataTable.GetSheet("pesquisaCorCarro").GetParameter("cor").ValueByRow(i), micFromBottom,1 ).Highlight
	Browser("ForwardCars").Page("ForwardCars").WebButton("OK").Click
	Wait(1)
	i = i + 1
Wend

