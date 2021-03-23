import { combineReducers } from "redux";
const statDefault = {
    gioHang: [{
        maSP: 1,
        tenSP: "VinSmart Live",
        soLuong: 1,
        giaBan: 5700000,
        hinhAnh: "./img/vsphone.jpg",
    }]
}
const QuanLySinhVienState = {
    mangSinhVien: [{ maSV: 1, tenSV: "baobao", sdt: "0123456456", email: "baobao@" }]
}
const XucXac = {
    taiXiu: true,//true là xỉu (3=>11) false là tài (12=>)
    mangXucXac: [
        { ma: 1, img: "./img/imgGame/1.png" },
        { ma: 1, img: "./img/imgGame/1.png" },
        { ma: 1, img: "./img/imgGame/1.png" },
    ],
    soBanThang: 0,
    tongBanChoi: 0,
}
const rootReducer = combineReducers({
    //nơi chứa toàn bộ state của ứng dụng
    gioHangReducer: (state = statDefault, action) => {
        switch (action.type) {
            case "THEM_GIO_HANG": {
                let product = [...state.gioHang];
                let index = product.findIndex(sp => sp.maSP === action.productCart.maSP);
                if (index !== -1) {
                    product[index].soLuong += 1;
                } else {
                    product.push(action.productCart)
                }
                state.gioHang = product;
                return { ...state };
            }
            case 'XOA_GIO_HANG': {
                let product = [...state.gioHang];
                product.splice(action.index, 1);
                state.gioHang = product;
                return { ...state }
            }
            case 'XOA_GIO_HANG_MASP': {
                let product = [...state.gioHang];
                let index = product.findIndex(sp => sp.maSP === action.maSP);
                if (index !== -1) {
                    product.splice(action.index, 1);
                }

                state.gioHang = product;
                return { ...state }
            }
            case 'TANG_GIAM': {
                let { index, tangGiam } = action;
                let product = [...state.gioHang];
                if (tangGiam) {
                    product[index].soLuong += 1;
                } else {
                    product[index].soLuong -= 1;
                }
                state.gioHang = product;
                return { ...state }
            }
        }

        return { ...state };
    },
    mangSinhVien: (state = QuanLySinhVienState, action) => {
        switch (action.type) {
            case "THEM_SINH_VIEN": {
                let mangSinhVienCapNhat = [...state.mangSinhVien, action.sinhVien];
                state.mangSinhVien = mangSinhVienCapNhat;

                return { ...state }

            }
            default: {
                return { ...state };
            }
        }

    },
    playGame: (state = XucXac, action) => {
        console.log(action);
        switch (action.type) {
            case "BET_BET":
                state.taiXiu = action.taiXiu;
                return { ...state };
            case 'PLAY_GAME': {
                let mangNgauNhien = [];
                for (let i = 0; i < 3; i++) {
                    let soNgauNhien = Math.floor(Math.random() * 6) + 1;
                    //taoj 1 doi tuong ngau nhien tu soNgauNhien
                    let xucXacNgauNhien = { ma: soNgauNhien, img: `./ img /imgGame/${soNgauNhien}.png` };
                    mangNgauNhien.push(xucXacNgauNhien);

                };
                state.mangXucXac = mangNgauNhien;
                state.tongBanChoi += 1;
                //xu ly ban thang
                let tongSoDiem = mangNgauNhien.reduce((tongDiem, xucXac, index) => {
                    return tongDiem += xucXac.ma;
                }, 0)
                if ((tongSoDiem > 11 && state.taiXiu === true) || (tongSoDiem > 11 && state.taiXiu === false)) {
                    state.soBanThang += 1
                }
                return { ...state }
            }
            default: {
                return { ...state }
            }
        }
    }

})
export default rootReducer;