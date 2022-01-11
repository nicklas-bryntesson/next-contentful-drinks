# Drinks 🍹

A Next.js & Contentful project.

Link to visit demo site at Vercel [Drinks App](https://next-contentful-drinks.vercel.app/).


## Roadmap

These are the steps ahead in this project

### Sprint 1 - Show drink recepies

MVP, show drinks recipes, archive page and single views.
Build a content model in Contentful and fetch drinks to our App.

### Sprint 2 - Sort drinks by type & ingredients.

Create input to sort our drinks by type (Long drinks cocktails etc..)
How do we do this with static site generation, do we pre build every possible combination? 

### Sprint 3 - Login

Create user login and authentication with Firebase.

### Sprint 4 - Give user capability to like Drinks

How do i give the user the capability to like a drink and sort drinks by likes and save this to firebase.
Look into the best practices for this in a SSG enviroment. 
(Right now my thinking goes towards rendering a skeleton component and fetching the data with axios and then using js to update the UI... 🤔)

### Sprint 5 - Create User page

 Create a method for a user to add basic information, and create a list of their spirits wich we can use to sort Drinks with later.

### Sprint 6 - Sort drinks by user ingredients

Give user capabilities to show drinks that match their inventory of spirits.
Here i think i need to use `getServerSideProps` since i don't see how this is gonna play well with SSG.
Might look into if this is a use case for Axios aswell.

### Sprint 7 - Mix cocktails

I think i earned myself atleast a whiskey sour by now? 🥃
