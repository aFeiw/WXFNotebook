//混入Mixins
/**
 * 作用: 复用我们的代码;
 * 定义一个mixins对象,然后在复用的组件内进行注册:mixins:[xxx,放入复用的对象]
 *
 * 如果组件内部注册了混用的属性，则优先组件内部的使用;
 *
 *  */
// 插槽
/***
 * 默认 插槽
 * 具名插槽
 * <temple v-solt:header>
 * 作用域插槽
 * 插槽作用域传参
 * 解释:我们在子组件定义一个插槽slot,子组件的数据父组件使用
 * <slot :uer="user">
 * <template  v-solt:"{user}">
 * {{user}}
 *
 */
// 过滤器
/**
 * 定义一个对象
 *
 * 在组件内注册
 * {{status | setAtatus}}
 * export deafault {
 * data(){
 *    return {
 *    filters:setAtatus
 * }
 * }
 *
 * }
 */
// 修饰符
