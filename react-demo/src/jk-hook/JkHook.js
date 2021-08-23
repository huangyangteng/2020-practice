
import Count from './Count'
import SearchUserList from './SearchUserLis';
import './JkHook.css'
import { TextInputWithFocusButton } from './TextInputWithFocusButton';
import Timer from './Timer'
import ContextDemo from './ContextDemo';
import Counter from './custom-hook/Count';
import UserList from './custom-hook/UserLIst';
import { ScrollTop } from './custom-hook/ScrollTop';
import BlogList from './custom-hook/BlogList';
export default function JkHook(){
    return <div>
        <h1>自定义Hooks</h1>
        <h2>最简单的自定义hook,useCount</h2>
        <Counter></Counter>
        
        <h2>请求列表数据 useAsync</h2>
        <UserList></UserList>

        <h2>返回顶部</h2>
        <ScrollTop></ScrollTop>

        <h2>文章列表，hooks拆分模块</h2>
        <BlogList></BlogList>

        <hr></hr>
        <h1>自带的4个Hooks</h1>
        <h2>useCallback 缓存函数</h2>
        <Count></Count>
        <h2>useMemo 缓存计算得到的数据</h2>
        <SearchUserList></SearchUserList>
        <h2>useRef 保存和UI渲染无关的数据|获取DOM</h2>
        <Timer></Timer>
        <TextInputWithFocusButton></TextInputWithFocusButton>
        <h2>UseContext 定义全局状态</h2>
        <ContextDemo></ContextDemo>
    </div>
}