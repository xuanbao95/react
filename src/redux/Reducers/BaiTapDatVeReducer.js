
const stateDefault = {
    danhSachGheDangDat: [
        {}
    ],
    tongTien: 0,
}


export const baiTapDatVeReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case "DAT_GHE": {
            //kiểm tra ghế có trong state.danhSachGheDangDat
            let danhSachMoi = [...state.danhSachGheDangDat];
            let index = danhSachMoi.findIndex(so => so.soGhe === action.thongTinGhe.soGhe)
            if (index !== -1) {
                danhSachMoi.splice(index, 1)
            } else {
                danhSachMoi.push(action.thongTinGhe)
            }
            state.danhSachGheDangDat = danhSachMoi;
            state.tongTien += action.thongTinGhe.gia;
            return { ...state };
        }
        case "XOA_GHE": {

            let danhSachMoi = [...state.danhSachGheDangDat];
            let index = danhSachMoi.findIndex(so => so.soGhe === action.soGhe)
            if (index !== -1) {
                danhSachMoi.splice(index, 1)
            }
            state.danhSachGheDangDat = danhSachMoi;
            return { ...state };
        }
        case "DAT_VE": {
            let danhSachGhe = [...state.danhSachGheDangDat];
            for (let i = 0; i < danhSachGhe.length; i) {
                danhSachGhe[i].daDat = true;
                danhSachGhe.splice(i, 1)

            }
            state.danhSachGheDangDat = danhSachGhe;
            state.tongTien = 0;
            return { ...state };
        }
        default: return { ...state };
    }

}