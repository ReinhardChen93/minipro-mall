if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


var AFAppX = self.AFAppX.getAppContext
  ? self.AFAppX.getAppContext().AFAppX
  : self.AFAppX;
self.getCurrentPages = AFAppX.getCurrentPages;
self.getApp = AFAppX.getApp;
self.Page = AFAppX.Page;
self.App = AFAppX.App;
self.my = AFAppX.bridge || AFAppX.abridge;
self.abridge = self.my;
self.Component = AFAppX.WorkerComponent || function(){};
self.$global = AFAppX.$global;
self.requirePlugin = AFAppX.requirePlugin;
        

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../components/common/divider?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/index/swiper-image?hash=591ac642b6f57a184fac9330fa292ccf33c32471');
require('../../components/index/index-nav?hash=591ac642b6f57a184fac9330fa292ccf33c32471');
require('../../components/index/three-adv?hash=591ac642b6f57a184fac9330fa292ccf33c32471');
require('../../components/common/card?hash=591ac642b6f57a184fac9330fa292ccf33c32471');
require('../../components/common/price?hash=591ac642b6f57a184fac9330fa292ccf33c32471');
require('../../components/common/common-list?hash=7c1840704b79b23bd92e751aaaee26e92a58fa2e');
require('../../common/mixin/loading-plus?hash=591ac642b6f57a184fac9330fa292ccf33c32471');
require('../../components/uni-ui/uni-status-bar/uni-status-bar?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-ui/uni-icon/uni-icon?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-ui/uni-nav-bar/uni-nav-bar?hash=36e322e3daa73b9692defbbcf7727a2850f8a221');
require('../../components/uni-ui/uni-number-box/uni-number-box?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/common/radio-group?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/common/common-popup?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-ui/uni-badge/uni-badge?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-ui/uni-list-item/uni-list-item?hash=82cb0fde2de3138887b3632fb9ec49e02b90d72c');
require('../../components/common/loading?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/search/color-tag?hash=591ac642b6f57a184fac9330fa292ccf33c32471');
require('../../components/uni-ui/uni-drawer/uni-drawer?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/search-list/search-list?hash=7c1840704b79b23bd92e751aaaee26e92a58fa2e');
require('../../components/detail/base-info?hash=7c1840704b79b23bd92e751aaaee26e92a58fa2e');
require('../../components/detail/scroll-attrs?hash=591ac642b6f57a184fac9330fa292ccf33c32471');
require('../../components/detail/scroll-comments?hash=591ac642b6f57a184fac9330fa292ccf33c32471');
require('../../components/uni-ui/uParse/src/components/wxParseImg?hash=591ac642b6f57a184fac9330fa292ccf33c32471');
require('../../components/uni-ui/uParse/src/components/wxParseVideo?hash=591ac642b6f57a184fac9330fa292ccf33c32471');
require('../../components/uni-ui/uParse/src/components/wxParseAudio?hash=591ac642b6f57a184fac9330fa292ccf33c32471');
require('../../components/uni-ui/uParse/src/components/wxParseTemplate11?hash=9b3bcb5ddeb067eb2aafecac8c6b431118aad47b');
require('../../components/uni-ui/uParse/src/components/wxParseTemplate10?hash=33d468990e2374b7d1965ab1e0231b7860b0489d');
require('../../components/uni-ui/uParse/src/components/wxParseTemplate9?hash=2c5d4665c4ee0df8a5d6b56c8a5398542e51dc2c');
require('../../components/uni-ui/uParse/src/components/wxParseTemplate8?hash=10d30d6fb5f1c144023424652c31bbc723ce1653');
require('../../components/uni-ui/uParse/src/components/wxParseTemplate7?hash=4e1dbbc80b3f7c79bb1e64f3cf5224ecc496c64b');
require('../../components/uni-ui/uParse/src/components/wxParseTemplate6?hash=0b7442c9dd16e8a740baff9ae78365742a87d31c');
require('../../components/uni-ui/uParse/src/components/wxParseTemplate5?hash=d66812ab44cd2029e6380ba935daf738a497cb6a');
require('../../components/uni-ui/uParse/src/components/wxParseTemplate4?hash=cc565b80bdf5a75ce32d3217552ac6fd7614ab95');
require('../../components/uni-ui/uParse/src/components/wxParseTemplate3?hash=3a61a55b2d3fe6443d99d76c9a2fd6458f24501a');
require('../../components/uni-ui/uParse/src/components/wxParseTemplate2?hash=7815d23fb029c2e7875bee218fb8baabf9f79098');
require('../../components/uni-ui/uParse/src/components/wxParseTemplate1?hash=e7a4002562902ddaf1c0cbdebc3b7dd269335fd9');
require('../../components/uni-ui/uParse/src/components/wxParseTemplate0?hash=089d88c8de9d34f45174393f825aa68a16baec35');
require('../../components/uni-ui/uParse/src/wxParse?hash=7f47e7b5d4be8575d0a0462d4994e9c0f69dcb8e');
require('../../components/detail/bottom-btn?hash=591ac642b6f57a184fac9330fa292ccf33c32471');
require('../../components/uni-ui/uni-swipe-action/uni-swipe-action?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-ui/mpvue-citypicker/mpvueCityPicker?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/common/no-thing?hash=591ac642b6f57a184fac9330fa292ccf33c32471');
require('../../components/order/order-list?hash=ff04e23006f9522a1bcf1db571d571cd4e7d9e1e');
require('../../components/order-coupon/coupon?hash=591ac642b6f57a184fac9330fa292ccf33c32471');
require('../../components/order/order-list-item?hash=591ac642b6f57a184fac9330fa292ccf33c32471');
require('../../pages/index/index?hash=bc3144da08ace3eb2cb57c1737ebc2228dd89168');
require('../../pages/cart/cart?hash=05499517a12c1085f5e0e770ab689128c07bd03f');
require('../../pages/my/my?hash=6d3ab613d3752b3e9c5ac4277569f25a02548dfc');
require('../../pages/class/class?hash=26227bc56dca062e6d823d0902fe0cfb91c2d2fa');
require('../../pages/search/search?hash=e54da05bd3a98b2599ca1096ddd8c11250864bf5');
require('../../pages/search-list/search-list?hash=e6b832c2df8bdf6e4f569208b5899681bd2ba57c');
require('../../pages/detail/detail?hash=3360b22fb689477295e9de71dbd82c8b1e1c7e01');
require('../../pages/detail-comment/detail-comment?hash=7229ea2495d2ac6d906dfb3177462776d0beb8b6');
require('../../pages/user-set/user-set?hash=de76ef32d42c7c3e2b35eed09952945c2cdc9b1e');
require('../../pages/user-userinfo/user-userinfo?hash=ff40168c824fbdf3fddabc5f13a91ac844ed2e0c');
require('../../pages/user-path-list/user-path-list?hash=e127a8077f91d4a1b1d5334f7aa618aab6184701');
require('../../pages/user-path-edit/user-path-edit?hash=97b29d0e221457f3a67e374fac7ceb964556b21c');
require('../../pages/order/order?hash=5a1fc484dbd8710be257b3543f3038f01c6cecc0');
require('../../pages/order-confirm/order-confirm?hash=256bec5bfef33a01b0040a7103752ccf663297c3');
require('../../pages/order-invoice/order-invoice?hash=06fbc0128435987b35c04ccd2308708cca66b82d');
require('../../pages/login/login?hash=a68ea20465949cc02e543627c951e5c6c02869f2');
require('../../pages/msg-list/msg-list?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/msg-detail/msg-detail?hash=b7941b381c54987ede6e5cfa0ac02a05d60d41d6');
require('../../pages/pay-methods/pay-methods?hash=531d354fd3c8ecedd8d8bc238c81a83f831d7a95');
require('../../pages/pay-result/pay-result?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/order-coupon/order-coupon?hash=3afcbdf047aeb766fa4e1a479eb7cd8d8474ece5');
require('../../pages/order-detail/order-detail?hash=5f5ff038e174c525d523c7c366d47a7c334455a5');
require('../../pages/logistics-detail/logistics-detail?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/after-sale/after-sale?hash=06fbc0128435987b35c04ccd2308708cca66b82d');
require('../../pages/about/about?hash=41cb0078748ec80ee2a0026b6e1fba907ccd60d0');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}