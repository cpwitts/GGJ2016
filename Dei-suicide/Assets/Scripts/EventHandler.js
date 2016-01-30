#pragma strict

var devotion: int;
var development: int;
var whatever : GUIStyle;
var position1 : Rect = new Rect(0, 0, 200, 100);
var position2 : Rect = new Rect(0, 10, 200, 100);
 

function Start ()
{
	devotion = 30;
	development = 0;

	//labelForDevotion = new GUI.Label(position2, "Development: " + development);
}

function Update ()
{

}

function OnGUI()
{
	GUI.Box(position1, "Devotion: " + devotion, whatever);
	GUI.Box(position2, "Development: " + development, whatever);

//	var labelForDevotion : GUI;
//	var labelForDevelopment: GUI;
//	labelForDevotion.Label(position1, "Devotion: " + devotion);
}