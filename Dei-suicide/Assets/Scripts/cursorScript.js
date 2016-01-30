#pragma strict
var depth = 10.0;
var pos : Vector3;
 
function Start ()
{
     Cursor.visible = false;
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
}