# mycrypt

## http://mycrypt.herokuapp.com/

With mycrypt you have an easy way to keep track about your cryptocurrencies and your overall portfolio value.

Just create an account and use your personal dashboard to manage your coin stocks.

If you have any suggestions or want to report a bug, please use the [issue](https://github.com/florianGierlichs/mycrypt/issues) section.

<img src="https://user-images.githubusercontent.com/58342773/81569565-be4caa80-939f-11ea-9b8d-1edab25658d7.png" width="200"  />

## Develop

Feel free to clone the project and play around with it.

Install client and server dependencies:

```
npm install
cd client
npm install
```

You will need a .env file with a database_URL.
The file should look like this:

DB_CONNECTION=<DB_URL>

DB_NAME=<DB_NAME>

I would suggest using [my-json-server](https://my-json-server.typicode.com/) for testing.

To run the project use:

```
npm run client
npm run server
```
