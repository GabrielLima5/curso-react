import { useSomeContext } from "../components/useContext";

import HookUseEffect from "../components/useEffect";
import HookUseReducer from "../components/useReducer";
import HookUseState from "../components/useState";
import HookUseRef from '../components/useRef'
import HookUseCallback from "../components/useCallback";
import HookUseMemo from '../components/useMemo'
import HookUseLayoutEffect from "../components/useLayoutEffect";
import HookUseImperativeHandle from "../components/useImperativeHandle";
import HookCustom from "../components/CustomHook";

export default function Home(){
    const { fruit } = useSomeContext()
    
    return(
        <div>
            <HookUseState />
            <HookUseReducer />
            <HookUseEffect />
            <hr />
            <h2>useContext</h2>
            <p>Veio lá da Context API: {fruit}</p>
            <HookUseRef />
            <HookUseCallback />
            <HookUseMemo />
            <HookUseLayoutEffect />
            <HookUseImperativeHandle />
            <HookCustom />
        </div>
    )
}