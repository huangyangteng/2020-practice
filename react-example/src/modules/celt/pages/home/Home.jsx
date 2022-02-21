import homeStyles from './home.less'
import ModelPreview from "../../components/model-preview/ModelPreview";
export default function Home() {
    return <div className={homeStyles.home}>
            <ModelPreview></ModelPreview>
    </div>
}