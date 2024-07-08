document.querySelectorAll('.grid-item').forEach((item, index) => {
    item.addEventListener('click', (event) => {
        const columnCount = getComputedStyle(item.parentElement).gridTemplateColumns.split(' ').length;
        const rowCount = getComputedStyle(item.parentElement).gridTemplateRows.split(' ').length;

        const itemIndex = Array.from(item.parentElement.children).indexOf(item);
        const x = itemIndex % columnCount + 1;  
        const y = Math.floor(itemIndex / columnCount) + 1;  

        console.log(`Grid coordinates: (${x}, ${y})`);
        fetch('http://localhost:3000/coordinates-left', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ x: x, y: y })
        })
            .then(response => response.json())
            .then(data => console.log('Success:', data))
            .catch(error => console.error('Error:', error));
    });
});

document.querySelectorAll('.grid-item-2').forEach((item, index) => {
    item.addEventListener('click', (event) => {
        const columnCount = getComputedStyle(item.parentElement).gridTemplateColumns.split(' ').length;
        const rowCount = getComputedStyle(item.parentElement).gridTemplateRows.split(' ').length;

        const itemIndex = Array.from(item.parentElement.children).indexOf(item);
        const x = itemIndex % columnCount + 1;  
        const y = Math.floor(itemIndex / columnCount) + 1;  

        console.log(`Grid coordinates: (${x}, ${y})`);

        fetch('http://localhost:3000/coordinates-right', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ x: x, y: y })
        })
            .then(response => response.json())
            .then(data => console.log('Success:', data))
            .catch(error => console.error('Error:', error));
    });
});
 