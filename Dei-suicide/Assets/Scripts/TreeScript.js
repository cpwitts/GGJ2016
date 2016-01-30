#pragma strict

var GUIScript : EventHandler;
var playObj : GameObject;
var curScript : cursorScript;
var clicked : boolean = false;
var camObj : GameObject;
var cam : Camera;
var screenPos : Vector3;

function Start ()
{
	playObj = GameObject.Find("LabelController");
	GUIScript = playObj.GetComponent(EventHandler);
	camObj = gameObject.Find("Main Camera");
	cam = camObj.GetComponent(Camera);
}

function Update ()
{
}

function OnCollisionStay2D(other: Collision2D)
{
	if(other.gameObject.name == "Cursor")
	{
		if(Input.GetMouseButtonDown(0))
		{
			//GUIScript.devotion+= 10;

			clicked = true;
		}
	}
}

function OnGUI()
{
	if(clicked)
	{
		//Gets the trees position in pixels
		screenPos = cam.WorldToScreenPoint(transform.position);
		//Creates clickable button beside. I just entered numbers until it worked.
		if (GUI.Button(Rect(screenPos.x + 20, -screenPos.y + 260,50,30),"Click"))
		{
			print("You did the Jesus");
			clicked = false;
		}
	}
}