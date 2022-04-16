<!DOCTYPE html>
<html>
<head>
<title>METANIT.COM</title>
<meta charset="utf-8" />
</head>
<body>
<h2>Список пользователей</h2>
<?php
$link = mysqli_connect("localhost", "modx", "localhost","wp");

if ($link == false){
    print("Ошибка: Невозможно подключиться к MySQL " . mysqli_connect_error());
}
else {
    print("Соединение установлено успешно");
}


$sql = "SELECT * FROM wp_posts";
if($result = $link->query($sql)){
    $rowsCount = $result->num_rows; // количество полученных строк
    echo "<p>Получено объектов: $rowsCount</p>";
    echo "<table><tr><th>Id</th><th>Имя</th><th>Возраст</th></tr>";
    foreach($result as $row){
        echo "<tr>";
            echo "<td>" . $row["ID"] . "</td>";
            echo "<td>" . $row["post_title"] . "</td>";
            echo "<td>" . $row["post_content"] . "</td>";
        echo "</tr>";
    }
    echo "</table>";
    $result->free();
} else{
    echo "Ошибка: " . $link->error;
}
$link->close();
?>
</body>
</html>