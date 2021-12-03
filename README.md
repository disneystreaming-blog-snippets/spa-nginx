

# NGINX Single Page Application (SPA)

Serving static sites, locally and in production, can be done with tremendous flexibility merely using `docker-compose` and `nginx`. This is a template repository that lays the ground work for such a project.


## Getting Started with yarn

1. Clone this repository. 
2. Run `yarn install` 
3. `yarn start` 

Then, visit `http://localhost:7000` in the browser to see
the running application, which features example code using advanced [React without JSX](https://reactjs.org/docs/react-without-jsx.html).

```bash
yarn install
yarn start
```

## Starting without yarn

```bash
docker-compose -f docker-compose.yaml up
```

