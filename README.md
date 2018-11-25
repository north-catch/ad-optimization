# automation

## TODO

- deploy a rendertron instance (to google cloud platform?)
- enable external requests from google functions (using auth tokens from shopify can only be done serverside)

## Firebase dependencies

- create a project
- enable google authentication
- create a firestore database
- Blaze or Flame pricing plans to support external network requests from cloud functions (to Shopify, etc)

## Build and deploy

To build

```
npm run build
```

To serve the built output

```
npm run serve
```

To deploy

```
firebase deploy
```

## Development

To serve locally

```
npm start
```

To run tests (did not pass when creating template and may not be maintained)

```
npm test
```
