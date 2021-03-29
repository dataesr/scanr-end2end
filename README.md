# scanr-end2end

> End to end tests for [dataesr/scanr](https://github.com/dataesr/scanr-v2) project

## Dependencies

[Cypress](https://www.npmjs.com/package/cypress)

## Usage

```bash
$ yarn run cy:open
```

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