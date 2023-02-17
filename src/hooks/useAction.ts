import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import ActionCreators from "../store/action-creator/";

export const useAction = () => {
    const dispatch = useDispatch();
    // console.log(ActionCreators);
    return bindActionCreators(ActionCreators, dispatch)
}