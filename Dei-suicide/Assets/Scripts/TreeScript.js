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
		rng = Random.Range(1,100);
		//Gets the trees position in pixels
		screenPos = cam.WorldToScreenPoint(transform.position);
		//Creates clickable button beside. I just entered numbers until it worked.
		if (GUI.Button(Rect(screenPos.x + 20, -screenPos.y + 260,50,30),"Burn"))
		{
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
			if(rng > 20)
			{
				print("BARNING");
				cut();
			}
			else
			{
				print("chop chop");
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
	interactedWith = true;
	GUIScript.devotion+=10;
	if(spriteRen.sprite == houseSpr)
	{
		GUIScript.line = "Fire! My only weakness!";
	}
	return 1;
}

function cut()
{
	spriteRen.sprite = houseSpr;
	GUIScript.development+=10;
	//clicked = false;
	//interactedWith = true;
}