const axios = require('axios');

class ShrinkCoinService {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  async shrinkURL(url, isInstant = true) {
    const apiUrl = 'https://shrinkco.in/api/shrink';
    const parameters = {
      API_KEY: this.apiKey,
      URL: url,
      IS_INSTANT: isInstant.toString(),
    };

    return this.callAPI(apiUrl, parameters);
  }

  async deleteURL(id) {
    const apiUrl = 'https://shrinkco.in/api/delete';
    const parameters = {
      API_KEY: this.apiKey,
      ID: id,
    };

    return this.callAPI(apiUrl, parameters);
  }

  async checkURLClicks(id) {
    const apiUrl = 'https://shrinkco.in/api/clicks';
    const parameters = {
      API_KEY: this.apiKey,
      ID: id,
    };

    return this.callAPI(apiUrl, parameters);
  }

  async checkURLCampaignClicks(id, campaign) {
    const apiUrl = 'https://shrinkco.in/api/campaign';
    const parameters = {
      API_KEY: this.apiKey,
      ID: id,
      CAMPAIGN: campaign,
    };

    return this.callAPI(apiUrl, parameters);
  }

