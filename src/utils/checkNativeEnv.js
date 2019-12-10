import Vue from "vue";

let agent = navigator.userAgent;
let isAndroid = agent.indexOf("Android") > -1 || agent.indexOf("Adr") > -1;
let isIOS = !!agent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
Vue.prototype.nativePlatform = () => {
  let platform = isIOS ? "IOS" : "Android";
  return platform;
};
Vue.prototype.getNativeEnv = () => {
  return isAndroid || isIOS;
};

Vue.prototype.runNativeFun = () => {
  if (isAndroid) {
    // android
    function connectWebViewJavascriptBridge(callback) {
      if (window.WebViewJavascriptBridge) {
        callback(WebViewJavascriptBridge);
      } else {
        document.addEventListener(
          "WebViewJavascriptBridgeReady",
          function() {
            callback(WebViewJavascriptBridge);
          },
          false
        );
      }
    }
    connectWebViewJavascriptBridge(function(bridge) {
      bridge.init(function(message, responseCallback) {
        var data = {
          JavascriptResponds: "测试中文!"
        };
        responseCallback(data);
      });
      bridge.registerHandler("jsFunction", (data, responseCallback) => {
        // alert(JSON.stringify(data));
        data = JSON.parse(data);
        let method = data.method;
        Vue["prototype"][method](data, responseCallback);
        responseCallback({ javascriptsays: "android back" });
      });
    });
  } else if (isIOS) {
    function setupWebViewJavascriptBridge(callback) {
      if (window.WebViewJavascriptBridge) {
        return callback(WebViewJavascriptBridge);
      }
      if (window.WVJBCallbacks) {
        return window.WVJBCallbacks.push(callback);
      }
      window.WVJBCallbacks = [callback];
      var WVJBIframe = document.createElement("iframe");
      WVJBIframe.style.display = "none";
      WVJBIframe.src = "https://__bridge_loaded__";
      document.documentElement.appendChild(WVJBIframe);
      setTimeout(function() {
        document.documentElement.removeChild(WVJBIframe);
      }, 0);
    }
    setupWebViewJavascriptBridge(function(bridge) {
      bridge.registerHandler("jsFunction", (data, responseCallback) => {
        data = typeof data === "string" ? JSON.parse(data) : data;
        let method = data.method;
        Vue["prototype"][method](data, responseCallback);
      });
    });
  }
};
