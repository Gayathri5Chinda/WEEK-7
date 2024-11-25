import {atom} from "recoil";

//i have separately defined a state
export const countAtom = atom({

    //key is used to uniquely identify an atom
    key: "countAtom",
    default: 0
});
