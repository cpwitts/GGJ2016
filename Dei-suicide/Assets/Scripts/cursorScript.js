#pragma strict
var depth = 10.0;
var pos : Vector3;
var camObj : GameObject;
var cam : Camera;
var viewPos : Vector3;
var speed : float = 15.0f;
 
function Start ()
{
     Cursor.visible = false;
     camObj = GameObject.Find("Main Camera");
     cam = camObj.GetComponent(Camera);
}
 
function Update ()
{
     var mousePos = Input.mousePosition;
     var wantedPos = Camera.main.ScreenToWorldPoint (Vector3 (mousePos.x, mousePos.y, depth));
     transform.position = wantedPos;

     if(Input.GetMouseButtonDown(0))
     {
     	pos = wantedPos;
     }

     viewPos = cam.WorldToViewportPoint(transform.position);

     if (viewPos.x < 0.01 && camObj.transform.position.x > -20)
     {
     	camObj.transform.Translate(Vector3.left * speed * Time.deltaTime);
     }
      else if (viewPos.x > 0.99 && camObj.transform.position.x < 20)
     {
     	camObj.transform.Translate(Vector3.right * speed * Time.deltaTime);
     }

     if (viewPos.y < 0.01 && camObj.transform.position.y > -10)
     {
     	camObj.transform.Translate(Vector3.down * speed * Time.deltaTime);
     }
      else if (viewPos.y > 0.99 && camObj.transform.position.y < 10)
     {
     	camObj.transform.Translate(Vector3.up * speed * Time.deltaTime);
     }
}