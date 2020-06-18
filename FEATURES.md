<h1 align="center">Resolve Games</h1>

<h2 align="center"><a href="https://github.com/joenapper/Memory-games/blob/master/README.md"><img src="README-assets/README-btn.png"></a> <img src="README-assets/small-simon.png"> <a href="#"><img src="README-assets/live-website-btn.png"></a></h2>

##### Note: FEATURES.MD is in a separate file to the [README.md](https://github.com/joenapper/Memory-games/blob/master/README.md) to keep the file a reasonable length and to maintain cleanliness.

## Features

- ### Site Wide

    - The site is made up of 3 pages, "Home"(the landing page), "Simon Game", and "Pairs Game".
    All pages have 3 main components in common. A navigation bar, suggestions form, and a footer,
    all of which share the same basic structure in terms of layout. This especially applies to the
    games pages which are laid out centrally and in the same position.

- ##### The Navigation Bar
    - The navigation bar is fully responsive and is aesthetically pleasing on all platforms and devices. 
    
    - In desktop view (screen width size of 992px and above) the brand name is located at the far left-hand side of the 
    navigation bar followed by the links to all the other pages and suggestion form placed far right.

    - In tablet view (screen width sizes between 992px to 767px) the logo remains over the left-hand side however, the
    links are replaced by a 'hamburger' icon which stays over to the right. On click of this icon, there is a quick 
    animation and all the page links appear in column form over a subtle overlay. The overlay is slightly transparent so the
    user can still see the content, but dark enough so the links stand out and can be seen clearly. 

    - In mobile view & smaller screen sized devices (screen width sizes under 767px) the navigation bar acts the same way
    as described in the above 'tablet view'.

- ##### Suggestion Form
    - The suggestion form can be located on any page of the site and is also referenced in the navigation bar. If the
    link is clicked from the navigation bar, the user will be automatically scrolled down to the form that is on that
    particular page. The form layout is compressed to reduce taking up un-necessary real-estate on the page but works
    really well with the flow of the site. The content is eye-catching and draws users in.
    The buttons are the crown and glory of this form. There are two buttons, "Reset" and "Submit". I used a smart
    box-shadow effect on these which, when they are clicked, makes it seem like the button has been pressed. I also
    made it so that when the "Submit" button is clicked, a spinning animation appears, telling the user their form
    is being sent.

    - As the screen width size reduces into a tablet view, the form stays wrapped and still allows for plenty of
    text input room. I chose to remove the 'Reset' button on this view as it creates more room for the 'Submit'
    button and allows everything to remain inline, while still being large enough for users to click.

    - In the mobile view and smaller sized devices, the form displays vertically. The main reason for this is so
    the user has plenty of room to click on text boxes to fill out and not have the annoying issue of not being able
    to select a particular box (which I'm sure we've all experienced). Thus providing better user experience. 

- ##### The Footer
    - The footer is fairly basic but still necessary. It contains the copyright information for the website which
    is against the strong blue background and is near to possible to miss

    - The footer is also fully responsive, however, there are no changes as we go down the display sizes as it is
    not necessary.

### Home Page (Landing Page)

- ##### Hero Images
    - When the site is first opened, the user sees a hero image that represents what the site is about and instantly creates
    attention. This takes up 50vh (view height) of any screen size and the actual image content moves to suit, so the Image
    won't look blurry and is always focusing on the game theme.
    Further down the page, each game has its own hero image which is used to help redirect the user to that particular game.
    This is more obvious when the user hovers over the content, as a slightly transparent overlay slides up with text that reads
    "Let's Play!".

    - As stated above, the main hero image takes up the 50vh and this is the same for mobile and tablet. I smart trick was used
    for the smaller screen sizes so the Image wouldn't lose any of its quality. Instead of the entire Image resizing itself and
    squashing down to fit the screen, the position was set to 'center'. What this does, in effect, is just show what the display
    size can see, from the center. This can be explained from this [diagram](https://i.stack.imgur.com/6TiXL.png).

    - On tablets and mobile, the Images for each game have been made so they take up less room however, they were edited beforehand
    using photoshop to minimize any loss of quality as the Images get smaller. 

- ##### Game Selection Section
    - In the desktop view, this section is split into 2 columns. On the left, we showcase the Simon game, and on the right is the Pairs game.
    Each side is laid out the same. We see an Image of that particular game, which tells the user what game it is about before reading
    the text, followed by the title (i.e Simon Game) and a short description of what the game is about.

    - For tablet, the layout doesn't change as the design still looks good. This section is 
    also completely responsive and each column adjusts to suit the screen size. The text size changes slightly depending on the display
    to keep everything looking proportionate.

    - On mobile, the two games to be selected appear one on top of the other as opposed to side by side, to be much easier to read and
    more visually pleasing. 

### Simon Game

- ##### Layout
    - I designed the game board based on the actual product. Each panel is coloured correctly to this design which wouldn't really matter,
    however, I didn't want to ruin that nostalgic feeling for a user who may have been a big fan of the game as a child. I also decided to 
    Incorporate a turn counter which increments by 1 for each correct sequence. This Isn't a typical feature of the original game,
    but I feel this adds much more depth and playability.

    - By using positioning and translate attributes in 'CSS' I was able to make the game board extremely responsive which made It
    a lot easier to update on the smaller screen sizes.

    - I used an Inset-border effect on hover (and click) of each panel to give the Impression of the panel actually being clicked.
    I believe this adds a much better user experience and a nice, unique attention to detail. 

    - Additional testing was done on the playability of this game to ensure the panels could still be clicked on smaller screens.  

- ##### Functionality
    - The basic functionality of Simon is simple...
        1. Click the start button.
        2. Wait for the game to flash a sequence.
        3. Repeat that sequence back to the game.

        - If the sequence Is clicked correctly, the game counter will Increase (telling the user they guessed correctly) and the next
        sequence will begin.
        - If the sequence Is clicked Incorrectly, an alert will appear saying 'GAME OVER!' and the sequences will stop. 

### Pairs Game

- ##### Layout
    - On desktop screens, the game is split into 4 rows of 4 columns for a total of 16 cards. This looks great on the page and gives
    plenty of room for the user to click. Each card is colored and has a matching counterpart  somewhere else on the board. The objective
    is for the user to find all the matching pairs and win the game. If they're successful they will be prompted with an alert saying
    "CONGRATULATIONS | YOU WIN".

    - I used the same Inset box-shadow trick (as mentioned In the Simon game) to give more depth to the game and give reassurance to the
    user on the card they want to select. When the card is selected, the color fades in, and if the next card matches, both cards will
    remain on the board. Otherwise, they both return blank and the playable picks again. 

    - On the tablet and mobile views, I managed to keep the 4x4 grid layout by altering the card sizes and Implementing 'CSS Grid'. 

- ##### Functionality
    - The basic functionality of Pairs is simple...
        1. Click on two cards In hope of picking two of the same color.
        2. Match all 8 pairs.
        
        - If the two cards don't match, they will simply flip back over and the player can try again.
        - If they do match, the cards will remain face up and allow the player to keep going. 



   





        

<h3 align="center"><a href="https://github.com/joenapper/Memory-games/blob/master/README.md">Return to README.md</a></h3>

