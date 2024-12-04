

// var card = [
//      {
//     title: 'mehran',
//     img:'https://media.cdn-jaguarlandrover.com/api/v2/images/55880/w/680.jpg',
//     paragraph: 'mehran is pakistan cars',
//     price: '1200',
// },
// {
//     title: 'civic',
//     img:'https://media.cdn-jaguarlandrover.com/api/v2/images/55880/w/680.jpg',
//     paragraph: 'Doe',
//     price: '1200',
// },
// {
//     title: 'truck',
//     img:'https://media.cdn-jaguarlandrover.com/api/v2/images/55880/w/680.jpg',
//     paragraph: 'Doe',
//     price: '1200',
    
// },
// {
//     title: 'truck',
//     img:'https://media.cdn-jaguarlandrover.com/api/v2/images/55880/w/680.jpg',
//     paragraph: 'Doe',
//     price: '1200',
// },
// ];

var card = [];

for (let i = 0; i <= 50; i++) {
    var vehicleType = '';
    var vehicleName = '';
    var imageUrl = '';
    var vehiclePrice = '';


    if (i % 6 === 0) {
        vehicleType = 'car';
        vehicleName = 'Car ' ;
        imageUrl = 'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?cs=srgb&dl=pexels-mikebirdy-112460.jpg&fm=jpg'; 
        vehiclePrice = (1500 + (i * 20)).toString();  
    } else if (i % 6 === 1) {
        vehicleType = 'bike';
        vehicleName = 'Bike ' ;
        imageUrl = 'https://www.thunderbike.com/wp-content/uploads/2024/09/phantom-strike-beitragsbild.jpg'; 
        vehiclePrice = (800 + (i * 15)).toString();  
    } 
    else if (i % 6 === 2) {
        vehicleType = 'mobile';
        vehicleName = 'Mobile ' ;
        imageUrl = 'https://babycloset.pk/cdn/shop/files/TO-00300_800x.png?v=1698056285'; 
        vehiclePrice = (800 + (i * 15)).toString();  
    }
     else if (i % 6 === 3) {
        vehicleType = 'laptop';
        vehicleName = 'Laptop ' ;
        imageUrl = 'https://helios-i.mashable.com/imagery/articles/05djrP5PjtVB7CcMtvrTOAP/images-1.fill.size_2000x1125.v1723100793.jpg'; 
        vehiclePrice = (800 + (i * 15)).toString();  
    }
    else if (i % 6 === 4) {
        vehicleType = 'cycle';
        vehicleName = 'Cycle ' ;
        imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Left_side_of_Flying_Pigeon.jpg/800px-Left_side_of_Flying_Pigeon.jpg';  
        vehiclePrice = (800 + (i * 15)).toString();  
    }else {
        vehicleType = 'truck';
        vehicleName = 'Truck ' ;
        imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Freightliner_M2_106_6x4_2014_%2814240376744%29.jpg/1200px-Freightliner_M2_106_6x4_2014_%2814240376744%29.jpg';  
        vehiclePrice = (5000 + (i * 50)).toString(); 
    }

    card.push({
        title: vehicleName,
        img: imageUrl,
        paragraph: vehicleType + ' for sale',
        price: vehiclePrice,
    });
}

console.log(card);




function renderCards(card) {
    $('#target').empty(); 

    card.forEach(element => {
        $('#target').append(
            `<div class="col p-3">
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="${element.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        <p class="card-text">${element.paragraph}</p>
                        <strong>${element.price}</strong>
                    </div>
                </div>
            </div>`
            
        );
       
        
    });
}


renderCards(card);


function searchcard() {
   
    var searchTerm = $('#search-title').val().toLowerCase(); 


    var filteredCards = card.filter(function(element) {
        return element.title.toLowerCase().includes(searchTerm); 
    });


    renderCards(filteredCards);
}