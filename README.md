# Yahoo Stocks Chrome Extension

This Chrome extension allows users to extract stock price data from Yahoo Finance pages and export it to a CSV file. The CSV file name can be customized based on the text from the second `<h1>` element on the page.

## Features

- Scrapes stock price data from Yahoo Finance tables.
- Filters the data to include only rows with a closing price.
- Exports the filtered data to a CSV file.
- Customizable CSV file name based on the second `<h1>` element on the page.

## Installation

1. Clone this repository to your local machine:
   ```
   git clone <repository-url>
   ```

2. Open Chrome and navigate to `chrome://extensions/`.

3. Enable "Developer mode" by toggling the switch in the top right corner.

4. Click on "Load unpacked" and select the `src` directory of the cloned repository.

5. The extension should now be installed and visible in your extensions list.

## Usage

1. Navigate to any Yahoo Finance page that contains a stock price table.

2. Click on the extension icon in the Chrome toolbar.

3. The script will run, and a CSV file will be downloaded with the stock price data. The file name will be based on the text from the second `<h1>` element on the page.

## License

This project is licensed under the MIT License. See the LICENSE file for details.