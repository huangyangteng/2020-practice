
import Count from './Count'
import SearchUserList from './SearchUserLis';
import './JkHook.css'
import { TextInputWithFocusButton } from './TextInputWithFocusButton';
import Timer from './Timer'
import ContextDemo from './ContextDemo';
export default function JkHook(){
    return <div>
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