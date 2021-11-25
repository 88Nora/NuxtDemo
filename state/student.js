import {reactive, toRefs, computed} from '@nuxtjs/composition-api'
const userMsg = reactive({
	username:"张三",
	age:12
})

export const studentStore = () => {

    const userInfo = computed(() => {
        return "姓名：" + userMsg.username + "\n\n年龄：" + userMsg.age;
    })

    const onSave = () =>{
        alert("Saved successfully")
    }
    return {
       
        ...toRefs(userMsg),userInfo,onSave
    }
}