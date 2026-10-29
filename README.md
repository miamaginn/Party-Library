# The Party Library

A digital bookshelf of themed dinner parties. It's a plain static site with no build step.

## Editing content

All the text, links and recipes are in **`data/parties.js`**.

- **Costume images:** put them in `images/hollywood-halloween/costumes/`, then add them to `costume.images`, e.g.
  `{ src: "images/hollywood-halloween/costumes/sonny-cher.jpg", caption: "Sonny & Cher" }`
- **Photo from the evening:** add the file to `images/hollywood-halloween/` and set `photo.src`.
- **Decor:** edit `decor.items`. `image` and `link` are optional.
- **Recipes:** edit each dish's `recipe`. If a menu click area is a little off, adjust its `hotspot` percentages.
- **New party:** copy the whole Hollywood Halloween block, give it a new `slug`, and it shows up as a new book on the shelf.

## Shareable links

Every view has its own link, for example:

- `/#/p/hollywood-halloween` opens the book
- `/#/p/hollywood-halloween/menu` opens the menu
- `/#/p/hollywood-halloween/menu/pumpkin-gnocchi` opens a recipe card

## Run locally

```
python -m http.server 5173 --bind 127.0.0.1
```

Then open http://localhost:5173.

## Deploy

Push to a GitHub repo, then in Vercel choose **Add New → Project**, import the repo, set Framework Preset to **Other**, and deploy. You don't need a build command.
