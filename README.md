# scanr-end2end

> End to end tests for [dataesr/scanr](https://github.com/dataesr/scanr-v2) project

## Dependencies

[Cypress](https://www.npmjs.com/package/cypress)

## Usage

### Launch local test

:warning: tests works only with firefox 

```bash
$ yarn run cy:firefox
```

## List of Tests

By default url points to production is defined in `cypress.json` as `baseUrl`

### Homepage load 

Main title is checked in en_en browser 

### Modal contributions

`idref` of the page tested is setted in cypress.json

## Clean contributions done with test@endtoend.com

> .env file must contain variables HEADERS_AUTH_BASIC and SCANR_API_URL_CONTRIBUTE

```bash
$ python3 -m venv .
$ source /bin/activate
$ pip install
$ python clean-contrib-publi.python
```
## Github Actions

What does workflow main do?

- e2e tests on firefox headless browser
- clean db