
  $("#rsvp, #giftList").hide();
$(document).ready(function(){
  $("#homeNav").click(function(){
    $("#rsvp, #giftList").hide();
    $("#home").show();

  });
  $("#rsvpNav").click(function(){
    $("#rsvp").show();
    $("#home, #giftList").hide();

  });
  $("#giftListNav").click(function(){
    $("#giftList").show();
    $("#home, #rsvp").hide();
  });
});


$(document).ready(function(){

var gifts = [
  {
    id: 1,
    item : 'Amethyst Bowl',
    by: 'Fourth St',
    category: 'Bowls & Trays',
    price: '$129.00',
    priceCode: 150,
    categoryCode: 'bt',
    photo: 'amethyst_bowl1.jpg',
    detail: 'A unique edit of new and antique pieces, Fourth St by Rukaiya Daud offers a selection of items for the home that mixes past and present effortlessly.' +
           ' Fourth Street believes we can be elevated by the objects we use and surround ourselves with and the interaction between different materials ' +
           ' - especially the smooth and sophisticated, with those that are rougher around the edges is a particular focus. ' +
           ' This bowl has been carved out of amethyst and each is unique - no two are the same. The perfect place to rest jewellery in your bed or bathroom or spice, ' +
           ' salt & pepper in the kitchen. <br>' +
           ' Small 7-9cmD <br>' +
           ' Made in India ',
    tagWords : ['amethyst', 'bowl', 'antique', 'smooth', 'sophisticate', 'carved', 'unique', 'gemstone', 'rock', 'mineral', 'gem', 'crystal']
  },
  {
    id: 2,
    item : 'Segment Tray',
    by: 'Citta Design',
    category: 'Bowls & Trays',
    price: '$80.00',
    priceCode: 100,
    categoryCode: 'bt',
    photo: 'SEGMENT-TRAY1.jpg',
    detail: 'Always modern and on-trend, the Citta Design brand provides stunning design staples and limited edition seasonal collections for the home.' +
            'A serving tray with a modern twist, perfect for entertaining or as part of a table centerpiece that could be adorned with a vase and flowers.' +
            'The wooden tones are warming and timeless. <br>' +
            'Plywood/Oak Vaneer <br>' +
            'Small: 35cmD x 5cmH',
    tagWords : ['segment', 'tray', 'modern', 'serving', 'centerpiece', 'wooden', 'plywood', 'oak', 'furniture']
  },
  {
    id: 3,
    item : 'Wire Candle House',
    by: 'General Eclectic',
    category: 'Living',
    price: '$38.00',
    priceCode: 100,
    categoryCode: 'l',
    photo: 'WIRE-CANDLE-HOUSE-SET1.jpg',
    detail: 'General Eclectic is a range of home wares and furniture with an emphasis on colour and the perfect mix of modern, vintage and industrial accents.' +
            'Offering a stylish way to feature candles is General Eclectic Wire Candle House Set.' +
            'This versatile set of two comes in a copper colour or black and either would look fetching in a range of displays around the house.' +
            'It would also be perfect for a table setting indoors or out. <br>' +
            'Small, 9cmW x 9cmL x 15cmH and Large, 12cmW x 12cmL x 26cmH.',
    tagWords : ['wire', 'candle', 'set', 'living', 'modern', 'vintage' ]
  },
  {
    id: 4,
    item : 'Wonderlust Candle',
    by: 'Wedgwood',
    category: 'Living',
    price: '$84.99',
    priceCode: 100,
    categoryCode: 'l',
    photo: 'WONDERLUST-ORIENTAL.jpg',
    detail: 'Take yourself to a new place with the Oriental Jewel candle featuring sandalwood and juniper.',
    tagWords : ['wonderlust', 'oriental', 'candle', 'living']
  },
  {
    id: 5,
    item : 'Coffee Grinder',
    by: 'Rancilio',
    category: 'Kitchen',
    price: '$600.00',
    priceCode: 300,
    categoryCode: 'k',
    photo: 'COFFEE-GRINDER.jpg',
    detail: 'Founded in 1927 by Roberto Rancilio in Parabiago, Italy, Rancilio primarily makes commercial coffee machines and is' +
            'found in over 100 countries worldwide.' +
            'Another great option for the home espresso enthusiast is the quiet, powerful and safe Silvia Rocky Doser Grinder.' +
            'The Rocky Doser provides ground coffee in seven gram measured shots. It has a user-replacable, commercial grade 50mm' +
            'steel grinding plates and a stepped adjustment system that gives grind consistency for every grade from French press to espresso. <br>' +
            '350mmH x 120mmW x 250mmD (height, width, depth) <br>' +
            'Bean hopper, capacity 300g',
    tagWords : ['rocky doser', 'coffee', 'grinder', 'kitchen', 'machine', 'espresso', 'bean', 'hopper']
  },
  {
    id: 6,
    item : 'Chinoiserie Teacup',
    by: 'Wedgwood',
    category: 'Kitchen',
    price: '$299.00',
    priceCode: 300,
    categoryCode: 'k',
    photo: 'GREEN-TEACUP.jpg',
    detail: 'This Teacup and Saucer is decorated with a green design motif of graceful, exotic birds and delicate flora and fauna.',
    tagWords : ['chinoiserie', 'green', 'teacup', 'kitchen', 'saucer', 'exotic', 'delicate']
  },
  {
    id: 7,
    item : 'Food Dehydrator',
    by: 'Cuisinart',
    category: 'Kitchen',
    price: '$199.00',
    priceCode: 200,
    categoryCode: 'k',
    photo: 'DEHYDRATOR.jpg',
    detail: 'Plugged or unplugged, nobody covers the kitchen like Cuisinart. The company is a full-service culinary resource with a wide' +
            'array of products, preferred by chefs and favored by consumers. Their goal is to help their customers savour the good life and' +
            'they aim to keep their tradition of culinary education at centre-stage.' +
            'The Cuisinart Food Dehydrator dries your favorite meats and fruits for healthier and delicious snacks.' +
            'Or dry herbs and flowers for a fragrant potpourri. With five stackable, interlocking racks it has three settings:' +
            'low, medium and high. You can add more racks if desired. <br>' +
            '34cm x 40cm x 31cm <br>' +
            '640 watts',
    tagWords : ['dehydrator', 'kitchen', 'culinary', 'food', 'dries', 'healthier']
  },
  {
    id: 8,
    item : 'Picnic Bag',
    by: 'Slowlife Collections',
    category: 'Outdoors & Travel',
    price: '$195.00',
    priceCode: 200,
    categoryCode: 'ot',
    photo: 'PICNIC-BAG1.jpg',
    detail: 'Elevate the beach trip or picnic with the Slowlife Collection pieces. Blending style, function and quality these are' +
            'made to look good as well as work well. And last a lifetime for all your adventures.' +
            'The Picnic bag is the perfect satchel for porting all your picnic requirements from home to beach, park or whereever' +
            'you fancy. It features striped interior, leather details and removable straps. <br>' +
            'Dimensions <br>' +
            'Length - 48.5cm <br>' +
            'Width - 20cm <br>' +
            'Height - 31cm',
    tagWords : ['picnic', 'bag', 'travel', 'trip' ]
  },
  {
    id: 9,
    item : 'Pillow Bean Bag',
    by: 'Citta',
    category: 'Outdoors & Travel',
    price: '$139.00',
    priceCode: 150,
    categoryCode: 'ot',
    photo: 'PILLOW.jpg',
    detail: 'Always modern and on-trend, the Citt?? brand provides stunning design staples and limited edition seasonal collections' +
            'for the home.' +
            'The Pillow Bean Bag is a contemporary take on the much loved bean bag and this shade of chestnut is a seasonal favourite.' +
            'Comfy and durable these can be used both indoors and outdoors. <br>' +
            '250L <br>' +
            '145 x 125cm',
    tagWords : ['pillow', 'bean', 'bag', 'outdoors', 'comfy', 'indoors', 'outdoors']
  },
  {
    id: 10,
    item: 'Knife Sharpener',
    by: 'Work Sharp Culinary',
    category: 'Kitchen',
    price: '$191.00',
    priceCode: 200,
    categoryCode: 'k',
    photo: 'KnifeSharpener1.jpg',
    detail: 'The M???3 Kitchen Knife Sharpener is designed for beginners and experts alike. Built-in angle guides teach you how to sharpen your knives,' +
            'and keep them cutting like new.' +
            'The tapered diamond sharpening rod will restore the cutting performance of your entire knife set. Swap it out for the ceramic honing' +
            'rod and you can easily put a razor-sharp finish on your knives. It???s that simple ??? you???re ready to start enjoying your culinary experience' +
            'with sharp, precise cutlery that???s a joy to use.',
   tagWords : ['knife', 'sharpener', 'kitchen', 'cutting']
  },
  {
    id: 11,
    item: 'Wine Tumbler',
    by: 'Huski',
    category: 'Outdoors & Travel',
    price: '$90.00',
    priceCode: 100,
    categoryCode: 'ot',
    photo: 'wine_tumbler1.jpg',
    detail: 'This is not your typical wine glass. Keep your drink at the perfect temperature longer with a Huski Wine Tumbler. Great for home, around ' +
            'the BBQ, on the boat or anywhere in between. <br>' +
            'Vacuum insulated. Keeps wine chilled until the last drop. Also great for keeping hot drinks hot. <br>' +
            'Stay-dry design. No condensation. Hands and tables stay dry. <br>' +
            'Premium 304 stainless steel. Built for style, quality and performance.  <br>' +
            'Lid included. Made from premium BPA-free Tritan plastic. <br>' +
            'The secret behind Huski???s remarkable ability to keep drinks at the perfect temperature longer is the double-wall vacuum insulation and internal copper plating.' +
            'This significantly reduces the thermal energy exchange between the contents of the Huski and the external environment.' +
            'Perfect for gifting, Huski Tumblers come packaged in die-cut kraft presentation boxes which are 100% recyclable. <br>' +
            'Product capacity 300ml; height 115mm; diameter 90mm; weight 175g. Packaged weight 280g.',
    tagWords : ['wine', 'tumbler', 'travel', 'glass', 'drink', 'temperature', 'insulation', 'thermal', 'recyclable']
  },
  {
    id: 12,
    item: 'Baskey Tassels Natural',
    by: 'Lorena Canals',
    category: 'Living',
    price: '$149.00',
    priceCode: 150,
    categoryCode: 'l',
    photo: 'basket_tassles_1.jpg',
    detail: 'The natural color of the Tassels basket makes it perfect for storing in any setting: toys, books, magazines, blankets, plants, etc.' +
            'This 100% cotton basket is braided, lending it its circular shape, and hand-made by our craftspeople; it is the perfect choice for any' +
            'setting in need of extra storage, including childrens bedrooms, living rooms, dining rooms, entrance halls, patios and gardens.' +
            'The tassels lend a casual and cheerful touch to this unfussy and fun design. Available in 11 single-tone colors, ranging from fresh' +
            'and vibrant colors to subtle and vintage. This model combines with all our rugs, cushions, blankets and wall hangings. <br>' +
            'Size : 30 x 45 x 45cm',
   tagWords : ['baskey', 'natural', 'storing', 'cotton', 'basket', 'hand-made']
  }
];


// ==========================================================
// Function call to display all items
// ==========================================================
$('input[type=checkbox]').prop('checked',false);
allGifts(); //displays all items on home page

$('#refresh').click(function(){
  $('input[type=checkbox]').prop('checked',false);
  allGifts();
});

// ==========================================================
// Display items as per user's input - price filter call
// ==========================================================

$('#showChoice').click(function(){
  var inputArray = [];

  // read input of users and store
  var price01 = $('#price01:checked').val();
  var price02 = $('#price02:checked').val();
  var price03 = $('#price03:checked').val();
  var price04 = $('#price04:checked').val();

  //push user's choice into an array
  if (price01 === 'checked') {
        inputArray.push('100');
  }

  if (price02 === 'checked') {
        inputArray.push('150');
  }

  if (price03 === 'checked') {
        inputArray.push('200');
  }

   if (price04 === 'checked'){
      inputArray.push('300');
  }

  //call the function to filter user's choice
  filteredGifts(inputArray);

});//showChoice click function


// ==========================================================
// category filter call
// ==========================================================
$('#categoryChoice').click(function(){
  var inputArray = [];

  // read input of users and store
  var category01 = $('#category01:checked').val();
  var category02 = $('#category02:checked').val();
  var category03 = $('#category03:checked').val();
  var category04 = $('#category04:checked').val();

  //push user's choice into an array
  if (category01 === 'checked') {
        inputArray.push('bt');
  }

  if (category02 === 'checked') {
        inputArray.push('l');
  }

  if (category03 === 'checked') {
        inputArray.push('k');
  }

   if (category04 === 'checked'){
      inputArray.push('ot');
  }

  //call the function to filter user's choice
  filteredCategoryGifts(inputArray);

});//showChoice click function

// ==========================================================
// Search by word
// ==========================================================
$('#searchWord').click(function(){
  $(this).val('');
});

$('#searchIcon').click(function(){
  $('input[type=checkbox]').prop('checked',false);
  var searchWord = $('#searchWord').val();
  filterByWord(searchWord);
});


// ==========================================================
// Function to display all items
// ==========================================================

function allGifts(){
  var i = 0;
  $('#result').text('');
  for (i = 0 ; i < gifts.length; i++){
    displayCards(i);
    cardModal();
  } //end of for loop
} //end of allGifts function

// ==========================================================
// Modal
// ==========================================================

  function cardModal(){
    $('.moreDetails').click(function(){
      $('#imageGifts').text(' '); //clearing the content
      var item = '';
      var i=0;
      for (i = 0; i < gifts.length; i++) {
        if (parseInt(this.id) === gifts[i].id) {
        item = gifts[i].item;
            $('#exampleModalLabel').text(gifts[i].item);
            //append will keep  adding to existing content, so clear if you want
            //or else use html to replace existing content
            $('#imageGifts').append('<img class="img-fluid" src="images/' + gifts[i].photo + '" alt="' + gifts[i].item + '"/>' +
            '<p class="text-danger">'+ gifts[i].detail +'</p>');

        } //end of if statement

      }//end of for statement

    }); // end of moreDetails click event

  } //cardModal

// ==========================================================
// Filter by gift price
// ==========================================================

function filteredGifts(giftPriceCode){
  var i,j;
  $('#result').text(' ');
  for(i = 0 ; i < gifts.length; i++) {
    for (j = 0 ; j < giftPriceCode.length; j++){
      if (parseInt(giftPriceCode[j]) === gifts[i].priceCode) {
        displayCards(i);
        cardModal();
      }//if
    }//for j
  }//for i
}//filtered Gift

// ==========================================================
// Filter by category
// ==========================================================

function filteredCategoryGifts(giftPriceCode){

  var i,j;
  $('#result').text(' ');
  for(i = 0 ; i < gifts.length; i++) {
    for (j = 0 ; j < giftPriceCode.length; j++){
      if (giftPriceCode[j] === gifts[i].categoryCode) {
        displayCards(i);
        cardModal();
      }//if
    }//for j
  }//for i
}//filtered category

// ==========================================================
// Filter by word
// ==========================================================
function filterByWord(word){
  var i,j;
  $('#result').text('');
  for (i = 0 ; i < gifts.length; i++){
    for (j = 0; j < gifts[i].tagWords.length; j++){
      if (word.toLowerCase() === gifts[i].tagWords[j]){
        displayCards(i);
        cardModal();
      }//if
    }//for j
  }//for i
}//filterByWord

  // ==========================================================
  // Display cards
  // ==========================================================

  function displayCards(j){
    //access properties of objects using index number
    $('#result').append( '<div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">' +
                              '<div class="card text-danger mb-3 text-center" >' +
                               '<img src="images/' + gifts[j].photo + '" class="card-img-top" alt="' + '">' +
                               '<div class="card-body">' +
                               '<h2 class="card-title font-weight-bold">' + ' ' + '<span class="text-primary">' + gifts[j].item + '</span> <br></h2>' +
                               '<p class="card-text text-dark">By : ' + ' ' + '<span class="text-primary">' + gifts[j].by + '</span> <br></p>' +
                               '<h3 class="card-text text-dark font-weight-bold">'+ gifts[j].price + '</h3>' +
                               '<button id="' + gifts[j].id + '" type="button" class="btn btn-primary bg-secondary moreDetails" data-bs-toggle="modal" data-bs-target="#exampleModal">More Detail' + '</button>' +
                              '</div>' +
                            '</div>' +
                        '</div>'
                    ); //append ends here

    } //displayCards

  
}); //document.ready()
