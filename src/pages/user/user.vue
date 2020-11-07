<template>
    <div class="view_content">
        <el-breadcrumb separator-class="el-icon-arrow-right" class="f15">
            <el-breadcrumb-item :to="{ path: '/home' }">主页</el-breadcrumb-item>
            <el-breadcrumb-item>账号管理</el-breadcrumb-item>
            <el-breadcrumb-item>删除账号</el-breadcrumb-item>
        </el-breadcrumb>
        <el-row :gutter="20" class="mt20">
            <el-col :span="2">
                <el-input placeholder="请输入搜索的名字" suffix-icon="el-icon-search" v-model="searchValue"></el-input>
            </el-col>
            <el-col :span="1.5">
                <el-button type="primary">搜索</el-button>    
            </el-col>
            <el-col :span="2">
                <el-button type="primary" @click="addUserdialogVisible = true;addUserdialogTitle = '创建用户';addUserRuleForm = {}">创建用户</el-button>    
            </el-col>
        </el-row>
        <!-- 表格 -->
        <el-card class="mt20">
            <el-table
                class="f15"
                :data="userList"
                border
                stripe
                style="width: 100%">
                <el-table-column type="index" align="center">
                </el-table-column>
                <el-table-column
                prop="name"
                label="机构名称"
                align="center"
                >
                </el-table-column>
                <el-table-column
                prop="description"
                label="描述"
                align="center"
                >
                </el-table-column>
                <el-table-column
                prop="mobile"
                align="center"
                label="联系电话">
                </el-table-column>
                <el-table-column
                prop="address"
                align="center"
                label="地址">
                </el-table-column>
                <el-table-column
                prop="website"
                align="center"
                label="官网">
                </el-table-column>
                <el-table-column
                prop="email"
                align="center"
                label="邮箱">
                </el-table-column>
                <el-table-column
                prop="price"
                align="center"
                label="课程均价">
                </el-table-column>
                <el-table-column prop="courses" label="课程" align="center">
                </el-table-column>
                <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                        <el-tooltip effect="dark" content="编辑" placement="top">
                            <el-button type="primary" size="mini" icon="el-icon-edit" @click="editUser(scope.row,scope.$index)"></el-button>
                        </el-tooltip>
                        <el-tooltip effect="dark" content="删除" placement="top">
                            <el-button type="danger" size="mini" icon="el-icon-delete" @click="delUser(scope.row,scope.$index)"></el-button>
                        </el-tooltip>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
        <!-- 分页 -->
        <el-pagination
            class="mt20 tc"
            background
            layout="prev, pager, next"
            :total="1000">
        </el-pagination>
        <!-- 添加用户弹出框 -->
        <el-dialog
        :title="addUserdialogTitle"
        :visible.sync="addUserdialogVisible"
        width="30%"
        center
        @close="resetFields()">
            <el-form :model="addUserRuleForm" :rules="addUserRules" ref="addUserRuleForm" label-width="120px" class="demo-ruleForm">
                <el-form-item label="姓名" prop="username" label-width="60px">
                    <el-input v-model="addUserRuleForm.username"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email" label-width="60px">
                    <el-input v-model="addUserRuleForm.email"></el-input>
                </el-form-item>
                <el-form-item label="电话" prop="mobile" label-width="60px">
                    <el-input v-model="addUserRuleForm.mobile"></el-input>
                </el-form-item>
                <el-form-item label="角色" prop="role" label-width="60px">
                    <el-select v-model="addUserRuleForm.role" placeholder="请选择角色">
                        <el-option label="超级管理员" value="超级管理员"></el-option>
                        <el-option label="管理员" value="管理员"></el-option>
                        <el-option label="员工" value="员工"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="状态" prop="status" label-width="60px">
                    <el-switch v-model="addUserRuleForm.status"></el-switch>
                </el-form-item>
            </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="addUserdialogVisible = false">取消</el-button>
            <el-button type="primary" @click="addUser('addUserRuleForm')">确定</el-button>
        </span>
        </el-dialog>
    </div>
