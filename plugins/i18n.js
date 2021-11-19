import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

export default ({app,store}) => {
	app.i18n = new VueI18n({
		locale:store.state.locale,
		//fallbackLocale 回退本地化的语言环境 如果没有任何语言环境与浏览器的语言环境匹配，则使用此作为后备。
		fallbackLocale:'en-US',
		messages:{
			"en-US":require('~/locales/en.json'),
			"zh-CN":require('~/locales/zh.json')
		}
	});
	app.i18n.path = (link) => {
		if (app.i18n.locale === app.i18n.fallbackLocale) {
			return `/${link}`;
		}
		
		return `/${app.i18n.locale}/${link}`;
	}
}