#pragma strict

var rng : float;
var interactedWith : boolean = false;
var clicked : boolean = false;
var screenPos : Vector3;
var GUIScript : EventHandler;
var playObj : GameObject;
var camObj : GameObject;
var cam : Camera;
var spriteRen : SpriteRenderer;
var usedSpr : Sprite;
var wait : boolean = false;
var goatRb : Rigidbody2D;
var humanRb : Rigidbody2D;
var sacrifice : Rigidbody2D;
var sacTime : float = 2f;
var sacBool : boolean = false;

function Start ()
{
	playObj = GameObject.Find("LabelController");
	GUIScript = playObj.GetComponent(EventHandler);
	camObj = gameObject.Find("Main Camera");
	cam = camObj.GetComponent(Camera);
	spriteRen = this.gameObject.GetComponent(SpriteRenderer);
}

function Update ()
{
	if(Input.GetMouseButtonUp(0) && !wait)
	{
		clicked = false;
	}
	else
	{
		wait = true;
	}

	if(sacBool && sacTime > 0)
	{
		sacTime -= Time.deltaTime;
	}

	if(sacTime <= 0)
	{
		spriteRen.sprite = usedSpr;
		Destroy(sacrifice.gameObject);
		Destroy(this);
	}
}

function OnCollisionStay2D(other: Collision2D)
{
	if(other.gameObject.name == "Cursor" && !interactedWith)
	{
		if(Input.GetMouseButtonUp(0))
		{
			print("hover");
			clicked = true;
			wait = true;
			rng = Random.Range(1,100);
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
		if (GUI.Button(Rect(screenPos.x + 20, -screenPos.y + 260,50,30),"Human"))
		{
			if(rng > 20)
			{
				print("Human");
				human();
			}
			else
			{
				print("Goat");
				goat();
			}
		}
		if (GUI.Button(Rect(screenPos.x + 20, -screenPos.y +300,50,30),"Goat"))
		{
			if(rng > 20)
			{
				print("Goat");
				goat();
			}
			else
			{
				print("Human");
				human();
			}
		}
	}
}

function human()
{
	GUIScript.devotion += 20;
	interactedWith = true;
	clicked = false;
	sacrifice = Instantiate(humanRb, Vector3(transform.position.x, transform.position.y, 0), Quaternion.Euler(new Vector3(0,0,0)));
	sacBool = true;
	//interactedWith = true;
}

function goat()
{
	GUIScript.development += 10;
	interactedWith = true;
	clicked = false;
	sacrifice = Instantiate(goatRb, Vector3(transform.position.x, transform.position.y, 0), Quaternion.Euler(new Vector3(0,0,0)));
	sacBool = true;

}