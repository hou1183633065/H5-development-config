import * as types from "./mutation-type.js";

export default {
  [types.SET_TOKEN](state, token) {
    state.token = token;
  },
  [types.SET_SHOPINFO](state, shopInfo) {
    state.shopInfo = shopInfo;
  },
  [types.SET_INVOICETYPE](state, invoiceType) {
    state.invoiceType = invoiceType;
  },
  [types.SET_PERSONTYPE](state, personType) {
    state.personType = personType;
  },
  [types.SET_DELIVERY](state, delivery) {
    state.delivery = delivery;
  },
  [types.SET_VUEMODEL](state, vueModel) {
    state.vueModel = vueModel;
  },
  [types.SET_INITROUTERPATH](state, initRouterPath) {
    state.initRouterPath = initRouterPath;
  },
  [types.SET_PENDDINGPAY](state, penddingPay) {
    state.penddingPay = penddingPay;
  },
  [types.SET_SHOWDELETEBUTTON](state, showDeleteButton) {
    state.showDeleteButton = showDeleteButton;
  },
  [types.SET_PLATFORM](state, platform) {
    state.platform = platform;
  },
  [types.SET_SHOPGOODSCARTIDS](state, shopGoodsCartIds) {
    state.shopGoodsCartIds = shopGoodsCartIds;
  },
  [types.SET_SERVICEPACKAGE](state, servicePackage) {
    state.servicePackage = servicePackage;
  },
  [types.SET_SERVICEPACKAGEID](state, servicePackageId) {
    state.servicePackageId = servicePackageId;
  },
  [types.SET_SERVICEPACKAGEDATA](state, servicePackageData) {
    state.servicePackageData = servicePackageData;
  },
  [types.SET_STOREID](state, storeId) {
    state.storeId = storeId;
  },
  [types.SET_ORDERINFO](state, orderInfo) {
    state.orderInfo = orderInfo;
  },
  [types.SET_INVOICEID](state, invoiceId) {
    state.invoiceId = invoiceId;
  },
  [types.SET_FREIGHTNUMBER](state, freightNumber) {
    state.freightNumber = freightNumber;
  },
  [types.SET_ORDERIDFORINVOICE](state, orderIdForInvoice) {
    state.orderIdForInvoice = orderIdForInvoice;
  },
  [types.SET_PAYMENTSUCCESSORDERID](state, paymentSuccessOrderId) {
    state.paymentSuccessOrderId = paymentSuccessOrderId;
  },
  [types.SET_ADDGOODSCART](state, addGoodsCart) {
    state.addGoodsCart = addGoodsCart;
  },
  [types.SET_ISOPENINVOICE](state, isOpenInvoice) {
    state.isOpenInvoice = isOpenInvoice;
  },
  [types.SET_PAYMENTRESULTPAGE](state, paymentResultPage) {
    state.paymentResultPage = paymentResultPage;
  },
  [types.SET_RECEIVEADDRESS](state, receiveAddress) {
    state.receiveAddress = receiveAddress;
  },
  [types.SET_TOTALPRICE](state, totalPrice) {
    state.totalPrice = totalPrice;
  },
  [types.SET_TOTALVALUE](state, totalValue) {
    state.totalValue = totalValue;
  },
  [types.SET_PAYMENTMETHOD](state, paymentMethod) {
    state.paymentMethod = paymentMethod;
  },
  [types.SET_ORDERCONFIRMINITSTATUS](state, orderConfirmInitStatus) {
    state.orderConfirmInitStatus = orderConfirmInitStatus;
  },
  [types.SET_HASCONTACT](state, hasContact) {
    state.hasContact = hasContact;
  },
  [types.SET_PAYMENTRESULTORDERID](state, paymentResultOrderId) {
    state.paymentResultOrderId = paymentResultOrderId;
  },
  [types.SET_ISCANSELECTPAY](state, isCanSelectPay) {
    state.isCanSelectPay = isCanSelectPay;
  }
};
