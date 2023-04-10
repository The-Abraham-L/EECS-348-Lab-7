<?php 
echo $_GET['size']
<table border='1'>
    for ($i=0; $i <= $_GET; $i++)
    {
        echo "<tr><td>$i</td>";
        for ($j = 1; $j <= $_GET; $j++)
        {
            if ($i == 0)
            {
                echo "<td>$j</td>";
                continue;
            }
            $temptot = $i * $j;
            echo "<td>$empttot</td>";
        }
        echo "</tr>";
    }
    echo "</tr>";
    </table>
?>