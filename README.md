# Drinks 🍹

A Next.js & Contentful project.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

I will host this thing on Vercel and update this file with links with url to demo site.


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

### Sprint 5 - Create User page

 Create a method for a user to add basic information, and create a list of their spirits wich we can use to sort Drinks with later.

### Sprint 6 - Sort drinks by user ingredients

Give user capabilities to show drinks that match their inventory of spirits.
Here i think i need to use 'getServerSideProps' since i don't see how this is gonna play well with SSG.
Miught look into if this is a use case for Axios aswell.

### Sprint 7 - Mix cocktails

I think i earned myself atleast a whiskey sour by now? 🥃
