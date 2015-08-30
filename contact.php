<html>
<head>
	<title>Penturnings</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="css/bootstrap.min.css" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="shortcut icon" type="image/png" href="css/images/favicon.png"/>

    <!-- JQUERY -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>

    <!-- MOLTIN -->
    <script src="https://js.moltin.com/v1"></script>
</head>


<body>

	<div class="navbar navbar-default navbar-static-top">
		<div class="container">
			<div class="navbar-header">
				<a href="index.html" class="navbar-brand"><img src="css/images/logo.png" height="61" width="203"></a>
				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
			</div>

			<div class="collapse navbar-collapse">
				<ul class="nav navbar-nav navbar-right">
					<li><a href="index.html" class="active">HOME</a></li>
					<li><a href="#">PENS</a></li>
					<li><a href="#">PRODUCTS</a></li>
					<li><a href="aboutme.html">ABOUT</a></li>
					<li><a href="contactus.html">CONTACT</a></li>
				</ul>
			</div>
		</div>
	</div>

    <!-- HEADER CART-->
    <div id="header">
        <div class="container">
            <div class="row">
                <div class="col-xs-4">
                    <div id="header-logo"></div>
                </div>
                <div class="col-xs-4">
                    <div id="header-title"></div>
                </div>
                <div class="col-xs-4">
                    <div id="header-cart">
                        <div id="cart-counter">0</div>
                        <div id="cart-text">CART</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="product-added-alert">
        <div class="container">
            <div class="row">
                <div class="col-md-12" id="cart-alert-text" >Item added to cart</div>
            </div>
        </div>
    </div>

    <!-- CART -->
    <div id="cart">
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">
                    <div id="cart-section">
                        <div id="cart-header" class="row">
                            <div class="cart-title col-xs-4 col-xs-offset-4">CART</div>
                            <div class="hide-cart col-xs-4">HIDE</div>
                        </div>
                        <div  id="cart-alert" class="row">
                            <div class="col-md-12" id="cart-alert-text" >Item deleted from cart</div>
                        </div>



                        <div id="cart-all-products">
                            <table id="cart-product-table" class="cart-table" >
                                <tr>
                                    <td Style="height: 60px; width: 80px;" ></td>
                                    <td class="list-style-3">Product</td>
                                    <td class="list-style-3 input-table-style">Quantity</td>
                                    <td class="list-style-3 input-table-style">Price</td>
                                    <td class="list-style-3 input-table-style">Total Price</td>
                                </tr>
                            </table  >

                            <div id="cart-empty">The cart is empty :( <br />
                                Browse Perturnings, then choose your favorite products <br />
                                and add them to this cart!</div>

                            <br />
                            <br />
                            <div class="division-line"></div>
                            <table class="cart-table">
                                <tr class="cart-total">
                                    <td Style="height: 60px; width: 80px;"></td>
                                    <td class="list-style-3 input-table-style">Total Without Tax</td>
                                    <td class="list-style-3" id="cart-subtotal"></td>
                                </tr>
                                <tr class="yellow-bg">
                                    <td Style="height: 60px; width: 80px;"></td>
                                    <td class="list-style-1 input-table-style">Total</td>
                                    <td class="list-style-1 cart-total-number"></td>
                                </tr>

                            </table>

                            <br />
                            <br />

                            <div id="cart-next">NEXT</div>

                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- SHIPPING -->
    <div id="shipping">
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">

                    <div id="shipping-section">
                        <div id="shipping-header" class="row">
                            <div class="back-cart col-xs-4" id="back-shipping">BACK</div>
                            <div class="cart-title col-xs-4">SHIPPING ADDRESS</div>
                            <div class="hide-cart col-xs-4">HIDE</div>
                        </div>
                        <div  id="shipping-alert" class="row">
                            <div class="col-md-12" id="cart-alert-text" >Please fill the Shipping Address correctly</div>
                        </div>

                        <div id="shipping-body">

                            <form role="form" id="shipping-form">
                                <div class="row form-row-center">
                                    <div class="col-md-6"><input type="text" id="first_name" class="form-control" maxlength="60" placeholder="First name"/></div>
                                    <div class="col-md-6"><input type="text" id="last_name" class="form-control" maxlength="60" placeholder="Last name"/></div>
                                </div>
                                <div class="row form-row-center">
                                    <div class="col-md-6"><input type="text" id="address1" class="form-control" maxlength="60" placeholder="Address 1"/></div>
                                    <div class="col-md-6"><input type="text" id="address2" class="form-control" maxlength="60" placeholder="Address 2"/></div>
                                </div>
                                <div class="row form-row-center">
                                    <div class="col-md-6"><input type="text" id="city" class="form-control" maxlength="60" placeholder="City"/></div>
                                    <div class="col-md-6"><input type="text" id="county" class="form-control" maxlength="60" placeholder="County"/></div>
                                </div>
                                <div class="row form-row-center">
                                    <div class="col-md-6"><input type="text" id="country" class="form-control" maxlength="60" placeholder="Country"/></div>
                                    <div class="col-md-6"><input type="text" id="post_code" class="form-control" maxlength="60" placeholder="Postcode"/></div>
                                </div>
                                <div class="row form-row-center">
                                    <div class="col-md-6"><input type="text" id="phone" class="form-control" maxlength="60" placeholder="Phone"/>
                                    </div>
                                    <div class="col-md-4 bill-me-here">Bill me to this address</div>
                                    <div class="col-md-2"><input type="checkbox"></div>
                                </div>
                            </form>

                            <div class="division-line"></div>

                            <br />
                            <br />

                            <div id="shipping-next">NEXT</div>

                            <br />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="billing">
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">

                    <div id="billing-section">
                        <div id="billing-header" class="row">
                            <div class="back-cart col-xs-4" id="back-billing">BACK</div>
                            <div class="cart-title col-xs-4">BILLING ADDRESS</div>
                            <div class="hide-cart col-xs-4">HIDE</div>
                        </div>
                        <div  id="billing-alert" class="row">
                            <div class="col-md-12" id="cart-alert-text" >Please fill the Billing Address correctly</div>
                        </div>

                        <div id="billing-body">

                            <form role="form">
                                <div class="row form-row-center">
                                    <div class="col-md-6"><input type="text" id="billing-first_name" class="form-control" maxlength="60" placeholder="First name"/></div>
                                    <div class="col-md-6"><input type="text" id="billing-last_name" class="form-control" maxlength="60" placeholder="Last name"/></div>
                                </div>
                                <div class="row form-row-center">
                                    <div class="col-md-6"><input type="text" id="billing-address1" class="form-control" maxlength="60" placeholder="Address 1"/></div>
                                    <div class="col-md-6"><input type="text" id="billing-address2" class="form-control" maxlength="60" placeholder="Address 2"/></div>
                                </div>
                                <div class="row form-row-center">
                                    <div class="col-md-6"><input type="text" id="billing-city" class="form-control" maxlength="60" placeholder="City"/></div>
                                    <div class="col-md-6"><input type="text" id="billing-county" class="form-control" maxlength="60" placeholder="County"/></div>
                                </div>
                                <div class="row form-row-center">
                                    <div class="col-md-6"><input type="text" id="billing-country" class="form-control" maxlength="60" placeholder="Country"/></div>
                                    <div class="col-md-6"><input type="text" id="billing-post_code" class="form-control" maxlength="60" placeholder="Postcode"/></div>
                                </div>
                                <div class="row form-row-center">
                                    <div class="col-md-6 col-md-offset-3"><input type="text" id="billing-phone" class="form-control" maxlength="60" placeholder="Phone"/>
                                    </div>
                                </div>
                            </form>

                            <div class="division-line"></div>

                            <br />
                            <br />

                            <div id="billing-next">NEXT</div>

                            <br />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>




    <!-- CHECKOUT -->
    <div id="checkout">
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">

                    <div id="checkout-section">
                        <div id="checkout-header" class="row">
                            <div class="back-cart col-xs-4" id="back-checkout">BACK</div>
                            <div class="cart-title col-xs-4">CHECKOUT</div>
                            <div class="hide-cart col-xs-4">HIDE</div>
                        </div>

                        <table class="cart-table">
                            <tr class="yellow-bg">
                                <td Style="height: 100px; width: 100px;"></td>
                                <td class="list-style-1 input-table-style">Total</td>
                                <td class="list-style-1 cart-total-number"></td>
                            </tr>
                        </table>


                        <div class="division-line"></div>



                        <div id="checkout-body">

                            <form role="form">
                                <div class="row form-row-center">
                                    <div class="col-xs-6"><input type="text" id="card-number" class="form-control" maxlength="60" placeholder="Card Number"/></div>
                                    <div class="col-xs-6"><input type="text" id="card-name" class="form-control" maxlength="60" placeholder="Full Name"/></div>
                                </div>
                                <div class="row form-row-center">
                                    <div class="col-xs-4"><input type="text" id="expiry-month" class="form-control" maxlength="2" placeholder="Expiry Month"/></div>
                                    <div class="col-xs-4"><input type="text" id="expiryYear" class="form-control" maxlength="4" placeholder="Expiry Year"/></div>
                                    <div class="col-xs-4"><input type="text" id="card-cvv" class="form-control" maxlength="3" placeholder="CVV"/></div>
                                </div>

                            </form>


                        </div>

                        <!-- CHECKOUT -->
                        <div class="division-line"></div>
                        <br />
                        <br />

                        <div id="finish-checkout"><div class="finish-purchase">PURCHASE</div></div>

                        <br />
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- PURCHASE SUMMARY-->
    <div id="purchase-summary">
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">

                    <div id="purchase-summary-section">
                        <div id="purchase-summary-header" class="row">
                            <div class="cart-title col-xs-4 col-xs-offset-4">PURCHASE SUMMARY</div>
                        </div>

                        <table class="cart-table">
                            <tr class="blue-bg">
                                <td Style="height: 100px; width: 100px;"></td>
                                <td ><h1 style="color: white;" id="purchase-summary-message">Processing Payment</h1></td>
                            </tr>
                        </table>

                        <div class="division-line"></div>

                        <br/>
                        <br/>


                        <div class="row">
                            <div class="col-md-4 col-md-offset-1">
                                <h3>Reference</h3>
                                <h5 style="display: inline-block; float: left;" class="purchase-summary-textblue" id="purchase-summary-reference"></h5>
                            </div>
                            <div class="col-md-4 col-md-offset-1">
                                <h3>Total</h3>
                                <h5 style="display: inline-block; float: left;" class="purchase-summary-textblue" id="purchase-summary-total"></h5>
                                <h5 style="display: inline-block; float: left;" class="purchase-summary-textblue" id="purchase-summary-currency"></h5>
                            </div>
                        </div>
                        <br />
                        <div class="division-line"></div>
                        <br />
                        <div class="row">
                            <div class="col-md-4 col-md-offset-1">
                                <h3>Products</h3>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-1 col-md-offset-1">
                                <h5 class="purchase-summary-text" id="purchase-summary-product1-quantity"></h5>
                                <h5 class="purchase-summary-text" id="purchase-summary-product2-quantity"></h5>
                                <h5 class="purchase-summary-text" id="purchase-summary-product3-quantity"></h5>
                                <h5 class="purchase-summary-text" id="purchase-summary-product4-quantity"></h5>
                                <h5 class="purchase-summary-text" id="purchase-summary-product5-quantity"></h5>
                                <h5 class="purchase-summary-text" id="purchase-summary-product6-quantity"></h5>
                                <h5 class="purchase-summary-text" id="purchase-summary-product7-quantity"></h5>
                                <h5 class="purchase-summary-text" id="purchase-summary-product8-quantity"></h5>
                                <h5 class="purchase-summary-text" id="purchase-summary-product9-quantity"></h5>
                                <h5 class="purchase-summary-text" id="purchase-summary-product10-quantity"></h5>
                                <h5 class="purchase-summary-text" id="purchase-summary-product11-quantity"></h5>
                                <h5 class="purchase-summary-text" id="purchase-summary-product12-quantity"></h5>
                            </div>
                            <div class="col-xs-10">
                                <h5 class="purchase-summary-text" id="purchase-summary-product1"></h5>
                                <h5 class="purchase-summary-text" id="purchase-summary-product2"></h5>
                                <h5 class="purchase-summary-text" id="purchase-summary-product3"></h5>
                                <h5 class="purchase-summary-text" id="purchase-summary-product4"></h5>
                                <h5 class="purchase-summary-text" id="purchase-summary-product5"></h5>
                                <h5 class="purchase-summary-text" id="purchase-summary-product6"></h5>
                                <h5 class="purchase-summary-text" id="purchase-summary-product7"></h5>
                                <h5 class="purchase-summary-text" id="purchase-summary-product8"></h5>
                                <h5 class="purchase-summary-text" id="purchase-summary-product9"></h5>
                                <h5 class="purchase-summary-text" id="purchase-summary-product10"></h5>
                                <h5 class="purchase-summary-text" id="purchase-summary-product11"></h5>
                                <h5 class="purchase-summary-text" id="purchase-summary-product12"></h5>
                            </div>
                        </div>
                        <br />
                        <div class="division-line"></div>
                        <br />
                        <div class="row">
                            <div class="col-md-4 col-md-offset-1">
                                <h3>Billing</h3>
                                <h5 class="purchase-summary-subtitle">Address 1:</h5>
                                <h5 class="purchase-summary-text" id="purchase-summary-billing-address1"></h5>
                                <h5 class="purchase-summary-subtitle">Address 2:</h5>
                                <h5 class="purchase-summary-text" id="purchase-summary-billing-address2"></h5>
                                <h5 class="purchase-summary-subtitle">City:</h5>
                                <h5 class="purchase-summary-text" id="purchase-summary-billing-city"></h5>
                                <h5 class="purchase-summary-subtitle">Country:</h5>
                                <h5 class="purchase-summary-text" id="purchase-summary-billing-country"></h5>
                                <h5 class="purchase-summary-subtitle">County:</h5>
                                <h5 class="purchase-summary-text" id="purchase-summary-billing-county"></h5>
                                <h5 class="purchase-summary-subtitle">Post Code:</h5>
                                <h5 class="purchase-summary-text" id="purchase-summary-billing-postcode"></h5>
                                <h5 class="purchase-summary-subtitle">First Name:</h5>
                                <h5 class="purchase-summary-text" id="purchase-summary-billing-firstname"></h5>
                                <h5 class="purchase-summary-subtitle">Last Name:</h5>
                                <h5 class="purchase-summary-text" id="purchase-summary-billing-lastname"></h5>
                                <h5 class="purchase-summary-subtitle">Phone:</h5>
                                <h5 class="purchase-summary-text" id="purchase-summary-billing-phone"></h5>
                            </div>
                            <div class="col-md-4 col-md-offset-1">
                                <h3>Shipping</h3>
                                <h5 class="purchase-summary-subtitle">Address 1:</h5>
                                <h5 class="purchase-summary-text" id="purchase-summary-shipping-address1"></h5>
                                <h5 class="purchase-summary-subtitle">Address 2:</h5>
                                <h5 class="purchase-summary-text" id="purchase-summary-shipping-address2"></h5>
                                <h5 class="purchase-summary-subtitle">City:</h5>
                                <h5 class="purchase-summary-text" id="purchase-summary-shipping-city"></h5>
                                <h5 class="purchase-summary-subtitle">Country:</h5>
                                <h5 class="purchase-summary-text" id="purchase-summary-shipping-country"></h5>
                                <h5 class="purchase-summary-subtitle">County:</h5>
                                <h5 class="purchase-summary-text" id="purchase-summary-shipping-county"></h5>
                                <h5 class="purchase-summary-subtitle">Post Code:</h5>
                                <h5 class="purchase-summary-text" id="purchase-summary-shipping-postcode"></h5>
                                <h5 class="purchase-summary-subtitle">First Name:</h5>
                                <h5 class="purchase-summary-text" id="purchase-summary-shipping-firstname"></h5>
                                <h5 class="purchase-summary-subtitle">Last Name:</h5>
                                <h5 class="purchase-summary-text" id="purchase-summary-shipping-lastname"></h5>
                                <h5 class="purchase-summary-subtitle">Phone:</h5>
                                <h5 class="purchase-summary-text" id="purchase-summary-shipping-phone"></h5>
                            </div>
                        </div>

                        <br/>
                        <br/>


                        <!-- CHECKOUT -->
                        <div class="division-line"></div>
                        <br />
                        <br />

                        <div id="finish-purchase-summary"><div class="finish-purchase-summary">FINISH</div></div>

                        <br />
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- PAGE -->
	<div class="white" style="height:400px; text-align:center; padding-top:80px;">

			<?php

			$name= $_POST["txtname"];  // recojo el nombre desde el formulario

			$email= $_POST["txtemail"];  // recojo el nombre desde el formulario

			$message= $_POST["txtmessage"]; // recojo el mensaje del formulario


			$mailsend = mail ('penturningsus@gmail.com', 'Penturnings, Contact Form', "Name: $name\r\nEmail: $email\r\nMessage: $message");

			if($mailsend) {
				echo "<h2>Thank you for your message!<br>Will be answering you as soon as possible.</h2>";

				}else {
					echo "<h2>Oh oh! Something went wrong! Please try again</h2>";
					}


			?>

	</div>

	<div class="footer">
		<div class="container">

			<div class="row">
				<div class="col-md-1"></div>
				<div class="col-md-2">
					<a href="index.html">HOME</a>
				</div>
				<div class="col-md-2">
					<a href="#">PENS</a>
				</div>
				<div class="col-md-2">
					<a href="#">PRODUCTS</a>
				</div>
				<div class="col-md-2">
					<a href="aboutme.html">ABOUT</a>
				</div>
				<div class="col-md-2">
					<a href="contactus.html">CONTACT</a>
				</div>
				<div class="col-md-1"></div>
			</div>
			<div class="row" style="margin-top:50px;">
				<div class="col-md-12">
					<div class="decoration02"></div>
				</div>
			</div>
			<div class="row" style="margin-top:120px;">
				<div class="col-md-12">
					<h4>COPYRIGHT @ PENTURNINGS.COM 2015</h4>
				</div>
			</div>

		</div>
	</div>

	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
	<script src="js/bootstrap.js"></script>
    <script src="js/store.js" ></script>

</body>
</html>
