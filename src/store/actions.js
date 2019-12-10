import * as types from "./mutation-type.js";

export default {
  nameAsynToken({ commit }, { token }) {
    commit(types.SET_TOKEN, token);
  },
  nameAsyn({ commit }, { shopInfo }) {
    commit(types.SET_SHOPINFO, shopInfo);
  },
  nameAsynInvoice({ commit }, { invoiceType }) {
    commit(types.SET_INVOICETYPE, invoiceType);
  },
  nameAsynPerson({ commit }, { personType }) {
    commit(types.SET_PERSONTYPE, personType);
  },
  nameAsynDelivery({ commit }, { delivery }) {
    commit(types.SET_DELIVERY, delivery);
  },
  nameAsynVueModel({ commit }, { vueModel }) {
    commit(types.SET_VUEMODEL, vueModel);
  },
  nameAsynInitRouterPath({ commit }, { initRouterPath }) {
    commit(types.SET_INITROUTERPATH, initRouterPath);
  },
  penddingPayFn({ commit }, { penddingPay }) {
    commit(types.SET_PENDDINGPAY, penddingPay);
  },
  showDeleteButtonFn({ commit }, { showDeleteButton }) {
    commit(types.SET_SHOWDELETEBUTTON, showDeleteButton);
  },
  platformFn({ commit }, { platform }) {
    commit(types.SET_PLATFORM, platform);
  },
  shopGoodsCartIdsFn({ commit }, { shopGoodsCartIds }) {
    commit(types.SET_SHOPGOODSCARTIDS, shopGoodsCartIds);
  },
  servicePackageFn({ commit }, { servicePackage }) {
    commit(types.SET_SERVICEPACKAGE, servicePackage);
  },
  servicePackageIdFn({ commit }, { servicePackageId }) {
    commit(types.SET_SERVICEPACKAGEID, servicePackageId);
  },
  servicePackageDataFn({ commit }, { servicePackageData }) {
    commit(types.SET_SERVICEPACKAGEDATA, servicePackageData);
  },
  storeIdFn({ commit }, { storeId }) {
    commit(types.SET_STOREID, storeId);
  },
  orderInfoFn({ commit }, { orderInfo }) {
    commit(types.SET_ORDERINFO, orderInfo);
  },
  invoiceIdFn({ commit }, { invoiceId }) {
    commit(types.SET_INVOICEID, invoiceId);
  },
  freightNumberFn({ commit }, { freightNumber }) {
    commit(types.SET_FREIGHTNUMBER, freightNumber);
  },
  orderIdForInvoiceFn({ commit }, { orderIdForInvoice }) {
    commit(types.SET_ORDERIDFORINVOICE, orderIdForInvoice);
  },
  paymentSuccessOrderIdFn({ commit }, { paymentSuccessOrderId }) {
    commit(types.SET_PAYMENTSUCCESSORDERID, paymentSuccessOrderId);
  },
  addGoodsCartFn({ commit }, { addGoodsCart }) {
    commit(types.SET_ADDGOODSCART, addGoodsCart);
  },
  isOpenInvoiceFn({ commit }, { isOpenInvoice }) {
    commit(types.SET_ISOPENINVOICE, isOpenInvoice);
  },
  paymentResultPageFn({ commit }, { paymentResultPage }) {
    commit(types.SET_PAYMENTRESULTPAGE, paymentResultPage);
  },
  receiveAddressFn({ commit }, { receiveAddress }) {
    commit(types.SET_RECEIVEADDRESS, receiveAddress);
  },
  totalPriceFn({ commit }, { totalPrice }) {
    commit(types.SET_TOTALPRICE, totalPrice);
  },
  totalValueFn({ commit }, { totalValue }) {
    commit(types.SET_TOTALVALUE, totalValue);
  },
  paymentMethodFn({ commit }, { paymentMethod }) {
    commit(types.SET_PAYMENTMETHOD, paymentMethod);
  },
  orderConfirmInitStatusFn({ commit }, { orderConfirmInitStatus }) {
    commit(types.SET_ORDERCONFIRMINITSTATUS, orderConfirmInitStatus);
  },
  hasContactFn({ commit }, { hasContact }) {
    commit(types.SET_HASCONTACT, hasContact);
  },
  paymentResultOrderIdFn({ commit }, { paymentResultOrderId }) {
    commit(types.SET_PAYMENTRESULTORDERID, paymentResultOrderId);
  },
  isCanSelectPayFn({ commit }, { isCanSelectPay }) {
    commit(types.SET_ISCANSELECTPAY, isCanSelectPay);
  }
};
