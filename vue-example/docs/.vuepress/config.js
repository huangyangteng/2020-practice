module.exports = {
    title: 'XXX项目文档',
    description: 'Just playing around',
    themeConfig: {
        nav: [
          { text: '基本信息', link: '/' },
          { text: '项目进度', link: '/schedule' },
          { text: '自定义组件', link: '/components' },
          { text: '工具函数', link: '/tools' },
          { text: '复杂逻辑处理', link: '/controller/' },
          { text: '部署方案', link: '/build/' },
        ],
        sidebar:'auto',//侧边栏显示所有的标题连接
      }
  }