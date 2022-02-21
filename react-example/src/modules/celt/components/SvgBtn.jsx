import styles from './SvgBtn.less'
// export default function SvgBtn(){
//     return <div className={styles.square}>
//         <svg preserveAspectRatio={'none'}>
//             <rect >
//
//             </rect>
//         </svg>
//         <svg className={styles.testSvg}>
//             <rect></rect>
//         </svg>
//         <div className={styles.testRect}></div>
//     </div>
// }

export default function SvgBtn(){
    return <div>
        <svg className={styles.testSvg}>
            <rect></rect>
        </svg>
        <div className={styles.testRect}></div>
    </div>
}