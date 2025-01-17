import Vue from "vue";
import VueI18n from "vue-i18n";

//element 国际化处理

Vue.use(VueI18n);

//将刚刚locales创建的文件分别引入并输出成i18n需要的格式
function loadLocaleMessages() {
    //检测locales文件夹中有多少个语系
    const locales = require.context(
        "./locales",
        true,
        /.json$/
    );
    const messages = {};
    locales.keys().forEach(file => {
        const keyArr = file.split('/');
        keyArr.shift();
        messages[keyArr.join('.').replace(/\.json$/g, '')] = locales(file);
    });
    return {
        zh: { ...messages.zh, },
        en: { ...messages.en, },
    };
}
const i18n = new VueI18n({
    locale: "en" ,
    messages: loadLocaleMessages()
});

export default i18n;
