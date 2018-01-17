# Breadcrumbs_navigation
_[Breadcrumbs?](https://en.wikipedia.org/wiki/Breadcrumb_(navigation))_

> A chrome extension aiming to replicate the functionality of the now discontinued [Location Bar Enhancer](https://addons.mozilla.org/en-US/firefox/addon/ui-enhancer/) addon for firefox. <br>
> ![](https://addons.cdn.mozilla.net/user-media/previews/full/66/66972.png?modified=1333927194)

Since chrome doesn't allow extensions to modify the address bar, the breadcrumb navigation will be inlined at the top of each page.

Design WIP: https://jsfiddle.net/b0rn0rsv/7/

## MVP
- [ ] Display a segmented view of the current url.
  * Excluding query parameters.
  * Sticky at the top of the screen, right below the favorites bar.
  * Styled to look like its part of vanille chrome.
- [ ] Clicking on one of the breadcrumbs should reload the page to that crumbs position.
  * Ex: While on the page `https://jsfiddle.net/b0rn0rsv/7/` clicking on the crumb representing `jsfiddle.net` should load the page `https://jsfiddle.net`, and pressing the crumb representing `b0rn0rsv` should load the page `https://jsfiddle.net/b0rn0rsv`.
- [ ] Clicking the last breadcrumb, should reload the current page.

## Post MVP
- [ ] Create breadcrumbs for query parameters.
 * Each parameter should get its own breadcrumb.
- [ ] Hijack context menu.
 * Change the value of the selected breadcrumb, and reload the page with that new value.
- [ ] Toggle visability of breadcrumbs bar by clicking the extension icon.
- [ ] Keybinds.
 * Hide/show
 * Step through breadcrumbs
