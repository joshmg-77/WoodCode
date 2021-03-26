import Editor from "./Editor";
import ButtonsWindow from "./ButtonsWindow"; 

/* Refact className for styled-components */

const Index = () => {
    return (
        <div className="primary-background exportCode">
            <ButtonsWindow />
            <Editor/>
        </div>
    );
}

export default Index;
