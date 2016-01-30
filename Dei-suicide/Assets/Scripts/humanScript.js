#pragma strict
var playObj : GameObject;
var curScript : cursorScript;
var speed : float = 3.0f;
var move : boolean = false;
var acceptanceRange : float = 1.0f;
//This is NOT a bug workaround, I swear. Please stop judging me
var willOfGod : int = 0;
var distanceVec : Vector3;

function Start () 
{
	playObj = GameObject.Find("Cursor");
	curScript = playObj.GetComponent(cursorScript);
}

function Update () 
{
		if(Input.GetMouseButtonDown(0))
		{
			move = true;
			willOfGod = 5;
		}


		if (move)
		{
			distanceVec = new Vector3 ( curScript.pos.x - transform.position.x ,  curScript.pos.y - transform.position.y, 0);

			if (distanceVec.magnitude < acceptanceRange && willOfGod == 0)
			{
				move = false;
				print(distanceVec);
			}

			Vector3.Normalize(distanceVec);
			transform.Translate(distanceVec * speed * Time.deltaTime);

		}

		if(willOfGod > 0)
		{
			willOfGod --;
		}
}

function OnCollisionStay2D(other: Collision2D)
{
	if (other.gameObject.tag != "human" && distanceVec.magnitude < acceptanceRange * 5)
	{
		move = false;
	}
}