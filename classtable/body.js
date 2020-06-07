var w = new Date();
var day = w.getDay();
document.write("<table border='3'><tr><th class='blue'>时段</th><th class='blue'>时间</th><th class='blue'>节数</th>");
if (day == 1){
  document.write("<th class='red'>星期一</th>");
}
else{
  document.write("<th class='blue'>星期一</th>");
}
if (day == 2){
  document.write("<th class='red'>星期二</th>");
}
else{
  document.write("<th class='blue'>星期二</th>");
}
if (day == 3){
  document.write("<th class='red'>星期三</th>");
}
else{
  document.write("<th class='blue'>星期三</th>");
}
if (day == 4){
  document.write("<th class='red'>星期四</th>");
}
else{
  document.write("<th class='blue'>星期四</th>");
}
if (day == 5){
  document.write("<th class='red'>星期五</th>");
}
else{
  document.write("<th class='blue'>星期五</th>");
}
document.write("</tr>");
