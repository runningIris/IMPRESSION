
//MyPosts.cshtml____按钮事件：显示写文章的栏
var writeBtn = document.getElementById("writeBtn");
var writeArea = document.getElementById("writeArea");
writeBtn.onclick = function ()
{
    writeArea.style.visibility = "visible";
}