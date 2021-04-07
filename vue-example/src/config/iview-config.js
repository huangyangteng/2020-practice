import Vue from 'vue'
import '../assets/css/theme.less' //重置iview的主题色

import {
    Button,
    Input,
    MenuItem,
    Icon,
    Menu,
    Submenu,
    MenuGroup,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    Message,
    Form,
    FormItem,
    Select,
    Option,
    DatePicker,
    Table,
    Modal,
    CheckboxGroup,
    Checkbox,
    Tooltip,
    Progress,
    TimePicker,
    Spin,
    Poptip
} from 'view-design'

Vue.component('Button', Button)
Vue.component('Input', Input)
Vue.component('Select', Select)
Vue.component('Option', Option)
Vue.component('DatePicker', DatePicker)
Vue.component('CheckboxGroup', CheckboxGroup)
Vue.component('TimePicker', TimePicker)
Vue.component('Checkbox', Checkbox)

Vue.component('Icon', Icon)
Vue.component('Form', Form)
Vue.component('FormItem', FormItem)
Vue.component('Table', Table)
Vue.component('Tooltip', Tooltip)
Vue.component('Poptip', Poptip)
Vue.component('Progress', Progress)

Vue.component('MenuGroup', MenuGroup)
Vue.component('MenuItem', MenuItem)
Vue.component('Submenu', Submenu)
Vue.component('Menu', Menu)

Vue.component('Dropdown', Dropdown)
Vue.component('DropdownItem', DropdownItem)
Vue.component('DropdownMenu', DropdownMenu)

Vue.component('Modal', Modal)
Vue.component('Spin', Spin)

Vue.prototype.$Spin = Spin
Vue.prototype.$Message = Message
Vue.prototype.$Modal = Modal

Vue.prototype.$Message.config({
    duration: 3
})
