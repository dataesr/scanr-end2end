# scanr-end2end

> End to end tests for [dataesr/scanr](https://github.com/dataesr/scanr-v2) project

## Dependencies

[Cypress](https://www.npmjs.com/package/cypress)

## Usage

### Launch local test

:warning: tests need `chromeWebSecurity` option to work> that is defined in cypress.json 

```bash
$ yarn run cy:run
```

## List of Tests

By default url points to production. This is defined in `cypress.json` as `baseUrl`

### Homepage load 

Main title is checked in en_en browser 

### Modal contributions

`idref` of the page tested is setted in `cypress.json`

## Clean contributions done with test@endtoend.com

:warning: To launch the script locally .env file must contain variables HEADERS_AUTH_BASIC and SCANR_API_URL_CONTRIBUTE

```bash
$ touch .env
$ python3 -m venv .
$ source /bin/activate
$ pip install
$ python clean-contrib-publi.python
```
## Github Actions

What does workflow main do?

- e2e tests on firefox headless browser
- clean db