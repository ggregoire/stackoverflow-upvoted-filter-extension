# Stack Overflow Upvoted Filter

Small Google Chrome extension that adds an `upvoted` filter to a Stack Overflow question if you upvoted at least one answer for that question. Selecting the filter reorders the answers to show the ones you upvoted first.

You can read the motivations behind this extension on [Stack Overflow Meta](https://meta.stackoverflow.com/questions/408942).

Screenshot:

<img width="1223" alt="Screen Shot 2021-10-12 at 6 00 10 PM" src="https://user-images.githubusercontent.com/591804/137040158-87a20441-ccd4-4d4c-ae4a-1eef2b7d623e.png">

## Installation

1. Clone the project

2. Install the dependencies: `npm install`

3. Build the extension: `npm run build`

4. Go to [chrome://extensions](chrome://extensions)

5. Click "Load unpacked" and select the `dist` directory

## Known limitations

- The extension doesn't handle multiple pages of answers since it analyzes only the current page. The workaround is to visit every page.
