# Caching

## Initial Response (index.html)

To ensure end users always see the most recent content, browser caching 
should be disabled with response headers on the server hosting this 
single page application.

Recommended header:
`Cache-Control: max-age=0`

In a CDN scenario, we recommend the edge server sends that header to the browser.

See:
* http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html#expiration-individual-objects
* https://docs.fastly.com/guides/tutorials/cache-control-tutorial

**Note:** setting
`<meta http-equiv="expires" content="0">` on the index.html page is 
insufficient. Directives like this in a html page are often ignored by 
proxies.

## Other files

Ideally all other files would be cached permanently but have content 
hashes appended to their file names to cache-bust content changes.
