import Vue from "vue";
import PubSub from "pubsub-js";

// 定义原生传递参数
Vue.prototype.checkStoreName = function(data) {
  let storeNameList = ["shopGoodsCartIdsFn"];
  // 0 未支付订单
  function penddingOrder() {
    this.storeNameStatus =
      storeNameList.indexOf(data.setName) > -1 ? true : false;
  }
  return new penddingOrder();
};
//接收原生消息
Vue.prototype.acceptNativeData = function(data, responseCallback) {
  Vue["prototype"][data]();
  responseCallback({
    javascriptsays: "ios back"
  });
};
let vueFactoryModel = null;
//页面取消回退事件
Vue.prototype.cancelBack = function(data) {
  if (data.confirm === "0") {
    vueFactoryModel.$store.dispatch("penddingPayFn", {
      penddingPay: false
    });
    // vueFactoryModel.$router.go(-1);
    Vue.prototype.callNative("appPushOrderList", {});
  }
};
//封装native方法
Vue.prototype.callNative = function(method, data, callback) {
  Vue.prototype
    .$nativeRequest({
      method: method,
      data: data
    })
    .then(
      res => {
        if (callback) {
          callback(JSON.parse(res));
        }
      },
      () => {
        alert("退出失败");
      }
    );
};
//h5调用native方法

//页面回退弹窗
Vue.prototype.appCloseShowWindow = function(callback) {
  Vue.prototype.callNative(
    "appShowView",
    {
      dlgType: 0,
      title: "提示",
      subTitle: "您确定放弃此次支付吗？",
      cancelText: "返回",
      confirmText: "继续支付",
      list: []
    },
    callback
  );
};
//关闭webview
Vue.prototype.appCloseWebView = function() {
  Vue.prototype.callNative("appCloseWebview", {});
};
//开启加载框
Vue.prototype.appShowLoading = function() {
  Vue.prototype.callNative("appShowLoading", {});
};
//关闭加载框
Vue.prototype.appHideLoading = function() {
  Vue.prototype.callNative("appHideLoading", {});
};

//native调用h5方法

//页面回退
Vue.prototype.jsBack = function(data, responseCallback) {
  let currentPath = vueFactoryModel
    ? vueFactoryModel.$router.history.current.path
    : "";
  let initPath = vueFactoryModel
    ? vueFactoryModel.$store.state.initRouterPath
    : "";
  let penddingPay = vueFactoryModel
    ? vueFactoryModel.$store.state.penddingPay
    : "";
  if (vueFactoryModel != null) {
    //支付结果页退出逻辑
    if (currentPath === "/paymentResult") {
      if (initPath === "/shoppingCart") {
        vueFactoryModel.$router.push("/shoppingCart");
      } else {
        Vue.prototype.appCloseWebView();
      }
      return;
    }
    if (currentPath !== initPath) {
      if (penddingPay) {
        Vue.prototype.appCloseShowWindow(Vue.prototype.cancelBack);
      } else {
        vueFactoryModel.$router.go(-1);
      }
    } else {
      //回到原生
      Vue.prototype.appCloseWebView();
    }
  } else {
    //回到原生
    alert("vue实例化失败");
    Vue.prototype.appCloseWebView();
  }
};
//页面初始化数据
Vue.prototype.setNativeData = function(vueFactory, data) {
  let routerSplitArray = data["routerName"].split("/");
  let myRouterName = routerSplitArray[routerSplitArray.length - 1];
  vueFactoryModel = vueFactory;
  vueFactory.$store.dispatch("platformFn", {
    platform: Vue.prototype.nativePlatform()
  });
  localStorage.setItem("token", data["token"]);
  vueFactory.$store.dispatch("nameAsynToken", {
    token: data["token"]
  });
  vueFactory.$store.dispatch("nameAsynInitRouterPath", {
    initRouterPath: "/" + myRouterName
  });
  Vue.prototype.saveStoreByRouter(vueFactory, data, myRouterName);

  // Vue.prototype.checkStoreName(data).storeNameStatus ? vueFactory.$store.dispatch(data.setName, {
  //   [data.name]: data['value']
  // }) : console.log('不需插入');
  // Vue.prototype.appHideLoading();
};

//购物车编辑
Vue.prototype.shoppingCartEdit = function() {
  vueFactoryModel.$store.dispatch("showDeleteButtonFn", {
    showDeleteButton: true
  });
};

//购物车编辑完成
Vue.prototype.shoppingCartEditFinish = function() {
  vueFactoryModel.$store.dispatch("showDeleteButtonFn", {
    showDeleteButton: false
  });
};

//根据app跳转页面存储数据
Vue.prototype.saveStoreByRouter = function(vueFactory, data, myRouterName) {
  let routerList = ["orderConfirm", "cashierDesk", "invoicePackage"];
  console.log(myRouterName);
  let isCurrentRouter = routerList.indexOf(myRouterName);
  switch (isCurrentRouter) {
    case 0:
      setOrderConfirmStore();
      break;
    case 1:
      setCashierDeskStore();
      break;
    case 2:
      setInvoicePackageStore();
      break;
    default:
      break;
  }
  //app跳转订单确认页
  function setOrderConfirmStore() {
    console.log("插入订单确认页数据");
    vueFactory.$store.dispatch("shopGoodsCartIdsFn", {
      shopGoodsCartIds: data["value"]
    });
  }
  //app跳转收银台
  function setCashierDeskStore() {
    console.log("插入收银台数据");
    vueFactory.$store.dispatch("orderInfoFn", {
      orderInfo: {
        orderNo: data["orderInforForCashierDesk"]["orderNo"],
        orderTotalPrice: data["orderInforForCashierDesk"]["orderTotalPrice"]
      }
    });
    vueFactory.$store.dispatch("paymentMethodFn", {
      paymentMethod: 1
    });
  }
  //app跳转发票
  function setInvoicePackageStore() {
    console.log("插入发票数据");
    vueFactory.$store.dispatch("orderIdForInvoiceFn", {
      orderIdForInvoice: data["orderIdForInvoice"]
    });
  }
};
