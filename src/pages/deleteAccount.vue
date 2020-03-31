<template>
    <div class="view_content">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">主页</el-breadcrumb-item>
            <el-breadcrumb-item>账号管理</el-breadcrumb-item>
            <el-breadcrumb-item>删除账号</el-breadcrumb-item>
        </el-breadcrumb>
        <el-row :gutter="20">
            <el-col :span="5">
                <el-input placeholder="请输入搜索的名字" suffix-icon="el-icon-search" v-model="searchValue"></el-input>
            </el-col>
            <el-col :span="4">
                <el-button type="primary">搜索</el-button>    
            </el-col>
        </el-row>
        <el-card>
            <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                prop="date"
                label="Date"
                width="180">
                </el-table-column>
                <el-table-column
                prop="name"
                label="Name"
                width="180">
                </el-table-column>
                <el-table-column
                prop="address"
                label="Address">
                </el-table-column>
            </el-table>
        </el-card>
        <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
        </el-pagination>

    </div>
</template>
<script>
export default {
    data() {
        return {
            tableData: [{
                date: '2016-05-03',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles'
                }, {
                date: '2016-05-02',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles'
                }, {
                date: '2016-05-04',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles'
                }, {
                date: '2016-05-01',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles'
            }],
            searchValue: '',
        }
    },
    
}
</script>
<style lang="scss" scoped>
    .view_content{
        background: #ffffff;
        box-sizing: border-box;
        height: 100%;
        padding: 20px;
        .el-card{
            margin-top: 20px;
            box-shadow: 1px 1px 1px rgba($color: #000000, $alpha: 0.15);
        }
        .el-row{
            margin-top: 20px;
        }
        .el-pagination{
            margin-top: 20px;
            text-align: center;
        }
    }
</style>