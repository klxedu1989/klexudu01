<?php
    //1.链接数据库
    mysql_connect('localhost','root','');
    //$mysqli = new mysqli("localhost","root","","5.27") 7的写法，不全
   
    //2.使用哪个数据库
    mysql_select_db('5.27');
    //编写sql语句
    $sql = 'SELECT * FROM msg';
    //执行sql
    $res=mysql_query($sql);
    //抓取数据
    $row=mysql_fetch_row($res);
    //打印一个对象
    echo var_dump($row);
    //执行完sql返回的是一个结果对象，$res是一个数组，无法展示出来

?>