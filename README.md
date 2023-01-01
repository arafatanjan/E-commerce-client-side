E commerce

We have a Home page.Home page  has a header (simple navbar), banner, search field, products, reviews, and footer. On the home page, there are first 06 products. Each product has a relevant name, image, short description, a purchase button.

We  have another page on the  navigation bar  naming more products Clicking on the link it will take the user to the explore page. On this page, users will see all the products we have. Each product has a relevant name, image, short description, a purchase button.
The purchase page has  a private/protected route. if the user is not logged in, the private route redirects to the login page. After login, the user will be redirected to the home page. After reloading the page of a private route, the user is not redirected to the login page. The purchase page displays detailed information of the item the user has clicked somewhere at the top. It also displays the user's name and email address from the login system and the user has  fields to provide address, and necessary information to place the order or to complete the purchase.

We have implemented email/ password (login/Register) based login system. The registration  and login button toggle as per their name. Once a user is logged in, the user name, and the logout button  appeared on the header which will log out the user once clicked. 

If a user is logged in, he/she will see another option on the header is called Dashboard and inside that dashboard a normal user (not an admin) will see options like pay, My Orders, Review, Logout.

On the my orders page, the logged in user will see only his/her orders. If the order status is updated he/she will find this in this page. 

On the Review page, users should be able to add a review and that review will appear on the home age. When users will put numeric value as ratings a number (between 0-5) it will show corresponding number of stars in home page.

If an admin logs in, he/she will not see the options that a normal user sees. Insted an admin will see Manage All Orders, Add A Product, Make Admin, Manage Products Logout.

An Admin should be able to make another user an admin. If an admin wants, he/she will be able to add a product on product segment. After adding the product, this product will appear on the explore page.

On the Manage All Orders page for the admin, the logged in admin will see the orders placed by every user. If multiple users used this website to place orders, everyone's order will be displayed here. Admin can update the status of the order. At the time of placing an order, every order will have a default status: pending. On the Manage All Orders page, an admin will be able to update the status of the pending to shipped status.

on the Manage Products page, an admin can delete any of the products.
