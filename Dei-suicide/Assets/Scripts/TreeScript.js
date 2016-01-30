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
var wait : boolean;

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
	//if(Input.GetMouseButtonUp(0) && !wait)
	//{
	//	clicked = false;
//	}

	//if(wait)
//	{
//		wait = false;
//	}
}

function Update()
{
	if(Input.GetMouseButtonUp(0) && !wait)
	{
		clicked = false;
	}

	else
	{
		wait = false;
	}
}

function OnCollisionStay2D(other: Collision2D)
{
	if(other.gameObject.name == "Cursor")
	{
		if(Input.GetMouseButtonUp(0))
		{
			clicked = true;
			wait = true;
		}
	}

	if(flames.isPlaying)
	{
		burningTime -= Time.deltaTime;
	}

	if(burningTime <= 0)
	{
		Destroy(this.gameObject);
	}
}

function OnGUI()
{
	
	if(clicked)
	{
		//Gets the trees position in pixels
		screenPos = cam.WorldToScreenPoint(transform.position);
		//Creates clickable button beside. I just entered numbers until it worked.
		if (GUI.Button(Rect(screenPos.x + 20, -screenPos.y + 260,50,30),"Burn"))
		{
			print("You chose burn");
			rng = Random.Range(1,100);
			if(rng > 20)
			{
				print("BARNING");
				burn();
			}
			else
			{
				print("chop chop");
				cut();
			}
		}
		if (GUI.Button(Rect(screenPos.x + 20, -screenPos.y +300,50,30),"Cut"))
		{
			print("You chose burn");
			rng = Random.Range(1,100);
			if(rng > 20)
			{
				print("chop chop");
				cut();
			}
			else
			{
				print("BARNING");
				burn();
			}
		}
	}
}

function burn()
{
	print("You did the Jesus");
	clicked = false;
	flames.Play(true);
	//treeClone = Instantiate(rb, Vector3(transform.position.x + Random.Range(-4, 4), transform.position.y + Random.Range(-4, 4), 0), Quaternion.Euler(new Vector3(0,0,0)));
	//interactedWith = true;
	GUIScript.devotion+=10;
	if(spriteRen.sprite == houseSpr)
	{
		GUIScript.line = "Fire! My only weakness!";
	}
}

function cut()
{
	spriteRen.sprite = houseSpr;
	GUIScript.development+=10;
	//clicked = false;
	//interactedWith = true;
}