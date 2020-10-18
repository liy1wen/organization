import axios from './request'
/**
 * @desc    用户登录
 * @route   POST /api/v1/auth/login
 * @access  public
 * @params {"password": "123456","email": "18727623231@163.com"}
 */
const login = p => axios.post('/v1/auth/login', p)

/**
 * @desc    用户注册处
 * @route   POST /api/v1/auth/register
 * @access  public
 * @params {"password": "123456","email": "18727623231@163.com"}
 */
const register = p => axios.post('/v1/auth/register', p)

/**
 * @desc    修改密码
 * @route   PUT /api/v1/auth/me
 * @access  private
 * @params { "currentPassword": "123456","newPassword": "123456"}
 */
const updatepassword = p => axios.post('/v1/auth/updatepassword', p)

/**
 * @desc    获取个人信息
 * @route   GET /api/v1/auth/me
 * @access  private
 * @params 
 */
const getinfo = () => axios.get('/v1/auth/me')

/**
 * @desc    获取他人信息
 * @route   GET /api/v1/users/:id
 * @access  private
 * @params  id
 */
const getotherinfo = id => axios.get(`/v1/users/${id}`)

/**
 * @desc    创建用户
 * @route   PUT /api/v1/users
 * @access  private
 * @params  {"name": "liyw","email": "liyw@admin.com","role": "admin","password": "123456"}
 */
const createuser = p => axios.put('/v1/users', p)

/**
 * @desc    修改个人信息
 * @route   PUT /api/v1/auth/updatedetails
 * @access  private
 * @params  {"name": "李怡雯","email": "18727623200@163.com"}
 */
const updateinfo = p => axios.put('/v1/auth/updatedetails', p)

/**
 * @desc    获取用户列表
 * @route   GET /api/v1/users
 * @access  public
 * @params  
 */
const getuserlist = () => axios.get('/v1/users')

/**
 * @desc    修改他人信息
 * @route   PUT /api/v1/users/:id
 * @access  private
 * @params  {"email": "1872762323@163.com"}
 */
const updateotherinfo = (id, p) => axios.put(`/v1/users/${id}`, p)

/**
 * @desc    删除用户
 * @route   DELETE /api/v1/users/:id
 * @access  private
 * @params  id
 */
const deleteuser = id => axios.delete(`/v1/users/${id}`)

export default {
    login,
    register,
    updatepassword,
    getinfo,
    getotherinfo,
    createuser,
    updateinfo,
    getuserlist,
    updateotherinfo,
    deleteuser
}