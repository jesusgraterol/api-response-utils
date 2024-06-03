# API Response Utils

The `api-response-utils` package streamlines RESTful API data exchange by introducing a standardized data structure for HTTP response bodies. This structure simplifies client-side data handling, promoting consistency and readability in your API interactions.





</br>

## Getting Started

Install the package:
```bash
$ npm install -S api-response-utils
```





</br>

## Usage

Building a successful response:

```typescript
import { buildResponse } from 'api-response-utils';

buildResponse();
// {
//   success: true,
//   data: undefined,
//   error: undefined
// }

// building a successful response w/ data:
buildResponse({ id: 1, nickname: 'Jane Doe' });
// {
//   success: true,
//   data: { id: 1, nickname: 'Jane Doe' },
//   error: undefined
// }
```

<br/>

Building an unsuccessful response:

```typescript
import { buildResponse } from 'api-response-utils';

buildResponse(undefined, new Error('The user was not found in the db.'));
// {
//   success: false,
//   data: undefined,
//   error: 'The user was not found in the db.'
// }
```

<br/>

Checking if a value is a response object:

```typescript
import { isResponse } from 'api-response-utils';

isResponse({ 
  success: true,
  data: { id: 1, nickname: 'Jane Doe' },
  error: undefined,
});
// true

isResponse({ foo: 'bar' });
// false
```





<br/>

## Built With

- TypeScript




<br/>

## Running the Tests

```bash
$ npm run test:unit
```





<br/>

## License

[MIT](https://choosealicense.com/licenses/mit/)





<br/>

## Acknowledgments

- ...





<br/>

## @TODOS

- [ ] ...





<br/>

## Deployment

Install dependencies:
```bash
$ npm install
```


Build the library:
```bash
$ npm start
```


Publish to `npm`:
```bash
$ npm publish
```
