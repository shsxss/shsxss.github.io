var w = new Date();
var day = w.getDay() + 1;
function displayDate(var fday){
  if (day == fday)
  {
    document.write("<th class='red'>");
  }
  else
  {
    document.write("<th class='blue'>");
  }
}
document.write("<table border='3'><tr><th>时段</th><th>时间</th><th>节数</th>");
disPlayDate(1);
document.write("星期一</th>");
disPlayDate(2);
document.write("星期二</th>");
disPlayDate(3);
document.write("星期三</th>");
disPlayDate(4);
document.write("星期四</th>");
disPlayDate(5);
document.write("星期五</th>");
