var w = new Date();
var day = w.getDay();
document.write("<table border='3' id='table'><caption><h1>课程表</h1></caption><tr><th class='bblue'>时段</th><th class='bblue'>时间</th><th class='bblue'>节数</th>");
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
  document.write("<th class='red'>星期五</th></tr>");
}
else{
  document.write("<th class='blue'>星期五</th></tr>");
}
document.write("<tr><td>上午</td><td>7:10-7:50</td><td>早管</td><td>数学</td><td>语文</td><td>英语</td><td>数学</td><td>语文</td></tr>");
document.write("<tr><td>上午</td><td>8:00-8:40</td><td>第一节</td><td>语文</td><td>英语</td><td>语文</td><td>英语</td><td>数学</td></tr>");
document.write("<tr><td>上午</td><td>9:10-9:50</td><td>第二节</td><td>劳技</td><td>数学</td><td>科学</td><td>语文</td><td>体育</td></tr>");
document.write("<tr><td>上午</td><td>10:10-10:50</td><td>第三节</td><td>数学</td><td>科学</td><td>劳技</td><td>音乐</td><td>英语</td></tr>");
document.write("<tr><td>上午</td><td>10:10-10:50</td><td>第四节</td><td>英语</td><td>信息科技</td><td>数学</td><td>体育</td><td>语文</td></tr>");
document.write("<tr><td>中午</td><td>12:20-13:05</td><td>午管</td><td>英语</td><td>语文</td><td>数学</td><td>语文</td><td>英语</td></tr>");
document.write("<tr><td>下午</td><td>13:15-13:55</td><td>第五节</td><td>体育</td><td>阅读</td><td>英语</td><td>数学</td><td>地理</td></tr>");
document.write("</table>");
