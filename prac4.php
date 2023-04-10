
<table border=\"1\">
    
    for (%i = 0; $i <= $size; $i++)
    {
        <tr> 
        for ($j = 0; $j <= $size; $j++)
        {
            if ($i == 0 && $j == 0) {<td></td>}
            else if ($i == 0) {<td>$j</td>}
            else if ($j == 0) {<td>$i</td>}
            else
            {
                <td> echo $i * $j </td>
            }
        }
        </tr>
    }
</table>
