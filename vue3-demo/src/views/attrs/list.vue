<template>
        <h1>透传</h1>
        <attrsChildVue :a="a" :b="b" :c="c"></attrsChildVue>
</template>
<script>
import attrsChildVue from '../../components/attrs-child.vue'
export default {
    components:{attrsChildVue},
    data() {
        return {
            a:1,
            b:2,
            c:3
        }
    }
}
</script>