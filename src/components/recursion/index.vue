<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-06-05 16:50:27
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-06-10 09:58:00
--> 
<template>
    <div>
        <Tree :recusiveData='recusiveData' />
    </div>
</template>
<script>
import Tree from './tree.vue'
    export default {
        components:{
            Tree
        },
        data() {
            return {
                recusiveData: [
                    {
                        name:'前端',
                        children:[
                            {
                                name:'css'
                            },
                            {
                                name:'js',
                                children:[
                                    {
                                        name:'权威指南'
                                    },
                                    {
                                        name:'小红书'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name:'后端',
                        children:[
                            {
                                name:'css1'
                            },
                            {
                                name:'js1',
                                children:[
                                    {
                                        name:'权威指南1'
                                    },
                                    {
                                        name:'小红书1'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>