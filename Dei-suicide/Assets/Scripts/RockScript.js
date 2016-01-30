#pragma strict

var GUIScript : EventHandler;
var playObj : GameObject;
var curScript : cursorScript;
var clicked : boolean = false;
var camObj : GameObject;
var cam : Camera;
var screenPos : Vector3;
var interactedWith : boolean = false;
var flames : ParticleSystem;
var burningTime : float = 3.0f;
var rng : float;
var rb : Rigidbody2D;
var treeClone : Rigidbody2D;
var spriteRen : SpriteRenderer;
var houseSpr : Sprite;

function Start ()
{
	playObj = GameObject.Find("LabelController");
	GUIScript = playObj.GetComponent(EventHandler);
	camObj = gameObject.Find("Main Camera");
	cam = camObj.GetComponent(Camera);
	rb = this.gameObject.GetComponent(Rigidbody2D);
	spriteRen = this.gameObject.GetComponent(SpriteRenderer);
}

function FixedUpdate ()
{
	if(Input.GetMouseButtonUp(0))
	{
		clicked = false;
	}
}

function OnCollisionStay2D(other: Collision2D)
{
	if(other.gameObject.name == "Cursor" && !interactedWith && !clicked)
	{
		if(Input.GetMouseButtonUp(0))
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
		rng = Random.Range(1,100);
		//Gets the trees position in pixels
		screenPos = cam.WorldToScreenPoint(transform.position);
		//Creates clickable button beside. I just entered numbers until it worked.
		if (GUI.Button(Rect(screenPos.x + 20, -screenPos.y + 260,70,30),"Geology"))
		{
			if(rng > 20)
			{
				print("Rocks");
				Geology();
			}
			else
			{
				print("Pray");
				Temple();
			}
		}
		if (GUI.Button(Rect(screenPos.x + 20, -screenPos.y +300,60,30),"Temple"))
		{
			if(rng > 20)
			{
				print("Pray");
				Temple();
			}
			else
			{
				print("Rocks");
				Geology();
			}
		}
	}
}

function Geology()
{
	print("You did the Jesus");
	clicked = false;
	//flames.Play(true);
	//treeClone = Instantiate(rb, Vector3(transform.position.x + Random.Range(-4, 4), transform.position.y + Random.Range(-4, 4), 0), Quaternion.Euler(new Vector3(0,0,0)));
	interactedWith = true;
	GUIScript.development+=10;
	GUIScript.line = "Why... would you want to look at rocks?";
	return 1;
}

function Temple()
{
	spriteRen.sprite = houseSpr;
	GUIScript.devotion+=10;
	GUIScript.line = "No, the Sun God!! Anyone but him!";
	clicked = false;
	interactedWith = true;
}