</template>
<script>
export default {
    data() {
        // 自定义邮箱验证
        var checkEmail = (rule, value, callback) => {
            if(/^\w+@[a-z0-9]+\.[a-z]+$/i.test(value)){
                return callback();
            }
            callback(new Error('请输入正确的邮箱'));
        };
        // 自定义手机号码验证
        var checkMobile = (rule, value, callback) => {
            if(/^1[345789]\d{9}$/.test(value)){
                return callback();
            }
            callback(new Error('请输入正确的电话号码'));
        };
        return {
            userList: [{
                name: 'Python0基础训练营',
                address: "深圳市南山区国人通信大厦2102",
                email: '18727623230@163.com',
                mobile: '18727623230',
                website: "https://www.thenewstep.cn",
                email: "27732357@qq.com",
                price: 58,
                courses: ["前端开发","数据挖掘","人工智能"],
                description: "本科以上学历,懂数据结构,理科优先,有一定的逻辑观念,有一定计算机功底,课程会从入门讲解,结合实战项目,最终达到企业的要求."
                }, {
                name: 'Python0基础训练营',
                address: "四川省成都市武侯区来福士T2办公区7层",
                email: '18727623230@163.com',
                mobile: '18727623230',
                website: "https://www.thenewstep.cn",
                email: "27732357@qq.com",
                price: 58,
                courses: ["前端开发","数据挖掘","人工智能"],
                description: "本科以上学历,懂数据结构,理科优先,有一定的逻辑观念,有一定计算机功底,课程会从入门讲解,结合实战项目,最终达到企业的要求."
                },{
                name: 'Python0基础训练营',
                address: "深圳市南山区国人通信大厦2102",
                email: '18727623230@163.com',
                mobile: '18727623230',
                website: "https://www.thenewstep.cn",
                email: "27732357@qq.com",
                price: 58,
                courses: ["前端开发","数据挖掘","人工智能"],
                description: "本科以上学历,懂数据结构,理科优先,有一定的逻辑观念,有一定计算机功底,课程会从入门讲解,结合实战项目,最终达到企业的要求."
                },{
                name: 'Python0基础训练营',
                address: "深圳市南山区国人通信大厦2102",
                email: '18727623230@163.com',
                mobile: '18727623230',
                website: "https://www.thenewstep.cn",
                email: "27732357@qq.com",
                price: 58,
                courses: ["前端开发","数据挖掘","人工智能"],
                description: "本科以上学历,懂数据结构,理科优先,有一定的逻辑观念,有一定计算机功底,课程会从入门讲解,结合实战项目,最终达到企业的要求."
                }],
            searchValue: '',//搜索关键字
            addUserdialogVisible: false,
            addUserdialogTitle: '添加机构',
            addUserRuleForm: {//添加用户信息
                username: '',
                email: '',
                mobile: '',
                role: '',
                status: false
            },
            addUserRules: {
                username: [
                    { required: true, message: '请输入姓名', trigger: 'blur' }
                ],
                email: [
                    { required: true,validator: checkEmail, trigger: 'blur' }
                ],
                mobile: [
                    { required: true,validator: checkMobile, trigger: 'blur' }
                ],
                role: [
                    { required: true, message: '请输入用户角色', trigger: 'blur' }
                ]
            },
            editUserIndex: '',//编辑用户索引
        }
    },
    created() {

    },
    methods: {
        // 修改状态
        changeStatus(row){
            console.log(row)
        },
        // 增加修改用户
        addUser(formName){
            this.$refs[formName].validate(valid =>{
                if(valid){
                    this.addUserdialogVisible = false;
                    if(this.addUserdialogTitle == '添加用户'){
                        this.userList.push(this.addUserRuleForm)
                        this.$message.success('添加成功')
                    }else{
                        // this.userList[this.editUserIndex] = this.addUserRuleForm;
                        this.userList.splice(this.editUserIndex,1,this.addUserRuleForm)
                    }
                }
            })
        },
        //关闭弹出框,重置表单
        resetFields(){
            // this.$refs['addUserRuleForm'].resetFields();
        },
        //删除用户
        delUser(row,index) {
            // console.log(row,index)
            this.$confirm('是否删除该用户?')
            .then(()=>{
                this.userList.splice(index,1)
                this.$message.success('删除成功')
            })
            .catch(() => {});
        },
        // 编辑用户
        editUser(row,index) {
            this.addUserdialogVisible = true;
            this.addUserdialogTitle = '修改用户信息';
            this.addUserRuleForm = row;
            this.editUserIndex = index;
        }
    },
}
</script>
<style lang="scss" scoped>
    .view_content {
        background: #ffffff;
        box-sizing: border-box;
        height: 100%;
        padding: 20px;
        .el-card {
            box-shadow: 1px 1px 1px rgba($color: #000000, $alpha: 0.15);
        }
        .el-dialog {
            background: red;
            .el-dialog__header {
                text-align: center !important;
            }
        }
    }
</style>