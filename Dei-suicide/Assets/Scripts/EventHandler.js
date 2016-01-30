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

var tree : Rigidbody2D;
var star : Rigidbody2D;
var treeClone : Rigidbody2D;
var starClone : Rigidbody2D;
//var posi: Vector3;
function Start ()
{
	devotion = 0;
	development = 0;
	line = "Why can't I die";
	camObj = GameObject.Find("Main Camera");
	cam = camObj.GetComponent(Camera);
	S_height = 2f*cam.orthographicSize;//height of screen
	S_width = S_height*cam.main.aspect;//width of screen
	position3 = new Rect(0, Screen.height - 30, Screen.width, 30);

	/*for(var i : int = 0; i < 5; i++)
	{
		//posi = 0,0,0;
		treeClone = Instantiate(tree, Vector3(transform.position.x + Random.Range(-20, 20),
		transform.position.y + Random.Range(-10, 10), 0), Quaternion.Euler(new Vector3(0,0,0)));
	}
	for(i = 0; i < 2; i++)
	{
		//posi = 0,0,0;
		starClone = Instantiate(star, Vector3(transform.position.x + Random.Range(-20, 20),
		transform.position.y + Random.Range(-10, 10), 0), Quaternion.Euler(new Vector3(0,0,0)));
	}*/
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