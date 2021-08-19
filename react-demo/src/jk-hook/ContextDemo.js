
import React,{ useContext,useCallback,useState } from "react";
const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee"
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222"
    }
  };
/**
 * 1. 创建,绑定到组件
 * 2. 子孙组件使用useContext获取变量并使用
 */
  // 1. 创建一个 Theme 的 Context
  const ThemeContext = React.createContext(themes.light);


  export default function ContextDemo() {
      
    const [theme,setTheme]=useState('light')

    const toggleTheme=useCallback(()=>{
      setTheme(theme=>theme==='light'?'dark':'light')
    },[])
    // 2. 整个应用使用 ThemeContext.Provider 作为根组件
    return (
      <ThemeContext.Provider value={themes[theme]}>
        <Toolbar />
        current theme {theme}
        <button onClick={toggleTheme}>toggle theme</button>
      </ThemeContext.Provider>
    );
  }
  
  // 在 Toolbar 组件中使用一个会使用 Theme 的 Button
  function Toolbar(props) {
    return (
      <div>
        <ThemedButton />
      </div>
    );
  }
  
  // 在 Theme Button 中使用 useContext 来获取当前的主题
  function ThemedButton() {
    const theme = useContext(ThemeContext);
    return (
      <button style={{
        background: theme.background,
        color: theme.foreground
      }}>
        I am styled by theme context!
      </button>
    );
  }