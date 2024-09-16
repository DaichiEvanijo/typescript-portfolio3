// import { Link } from "react-router-dom"
// import { LinkProps } from "react-router-dom"
// LinkPropsはreact-router-domライブラリにおける型で、Linkコンポーネントに渡すことができるプロパティの型を定義している。この型を使うことで、Linkコンポーネントに対するプロパティの型安全性を確保することができる
// LinkPropsは、react-router-domのLinkコンポーネントが受け取るすべてのプロパティを含む型、これにtoプロパティ、className、style、onClickなど、Linkコンポーネントに適用できる属性が含まれる

// alternatively
// type ScrollToTopLinkProps ={
//   to:string, 
//   children:ReactNode,
//   [key:string]:any
// }


// const ScrollToTopLink = ({to, children, ...props}:LinkProps) => {
//   const handleClick = () => window.scrollTo(0,0)

//   return (
//     <Link to={to} onClick={handleClick}>{children}</Link>
//   )
// }

// export default ScrollToTopLink


// コンポーネントとして使うとき
{/* <ScrollToTopLink to="/">About<ScrollToTopLink> */}