# ShrinkCoinService

The `ShrinkCoinService` class provides a convenient way to interact with the ShrinkCoin API to perform various operations related to URL shrinking and tracking.

## Constructor

### `new ShrinkCoinService(apiKey)`

- `apiKey` (string): The API key associated with your ShrinkCoin account.

Creates a new instance of the `ShrinkCoinService` class with the specified API key.

## Methods

### `async shrinkURL(url, isInstant = true)`

- `url` (string): The URL to be shortened.
- `isInstant` (boolean, optional): Specifies whether the URL should be instantly available or not. Default is `true`.

This method sends a request to the ShrinkCoin API to shrink the given URL. It returns the response from the API as a Promise.

### `async deleteURL(id)`

- `id` (string): The ID of the shortened URL to be deleted.

This method sends a request to the ShrinkCoin API to delete the specified shortened URL. It returns the response from the API as a Promise.

### `async checkURLClicks(id)`

- `id` (string): The ID of the shortened URL for which to retrieve click information.

This method sends a request to the ShrinkCoin API to get the click information for the specified shortened URL. It returns the response from the API as a Promise.

### `async checkURLCampaignClicks(id, campaign)`

- `id` (string): The ID of the shortened URL for which to retrieve click information.
- `campaign` (string): The name of the campaign to filter the click information.

This method sends a request to the ShrinkCoin API to get the click information for the specified shortened URL, filtered by the specified campaign. It returns the response from the API as a Promise.

## Example Usage

```javascript
const ShrinkCoinService = require('./shrinkCoinService');

const apiKey = 'YOUR_API_KEY';
const shrinkCoinService = new ShrinkCoinService(apiKey);

// Shrink a URL
const url = 'https://example.com';
shrinkCoinService.shrinkURL(url)
  .then(result => console.log(result))
  .catch(error => console.error(error));

// Delete a shrunk URL
const id = 'YOUR_URL_ID';
shrinkCoinService.deleteURL(id)
  .then(result => console.log(result))
  .catch(error => console.error(error));

// Check clicks for a URL
const id = 'YOUR_URL_ID';
shrinkCoinService.checkURLClicks(id)
  .then(result => console.log(result))
  .catch(error => console.error(error));

// Check clicks for a URL campaign
const id = 'YOUR_URL_ID';
const campaign = 'YOUR_CAMPAIGN';
shrinkCoinService.checkURLCampaignClicks(id, campaign)
  .then(result => console.log(result))
  .catch(error => console.error(error));
```
Note: Replace "YOUR_API_KEY", "YOUR_URL_ID", and "YOUR_CAMPAIGN" with your actual API key, URL ID, and campaign name respectively.

That's it! You can use the ShrinkCoinService class in your JavaScript/Node.js code to integrate the ShrinkCoin API functionalities into your application.
