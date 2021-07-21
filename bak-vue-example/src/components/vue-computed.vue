<template>
    <section>
        <h1>curMember： {{curMember}}</h1>
        <h1>curMember： {{curMember2}}</h1>

       <button @click="selectMember">选中一个员工</button>
    </section>
</template>

<script>
export default {
    name: 'vue-computed',
    data() {
        return {
            depart: 'dev',
            memberId: 1,
            members: [
                { id: 0, name: '小明', depart: 'dev' },
                { id: 1, name: '小红', depart: 'dev' },
                { id: 2, name: '张三', depart: 'test' },
                { id: 3, name: '李四', depart: 'test' }
            ]
        }
    },
    computed: {
        curDepartMember() {
            return this.members.filter((item) => item.depart == this.depart)
        },
        curMember() {
            return this.members.find((item) => item.id == this.memberId)
        },
        curMember2(){
            return this.curDepartMember.find((item) => item.id == this.memberId)
        }
        
        
    },
    methods: {
        selectMember(){
            console.log('haha')
        }
    },
    created() {}
}
</script>

<style lang="less" scoped></style>
