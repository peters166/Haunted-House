var beento = [false, false, false, false];
function initialize()
{
    const location = location.href.split("/").slice(-1); 
    var visited = true;
    switch(location)
    {
        case "index.html":
        {
            visited = beento[0];
            break;
        }
        case "lobby.html":
        {
            visited = beento[1];
            break;
        }
        case "kitchen.html":
        {
            visited = beento[2];
            break;
        }
        case "guestroom.html":
        {
            visited = beento[3];
            break;
        }
    }
    if(visited)
    {
        document.getElementById("visittext").innerHTML = "You've already visited this area. Go explore more!";
    }
}
function visit()
{
    const location = location.href.split("/").slice(-1); 
    switch(location)
    {
        case "index.html":
        {
            beento[0] = true;
            break;
        }
        case "lobby.html":
        {
            beento[1] = true;
            break;
        }
        case "kitchen.html":
        {
            beento[2] = true;
            break;
        }
        case "guestroom.html":
        {
            beento[3] = true;
            break;
        }
    }
}