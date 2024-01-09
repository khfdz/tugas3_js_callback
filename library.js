fetch('data.json')
    .then(response => response.json())
    .then(data => {
        new gridjs.Grid({
            columns: ["ID", "Name", "Username", "Email", "Address", "Phone","website", "Company"],
            data: data.map(item => [
                item.id,
                item.name,
                item.username,
                item.email,
                `${item.address.street}, ${item.address.suite}, ${item.address.city}, ${item.address.zipcode}, ${item.address.geo.lat}, ${item.address.geo.lng}`,
                item.phone,
                item.website,
                `${item.company.name}, ${item.company.catchPhrase}, ${item.company.bs}`
            ]),
            pagination:{
                limit:5
            },
            sort:true,
            search:{
                enabled:true
            },
            language:{
                'search': {
                    'placeholder': '🔍 Search...'
                }
            }
            
        }).render(document.getElementById("wrapper"));
    })
    .catch(error => console.error('Error fetching data:', error));
