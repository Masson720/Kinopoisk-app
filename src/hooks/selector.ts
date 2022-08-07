// @ts-ignore
import {TypedUseSelectorHook, useSelector} from "react-redux";
// @ts-ignore
import {RootState} from "@/store/store";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;