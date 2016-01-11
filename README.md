#node-ssl-proxy

osx启动方法
"/opt/homebrew-cask/Caskroom/google-chrome/latest/Google Chrome.app/Contents/MacOS/Ggle Chrome" --use-spdy=npn

pac文件

```js
function FindProxyForURL(url, host) {
  // - no fallback mechanism
  // - if proxy supports SPDY then SPDY tunnel will be negotiated
  return "HTTPS www.21paradox.com:443";
}

```