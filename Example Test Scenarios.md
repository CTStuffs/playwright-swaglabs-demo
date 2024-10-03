Based on https://www.saucedemo.com/

## Login Page

**User Story:** As a user, I want to enter my credentials so that I can login.
**Acceptance criteria:**
- Given that a user navigates to the login page
- When the user inputs the correct credentials
- And clicks the login button
- Then the user should be directed to the main page.


**User Story:** As a user, I want to be rejected from inputting incorrect credentials so that I can try again.
**Acceptance criteria:**
- Given that a user navigates to the login page
- When the user inputs the incorrect credentials
- And clicks the login button
- Then the user should be prevented from login
- And an error message stating incorrect credentials were used is shown.


**User Story:** As a user, I want to be locked out after inputting correct credentials three or more times so that my account remains secure from attacks.
**Acceptance criteria:**
- Given that a user navigates to the login page
- When the user inputs the incorrect credentials and clicks the login button three consecutive times
- Then the user should be prevented from login each time
- And after the third time an error message stating the user account has been locked out
- Then the user should input the correct credentials and click the login button
- And the login attempt should fail
- And an error message stating the user account has been locked out is shown.

## Cart

**User Story:** As a user, I want to add an item to a cart via entry in the front page so that it is present for checkout later
**Acceptance criteria:**
- Given that a user navigates to the front page
- And finds their desired item
- When the user clicks on the 'Add to cart' button
- Then the counter icon of the cart in the top right should increment by 1 (and disappear if zero)
- And the 'Add to cart' button is replaced a 'Remove button'
- When the user clicks on the cart button in the top-right
- Then the user should be directed to the cart page
- And see the item present in the cart

**User Story:** As a user, I want to remove an item from the cart via the item page so that it is no longer present for checkout later
**Acceptance criteria:**
- Given that a user navigates to the item's page
- And the item has already been added to the cart
- When the user clicks on the 'remove' button
- Then the counter icon of the cart in the top right should decrement by 1 (and disappear if zero)
- And the 'Remove' button is replaced a 'Add to cart button'
- When the user clicks on the cart button in the top-right
- Then the user should be directed to the cart page
- And see the item not present in the cart

**User Story:** As a user, I want to checkout the cart so that I can pay for my items
**Acceptance criteria:**
- Given that a user has added one or more items to the cart
- And has accessed the cart page
- And confirmed all the items are correct
- When the user clicks on the checkout button
- And is directed to the checkout information page
- Then the user inputs their correct informaion
- And clicks on the continue button
- Then the user is directed to the checkout overview page
- When the user confirms all their information is correct
- Then the user clicks on the finish button
- And the user is directed to a checkout complete page
- When he user clicks on the back home button
- Then the user is directed to the front page.
- 