const getThemeColor = () => {
 const theme = typeof window !== "undefined" && window.__theme // p não quebrar o gatsby no build

 if(theme === 'light') return '#fff'
 if (theme === "dark") return "#16202c"

}

export default getThemeColor