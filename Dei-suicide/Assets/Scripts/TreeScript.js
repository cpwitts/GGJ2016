#pragma strict

var GUIScript : EventHandler;
var playObj : GameObject;
var curScript : cursorScript;


function Start ()
{
	playObj = GameObject.Find("GUIController");
	GUIScript = playObj.GetComponent(EventHandler);
}

function Update ()
{
}

function onMouseDown()
{
	GUIScript.devotion+= 10;
}