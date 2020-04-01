<template>
    <div class="view_content">
        <el-breadcrumb separator-class="el-icon-arrow-right" class="f15">
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
                class="f15"
                :data="tableData"
                border
                stripe
                style="width: 100%">
                <el-table-column type="index" align="center">
                </el-table-column>
                <el-table-column
                prop="name"
                label="姓名"
                align="center"
                >
                </el-table-column>
                <el-table-column
                prop="email"
                label="邮箱"
                align="center"
                >
                </el-table-column>
                <el-table-column
                prop="mobile"
                align="center"
                label="电话">
                </el-table-column>
                <el-table-column
                prop="role"
                align="center"
                label="角色">
                </el-table-column>
                <el-table-column label="状态" align="center">
                    <template slot-scope="scope">
                        <el-switch v-model="scope.row.status" @change="changeStatus(scope.row)"></el-switch>      
                    </template>
                </el-table-column>
                <el-table-column label="操作" align="center">
                    <template>
                        <el-tooltip effect="dark" content="编辑" placement="top">
                            <el-button type="primary" size="mini" icon="el-icon-edit"></el-button>
                        </el-tooltip>
                        <el-tooltip effect="dark" content="删除" placement="top">
                            <el-button type="danger" size="mini" icon="el-icon-delete"></el-button>
                        </el-tooltip>
                        <el-tooltip effect="dark" content="设置" placement="top">
                            <el-button type="warning" size="mini" icon="el-icon-setting"></el-button> 
                        </el-tooltip>
                    </template>
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
                name: 'Tom',
                email: '18727623230@163.com',
                mobile: '18727623230',
                role: '管理员',
                status: false
                }, {
                name: 'Rina',
                email: '18727623230@163.com',
                mobile: '15796524123',
                role: '管理员',
                status: false
                }, {
                name: 'Kim',
                email: '18727623230@163.com',
                mobile: '13985644121',
                role: '管理员',
                status: true
                }, {
                name: 'Joy',
                email: '18727623230@163.com',
                mobile: '18763255547',
                role: '超级管理员',
                status: false
            }],
            searchValue: '',
        }
    },
    methods: {
        changeStatus(row){
            console.log(row)
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