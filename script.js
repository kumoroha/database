function table(datalist, tableid) {
    const rows = datalist.map(char => {
        return `<tr>
        <td>${char[0]}</td>
        <td>${char[1]}</td>
        <td>${char[2]}</td>
        <td>${char[3]}</td>
        <td>${char[4]}</td>
        </tr>`;
    }).join('');
    document.getElementById(tableid).innerHTML = rows;
}
table(datalist_shinkansen, 'table_shinkansen');