import { takeEvery, put } from "redux-saga/effects";
import { Produ_list,Produ_list1,Produ_list2,Produ_list3,Produ_list4,Produ_list5,Produ_list6,Produ_list7,Produ_list8,Produ_list9,SET_produ_list,SET_produ_list1,SET_produ_list2, SET_produ_list3,SET_produ_list4,SET_produ_list5,SET_produ_list6,SET_produ_list7,SET_produ_list8,SET_produ_list9 } from "./Constant";


function* oneProd(){
    let data =yield fetch('http://localhost:3000/Wallets');
    data=yield data.json();
    console.log('saga',data)
    yield put({type:SET_produ_list, data:data})

}

function* twoprod(){
    let data =yield fetch('http://localhost:3000/Belts');
    data=yield data.json();
    console.log('saga',data)
    yield put({type:SET_produ_list1, data:data})
}

function* threeprod(){
    let data =yield fetch('http://localhost:3000/Leathergloves');
    data=yield data.json();
    console.log('saga',data)
    yield put({type:SET_produ_list2, data:data})
}

function* fourprod(){
    let data =yield fetch('http://localhost:3000/Leatherjackets');
    data=yield data.json();
    console.log('saga',data)
    yield put({type:SET_produ_list3, data:data})
}

function* fiveprod(){
    let data =yield fetch('http://localhost:3000/Leatherkeychains');
    data=yield data.json();
    console.log('saga',data)
    yield put({type:SET_produ_list4, data:data})
}

function* sixprod(){
    let data =yield fetch('http://localhost:3000/Leathernotebookcovers');
    data=yield data.json();
    console.log('saga',data)
    yield put({type:SET_produ_list5, data:data})
}

function* sevenprod(){
    let data =yield fetch('http://localhost:3000/Leatherphonecases');
    data=yield data.json();
    console.log('saga',data)
    yield put({type:SET_produ_list6, data:data})
}

function* eightprod(){
    let data =yield fetch('http://localhost:3000/Leathershoes');
    data=yield data.json();
    console.log('saga',data)
    yield put({type:SET_produ_list7, data:data})
}

function* nineprod(){
    let data =yield fetch('http://localhost:3000/Leatherbag');
    data=yield data.json();
    console.log('saga',data)
    yield put({type:SET_produ_list8, data:data})
}

function* tenprod(){
    let data =yield fetch('http://localhost:3000/Leatherwatchstraps');
    data=yield data.json();
    console.log('saga',data)
    yield put({type:SET_produ_list9, data:data})
}

function* ProductSaga(){
yield takeEvery(Produ_list,oneProd)
yield takeEvery(Produ_list1,twoprod)
yield takeEvery(Produ_list2,threeprod)
yield takeEvery(Produ_list3,fourprod)
yield takeEvery(Produ_list4,fiveprod)
yield takeEvery(Produ_list5,sixprod)
yield takeEvery(Produ_list6,sevenprod)
yield takeEvery(Produ_list7,eightprod)
yield takeEvery(Produ_list8,nineprod)
yield takeEvery(Produ_list9,tenprod)


}

export default ProductSaga;