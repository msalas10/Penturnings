///////////////////////////////  CHECK IF WE ARE AT "PENS" OR "PRUDUCTS" PAGE  /////////////////////////////////////////

var paginationOffset;
var paginationLimit;

if ($("#pens-title")[0]) {
    $(".products-row").hide();
    $(".pens-row").show();
    paginationLimit = 15;
    paginationOffset = 0;
} 

if ($("#products-title")[0]) {
    $(".pens-row").hide();
    $(".products-row").show();
    paginationLimit = 15;
    paginationOffset = 0;
}

var productIdentifiers = [];
var productIdentifiersbyId = {};

/////////////////////////////// MOLTIN ///////////////////////////////


var moltin = new Moltin({publicId: 'xVyR52x8y0oSs9dovYyV6u0bjkr2kY4JNDFuqJdf'});

moltin.Authenticate(function () {
    
    // Make your calls here
    
    var products = moltin.Product.List({status: 1, limit: 15, offset: 0});
    console.log(products);
    
    var productsLength = products.length;
    
    for (product in products.result) {
                
    } 
    
    //CREATE A NEW PRODUCT

    productIdentifiers = ['467a74f51db771c2330e39120e7aa78d', '61b4949b31bd30937ff00a709b9e6137', '1d6e6ad5b00634363f9cba21ba40e062', '9acb7ee1c6c2633c3088b747eeb3cc60', 'c5da2b3c111fde819d83e3003f622c91', 'f94274ebdcdc04dd5ddd6df2b743d119', 'ac12364bc08b400434a3a24784ad5bd3', 'c637216a1a5c7758fb530d515dd58081', '3e90f859f1e29a84b00027c3189ad4ff', '76b9a550120cbce5056736e25093d48f', '89e1cc824d0b3ab4ea26e98174a202b0', '6ffbea19a38e0ee29d28d489a2653228', '58329e51c0b2b9309ea89659dae9657e' /*Cocobolo Pen Rollerball Pen */, 'b40b3f26a54bc3dc3f3cbbfcebab99b1' /* Cocobolo Pen Fountain Pen */,  ];
    
    productIdentifiersbyId = {'979630404166222590': '467a74f51db771c2330e39120e7aa78d', '979628978958500605': '61b4949b31bd30937ff00a709b9e6137', '978111938779153002': '1d6e6ad5b00634363f9cba21ba40e062', '1004209930124657392': '9acb7ee1c6c2633c3088b747eeb3cc60', '1004211055238316785': 'c5da2b3c111fde819d83e3003f622c91', '1004212434551964402': 'f94274ebdcdc04dd5ddd6df2b743d119', '1004213533308617459': 'ac12364bc08b400434a3a24784ad5bd3', '1004215192541725428': 'c637216a1a5c7758fb530d515dd58081', '1013654408682012963': '3e90f859f1e29a84b00027c3189ad4ff', '1013657087768527142': '76b9a550120cbce5056736e25093d48f', '1013657894459015463': '89e1cc824d0b3ab4ea26e98174a202b0', '1037655368714420412':'6ffbea19a38e0ee29d28d489a2653228', '1058048826473972504' : '58329e51c0b2b9309ea89659dae9657e' /*Cocobolo Pen Rollerball Pen */, '1058049011820266266' : 'b40b3f26a54bc3dc3f3cbbfcebab99b1' /* Cocobolo Pen Fountain Pen */ };
    
    
    var productNumber = [];
    var productImages = []; // PRODUCT IMAGES -> ASIGNED TO AN ARRAY
    var productThumbnailImages = []; // PRODUCT IMAGES -> ASIGNED TO AN ARRAY FOR CART THUMBNAIL
    var amountOfProducts = productsLength;
    var counter = 0;
    
    while (counter < amountOfProducts) {
        
        productNumber.push(products[counter].id);
        
        //PRODUCT IMAGES -> ASIGNED TO AN ARRAY //
        productImages.push('http://'+products[counter].images[0].segments.domain+'w310/h220/fit/'+products[counter].images[0].segments.suffix);
        $('#product-img-'+counter).html("<img src='"+productImages[counter]+"' alt ='"+products[counter].title+"' class='image-center'>");
        $('#product-img-'+counter).css('padding-left: 20px;');
        $('#pn'+counter).text(products[counter].title);
        $('#pd'+counter).text(products[counter].description);
        $('#pp'+counter).text(products[counter].price.value);
        
        // PRODUCT CART THUMBNAIL IMAGES -> ASIGNED TO AN ARRAY //
        productThumbnailImages.push('http://'+products[counter].images[0].segments.domain+'w50/h50/fit/'+products[counter].images[0].segments.suffix);
        counter += 1;
    }
    
    // CUSTOM PEN ////////////////////////////////////////////////////////////////////////////////////////////
    
    // PEN COST
    var costPenStyle = 0;
    var costWoodSelections = 0;
    var costMetalSelections = 0;
    var costInlaySelections = 0;
    var costAttachmentsSelections = 0;
    var costBoxSelection = 0;

    // PEN ADDITION TO DISPLAY IN HTML
    function customPenCostModify(costPenStyle, costWoodSelections, costMetalSelections, costInlaySelections, costAttachmentsSelections, costBoxSelection) {
    var customPenSum = costPenStyle + costWoodSelections + costMetalSelections + costInlaySelections + costAttachmentsSelections + costBoxSelection;
    // DISPLAY INFO IN HTML
    $('#pp0').text(customPenSum);
}

customPenCostModify(costPenStyle, costWoodSelections, costMetalSelections, costInlaySelections, costAttachmentsSelections, costBoxSelection);


    // PEN STYLES
    var modPenStyle = '1037658987870290109';
    var varPenStyle = '';

    $( "#pen-styles" )
      .change(function() {
        var str = "";
        var modId;
        $( "#pen-styles option:selected" ).each(function() {
            str += $( this ).text() + " ";
            modId = $(this)[0].id;
        });
 
        switch (modId) {
        case 'ps-fp':
                varPenStyle = '1037659350920855742';
                costPenStyle = 20;
                break;
        case 'ps-rp':
                varPenStyle = '1037667545517129920';
                costPenStyle = 15;
                break;
        case 'ps-sp':
                varPenStyle = '1037668420012736706';
                costPenStyle = 10;
                break;
        case 'ps-spp':
                varPenStyle = '1037669203198345412';
                costPenStyle = 15;
                break;
        }
        
        customPenCostModify(costPenStyle, costWoodSelections, costMetalSelections, costInlaySelections, costAttachmentsSelections, costBoxSelection);

    })
    .trigger( "change" );
    
     // WOOD SELECTIONS
    var modWoodSelections = '1037708230735692012';
    var varWoodSelections = '';

    $( "#wood-selections" )
      .change(function() {
        var str = "";
        var modId;
        $( "#wood-selections option:selected" ).each(function() {
            str += $( this ).text() + " ";
            modId = $(this)[0].id;
        });
 
        switch (modId) {
        case 'ws-pi':
                varWoodSelections = '1037708639663554797';
                costWoodSelections = 250;
                break;
        case 'ws-ca':
                varWoodSelections = '1037712666488996083';
                costWoodSelections = 60;
                break;
        case 'ws-beb':
                varWoodSelections = '1037715886145798407';
                costWoodSelections = 40;
                break;
        case 'ws-co':
                varWoodSelections = '1037718440032338198';
                costWoodSelections = 40;
                break;
        case 'ws-ze':
                varWoodSelections = '1037721857182138669';
                costWoodSelections = 40;
                break;
        case 'ws-we':
                varWoodSelections = '1037725309463429442';
                costWoodSelections = 40;
                break;
        case 'ws-cu':
                varWoodSelections = '1037729475330048327';
                costWoodSelections = 40;
                break;
        case 'ws-wa':
                varWoodSelections = '1037733033601401172';
                costWoodSelections = 40;
                break;
        case 'ws-ce':
                varWoodSelections = '1037735861753479513';
                costWoodSelections = 40;
                break;
        case 'ws-ch':
                varWoodSelections = '1037741242768687457';
                costWoodSelections = 40;
                break;
        case 'ws-eir':
                varWoodSelections = '1037744930375598444';
                costWoodSelections = 50;
                break;
        }
        
        customPenCostModify(costPenStyle, costWoodSelections, costMetalSelections, costInlaySelections, costAttachmentsSelections, costBoxSelection);
        
    })
    .trigger( "change" );   
    
    // METAL SELECTIONS
    var modMetalSelections = '1037838642594185871';
    var varMetalSelections = '';

    $( "#metal-selections" )
      .change(function() {
        var str = "";
        var modId;
        $( "#metal-selections option:selected" ).each(function() {
            str += $( this ).text() + " ";
            modId = $(this)[0].id;
        });
 
        switch (modId) {
        case 'ms-ss':
                varMetalSelections = '1037838903437951632';
                costMetalSelections = 0;
                break;
        case 'ms-gp':
                varMetalSelections = '1037839396411278013';
                costMetalSelections = 0;
                break;
        }
        customPenCostModify(costPenStyle, costWoodSelections, costMetalSelections, costInlaySelections, costAttachmentsSelections, costBoxSelection);
        
    })
    .trigger( "change" );
    
    // STONE / METAL INLEY SELECTIONS
    var modInlaySelections = '1037840893232546538';
    var varInlaySelections = '';

    $( "#inlay-selections" )
      .change(function() {
        var str = "";
        var modId;
        $( "#inlay-selections option:selected" ).each(function() {
            str += $( this ).text() + " ";
            modId = $(this)[0].id;
        });
 
        switch (modId) {
        case 'is-bu':
                varInlaySelections = '1037841302789554923';
                costInlaySelections = 5;
                break;
        case 'is-bk':
                varInlaySelections = '1037842080405128004';
                costInlaySelections = 5;
                break;
        case 'is-sb':
                varInlaySelections = '1037875241713402612';
                costInlaySelections = 5;
                break;
        }
        customPenCostModify(costPenStyle, costWoodSelections, costMetalSelections, costInlaySelections, costAttachmentsSelections, costBoxSelection);
    })
    .trigger( "change" );
    
    // ATTACHEMNT SELECTIONS
    var modAttachmentsSelections = '1037845953635156050';
    var varAttachmentsSelections = '';

    $( "#attachments-selections" )
      .change(function() {
        var str = "";
        var modId;
        $( "#attachments-selections option:selected" ).each(function() {
            str += $( this ).text() + " ";
            modId = $(this)[0].id;
        });
 
        switch (modId) {
        case 'as-ts':
                varAttachmentsSelections = '1037846724942495827';
                costAttachmentsSelections = 5;
                break;
        case 'as-na':
                varAttachmentsSelections = '1037848033070416132';
                costAttachmentsSelections = 0;
                break;
        }
        customPenCostModify(costPenStyle, costWoodSelections, costMetalSelections, costInlaySelections, costAttachmentsSelections, costBoxSelection);
    })
    .trigger( "change" );
    
    //  BOX SELECTION
    var modBoxSelection = '1037850303640109495';
    var varBoxSelection = '';

    $( "#box-selection" )
      .change(function() {
        var str = "";
        var modId;
        $( "#box-selection option:selected" ).each(function() {
            str += $( this ).text() + " ";
            modId = $(this)[0].id;
        });
 
        switch (modId) {
        case 'bs-en':
                varBoxSelection = '1037852112492429760';
                costBoxSelection = 10;
                break;
        case 'bs-ne':
                varBoxSelection = '1037878698608427130';
                costBoxSelection = 0;
                break;
        }
        customPenCostModify(costPenStyle, costWoodSelections, costMetalSelections, costInlaySelections, costAttachmentsSelections, costBoxSelection);
    })
    .trigger( "change" );
    


    ////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////
    
    // PRODUCT 9: FOUNTAIN AND ROLLERBALL PEN /////////////////////////////////////////////////////////////
    
    /*
    // PEN COST
    var costPenStyle9 = products[9].price.value;
    console.log("costPenStyle9");
    console.log(costPenStyle9);

    // PEN ADDITION TO DISPLAY IN HTML
    function customPenCostModify9(costPenStyle9) {
        var customPenSum9 = costPenStyle9;
        // DISPLAY INFO IN HTML
        $('#pp9').text(customPenSum9);
    }

    customPenCostModify9(costPenStyle9);

    // PEN STYLES 
    var modPenStyle9 = '1058046723055682321';
    var varPenStyle9 = '';

    $( "#pen-styles-9" )
      .change(function() {
        var str = "";
        var modId;
        $( "#pen-styles-9 option:selected" ).each(function() {
            str += $( this ).text() + " ";
            modId = $(this)[0].id;
        });
 
        switch (modId) {
        case 'ps-fp-9':
                varPenStyle9 = '1058047617650393900';
                costPenStyle9 = 336;
                break;
        case 'ps-rp-9':
                varPenStyle9 = '1058047378499568400';
                costPenStyle9 = 330;
                break;
        }
        
        customPenCostModify9(costPenStyle9);

    })
    .trigger( "change" );
    
    
    // PRODUCT 11: FOUNTAIN AND ROLLERBALL PEN /////////////////////////////////////////////////////////////
    
    // PEN COST
    var costPenStyle11 = products[11].price.value;

    // PEN ADDITION TO DISPLAY IN HTML
    function customPenCostModify11(costPenStyle11) {
        var customPenSum11 = costPenStyle11;
        // DISPLAY INFO IN HTML
        $('#pp11').text(costPenStyle11);
    }

    customPenCostModify11(costPenStyle11);

    // PEN STYLES 
    var modPenStyle11 = '1058048657602904854';
    var varPenStyle11 = '';

    $( "#pen-styles-11" )
      .change(function() {
        var str = "";
        var modId;
        $( "#pen-styles-11 option:selected" ).each(function() {
            str += $( this ).text() + " ";
            modId = $(this)[0].id;
        });
 
        switch (modId) {
        case 'ps-fp-11':
                varPenStyle11 = '1058049010704581400';
                costPenStyle11 = 72;
                break;
        case 'ps-rp-11':
                varPenStyle11 = '1058048825307956000';
                costPenStyle11 = 66;
                break;
        }
        
        customPenCostModify11(costPenStyle11);

    })
    .trigger( "change" );
    
    
    */
    
    ////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////
    

    var cartItems = moltin.Cart.Contents();
    
    var  cartAllTotalItemsAtLoad = cartItems.total_items;
    var  cartTotalItemsAtLoad = cartItems.total_unique_items;
    $("#cart-counter").text(cartAllTotalItemsAtLoad);
    
    var timesCartOpened = 0;
    
    
    $("#header-cart").click(function() {
        $("#cart").show();

        cartItems = moltin.Cart.Contents();
        
        cartCounter = cartItems.total_unique_items;

        // HIDE OR SHOW "CART EMPTY" PLACEHOLDER
        if (cartCounter == 0){
            $("#cart-empty").show();
            console.log("hey i'm empty (1)");
        } else {
            $("#cart-empty").hide();
            console.log("I'm not empty (1)");
        }
        
        

        // POPULATE CART WITH PRE-EXISTIN ITEMS IN CART //
        
        if(timesCartOpened < 1) {
            if (cartTotalItemsAtLoad == 0) {
                    timesCartOpened +=1; // COUNT THE AMOUT OF TIMES THE CART HAS BEEN OPENED
                    console.log("cart is empty");
                } else {
                    timesCartOpened +=1; // COUNT THE AMOUT OF TIMES THE CART HAS BEEN OPENED
                    console.log("cart is not empty: ");
                    var counter2 = 0;
                    var cartItemsAtLoad = cartItems.contents;
                    var selectThisProductLoad;
                    var loadItemVerify;
                    var productCartToLoop = cartItemsAtLoad;
                    
                    while (counter2 < amountOfProducts) {
                        var productSlugLoad = products[counter2].slug;
                        var productIdentifierSelectLoad = productSlugLoad - 1;
                        var productInfoLoad = productCartToLoop[productIdentifiers[productIdentifierSelectLoad]];
                        loadItemVerify = productInfoLoad;

                        if(!loadItemVerify) {
                            console.log("This item is not in cart");
                        } else {
                            console.log("-------------------TEST 4 TEST -------------------");
                            var selectProductThumbnailImageLoad = "<img src='"+productThumbnailImages[counter2]+"' alt ='"+productInfoLoad.title+"'>";
                            var productInfoTitleLoad = productInfoLoad.title;
                            var productInfoQuantityLoad = productInfoLoad.quantity;
                            var productInfoPriceLoad = productInfoLoad.pricing.formatted.with_tax;
                            var productInfoTotalLoad = productInfoLoad.totals.post_discount.formatted.with_tax;
                            var cartSubtotal = cartItems.totals.post_discount.formatted.without_tax;
                            $("#cart-subtotal").text(cartSubtotal);
                            var cartTotal = cartItems.totals.post_discount.formatted.with_tax;
                            $(".cart-total-number").text(cartTotal);


                            $("#cart-product-table").find('tbody')
                                .append($('<tr id="product-'+productNumber[counter2]+'">')
                                    .append($('<td id="productThumbnailImage-'+productNumber[counter2]+'" class="input-table-style">')
                                            .append(selectProductThumbnailImageLoad)
                                    )
                                    .append($('<td id="productInfoTitle-'+productNumber[counter2]+'">')
                                            .text(productInfoTitleLoad)
                                    )
                                    .append($('<input id="productInfoQuantity-'+productNumber[counter2]+'" class="input-quantity-style" />')
                                            .val(productInfoQuantityLoad)
                                    )
                                    .append($('<td id="productInfoPrice-'+productNumber[counter2]+'" class="input-table-style">')
                                            .text(productInfoPriceLoad)
                                    )
                                    .append($('<td id="productInfoTotal-'+productNumber[counter2]+'" class="input-table-style">')
                                            .text(productInfoTotalLoad)
                                    )
                                ); 
                        }

                        console.log(counter2);
                        counter2 += 1;
                    };


                      // UPDATE ITEM QUANTITY IN CART BASED ON NUMBER TYPED IN ITEMS'S INPUT FIELD IN CART //
                    $("#cart-product-table :input").keyup(function() {
                        
                        var newInputTypeValue = $(this).val(); // STORE NUMBER TYPED IN INPUT VALUE FOR QUANTITY IN CART
                        var itemNameId = $(this).attr('id'); // SELECT HTML ID FOR INPUT
                        var inputQuantityId = itemNameId.split("-").pop(); // SELECT ITEM MOTLIN ID


                        
                        counter3 = 0;
                        while (counter3 < amountOfProducts) {
                            var productIdLoadType = products[counter3].id; //
                            
                            if (productIdLoadType == inputQuantityId) {
                                var productSlugLoadType = products[counter3].slug;
                                var productIdentifierSelectLoadType = productSlugLoadType - 1;
                                var productInfoToDelete = productIdentifiers[productIdentifierSelectLoadType];
                            } else {
                                console.log("not equal to id");
                            }
                            counter3 += 1;
                        }

                        if (newInputTypeValue >= 1) {

                            moltin.Cart.Update(inputQuantityId, {
                                quantity: newInputTypeValue

                            }, function(item) {
                                console.log(item);     

                                // RETRIEVE CART INFO AGAIN FROM MOLTIN
                                cartItems = moltin.Cart.Contents();

                                console.log("------------------- 3 SELECT CART IDENTIFIER BY ID -------------------");
                                var selectCartIdentifierById = productIdentifiersbyId[inputQuantityId];
                                productInfoLoad = cartItems.contents[selectCartIdentifierById];//item;              
                                // UPDATE PRICE AND TOTAL FOR EACH PRODUCT VARIABLE
                                productInfoPriceLoad = productInfoLoad.pricing.formatted.with_tax;
                                productInfoTotalLoad = productInfoLoad.totals.post_discount.formatted.with_tax;

                                // UPDATE VISUAL INFO IN CART OF PRICE AND TOTAL AMOUT PER ITEM
                                $("#productInfoPrice-"+inputQuantityId).text(productInfoPriceLoad); 
                                $("#productInfoTotal-"+inputQuantityId).text(productInfoTotalLoad);

                                cartSubtotal = cartItems.totals.post_discount.formatted.without_tax;
                                $("#cart-subtotal").text(cartSubtotal);

                                cartTotal = cartItems.totals.post_discount.formatted.with_tax;
                                $(".cart-total-number").text(cartTotal);

                                // UPDATE AMOUNT OF ITEMS IN CART
                                cartCounter = cartItems.total_items;
                                $("#cart-counter").text(cartCounter);
                                

                                if (cartCounter == 0){
                                    $("#cart-empty").show();
                                    console.log("hey i'm empty (2)");
                                } else {
                                    $("#cart-empty").hide();
                                    console.log("I'm not empty (2)");
                                }


                            }, function(error) {
                                // Something went wrong...
                                alert("Something went wrong");
                            })

                        } else if (newInputTypeValue === '0') {

                            //  SINCE INPUT VALUE IS EQUAL TO 0, ASK IF THEY WANT TO DELETE THE ITEM
                            moltin.Cart.Remove(productInfoToDelete, function() {
                                // Everything is awesome...
                                cartItems = moltin.Cart.Contents();

                                $("#product-"+inputQuantityId).remove();

                                // UPDATE TOTAL AND SUBTOTAL IN CART
                                cartSubtotal = cartItems.totals.post_discount.formatted.without_tax;
                                $("#cart-subtotal").text(cartSubtotal);

                                cartTotal = cartItems.totals.post_discount.formatted.with_tax;
                                console.log(cartTotal);
                                $(".cart-total-number").text(cartTotal);

                                // DISPLAY ALERT WHEN ITEM IS DELETED
                                $("#cart-alert").fadeIn().delay(2000).fadeOut();

                                // UPDATE AMOUNT OF ITEMS IN CART
                                cartCounter = cartItems.total_items;
                                $("#cart-counter").text(cartCounter);

                                // HIDE OR SHOW "CART EMPTY" PLACEHOLDER
                                if (cartCounter == 0){
                                    $("#cart-empty").show();
                                } else {
                                    $("#cart-empty").hide();
                                }  
                                
                            }, function(error) {
                                // Something went wrong...
                                alert("Something went wrong");
                            });


                        } else {
                            console.log("This = Nothing");
                            console.log(newInputTypeValue);
                        }
                    });
                }   
        } else {
            console.log("else")
        }
    });
    
    
    
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

    // CLICK ON ADD ITEM TO CART BUTTON //
    $(document).on('click', '.add-to-cart', function() {
        
    if(timesCartOpened < 1) {
        if (cartTotalItemsAtLoad == 0) {
                timesCartOpened +=1; // COUNT THE AMOUT OF TIMES THE CART HAS BEEN OPENED
                console.log("cart is empty");
            } else {
                timesCartOpened +=1; // COUNT THE AMOUT OF TIMES THE CART HAS BEEN OPENED
                console.log("cart is not empty: ");
                var counter2 = 0;
                cartItems = moltin.Cart.Contents();
                var cartItemsAtLoad = cartItems.contents;
                var selectThisProductLoad;
                var loadItemVerify;
                var productCartToLoop = cartItemsAtLoad;

                while (counter2 < amountOfProducts) {
                    var productSlugLoad = products[counter2].slug;
                    var productIdentifierSelectLoad = productSlugLoad - 1;
                    var productInfoLoad = productCartToLoop[productIdentifiers[productIdentifierSelectLoad]];
                    loadItemVerify = productInfoLoad;

                    if(!loadItemVerify) {
                        console.log("This item is not in cart");
                    } else {
                        console.log("-------------------TEST 2 TEST -------------------");
                        console.log(loadItemVerify);
                        var selectProductThumbnailImageLoad = "<img src='"+productThumbnailImages[counter2]+"' alt ='"+productInfoLoad.title+"'>";
                        var productInfoTitleLoad = productInfoLoad.title;
                        var productInfoQuantityLoad = productInfoLoad.quantity;
                        var productInfoPriceLoad = productInfoLoad.pricing.formatted.with_tax;
                        var productInfoTotalLoad = productInfoLoad.totals.post_discount.formatted.with_tax;

                        var cartSubtotal = cartItems.totals.post_discount.formatted.without_tax;
                        $("#cart-subtotal").text(cartSubtotal);

                        var cartTotal = cartItems.totals.post_discount.formatted.with_tax;
                        $(".cart-total-number").text(cartTotal);

                        $("#cart-product-table").find('tbody')
                            .append($('<tr id="product-'+productNumber[counter2]+'">')
                                .append($('<td id="productThumbnailImage-'+productNumber[counter2]+'" class="input-table-style">')
                                        .append(selectProductThumbnailImageLoad)
                                )
                                .append($('<td id="productInfoTitle-'+productNumber[counter2]+'">')
                                        .text(productInfoTitleLoad)
                                )
                                .append($('<input id="productInfoQuantity-'+productNumber[counter2]+'" class="input-quantity-style" />')
                                        .val(productInfoQuantityLoad)
                                )
                                .append($('<td id="productInfoPrice-'+productNumber[counter2]+'" class="input-table-style">')
                                        .text(productInfoPriceLoad)
                                )
                                .append($('<td id="productInfoTotal-'+productNumber[counter2]+'" class="input-table-style">')
                                        .text(productInfoTotalLoad)
                                )
                            ); 
                    }

                    console.log(counter2);
                    counter2 += 1;
                };


                  // UPDATE ITEM QUANTITY IN CART BASED ON NUMBER TYPED IN ITEMS'S INPUT FIELD IN CART //
                $("#cart-product-table :input").keyup(function() {

                    var newInputTypeValue = $(this).val(); // STORE NUMBER TYPED IN INPUT VALUE FOR QUANTITY IN CART
                    var itemNameId = $(this).attr('id'); // SELECT HTML ID FOR INPUT
                    var inputQuantityId = itemNameId.split("-").pop(); // SELECT ITEM MOTLIN ID

                    counter3 = 0;
                    while (counter3 < amountOfProducts) {
                        var productIdLoadType = products[counter3].id; //

                        if (productIdLoadType == inputQuantityId) {
                            var productSlugLoadType = products[counter3].slug;
                            var productIdentifierSelectLoadType = productSlugLoadType - 1;
                            var productInfoToDelete = productIdentifiers[productIdentifierSelectLoadType];
                        } else {
                            console.log("not equal to id");
                        }
                        counter3 += 1;
                    }

                    if (newInputTypeValue >= 1) {

                        moltin.Cart.Update(inputQuantityId, {
                            quantity: newInputTypeValue

                        }, function(item) {
                            console.log(item);     

                            // RETRIEVE CART INFO AGAIN FROM MOLTIN
                            cartItems = moltin.Cart.Contents();

                            // UPDATE PRICE AND TOTAL FOR EACH PRODUCT VARIABLE 
                            console.log("------------------- 3 SELECT CART IDENTIFIER BY ID -------------------");
                            var selectCartIdentifierById = productIdentifiersbyId[inputQuantityId];
                            productInfoLoad = cartItems.contents[selectCartIdentifierById];//item;

                            // UPDATE PRICE AND TOTAL FOR EACH PRODUCT VARIABLE
                            productInfoPriceLoad = productInfoLoad.pricing.formatted.with_tax;
                            productInfoTotalLoad = productInfoLoad.totals.post_discount.formatted.with_tax;

                            // UPDATE VISUAL INFO IN CART OF PRICE AND TOTAL AMOUT PER ITEM
                            $("#productInfoPrice-"+inputQuantityId).text(productInfoPriceLoad); 
                            $("#productInfoTotal-"+inputQuantityId).text(productInfoTotalLoad);


                            cartSubtotal = cartItems.totals.post_discount.formatted.without_tax;
                            $("#cart-subtotal").text(cartSubtotal);

                            cartTotal = cartItems.totals.post_discount.formatted.with_tax;
                            console.log(cartTotal);
                            $(".cart-total-number").text(cartTotal);

                            // UPDATE AMOUNT OF ITEMS IN CART
                            cartCounter = cartItems.total_items;
                            $("#cart-counter").text(cartCounter);


                            if (cartCounter == 0){
                                $("#cart-empty").show();
                                console.log("hey i'm empty (2)");
                            } else {
                                $("#cart-empty").hide();
                                console.log("I'm not empty (2)");
                            }


                        }, function(error) {
                            // Something went wrong...
                            alert("Something went wrong");
                        })

                    } else if (newInputTypeValue === '0') {

                        //  SINCE INPUT VALUE IS EQUAL TO 0, ASK IF THEY WANT TO DELETE THE ITEM
                        moltin.Cart.Remove(productInfoToDelete, function() {
                            // Everything is awesome...
                            cartItems = moltin.Cart.Contents();

                            $("#product-"+inputQuantityId).remove();
                            console.log("Product deleted");

                            // UPDATE TOTAL AND SUBTOTAL IN CART
                            cartSubtotal = cartItems.totals.post_discount.formatted.without_tax;
                            $("#cart-subtotal").text(cartSubtotal);

                            cartTotal = cartItems.totals.post_discount.formatted.with_tax;
                            $(".cart-total-number").text(cartTotal);


                            // DISPLAY ALERT WHEN ITEM IS DELETED
                            $("#cart-alert").fadeIn().delay(2000).fadeOut();

                            // UPDATE AMOUNT OF ITEMS IN CART
                            cartCounter = cartItems.total_items;
                            $("#cart-counter").text(cartCounter);

                            // HIDE OR SHOW "CART EMPTY" PLACEHOLDER
                            if (cartCounter == 0){
                                $("#cart-empty").show();
                            } else {
                                $("#cart-empty").hide();
                            }  

                        }, function(error) {
                            // Something went wrong...
                            alert("Something went wrong");
                        });


                    } else {
                        console.log("This = Nothing");
                        console.log(newInputTypeValue);
                    }
                });
            }   
    } else {
        console.log("---------------------else----------------------------")
    }

        /// LOADING GIF START//
        //$(".loading-gif").show();

        //////// SELECT ELEMENT BY HTML VALUE  ////////
        var selectItemValue = $(this).attr('value')-1;
        console.log("-----------select item value ------------");
        console.log(selectItemValue);
        

        // SELECT ITEM QUANTITY
        var addToCartQuantity = $(this).siblings().children("input").val();
        var insert;
        
        
        if(selectItemValue === 0) {
            // ADD TO CART CUSTOM PEN
            var insertCustom = moltin.Cart.Insert(products[selectItemValue].id, addToCartQuantity, {modPenStyle: varPenStyle, modWoodSelections: varWoodSelections, modMetalSelections: varMetalSelections, modInlaySelections: varInlaySelections, modAttachmentsSelections: varAttachmentsSelections, modBoxSelection: varBoxSelection});
            console.log("----------- insertCustom ------------");
            if ( insertCustom.status === true ) {
                //////// INSERT ITEM IN CART  ////////
                console.log(insertCustom.result);
            } else {
                // Something went wrong...
            }
            
        } /*
        else if (selectItemValue === 11){ 
            var insertVariations11 = moltin.Cart.Insert(products[selectItemValue].id, addToCartQuantity, {modPenStyle11: varPenStyle11});  
            console.log("----------- insertVariations11 ------------");
            console.log(addToCartQuantity);
            console.log(modPenStyle11);
            console.log(varPenStyle11);
            if ( insertVariations11.status === true ) {
                //////// INSERT ITEM IN CART  ////////
                console.log(insertVariations11.result);
            } else {
                // Something went wrong...]
                console.log("Something went wrong insertVariations11");
            }
            
        } else if (selectItemValue === 9){ 
            var insertVariations9 = moltin.Cart.Insert(products[selectItemValue].id, addToCartQuantity, {modPenStyle9: varPenStyle9}); 
            console.log("----------- insertVariations9 ------------");
            if ( insertVariations9.status === true ) {
                //////// INSERT ITEM IN CART  ////////
                console.log(insertVariations9.result);
            } else {
                // Something went wrong...
                console.log("Something went wrong insertVariations9");
            }
              
        } */
        else {
            //////// INSERT ITEM IN CART  ////////
            insert = moltin.Cart.Insert(products[selectItemValue].id, addToCartQuantity, null);
            console.log("selectItemValue");
            console.log(selectItemValue);
            console.log("products[selectItemValue]");
            console.log(products);
            console.log(selectItemValue);
            console.log(products[selectItemValue]);
            console.log(products[selectItemValue].id);
            console.log("addToCartQuantity");
            console.log(addToCartQuantity);
            console.log("insert");
            console.log(insert);

        };
        
        
        var cart = moltin.Cart.Contents();  

        //////// CART COUNTER ////////
        cartCounter = cart.total_unique_items;
        var cartAllCounter = cart.total_items;
        $("#cart-counter").text(cartAllCounter);
        

        /////// CART INSERT INFO /////////
        var productSlug = products[selectItemValue].slug;
        var productIdentifierSelect = productSlug - 1;
        var productInfo = cart.contents[productIdentifiers[productIdentifierSelect]];
        console.log(cart);
        console.log(productInfo);
        var selectProductThumbnailImage = "<img src='"+productThumbnailImages[selectItemValue]+"' alt ='"+productInfo.title+"'>";
        var productInfoTitle = productInfo.title;
        var productInfoQuantity = addToCartQuantity;
        var productInfoPrice = productInfo.pricing.formatted.with_tax;
        var productInfoTotal = productInfo.totals.post_discount.formatted.with_tax;


        // CHECK IF THIS ITEM HAS ALREADY BEEN ADD TO CART, IF NOT IT RETURNS INVALID //
        var isTrThere = $("#product-"+productNumber[selectItemValue]);

        // ADD A NEW TABLE ROW WHEN THE ITEM HAS NOT BEEN ADDED TO THE CART //
        if (!isTrThere[0]) { 

            $("#cart-product-table").find('tbody')
                .append($('<tr id="product-'+productNumber[selectItemValue]+'">')
                    .append($('<td id="productThumbnailImage-'+productNumber[selectItemValue]+'" class="input-table-style">')
                            .append(selectProductThumbnailImage)
                    )
                    .append($('<td id="productInfoTitle-'+productNumber[selectItemValue]+'">')
                            .text(productInfoTitle)
                    )
                    .append($('<input id="productInfoQuantity-'+productNumber[selectItemValue]+'" class="input-quantity-style" />')
                            .val(productInfoQuantity)
                    )
                    .append($('<td id="productInfoPrice-'+productNumber[selectItemValue]+'" class="input-table-style">')
                            .text(productInfoPrice)
                    )
                    .append($('<td id="productInfoTotal-'+productNumber[selectItemValue]+'" class="input-table-style">')
                            .text(productInfoTotal)
                    )
                );
            }

            else { // IF THE ITEM HAS BEEN ADDED TO THE CART, THEN UPDATE THE VALUE

                // SELECT THE TABLE CELL AND REPLACE IT WITH THE NEW VALUE //
                
                productInfoQuantity = productInfo.quantity;

                $("#productInfoQuantity-"+productNumber[selectItemValue]).val(productInfoQuantity); // UPDATE PRODUCT QUANTITY
                $("#productInfoPrice-"+productNumber[selectItemValue]).text(productInfoPrice); // UPDATE PRODUCT PRICE
                $("#productInfoTotal-"+productNumber[selectItemValue]).text(productInfoTotal); // UPDATE PRODUCT TOTAL

            }

        var cartSubtotal = cart.totals.post_discount.formatted.without_tax;
        $("#cart-subtotal").text(cartSubtotal);

        var cartTotal = cart.totals.post_discount.formatted.with_tax;
        $(".cart-total-number").text(cartTotal);

        // WHEN A PRODUCT IS ADDED TO THE CART, DIPLAY A ALERT THAT TELLS THE USERS THAT ITS HAS BEEN ADDED
        $("#product-added-alert").fadeIn().delay(1000).fadeOut();

        // UPDATE ITEM QUANTITY IN CART BASED ON NUMBER TYPED IN ITEMS'S INPUT FIELD IN CART //
        $("#productInfoQuantity-"+productNumber[selectItemValue]).on('keyup', function() {
            // GET VALUE FROM USER QUANTITY INPUT FROM ITEM IN CART
            var newInputTypeValue = $(this).val();


            if (newInputTypeValue >= 1) {

                moltin.Cart.Update(productIdentifiers[productIdentifierSelect], { //HERE
                    quantity: newInputTypeValue

                }, function(item) {

                    cart = moltin.Cart.Contents();

                    // RETRIEVE CART INFO AGAIN FROM MOLTIN
                    productInfo = cart.contents[productIdentifiers[productIdentifierSelect]];

                    // UPDATE PRICE AND TOTAL FOR EACH PRODUCT VARIABLE
                    productInfoPrice = productInfo.pricing.formatted.with_tax;
                    productInfoTotal = productInfo.totals.post_discount.formatted.with_tax;

                    // UPDATE VISUAL INFO IN CART OF PRICE AND TOTAL AMOUT PER ITEM
                    $("#productInfoPrice-"+productNumber[selectItemValue]).text(productInfoPrice); 
                    $("#productInfoTotal-"+productNumber[selectItemValue]).text(productInfoTotal);

                    cartSubtotal = cart.totals.post_discount.formatted.without_tax;
                    $("#cart-subtotal").text(cartSubtotal);

                    cartTotal = cart.totals.post_discount.formatted.with_tax;
                    $(".cart-total-number").text(cartTotal);

                    // UPDATE AMOUNT OF ITEMS IN CART
                    cartCounter = cart.total_items;
                    $("#cart-counter").text(cartCounter);

                    if (cartCounter == 0){
                        $("#cart-empty").show();
                        console.log("hey i'm empty (2)");
                    } else {
                        $("#cart-empty").hide();
                        console.log("I'm not empty (2)");
                    }

                }, function(error) {
                    // Something went wrong...
                    alert("Something went wrong");
                })

            } else if (newInputTypeValue === '0') {

                //  SINCE INPUT VALUE IS EQUAL TO 0, ASK IF THEY WANT TO DELETE THE ITEM

                moltin.Cart.Remove(productIdentifiers[productIdentifierSelect], function() {
                    // Everything is awesome...
                    cart = moltin.Cart.Contents();

                    $("#product-"+productNumber[selectItemValue]).remove();

                    // UPDATE TOTAL AND SUBTOTAL IN CART
                    cartSubtotal = cart.totals.post_discount.formatted.without_tax;
                    $("#cart-subtotal").text(cartSubtotal);

                    cartTotal = cart.totals.post_discount.formatted.with_tax;
                    $(".cart-total-number").text(cartTotal);


                    // DISPLAY ALERT WHEN ITEM IS DELETED
                    $("#cart-alert").fadeIn().delay(2000).fadeOut();

                    // UPDATE AMOUNT OF ITEMS IN CART
                    cartCounter = cart.total_items;
                    $("#cart-counter").text(cartCounter);

                    // HIDE OR SHOW "CART EMPTY" PLACEHOLDER
                    if (cartCounter == 0){
                        $("#cart-empty").show();
                    } else {
                        $("#cart-empty").hide();
                    }  


                }, function(error) {
                    // Something went wrong...
                    alert("Something went wrong");
                });


            } else {
                console.log("This = Nothing");
                console.log(newInputTypeValue);
            }



        });       

    });


        

    $("#cart-next").click(function() {
        $("#shipping").delay(100).show();
        $("#cart").hide();
    });


    
    //////// VALIDATE IF FORM IS FULL//////////

   function checkInput() {
        var invalid=false;

        if ($("#first_name").val() == "" ) {
            invalid=true;
        }

        if ($("#last_name").val()== "") {
            invalid=true;
        }
        if ($("#address1").val()== "") {
            invalid=true;
        }
        if ($("#city").val()== "") {
            invalid=true;
        }
        if ($("#county").val()== "") {
            invalid=true;
        }
        if ($("#country").val()== "") {
            invalid=true;
        }
        if ($("#post_code").val()== "") {
            invalid=true;
        }
        if ($("#phone").val()== "") {
            invalid=true;
        }

        return invalid;

   }

   //////// BILLING VALIDATE IF FORM IS FULL //////////

   function billingCheckInput() {
    
    var billingInvalid=false;

    if ($("#billing-first_name").val() == "" ) {
        billingInvalid=true;
    }

    if ($("#billing-last_name").val()== "") {
        billingInvalid=true;
    }
    if ($("#billing-address1").val()== "") {
        billingInvalid=true;
    }
    if ($("#billing-city").val()== "") {
        billingInvalid=true;
    }
    if ($("#billing-county").val()== "") {
        billingInvalid=true;
    }
    if ($("#billing-country").val()== "") {
        billingInvalid=true;
    }
    if ($("#billing-post_code").val()== "") {
        billingInvalid=true;
    }
    if ($("#billing-phone").val()== "") {
        billingInvalid=true;
    }

    return billingInvalid;

}
    
    
    //////// SHIPPING ////////
    
    $("#shipping-next").click(function() {
        
        
        
        var invalid;
        invalid= checkInput();

        if (invalid==false) {

            var name = $("#first_name").val();
            var lastName = $("#last_name").val();
            var address01 = $("#address1").val();
            var address02 = $("#address2").val();
            var city_var = $("#city").val();
            var county_var = $("#county").val();
            var country_var = $("#country").val();
            var post_code_var = $("#post_code").val();
            var phone_var = $("#phone").val();
            
 
            if ($('#shipping-form :checkbox').is(':checked')) {

                // SEND USER TO THE CHECKOUT STEP PAGE
                $("#checkout").delay(100).show();
                $("#shipping").hide();


                $("#finish-checkout").click(function() {

                    var order = moltin.Cart.Complete({
                        gateway: 'stripe', //dummy
                        bill_to: {
                            first_name: name,
                            last_name: lastName,
                            address_1: address01,
                            address_2: address02,
                            city: city_var,
                            county: county_var,
                            country: 'GB',
                            postcode: post_code_var,
                            phone: phone_var
                        },
                        ship_to: 'bill_to',
                        shipping: '978873630224024212',
                        //customer: '123'
                    });

                    console.log(order);
                        
                    //////// PAYMENT ////////
                        
                    var cardNumber = $("#card-number").val();
                    var expiryMonth = $("#expiry-month").val();
                    var expiryYear = $("#expiryYear").val();
                    var cardCvv = $("#card-cvv").val();

                    var checkout = moltin.Checkout.Payment('purchase', order.id, {
                        data: {
                            number:       cardNumber, //4242424242424242
                            expiry_month: expiryMonth, //02
                            expiry_year:  expiryYear, //2017
                            cvv:          cardCvv //123
                        }
                    });

                    console.log(checkout);

                    $("#purchase-summary").delay(100).show();
                    $("#checkout").hide();
                    
                    //////// PURCHASE SUMMARY ///////
                
                    
                        var purchaseSummaryProductsAll = moltin.Cart.Contents().contents;

                        if (purchaseSummaryProductsAll['467a74f51db771c2330e39120e7aa78d']){
                            var purchaseSummaryProduct1 = purchaseSummaryProductsAll['467a74f51db771c2330e39120e7aa78d'].name;
                            console.log(purchaseSummaryProduct1);
                            $('#purchase-summary-product1').html(purchaseSummaryProduct1);
                            var purchaseSummaryProduct1Quantity = purchaseSummaryProductsAll['467a74f51db771c2330e39120e7aa78d'].quantity;
                            $('#purchase-summary-product1-quantity').html(purchaseSummaryProduct1Quantity);
                            
                        }

                        if (purchaseSummaryProductsAll['61b4949b31bd30937ff00a709b9e6137']){
                            var purchaseSummaryProduct2 = purchaseSummaryProductsAll['61b4949b31bd30937ff00a709b9e6137'].name;
                            console.log(purchaseSummaryProduct2);
                            $('#purchase-summary-product2').html(purchaseSummaryProduct2);   
                            var purchaseSummaryProduct2Quantity = purchaseSummaryProductsAll['61b4949b31bd30937ff00a709b9e6137'].quantity;
                            $('#purchase-summary-product2-quantity').html(purchaseSummaryProduct2Quantity);
                        }

                        if (purchaseSummaryProductsAll['1d6e6ad5b00634363f9cba21ba40e062']){
                            var purchaseSummaryProduct3 = purchaseSummaryProductsAll['1d6e6ad5b00634363f9cba21ba40e062'].name;
                            console.log(purchaseSummaryProduct3);
                            $('#purchase-summary-product3').html(purchaseSummaryProduct3);  
                            var purchaseSummaryProduct3Quantity = purchaseSummaryProductsAll['1d6e6ad5b00634363f9cba21ba40e062'].quantity;
                            $('#purchase-summary-product3-quantity').html(purchaseSummaryProduct3Quantity);
                        }

                        if (purchaseSummaryProductsAll['9acb7ee1c6c2633c3088b747eeb3cc60']){
                            var purchaseSummaryProduct4 = purchaseSummaryProductsAll['9acb7ee1c6c2633c3088b747eeb3cc60'].name;
                            console.log(purchaseSummaryProduct4);
                            $('#purchase-summary-product4').html(purchaseSummaryProduct4); 
                            var purchaseSummaryProduct4Quantity = purchaseSummaryProductsAll['9acb7ee1c6c2633c3088b747eeb3cc60'].quantity;
                            $('#purchase-summary-product4-quantity').html(purchaseSummaryProduct4Quantity);
                        }

                        if (purchaseSummaryProductsAll['c5da2b3c111fde819d83e3003f622c91']){
                            var purchaseSummaryProduct5 = purchaseSummaryProductsAll['c5da2b3c111fde819d83e3003f622c91'].name;
                            console.log("purchaseSummaryProduct5: ");
                            console.log(purchaseSummaryProduct5);
                            $('#purchase-summary-product5').html(purchaseSummaryProduct5);   
                            var purchaseSummaryProduct5Quantity = purchaseSummaryProductsAll['c5da2b3c111fde819d83e3003f622c91'].quantity;
                            $('#purchase-summary-product5-quantity').html(purchaseSummaryProduct5Quantity);
                        }

                        if (purchaseSummaryProductsAll['f94274ebdcdc04dd5ddd6df2b743d119']){
                            var purchaseSummaryProduct6 = purchaseSummaryProductsAll['f94274ebdcdc04dd5ddd6df2b743d119'].name;
                            console.log(purchaseSummaryProduct6);
                            $('#purchase-summary-product6').html(purchaseSummaryProduct6); 
                            var purchaseSummaryProduct6Quantity = purchaseSummaryProductsAll['f94274ebdcdc04dd5ddd6df2b743d119'].quantity;
                            $('#purchase-summary-product6-quantity').html(purchaseSummaryProduct6Quantity);
                        }

                        if (purchaseSummaryProductsAll['ac12364bc08b400434a3a24784ad5bd3']){
                            var purchaseSummaryProduct7 = purchaseSummaryProductsAll['ac12364bc08b400434a3a24784ad5bd3'].name;
                            console.log("purchaseSummaryProduct7: ");
                            console.log(purchaseSummaryProduct7);
                            $('#purchase-summary-product7').html(purchaseSummaryProduct7);   
                            var purchaseSummaryProduct7Quantity = purchaseSummaryProductsAll['ac12364bc08b400434a3a24784ad5bd3'].quantity;
                            $('#purchase-summary-product7-quantity').html(purchaseSummaryProduct7Quantity);
                        }

                        if (purchaseSummaryProductsAll['c637216a1a5c7758fb530d515dd58081']){
                            var purchaseSummaryProduct8 = purchaseSummaryProductsAll['c637216a1a5c7758fb530d515dd58081'].name;
                            console.log(purchaseSummaryProduct8);
                            $('#purchase-summary-product8').html(purchaseSummaryProduct8);
                            var purchaseSummaryProduct8Quantity = purchaseSummaryProductsAll['c637216a1a5c7758fb530d515dd58081'].quantity;
                            $('#purchase-summary-product8-quantity').html(purchaseSummaryProduct8Quantity);
                        }

                        if (purchaseSummaryProductsAll['3e90f859f1e29a84b00027c3189ad4ff']){
                            var purchaseSummaryProduct9 = purchaseSummaryProductsAll['3e90f859f1e29a84b00027c3189ad4ff'].name;
                            console.log("purchaseSummaryProduct9: ");
                            console.log(purchaseSummaryProduct9);
                            $('#purchase-summary-product9').html(purchaseSummaryProduct9);  
                            var purchaseSummaryProduct9Quantity = purchaseSummaryProductsAll['3e90f859f1e29a84b00027c3189ad4ff'].quantity;
                            $('#purchase-summary-product9-quantity').html(purchaseSummaryProduct9Quantity);
                        }

                        if (purchaseSummaryProductsAll['76b9a550120cbce5056736e25093d48f']){
                            var purchaseSummaryProduct10 = purchaseSummaryProductsAll['76b9a550120cbce5056736e25093d48f'].name;
                            console.log(purchaseSummaryProduct10);
                            $('#purchase-summary-product10').html(purchaseSummaryProduct10);   
                            var purchaseSummaryProduct10Quantity = purchaseSummaryProductsAll['76b9a550120cbce5056736e25093d48f'].quantity;
                            $('#purchase-summary-product10-quantity').html(purchaseSummaryProduct10Quantity);
                        }

                        if (purchaseSummaryProductsAll['89e1cc824d0b3ab4ea26e98174a202b0']){
                            var purchaseSummaryProduct11 = purchaseSummaryProductsAll['89e1cc824d0b3ab4ea26e98174a202b0'].name;
                            console.log(purchaseSummaryProduct11);
                            $('#purchase-summary-product11').html(purchaseSummaryProduct11); 
                            var purchaseSummaryProduct11Quantity = purchaseSummaryProductsAll['89e1cc824d0b3ab4ea26e98174a202b0'].quantity;
                            $('#purchase-summary-product11-quantity').html(purchaseSummaryProduct11Quantity);
                        }

                        if (purchaseSummaryProductsAll['6ffbea19a38e0ee29d28d489a2653228']){
                            var purchaseSummaryProduct11 = purchaseSummaryProductsAll['6ffbea19a38e0ee29d28d489a2653228'].name;
                            console.log(purchaseSummaryProduct11);
                            $('#purchase-summary-product12').html(purchaseSummaryProduct11); 
                            var purchaseSummaryProduct12Quantity = purchaseSummaryProductsAll['6ffbea19a38e0ee29d28d489a2653228'].quantity;
                            $('#purchase-summary-product12-quantity').html(purchaseSummaryProduct12Quantity);
                        }
                        
                    var purchaseSummaryMessage = checkout.message;
                    var purchaseSummaryReference = checkout.reference;

                    $('#purchase-summary-message').html(purchaseSummaryMessage);
                    $('#purchase-summary-reference').html(purchaseSummaryReference);
                    
                    var purchaseSummaryTotal = checkout.order.total;
                    var purchaseSummaryCurrency = checkout.order.currency_code;
                    
                    $('#purchase-summary-total').html(purchaseSummaryTotal);
                    $('#purchase-summary-currency').html(purchaseSummaryCurrency);
                    
                    var purchaseSummaryBillingAddress1 = checkout.order.bill_to.data.address_1;
                    var purchaseSummaryBillingAddress2 = checkout.order.bill_to.data.address_2;
                    var purchaseSummaryBillingCity = checkout.order.bill_to.data.city;
                    var purchaseSummaryBillingCountry = checkout.order.bill_to.data.country.value;
                    var purchaseSummaryBillingCounty = checkout.order.bill_to.data.county;
                    var purchaseSummaryBillingPostcode = checkout.order.bill_to.data.postcode;
                    var purchaseSummaryBillingFirstname = checkout.order.bill_to.data.first_name;
                    var purchaseSummaryBillingLastname = checkout.order.bill_to.data.last_name;
                    var purchaseSummaryBillingPhone = checkout.order.bill_to.data.phone;
                    
                    
                    $('#purchase-summary-billing-address1').html(purchaseSummaryBillingAddress1);
                    $('#purchase-summary-billing-address2').html(purchaseSummaryBillingAddress2);
                    $('#purchase-summary-billing-city').html(purchaseSummaryBillingCity);
                    $('#purchase-summary-billing-country').html(purchaseSummaryBillingCountry);
                    $('#purchase-summary-billing-county').html(purchaseSummaryBillingCounty);
                    $('#purchase-summary-billing-postcode').html(purchaseSummaryBillingPostcode);
                    $('#purchase-summary-billing-firstname').html(purchaseSummaryBillingFirstname);
                    $('#purchase-summary-billing-lastname').html(purchaseSummaryBillingLastname);
                    $('#purchase-summary-billing-phone').html(purchaseSummaryBillingPhone);
                    
                    var purchaseSummaryShippingAddress1 = checkout.order.ship_to.data.address_1;
                    var purchaseSummaryShippingAddress2 = checkout.order.ship_to.data.address_2;
                    var purchaseSummaryShippingCity = checkout.order.ship_to.data.city;
                    var purchaseSummaryShippingCountry = checkout.order.ship_to.data.country.value;
                    var purchaseSummaryShippingCounty = checkout.order.ship_to.data.county;
                    var purchaseSummaryShippingPostcode = checkout.order.ship_to.data.postcode;
                    var purchaseSummaryShippingFirstname = checkout.order.ship_to.data.first_name;
                    var purchaseSummaryShippingLastname = checkout.order.ship_to.data.last_name;
                    var purchaseSummaryShippingPhone = checkout.order.ship_to.data.phone;
                    
                    $('#purchase-summary-shipping-address1').html(purchaseSummaryShippingAddress1);
                    $('#purchase-summary-shipping-address2').html(purchaseSummaryShippingAddress2);
                    $('#purchase-summary-shipping-city').html(purchaseSummaryShippingCity);
                    $('#purchase-summary-shipping-country').html(purchaseSummaryShippingCountry);
                    $('#purchase-summary-shipping-county').html(purchaseSummaryShippingCounty);
                    $('#purchase-summary-shipping-postcode').html(purchaseSummaryShippingPostcode);
                    $('#purchase-summary-shipping-firstname').html(purchaseSummaryShippingFirstname);
                    $('#purchase-summary-shipping-lastname').html(purchaseSummaryShippingLastname);
                    $('#purchase-summary-shipping-phone').html(purchaseSummaryShippingPhone);
                });


            } else {

                //////// BILLING //////// 
                                  
                $("#billing-next").click(function() {
                    
                    console.log("billing-next clicked");
                    
                    var billingInvalid;
                    billingInvalid= billingCheckInput();
                    

                    if (billingInvalid==false) {

                        var billingName = $("#billing-first_name").val();
                        var billingLastName = $("#billing-last_name").val();
                        var billingAddress01 = $("#billing-address1").val();
                        var billingAddress02 = $("#billing-address2").val();
                        var billingCity_var = $("#billing-city").val();
                        var billingCounty_var = $("#billing-county").val();
                        var billingCountry_var = $("#billing-country").val();
                        var billingPost_code_var = $("#billing-post_code").val();
                        var billingPhone_var = $("#billing-phone").val();
                        
                        // SEND USER TO THE CHECKOUT STEP PAGE
                        $("#checkout").delay(100).show();
                        $("#billing").hide();           

                        
                    } else {
                        $("#billing-alert").fadeIn().delay(2000).fadeOut();
                    }

                    console.log(billingName, billingLastName, billingAddress01, billingAddress02, billingCity_var, billingCounty_var, billingCountry_var, billingPost_code_var, billingPhone_var);
                        
                
                
                    //////// CHECKOUT ///////

                    $("#finish-checkout").click(function() {

                        var order = moltin.Cart.Complete({
                            gateway: 'stripe',
                            bill_to: {
                                first_name: billingName,
                                last_name: billingLastName,
                                address_1: billingAddress01,
                                address_2: billingAddress02,
                                city: billingCity_var,
                                county: billingCounty_var,
                                country: 'GB',
                                postcode: billingPost_code_var,
                                phone: billingPhone_var
                            },
                            ship_to: {
                                first_name: name,
                                last_name: lastName,
                                address_1: address01,
                                address_2: address02,
                                city: city_var,
                                county: county_var,
                                country: 'GB',
                                postcode: post_code_var,
                                phone: phone_var
                            },
                            shipping: '978873630224024212',
                            //customer: '123'
                        });

                        console.log(order);
                            
                        //////// PAYMENT ////////
                            
                        var cardNumber = $("#card-number").val();
                        var expiryMonth = $("#expiry-month").val();
                        var expiryYear = $("#expiryYear").val();
                        var cardCvv = $("#card-cvv").val();

                        var checkout = moltin.Checkout.Payment('purchase', order.id, {
                            data: {
                                number:       cardNumber, // 4242424242424242 
                                expiry_month: expiryMonth, // 02
                                expiry_year:  expiryYear, // 2017
                                cvv:          cardCvv // 123
                            }
                        });

                        console.log(checkout);

                        $("#purchase-summary").delay(100).show();
                        $("#checkout").hide();  
                        
                        //////// PURCHASE SUMMARY ///////

                        var purchaseSummaryProductsAll = moltin.Cart.Contents().contents;

                        if (purchaseSummaryProductsAll['467a74f51db771c2330e39120e7aa78d']){
                            var purchaseSummaryProduct1 = purchaseSummaryProductsAll['467a74f51db771c2330e39120e7aa78d'].name;
                            console.log("purchaseSummaryProduct1: ");
                            console.log(purchaseSummaryProduct1);
                            $('#purchase-summary-product1').html(purchaseSummaryProduct1);
                            var purchaseSummaryProduct1Quantity = purchaseSummaryProductsAll['467a74f51db771c2330e39120e7aa78d'].quantity;
                            $('#purchase-summary-product1-quantity').html(purchaseSummaryProduct1Quantity);
                            
                        }

                        if (purchaseSummaryProductsAll['61b4949b31bd30937ff00a709b9e6137']){
                            var purchaseSummaryProduct2 = purchaseSummaryProductsAll['61b4949b31bd30937ff00a709b9e6137'].name;
                            console.log("purchaseSummaryProduct2: ");
                            console.log(purchaseSummaryProduct2);
                            $('#purchase-summary-product2').html(purchaseSummaryProduct2);   
                            var purchaseSummaryProduct2Quantity = purchaseSummaryProductsAll['61b4949b31bd30937ff00a709b9e6137'].quantity;
                            $('#purchase-summary-product2-quantity').html(purchaseSummaryProduct2Quantity);
                        }

                        if (purchaseSummaryProductsAll['1d6e6ad5b00634363f9cba21ba40e062']){
                            var purchaseSummaryProduct3 = purchaseSummaryProductsAll['1d6e6ad5b00634363f9cba21ba40e062'].name;
                            console.log("purchaseSummaryProduct3: ");
                            console.log(purchaseSummaryProduct3);
                            $('#purchase-summary-product3').html(purchaseSummaryProduct3);  
                            var purchaseSummaryProduct3Quantity = purchaseSummaryProductsAll['1d6e6ad5b00634363f9cba21ba40e062'].quantity;
                            $('#purchase-summary-product3-quantity').html(purchaseSummaryProduct3Quantity);
                        }

                        if (purchaseSummaryProductsAll['9acb7ee1c6c2633c3088b747eeb3cc60']){
                            var purchaseSummaryProduct4 = purchaseSummaryProductsAll['9acb7ee1c6c2633c3088b747eeb3cc60'].name;
                            console.log("purchaseSummaryProduct4: ");
                            console.log(purchaseSummaryProduct4);
                            $('#purchase-summary-product4').html(purchaseSummaryProduct4); 
                            var purchaseSummaryProduct4Quantity = purchaseSummaryProductsAll['9acb7ee1c6c2633c3088b747eeb3cc60'].quantity;
                            $('#purchase-summary-product4-quantity').html(purchaseSummaryProduct4Quantity);
                        }

                        if (purchaseSummaryProductsAll['c5da2b3c111fde819d83e3003f622c91']){
                            var purchaseSummaryProduct5 = purchaseSummaryProductsAll['c5da2b3c111fde819d83e3003f622c91'].name;
                            console.log("purchaseSummaryProduct5: ");
                            console.log(purchaseSummaryProduct5);
                            $('#purchase-summary-product5').html(purchaseSummaryProduct5);   
                            var purchaseSummaryProduct5Quantity = purchaseSummaryProductsAll['c5da2b3c111fde819d83e3003f622c91'].quantity;
                            $('#purchase-summary-product5-quantity').html(purchaseSummaryProduct5Quantity);
                        }

                        if (purchaseSummaryProductsAll['f94274ebdcdc04dd5ddd6df2b743d119']){
                            var purchaseSummaryProduct6 = purchaseSummaryProductsAll['f94274ebdcdc04dd5ddd6df2b743d119'].name;
                            console.log("purchaseSummaryProduct6: ");
                            console.log(purchaseSummaryProduct6);
                            $('#purchase-summary-product6').html(purchaseSummaryProduct6); 
                            var purchaseSummaryProduct6Quantity = purchaseSummaryProductsAll['f94274ebdcdc04dd5ddd6df2b743d119'].quantity;
                            $('#purchase-summary-product6-quantity').html(purchaseSummaryProduct6Quantity);
                        }

                        if (purchaseSummaryProductsAll['ac12364bc08b400434a3a24784ad5bd3']){
                            var purchaseSummaryProduct7 = purchaseSummaryProductsAll['ac12364bc08b400434a3a24784ad5bd3'].name;
                            console.log("purchaseSummaryProduct7: ");
                            console.log(purchaseSummaryProduct7);
                            $('#purchase-summary-product7').html(purchaseSummaryProduct7);   
                            var purchaseSummaryProduct7Quantity = purchaseSummaryProductsAll['ac12364bc08b400434a3a24784ad5bd3'].quantity;
                            $('#purchase-summary-product7-quantity').html(purchaseSummaryProduct7Quantity);
                        }

                        if (purchaseSummaryProductsAll['c637216a1a5c7758fb530d515dd58081']){
                            var purchaseSummaryProduct8 = purchaseSummaryProductsAll['c637216a1a5c7758fb530d515dd58081'].name;
                            console.log("purchaseSummaryProduct8: ");
                            console.log(purchaseSummaryProduct8);
                            $('#purchase-summary-product8').html(purchaseSummaryProduct8);
                            var purchaseSummaryProduct8Quantity = purchaseSummaryProductsAll['c637216a1a5c7758fb530d515dd58081'].quantity;
                            $('#purchase-summary-product8-quantity').html(purchaseSummaryProduct8Quantity);
                        }

                        if (purchaseSummaryProductsAll['3e90f859f1e29a84b00027c3189ad4ff']){
                            var purchaseSummaryProduct9 = purchaseSummaryProductsAll['3e90f859f1e29a84b00027c3189ad4ff'].name;
                            console.log("purchaseSummaryProduct9: ");
                            console.log(purchaseSummaryProduct9);
                            $('#purchase-summary-product9').html(purchaseSummaryProduct9);  
                            var purchaseSummaryProduct9Quantity = purchaseSummaryProductsAll['3e90f859f1e29a84b00027c3189ad4ff'].quantity;
                            $('#purchase-summary-product9-quantity').html(purchaseSummaryProduct9Quantity);
                        }

                        if (purchaseSummaryProductsAll['76b9a550120cbce5056736e25093d48f']){
                            var purchaseSummaryProduct10 = purchaseSummaryProductsAll['76b9a550120cbce5056736e25093d48f'].name;
                            console.log("purchaseSummaryProduct10: ");
                            console.log(purchaseSummaryProduct10);
                            $('#purchase-summary-product10').html(purchaseSummaryProduct10);   
                            var purchaseSummaryProduct10Quantity = purchaseSummaryProductsAll['76b9a550120cbce5056736e25093d48f'].quantity;
                            $('#purchase-summary-product10-quantity').html(purchaseSummaryProduct10Quantity);
                        }

                        if (purchaseSummaryProductsAll['89e1cc824d0b3ab4ea26e98174a202b0']){
                            var purchaseSummaryProduct11 = purchaseSummaryProductsAll['89e1cc824d0b3ab4ea26e98174a202b0'].name;
                            console.log("purchaseSummaryProduct11: ");
                            console.log(purchaseSummaryProduct11);
                            $('#purchase-summary-product11').html(purchaseSummaryProduct11); 
                            var purchaseSummaryProduct11Quantity = purchaseSummaryProductsAll['89e1cc824d0b3ab4ea26e98174a202b0'].quantity;
                            $('#purchase-summary-product11-quantity').html(purchaseSummaryProduct11Quantity);
                        }

                        if (purchaseSummaryProductsAll['6ffbea19a38e0ee29d28d489a2653228']){
                            var purchaseSummaryProduct11 = purchaseSummaryProductsAll['6ffbea19a38e0ee29d28d489a2653228'].name;
                            console.log("purchaseSummaryProduct11: ");
                            console.log(purchaseSummaryProduct11);
                            $('#purchase-summary-product12').html(purchaseSummaryProduct11); 
                            var purchaseSummaryProduct12Quantity = purchaseSummaryProductsAll['6ffbea19a38e0ee29d28d489a2653228'].quantity;
                            $('#purchase-summary-product12-quantity').html(purchaseSummaryProduct12Quantity);
                        }
                        
                        var purchaseSummaryMessage = checkout.message;
                        var purchaseSummaryReference = checkout.reference;

                        $('#purchase-summary-message').html(purchaseSummaryMessage);
                        $('#purchase-summary-reference').html(purchaseSummaryReference);

                        var purchaseSummaryTotal = checkout.order.total;
                        var purchaseSummaryCurrency = checkout.order.currency_code;

                        $('#purchase-summary-total').html(purchaseSummaryTotal);
                        $('#purchase-summary-currency').html(purchaseSummaryCurrency);

                        var purchaseSummaryBillingAddress1 = checkout.order.bill_to.data.address_1;
                        var purchaseSummaryBillingAddress2 = checkout.order.bill_to.data.address_2;
                        var purchaseSummaryBillingCity = checkout.order.bill_to.data.city;
                        var purchaseSummaryBillingCountry = checkout.order.bill_to.data.country.value;
                        var purchaseSummaryBillingCounty = checkout.order.bill_to.data.county;
                        var purchaseSummaryBillingPostcode = checkout.order.bill_to.data.postcode;
                        var purchaseSummaryBillingFirstname = checkout.order.bill_to.data.first_name;
                        var purchaseSummaryBillingLastname = checkout.order.bill_to.data.last_name;
                        var purchaseSummaryBillingPhone = checkout.order.bill_to.data.phone;


                        $('#purchase-summary-billing-address1').html(purchaseSummaryBillingAddress1);
                        $('#purchase-summary-billing-address2').html(purchaseSummaryBillingAddress2);
                        $('#purchase-summary-billing-city').html(purchaseSummaryBillingCity);
                        $('#purchase-summary-billing-country').html(purchaseSummaryBillingCountry);
                        $('#purchase-summary-billing-county').html(purchaseSummaryBillingCounty);
                        $('#purchase-summary-billing-postcode').html(purchaseSummaryBillingPostcode);
                        $('#purchase-summary-billing-firstname').html(purchaseSummaryBillingFirstname);
                        $('#purchase-summary-billing-lastname').html(purchaseSummaryBillingLastname);
                        $('#purchase-summary-billing-phone').html(purchaseSummaryBillingPhone);

                        var purchaseSummaryShippingAddress1 = checkout.order.ship_to.data.address_1;
                        var purchaseSummaryShippingAddress2 = checkout.order.ship_to.data.address_2;
                        var purchaseSummaryShippingCity = checkout.order.ship_to.data.city;
                        var purchaseSummaryShippingCountry = checkout.order.ship_to.data.country.value;
                        var purchaseSummaryShippingCounty = checkout.order.ship_to.data.county;
                        var purchaseSummaryShippingPostcode = checkout.order.ship_to.data.postcode;
                        var purchaseSummaryShippingFirstname = checkout.order.ship_to.data.first_name;
                        var purchaseSummaryShippingLastname = checkout.order.ship_to.data.last_name;
                        var purchaseSummaryShippingPhone = checkout.order.ship_to.data.phone;

                        $('#purchase-summary-shipping-address1').html(purchaseSummaryShippingAddress1);
                        $('#purchase-summary-shipping-address2').html(purchaseSummaryShippingAddress2);
                        $('#purchase-summary-shipping-city').html(purchaseSummaryShippingCity);
                        $('#purchase-summary-shipping-country').html(purchaseSummaryShippingCountry);
                        $('#purchase-summary-shipping-county').html(purchaseSummaryShippingCounty);
                        $('#purchase-summary-shipping-postcode').html(purchaseSummaryShippingPostcode);
                        $('#purchase-summary-shipping-firstname').html(purchaseSummaryShippingFirstname);
                        $('#purchase-summary-shipping-lastname').html(purchaseSummaryShippingLastname);
                        $('#purchase-summary-shipping-phone').html(purchaseSummaryShippingPhone);
                        
                    }); 

                }); 


                $("#billing").delay(100).show();
                $("#shipping").hide();
            }

            
        } else {
            $("#shipping-alert").fadeIn().delay(2000).fadeOut();
        }

        console.log(name, lastName, address01, address02, city_var, county_var, country_var, post_code_var, phone_var);
    
        

        


    });  
});



