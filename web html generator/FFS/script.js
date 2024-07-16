function generate_html_code(){
    var input_title = document.getElementById('user_input_title').value;
    var input_image_url = document.getElementById('user_input_image_url').value;
    var input_icon_1 = document.getElementById('icons_1').value;
    var input_icon_2 = document.getElementById('icons_2').value;
    var input_icon_3 = document.getElementById('icons_3').value;
    var input_icon_4 = document.getElementById('icons_4').value;
    var input_icon_5 = document.getElementById('icons_5').value;
    var input_icon_6 = document.getElementById('icons_6').value;
    var input_icon_7 = document.getElementById('icons_7').value;
    var input_icon_8 = document.getElementById('icons_8').value;
    var specication_1 = document.getElementById('specication_1').value;
    var specication_2 = document.getElementById('specication_2').value;
    var specication_3 = document.getElementById('specication_3').value;
    var specication_4 = document.getElementById('specication_4').value;
    var specication_5 = document.getElementById('specication_5').value;
    var specication_6 = document.getElementById('specication_6').value;
    var specication_7 = document.getElementById('specication_7').value;
    var specication_8 = document.getElementById('specication_8').value;
    var specication_9 = document.getElementById('specication_9').value;
   
    console.log(input_title)
    console.log(input_image_url)

    console.log(input_icon_1)
    console.log(input_icon_2)
    console.log(input_icon_3)
    console.log(input_icon_4)
    console.log(input_icon_5)
    console.log(input_icon_6)
    console.log(input_icon_7)
    console.log(input_icon_8)

    console.log(specication_1)
    console.log(specication_2)
    console.log(specication_3)
    console.log(specication_4)
    console.log(specication_5)
    console.log(specication_6)
    console.log(specication_7)
    console.log(specication_8)
    console.log(specication_9)

    console.log(template_1)

    //before web page tab title
    var template_1 = "img {max-width: 100%; }</style><!-- Begin Description --> <font rwr=\"1\" style=\"font-family: Arial\" size=\"4\"> <font rwr=\"1\" style=\"font-family: Arial\" size=\"4\"> <font rwr=\"1\" style=\"font-family: Arial\" size=\"4\"> <font rwr=\"1\" style=\"font-family: Arial\" size=\"4\"> <title>"
    //addweb page tab title
    var template_2 = "</title> <meta name=\"description\" content=\"This laptop has been refurbished by a team of highly trained professional technicians. We guarantee their work with a 90 day warranty. The laptop is thoroughly tested to make sure it is working right out of the box. They come installed with a fresh copy of Windows so that you will be able to customize it as you want.\"> <meta name=\"keywords\" content=\"Lenovo ThinkPad T450, Intel Core i5 5th Generation, Windows 10 Pro, 90 Day Warranty\"> <link href=\"https://www.onelesszero.com/estore/Frankie'sFastShip/new-listing/css/new-new-listing1.css\" rel=\"stylesheet\"> <link href=\"https://www.onelesszero.com/estore/Frankie'sFastShip/new-listing/css/new-new-reponsive1.css\" rel=\"stylesheet\"> <meta name=\"viewport\" content=\"width=device-width\"> <div class=\"esd-background\"> <div class=\"esd-main\"> <div class=\"org-wrapcen\"> <div class=\"topbar\"> <div id=\"org-header\" class=\"\"> <div class=\"top_wrapper\"> <div class=\"org-serch-main-wrappe-left\"> <div class=\"welcom-text-left-sect\"> Welcome to<br> <span>Frankie's Fast Ship</span> </div> <div class=\"logo-wrapper-right\"> <a href=\"https://stores.ebay.com/frankiesfastship\" target=\"_blank\"><img src=\"https://www.onelesszero.com/estore/Frankie'sFastShip/new-listing/images/logo.png\" alt=\"logo\"></a> </div> </div> <div class=\"org-top-main-menu-bar-right\"> <ul> <li class=\"lisect1\"> <a href=\"https://stores.ebay.com/frankiesfastship/about-us\" target=\"_blank\">About Us</a> </li> <li class=\"lisect2\">"
    var template_2_1 = " <a href=\"https://feedback.ebay.com/ws/eBayISAPI.dll?_2&amp;userid=frankiesfastship&amp;rt=nc\" target=\"_blank\"> Feedback </a> </li> <li class=\"lisect3\"> <a href=\"https://my.ebay.com/ws/eBayISAPI.dll?AcceptSavedSeller&amp;mode=0&amp;preference=0&amp;ssPageName=STRK:MEFS:ADDMP&amp;sellerid=frankiesfastship\" target=\"_blank\">Add to<br> Favorites</a> </li> <li class=\"lisect4\"> <a href=\"https://www.ebay.com/cnt/intermediatedFAQ?requested=frankiesfastship&amp;_trksid=p2545226.m2531.l4583&amp;rt=nc\" target=\"_blank\">contact </a> </li> </ul> <div class=\"clear\"></div> </div> <div class=\"clear\"></div> </div> </div> </div> <div class=\"clear\"></div> <div class=\"title-main-wrappe-div\"> <div id=\"org-header\" class=\"\"> <h1> \"Certified <span>Refurbished Computers &amp; Electronics</span> at a Price<span> you can afford Today</span>\" </h1> </div> </div> <div class=\"org-middle-sect\"> <div id=\"org-header\" class=\"\"> <div class=\"main-wrappe-div\"> <div class=\"menu-holder\"> <div id=\"org-menu\"> <ul> <li> <a href=\"https://stores.ebay.com/frankiesfastship/Laptops-/_i.html?_fsub=2500529719&amp;_sid=1300826069&amp;_trksid=p4634.c0.m322\" target=\"_blank\">Laptops</a> </li> <li> <a href=\"https://stores.ebay.com/frankiesfastship/Desktop-PC-/_i.html?_fsub=1098373619&amp;_sid=1300826069&amp;_trksid=p4634.c0.m322\" target=\"_blank\">Desktop/PC</a> </li> <li> <a href=\"https://stores.ebay.com/frankiesfastship_Laptops-Under-200_W0QQfsubZ2881453719\" target=\"_blank\">Laptops Under 200<"
    var template_2_2 = "/a> </li> <li> <a href=\"https://stores.ebay.com/frankiesfastship/Memory-RAM-/_i.html?_fsub=1602340219&amp;_sid=1300826069&amp;_trksid=p4634.c0.m322\" target=\"_blank\">Memory/RAM</a> </li> <li> <a href=\"https://stores.ebay.com/frankiesfastship/Cables-and-Wires-/_i.html?_fsub=1602374719&amp;_sid=1300826069&amp;_trksid=p4634.c0.m322\" target=\"_blank\">Cables and Wires</a> </li> <li> <a href=\"https://stores.ebay.com/frankiesfastship_Monitors-Displays_W0QQfsubZ2881453819\" target=\"_blank\">Monitors/Displays</a> </li> </ul> <div class=\"clear\"></div> </div> </div> </div> </div> </div> <div class=\"promotion-box-div\"> <div class=\"org-promo\"> <div class=\"org-inner-promo\"> Certified by<br> IT Professionals </div> </div> <div class=\"org-promo\"> <div class=\"org-inner-promo\"> Fast<br> Shipping </div> </div> <div class=\"org-promo\"> <div class=\"org-inner-promo\"> Best Products at<br> the Best Prices </div> </div> <div class=\"org-promo\"> <div class=\"org-inner-promo\"> 100% Satisfaction<br> Guarantee </div> </div> </div> </div> <div class=\"clear\"></div> <div class=\"org-content\"> <h1 class=\"org-title\">"
    //add title HERE
    //before image url
    var template_3 = "</h1> <div class=\"org-listarea\"> <div class=\"org-quality-product\"> <div class=\"org-quality-product-left\"> <div class=\"org-quality-product-img\"> <img src="
    //add image url
    //before logo image 1
    var template_4 = "> </div> <div class=\"org-warranty-img2\"> <img src=\"https://www.onelesszero.com/estore/Frankie'sFastShip/new-listing/images/90daysbanner.jpg\"> </div> </div> <div class=\"org-quality-product-right\"> <div class=\"org-quality-brands\"> <ul> <li> <img src="
    //add logo image 1





    

}