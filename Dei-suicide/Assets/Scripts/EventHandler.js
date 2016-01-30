#pragma strict

var devotion: int;
var development: int;
var whatever : GUIStyle;
var thoughts: GUIStyle;
var position1 : Rect = new Rect(0, 0, 200, 100);
var position2 : Rect = new Rect(0, 10, 200, 100);
var position3 : Rect;
public var S_height:float;
public var S_width:float;	
var cam : Camera;
var camObj : GameObject;
var line : String;

function Start ()
{
	devotion = 30;
	development = 0;
	line = "Why can't I die";
	camObj = GameObject.Find("Main Camera");
	cam = camObj.GetComponent(Camera);
	S_height = 2f*cam.orthographicSize;//height of screen
	S_width = S_height*cam.main.aspect;//width of screen
	position3 = new Rect(0, Screen.height - 30, Screen.width, 30);

	//labelForDevotion = new GUI.Label(position2, "Development: " + development);
}

function Update ()
{

}

function OnGUI()
{
	GUI.Box(position1, "Devotion: " + devotion, whatever);
	GUI.Box(position2, "Development: " + development, whatever);
	GUI.Box(position3, line, thoughts);
//	var labelForDevotion : GUI;
//	var labelForDevelopment: GUI;
//	labelForDevotion.Label(position1, "Devotion: " + devotion);
}