$("#finish-purchase-summary").click(function() {
    $("#purchase-summary").hide();
    
    // remove everything form cart
    
    console.log("Delete items in cart");
    var finalCart = moltin.Cart.Contents().contents;
    var finalProductToDelete = '';
    var removeFromCartCounter = 0;
    
    while ( removeFromCartCounter < productIdentifiers.length) {
        
        console.log(removeFromCartCounter);
        
        finalProductToDelete = productIdentifiers[removeFromCartCounter];
        console.log(finalProductToDelete);
        
        if (finalCart[finalProductToDelete]) {
            
            moltin.Cart.Remove(productIdentifiers[removeFromCartCounter], function() {
                // Everything is awesome...
                console.log("Product Deleted");
            }, function(error) {
                // Something went wrong...
                alert("Something went wrong");
            });

        } else {
            console.log("Product not in cart");
        }
        
        removeFromCartCounter += 1;
    }
    
    //var finalCart = moltin.Cart.Contents();
    //var finalCartCounter = finalCart.total_items;
    //$("#cart-counter").text(cartCounter);
    
    
    if ( removeFromCartCounter == productIdentifiers.length) {
        console.log("will reload"); //testing if it works
        //location.reload();
    };
    
});

$(".hide-cart").click(function() {
    $("#cart").hide();
    $("#shipping").hide();
    $("#checkout").hide();
    $("#billing").hide();
});

$("#back-shipping").click(function() {
    $("#shipping").hide();
    $("#cart").show();
});

$("#back-billing").click(function() {
    $("#billing").hide();
    $("#shipping").show();
});

$("#back-checkout").click(function() {

    if ($('#shipping-form :checkbox').is(':checked')) {

        // SEND USER BACK TO SHIPPING IS FORM CHECKBOX CHECKED
        $("#checkout").hide();
        $("#shipping").show();

    } else {

        $("#checkout").hide();
        $("#billing").show();
    }

});






