<template>
    <div>
        <el-table
                :data="tableData"
                border
                style="width: 100%">
            <el-table-column
                    fixed
                    prop="id"
                    label="编号"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="书名"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="author"
                    label="作者"
                    width="120">
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作"
                    width="100">
                <template slot-scope="scope">
                    <el-button @click="edit(scope.row)" type="text" size="small">修改</el-button>
                    <el-button @click="deletebook(scope.row)" type="text" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-pagination
                background
                layout="prev, pager, next"
                page-size="6"
                :total="total"
                @current-change="page"> <!--点击哪一页显示哪一页数据 通过@current-change来绑定-->
        </el-pagination>

    </div>
</template>

<script>
    export default {
        methods: {
            page(currentPage){
                const _this = this
                axios.get('http://localhost:8181/book/findAll/'+currentPage+'/6').then( (res)=> {
                    _this.tableData = res.data.content
                    _this.total = res.data.totalElements
                })
            },
            edit(row) {
                this.$router.push({
                    path: '/update',
                    query:{
                        id: row.id
                    }
                })
            },
            deletebook(row){
                const _this = this
                axios.delete('http://localhost:8181/book/deleteById/'+row.id).then( (res)=> {
                    _this.$alert('《'+row.name+'》删除成功！', '消息', {
                        confirmButtonText: '确定',
                        callback: action => {
                            window.location.reload()  //页面刷新
                        }
                    })
                })
            }
        },
        created() {
            const _this = this
            axios.get('http://localhost:8181/book/findAll/1/6').then( (res)=> {
                _this.tableData = res.data.content
                _this.total = res.data.totalElements
            })
        },
        data() {
            return {
                total: null,
                tableData: null
            }
        }
    }
</script>